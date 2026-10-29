import {
  AudioLines,
  Code2,
  Github,
  Instagram,
  Linkedin,
  Video,
  Youtube,
} from "lucide-react";
import { profile } from "@/data/profile";

export function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="36"
      height="44"
      viewBox="0 0 36 44"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 8 18 39 33 5M6 2l12 25L28 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
export function SpotifyIcon({ size = 22 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M6.5 9c3.6-1.1 7.4-.9 11 1M7.2 12.2c3-1 6.5-.7 9.6.9M8 15.2c2.5-.7 5.2-.5 7.8.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
export function ChannelIcon({ name }: { name: string }) {
  if (name === "spotify") return <SpotifyIcon size={25} />;
  const Icon = name === "video" ? Video : name === "music" ? AudioLines : Code2;
  return <Icon size={25} strokeWidth={1.5} aria-hidden="true" />;
}
export function SocialLinks() {
  return (
    <div className="social-links" aria-label="Redes sociais">
      <a
        href={profile.links.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vivet no YouTube (abre em nova aba)"
      >
        <Youtube size={21} />
      </a>
      <a
        href={profile.links.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vivet no Instagram (abre em nova aba)"
      >
        <Instagram size={20} />
      </a>
      <a
        href={profile.links.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vivet no GitHub (abre em nova aba)"
      >
        <Github size={20} />
      </a>
      <a
        href={profile.links.spotify}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vivet no Spotify (abre em nova aba)"
      >
        <SpotifyIcon size={21} />
      </a>
      <a
        href={profile.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Vivet no LinkedIn (abre em nova aba)"
      >
        <Linkedin size={19} />
      </a>
    </div>
  );
}
