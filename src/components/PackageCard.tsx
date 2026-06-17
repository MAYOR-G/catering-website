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
        "relative flex h-full flex-col p-10 transition duration-500 hover:-translate-y-2 border",
        item.highlighted
          ? "bg-charcoal text-cream border-gold/40 shadow-2xl shadow-gold/10"
          : "bg-ivory text-charcoal border-olive/20 shadow-xl shadow-charcoal/5"
      )}
    >
      {item.highlighted && (
        <span className="absolute -top-4 left-10 inline-flex items-center gap-1.5 bg-gold px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-charcoal">
          <Star className="h-3.5 w-3.5 fill-charcoal" aria-hidden="true" />
          Chef's Recommendation
        </span>
      )}
      <p
        className={cn(
          "text-[11px] font-bold uppercase tracking-[0.2em]",
          item.highlighted ? "text-gold" : "text-olive"
        )}
      >
        {item.eyebrow}
      </p>
      <h3 className="mt-4 font-display text-4xl font-medium">
        {item.name}
      </h3>
      <p
        className={cn(
          "mt-4 text-base leading-relaxed",
          item.highlighted ? "text-cream/80" : "text-ink/80"
        )}
      >
        {item.description}
      </p>
      
      <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-t border-current/20 pt-8">
        <div>
          <p className="text-sm font-semibold opacity-70 uppercase tracking-widest">Starting at</p>
          <p className="font-display text-5xl font-medium mt-1">{item.price}</p>
        </div>
        <p className="bg-current/5 px-4 py-2 text-sm font-semibold tracking-wider uppercase border border-current/10">
          {item.guestRange}
        </p>
      </div>

      <ul className="mt-8 flex-1 space-y-4">
        {item.features.map((feature) => (
          <li key={feature} className="flex gap-4 text-base leading-relaxed">
            <Check
              className={cn(
                "mt-1 h-5 w-5 shrink-0",
                item.highlighted ? "text-gold" : "text-olive"
              )}
              aria-hidden="true"
            />
            <span className={item.highlighted ? "text-cream/90" : "text-ink/90"}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <ButtonLink
        href="#contact"
        variant={item.highlighted ? "gold" : "secondary"}
        className={cn(
          "mt-10 w-full text-center py-4",
          item.highlighted ? "bg-gold text-charcoal hover:bg-gold/90" : "border-olive text-charcoal hover:bg-olive hover:text-white"
        )}
      >
        Request This Package
      </ButtonLink>
    </article>
  );
}
