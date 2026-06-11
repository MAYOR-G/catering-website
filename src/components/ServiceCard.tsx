import type { Service } from "../data/siteContent";
import { ImageFrame } from "./ImageFrame";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article className="group overflow-hidden rounded-[1.35rem] border border-olive/12 bg-white/72 shadow-card shadow-charcoal/5 transition duration-300 hover:-translate-y-1 hover:border-terracotta/28 hover:shadow-lift">
      <ImageFrame
        src={service.image}
        alt={service.title}
        className="h-52 bg-linen"
        imageClassName="transition duration-700 group-hover:scale-105"
      />
      <div className="p-6">
        <div className="mb-5 flex items-center justify-between gap-4">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-olive/10 text-olive">
            <Icon className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="rounded-full bg-cream px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-terracotta">
            {service.detail}
          </span>
        </div>
        <h3 className="font-display text-2xl font-semibold text-charcoal">
          {service.title}
        </h3>
        <p className="mt-3 text-[15px] leading-7 text-ink/70">
          {service.description}
        </p>
      </div>
    </article>
  );
}
