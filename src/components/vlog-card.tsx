"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Video, X } from "lucide-react";
import "./vlog-card.css";

const videoUrl = "https://www.youtube.com/watch?v=b7re8uY8Pf4";

export function VlogCard() {
  const [open, setOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!open || !dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      document.body.style.overflow = previousOverflow;
      if (dialog.open) dialog.close();
    };
  }, [open]);

  function closePlayer() {
    setOpen(false);
    openerRef.current?.focus();
  }

  return (
    <>
      <article
        className="channel-card gold card-videos vlog-card"
        aria-labelledby="vlog-title"
      >
        <button
          ref={openerRef}
          className="card-image vlog-preview"
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Assistir aqui: meu vlog sobre música e faculdade"
          aria-haspopup="dialog"
        >
          <Image
            src="/images/vivet-tv.webp"
            alt=""
            fill
            sizes="(max-width: 360px) 90vw, (max-width: 900px) 45vw, 25vw"
          />
          <span className="vlog-play-label">
            <Play size={15} fill="currentColor" aria-hidden="true" />
            Assistir aqui
          </span>
        </button>
        <span className="card-index">
          <Video aria-hidden="true" /> Vlogs & vida real
        </span>
        <div className="card-copy">
          <h3 id="vlog-title">Vivet TV</h3>
          <p>Meu corre, os bastidores e a vida do outro lado da câmera.</p>
          <a
            className="card-destination vlog-channel-link"
            href="https://www.youtube.com/@VivetTv"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir para o canal
            <span className="sr-only"> Vivet TV (abre em nova aba)</span>
            <span className="card-arrow">
              <ArrowUpRight size={18} aria-hidden="true" />
            </span>
          </a>
        </div>
      </article>
      <dialog
        ref={dialogRef}
        className="vlog-dialog"
        aria-labelledby="vlog-dialog-title"
        onClose={closePlayer}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom
          )
            closePlayer();
        }}
      >
        <div className="vlog-dialog-heading">
          <div>
            <span>VIVET TV / BASTIDORES</span>
            <h2 id="vlog-dialog-title">
              Música, faculdade e os próximos passos.
            </h2>
          </div>
          <button
            type="button"
            className="vlog-close"
            onClick={closePlayer}
            aria-label="Fechar vídeo"
            autoFocus
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        {open && (
          <iframe
            className="vlog-player"
            src="https://www.youtube-nocookie.com/embed/b7re8uY8Pf4?autoplay=1&playsinline=1&rel=0"
            title="Vivet TV — Pausei minha carreira musical para focar na faculdade"
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
        <div className="vlog-dialog-footer">
          <p>Se o vídeo não carregar por aqui:</p>
          <a href={videoUrl} target="_blank" rel="noopener noreferrer">
            Assistir no YouTube <ArrowUpRight size={16} aria-hidden="true" />
            <span className="sr-only"> (abre em nova aba)</span>
          </a>
        </div>
      </dialog>
    </>
  );
}
