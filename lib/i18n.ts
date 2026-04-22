import type { IconName } from "@/components/Icons";

export type Locale = "en" | "he";

export const locales: Locale[] = ["en", "he"];

export const localeConfig: Record<Locale, { name: string; shortCode: string; dir: "ltr" | "rtl" }> = {
  en: { name: "English", shortCode: "EN", dir: "ltr" },
  he: { name: "עברית", shortCode: "עב", dir: "rtl" },
};

export type NavItem = { label: string; href: string };

export type CapabilityGroup = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: IconName;
  scope: string[];
};

export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  icon: IconName;
};

export type Dict = {
  locale: Locale;
  dir: "ltr" | "rtl";
  home: string;
  nav: NavItem[];
  contactLabel: string;
  common: {
    index: string;
    scope: string;
    directChannels: string;
    sendMessage: string;
    sending: string;
    messageReceived: string;
    messageReceivedBody: string;
    sendAnother: string;
    fallbackError: string;
    openEmail: string;
    fieldRequired: string;
    validEmail: string;
  };
  hero: {
    tagline: string;
    badge: string;
    titleLine1: string;
    titleLine2: string;
    description: string;
    supportingLine: string;
    coordsLabel: string;
  };
  operationalScale: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: { value: string; label: string; note: string }[];
  };
  valueStrip: { title: string; description: string }[];
  capabilityGroups: {
    eyebrow: string;
    title1: string;
    title2: string;
    intro: string;
    groups: CapabilityGroup[];
  };
  operationalFlow: {
    eyebrow: string;
    titleStart: string;
    titleAccent: string;
    description: string;
    nodes: { icon: IconName; label: string; note: string }[];
  };
  howWeOperate: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    items: { step: string; title: string; description: string }[];
  };
  about: {
    pageEyebrow: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    companyEyebrow: string;
    companyTitle: string;
    companyParagraphs: string[];
    scaleEyebrow: string;
    scaleTitle: string;
    scaleDescription: string;
    scaleItems: { value: string; text: string }[];
    principlesEyebrow: string;
    principlesTitle: string;
    principlesDescription: string;
  };
  services: {
    pageEyebrow: string;
    pageTitleStart: string;
    pageTitleAccent: string;
    pageDescription: string;
    services: Service[];
  };
  contact: {
    pageEyebrow: string;
    pageTitle: string;
    pageDescription: string;
    channelsEyebrow: string;
    channelsTitle: string;
    channels: { label: string; value: string; icon: IconName; kind: "email" | "phone" | "whatsapp" }[];
    coverageText: string;
    messageEyebrow: string;
    messageTitle: string;
    messageDescription: string;
    form: {
      name: string;
      namePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      requirement: string;
      requirementPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      requirementOptions: string[];
    };
  };
  footer: {
    company: string;
    services: string;
    allServices: string;
    contact: string;
    rights: string;
    descriptor: string;
  };
  notFound: {
    heading: string;
    body: string;
    home: string;
    contact: string;
  };
};

