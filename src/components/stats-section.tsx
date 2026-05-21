"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";
import { StatCard } from "./stat-card";
import { profile } from "@/data/profile";

export function StatsSection() {
  return (
    <section className="px-4 py-20 md:px-6" id="numeros">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Não é só estética. É construção.">
          Cada número aqui representa um pedaço do corre: música lançada,
          conteúdo postado, aula dada, site entregue e ideia tirada do papel.
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.stats.map((stat, index) => (
            <motion.div
              key={`${stat.label}-${stat.detail}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: index * 0.04 }}
            >
              <StatCard {...stat} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
