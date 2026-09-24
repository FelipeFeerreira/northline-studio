import { render, screen } from "@testing-library/react";
import { expect, it } from "vitest";
import Hero from "@/components/Hero";
it("shows the core value proposition and a contact CTA", () => {
  render(<Hero />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Better websites.Smarter systems.Room to grow.",
  );
  expect(
    screen.getByRole("link", { name: /let’s build something/i }),
  ).toHaveAttribute("href", "/contact");
});
