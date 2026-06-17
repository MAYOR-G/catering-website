import { FAQ } from "./components/FAQ";
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
import { EventInquiry } from "./components/EventInquiry";
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
    <div className="min-h-screen overflow-hidden bg-ivory text-charcoal">
      <Navbar />
      <main>
        <Hero />

        <section id="services" className="px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-end">
                <SectionHeader
                  eyebrow="Our Services"
                  title="Catering designed around the event, not just the menu."
                  description="From intimate private dining to grand wedding receptions, every service is orchestrated around guest flow, perfect timing, and flawless food presentation."
                />
              </div>
            </Reveal>
            <div className="mt-20 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service, index) => (
                <Reveal key={service.title} delay={index * 100}>
                  <ServiceCard service={service} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="bg-linen/50 px-5 py-32 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Curated Packages"
                title="Elegant starting points for events of every scale."
                description="Our packages provide clear anchors for your planning process, while leaving ample room to customize menus, staffing, and rental elements to your exact vision."
                align="center"
              />
            </Reveal>
            <div className="mt-24 grid gap-8 lg:grid-cols-3 items-stretch">
              {packages.map((item, index) => (
                <Reveal key={item.name} delay={index * 150}>
                  <PackageCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="px-5 py-32 lg:px-8 bg-ivory">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="The Planning Process"
                title="A seamless journey from first inquiry to final pour."
                description="We believe that planning a premium event should feel as calm and luxurious as attending one. Here is how we ensure flawless execution."
                align="center"
              />
            </Reveal>
            <div className="mt-24 grid gap-12 md:grid-cols-2 xl:grid-cols-3">
              {processSteps.map((step, index) => (
                <Reveal key={step.title} delay={index * 100}>
                  <ProcessStep step={step} index={index} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="bg-charcoal px-5 py-32 text-cream lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-20 lg:grid-cols-[1fr_1fr]">
            <Reveal>
              <SectionHeader
                eyebrow="The Gild & Gather Difference"
                title="Food, flow, and presentation handled as one cohesive experience."
                description={`${brand.name} serves as your dedicated culinary partner, ensuring every platter, station, and passed bite is venue-ready, reliable, and exceptionally beautiful.`}
                dark={true}
              />
            </Reveal>
            <div className="grid gap-12 sm:grid-cols-2">
              {features.map((feature, index) => (
                <Reveal key={feature.title} delay={index * 100}>
                  <FeatureCard feature={feature} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className="px-5 py-32 lg:px-8 bg-ivory">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Our Portfolio"
                title="Moments of gathering, beautifully plated and flawlessly served."
                description="Explore our recent events to see how our menus and service styles adapt to different venues, occasions, and guest counts."
              />
            </Reveal>
            <div className="mt-24 grid gap-8 lg:grid-cols-3">
              {galleryItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 100}>
                  <GalleryCard item={item} featured={index === 0} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="bg-linen/30 px-5 py-32 lg:px-8 border-y border-olive/10">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <SectionHeader
                eyebrow="Words from our hosts"
                title="Trusted by families, brands, and fine venues."
                description="Our greatest measure of success is the peace of mind our clients experience while hosting, and the joy their guests feel while dining."
                align="center"
              />
            </Reveal>
            <div className="mt-24 grid gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Reveal key={testimonial.name} delay={index * 150}>
                  <TestimonialCard testimonial={testimonial} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Reveal>
          <FAQ />
        </Reveal>

        <Reveal>
          <EventInquiry />
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
