type StatCardProps = {
  label: string;
  value: string;
  detail: string;
};

export function StatCard({ label, value, detail }: StatCardProps) {
  return (
    <div className="glass rounded-lg p-5 shadow-glow">
      <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-white/48">
        {label}
      </p>
      <div className="mt-4 flex items-end gap-2">
        <strong className="text-4xl font-black text-white md:text-5xl">{value}</strong>
      </div>
      <p className="mt-2 text-sm font-semibold text-electric">{detail}</p>
    </div>
  );
}
