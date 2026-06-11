import type { Feature } from "../data/siteContent";

type FeatureCardProps = {
  feature: Feature;
};

export function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <article className="rounded-[1.25rem] border border-white/12 bg-white/[0.07] p-6 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:bg-white/[0.1]">
      <span className="grid h-12 w-12 place-items-center rounded-full bg-gold/18 text-gold">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-2xl font-semibold text-cream">
        {feature.title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-cream/70">
        {feature.description}
      </p>
    </article>
  );
}
