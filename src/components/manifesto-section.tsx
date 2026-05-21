"use client";

import { motion } from "framer-motion";
import { CTAButton } from "./cta-button";

export function ManifestoSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="manifesto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative mx-auto max-w-6xl overflow-hidden rounded-lg border border-electric/25 bg-black/45 p-6 shadow-glow md:p-10"
      >
        <div className="absolute inset-0 -z-10 scanline opacity-50" />
        <p className="font-mono text-xs font-bold uppercase tracking-[0.28em] text-spotify">
          manifesto
        </p>
        <h2 className="mt-4 text-balance text-4xl font-black leading-tight text-white md:text-7xl">
          Manifesto Quebrada Tech
        </h2>
        <div className="mt-8 grid gap-7 text-lg leading-8 text-white/74 md:grid-cols-2">
          <p>
            A periferia não precisa escolher entre arte e estudo. O mesmo moleque que
            rima pode programar. A mesma mina que grava vídeo pode criar produto digital.
            O corre mudou de forma: agora também tem código, robótica, IA, design e estratégia.
          </p>
          <p>
            Eu quero viver da arte, mas entendi que viver da arte também exige estrutura.
            Por isso estudo programação, matemática, tecnologia e negócios. Não para virar
            outra pessoa, mas para ampliar o que eu já sou.
          </p>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <CTAButton href="#tech">Estuda mano</CTAButton>
          <CTAButton href="#tech" variant="secondary">
            Ver conteúdos tech
          </CTAButton>
          <CTAButton href="/links" variant="ghost">
            Começar pelo básico
          </CTAButton>
        </div>
      </motion.div>
    </section>
  );
}
