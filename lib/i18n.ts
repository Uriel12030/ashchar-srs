/**
 * Bilingual UI dictionary. English is the default locale; Hebrew is
 * served from /he/*. Every user-visible string in the framework
 * components and page templates routes through here so that:
 *
 *   const t = dict[locale]; t.nav.capabilities
 *
 * Brand wordmark "ASHCHAR" intentionally stays Latin in both locales —
 * the wordmark is the logo equivalent, like Wix/Mobileye keep their
 * Latin marks on Hebrew sites.
 */

export type Locale = "en" | "he";

export const locales: Locale[] = ["en", "he"];

export const isHebrew = (l: Locale) => l === "he";

/** Path prefix for a locale (English at root, Hebrew under /he). */
export const localeHome = (l: Locale) => (l === "he" ? "/he" : "/");

/** Build a route within a locale's tree. `route` should start with /. */
export const localePath = (l: Locale, route: string) =>
  l === "he" ? `/he${route === "/" ? "" : route}` : route;

type ProjectKey =
  | "force-protection-deployment"
  | "billeting-program"
  | "rapid-procurement-program";

type CapabilityKey =
  | "base-operational-support"
  | "ground-transportation"
  | "cargo-equipment-movement"
  | "cross-border-logistics"
  | "fleet-operations"
  | "billeting-life-support"
  | "airfield-remote-site"
  | "rapid-deployment-contingency";

type Dictionary = {
  htmlLang: string;
  dir: "ltr" | "rtl";

  common: {
    brand: string;
    navContact: string;
    menu: string;
    scroll: string;
    enter: string;
    reachOut: string;
    viewAll: string;
    engageHeading: string;
    sectorsHeading: string;
    location: string;
    operations: string;
    registration: string;
    coordination247: string;
    languageSwitchTo: string;
  };

  nav: {
    capabilities: string;
    government: string;
    commercial: string;
    projects: string;
    contact: string;
  };

  footer: {
    description: string;
    governmentDefense: string;
    commercialOps: string;
    capabilitiesLink: string;
    projectsLink: string;
    contactForm: string;
    legal: string;
  };

  trust: {
    sam: string;
    uei: string;
    ncage: string;
    oconus: string;
    samActive: string;
  };

  metrics: {
    housing: string;
    vehicles: string;
    equipment: string;
    coord: string;
  };

  hero: {
    coords: string;
    theatre: string;
  };

  pathways: {
    eyebrow: string;
    title: string;
    govEyebrow: string;
    govSector: string;
    govTitle: string;
    govBody: string;
    commEyebrow: string;
    commSector: string;
    commTitle: string;
    commBody: string;
  };

  mission: {
    eyebrow: string;
    title: string;
    body: string;
    credibility: string[];
  };

  capabilities: {
    eyebrow: string;
    title: string;
    items: Record<
      CapabilityKey,
      { title: string; short: string; description: string }
    >;
  };

  operations: {
    eyebrow: string;
    title: string;
    opLabel: string; // "Op" / "מבצע"
    catGovernment: string;
    catCommercial: string;
    items: Record<ProjectKey, { title: string; blurb: string; meta: string }>;
  };

  experience: {
    eyebrow: string;
    title: string;
    body: string;
    includes: string;
    disclaimer: string;
    /** Optional expand-text overrides for acronyms in the wordmark grid. */
    expand: Record<string, string>;
  };

  closer: {
    eyebrow: string;
    title: string;
    sub: string;
    cta: string;
  };

  pages: {
    home: {
      eyebrow: string;
      headline: string;
      sub: string;
      metaTitle: string;
      metaDescription: string;
    };
    government: {
      eyebrow: string;
      headline: string;
      sub: string;
      focusEyebrow: string;
      focusTitle: string;
      focus: { title: string; body: string }[];
      closerTitle: string;
      closerSub: string;
      closerCta: string;
      metaTitle: string;
      metaDescription: string;
    };
    commercial: {
      eyebrow: string;
      headline: string;
      sub: string;
      focusEyebrow: string;
      focusTitle: string;
      focus: { title: string; body: string }[];
      closerTitle: string;
      closerSub: string;
      closerCta: string;
      metaTitle: string;
      metaDescription: string;
    };
    capabilities: {
      eyebrow: string;
      headline: string;
      sub: string;
      capabilityLabel: string; // "Capability" / "יכולת"
      closerTitle: string;
      metaTitle: string;
      metaDescription: string;
    };
    projects: {
      eyebrow: string;
      headline: string;
      sub: string;
      metaTitle: string;
      metaDescription: string;
    };
    contact: {
      eyebrow: string;
      headline: string;
      sub: string;
      directLabel: string;
      directValue: (name: string, phone: string) => string;
      emailLabel: string;
      whatsappLabel: string;
      metaTitle: string;
      metaDescription: string;
    };
  };
};

