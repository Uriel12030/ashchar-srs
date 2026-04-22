import { Container } from "../Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.22]"
        style={{
          backgroundImage:
            "radial-gradient(60% 50% at 80% 10%, rgba(57,145,137,0.20), transparent 70%), radial-gradient(50% 40% at 0% 100%, rgba(160,168,188,0.10), transparent 70%)",
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
          <p className="font-display text-sm sm:text-base font-semibold uppercase tracking-[0.28em] text-accent">
            Your Mission, Our Logistics.
          </p>

          <h1 className="mt-8 font-display text-[40px] sm:text-6xl lg:text-[76px] font-semibold leading-[1.02] tracking-tighter2">
            Operational Solutions{" "}
            <span className="text-accent">Across Israel.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg lg:text-xl leading-relaxed text-white/70">
            Ashchar provides accommodation, infrastructure, equipment, and
            field support — coordinated across disciplines for government,
            defense, and private sector operations.
          </p>

          <div className="mt-12 flex items-center gap-3">
            <span className="h-px w-10 bg-accent/50" />
            <span className="font-mono text-[11px] tracking-[0.22em] text-white/50">
              ISRAEL · 31.7683°N 35.2137°E
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
