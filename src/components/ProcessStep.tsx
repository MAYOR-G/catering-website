import type { ProcessStep as ProcessStepType } from "../data/siteContent";

type ProcessStepProps = {
  step: ProcessStepType;
  index: number;
};

export function ProcessStep({ step, index }: ProcessStepProps) {
  const Icon = step.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative overflow-hidden rounded-[1.25rem] border border-olive/12 bg-white/68 p-5 shadow-insetLine transition duration-300 hover:-translate-y-1 hover:bg-white">
      <div className="absolute right-4 top-3 font-display text-6xl font-semibold leading-none text-olive/[0.08]">
        {number}
      </div>
      <span className="grid h-11 w-11 place-items-center rounded-full bg-terracotta/10 text-terracotta">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 font-display text-2xl font-semibold text-charcoal">
        {step.title}
      </h3>
      <p className="mt-3 text-[15px] leading-7 text-ink/70">
        {step.description}
      </p>
    </article>
  );
}
