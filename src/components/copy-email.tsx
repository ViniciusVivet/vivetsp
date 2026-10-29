"use client";
import { useEffect, useRef, useState } from "react";
import { Check, Copy } from "lucide-react";
import { profile } from "@/data/profile";
export function CopyEmail() {
  const [status, setStatus] = useState("");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current);
    },
    [],
  );
  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setStatus("E-mail copiado!");
    } catch {
      setStatus("Selecione e copie o e-mail acima.");
    }
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(() => setStatus(""), 4000);
  }
  return (
    <div className="copy-email">
      <button type="button" onClick={copy}>
        {status === "E-mail copiado!" ? (
          <Check size={15} />
        ) : (
          <Copy size={15} />
        )}{" "}
        Copiar e-mail
      </button>
      <span role="status" aria-live="polite">
        {status}
      </span>
    </div>
  );
}
