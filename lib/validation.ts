export type ContactData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  website?: string;
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
  if (
    (v.phone !== undefined && typeof v.phone !== "string") ||
    (v.website !== undefined && typeof v.website !== "string")
  )
    return { error: "Invalid contact details." };
  const data = {
    name: (v.name as string).trim(),
    email: (v.email as string).trim().toLowerCase(),
    phone: ((v.phone as string) || "").trim(),
    message: (v.message as string).trim(),
    website: ((v.website as string) || "").trim(),
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
  return { data };
}
