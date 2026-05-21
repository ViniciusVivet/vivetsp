"use client";

import { motion } from "framer-motion";
import { Code2, Music2, Rocket } from "lucide-react";
import Link from "next/link";
import { profile } from "@/data/profile";

const nav = [
  { label: "Música", href: "#musica" },
  { label: "Tech", href: "#tech" },
  { label: "Manifesto", href: "#manifesto" },
  { label: "Serviços", href: "#servicos" },
  { label: "Links", href: "/links" },
];

export function Header() {
  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-ink/78 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg border border-electric/40 bg-electric/10 text-electric shadow-glow">
            <Rocket size={19} />
          </span>
          <span>
            <span className="block text-sm font-black leading-none tracking-[0.18em]">
              {profile.name}
            </span>
            <span className="mt-1 flex items-center gap-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-white/45">
              <Music2 size={11} /> arte <Code2 size={11} /> código
            </span>
          </span>
        </Link>
        <div className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/62 transition hover:bg-white/8 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <a
          href={profile.contact.budgetUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-spotify/40 bg-spotify/12 px-3 py-2 text-xs font-black uppercase tracking-[0.12em] text-spotify transition hover:bg-spotify hover:text-ink"
        >
          orçamento
        </a>
      </nav>
    </motion.header>
  );
}
