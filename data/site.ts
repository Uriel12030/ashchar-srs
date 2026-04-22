export const site = {
  name: "Ashchar",
  fullName: "Ashchar Ltd.",
  tagline: "Your Mission, Our Logistics.",
  description:
    "Rapid logistics, infrastructure, accommodation, and operational setup solutions across Israel for government, defense, and private sector clients.",
  shortDescription:
    "Fast-response accommodation, infrastructure, equipment, and field support solutions across Israel.",
  url: "https://ashchar.com",
  location: "Israel",
};

export const contact = {
  email:
    process.env.NEXT_PUBLIC_EMAIL ?? "info@ashchar.com",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "+972-3-000-0000",
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "+972500000000",
};

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
};

export const mailtoLink = (subject?: string) => {
  if (!subject) return `mailto:${contact.email}`;
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
};

export const telLink = () => `tel:${contact.phone.replace(/[^0-9+]/g, "")}`;
