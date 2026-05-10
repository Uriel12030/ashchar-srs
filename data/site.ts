export const site = {
  name: "Ashchar",
  url: "https://ashchar.com",
  email: "info@ashchar.com",
  whatsapp: "+972500000000",
  linkedin: "https://www.linkedin.com/company/ashchar",
  location: "Israel",
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
