import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans, Permanent_Marker } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});
const marker = Permanent_Marker({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-marker",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://vivetsp.vercel.app"),
  alternates: { canonical: "/" },
  title: "VIVET SP | Arte, código & vida real",
  description:
    "Vivet: rapper, criador e desenvolvedor da Zona Leste de São Paulo. Música, vídeos, projetos e vários jeitos de contar a mesma história.",
  openGraph: {
    title: "VIVET SP | Arte, código & vida real",
    description:
      "Da Zona Leste para o mundo. Conheça os sons, vídeos e projetos do Vivet.",
    type: "website",
    locale: "pt_BR",
    siteName: "VIVET SP",
    images: [
      {
        url: "/images/vivet-home.webp",
        width: 1800,
        height: 2400,
        alt: "Vivet — Arte, código e vida real em São Paulo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "VIVET SP | Arte, código & vida real",
    description:
      "Da Zona Leste para o mundo. Música, vídeos e projetos do Vivet.",
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body
        className={
          sans.variable + " " + display.variable + " " + marker.variable
        }
      >
        <a className="skip-link" href="#main-content">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
