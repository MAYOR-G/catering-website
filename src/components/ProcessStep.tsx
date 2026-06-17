import type { ProcessStep as ProcessStepType } from "../data/siteContent";

type ProcessStepProps = {
  step: ProcessStepType;
  index: number;
};

export function ProcessStep({ step, index }: ProcessStepProps) {
  const Icon = step.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative pt-8 border-t border-olive/20 transition duration-300 hover:-translate-y-1">
      <div className="absolute right-0 top-6 font-display text-5xl font-medium leading-none text-olive/10 group-hover:text-gold/20 transition-colors duration-500">
        {number}
      </div>
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/5 text-olive border border-olive/10 group-hover:border-gold/30 group-hover:text-gold transition-colors duration-300">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-6 font-display text-3xl font-medium text-charcoal">
        {step.title}
      </h3>
      <p className="mt-4 text-base leading-relaxed text-ink/70">
        {step.description}
      </p>
    </article>
  );
}
