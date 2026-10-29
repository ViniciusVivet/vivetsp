import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Monogram } from "@/components/identity";
export function Footer() {
  return (
    <footer className="site-footer container">
      <Link href="/#inicio" className="footer-brand">
        <Monogram />
        <span>
          VIVET<small>ARTE, CÓDIGO E CORRE.</small>
        </span>
      </Link>
      <p>
        Feito em São Paulo. Com identidade.
        <br />
        <span>© {new Date().getFullYear()} Vivet.</span>
      </p>
      <Link className="text-link" href="/links">
        Todos os links <ArrowUpRight size={15} />
      </Link>
    </footer>
  );
}
