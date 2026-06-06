"use client";

import {
  ArrowRight,
  CheckCircle,
  MousePointerClick,
  Phone,
  RotateCcw,
  Search,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const prompts = [
  {
    label: "People ask, \"Do you have a website?\"",
    category: "trust",
    detail: "You need one clean place to send people when they want proof you are real."
  },
  {
    label: "Your Facebook page is doing all the heavy lifting",
    category: "visibility",
    detail: "Facebook helps, but it should not be the only place customers can find you."
  },
  {
    label: "Your phone number is hard to find online",
    category: "contact",
    detail: "Your site should make calling or texting obvious within a few seconds."
  },
  {
    label: "Your competitors look more professional than you",
    category: "trust",
    detail: "A polished starter site can close that trust gap without agency pricing."
  },
  {
    label: "You rely only on word of mouth",
    category: "visibility",
    detail: "Word of mouth is strong, but a website catches people after the referral."
  },
  {
    label: "You want more local jobs without sounding salesy",
    category: "contact",
    detail: "Clear services, service areas, and quote buttons do the selling quietly."
  }
];

export default function InteractiveNeedWebsite() {
  const [selected, setSelected] = useState<string[]>([]);

  const togglePrompt = (prompt: string) => {
    setSelected((current) =>
      current.includes(prompt)
        ? current.filter((item) => item !== prompt)
        : [...current, prompt]
    );
  };

  const selectedPrompts = prompts.filter((prompt) => selected.includes(prompt.label));
  const categoryCounts = selectedPrompts.reduce(
    (counts, prompt) => ({
      ...counts,
      [prompt.category]: counts[prompt.category as keyof typeof counts] + 1
    }),
    { trust: 0, visibility: 0, contact: 0 }
  );
  const mainCategory = (Object.entries(categoryCounts).sort(
    (first, second) => second[1] - first[1]
  )[0]?.[0] ?? "trust") as keyof typeof categoryCounts;
  const resultCopy = {
    trust: {
      title: "Your biggest gap is trust.",
      text:
        "You do not need a giant website. You need a clean page with your services, photos, service area, and a phone number people can find fast.",
      action: "Best first move: a polished 1-page starter site."
    },
    visibility: {
      title: "Your biggest gap is getting found.",
      text:
        "People may hear your name, then search for you later. A simple local website gives Google and customers a clear place to connect your business, trade, and city.",
      action: "Best first move: local SEO basics plus a clear services section."
    },
    contact: {
      title: "Your biggest gap is turning interest into calls.",
      text:
        "If someone has to hunt for your phone number or guess what you offer, you lose easy jobs. The site should make call, text, and quote options impossible to miss.",
      action: "Best first move: strong call/text buttons and a quote request area."
    }
  }[mainCategory];

  return (
    <section className="nav-offset bg-charcoal/48 py-20" id="need-website">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Quick Check"
            title="Do You Need a Website?"
            description="You might need a website if..."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <Reveal>
            <div className="grid gap-3 sm:grid-cols-2">
              {prompts.map((prompt) => {
                const active = selected.includes(prompt.label);
                return (
                  <button
                    className={`min-h-24 rounded-xl border p-5 text-left text-sm font-semibold leading-6 transition duration-200 ${
                      active
                        ? "border-cyan bg-cyan/14 text-white shadow-glow"
                        : "border-white/10 bg-ink/70 text-white/72 hover:-translate-y-0.5 hover:border-cyan/35 hover:text-white"
                    }`}
                    key={prompt.label}
                    onClick={() => togglePrompt(prompt.label)}
                    type="button"
                  >
                    <span className="mb-3 grid h-8 w-8 place-items-center rounded-lg bg-white/8 text-cyan">
                      <MousePointerClick aria-hidden size={17} />
                    </span>
                    {prompt.label}
                  </button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            {/* Canva graphic placeholder: mobile website preview */}
            <aside className="glass-panel h-full rounded-2xl p-6">
              <div className="mx-auto max-w-[260px] rounded-[2rem] border border-white/14 bg-ink p-3 shadow-card">
                <div className="rounded-[1.5rem] border border-white/10 bg-steel p-4">
                  <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-white/22" />
                  <div className="rounded-xl bg-gradient-to-br from-cyan/22 to-mint/12 p-4">
                    <div className="flex items-center justify-between gap-3">
                      <Image
                        alt=""
                        className="h-9 w-9 rounded-lg border border-cyan/25 object-cover"
                        height={36}
                        src="/images/chans-logo.png"
                        width={36}
                      />
                      <span className="rounded-full bg-mint/18 px-2 py-1 text-[10px] font-black uppercase tracking-[0.12em] text-mint">
                        Live
                      </span>
                    </div>
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.16em] text-cyan">
                      Your Site
                    </p>
                    <p className="mt-1 text-xl font-black leading-6 text-white">
                      Services, photos, calls.
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <a
                        className="rounded-lg bg-cyan px-3 py-3 text-center text-xs font-black text-ink"
                        href="tel:4022157994"
                      >
                        Call
                      </a>
                      <a
                        className="rounded-lg border border-white/16 bg-white/8 px-3 py-3 text-center text-xs font-black text-white"
                        href="sms:4022157994"
                      >
                        Text
                      </a>
                    </div>
                    <div className="mt-4 grid gap-2">
                      {[
                        ["Trust", ShieldCheck],
                        ["Easy calls", Phone],
                        ["Local search", Search]
                      ].map(([label, Icon]) => {
                        const TypedIcon = Icon as typeof ShieldCheck;
                        return (
                          <div
                            className="flex items-center gap-2 rounded-lg bg-ink/66 p-3 text-xs font-semibold text-white/78"
                            key={label as string}
                          >
                            <TypedIcon aria-hidden className="text-mint" size={15} />
                            {label as string}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-white/10 bg-white/6 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan">
                  Result
                </p>
                <p className="mt-3 text-2xl font-black leading-tight text-white">
                  {selected.length > 0
                    ? resultCopy.title
                    : "Click a card and see what happens."}
                </p>
                {selected.length > 0 ? (
                  <p className="mt-3 text-sm leading-6 text-white/66">
                    {resultCopy.text}
                  </p>
                ) : null}
                {selected.length > 0 ? (
                  <div className="mt-4 rounded-lg border border-cyan/22 bg-cyan/8 p-3 text-sm font-bold leading-6 text-white">
                    {resultCopy.action}
                  </div>
                ) : null}
                {selectedPrompts.length > 0 ? (
                  <div className="mt-4 space-y-2">
                    {selectedPrompts.slice(0, 2).map((prompt) => (
                      <div
                        className="flex gap-2 rounded-lg bg-ink/48 p-3 text-xs leading-5 text-white/66"
                        key={prompt.label}
                      >
                        <CheckCircle aria-hidden className="mt-0.5 shrink-0 text-mint" size={14} />
                        {prompt.detail}
                      </div>
                    ))}
                  </div>
                ) : null}
                {selected.length > 0 ? (
                  <a
                    className="mt-5 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg bg-cyan px-4 text-sm font-black text-ink transition hover:bg-white"
                    href="#contact"
                  >
                    Start a website preview
                    <ArrowRight aria-hidden size={16} />
                  </a>
                ) : null}
                {selected.length > 0 ? (
                  <button
                    className="mt-3 inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/8 px-4 text-sm font-semibold text-white/82 transition hover:bg-white/12"
                    onClick={() => setSelected([])}
                    type="button"
                  >
                    <RotateCcw aria-hidden size={16} />
                    Reset
                  </button>
                ) : null}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
