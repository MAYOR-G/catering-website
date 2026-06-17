import { brand } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { ImageFrame } from "./ImageFrame";

export function EventInquiry() {
  return (
    <section className="relative overflow-hidden bg-charcoal text-cream py-32 lg:py-48">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-40 mix-blend-overlay">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=80"
          alt="Elegant catering setup"
          className="h-full w-full object-cover grayscale"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/80 to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 lg:px-8 text-center">
        <p className="mb-6 inline-block rounded-full border border-gold/30 bg-charcoal/40 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-gold backdrop-blur-md">
          Start Planning
        </p>
        <h2 className="font-display text-5xl font-medium leading-[1.1] text-ivory sm:text-7xl max-w-4xl mx-auto">
          Let us craft the perfect menu for your next occasion.
        </h2>
        <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-cream/80 font-body font-light">
          We are currently accepting bookings for weddings, corporate galas, and private dining events for this season and beyond.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
          <ButtonLink 
            href="#contact" 
            variant="gold" 
            className="text-lg px-10 py-5 w-full sm:w-auto shadow-2xl shadow-gold/20 hover:scale-105 transition-transform duration-300"
          >
            Inquire About Your Date
          </ButtonLink>
          <a href={`mailto:${brand.email}`} className="text-lg font-medium text-cream hover:text-gold transition-colors duration-300 underline underline-offset-8 decoration-gold/50 hover:decoration-gold">
            {brand.email}
          </a>
        </div>
      </div>
    </section>
  );
}
