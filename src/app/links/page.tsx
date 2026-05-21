import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight, Code2, Music2 } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Links | VIVET SP",
  description: "Links oficiais do Vivet: música, tecnologia, Orbitamos e contato comercial.",
};

const featured = [
  { label: "Ouvir no Spotify", href: profile.links.spotify, accent: "spotify" },
  { label: "Pedir orçamento", href: profile.contact.budgetUrl, accent: "electric" },
  { label: "Conhecer a Orbitamos", href: profile.orbitamosUrl, accent: "violet" },
  { label: "Instagram", href: profile.links.instagram, accent: "white" },
];

export default function LinksPage() {
  return (
    <main className="min-h-screen px-4 py-6 md:px-6">
      <div className="mx-auto max-w-xl">
        <Link
          href="/"
          className="mb-6 inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-white/70 transition hover:text-white"
        >
          <ArrowLeft size={16} /> voltar para o site
        </Link>

        <section className="glass overflow-hidden rounded-lg">
          <div className="scanline p-6 text-center md:p-8">
            <div className="mx-auto grid size-28 place-items-center rounded-lg border border-electric/35 bg-black/35 shadow-glow">
              <span className="text-4xl font-black text-white">V</span>
            </div>
            <h1 className="mt-5 text-4xl font-black text-white">VIVET SP</h1>
            <p className="mt-2 text-xl font-black text-electric">{profile.slogan}</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-white/62">
              Rap, conteúdo, tecnologia e presença digital direto da Zona Leste.
            </p>
            <div className="mt-5 flex justify-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white/48">
              <span className="inline-flex items-center gap-1">
                <Music2 size={13} /> música
              </span>
              <span className="inline-flex items-center gap-1">
                <Code2 size={13} /> tech
              </span>
            </div>
          </div>

          <div className="grid gap-3 p-4">
            {featured.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-14 items-center justify-between rounded-lg border border-white/10 bg-white/[0.06] px-4 py-3 font-black text-white transition hover:border-electric/50 hover:bg-electric/10"
              >
                {link.label}
                <ArrowUpRight size={18} className="text-white/36" />
              </a>
            ))}
          </div>
        </section>

        <section className="mt-4 grid gap-3">
          {profile.officialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass flex min-h-14 items-center justify-between rounded-lg px-4 py-3 font-bold text-white/82 transition hover:border-spotify/50 hover:text-white"
            >
              {link.label}
              <ArrowUpRight size={17} className="text-spotify" />
            </a>
          ))}
        </section>

        <p className="py-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/38">
          {profile.location}
        </p>
      </div>
    </main>
  );
}
