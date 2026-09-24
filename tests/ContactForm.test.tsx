import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, expect, it, vi } from "vitest";
import ContactForm from "@/components/ContactForm";
import { Providers } from "@/components/Providers";
afterEach(() => vi.unstubAllGlobals());
async function fill() {
  const user = userEvent.setup();
  render(
    <Providers>
      <ContactForm />
    </Providers>,
  );
  await user.type(screen.getByLabelText(/Name/), "Alex Example");
  await user.type(screen.getByLabelText(/Work email/), "alex@example.com");
  await user.type(
    screen.getByLabelText(/About your project/),
    "We need a new website for our business.",
  );
  return user;
}
it("submits and confirms a persisted inquiry", async () => {
  const fetchMock = vi
    .fn()
    .mockResolvedValue({ ok: true, json: async () => ({ success: true }) });
  vi.stubGlobal("fetch", fetchMock);
  const user = await fill();
  await user.click(screen.getByRole("button", { name: /Send your inquiry/ }));
  await waitFor(() =>
    expect(screen.getByRole("status")).toHaveTextContent(
      "your message has been saved",
    ),
  );
  expect(JSON.parse(fetchMock.mock.calls[0][1].body).email).toBe(
    "alex@example.com",
  );
  expect(screen.getByLabelText(/Name/)).toHaveValue("");
});
it("retains the inquiry when the server fails", async () => {
  vi.stubGlobal(
    "fetch",
    vi
      .fn()
      .mockResolvedValue({
        ok: false,
        json: async () => ({ error: "Please try again." }),
      }),
  );
  const user = await fill();
  await user.click(screen.getByRole("button", { name: /Send your inquiry/ }));
  expect(await screen.findByRole("alert")).toHaveTextContent(
    "Please try again.",
  );
  expect(screen.getByLabelText(/Name/)).toHaveValue("Alex Example");
});
