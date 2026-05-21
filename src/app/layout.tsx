import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VIVET SP | Arte, Código e Corre",
  description:
    "Site oficial do Vivet: rapper da Zona Leste, criador de conteúdo, estudante de tecnologia e fundador da Orbitamos.",
  openGraph: {
    title: "VIVET SP | Arte, Código e Corre",
    description:
      "Rapper da Zona Leste construindo música, tecnologia e futuro.",
    type: "website",
    locale: "pt_BR",
    siteName: "VIVET SP",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIVET SP | Arte, Código e Corre",
    description:
      "Rapper da Zona Leste construindo música, tecnologia e futuro.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
