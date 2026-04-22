import { Button } from "../Button";
import { Container } from "../Container";
import { Icon } from "../Icons";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 100% 50%, rgba(200,164,86,0.18), transparent 60%), radial-gradient(50% 50% at 0% 50%, rgba(200,164,86,0.10), transparent 60%)",
        }}
      />
      <Container className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            Get started
          </p>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-[48px] font-semibold leading-[1.1] tracking-tighter2 text-white">
            Need a Fast, Practical Solution in Israel?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">
            Whether you represent a government entity, international organization,
            or private company — we can help you move forward quickly.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact?type=quote" variant="primary">
              Request a Quote
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
