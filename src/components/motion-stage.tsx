"use client";
import { useEffect, useState, type ReactNode } from "react";

export function MotionStage({ children }: { children: ReactNode }) {
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    const visibility = () => setVisible(!document.hidden);
    update();
    visibility();
    query.addEventListener("change", update);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      query.removeEventListener("change", update);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, []);
  return (
    <div className="motion-stage" data-animated={!reduced && visible}>
      {children}
    </div>
  );
}

const words = [
  "Música",
  "Vivet TV",
  "Código",
  "Orbitamos",
  "São Paulo",
  "Vida real",
];
export function MotionRibbon() {
  return (
    <section className="motion-ribbon" aria-label="Os universos do Vivet">
      <div className="ribbon-window">
        <div className="ribbon-track">
          {[0, 1].map((copy) => (
            <div
              className="ribbon-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {words.map((word) => (
                <span key={word}>
                  {word}
                  <span className="ribbon-star" aria-hidden="true">
                    ✳
                  </span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
