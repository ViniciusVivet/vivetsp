import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  MoveUpRight,
  Github,
} from "lucide-react";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ChannelIcon, SocialLinks } from "@/components/identity";
import { CopyEmail } from "@/components/copy-email";
import { PortraitGallery } from "@/components/portrait-gallery";
import { VlogCard } from "@/components/vlog-card";
import { MotionStage, MotionRibbon } from "@/components/motion-stage";
import { channels, profile } from "@/data/profile";

export default function Home() {
  return (
    <MotionStage>
      <Header />
      <main id="main-content">
        <section id="inicio" className="hero" aria-labelledby="hero-title">
          <div className="hero-media">
            <Image
              className="hero-image"
              src="/images/vivet-home.webp"
              alt="Vivet de pé em uma passarela à noite, com roupa cinza e óculos escuros"
              fill
              priority
              sizes="(max-width: 600px) 100vw, 68vw"
            />
          </div>
          <div className="hero-shade" />
          <div className="hero-inner container">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow">
                <span /> DA ZONA LESTE PARA O MUNDO
              </p>
              <h1 id="hero-title" className="hero-wordmark">
                VIVET<span>SP</span>
              </h1>
              <p className="hero-name">VINICIUS / VIVET</p>
              <h2>
                Arte, código <span>& vida real.</span>
              </h2>
              <p className="hero-description">
                Rapper, criador e desenvolvedor.
                <br />
                Vários jeitos de contar a mesma história.
              </p>
              <a href="#universos" className="hero-cta">
                Explorar música, vídeos e projetos <ArrowDown size={16} />
              </a>
            </div>
            <p className="hero-note">
              a cidade inspira.
              <br />a gente cria.
              <svg viewBox="0 0 54 28" fill="none" aria-hidden="true">
                <path
                  d="m4 4 10 17L27 2l5 19L49 5l-5 20H13"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </p>
            <span className="hero-coordinate">
              23°33′S &nbsp; 46°38′W &nbsp; / &nbsp; SÃO PAULO
            </span>
          </div>
        </section>
        <section
          id="universos"
          className="channels-section container"
          aria-labelledby="channels-title"
        >
          <div className="section-topline">
            <h2 id="channels-title">Um pouco de cada mundo.</h2>
            <p>
              Escolha por onde me conhecer <ArrowDown size={13} />
            </p>
          </div>
          <div className="channel-grid">
            {channels.map((channel) =>
              channel.id === "videos" ? (
                <VlogCard key={channel.id} />
              ) : (
                <a
                  key={channel.id}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`channel-card ${channel.color} card-${channel.id}`}
                  aria-label={
                    channel.label +
                    ": " +
                    channel.title +
                    ": " +
                    channel.destination +
                    " (abre em nova aba)"
                  }
                >
                  <div className="card-image">
                    <Image
                      src={channel.image}
                      alt={
                        channel.id === "lancamento"
                          ? "Capa oficial do single Casa Bomba"
                          : ""
                      }
                      fill
                      sizes="(max-width: 360px) 90vw, (max-width: 900px) 45vw, 25vw"
                    />
                  </div>
                  <span className="card-shade" />
                  <span className="card-index">
                    <ChannelIcon name={channel.icon} /> {channel.label}
                  </span>
                  <div className="card-copy">
                    <h3>{channel.title}</h3>
                    <p>{channel.description}</p>
                    <span className="card-destination">
                      {channel.destination}
                      <span className="card-arrow">
                        <ArrowUpRight size={18} />
                      </span>
                    </span>
                  </div>
                </a>
              ),
            )}
          </div>
          <a
            className="github-callout github-feature"
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Do rascunho ao código. Ver meus projetos no GitHub (abre em nova aba)"
          >
            <Image
              className="dev-mascot"
              src="/images/dev-mascot.webp"
              alt=""
              fill
              sizes="(max-width: 600px) 100vw, 1200px"
            />
            <div className="github-feature-copy">
              <p className="eyebrow">
                <Github size={16} aria-hidden="true" /> CURTE O LADO DEV?
              </p>
              <h3>
                Do rascunho
                <br />
                ao código.
              </h3>
              <p>
                Projetos que estou construindo, ideias que estou testando e o
                que aprendo no caminho.
              </p>
              <span className="github-destination">
                Ver meus projetos no GitHub{" "}
                <ArrowUpRight size={18} aria-hidden="true" />
              </span>
            </div>
          </a>
          <div className="social-divider">
            <span />
            <SocialLinks />
            <span />
          </div>
        </section>
        <MotionRibbon />
        <section
          id="sobre"
          className="about-section container"
          aria-labelledby="about-title"
        >
          <PortraitGallery />
          <div className="about-copy">
            <p className="eyebrow">01 / SOBRE MIM</p>
            <h2 id="about-title">
              A mesma pessoa.
              <br />
              <span>Mais de um universo.</span>
            </h2>
            <p>
              Salve, eu sou o Vinicius. Na música, Vivet. Sou da Zona Leste de
              São Paulo e faço rap, registro os bastidores no Vivet TV e
              construo projetos com código.
            </p>
            <p>
              Gosto de entender como as coisas funcionam e de dividir o que
              aprendo. A experiência em sala de aula também faz parte do meu
              jeito de criar: tornar a tecnologia mais próxima de quem está
              começando.
            </p>
            <p>
              Na{" "}
              <a
                href={profile.links.orbitamos}
                target="_blank"
                rel="noopener noreferrer"
              >
                Orbitamos
              </a>
              , essa vontade vira sites, sistemas e automações para quem quer
              tirar um projeto do papel. Por aqui, compartilho esse caminho: os
              sons, as ideias em construção e a vida entre um e outro.
            </p>
            <div className="about-signature">
              <span>Vivet.</span>
              <p>
                ARTE NA ESSÊNCIA.
                <br />
                TECNOLOGIA NAS POSSIBILIDADES.
              </p>
            </div>
          </div>
        </section>
        <section
          id="contato"
          className="contact-section container"
          aria-labelledby="contact-title"
        >
          <div>
            <p className="eyebrow">02 / CONTATO</p>
            <h2 id="contact-title">
              Tem uma ideia?
              <br />
              <span>Bora trocar.</span>
            </h2>
            <p>
              Uma música, um projeto, uma colaboração.
              <br />
              Toda coisa boa começa com uma conversa.
            </p>
          </div>
          <div className="contact-actions">
            <a className="email-link" href={"mailto:" + profile.email}>
              <span>MANDA UM SALVE</span>
              <strong>{profile.email}</strong>
              <MoveUpRight size={27} strokeWidth={1} />
            </a>
            <CopyEmail />
            <div className="contact-other">
              <a
                href={profile.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chamar no Instagram <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.links.orbitamos}
                target="_blank"
                rel="noopener noreferrer"
              >
                Conhecer a Orbitamos <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </MotionStage>
  );
}
