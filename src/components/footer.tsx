import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-10 md:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
        <p className="font-black uppercase tracking-[0.14em] text-white">
          VIVET SP <span className="text-electric">Arte, Código e Corre.</span>
        </p>
        <p>{profile.location}</p>
      </div>
    </footer>
  );
}
