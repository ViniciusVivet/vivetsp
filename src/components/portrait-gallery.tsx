"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import "./portrait-gallery.css";

const SLIDE_DURATION = 5000;

const portraits = [
  {
    src: "/images/vivet-sobre.webp",
    alt: "Vivet agachado na cidade à noite, de casaco branco e luvas estampadas",
    caption: "A cidade faz parte.",
    position: "center 55%",
  },
  {
    src: "/images/vivet-home.webp",
    alt: "Vivet de pé em uma passarela à noite, com roupa cinza e óculos escuros",
    caption: "Meu jeito de estar no mundo.",
    position: "center 44%",
  },
  {
    src: "/images/vivet-codigo.webp",
    alt: "Vinícius trabalhando no notebook na Orbitamos",
    caption: "Ideia aberta. Mão no código.",
    position: "60% 45%",
  },
];

export function PortraitGallery() {
  const root = useRef<HTMLDivElement>(null);
  const progressFill = useRef<HTMLSpanElement | null>(null);
  const elapsed = useRef(0);
  const dialog = useRef<HTMLDialogElement>(null);
  const gesture = useRef({ time: 0, x: 0, y: 0 });
  const suppressClick = useRef(false);
  const [active, setActive] = useState(0);
  const [automatic, setAutomatic] = useState(false);
  const [visible, setVisible] = useState(false);
  const [pageVisible, setPageVisible] = useState(true);
  const [hovered, setHovered] = useState(false);
  const [held, setHeld] = useState(false);
  const [keyboardFocus, setKeyboardFocus] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    setAutomatic(!preference.matches);
    const onPreferenceChange = () => {
      setAutomatic(!preference.matches);
    };
    const onVisibilityChange = () => setPageVisible(!document.hidden);
    onVisibilityChange();
    preference.addEventListener("change", onPreferenceChange);
    document.addEventListener("visibilitychange", onVisibilityChange);
    const observer = new IntersectionObserver(
      ([entry]) =>
        setVisible(entry.isIntersecting && entry.intersectionRatio >= 0.35),
      { threshold: 0.35 },
    );
    if (root.current) observer.observe(root.current);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", onPreferenceChange);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  const playing =
    automatic &&
    visible &&
    pageVisible &&
    !hovered &&
    !held &&
    !keyboardFocus &&
    !expanded;

  useEffect(() => {
    if (!expanded) return;
    const element = dialog.current;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element?.showModal();
    return () => {
      document.body.style.overflow = previous;
      if (element?.open) element.close();
    };
  }, [expanded]);

  useEffect(() => {
    if (!playing) return;
    let frame: number;
    let previous = performance.now();
    const tick = (now: number) => {
      elapsed.current += now - previous;
      previous = now;
      if (elapsed.current >= SLIDE_DURATION) {
        elapsed.current = 0;
        setActive((index) => (index + 1) % portraits.length);
      }
      if (progressFill.current) {
        progressFill.current.style.transform = `scaleX(${elapsed.current / SLIDE_DURATION})`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [playing]);

  function showPortrait(index: number) {
    const next = (index + portraits.length) % portraits.length;
    elapsed.current = 0;
    setActive(next);
    setAnnouncement(
      `Foto ${next + 1} de ${portraits.length}. ${portraits[next].alt}.`,
    );
    if (progressFill.current)
      progressFill.current.style.transform = "scaleX(0)";
  }

  return (
    <div
      ref={root}
      className="portrait-wrap portrait-gallery"
      role="region"
      aria-roledescription="carrossel"
      aria-label="Fotos de Vivet"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setHovered(true);
      }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={(event) => {
        if (!expanded && event.target.matches(":focus-visible")) setKeyboardFocus(true);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setKeyboardFocus(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          showPortrait(active + (event.key === "ArrowLeft" ? -1 : 1));
        }
      }}
    >
      <div className="portrait-frame gallery-frame">
        <button
          className="gallery-images gallery-open"
          type="button"
          aria-label={`Ampliar foto ${active + 1} de ${portraits.length}`}
          aria-haspopup="dialog"
          onPointerDown={(event) => {
            suppressClick.current = false;
            gesture.current = {
              time: performance.now(),
              x: event.clientX,
              y: event.clientY,
            };
            if (event.pointerType !== "mouse") setHeld(true);
          }}
          onPointerUp={(event) => {
            setHeld(false);
            if (event.pointerType !== "mouse")
              suppressClick.current =
                performance.now() - gesture.current.time > 250 ||
                Math.hypot(
                  event.clientX - gesture.current.x,
                  event.clientY - gesture.current.y,
                ) > 12;
          }}
          onPointerCancel={() => {
            setHeld(false);
            suppressClick.current = true;
          }}
          onPointerLeave={() => setHeld(false)}
          onContextMenu={(event) => event.preventDefault()}
          onClick={() => {
            if (!suppressClick.current) setExpanded(true);
            suppressClick.current = false;
          }}
        >
          {portraits.map((portrait, index) => (
            <div
              className="gallery-slide"
              key={portrait.src}
              data-active={index === active}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} de ${portraits.length}`}
              aria-hidden={index !== active}
            >
              <Image
                src={portrait.src}
                alt={portrait.alt}
                fill
                sizes="(max-width: 600px) 85vw, (max-width: 900px) 42vw, 400px"
                style={{ objectPosition: portrait.position }}
                draggable={false}
              />
            </div>
          ))}
        </button>
        <div className="gallery-overlay">
          <div className="gallery-caption" aria-live="off">
            <div className="gallery-caption-line">
              <span>VIVET / SÃO PAULO</span>
              <span className="gallery-count" aria-hidden="true">
                0{active + 1} / 0{portraits.length}
              </span>
            </div>
            <p>{portraits[active].caption}</p>
          </div>
          <div
            className="gallery-segments"
            role="group"
            aria-label="Escolher uma foto"
          >
            {portraits.map((portrait, index) => (
              <button
                type="button"
                key={portrait.src}
                className="gallery-segment"
                aria-label={`Ver foto ${index + 1} de ${portraits.length}: ${portrait.caption}`}
                aria-current={index === active ? "true" : undefined}
                onClick={() => showPortrait(index)}
              >
                <span className="gallery-track" aria-hidden="true">
                  <span
                    className="gallery-fill"
                    ref={
                      index === active
                        ? (element) => {
                            progressFill.current = element;
                            if (element)
                              element.style.transform = `scaleX(${elapsed.current / SLIDE_DURATION})`;
                          }
                        : undefined
                    }
                    style={{ transform: `scaleX(${index < active ? 1 : 0})` }}
                  />
                </span>
              </button>
            ))}
          </div>
          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-expand"
              onClick={() => setExpanded(true)}
              aria-label="Ampliar foto"
            >
              <Expand size={14} aria-hidden="true" />
              <span>Ampliar</span>
            </button>
            <button
              type="button"
              onClick={() => showPortrait(active - 1)}
              aria-label="Foto anterior"
            >
              <ChevronLeft size={20} aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => showPortrait(active + 1)}
              aria-label="Próxima foto"
            >
              <ChevronRight size={20} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <span className="portrait-note">feito de vivência.</span>
      <dialog
        ref={dialog}
        className="photo-dialog"
        aria-label="Foto ampliada de Vivet"
        onClose={() => {
          elapsed.current = 0;
          setExpanded(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        <button
          className="photo-close"
          type="button"
          aria-label="Fechar foto ampliada"
          onClick={() => dialog.current?.close()}
          autoFocus
        >
          <X size={22} aria-hidden="true" />
        </button>
        <div
          className="photo-stage"
          onClick={(event) => {
            if (event.target === event.currentTarget) dialog.current?.close();
          }}
        >
          {expanded && (
            <Image
              src={portraits[active].src}
              alt={portraits[active].alt}
              width={900}
              height={1200}
              sizes="(max-width: 600px) 95vw, 75vh"
              draggable={false}
              onPointerDown={(event) => {
                gesture.current = {
                  time: performance.now(),
                  x: event.clientX,
                  y: event.clientY,
                };
                event.currentTarget.setPointerCapture(event.pointerId);
              }}
              onPointerUp={(event) => {
                const dx = event.clientX - gesture.current.x;
                const dy = event.clientY - gesture.current.y;
                if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy))
                  showPortrait(active + (dx < 0 ? 1 : -1));
              }}
            />
          )}
        </div>
        <div className="photo-navigation">
          <button
            type="button"
            onClick={() => showPortrait(active - 1)}
            aria-label="Foto anterior ampliada"
          >
            <ChevronLeft size={24} aria-hidden="true" />
          </button>
          <span>
            {active + 1} / {portraits.length}
          </span>
          <button
            type="button"
            onClick={() => showPortrait(active + 1)}
            aria-label="Próxima foto ampliada"
          >
            <ChevronRight size={24} aria-hidden="true" />
          </button>
        </div>
      </dialog>
      <span className="sr-only" role="status" aria-live="polite">
        {announcement}
      </span>
    </div>
  );
}
