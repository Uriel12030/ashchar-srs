import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { CapabilityGroups } from "@/components/home/CapabilityGroups";
import { OperationalFlow } from "@/components/home/OperationalFlow";
import { HowWeOperate } from "@/components/home/HowWeOperate";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <CapabilityGroups />
      <OperationalFlow />
      <HowWeOperate />
      <HowItWorks />
    </>
  );
}
