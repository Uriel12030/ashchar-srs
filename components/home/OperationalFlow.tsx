import { Container } from "../Container";
import { Icon, type IconName } from "../Icons";

type FlowNode = {
  icon: IconName;
  label: string;
  note: string;
};

const nodes: FlowNode[] = [
  { icon: "document", label: "Requirement", note: "Scope · Location · Timeline" },
  { icon: "bed", label: "Accommodation", note: "Teams housed and ready" },
  { icon: "bolt", label: "Infrastructure", note: "Site utilities in place" },
  { icon: "truck", label: "Equipment & Logistics", note: "Machinery and transport" },
  { icon: "shield", label: "Operational Site", note: "Handover and execution" },
];

export function OperationalFlow() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <Container className="relative py-24 lg:py-36">
        <div className="max-w-3xl">
          <p className="font-mono text-[11px] tracking-[0.22em] text-accent">
            / PROCESS
          </p>
          <h2 className="mt-5 font-display text-3xl lg:text-[44px] font-semibold leading-[1.08] tracking-tighter2">
            From requirement to an{" "}
            <span className="text-accent">operational site.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/65">
            A single coordinated workflow — from the initial requirement through
            to a functioning operational setup on the ground.
          </p>
        </div>

        <div className="mt-16 lg:mt-20">
          <div className="hidden lg:block">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute left-10 right-10 top-10 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
              />
              <ol className="relative grid grid-cols-5 gap-4">
                {nodes.map((node, i) => (
                  <li
                    key={node.label}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative inline-flex h-20 w-20 items-center justify-center rounded-full border border-accent/30 bg-navy text-accent ring-[6px] ring-navy">
                      <Icon name={node.icon} size={26} />
                    </div>
                    <p className="mt-6 font-mono text-[10px] tracking-[0.22em] text-accent">
                      / {String(i + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-base font-semibold text-white">
                      {node.label}
                    </h3>
                    <p className="mt-1.5 max-w-[180px] text-xs leading-relaxed text-white/55">
                      {node.note}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <ol className="lg:hidden space-y-0">
            {nodes.map((node, i) => (
              <li
                key={node.label}
                className="flex items-start gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-accent/30 bg-navy-700 text-accent">
                    <Icon name={node.icon} size={22} />
                  </div>
                  {i < nodes.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="my-2 h-14 w-px bg-accent/30"
                    />
                  )}
                </div>
                <div className="flex-1 pt-3 pb-6">
                  <p className="font-mono text-[10px] tracking-[0.22em] text-accent">
                    / {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1.5 font-display text-base font-semibold text-white">
                    {node.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-white/60">
                    {node.note}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
