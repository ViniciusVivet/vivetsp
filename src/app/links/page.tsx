import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Github, Mail } from "lucide-react";
import { ChannelIcon, SocialLinks } from "@/components/identity";
import { channels, profile } from "@/data/profile";

export const metadata: Metadata = {
  alternates: { canonical: "/links" },
  title: "Todos os links | VIVET SP",
  description:
    "Vídeos, músicas, projetos e contato. Encontre o universo do Vivet em um só lugar.",
};
export default function LinksPage() {
  return (
    <main id="main-content" className="links-page">
      <Image
        src="/images/vivet-home.webp"
        className="links-backdrop"
        fill
        sizes="100vw"
        alt=""
        priority
      />
      <div className="links-shell">
        <Link href="/" className="links-back">
          <ArrowLeft size={16} /> Conheça o site
        </Link>
        <header className="links-profile">
          <div className="links-avatar">
            <Image
              src="/images/vivet-sobre.webp"
              fill
              sizes="90px"
              alt="Vivet usando casaco branco com capuz"
              priority
            />
          </div>
          <h1>
            VIVET<span>SP</span>
          </h1>
          <p>Arte, código & vida real.</p>
          <span>ZONA LESTE, SÃO PAULO</span>
        </header>
        <div className="bio-links">
          {channels.map((channel) => (
            <a
              key={channel.id}
              href={channel.href}
              target="_blank"
              rel="noopener noreferrer"
              className={"bio-link " + channel.color}
            >
              <span className="bio-icon">
                <ChannelIcon name={channel.icon} />
              </span>
              <span>
                <strong>
                  {channel.id === "lancamento"
                    ? "Casa Bomba — lançamento"
                    : channel.id === "spotify"
                      ? "Vivet no Spotify"
                      : channel.title}
                </strong>
                <small>{channel.destination}</small>
              </span>
              <span className="sr-only"> (abre em nova aba)</span>
              <ArrowUpRight size={19} />
            </a>
          ))}
          <a
            className="bio-link"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Meu GitHub — projetos, estudos e código (abre em nova aba)"
          >
            <span className="bio-icon">
              <Github size={24} />
            </span>
            <span>
              <strong>Meu GitHub</strong>
              <small>Projetos, estudos e código</small>
            </span>
            <ArrowUpRight size={19} />
          </a>
          <a className="bio-link" href={"mailto:" + profile.email}>
            <span className="bio-icon">
              <Mail size={24} />
            </span>
            <span>
              <strong>Manda um salve</strong>
              <small>Projetos, parcerias e ideias</small>
            </span>
            <ArrowUpRight size={19} />
          </a>
        </div>
        <SocialLinks />
        <p className="links-footnote">MESMA ENERGIA. NOVOS CAPÍTULOS.</p>
      </div>
    </main>
  );
}
