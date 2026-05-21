import { Orbit } from "lucide-react";
import { CTAButton } from "./cta-button";
import { profile } from "@/data/profile";

export function OrbitamosSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="orbitamos">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="glass rounded-lg p-6 md:p-8">
          <div className="grid size-14 place-items-center rounded-lg border border-violet/35 bg-violet/16 text-violet">
            <Orbit size={28} />
          </div>
          <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            Orbitamos: meu laboratório de soluções digitais.
          </h2>
          <p className="mt-5 leading-7 text-white/68">
            A Orbitamos é onde minhas ideias de tecnologia viram serviço: sites, sistemas,
            automações, experiências digitais e projetos sob medida.
          </p>
          <CTAButton href={profile.orbitamosUrl} className="mt-7">
            Visitar site da Orbitamos
          </CTAButton>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {profile.orbitamos.map((item) => (
            <div key={item} className="glass rounded-lg p-5">
              <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                orbitamos
              </p>
              <h3 className="mt-4 text-2xl font-black text-white">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
