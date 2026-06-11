import { cn } from "../lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl",
        className
      )}
    >
      <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-terracotta">
        {eyebrow}
      </p>
      <h2 className="font-display text-4xl font-semibold leading-[1.02] text-charcoal sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-8 text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
