const PHONE = "919977630730";

const MESSAGES: Record<string, string> = {
  default: "Hi, I want financial consultation from Jain Financial",
  loan: "Hi, I need help with a Loan application",
  investment: "Hi, I want Investment Advisory guidance",
  realestate: "Hi, I need Real Estate financial advice",
  funding: "Hi, I'm looking for Private Funding / Startup Capital",
  popup: "Hi, I saw your free loan report offer. Please help me.",
  form: "Hi, I just submitted a form on your website. Please get in touch.",
};

export function getWhatsAppUrl(key: string = "default"): string {
  const message = MESSAGES[key] || MESSAGES.default;
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`;
}

export { PHONE, MESSAGES };
