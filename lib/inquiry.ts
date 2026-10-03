export const projectTypes = [
  "Web app / SaaS",
  "AI / chatbot",
  "Workflow automation",
  "Dashboard",
  "API / CRM integration",
  "Custom system",
] as const;
export const budgets = [
  "Under $5k",
  "$5k–$15k",
  "$15k–$30k",
  "$30k+",
  "Let's define it",
] as const;
export const timelines = [
  "Within a month",
  "1–3 months",
  "3–6 months",
  "Exploring options",
] as const;
export async function submitInquiry(data: unknown) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json().catch(() => null);
  if (!response.ok || !result?.success)
    throw new Error(
      result?.error || "Unable to save your inquiry. Please try again.",
    );
  return result;
}
