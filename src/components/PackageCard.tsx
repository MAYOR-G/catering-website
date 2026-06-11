import { Check, Star } from "lucide-react";
import type { Package } from "../data/siteContent";
import { cn } from "../lib/utils";
import { ButtonLink } from "./ButtonLink";

type PackageCardProps = {
  item: Package;
};

export function PackageCard({ item }: PackageCardProps) {
  return (
    <article
      className={cn(
        "relative flex h-full flex-col rounded-[1.45rem] border p-6 shadow-card transition duration-300 hover:-translate-y-1",
        item.highlighted
          ? "border-gold/55 bg-charcoal text-cream shadow-lift"
          : "border-olive/12 bg-white/76 text-charcoal"
      )}
    >
      {item.highlighted ? (
        <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-black uppercase tracking-[0.14em] text-charcoal">
          <Star className="h-3.5 w-3.5 fill-charcoal" aria-hidden="true" />
          Recommended
        </span>
      ) : null}
      <p
        className={cn(
          "text-xs font-black uppercase tracking-[0.2em]",
          item.highlighted ? "text-gold" : "text-terracotta"
        )}
      >
        {item.eyebrow}
      </p>
      <h3 className="mt-4 font-display text-3xl font-semibold">
        {item.name}
      </h3>
      <p
        className={cn(
          "mt-3 text-[15px] leading-7",
          item.highlighted ? "text-cream/72" : "text-ink/70"
        )}
      >
        {item.description}
      </p>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-current/12 pt-5">
        <div>
          <p className="text-sm font-bold opacity-70">Starting at</p>
          <p className="font-display text-4xl font-semibold">{item.price}</p>
        </div>
        <p className="rounded-full bg-current/8 px-3 py-1 text-sm font-extrabold">
          {item.guestRange}
        </p>
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {item.features.map((feature) => (
          <li key={feature} className="flex gap-3 text-[15px] leading-6">
            <Check
              className={cn(
                "mt-0.5 h-5 w-5 shrink-0",
                item.highlighted ? "text-gold" : "text-olive"
              )}
              aria-hidden="true"
            />
            <span className={item.highlighted ? "text-cream/78" : "text-ink/72"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>
      <ButtonLink
        href="#contact"
        variant={item.highlighted ? "gold" : "secondary"}
        className="mt-7 w-full"
      >
        Request this package
      </ButtonLink>
    </article>
  );
}
