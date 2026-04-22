export type Service = {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  capabilities: string[];
  icon:
    | "bed"
    | "building"
    | "crane"
    | "container"
    | "bolt"
    | "truck"
    | "shield"
    | "tools"
    | "document";
};

export const services: Service[] = [
  {
    slug: "immediate-accommodation-solutions",
    title: "Immediate Accommodation Solutions",
    shortDescription:
      "Hotels, serviced apartments, and ready-to-use living solutions.",
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
    shortDescription:
      "End-to-end site setup including infrastructure and layout.",
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
    shortDescription:
      "Container offices, housing units, and field structures.",
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
    shortDescription:
      "Generators, power distribution, and environmental systems.",
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
    shortDescription:
      "Coordination with local authorities in collaboration with a leading Israeli law firm.",
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
];
