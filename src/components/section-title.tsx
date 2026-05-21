type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionTitle({ eyebrow, title, children }: SectionTitleProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      {eyebrow ? (
        <p className="mb-3 font-mono text-xs font-bold uppercase tracking-[0.28em] text-electric">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {children ? (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/68 md:text-lg">
          {children}
        </p>
      ) : null}
    </div>
  );
}
