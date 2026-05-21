import { SectionTitle } from "./section-title";
import { profile } from "@/data/profile";

export function TimelineSection() {
  return (
    <section className="px-4 py-20 md:px-6">
      <div className="mx-auto max-w-6xl">
        <SectionTitle title="Minha jornada ainda está carregando, mas já tem história." />
        <div className="glass rounded-lg p-4 md:p-6">
          <div className="grid gap-3">
            {profile.timeline.map((item, index) => (
              <div
                key={item}
                className="grid gap-3 rounded-lg border border-white/8 bg-black/24 p-4 md:grid-cols-[120px_1fr]"
              >
                <span className="font-mono text-xs font-black uppercase tracking-[0.2em] text-electric">
                  missão {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-black text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
