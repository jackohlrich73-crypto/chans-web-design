import { Check, CircleDollarSign, Info, MessageSquare } from "lucide-react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const features = [
  "1-page professional website",
  "Mobile-friendly design",
  "Services section",
  "About section",
  "Call/text buttons",
  "Quote request section",
  "Basic SEO setup",
  "Live preview link",
  "Launch support"
];

export default function Pricing() {
  return (
    <section className="nav-offset py-20" id="pricing">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Pricing"
            title="Starter Websites Beginning at $200"
            description="A limited portfolio rate for local contractors who want a clean, practical website without agency prices."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal>
            <article className="glass-panel accent-border rounded-2xl p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
                    Portfolio Rate Website
                  </p>
                  <h3 className="mt-3 text-3xl font-black text-white">
                    Starting at $200
                  </h3>
                </div>
                <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-cyan text-ink shadow-glow">
                  <CircleDollarSign aria-hidden size={28} />
                </div>
              </div>

              <ul className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {features.map((feature) => (
                  <li className="flex items-center gap-3 text-sm font-medium text-white/78" key={feature}>
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-mint/15 text-mint">
                      <Check aria-hidden size={15} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="mt-7 rounded-xl border border-white/12 bg-white/7 p-4">
                <div className="flex gap-3">
                  <Info className="mt-1 shrink-0 text-cyan" aria-hidden size={18} />
                  <p className="text-sm leading-6 text-white/70">
                    Custom domain cost is separate, usually around $10-$20/year
                    if the business wants one.
                  </p>
                </div>
              </div>

              <ButtonLink className="mt-7 w-full" href="sms:4022157994">
                <MessageSquare aria-hidden size={18} />
                Claim a $200 Portfolio Rate Spot
              </ButtonLink>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-2xl border border-white/10 bg-steel/58 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <Image
                  alt=""
                  className="h-12 w-12 rounded-xl border border-cyan/25 object-cover shadow-glow"
                  height={48}
                  src="/images/chans-logo.png"
                  width={48}
                />
                <h3 className="text-2xl font-black text-white">Why only $200?</h3>
              </div>
              <p className="mt-4 text-base leading-8 text-white/74">
                I&apos;m currently building real portfolio examples, so I&apos;m
                offering my first few contractor websites at a discounted rate
                before raising prices. You get a clean, practical starter website
                without agency pricing, and I get real work to show future
                clients. Win-win.
              </p>
              <div className="mt-6 rounded-xl border border-cyan/22 bg-cyan/8 p-5">
                <p className="text-lg font-bold leading-7 text-white">
                  This is not a $5,000 agency site.
                </p>
                <p className="mt-2 text-sm leading-6 text-white/72">
                  It is a clean, practical starter website built to help people
                  find you, trust you, and contact you.
                </p>
              </div>
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {["Get found", "Get trusted", "Get contacted"].map((item) => (
                  <div
                    className="rounded-lg border border-white/10 bg-white/6 px-4 py-4 text-center text-sm font-bold text-white/82"
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