const en: Dict = {
  locale: "en",
  dir: "ltr",
  home: "/",
  contactLabel: "Contact",
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  common: {
    index: "INDEX",
    scope: "SCOPE",
    directChannels: "CHANNELS",
    sendMessage: "Send message",
    sending: "Sending…",
    messageReceived: "Message received",
    messageReceivedBody:
      "Thank you — your message has been received. We will respond in due course.",
    sendAnother: "Send another message",
    fallbackError:
      "We couldn't submit the form automatically. Please email us directly.",
    openEmail: "Open email",
    fieldRequired: "Name, email, and message are required.",
    validEmail: "Please provide a valid email address.",
  },
  hero: {
    tagline: "Ashchar · Israel",
    badge: "Ashchar · Israel",
    titleLine1: "Your Mission,",
    titleLine2: "Our Logistics.",
    description:
      "Ashchar provides accommodation, infrastructure, equipment, and field support — coordinated across disciplines for government, defense, and private sector operations across Israel.",
    supportingLine:
      "Managing large-scale fleets, housing, and infrastructure across Israel.",
    coordsLabel: "ISRAEL · 31.7683°N 35.2137°E",
  },
  operationalScale: {
    eyebrow: "/ OPERATIONAL SCALE",
    title: "Current operational footprint.",
    description:
      "A snapshot of the scale currently under coordination across Israel.",
    metrics: [
      { value: "100+", label: "Vehicles", note: "Active rental fleet across Israel" },
      { value: "80+", label: "Heavy equipment units", note: "Construction and engineering machinery" },
      { value: "600+", label: "Housing units", note: "Under management" },
      { value: "$20M+", label: "Annual procurement", note: "Volume across services" },
    ],
  },
  valueStrip: [
    { title: "Rapid Response", description: "Fast mobilization for urgent operational needs." },
    { title: "End-to-End Execution", description: "From sourcing to full on-site delivery." },
    { title: "Nationwide Coverage", description: "Operational capability across Israel." },
    { title: "Government & Commercial Ready", description: "Supporting both public and private sector operations." },
  ],
  capabilityGroups: {
    eyebrow: "/ CAPABILITIES",
    title1: "Three capability groups.",
    title2: "One coordinated partner.",
    intro:
      "Our services are organized around three capability groups. Together they cover the full scope of an operational deployment in Israel.",
    groups: [
      {
        id: "accommodation",
        number: "01",
        title: "Accommodation",
        summary:
          "Ready-to-occupy living solutions for teams arriving or deployed in Israel.",
        icon: "bed",
        scope: [
          "Hotels and short-term bookings",
          "Serviced apartments",
          "Ready-to-use living solutions",
          "Modular housing units",
        ],
      },
      {
        id: "infrastructure",
        number: "02",
        title: "Infrastructure & Site Setup",
        summary:
          "Offices, bases, and operational compounds — with the infrastructure to run them.",
        icon: "building",
        scope: [
          "Offices, bases, and operational compounds",
          "Modular structures and containers",
          "Generators, HVAC, and electrical infrastructure",
          "Communications and connectivity support",
        ],
      },
      {
        id: "equipment-support",
        number: "03",
        title: "Equipment & Operational Support",
        summary:
          "Machinery, vehicles, and on-site services that keep operations running.",
        icon: "crane",
        scope: [
          "Heavy equipment and engineering machinery",
          "Vehicles, transport, and logistics",
          "Portable sanitation and maintenance",
          "Field support and regulatory coordination",
        ],
      },
    ],
  },
  operationalFlow: {
    eyebrow: "/ PROCESS",
    titleStart: "From requirement to an",
    titleAccent: "operational site.",
    description:
      "A single coordinated workflow — from the initial requirement through to a functioning operational setup on the ground.",
    nodes: [
      { icon: "document", label: "Requirement", note: "Scope · Location · Timeline" },
      { icon: "bed", label: "Accommodation", note: "Teams housed and ready" },
      { icon: "bolt", label: "Infrastructure", note: "Site utilities in place" },
      { icon: "truck", label: "Equipment & Logistics", note: "Machinery and transport" },
      { icon: "shield", label: "Operational Site", note: "Handover and execution" },
    ],
  },
  howWeOperate: {
    eyebrow: "/ HOW WE OPERATE",
    title: "Structured execution for operational environments.",
    description:
      "The principles that shape how we scope, coordinate, and deliver on the ground.",
    items: [
      { title: "Rapid response timelines", description: "Requirements are reviewed quickly and scoped within a clear, structured timeframe." },
      { title: "Local execution network", description: "An established network of suppliers, operators, and authorities across Israel." },
      { title: "Integrated delivery", description: "Accommodation, infrastructure, equipment, and support coordinated under one point of contact." },
      { title: "Multi-disciplinary capability", description: "Structured to handle requirements that span multiple operational domains." },
      { title: "International working standards", description: "Documentation, communication, and workflows aligned with international counterparties." },
      { title: "Operational focus", description: "Our work is measured by on-the-ground delivery, not by documentation." },
    ],
  },
  howItWorks: {
    eyebrow: "/ ENGAGEMENT",
    title: "A clear path from requirement to delivery.",
    items: [
      { step: "01", title: "Send Requirement", description: "Share the outline of your need — scope, location, timeline. Minimal information is enough to start." },
      { step: "02", title: "Rapid Review", description: "We review feasibility, availability, and approach within hours, not days." },
      { step: "03", title: "Structured Proposal", description: "A clear proposal: scope, pricing, timeline, and responsibilities — with no ambiguity." },
      { step: "04", title: "Delivery & Setup", description: "Coordinated execution on the ground — sourcing, delivery, installation, and handover." },
      { step: "05", title: "Ongoing Support", description: "Continued support and adjustments throughout the operational lifecycle." },
    ],
  },
  about: {
    pageEyebrow: "/ ABOUT",
    pageTitleStart: "An Israeli operational partner",
    pageTitleAccent: "for structured delivery.",
    pageDescription:
      "Ashchar coordinates multi-disciplinary operational requirements in Israel — from a single service to a full end-to-end deployment.",
    companyEyebrow: "/ COMPANY",
    companyTitle: "Who we are.",
    companyParagraphs: [
      "Ashchar is an Israeli company focused on operational delivery across accommodation, infrastructure, logistics, equipment, and field support.",
      "We work with government entities, international organizations, and private companies that require practical execution in Israel.",
      "Our role is to translate complex or multi-disciplinary requirements into coordinated, real-world solutions — delivered on the ground through an established local network.",
    ],
    scaleEyebrow: "/ OPERATIONAL SCALE",
    scaleTitle: "Today, Ashchar manages:",
    scaleDescription: "A snapshot of the scale currently under coordination.",
    scaleItems: [
      { value: "100+", text: "Vehicles" },
      { value: "80+", text: "Heavy equipment units" },
      { value: "600+", text: "Housing units" },
      { value: "$20M+", text: "Annual procurement volume" },
    ],
    principlesEyebrow: "/ OPERATING PRINCIPLES",
    principlesTitle: "How we work.",
    principlesDescription:
      "The principles that shape how we scope, coordinate, and deliver.",
  },
  services: {
    pageEyebrow: "/ SERVICES",
    pageTitleStart: "Operational services",
    pageTitleAccent: "across Israel.",
    pageDescription:
      "A complete view of the services Ashchar provides — from accommodation and site setup through equipment, logistics, and regulatory support.",
    services: [
      {
        slug: "immediate-accommodation-solutions",
        title: "Immediate Accommodation Solutions",
        shortDescription: "Hotels, serviced apartments, and ready-to-use living solutions.",
        description:
          "Ready-to-occupy accommodation for teams of any size, sourced and coordinated across Israel. We handle availability, contracts, and on-the-ground logistics so your personnel can focus on the mission.",
        capabilities: [
          "Hotel blocks and short-term bookings",
          "Furnished serviced apartments",
          "Long-stay residential solutions",
          "Catering and housekeeping coordination",
          "Rapid mobilization for urgent arrivals",
        ],
        icon: "bed",
      },
      {
        slug: "office-base-operational-site-setup",
        title: "Office, Base & Operational Site Setup",
        shortDescription: "End-to-end site setup including infrastructure and layout.",
        description:
          "Turnkey setup of operational sites, forward offices, and field bases. From site selection to a fully functional, connected, and furnished environment ready for day-one operation.",
        capabilities: [
          "Site surveys and layout planning",
          "Furniture, IT, and connectivity fit-out",
          "Utilities coordination and infrastructure",
          "Secure perimeter and access control",
          "Integrated project management",
        ],
        icon: "building",
      },
      {
        slug: "heavy-equipment-construction-machinery",
        title: "Heavy Equipment & Construction Machinery",
        shortDescription: "Rental or procurement of heavy machinery.",
        description:
          "Sourcing, rental, or procurement of construction and industrial machinery for short-term deployments and full-scale operations. Delivered to site with operators and support when required.",
        capabilities: [
          "Excavators, loaders, bulldozers, cranes",
          "Forklifts and material handling",
          "Generators and compressors",
          "Certified operators on request",
          "Transport and redeployment between sites",
        ],
        icon: "crane",
      },
      {
        slug: "modular-buildings-temporary-structures",
        title: "Modular Buildings & Temporary Structures",
        shortDescription: "Container offices, housing units, and field structures.",
        description:
          "Modular and prefabricated units supplied, delivered, and installed. Scalable from a single office container to full modular compounds with living, working, storage, and service spaces.",
        capabilities: [
          "Office, living, and sanitary containers",
          "Multi-unit modular compounds",
          "Tents, canopies, and soft structures",
          "Site foundations and installation",
          "Relocation and decommissioning",
        ],
        icon: "container",
      },
      {
        slug: "power-hvac-infrastructure",
        title: "Power, HVAC & Infrastructure",
        shortDescription: "Generators, power distribution, and environmental systems.",
        description:
          "Reliable power and environmental systems for temporary and permanent operations. Sized, delivered, and maintained to keep critical operations running without interruption.",
        capabilities: [
          "Diesel generators and fuel logistics",
          "Power distribution, cabling, and UPS",
          "HVAC and climate control",
          "Water, sanitation, and waste systems",
          "Preventive maintenance and on-call service",
        ],
        icon: "bolt",
      },
      {
        slug: "vehicles-transport-logistics",
        title: "Vehicles, Transport & Logistics",
        shortDescription: "Vehicle rental and logistics coordination.",
        description:
          "Fleet sourcing, transport, and movement coordination across Israel. From a single executive vehicle to full transport operations for personnel, cargo, and equipment.",
        capabilities: [
          "Passenger vehicles, SUVs, and vans",
          "Trucks, trailers, and specialized transport",
          "Driver services and route planning",
          "Freight forwarding and last-mile delivery",
          "Customs and inbound shipment coordination",
        ],
        icon: "truck",
      },
      {
        slug: "protection-safety-solutions",
        title: "Protection & Safety Solutions",
        shortDescription: "Protective infrastructure and safety support.",
        description:
          "Physical protection, safety infrastructure, and compliance support for operational sites. Specified, sourced, and installed to meet site-specific requirements.",
        capabilities: [
          "Protective barriers and blast walls",
          "Fencing, gates, and access control",
          "Fire safety and emergency equipment",
          "Site signage and safety compliance",
          "Guarding and security coordination",
        ],
        icon: "shield",
      },
      {
        slug: "operational-support-services",
        title: "Operational Support Services",
        shortDescription: "Sanitation, maintenance, and site support.",
        description:
          "Day-to-day services that keep operations running — cleaning, maintenance, waste management, and on-site support staff, delivered on a scheduled or on-demand basis.",
        capabilities: [
          "Janitorial and sanitation services",
          "Technical maintenance and handyman support",
          "Waste collection and disposal",
          "Facilities management",
          "On-site coordinators and support staff",
        ],
        icon: "tools",
      },
      {
        slug: "bureaucratic-regulatory-support",
        title: "Bureaucratic & Regulatory Support",
        shortDescription: "Coordination with local authorities in collaboration with a leading Israeli law firm.",
        description:
          "Navigation of Israeli permits, licensing, and regulatory requirements. Delivered in collaboration with a leading Israeli law firm to ensure compliant, timely approvals for your operation.",
        capabilities: [
          "Permits and licensing coordination",
          "Municipality and authority liaison",
          "Import and customs documentation",
          "Contract structuring support",
          "Ongoing compliance advisory",
        ],
        icon: "document",
      },
    ],
  },
  contact: {
    pageEyebrow: "/ CONTACT",
    pageTitle: "Get in touch.",
    pageDescription:
      "Direct channels for inquiries and structured requirements.",
    channelsEyebrow: "/ CHANNELS",
    channelsTitle: "Direct contact.",
    channels: [
      { label: "Email", value: "", icon: "mail", kind: "email" },
      { label: "Phone", value: "", icon: "phone", kind: "phone" },
      { label: "WhatsApp", value: "Message", icon: "whatsapp", kind: "whatsapp" },
    ],
    coverageText: "Based in Israel. Operational coverage nationwide.",
    messageEyebrow: "/ MESSAGE",
    messageTitle: "Send a message.",
    messageDescription:
      "Share the outline of your requirement — scope, location, and timeline. Minimal information is enough to start.",
    form: {
      name: "Name *",
      namePlaceholder: "Full name",
      company: "Company / Organization",
      companyPlaceholder: "Company name",
      email: "Email *",
      emailPlaceholder: "you@company.com",
      phone: "Phone",
      phonePlaceholder: "+1 555 000 0000",
      requirement: "Requirement type",
      requirementPlaceholder: "Select a category…",
      message: "Message *",
      messagePlaceholder: "Briefly describe your requirement — scope, location, timeline.",
      requirementOptions: [
        "Accommodation",
        "Site Setup / Base",
        "Heavy Equipment",
        "Modular Structures",
        "Power / HVAC / Infrastructure",
        "Vehicles / Transport",
        "Protection / Safety",
        "Operational Support",
        "Regulatory / Permits",
        "Other",
      ],
    },
  },
  footer: {
    company: "Company",
    services: "Services",
    allServices: "All services",
    contact: "Contact",
    rights: "All rights reserved.",
    descriptor: "Rapid logistics, infrastructure & operational solutions across Israel.",
  },
  notFound: {
    heading: "Page not found",
    body: "The page you were looking for does not exist or has been moved.",
    home: "Back to home",
    contact: "Contact",
  },
};

