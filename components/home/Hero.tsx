import { Container } from "../Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.2]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 10%, rgba(200,164,86,0.10), transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-24 right-6 hidden md:block font-mono text-[10px] tracking-[0.22em] text-white/25"
      >
        31.7683°N · 35.2137°E
      </div>

      <Container className="relative pt-40 pb-28 lg:pt-52 lg:pb-40">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" />
            Ashchar SRS · Israel
          </div>

          <h1 className="mt-8 font-display text-[40px] sm:text-6xl lg:text-[76px] font-semibold leading-[1.02] tracking-tighter2">
            Operational Solutions{" "}
            <span className="text-accent">Across Israel.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/70">
            Ashchar SRS provides accommodation, infrastructure, equipment, and
            field support — coordinated across disciplines for government,
            defense, and private sector operations.
          </p>

          <div className="mt-12 flex items-center gap-4">
            <span className="font-display text-xs uppercase tracking-[0.28em] text-white/50">
              Your Mission, Our Logistics.
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
