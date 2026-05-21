"use client";

import { motion } from "framer-motion";
import { Terminal, Zap } from "lucide-react";
import { CTAButton } from "./cta-button";
import { profile } from "@/data/profile";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-16 pt-28 md:px-6 md:pt-36">
      <div className="absolute inset-0 -z-10 scanline opacity-40" />
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 inline-flex rounded-md border border-electric/30 bg-electric/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.24em] text-electric">
            {profile.guide}
          </p>
          <h1 className="text-balance text-6xl font-black leading-[0.88] text-white md:text-8xl lg:text-9xl">
            VIVET <span className="text-electric">SP</span>
          </h1>
          <p className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
            {profile.slogan}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {profile.heroText}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <CTAButton href={profile.links.spotify}>Ouvir músicas</CTAButton>
            <CTAButton href="#tech" variant="secondary">
              Ver projetos tech
            </CTAButton>
            <CTAButton href={profile.contact.budgetUrl} variant="secondary">
              Pedir um site
            </CTAButton>
            <CTAButton href={profile.orbitamosUrl} variant="ghost">
              Orbitamos
            </CTAButton>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative"
        >
          <div className="glass relative overflow-hidden rounded-lg p-5 shadow-violet">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                <Terminal size={16} /> vivet.system
              </div>
              <span className="rounded-full bg-spotify/18 px-3 py-1 font-mono text-[10px] font-bold uppercase text-spotify">
                online
              </span>
            </div>
            <div className="grid gap-3">
              {[
                ["arte", "beats, voz, vídeo, estética"],
                ["código", "Next.js, Supabase, produto"],
                ["corre", "aula, cliente, estudo, visão"],
              ].map(([title, desc], index) => (
                <motion.div
                  key={title}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.25 + index * 0.12 }}
                  className="rounded-lg border border-white/10 bg-black/24 p-4"
                >
                  <p className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-[0.2em] text-electric">
                    <Zap size={14} /> {title}
                  </p>
                  <p className="mt-2 text-2xl font-black text-white">{desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-5 rounded-lg border border-violet/30 bg-violet/10 p-4 font-mono text-sm leading-7 text-white/74">
              <span className="text-spotify">$</span> npm run futuro
              <br />
              <span className="text-white/34">buildando identidade, ferramenta e renda...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
