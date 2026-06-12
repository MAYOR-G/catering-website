import { CTA } from "./components/CTA";
import { FeatureCard } from "./components/FeatureCard";
import { Footer } from "./components/Footer";
import { GalleryCard } from "./components/GalleryCard";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import { PackageCard } from "./components/PackageCard";
import { ProcessStep } from "./components/ProcessStep";
import { Reveal } from "./components/Reveal";
import { SectionHeader } from "./components/SectionHeader";
import { ServiceCard } from "./components/ServiceCard";
import { TestimonialCard } from "./components/TestimonialCard";
import {
  brand,
  features,
  galleryItems,
  packages,
  processSteps,
  services,
  testimonials,
} from "./data/siteContent";

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-cream text-charcoal">
      <Navbar />
      <main>
        <Hero />

        <section id="services" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-10 lg:grid-cols-[0.84fr_1.16fr] lg:items-end">
                <SectionHeader
                  eyebrow="Catering services"
                  title="Built around the event, not a generic restaurant menu."
                  description="Service pages for catering brands need to communicate planning, timing, presentation, and guest experience. This layout keeps those signals front and center."
                />
                <p className="max-w-xl text-base leading-8 text-ink/70 lg:justify-self-end">
                  From wedding dining to corporate hospitality, every service
                  is presented around guest flow, timing, staffing, and polished
                  food presentation.
                </p>
              </div>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 70}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-linen/72 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Catering packages"
                title="Clear starting points for events of different sizes."
                description="Package cards give prospects practical pricing anchors while leaving room for custom menus, staffing, rentals, and final guest counts."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {packages.map((item, index) => (
                <Reveal key={item.name} delay={index * 90}>
                  <PackageCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="How it works"
                title="A planning path that reassures busy hosts and venue teams."
                description="A strong catering site should make the operational journey feel calm: inquiry, consultation, menu planning, confirmation, setup, and service."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 70}>
                  <ProcessStep step={step} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-charcoal px-5 py-20 text-cream lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.86fr_1.14fr]">
            <Reveal>
              <SectionHeader
                eyebrow="Why choose us"
                title="Food, flow, staffing, and presentation handled as one experience."
                description={`${brand.name} is positioned as a premium catering partner for hosts who need the food to feel beautiful, reliable, and venue-ready.`}
                className="[&_h2]:text-cream [&_p:last-child]:text-cream/70"
              />
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 80}>
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Event inspiration"
                title="Visual proof for weddings, private dinners, receptions, and business events."
                description="Gallery cards are intentionally occasion-led so visitors imagine the catering inside a real event rather than browsing a static food menu."
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 90}>
                  <GalleryCard item={item} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-oat/45 px-5 py-20 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Client notes"
                title="Trust signals for premium hosts and business buyers."
                description="Testimonials emphasize communication, service, presentation, and the feeling guests remember after the event."
                align="center"
              />
            </Reveal>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={index * 90}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <CTA />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
