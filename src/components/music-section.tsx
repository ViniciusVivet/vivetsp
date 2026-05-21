"use client";

import { motion } from "framer-motion";
import { Disc3, Play } from "lucide-react";
import { CTAButton } from "./cta-button";
import { SectionTitle } from "./section-title";
import { profile } from "@/data/profile";

export function MusicSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="musica">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="música" title="Som de quem vive o corre por dentro.">
          Minha música nasce da mistura entre vivência, ambição, caos, fé,
          estética e vontade de furar o teto. Não é só entretenimento. É registro de fase.
        </SectionTitle>
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass rounded-lg p-5 md:p-7"
          >
            <div className="flex items-center gap-3">
              <div className="grid size-14 place-items-center rounded-lg bg-spotify text-ink">
                <Play fill="currentColor" size={24} />
              </div>
              <div>
                <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-white/44">
                  preparado para embed
                </p>
                <h3 className="text-2xl font-black text-white">BET777 / Sem Simpatia</h3>
              </div>
            </div>
            <div className="mt-8 aspect-video rounded-lg border border-white/10 bg-black/35 p-5">
              <div className="flex h-full flex-col justify-between">
                <Disc3 className="text-electric" size={38} />
                <p className="max-w-md text-lg font-black leading-tight text-white">
                  Espaço pronto para receber player do Spotify, YouTube Music ou clipe oficial.
                </p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <CTAButton href={profile.links.spotify}>Spotify</CTAButton>
              <CTAButton href={profile.links.youtubeMusic} variant="secondary">
                YouTube música
              </CTAButton>
            </div>
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {profile.songs.map((song) => (
              <article key={song.name} className="glass rounded-lg p-5">
                <p className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-electric">
                  {song.tag}
                </p>
                <h3 className="mt-3 text-2xl font-black text-white">{song.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/64">{song.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
