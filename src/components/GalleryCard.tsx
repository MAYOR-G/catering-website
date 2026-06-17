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
        "group relative overflow-hidden bg-charcoal",
        featured ? "min-h-[480px] sm:min-h-[600px] lg:col-span-2" : "min-h-[380px] sm:min-h-[440px]"
      )}
    >
      <ImageFrame
        src={item.image}
        alt={item.title}
        className="absolute inset-0 h-full w-full bg-linen"
        imageClassName="transition-transform duration-[2s] ease-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/30 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-100" />
      
      <div className="absolute inset-x-0 bottom-0 p-8 text-cream transition-transform duration-500 sm:p-10 transform translate-y-4 group-hover:translate-y-0">
        <p className="mb-4 inline-flex rounded-full bg-gold/20 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-gold border border-gold/30">
          {item.occasion}
        </p>
        <h3 className="font-display text-3xl font-medium leading-tight sm:text-4xl">
          {item.title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/70 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100">
          {item.notes}
        </p>
      </div>
    </article>
  );
}
