import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  brand,
  contactHighlights,
  heroSlides,
  heroStats,
} from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";

export function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, []);

  const showSlide = (direction: "previous" | "next") => {
    setActiveSlide((current) => {
      if (direction === "previous") {
        return current === 0 ? heroSlides.length - 1 : current - 1;
      }

      return (current + 1) % heroSlides.length;
    });
  };

  const activeEvent = heroSlides[activeSlide];
  const getOffset = (index: number) => {
    const total = heroSlides.length;
    const raw = index - activeSlide;
    if (raw > total / 2) return raw - total;
    if (raw < -total / 2) return raw + total;
    return raw;
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden px-5 py-9 lg:flex lg:min-h-[calc(100svh-77px)] lg:items-center lg:px-8"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="animate-rise">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-terracotta/18 bg-white/72 px-4 py-2 text-[0.72rem] font-black uppercase tracking-[0.18em] text-terracotta shadow-insetLine">
            <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
            Premium event catering for modern hosts
          </p>
          <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.95] text-charcoal sm:text-6xl xl:text-[5.5rem]">
            Event food planned around the room, the guests, and the moment.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/76">
            {brand.name} designs catering for weddings, corporate receptions,
            private dinners, cocktail hours, buffets, and luxury celebrations
            with thoughtful menus, service flow, and setup details.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">Plan an event</ButtonLink>
            <ButtonLink href="#packages" variant="secondary">
              View packages
            </ButtonLink>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.25rem] border border-olive/12 bg-white/68 p-4 shadow-insetLine"
              >
                <p className="font-display text-4xl font-semibold leading-none text-charcoal xl:text-[2.65rem]">
                  {stat.value}
                </p>
                <p className="mt-2 text-[15px] font-bold leading-5 text-ink/68">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          className="relative animate-rise lg:pl-6"
          style={{ animationDelay: "120ms" }}
        >
          <div className="relative">
            <div className="pointer-events-none absolute left-1/2 top-10 h-80 w-80 -translate-x-1/2 rounded-full bg-terracotta/14 blur-3xl" />
            <div className="relative h-[400px] overflow-visible sm:h-[480px]">
              {heroSlides.map((slide, index) => {
                const offset = getOffset(index);
                const visible = Math.abs(offset) <= 2;
                const isActive = offset === 0;
                const x = offset * 34;
                const rotate = offset * -6;
                const scale = isActive ? 1 : 0.79 - Math.min(Math.abs(offset), 2) * 0.08;
                const opacity = visible ? (isActive ? 1 : 0.52 - Math.abs(offset) * 0.08) : 0;
                const zIndex = 10 - Math.abs(offset);

                return (
                  <article
                    key={slide.title}
                    className="absolute left-1/2 top-0 h-[370px] w-[76%] max-w-[500px] origin-bottom overflow-hidden rounded-[1.8rem] bg-linen shadow-[0_28px_80px_rgba(32,32,29,0.24)] transition-all duration-700 ease-out sm:h-[440px] sm:w-[69%]"
                    style={{
                      opacity,
                      zIndex,
                      transform: `translateX(calc(-50% + ${x}%)) translateY(${Math.abs(offset) * 22}px) rotate(${rotate}deg) scale(${scale})`,
                    }}
                    aria-hidden={!isActive}
                  >
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/28 via-transparent to-white/6" />
                  </article>
                );
              })}
            </div>

            <div className="relative z-20 mt-5 rounded-[1.6rem] border border-olive/12 bg-ivory/95 p-5 text-charcoal shadow-[0_20px_56px_rgba(32,32,29,0.12)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">
                    {activeEvent.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {activeEvent.title}
                  </p>
                  <p className="mt-2 max-w-lg text-[15px] font-semibold leading-6 text-ink/72">
                    Rotating event concepts show weddings, corporate service,
                    and private hosted dining with clear planning cues.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full border border-olive/16 bg-white text-charcoal transition hover:-translate-y-0.5 hover:border-terracotta/35 focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25"
                    onClick={() => showSlide("previous")}
                    aria-label="Show previous event concept"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    className="grid h-11 w-11 place-items-center rounded-full border border-olive/16 bg-charcoal text-cream transition hover:-translate-y-0.5 hover:bg-olive focus:outline-none focus-visible:ring-4 focus-visible:ring-terracotta/25"
                    onClick={() => showSlide("next")}
                    aria-label="Show next event concept"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="mt-5 flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.title}
                    type="button"
                    className={`h-2.5 rounded-full transition-all ${
                      index === activeSlide
                        ? "w-10 bg-terracotta"
                        : "w-2.5 bg-olive/18 hover:bg-olive/32"
                    }`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Show ${slide.title}`}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-3">
            {contactHighlights.map((item) => {
              const Icon = item.icon;
              return (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-2 rounded-full border border-olive/12 bg-white/72 px-4 py-2 text-[13px] font-extrabold text-ink/72 shadow-insetLine"
                >
                  <Icon className="h-4 w-4 text-terracotta" />
                  {item.label}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
