import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { brand, contactHighlights, heroSlides } from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { cn } from "../lib/utils";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      showSlide("next");
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlide]);

  const showSlide = (direction: "previous" | "next") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveSlide((current) => {
      if (direction === "previous") {
        return current === 0 ? heroSlides.length - 1 : current - 1;
      }
      return (current + 1) % heroSlides.length;
    });
    setTimeout(() => setIsAnimating(false), 700); // match transition duration
  };

  const activeEvent = heroSlides[activeSlide];

  return (
    <section id="top" className="relative min-h-[90svh] flex items-center pt-24 pb-12 overflow-hidden bg-charcoal text-cream">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={slide.title}
          className={cn(
            "absolute inset-0 transition-opacity duration-1000 ease-in-out",
            index === activeSlide ? "opacity-100 z-0" : "opacity-0 z-[-1]"
          )}
          aria-hidden={index !== activeSlide}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-transform duration-[10000ms] ease-out",
              index === activeSlide ? "scale-105" : "scale-100"
            )}
            loading={index === 0 ? "eager" : "lazy"}
          />
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/10" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 lg:px-8 mt-12">
        <div className="max-w-3xl animate-rise">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-charcoal/40 px-5 py-2.5 text-xs font-black uppercase tracking-[0.2em] text-gold backdrop-blur-md">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
            {activeEvent.label}
          </p>
          
          <h1 className="font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-7xl xl:text-[6rem]">
            {activeEvent.title}
          </h1>
          
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-cream/80">
            {brand.description}
          </p>
          
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href="#contact" variant="primary" className="bg-gold text-charcoal hover:bg-gold/90 border-transparent shadow-lg shadow-gold/20">
              Request a Proposal
            </ButtonLink>
            <ButtonLink href="#services" variant="secondary" className="border-cream/30 text-cream hover:bg-cream/10 backdrop-blur-sm">
              Discover Our Services
            </ButtonLink>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-charcoal/30 px-4 py-2 text-sm font-semibold text-cream/90 backdrop-blur-sm"
                >
                  <Icon className="h-4 w-4 text-gold" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-16 flex items-center justify-between border-t border-white/10 pt-8 lg:mt-24">
          <div className="flex gap-3">
            {heroSlides.map((slide, index) => (
              <button
                key={slide.title}
                type="button"
                className={cn(
                  "h-1 transition-all rounded-full",
                  index === activeSlide
                    ? "w-12 bg-gold"
                    : "w-4 bg-white/20 hover:bg-white/40"
                )}
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-charcoal/30 text-cream backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => showSlide("previous")}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-charcoal/30 text-cream backdrop-blur-sm transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => showSlide("next")}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
