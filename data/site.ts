export const site = {
  name: "Ashchar",
  legalName: "Ashchar Ltd.",
  url: "https://ashcharops.com",
  email: "office@ashchar.com",
  phone: "+972 52-377-7635",
  whatsapp: "+972523777635",
  linkedin: "https://www.linkedin.com/company/ashchar",
  location: "Israel",
  contactName: "Isaac",
  sam: {
    uei: "VJ23VL3BNJL8",
    ncage: "7006A",
    status: "Active",
  },
};

export const whatsappLink = (msg?: string) => {
  const num = site.whatsapp.replace(/[^0-9]/g, "");
  return msg
    ? `https://wa.me/${num}?text=${encodeURIComponent(msg)}`
    : `https://wa.me/${num}`;
};

export const mailto = (subject?: string) =>
  subject
    ? `mailto:${site.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${site.email}`;

export const telLink = () => `tel:${site.phone.replace(/[^0-9+]/g, "")}`;
