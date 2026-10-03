import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it, vi } from "vitest";
import DashboardDemo from "@/components/DashboardDemo";
import SystemMap from "@/components/SystemMap";
import Chatbot from "@/components/Chatbot";
import { Providers } from "@/components/Providers";
afterEach(() => vi.unstubAllGlobals());
it("changes architecture details with keyboard-operable buttons", async () => {
  const user = userEvent.setup();
  render(<SystemMap />);
  await user.click(screen.getByRole("button", { name: /CRM/ }));
  expect(screen.getByText(/An integration could/)).toBeVisible();
});
it("filters demo leads, changes the chart, and respects disabled automation", async () => {
  const user = userEvent.setup();
  render(<DashboardDemo />);
  await user.selectOptions(
    screen.getByLabelText("Demo reporting period"),
    "30 days",
  );
  expect(screen.getByRole("img", { name: /30 days/ })).toBeVisible();
  await user.click(screen.getByRole("button", { name: /^Leads/ }));
  await user.type(screen.getByLabelText("Search sample leads"), "Alex");
  expect(screen.getByText("Alex Morgan")).toBeVisible();
  expect(screen.queryByText("Sam Rivera")).not.toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "Automations" }));
  await user.click(screen.getByRole("switch"));
  expect(
    screen.getByRole("button", { name: /Run sample workflow/ }),
  ).toBeDisabled();
  await user.click(screen.getByRole("switch"));
  await user.click(screen.getByRole("button", { name: /Run sample workflow/ }));
  expect(screen.getByText("Sample run #1 completed")).toBeVisible();
  expect(screen.getByText(/No CRM record or message sent/)).toBeVisible();
});
it("qualifies a visitor, preserves a failed brief, and saves only on submission", async () => {
  const user = userEvent.setup();
  const fetchMock = vi
    .fn()
    .mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: "Please retry." }),
    })
    .mockResolvedValueOnce({ ok: true, json: async () => ({ success: true }) });
  vi.stubGlobal("fetch", fetchMock);
  render(
    <Providers>
      <Chatbot />
    </Providers>,
  );
  await user.click(
    screen.getByRole("button", { name: "Open project assistant" }),
  );
  const dialog = within(screen.getByRole("dialog"));
  await user.click(dialog.getByRole("button", { name: /Dashboard/ }));
  await user.click(dialog.getByRole("button", { name: /Under/ }));
  await user.click(dialog.getByRole("button", { name: /Within a month/ }));
  expect(fetchMock).not.toHaveBeenCalled();
  await user.type(dialog.getByLabelText(/Name/), "Alex Example");
  await user.type(dialog.getByLabelText(/Work email/), "alex@example.com");
  await user.type(
    dialog.getByLabelText(/About your project/),
    "We need an operations dashboard.",
  );
  await user.click(dialog.getByRole("button", { name: /Send your inquiry/ }));
  expect(await dialog.findByRole("alert")).toHaveTextContent("Please retry.");
  expect(dialog.getByLabelText(/Name/)).toHaveValue("Alex Example");
  await user.click(dialog.getByRole("button", { name: /Send your inquiry/ }));
  expect(await dialog.findByText(/your message has been saved/)).toBeVisible();
  expect(JSON.parse(fetchMock.mock.calls[1][1].body)).toMatchObject({
    source: "chatbot",
    projectType: "Dashboard",
    budget: "Under $5k",
    timeline: "Within a month",
  });
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: "Open project assistant" }),
  ).toHaveFocus();
});

it("retains assistant drafts when minimized and closes with Escape from outside", async () => {
  const user = userEvent.setup();
  render(<Providers><Chatbot /></Providers>);
  await user.click(screen.getByRole("button", { name: "Open project assistant" }));
  await user.click(screen.getByRole("button", { name: /Dashboard/ }));
  await user.click(screen.getByRole("button", { name: /Under/ }));
  await user.click(screen.getByRole("button", { name: /Within a month/ }));
  expect(screen.getByLabelText(/Name/)).toHaveFocus();
  await user.type(screen.getByLabelText(/Name/), "Draft name");
  await user.click(screen.getByRole("button", { name: "Close assistant" }));
  await user.click(screen.getByRole("button", { name: "Open project assistant" }));
  expect(screen.getByLabelText(/Name/)).toHaveValue("Draft name");
  screen.getByRole("button", { name: "Close project assistant" }).focus();
  await user.keyboard("{Escape}");
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
