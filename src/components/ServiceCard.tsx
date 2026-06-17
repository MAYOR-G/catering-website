import type { Service } from "../data/siteContent";
import { ImageFrame } from "./ImageFrame";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden bg-transparent transition duration-500 hover:-translate-y-2">
      <ImageFrame
        src={service.image}
        alt={service.title}
        className="h-64 sm:h-72 w-full bg-linen"
        imageClassName="transition duration-[1.5s] ease-out group-hover:scale-105"
      />
      <div className="pt-8">
        <div className="mb-4 flex items-center justify-between gap-4 border-b border-olive/20 pb-4">
          <span className="flex items-center gap-2">
            <Icon className="h-5 w-5 text-gold" aria-hidden="true" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-olive">
              {service.detail}
            </span>
          </span>
        </div>
        <h3 className="font-display text-3xl font-medium text-charcoal">
          {service.title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-ink/80">
          {service.description}
        </p>
      </div>
    </article>
  );
}
