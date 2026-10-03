import { expect, it } from "vitest";
import { validateContact } from "@/lib/validation";
import { projectTypes, budgets, timelines } from "@/lib/inquiry";
const base = {
  name: " Alex Example ",
  email: " ALEX@example.com ",
  message: "We need an operations system.",
};
it("normalizes a fully qualified chatbot inquiry", () => {
  expect(
    validateContact({
      ...base,
      company: " Northline ",
      projectType: projectTypes[0],
      budget: budgets[1],
      timeline: timelines[1],
      source: "chatbot",
    }).data,
  ).toMatchObject({
    name: "Alex Example",
    email: "alex@example.com",
    company: "Northline",
    source: "chatbot",
  });
});
it.each(["projectType", "budget", "timeline", "source"])(
  "rejects unknown %s values",
  (key) => {
    expect(validateContact({ ...base, [key]: "untrusted" }).error).toBeTruthy();
  },
);
it.each(["company", "projectType", "budget", "timeline", "source"])(
  "rejects non-string %s",
  (key) => {
    expect(
      validateContact({ ...base, [key]: { value: "x" } }).data,
    ).toBeUndefined();
  },
);
it("rejects overlong company names", () => {
  expect(
    validateContact({ ...base, company: "x".repeat(161) }).data,
  ).toBeUndefined();
});
it("keeps legacy inquiries compatible", () => {
  expect(validateContact(base).data).toMatchObject({
    source: "inquiry",
    company: "",
    projectType: "",
  });
});
