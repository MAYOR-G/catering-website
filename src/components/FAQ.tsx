import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { faqs } from "../data/siteContent";
import { SectionHeader } from "./SectionHeader";
import { cn } from "../lib/utils";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-ivory px-5 py-32 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          eyebrow="Common Questions"
          title="Frequently Asked Questions"
          align="center"
          className="mb-16"
        />
        
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article 
                key={index} 
                className={cn(
                  "border border-olive/10 bg-white transition-all duration-300",
                  isOpen ? "shadow-md shadow-charcoal/5 pb-6" : "hover:border-olive/30"
                )}
              >
                <button
                  className="flex w-full items-center justify-between p-6 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                >
                  <h3 className="font-display text-2xl font-medium text-charcoal pr-8">
                    {faq.question}
                  </h3>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-olive/5 text-olive transition-transform duration-300">
                    {isOpen ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
                  </span>
                </button>
                <div 
                  className={cn(
                    "overflow-hidden px-6 transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  )}
                >
                  <p className="text-lg leading-relaxed text-ink/80 pt-2">
                    {faq.answer}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
