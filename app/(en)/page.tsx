import { Hero } from "@/components/home/Hero";
import { OperationalScale } from "@/components/home/OperationalScale";
import { ValueStrip } from "@/components/home/ValueStrip";
import { CapabilityGroups } from "@/components/home/CapabilityGroups";
import { OperationalFlow } from "@/components/home/OperationalFlow";
import { HowWeOperate } from "@/components/home/HowWeOperate";
import { HowItWorks } from "@/components/home/HowItWorks";
import { getDict } from "@/lib/i18n";

export default function HomePage() {
  const t = getDict("en");
  return (
    <>
      <Hero t={t.hero} />
      <OperationalScale t={t.operationalScale} />
      <ValueStrip t={t.valueStrip} />
      <CapabilityGroups t={t.capabilityGroups} />
      <OperationalFlow t={t.operationalFlow} />
      <HowWeOperate t={t.howWeOperate} />
      <HowItWorks t={t.howItWorks} />
    </>
  );
}
