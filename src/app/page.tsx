import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LinksSection } from "@/components/links-section";
import { ManifestoSection } from "@/components/manifesto-section";
import { MusicSection } from "@/components/music-section";
import { OrbitamosSection } from "@/components/orbitamos-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { TechProjectsSection } from "@/components/tech-projects-section";
import { TimelineSection } from "@/components/timeline-section";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsSection />
        <MusicSection />
        <TechProjectsSection />
        <ManifestoSection />
        <ServicesSection />
        <OrbitamosSection />
        <TimelineSection />
        <LinksSection />
      </main>
      <Footer />
    </>
  );
}
