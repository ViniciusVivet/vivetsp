"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { Monogram } from "@/components/identity";
const items = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "contato", label: "Contato" },
];
export function Header() {
  const [active, setActive] = useState("inicio");
  useEffect(() => {
    let frame = 0;
    function update() {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (
          window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 4
        ) {
          setActive("contato");
          return;
        }
        const current = [...items].reverse().find(({ id }) => {
          const section = document.getElementById(id);
          return (
            section &&
            section.getBoundingClientRect().top <= window.innerHeight * 0.4
          );
        });
        setActive(current?.id ?? "inicio");
      });
    }
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner container">
        <Link href="/#inicio" className="brand" aria-label="Vivet — início">
          <Monogram />
          <span>
            VIVET<span className="brand-sp">SP</span>
          </span>
        </Link>
        <nav aria-label="Navegação principal">
          {items.map(({ id, label }) => (
            <Link
              key={id}
              href={"#" + id}
              className={active === id ? "nav-link active" : "nav-link"}
              aria-current={active === id ? "location" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>
        <span className="location-label">
          <MapPin size={13} aria-hidden="true" /> SÃO PAULO, SP{" "}
          <span className="location-dot" />
        </span>
      </div>
    </header>
  );
}
