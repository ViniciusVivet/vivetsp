"use client";

import { ProjectCard } from "./project-card";
import { SectionTitle } from "./section-title";
import { profile } from "@/data/profile";

export function TechProjectsSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="tech">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="tech" title="Da rima para o código, sem trocar de essência.">
          Eu estudo tecnologia para construir ferramenta, vender solução e mostrar que a
          periferia também pode criar o software, não só consumir.
        </SectionTitle>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {profile.projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
