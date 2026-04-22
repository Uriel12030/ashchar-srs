import { Hero } from "@/components/home/Hero";
import { ValueStrip } from "@/components/home/ValueStrip";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyAshchar } from "@/components/home/WhyAshchar";
import { HowItWorks } from "@/components/home/HowItWorks";
import { UseCases } from "@/components/home/UseCases";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ValueStrip />
      <ServicesOverview />
      <WhyAshchar />
      <HowItWorks />
      <UseCases />
      <CTASection />
    </>
  );
}
