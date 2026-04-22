import type { IconName } from "@/components/Icons";

export type CapabilityGroup = {
  id: string;
  number: string;
  title: string;
  summary: string;
  icon: IconName;
  scope: string[];
};

export const capabilityGroups: CapabilityGroup[] = [
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
];
