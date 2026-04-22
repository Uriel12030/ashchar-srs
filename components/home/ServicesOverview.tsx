import { Container } from "../Container";
import { SectionHeading } from "../SectionHeading";
import { ServiceCard } from "../ServiceCard";
import { Button } from "../Button";
import { Icon } from "../Icons";
import { services } from "@/data/services";

export function ServicesOverview() {
  return (
    <section id="services" className="bg-white">
      <Container className="py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <SectionHeading
            eyebrow="Services"
            title="Integrated on-the-ground solutions, delivered end-to-end."
            description="Ashchar provides integrated on-the-ground solutions for accommodation, infrastructure, equipment, and operational support across Israel — serving government, defense, and private sector clients."
          />
          <Button href="/services" variant="secondary" className="shrink-0">
            View all services
            <Icon name="arrow-right" size={16} />
          </Button>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
