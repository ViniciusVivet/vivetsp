import { ArrowUpRight } from "lucide-react";
import { SectionTitle } from "./section-title";
import { profile } from "@/data/profile";

export function LinksSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="links">
      <div className="mx-auto max-w-4xl">
        <SectionTitle title="Escolhe teu caminho." />
        <div className="grid gap-3 sm:grid-cols-2">
          {profile.officialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="glass group flex min-h-16 items-center justify-between rounded-lg p-4 font-black text-white transition hover:border-electric/50 hover:bg-electric/10"
            >
              {link.label}
              <ArrowUpRight
                className="text-white/35 transition group-hover:text-electric"
                size={19}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