const he: Dict = {
  locale: "he",
  dir: "rtl",
  home: "/he",
  contactLabel: "צור קשר",
  nav: [
    { label: "בית", href: "/he" },
    { label: "שירותים", href: "/he/services" },
    { label: "אודות", href: "/he/about" },
    { label: "צור קשר", href: "/he/contact" },
  ],
  common: {
    index: "INDEX",
    scope: "SCOPE",
    directChannels: "CHANNELS",
    sendMessage: "שלח הודעה",
    sending: "שולח…",
    messageReceived: "הודעה התקבלה",
    messageReceivedBody:
      "תודה — ההודעה התקבלה. נחזור אליך בהקדם.",
    sendAnother: "שלח הודעה נוספת",
    fallbackError:
      "לא הצלחנו לשלוח את הטופס באופן אוטומטי. ניתן לפנות אלינו ישירות במייל.",
    openEmail: "פתח מייל",
    fieldRequired: "שם, אימייל והודעה הם שדות חובה.",
    validEmail: "יש להזין כתובת אימייל תקינה.",
  },
  hero: {
    tagline: "Ashchar · ישראל",
    badge: "אשחר · ישראל",
    titleLine1: "המשימה שלך,",
    titleLine2: "הלוגיסטיקה שלנו.",
    description:
      "אשחר מספקת אכסון, תשתיות, ציוד ותמיכה שטחית — בתיאום חוצה דיסציפלינות עבור גופים ממשלתיים, ביטחוניים ופרטיים הפועלים בישראל.",
    supportingLine:
      "ניהול צי רכבים, מתחמי דיור ותשתיות בהיקפים גדולים ברחבי ישראל.",
    coordsLabel: "ישראל · 31.7683°N 35.2137°E",
  },
  operationalScale: {
    eyebrow: "/ היקף תפעולי",
    title: "תמונת מצב תפעולית.",
    description:
      "היקף הפעילות המתואמת כיום ברחבי ישראל.",
    metrics: [
      { value: "100+", label: "רכבים", note: "צי השכרה פעיל ברחבי הארץ" },
      { value: "80+", label: "יחידות ציוד כבד", note: "מכונות בנייה והנדסה" },
      { value: "600+", label: "יחידות דיור", note: "בניהול שוטף" },
      { value: "$20M+", label: "רכש שנתי", note: "היקף שנתי כולל" },
    ],
  },
  valueStrip: [
    { title: "היענות מהירה", description: "גיוס מהיר של משאבים לצרכים תפעוליים דחופים." },
    { title: "ביצוע מקצה לקצה", description: "מרכש ראשוני ועד אספקה מלאה בשטח." },
    { title: "כיסוי ארצי", description: "יכולת תפעולית ברחבי ישראל." },
    { title: "ממשלתי ומסחרי", description: "תמיכה הן במגזר הציבורי והן במגזר הפרטי." },
  ],
  capabilityGroups: {
    eyebrow: "/ יכולות",
    title1: "שלוש קבוצות יכולת.",
    title2: "שותף מתואם אחד.",
    intro:
      "השירותים שלנו מאורגנים סביב שלוש קבוצות יכולת. יחד הן מכסות את מלוא היקף הפעילות התפעולית בישראל.",
    groups: [
      {
        id: "accommodation",
        number: "01",
        title: "אכסון",
        summary: "פתרונות דיור מוכנים לאכלוס לצוותים המגיעים או פועלים בישראל.",
        icon: "bed",
        scope: [
          "מלונות והזמנות לטווח קצר",
          "דירות שירות",
          "פתרונות דיור מוכנים",
          "יחידות דיור מודולריות",
        ],
      },
      {
        id: "infrastructure",
        number: "02",
        title: "תשתיות והקמת אתר",
        summary: "משרדים, בסיסים ומתחמי פעילות — כולל התשתיות להפעלתם.",
        icon: "building",
        scope: [
          "משרדים, בסיסים ומתחמי פעילות",
          "מבנים מודולריים ומכולות",
          "גנרטורים, מיזוג ותשתיות חשמל",
          "תקשורת ותקשורת נתונים",
        ],
      },
      {
        id: "equipment-support",
        number: "03",
        title: "ציוד ותמיכה תפעולית",
        summary: "מכונות, כלי רכב ושירותי שטח המבטיחים המשכיות תפעולית.",
        icon: "crane",
        scope: [
          "ציוד כבד וכלי בנייה והנדסה",
          "כלי רכב, הובלה ולוגיסטיקה",
          "תברואה ניידת ותחזוקה",
          "תמיכת שטח ותיאום רגולטורי",
        ],
      },
    ],
  },
  operationalFlow: {
    eyebrow: "/ תהליך",
    titleStart: "מדרישה ועד",
    titleAccent: "אתר תפעולי פעיל.",
    description:
      "תהליך מתואם אחד — מהדרישה הראשונית ועד להקמת מערך תפעולי פעיל בשטח.",
    nodes: [
      { icon: "document", label: "דרישה", note: "היקף · מיקום · לוח זמנים" },
      { icon: "bed", label: "אכסון", note: "צוותים ממוקמים ומוכנים" },
      { icon: "bolt", label: "תשתיות", note: "תשתיות אתר במקומן" },
      { icon: "truck", label: "ציוד ולוגיסטיקה", note: "מכונות והובלה" },
      { icon: "shield", label: "אתר תפעולי", note: "מסירה וביצוע" },
    ],
  },
  howWeOperate: {
    eyebrow: "/ אופן הפעולה",
    title: "ביצוע מובנה לסביבות תפעוליות.",
    description:
      "העקרונות שמנחים אותנו בהגדרה, תיאום ואספקה בשטח.",
    items: [
      { title: "לוחות זמנים מהירים", description: "דרישות נבחנות במהירות וממוסגרות במסגרת זמן ברורה ומובנית." },
      { title: "רשת ביצוע מקומית", description: "רשת מבוססת של ספקים, מפעילים ורשויות ברחבי ישראל." },
      { title: "אספקה משולבת", description: "אכסון, תשתיות, ציוד ותמיכה — במתואם תחת נקודת קשר אחת." },
      { title: "יכולת רב-תחומית", description: "בנויים לטפל בדרישות המשתרעות על פני מספר תחומי פעילות." },
      { title: "סטנדרטים בינלאומיים", description: "תיעוד, תקשורת ותהליכי עבודה המתאימים לשותפים בינלאומיים." },
      { title: "מיקוד תפעולי", description: "העבודה שלנו נמדדת באספקה בשטח, לא בתיעוד." },
    ],
  },
  howItWorks: {
    eyebrow: "/ התקשרות",
    title: "דרך ברורה מדרישה לאספקה.",
    items: [
      { step: "01", title: "העברת דרישה", description: "שתפו את עיקרי הצורך — היקף, מיקום, לוח זמנים. מידע מינימלי מספיק כדי להתחיל." },
      { step: "02", title: "בדיקה מהירה", description: "אנחנו בוחנים היתכנות, זמינות וגישה תוך שעות, לא ימים." },
      { step: "03", title: "הצעה מובנית", description: "הצעה ברורה: היקף, תמחור, לוח זמנים ותחומי אחריות — ללא עמימות." },
      { step: "04", title: "אספקה והקמה", description: "ביצוע מתואם בשטח — רכש, אספקה, הקמה ומסירה." },
      { step: "05", title: "תמיכה שוטפת", description: "המשך תמיכה והתאמות לאורך מחזור החיים התפעולי." },
    ],
  },
  about: {
    pageEyebrow: "/ אודות",
    pageTitleStart: "שותף תפעולי ישראלי",
    pageTitleAccent: "לאספקה מובנית.",
    pageDescription:
      "אשחר מתאמת דרישות תפעוליות רב-תחומיות בישראל — משירות יחיד ועד פריסה מלאה מקצה לקצה.",
    companyEyebrow: "/ חברה",
    companyTitle: "מי אנחנו.",
    companyParagraphs: [
      "אשחר היא חברה ישראלית המתמקדת באספקה תפעולית בתחומי אכסון, תשתיות, לוגיסטיקה, ציוד ותמיכת שטח.",
      "אנחנו עובדים עם גופים ממשלתיים, ארגונים בינלאומיים וחברות פרטיות הזקוקים לביצוע מעשי בישראל.",
      "תפקידנו לתרגם דרישות מורכבות או רב-תחומיות לפתרונות ממשיים, מתואמים ומסופקים בשטח באמצעות רשת מקומית מבוססת.",
    ],
    scaleEyebrow: "/ היקף תפעולי",
    scaleTitle: "כיום, אשחר מנהלת:",
    scaleDescription: "תמונת מצב של ההיקף המצוי כעת בתיאום.",
    scaleItems: [
      { value: "100+", text: "כלי רכב" },
      { value: "80+", text: "יחידות ציוד כבד" },
      { value: "600+", text: "יחידות דיור" },
      { value: "$20M+", text: "היקף רכש שנתי" },
    ],
    principlesEyebrow: "/ עקרונות פעולה",
    principlesTitle: "איך אנחנו עובדים.",
    principlesDescription:
      "העקרונות המעצבים את אופן ההגדרה, התיאום והאספקה שלנו.",
  },
  services: {
    pageEyebrow: "/ שירותים",
    pageTitleStart: "שירותים תפעוליים",
    pageTitleAccent: "ברחבי ישראל.",
    pageDescription:
      "מבט מלא על השירותים שאשחר מספקת — מאכסון והקמת אתר ועד ציוד, לוגיסטיקה ותמיכה רגולטורית.",
    services: [
      {
        slug: "immediate-accommodation-solutions",
        title: "פתרונות אכסון מיידיים",
        shortDescription: "מלונות, דירות שירות ופתרונות דיור מוכנים.",
        description:
          "אכסון מוכן לאכלוס לצוותים בכל גודל, מאותר ומתואם ברחבי ישראל. אנחנו מטפלים בזמינות, בחוזים ובלוגיסטיקה בשטח, כך שהצוותים שלכם יכולים להתמקד במשימה.",
        capabilities: [
          "בלוקי מלונות והזמנות לטווח קצר",
          "דירות שירות מרוהטות",
          "פתרונות דיור לטווח ארוך",
          "תיאום הסעדה ומשק בית",
          "התגייסות מהירה לקליטות דחופות",
        ],
        icon: "bed",
      },
      {
        slug: "office-base-operational-site-setup",
        title: "הקמת משרד, בסיס ואתר תפעולי",
        shortDescription: "הקמת אתר מקצה לקצה כולל תשתיות ופריסה.",
        description:
          "הקמה בגישת 'מפתח ביד' של אתרים תפעוליים, משרדים קדמיים ובסיסי שטח. מבחירת המיקום ועד סביבה פעילה, מחוברת ומרוהטת המוכנה ליום הראשון.",
        capabilities: [
          "סקרי אתר ותכנון פריסה",
          "ריהוט, IT ותשתיות תקשורת",
          "תיאום תשתיות וחשמל",
          "היקף מאובטח ובקרת כניסה",
          "ניהול פרויקט משולב",
        ],
        icon: "building",
      },
      {
        slug: "heavy-equipment-construction-machinery",
        title: "ציוד כבד ומכונות בנייה",
        shortDescription: "השכרה או רכש של ציוד כבד.",
        description:
          "איתור, השכרה או רכש של מכונות בנייה ותעשייה לפריסות קצרות טווח ולפעילויות בהיקף מלא. נמסר לאתר עם מפעילים ותמיכה במידת הצורך.",
        capabilities: [
          "מחפרים, מעמיסים, דחפורים ומנופים",
          "מלגזות וציוד שינוע חומרים",
          "גנרטורים ומדחסים",
          "מפעילים מוסמכים על פי דרישה",
          "הובלה וריתוק בין אתרים",
        ],
        icon: "crane",
      },
      {
        slug: "modular-buildings-temporary-structures",
        title: "מבנים מודולריים ומבנים זמניים",
        shortDescription: "מכולות משרד, יחידות דיור ומבני שטח.",
        description:
          "יחידות מודולריות וטרומיות המסופקות, מובלות ומותקנות. ניתן להתרחב מיחידה אחת ועד מתחם מודולרי שלם עם מרחבי מגורים, עבודה, אחסון ושירות.",
        capabilities: [
          "מכולות משרד, מגורים ותברואה",
          "מתחמים מודולריים רב-יחידתיים",
          "אוהלים, סככות ומבנים רכים",
          "יסודות והתקנה באתר",
          "ניוד ופירוק",
        ],
        icon: "container",
      },
      {
        slug: "power-hvac-infrastructure",
        title: "חשמל, מיזוג ותשתיות",
        shortDescription: "גנרטורים, הפצת חשמל ומערכות סביבה.",
        description:
          "מערכות חשמל ואקלים אמינות לפעילויות זמניות וקבועות. ממודות, מסופקות ומתוחזקות כדי להבטיח רציפות תפעולית ללא הפרעות.",
        capabilities: [
          "גנרטורים דיזל ולוגיסטיקת דלק",
          "הפצת חשמל, חיווט ו-UPS",
          "מיזוג ובקרת אקלים",
          "מערכות מים, תברואה ופסולת",
          "תחזוקה מונעת ושירות כוננות",
        ],
        icon: "bolt",
      },
      {
        slug: "vehicles-transport-logistics",
        title: "כלי רכב, הובלה ולוגיסטיקה",
        shortDescription: "השכרת רכבים ותיאום לוגיסטי.",
        description:
          "איתור צי, הובלה ותיאום תנועה ברחבי ישראל. מרכב ניהולי אחד ועד מערך הובלה מלא לכוח אדם, מטען וציוד.",
        capabilities: [
          "רכבי נוסעים, ג'יפים ומיניוואנים",
          "משאיות, גוררים והובלה מיוחדת",
          "שירותי נהגים ותכנון מסלול",
          "שינוע מטענים ומשלוחים למיקום סופי",
          "תיאום מכס ומשלוחים נכנסים",
        ],
        icon: "truck",
      },
      {
        slug: "protection-safety-solutions",
        title: "פתרונות הגנה ובטיחות",
        shortDescription: "תשתיות הגנה ותמיכה בבטיחות.",
        description:
          "הגנה פיזית, תשתיות בטיחות ותמיכה בציות באתרים תפעוליים. מוגדר, מסופק ומותקן לעמידה בדרישות הספציפיות לאתר.",
        capabilities: [
          "מחסומי הגנה וקירות פיצוץ",
          "גידור, שערים ובקרת כניסה",
          "בטיחות אש וציוד חירום",
          "שילוט אתר וציות לבטיחות",
          "שמירה ותיאום אבטחה",
        ],
        icon: "shield",
      },
      {
        slug: "operational-support-services",
        title: "שירותי תמיכה תפעוליים",
        shortDescription: "תברואה, תחזוקה ותמיכת אתר.",
        description:
          "שירותי יום-יום המבטיחים את המשכיות הפעילות — ניקיון, תחזוקה, פינוי פסולת וצוותי תמיכה באתר, במתכונת קבועה או על פי דרישה.",
        capabilities: [
          "שירותי ניקיון ותברואה",
          "תחזוקה טכנית ואחזקה",
          "איסוף ופינוי פסולת",
          "ניהול מתקנים",
          "רכזי אתר וצוותי תמיכה",
        ],
        icon: "tools",
      },
      {
        slug: "bureaucratic-regulatory-support",
        title: "תמיכה ביורוקרטית ורגולטורית",
        shortDescription: "תיאום מול הרשויות בשיתוף משרד עורכי דין ישראלי מוביל.",
        description:
          "ניווט בהיתרים, רישיונות ודרישות רגולטוריות ישראליות. בשיתוף עם משרד עורכי דין ישראלי מוביל לאישורים מדויקים ובזמן לפעילות שלכם.",
        capabilities: [
          "תיאום היתרים ורישוי",
          "קשר עם רשויות מקומיות",
          "תיעוד יבוא ומכס",
          "תמיכה במבנה חוזי",
          "ייעוץ ציות שוטף",
        ],
        icon: "document",
      },
    ],
  },
  contact: {
    pageEyebrow: "/ יצירת קשר",
    pageTitle: "צרו קשר.",
    pageDescription:
      "ערוצים ישירים לפניות ולדרישות מובנות.",
    channelsEyebrow: "/ ערוצים",
    channelsTitle: "קשר ישיר.",
    channels: [
      { label: "אימייל", value: "", icon: "mail", kind: "email" },
      { label: "טלפון", value: "", icon: "phone", kind: "phone" },
      { label: "וואטסאפ", value: "שליחת הודעה", icon: "whatsapp", kind: "whatsapp" },
    ],
    coverageText: "מבוססת בישראל. כיסוי תפעולי ארצי.",
    messageEyebrow: "/ הודעה",
    messageTitle: "שליחת הודעה.",
    messageDescription:
      "שתפו את עיקרי הדרישה — היקף, מיקום ולוח זמנים. מידע מינימלי מספיק כדי להתחיל.",
    form: {
      name: "שם *",
      namePlaceholder: "שם מלא",
      company: "חברה / ארגון",
      companyPlaceholder: "שם החברה",
      email: "אימייל *",
      emailPlaceholder: "you@company.com",
      phone: "טלפון",
      phonePlaceholder: "+972-50-000-0000",
      requirement: "סוג הדרישה",
      requirementPlaceholder: "בחרו קטגוריה…",
      message: "הודעה *",
      messagePlaceholder: "תארו בקצרה את הדרישה — היקף, מיקום, לוח זמנים.",
      requirementOptions: [
        "אכסון",
        "הקמת אתר / בסיס",
        "ציוד כבד",
        "מבנים מודולריים",
        "חשמל / מיזוג / תשתיות",
        "כלי רכב / הובלה",
        "הגנה / בטיחות",
        "תמיכה תפעולית",
        "רגולציה / היתרים",
        "אחר",
      ],
    },
  },
  footer: {
    company: "חברה",
    services: "שירותים",
    allServices: "כל השירותים",
    contact: "יצירת קשר",
    rights: "כל הזכויות שמורות.",
    descriptor: "פתרונות לוגיסטיקה, תשתיות ותפעול מהירים ברחבי ישראל.",
  },
  notFound: {
    heading: "הדף לא נמצא",
    body: "הדף שחיפשת לא קיים או הועבר.",
    home: "חזרה לבית",
    contact: "יצירת קשר",
  },
};

export const dicts: Record<Locale, Dict> = { en, he };

export const getDict = (locale: Locale): Dict => dicts[locale];
