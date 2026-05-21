import { CheckCircle2 } from "lucide-react";
import { CTAButton } from "./cta-button";
import { SectionTitle } from "./section-title";
import { profile } from "@/data/profile";

export function ServicesSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="servicos">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="serviços" title="Precisa de presença digital com identidade?">
          Eu crio sites e páginas para artistas, marcas, pequenos negócios e projetos que
          precisam sair do improviso e ganhar presença de verdade.
        </SectionTitle>
        <div className="grid gap-5 lg:grid-cols-[1fr_0.72fr]">
          <div className="grid gap-3 sm:grid-cols-2">
            {profile.services.map((service) => (
              <div key={service} className="glass flex items-center gap-3 rounded-lg p-4">
                <CheckCircle2 className="shrink-0 text-spotify" size={20} />
                <span className="font-bold text-white/82">{service}</span>
              </div>
            ))}
          </div>
          <div className="glass rounded-lg p-6 md:p-8">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-electric">
              funil comercial
            </p>
            <h3 className="mt-4 text-3xl font-black leading-tight text-white">
              Site bom não é enfeite. É ponto de contato, vitrine e ferramenta de venda.
            </h3>
            <p className="mt-4 leading-7 text-white/64">
              Eu ajudo a transformar ideia crua em página clara, rápida e com cara de projeto
              sério, sem apagar a identidade de quem está por trás.
            </p>
            <div className="mt-7 grid gap-3">
              <CTAButton href={profile.contact.budgetUrl}>Pedir orçamento</CTAButton>
              <CTAButton href={profile.orbitamosUrl} variant="secondary">
                Conhecer a Orbitamos
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
