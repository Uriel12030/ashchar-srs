import { Button } from "../Button";
import { Container } from "../Container";
import { Icon } from "../Icons";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(60% 60% at 80% 0%, rgba(200,164,86,0.15), transparent 60%), radial-gradient(50% 50% at 10% 100%, rgba(200,164,86,0.10), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <Container className="relative pt-36 pb-24 lg:pt-44 lg:pb-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Operating across Israel — Government · Defense · Private Sector
          </div>

          <h1 className="mt-7 font-display text-4xl sm:text-5xl lg:text-[64px] font-semibold leading-[1.05] tracking-tighter2">
            Rapid Logistics,
            <br className="hidden sm:block" />{" "}
            Infrastructure &{" "}
            <span className="text-accent">Operational Solutions</span>
            <br className="hidden sm:block" /> Across Israel
          </h1>

          <p className="mt-7 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/75">
            Ashchar SRS delivers fast-response accommodation, infrastructure,
            equipment, and field support solutions for government, defense, and
            private sector clients operating in Israel.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4">
            <Button href="/contact?type=quote" variant="primary">
              Request a Quote
              <Icon name="arrow-right" size={16} />
            </Button>
            <Button href="/contact" variant="ghost">
              Contact Us
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              {/* tagline */}
              Your Mission, Our Logistics.
            </span>
            <span className="hidden sm:block h-3 w-px bg-white/20" />
            <span className="text-white/60">
              Fast coordination. Practical execution. Local capability.
            </span>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-navy-900/40"
      />
    </section>
  );
}
