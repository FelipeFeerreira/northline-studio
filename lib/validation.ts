import { projectTypes, budgets, timelines } from "./inquiry";
export type ContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
  company?: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  source?: string;
};
export function validateContact(input: unknown): {
  data?: ContactData;
  error?: string;
} {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { error: "Please provide your contact details." };
  const v = input as Record<string, unknown>;
  for (const key of ["name", "email", "message"])
    if (typeof v[key] !== "string")
      return { error: "Name, email, and message are required." };
  for (const key of [
    "phone",
    "website",
    "company",
    "projectType",
    "budget",
    "timeline",
    "source",
  ])
    if (v[key] !== undefined && typeof v[key] !== "string")
      return { error: "Invalid project details." };
  const value = (key: string) => ((v[key] as string) || "").trim();
  const data: ContactData = {
    name: value("name"),
    email: value("email").toLowerCase(),
    phone: value("phone"),
    message: value("message"),
    website: value("website"),
    company: value("company"),
    projectType: value("projectType"),
    budget: value("budget"),
    timeline: value("timeline"),
    source: value("source") || "inquiry",
  };
  if (data.name.length < 2 || data.name.length > 100)
    return { error: "Name must be between 2 and 100 characters." };
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    return { error: "Please enter a valid email address." };
  if (
    data.phone.length > 40 ||
    (data.phone && !/^[+\d\s().-]{5,40}$/.test(data.phone))
  )
    return { error: "Please enter a valid phone number." };
  if (data.message.length < 10 || data.message.length > 5000)
    return { error: "Message must be between 10 and 5,000 characters." };
  if (data.company!.length > 160)
    return { error: "Company must be at most 160 characters." };
  const choices: Record<string, readonly string[]> = {
    projectType: projectTypes,
    budget: budgets,
    timeline: timelines,
    source: ["inquiry", "chatbot"],
  };
  for (const [key, options] of Object.entries(choices))
    if (value(key) && !options.includes(value(key)))
      return { error: `Please choose a valid ${key}.` };
  return { data };
}
