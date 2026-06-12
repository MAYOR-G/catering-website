import type { GalleryItem } from "../data/siteContent";
import { cn } from "../lib/utils";
import { ImageFrame } from "./ImageFrame";

type GalleryCardProps = {
  item: GalleryItem;
  featured?: boolean;
};

export function GalleryCard({ item, featured = false }: GalleryCardProps) {
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[1.45rem] bg-charcoal shadow-card",
        featured ? "min-h-[420px] sm:min-h-[520px] lg:col-span-2" : "min-h-[300px] sm:min-h-[360px]"
      )}
    >
      <ImageFrame
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full bg-linen"
        imageClassName="transition duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/88 via-charcoal/22 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-cream sm:p-7">
        <p className="mb-3 inline-flex rounded-full bg-gold px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-charcoal">
          {item.occasion}
        </p>
        <h3 className="font-display text-3xl font-semibold leading-tight">
          {item.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] font-medium leading-7 text-cream/76">
          {item.notes}
        </p>
      </div>
    </article>
  );
}
