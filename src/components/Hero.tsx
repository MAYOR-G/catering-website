import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import {
  brand,
  contactHighlights,
  heroSlides,
  heroStats,
} from "../data/siteContent";
import { ButtonLink } from "./ButtonLink";
import { ImageFrame } from "./ImageFrame";

const cornerImages = [
  {
    src: "https://images.unsplash.com/photo-1543353071-873f17a7a088?auto=format&fit=crop&w=600&q=86",
    alt: "Styled grazing board with seasonal fruit and cheese",
    label: "Grazing table",
    className: "left-2 top-8 h-28 w-32 sm:h-36 sm:w-40 lg:left-3 lg:top-10",
  },
  {
    src: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?auto=format&fit=crop&w=600&q=86",
    alt: "Catered vegetables and plated event food",
    label: "Seasonal menus",
    className: "right-2 top-3 h-32 w-28 sm:h-40 sm:w-36 lg:right-3 lg:top-8",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=85",
    alt: "Refined plated entree for a private event",
    label: "Plated service",
    className: "bottom-[250px] left-1 h-28 w-32 sm:h-36 sm:w-40 lg:left-3",
  },
  {
    src: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=600&q=85",
    alt: "Guests dining at an elegant event table",
    label: "Event flow",
    className: "bottom-[260px] right-1 h-28 w-32 sm:h-36 sm:w-40 lg:right-4",
  },
];

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
            Catering that makes every table feel intentionally hosted.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/76">
            {brand.name} creates polished catering experiences for weddings,
            corporate events, private dinners, cocktail receptions, and luxury
            celebrations across flexible venues.
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
          <div
            className="relative min-h-[480px]"
            style={{ minHeight: "480px", height: "min(650px, calc(100svh - 190px))" }}
          >
            <div className="absolute bottom-[220px] left-1/2 top-6 w-[66%] -translate-x-1/2 overflow-hidden rounded-[2rem] bg-linen/60 shadow-[0_28px_80px_rgba(32,32,29,0.18)] sm:w-[59%]">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.title}
                  src={slide.image}
                  alt={slide.title}
                  className={`absolute inset-0 h-full w-full object-cover object-center transition duration-700 ${
                    index === activeSlide
                      ? "scale-100 opacity-100"
                      : "scale-105 opacity-0"
                  }`}
                  loading={index === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/28 via-transparent to-white/10" />
            </div>

            {cornerImages.map((image, index) => (
              <div
                key={image.label}
                className={`absolute z-10 overflow-hidden rounded-[1.25rem] bg-cream shadow-[0_18px_52px_rgba(32,32,29,0.14)] transition duration-500 hover:-translate-y-1 ${image.className}`}
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <ImageFrame
                  src={image.src}
                  alt={image.alt}
                  className="h-full w-full rounded-[1.25rem] bg-linen"
                  imageClassName="transition duration-700 hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 rounded-full bg-charcoal/80 px-2.5 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-cream">
                  {image.label}
                </span>
              </div>
            ))}

            <div className="absolute bottom-0 left-0 right-0 z-20 rounded-[1.6rem] border border-olive/12 bg-ivory/95 p-5 text-charcoal shadow-[0_20px_56px_rgba(32,32,29,0.14)] sm:p-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-terracotta">
                    {activeEvent.label}
                  </p>
                  <p className="mt-2 font-display text-3xl font-semibold leading-tight sm:text-4xl">
                    {activeEvent.title}
                  </p>
                  <p className="mt-2 max-w-lg text-[15px] font-semibold leading-6 text-ink/72">
                    Rotating event concepts show how the template can support
                    weddings, corporate service, and private hosted dining.
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
