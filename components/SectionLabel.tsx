type Props = {
  index?: string;
  children: React.ReactNode;
};

export function SectionLabel({ index, children }: Props) {
  return (
    <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider2 text-graphite-200">
      {index && (
        <span className="font-mono text-olive-light">{index}</span>
      )}
      <span className="block h-px w-10 bg-graphite-500" />
      <span>{children}</span>
    </div>
  );
}
