"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const faqs = [
  {
    question: "Is the website really starting at $200?",
    answer:
      "Yes. I'm offering a limited portfolio rate while I build real examples. More complex websites may cost more, but basic contractor starter sites begin at $200."
  },
  {
    question: "What does the $200 include?",
    answer:
      "A clean 1-page website with your services, contact info, about section, call/text buttons, quote request area, mobile-friendly design, basic SEO setup, and launch support."
  },
  {
    question: "Do I need to buy a domain?",
    answer:
      "Not right away. I can create a live preview link first. If you want a custom domain, that usually costs around $10-$20/year separately."
  },
  {
    question: "Can you use my real photos?",
    answer: "Yes. Real project photos make the site much better."
  },
  {
    question: "Do you only work with contractors?",
    answer:
      "Contractors are the main focus, but I can help other local service businesses too."
  },
  {
    question: "Can I text you instead of filling out a form?",
    answer: "Yes. Texting is probably the fastest way to get started."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="nav-offset bg-charcoal/48 py-20" id="faq">
      <div className="section-shell max-w-4xl">
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Straight Answers Before You Text" />
        </Reveal>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <Reveal delay={index * 0.03} key={faq.question}>
                <article className="overflow-hidden rounded-xl border border-white/10 bg-ink/76">
                  <button
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-bold text-white"
                    onClick={() => setOpenIndex(open ? -1 : index)}
                    type="button"
                  >
                    {faq.question}
                    <ChevronDown
                      aria-hidden
                      className={`shrink-0 text-cyan transition ${open ? "rotate-180" : ""}`}
                      size={20}
                    />
                  </button>
                  {open ? (
                    <div className="border-t border-white/10 px-5 py-5 text-sm leading-7 text-white/70">
                      {faq.answer}
                    </div>
                  ) : null}
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
