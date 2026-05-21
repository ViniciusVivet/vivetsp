import { ArrowUpRight } from "lucide-react";
import { CTAButton } from "./cta-button";
import type { Project } from "@/data/profile";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass flex h-full flex-col rounded-lg p-5">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-spotify">
            {project.status}
          </p>
          <h3 className="mt-2 text-xl font-black text-white">{project.name}</h3>
        </div>
        <div className="rounded-md border border-white/10 bg-white/5 p-2 text-electric">
          <ArrowUpRight size={18} />
        </div>
      </div>
      <p className="flex-1 text-sm leading-6 text-white/66">{project.description}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-black/20 px-2.5 py-1 font-mono text-[11px] font-bold uppercase tracking-[0.12em] text-white/70"
          >
            {tech}
          </span>
        ))}
      </div>
      {project.href ? (
        <CTAButton href={project.href} variant="ghost" className="mt-5 w-full">
          abrir projeto
        </CTAButton>
      ) : null}
    </article>
  );
}