export const dict: Record<Locale, Dictionary> = {
  en: {
    htmlLang: "en",
    dir: "ltr",

    common: {
      brand: "ASHCHAR",
      navContact: "+972 52-377-7635 · Engage",
      menu: "Menu",
      scroll: "Scroll",
      enter: "Enter",
      reachOut: "Reach out",
      viewAll: "View all →",
      engageHeading: "Engage",
      sectorsHeading: "Sectors",
      location: "Location",
      operations: "Operations",
      registration: "Registration",
      coordination247: "24/7 coordination",
      languageSwitchTo: "עברית",
    },

    nav: {
      capabilities: "Capabilities",
      government: "Government",
      commercial: "Commercial",
      projects: "Projects",
      contact: "Contact",
    },

    footer: {
      description:
        "Operational support, logistics, transportation, and life support for U.S. Government, military, and prime contractor operations in Israel.",
      governmentDefense: "Government & Defense",
      commercialOps: "Commercial Operations",
      capabilitiesLink: "Capabilities",
      projectsLink: "Projects",
      contactForm: "Contact form",
      legal: "Ashchar Ltd.",
    },

    trust: {
      sam: "SAM Registered",
      uei: "UEI: VJ23VL3BNJL8",
      ncage: "NCAGE: 7006A",
      oconus: "Israel-Based OCONUS Support",
      samActive: "SAM Active",
    },

    metrics: {
      housing: "Billeting Units Deployed",
      vehicles: "Vehicles in Fleet",
      equipment: "Heavy Equipment Assets",
      coord: "Operational Coordination",
    },

    hero: {
      coords: "31.7683° N · 35.2137° E",
      theatre: "Israel — Operational Theatre",
    },

    pathways: {
      eyebrow: "Operating contexts",
      title: "Government missions. Commercial operations.",
      govEyebrow: "Pathway · 01",
      govSector: "Government & Defense",
      govTitle: "Mission-critical BOS support.",
      govBody:
        "BOS/BOS-I support capabilities for U.S. Government, military, and prime contractor operations.",
      commEyebrow: "Pathway · 02",
      commSector: "Commercial Operations",
      commTitle: "Industrial scale. Operational discipline.",
      commBody:
        "Fleet, billeting, logistics, and field support for private-sector operators.",
    },

    mission: {
      eyebrow: "Mission Execution",
      title: "Built for mission execution.",
      body: "Ashchar supports dynamic operational requirements where speed, coordination, and reliability matter. Our team combines local supplier networks, field project management, transportation assets, and regional logistics coordination to support government and contractor missions from planning through execution.",
      credibility: [
        "Trusted by U.S. Government and prime contractor teams operating in Israel.",
        "Experienced in urgent field requirements, controlled-access environments, and mission-critical timelines.",
        "Local execution with regional logistics reach.",
      ],
    },

    capabilities: {
      eyebrow: "Operational Support Capabilities",
      title: "BOS, logistics, transportation, life support.",
      items: {
        "base-operational-support": {
          title: "Base Operational Support",
          short: "BOS / BOS-I support capabilities.",
          description:
            "Integrated support for base operations, field services, vendor coordination, equipment, housing, transport, and life-support needs. BOS/BOS-I support capabilities scaled to the requirement.",
        },
        "ground-transportation": {
          title: "Ground Transportation & Shuttle Operations",
          short: "Personnel movement, scheduled and ad-hoc.",
          description:
            "Personnel movement, scheduled and ad-hoc shuttles, buses, vans, executive vehicles, and mission-specific transportation. Movement control across forward and rear sites.",
        },
        "cargo-equipment-movement": {
          title: "Cargo & Equipment Movement (GLOC)",
          short: "Ground lines of communication.",
          description:
            "Ground movement of equipment, supplies, containers, and mission cargo along approved logistics routes. GLOC execution, staging, and forward delivery.",
        },
        "cross-border-logistics": {
          title: "Cross-Border Logistics",
          short: "Regional staging, transfer, customs.",
          description:
            "Coordination of regional cargo movement, staging, border transfer, customs support, and partner-network execution. Regional reach with local execution.",
        },
        "fleet-operations": {
          title: "Fleet & Vehicle Operations",
          short: "Passenger, transport, maintenance.",
          description:
            "Passenger vehicles, SUVs, pickups, vans, buses, maintenance coordination, replacement vehicles, and operational fleet management. Long-term and surge capacity.",
        },
        "billeting-life-support": {
          title: "Billeting & Life Support Services",
          short: "Housing, sanitation, sustainment.",
          description:
            "Housing, hotels, temporary lodging, cleaning, water, sanitation, office support, and daily operational sustainment. Practical billeting at scale.",
        },
        "airfield-remote-site": {
          title: "Airfield & Remote Site Support",
          short: "Air bases, remote OPs, staging areas.",
          description:
            "Support for air bases, remote operating sites, staging areas, temporary compounds, and fast-changing mission locations. Forward logistics and on-site coordination.",
        },
        "rapid-deployment-contingency": {
          title: "Rapid Deployment & Contingency Support",
          short: "Fast sourcing, mobilization, field execution.",
          description:
            "Fast sourcing, mobilization, vendor coordination, equipment delivery, and field execution under urgent timelines. Contingency-ready posture.",
        },
      },
    },

    operations: {
      eyebrow: "Selected operations",
      title: "Executed in theatre.",
      opLabel: "Op",
      catGovernment: "Government",
      catCommercial: "Commercial",
      items: {
        "force-protection-deployment": {
          title: "Force Protection Infrastructure",
          meta: "Multi-site / Compressed timeline",
          blurb:
            "Hardened protective barriers and modular infrastructure positioned across forward operational sites.",
        },
        "billeting-program": {
          title: "Billeting Program at Scale",
          meta: "600+ units / Sustained ops",
          blurb:
            "Modular accommodation program with full life-support, climate control, and 24/7 site management.",
        },
        "rapid-procurement-program": {
          title: "Rapid Procurement & Movement",
          meta: "Time-critical / Multi-vendor",
          blurb:
            "End-to-end sourcing, GLOC routing, and forward delivery for time-critical operational requirements.",
        },
      },
    },

    experience: {
      eyebrow: "Supporting Government & Contractor Operations",
      title: "Operational Experience",
      body: "Ashchar supports operational, logistics, transportation, billeting, and infrastructure-related requirements across Israel, including work involving government and prime contractor environments.",
      includes: "Relevant operational experience",
      disclaimer:
        "Organization references are presented solely to reflect relevant operational environments and experience and do not imply endorsement or formal affiliation unless explicitly stated.",
      expand: {
        USAF: "U.S. Air Force",
        SOCCENT: "Special Operations Command Central",
        MARCENT: "U.S. Marine Forces Central Command",
        MSOC: "Marine Special Operations Command",
      },
    },

    closer: {
      eyebrow: "Engage",
      title: "Brief us on the mission.",
      sub: "Scope, timeline, location. We respond within 24 hours.",
      cta: "Engage Ashchar",
    },

    pages: {
      home: {
        eyebrow: "Israel & Regional Operations — BOS / BOS-I Support",
        headline: "Base Operations.\nLogistics.\nLife Support.",
        sub: "Mission-ready operational support for U.S. Government, military, and prime contractor operations across Israel.",
        metaTitle: "Ashchar — Operational Support in Israel",
        metaDescription:
          "Transportation, billeting, cargo movement, and operational support services across Israel.",
      },
      government: {
        eyebrow: "Government & Defense — BOS Support",
        headline: "Mission-critical\nBOS support.",
        sub: "BOS/BOS-I support capabilities for U.S. Government, military, and prime contractor operations in Israel.",
        focusEyebrow: "Operating doctrine",
        focusTitle: "Built for missions that cannot wait.",
        focus: [
          {
            title: "BOS / BOS-I support capabilities",
            body: "Integrated base operations support — vendors, equipment, housing, transport, and life-support coordination scaled to the requirement.",
          },
          {
            title: "Movement control & GLOC",
            body: "Personnel movement, ground lines of communication, and cargo & equipment movement along approved routes.",
          },
          {
            title: "Compliance familiarity",
            body: "SAM Registered. UEI VJ23VL3BNJL8 · NCAGE 7006A. Familiar with FAR/DFARS-aligned terms and controlled-access environments.",
          },
          {
            title: "Forward & remote site support",
            body: "Sustainment for forward, remote, and isolated sites — billeting, power, fuel, transport, and on-site coordination.",
          },
          {
            title: "Rapid deployment & contingency",
            body: "Pre-positioned assets, vetted vendors, and crews available for mobilization within hours.",
          },
        ],
        closerTitle: "Ready to deploy?",
        closerSub:
          "Brief us on the requirement. We respond within 24 hours.",
        closerCta: "Engage Ashchar",
        metaTitle: "Government & Defense — BOS Support",
        metaDescription:
          "BOS/BOS-I support capabilities for U.S. Government, military, and prime contractor operations in Israel.",
      },
      commercial: {
        eyebrow: "Commercial Operations",
        headline: "Industrial scale.\nOperational discipline.",
        sub: "Fleet & ground transportation, billeting, regional logistics, and field support for private-sector operators in Israel.",
        focusEyebrow: "Delivered",
        focusTitle: "Stand it up. Run it. Stand it down.",
        focus: [
          {
            title: "Fleet & ground transportation",
            body: "Pickups, SUVs, vans, buses, executive transport, shuttle operations, maintenance and surge capacity.",
          },
          {
            title: "Billeting & life support",
            body: "Modular accommodation at scale, hotels, cleaning, sanitation, water, daily sustainment.",
          },
          {
            title: "Regional logistics & movement",
            body: "Port, inland transport, warehousing, distribution, cross-border coordination.",
          },
          {
            title: "Procurement & operational supplies",
            body: "Sourcing, vendor coordination, equipment delivery for time-critical and sustained requirements.",
          },
          {
            title: "Temporary operational sites",
            body: "Engineered, deployed, managed, demobilized — practical execution from greenfield to operational.",
          },
        ],
        closerTitle: "Tell us the requirement.",
        closerSub:
          "Scope, timeline, location. We respond within 24 hours.",
        closerCta: "Start a project",
        metaTitle: "Commercial Operations",
        metaDescription:
          "Fleet & ground transportation, billeting & life support, regional logistics & movement support for private-sector operators in Israel.",
      },
      capabilities: {
        eyebrow: "Operational Support Capabilities",
        headline: "BOS. Logistics.\nTransportation.\nLife Support.",
        sub: "Mission-ready operational support — owned assets, vetted vendors, and field execution across Israel.",
        capabilityLabel: "Capability",
        closerTitle: "Brief us on the mission.",
        metaTitle: "Operational Support Capabilities",
        metaDescription:
          "BOS/BOS-I support, ground transportation, GLOC, cross-border logistics, fleet operations, billeting & life support, airfield & remote site support, rapid deployment.",
      },
      projects: {
        eyebrow: "Selected operations",
        headline: "Executed\nin theatre.",
        sub: "A representative slice of BOS, logistics, and transportation work delivered under operational conditions.",
        metaTitle: "Projects",
        metaDescription:
          "Operational projects across government, defense, and commercial sectors in Israel.",
      },
      contact: {
        eyebrow: "Contact",
        headline: "Brief us on the mission.",
        sub: "BOS, logistics, transportation, life support. We respond within 24 hours.",
        directLabel: "Direct",
        directValue: (name, phone) => `${name} · ${phone}`,
        emailLabel: "Email",
        whatsappLabel: "WhatsApp",
        metaTitle: "Contact",
        metaDescription:
          "Engage Ashchar for operational support, logistics, and transportation services in Israel.",
      },
    },
  },

  he: {
    htmlLang: "he",
    dir: "rtl",

    common: {
      brand: "ASHCHAR",
      navContact: "+972 52-377-7635 · יצירת קשר",
      menu: "תפריט",
      scroll: "גלילה",
      enter: "כניסה",
      reachOut: "פנייה",
      viewAll: "צפה בכל ←",
      engageHeading: "יצירת קשר",
      sectorsHeading: "מגזרים",
      location: "מיקום",
      operations: "מבצעים",
      registration: "רישום",
      coordination247: "תיאום 24/7",
      languageSwitchTo: "English",
    },

    nav: {
      capabilities: "יכולות",
      government: "ממשל",
      commercial: "מסחרי",
      projects: "פרויקטים",
      contact: "צור קשר",
    },

    footer: {
      description:
        "תמיכה מבצעית, לוגיסטיקה, הסעות וחיי חזית עבור פעילות של ממשל ארה״ב, צבא, וקבלני prime ראשיים בישראל.",
      governmentDefense: "ממשל וביטחון",
      commercialOps: "פעילות מסחרית",
      capabilitiesLink: "יכולות",
      projectsLink: "פרויקטים",
      contactForm: "טופס יצירת קשר",
      legal: "אשחר בע״מ",
    },

    trust: {
      sam: "רשום ב-SAM",
      uei: "UEI: VJ23VL3BNJL8",
      ncage: "NCAGE: 7006A",
      oconus: "תמיכת OCONUS מבוססת ישראל",
      samActive: "SAM פעיל",
    },

    metrics: {
      housing: "יחידות אכלוס פרוסות",
      vehicles: "כלי רכב בצי",
      equipment: "נכסי ציוד כבד",
      coord: "תיאום מבצעי",
    },

    hero: {
      coords: "31.7683° N · 35.2137° E",
      theatre: "ישראל — תיאטרון מבצעי",
    },

    pathways: {
      eyebrow: "הקשרי פעולה",
      title: "מבצעי ממשל. פעילות מסחרית.",
      govEyebrow: "מסלול · 01",
      govSector: "ממשל וביטחון",
      govTitle: "תמיכת BOS למשימות קריטיות.",
      govBody:
        "יכולות תמיכת BOS/BOS-I לפעילות ממשל ארה״ב, צבא וקבלני prime ראשיים.",
      commEyebrow: "מסלול · 02",
      commSector: "פעילות מסחרית",
      commTitle: "קנה מידה תעשייתי. משמעת מבצעית.",
      commBody:
        "ציי רכב, אכלוס, לוגיסטיקה ותמיכת שטח עבור מפעילים מהמגזר הפרטי.",
    },

    mission: {
      eyebrow: "ביצוע משימה",
      title: "בנוי לביצוע משימות.",
      body: "אשחר תומכת בדרישות מבצעיות דינמיות בהן מהירות, תיאום ואמינות הם קריטיים. הצוות שלנו משלב רשתות ספקים מקומיות, ניהול פרויקטים בשטח, נכסי הסעות ותיאום לוגיסטי אזורי כדי לתמוך במשימות של ממשל וקבלנים — מתכנון ועד ביצוע.",
      credibility: [
        "אמון של צוותי ממשל ארה״ב וקבלני prime ראשיים הפועלים בישראל.",
        "ניסיון בדרישות שטח דחופות, סביבות עם גישה מבוקרת, ולוחות זמנים קריטיים למשימה.",
        "ביצוע מקומי עם הישג לוגיסטי אזורי.",
      ],
    },

    capabilities: {
      eyebrow: "יכולות תמיכה מבצעית",
      title: "BOS, לוגיסטיקה, הסעות, תמיכת חיים.",
      items: {
        "base-operational-support": {
          title: "תמיכה מבצעית לבסיס",
          short: "יכולות תמיכת BOS / BOS-I.",
          description:
            "תמיכה אינטגרטיבית לפעילות בסיס: שירותי שדה, תיאום ספקים, ציוד, אכלוס, הסעות וצרכי תמיכת חיים. יכולות BOS/BOS-I בהיקף המתאים לדרישה.",
        },
        "ground-transportation": {
          title: "הסעות יבשתיות והפעלת שאטלים",
          short: "תנועת כוח אדם, מתוזמנת ואד-הוק.",
          description:
            "תנועת כוח אדם, שאטלים מתוזמנים ואד-הוק, אוטובוסים, ואנים, רכבי כירות ותחבורה ייעודית למשימה. בקרת תנועה בין אתרים קדמיים ועורפיים.",
        },
        "cargo-equipment-movement": {
          title: "תנועת מטענים וציוד (GLOC)",
          short: "קווי תקשורת יבשתיים.",
          description:
            "תנועה יבשתית של ציוד, אספקה, מכולות ומטעני משימה לאורך מסלולים לוגיסטיים מאושרים. ביצוע GLOC, אסדנה ומסירה קדמית.",
        },
        "cross-border-logistics": {
          title: "לוגיסטיקה חוצת גבולות",
          short: "אסדנה אזורית, מעבר, מכס.",
          description:
            "תיאום של תנועת מטענים אזורית, אסדנה, מעבר גבול, תמיכת מכס וביצוע ברשת שותפים. הישג אזורי עם ביצוע מקומי.",
        },
        "fleet-operations": {
          title: "הפעלת ציי רכב",
          short: "נוסעים, הובלה, תחזוקה.",
          description:
            "רכבי נוסעים, ג׳יפים, טנדרים, ואנים, אוטובוסים, תיאום תחזוקה, רכבי חלופה וניהול צי מבצעי. קיבולת לטווח ארוך ולגאות פתאומית.",
        },
        "billeting-life-support": {
          title: "אכלוס ושירותי תמיכת חיים",
          short: "דיור, סניטציה, אחזקה.",
          description:
            "דיור, מלונות, אכלוס זמני, ניקיון, מים, סניטציה, תמיכת משרד ואחזקה מבצעית יומית. אכלוס מעשי בקנה מידה רחב.",
        },
        "airfield-remote-site": {
          title: "תמיכת שדה תעופה ואתרים מרוחקים",
          short: "בסיסי אוויר, אתרי מבצע מרוחקים, אזורי אסדנה.",
          description:
            "תמיכה לבסיסי אוויר, אתרי הפעלה מרוחקים, אזורי אסדנה, מתחמים זמניים ומיקומי משימה משתנים. לוגיסטיקה קדמית ותיאום באתר.",
        },
        "rapid-deployment-contingency": {
          title: "פריסה מהירה ותמיכת חירום",
          short: "רכש מהיר, גיוס, ביצוע בשטח.",
          description:
            "רכש מהיר, גיוס, תיאום ספקים, אספקת ציוד וביצוע שטח בלוחות זמנים דחופים. עמדה ערוכה לחירום.",
        },
      },
    },

    operations: {
      eyebrow: "מבצעים נבחרים",
      title: "מבוצע בשטח.",
      opLabel: "מבצע",
      catGovernment: "ממשל",
      catCommercial: "מסחרי",
      items: {
        "force-protection-deployment": {
          title: "תשתית להגנת כוח",
          meta: "ריבוי אתרים / לוח זמנים דחוס",
          blurb:
            "מחסומי הגנה מחוזקים ותשתית מודולרית הוצבו בשורת אתרים מבצעיים קדמיים.",
        },
        "billeting-program": {
          title: "תוכנית אכלוס בהיקף רחב",
          meta: "מעל 600 יחידות / פעילות מתמשכת",
          blurb:
            "תוכנית אכלוס מודולרית עם תמיכת חיים מלאה, מיזוג אקלים וניהול אתר 24/7.",
        },
        "rapid-procurement-program": {
          title: "רכש ותנועה מהירים",
          meta: "קריטי בזמן / מספר ספקים",
          blurb:
            "רכש מקצה לקצה, ניתוב GLOC ומסירה קדמית לדרישות מבצעיות קריטיות בזמן.",
        },
      },
    },

    experience: {
      eyebrow: "תמיכה בפעילות ממשל וקבלנים",
      title: "ניסיון מבצעי",
      body: "אשחר תומכת בדרישות מבצעיות, לוגיסטיות, הסעות, אכלוס ותשתיות ברחבי ישראל, כולל פעילות הכוללת סביבות של ממשל וקבלני prime ראשיים.",
      includes: "ניסיון מבצעי רלוונטי",
      disclaimer:
        "ההפניות לארגונים מוצגות אך ורק לשם שיקוף סביבות מבצעיות וניסיון רלוונטי ואינן מרמזות על אישור או שיוך פורמלי אלא אם כן צוין במפורש.",
      expand: {
        USAF: "חיל האוויר של ארה״ב",
        SOCCENT: "פיקוד מבצעים מיוחדים מרכזי",
        MARCENT: "כוחות המארינס המרכזיים של ארה״ב",
        MSOC: "פיקוד מבצעים מיוחדים של המארינס",
      },
    },

    closer: {
      eyebrow: "יצירת קשר",
      title: "ספרו לנו על המשימה.",
      sub: "היקף, לוח זמנים, מיקום. נחזור אליכם תוך 24 שעות.",
      cta: "יצירת קשר עם אשחר",
    },

    pages: {
      home: {
        eyebrow: "ישראל ומבצעים אזוריים — תמיכת BOS / BOS-I",
        headline: "תמיכת בסיס.\nלוגיסטיקה.\nתמיכת חיים.",
        sub: "תמיכה מבצעית מוכנה למשימה עבור ממשל ארה״ב, צבא וקבלני prime ראשיים ברחבי ישראל.",
        metaTitle: "אשחר — תמיכה מבצעית בישראל",
        metaDescription:
          "הסעות, אכלוס, תנועת מטענים ושירותי תמיכה מבצעית ברחבי ישראל.",
      },
      government: {
        eyebrow: "ממשל וביטחון — תמיכת BOS",
        headline: "תמיכת BOS\nלמשימות קריטיות.",
        sub: "יכולות תמיכת BOS/BOS-I לפעילות של ממשל ארה״ב, צבא וקבלני prime בישראל.",
        focusEyebrow: "דוקטרינת פעולה",
        focusTitle: "בנוי למשימות שאינן יכולות להמתין.",
        focus: [
          {
            title: "יכולות תמיכת BOS / BOS-I",
            body: "תמיכת בסיס משולבת — ספקים, ציוד, אכלוס, הסעות ותיאום תמיכת חיים בהיקף הדרישה.",
          },
          {
            title: "בקרת תנועה ו-GLOC",
            body: "תנועת כוח אדם, קווי תקשורת יבשתיים, ותנועת מטענים וציוד לאורך מסלולים מאושרים.",
          },
          {
            title: "היכרות עם רגולציה",
            body: "רשום ב-SAM. UEI VJ23VL3BNJL8 · NCAGE 7006A. מכיר תנאי FAR/DFARS וסביבות עם גישה מבוקרת.",
          },
          {
            title: "תמיכה באתרים קדמיים ומרוחקים",
            body: "אחזקה מתמשכת לאתרים קדמיים, מרוחקים ומבודדים — אכלוס, חשמל, דלק, הסעות ותיאום באתר.",
          },
          {
            title: "פריסה מהירה ותמיכת חירום",
            body: "ציוד פרוס מראש, ספקים מאומתים וצוותים זמינים לגיוס בתוך שעות.",
          },
        ],
        closerTitle: "מוכנים לפריסה?",
        closerSub: "תארו לנו את הדרישה. נחזור אליכם תוך 24 שעות.",
        closerCta: "יצירת קשר עם אשחר",
        metaTitle: "ממשל וביטחון — תמיכת BOS",
        metaDescription:
          "יכולות תמיכת BOS/BOS-I לפעילות של ממשל ארה״ב, צבא וקבלני prime בישראל.",
      },
      commercial: {
        eyebrow: "פעילות מסחרית",
        headline: "קנה מידה תעשייתי.\nמשמעת מבצעית.",
        sub: "ציי רכב, הסעות, אכלוס, לוגיסטיקה אזורית ותמיכת שטח עבור מפעילים מהמגזר הפרטי בישראל.",
        focusEyebrow: "נמסר",
        focusTitle: "להקים. להפעיל. לפנות.",
        focus: [
          {
            title: "צי רכב והסעות יבשתיות",
            body: "טנדרים, ג׳יפים, ואנים, אוטובוסים, תחבורת כירות, שאטלים, תחזוקה וגיוס מהיר.",
          },
          {
            title: "אכלוס ותמיכת חיים",
            body: "אכלוס מודולרי בקנה מידה, מלונות, ניקיון, סניטציה, מים, אחזקה יומית.",
          },
          {
            title: "לוגיסטיקה ותנועה אזורית",
            body: "נמלים, הובלה יבשתית, אחסנה, חלוקה, תיאום חוצה גבולות.",
          },
          {
            title: "רכש ואספקה מבצעית",
            body: "ספקים, תיאום, אספקת ציוד עבור דרישות קריטיות בזמן ומתמשכות.",
          },
          {
            title: "אתרים מבצעיים זמניים",
            body: "מתוכננים, נפרסים, מנוהלים ומפורקים — ביצוע מעשי משטח ריק לאתר מבצעי.",
          },
        ],
        closerTitle: "ספרו לנו על הדרישה.",
        closerSub: "היקף, לוח זמנים, מיקום. נחזור אליכם תוך 24 שעות.",
        closerCta: "התחילו פרויקט",
        metaTitle: "פעילות מסחרית",
        metaDescription:
          "ציי רכב והסעות יבשתיות, אכלוס ותמיכת חיים, לוגיסטיקה ותנועה אזורית עבור מפעילים מהמגזר הפרטי בישראל.",
      },
      capabilities: {
        eyebrow: "יכולות תמיכה מבצעית",
        headline: "BOS. לוגיסטיקה.\nהסעות.\nתמיכת חיים.",
        sub: "תמיכה מבצעית מוכנה למשימה — נכסים בבעלות, ספקים מאומתים וביצוע שטח ברחבי ישראל.",
        capabilityLabel: "יכולת",
        closerTitle: "ספרו לנו על המשימה.",
        metaTitle: "יכולות תמיכה מבצעית",
        metaDescription:
          "תמיכת BOS/BOS-I, הסעות יבשתיות, GLOC, לוגיסטיקה חוצת גבולות, ציי רכב, אכלוס ותמיכת חיים, שדות תעופה ואתרים מרוחקים, פריסה מהירה.",
      },
      projects: {
        eyebrow: "עבודה נבחרת",
        headline: "מבוצע\nבשטח.",
        sub: "פלח מייצג של עבודת BOS, לוגיסטיקה והסעות שנמסרה בתנאים מבצעיים.",
        metaTitle: "פרויקטים",
        metaDescription:
          "פרויקטים מבצעיים במגזרי ממשל, ביטחון ומסחר בישראל.",
      },
      contact: {
        eyebrow: "צור קשר",
        headline: "ספרו לנו על המשימה.",
        sub: "BOS, לוגיסטיקה, הסעות ותמיכת חיים. נחזור אליכם תוך 24 שעות.",
        directLabel: "ישיר",
        directValue: (name, phone) => `${name} · ${phone}`,
        emailLabel: "דוא״ל",
        whatsappLabel: "WhatsApp",
        metaTitle: "צור קשר",
        metaDescription:
          "צרו קשר עם אשחר לתמיכה מבצעית, לוגיסטיקה ושירותי הסעות בישראל.",
      },
    },
  },
};

/** Switch link target for the language toggle in the nav. */
export const otherLocale = (l: Locale): Locale => (l === "en" ? "he" : "en");

/** Convert an English route into the equivalent route in the other locale. */
export const swapLocalePath = (current: Locale, pathname: string): string => {
  const target = otherLocale(current);
  // Strip leading /he if present
  const naked = pathname.startsWith("/he")
    ? pathname.slice(3) || "/"
    : pathname;
  return target === "he"
    ? `/he${naked === "/" ? "" : naked}`
    : naked;
};
