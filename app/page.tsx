import { Hero } from "@/components/home/Hero";
import { OperationalScale } from "@/components/home/OperationalScale";
import { ValueStrip } from "@/components/home/ValueStrip";
import { CapabilityGroups } from "@/components/home/CapabilityGroups";
import { OperationalFlow } from "@/components/home/OperationalFlow";
import { HowWeOperate } from "@/components/home/HowWeOperate";
import { HowItWorks } from "@/components/home/HowItWorks";

export default function HomePage() {
  return (
    <>
      <Hero />
      <OperationalScale />
      <ValueStrip />
      <CapabilityGroups />
      <OperationalFlow />
      <HowWeOperate />
      <HowItWorks />
    </>
  );
}
