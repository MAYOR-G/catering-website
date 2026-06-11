import { Quote } from "lucide-react";
import type { Testimonial } from "../data/siteContent";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className="rounded-[1.35rem] border border-olive/12 bg-white/72 p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:bg-white">
      <Quote className="h-8 w-8 text-terracotta" aria-hidden="true" />
      <p className="mt-5 text-[17px] font-semibold leading-8 text-charcoal">
        "{testimonial.quote}"
      </p>
      <div className="mt-7 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-olive text-sm font-black text-cream">
          {testimonial.initials}
        </span>
        <span>
          <span className="block font-extrabold text-charcoal">
            {testimonial.name}
          </span>
          <span className="block text-sm font-semibold text-ink/62">
            {testimonial.title} - {testimonial.location}
          </span>
        </span>
      </div>
    </article>
  );
}
