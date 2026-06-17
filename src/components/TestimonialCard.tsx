import { Quote } from "lucide-react";
import type { Testimonial } from "../data/siteContent";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="relative flex flex-col justify-between p-8 sm:p-12 border border-olive/10 bg-ivory shadow-lg shadow-charcoal/5 transition duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10">
      <Quote className="absolute top-10 right-10 h-16 w-16 text-gold/10 rotate-180" aria-hidden="true" />
      <p className="relative z-10 text-lg sm:text-xl font-display font-medium leading-relaxed text-charcoal italic">
        "{testimonial.quote}"
      </p>
      <div className="mt-10 flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 text-sm font-bold tracking-widest text-olive uppercase">
          {testimonial.initials}
        </span>
        <div>
          <span className="block font-semibold text-charcoal uppercase tracking-wider text-sm">
            {testimonial.name}
          </span>
          <span className="block text-sm text-ink/70 mt-1">
            {testimonial.title} &mdash; {testimonial.location}
          </span>
        </div>
      </div>
    </article>
  );
}
