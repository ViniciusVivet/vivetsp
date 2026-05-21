import Link from "next/link";
import type { ReactNode } from "react";

type CTAButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

const variants = {
  primary:
    "border-electric/70 bg-electric text-ink shadow-glow hover:bg-white hover:border-white",
  secondary:
    "border-white/15 bg-white/8 text-white hover:border-violet/70 hover:bg-violet/20",
  ghost:
    "border-white/10 bg-transparent text-white/80 hover:border-spotify/70 hover:text-white",
};

export function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const isExternal = href.startsWith("http");

  const classes = `inline-flex min-h-12 items-center justify-center rounded-lg border px-5 py-3 text-sm font-black uppercase tracking-[0.08em] transition duration-300 ${variants[variant]} ${className}`;

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
