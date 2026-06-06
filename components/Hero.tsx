"use client";

import { motion } from "framer-motion";
import { CheckCircle, MessageSquare, Phone, ShieldCheck, Smartphone, Timer, Wrench } from "lucide-react";
import Image from "next/image";
import ButtonLink from "./ButtonLink";

const badges = [
  { label: "Mobile-Friendly", icon: Smartphone },
  { label: "Built for Local Leads", icon: ShieldCheck },
  { label: "Fast Turnaround", icon: Timer },
  { label: "Contractor-Focused", icon: Wrench }
];

export default function Hero() {
  return (
    <section
      className="nav-offset relative overflow-hidden bg-radial-grid pb-20 pt-32 sm:pt-36 lg:min-h-[760px] lg:pb-24"
      id="home"
    >
      <div className="section-shell grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan/35 bg-cyan/10 px-3 py-2 text-sm font-semibold text-cyan">
            <CheckCircle aria-hidden size={16} />
            Limited portfolio rate: starter sites from $200
          </div>
          <h1 className="max-w-4xl text-4xl font-black leading-[1.05] text-white sm:text-5xl lg:text-6xl">
            Chan&apos;s Web Design Builds Affordable Contractor Websites
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74 sm:text-xl">
            Chan&apos;s Web Design builds affordable contractor websites and
            clean, mobile-friendly starter websites for local service businesses,
            starting at just $200 while I build my portfolio.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contact">Get a $200 Website Preview</ButtonLink>
            <ButtonLink href="sms:4022157994" variant="secondary">
              <MessageSquare aria-hidden size={18} />
              Text Me Today
            </ButtonLink>
          </div>
          <a
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white/78 transition hover:text-white"
            href="tel:4022157994"
          >
            <Phone aria-hidden size={17} />
            Call or text: 402-215-7994
          </a>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  className="rounded-lg border border-white/10 bg-white/6 px-3 py-3 text-sm font-semibold text-white/82"
                  key={badge.label}
                >
                  <Icon className="mb-2 text-mint" aria-hidden size={18} />
                  {badge.label}
                </div>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
          className="relative"
        >
          {/* Canva graphic placeholder: contractor website mockup */}
          <div className="glass-panel accent-border rounded-2xl p-4 sm:p-5">
            <div className="overflow-hidden rounded-xl border border-white/12 bg-[#071522] shadow-card">
              <div className="flex items-center gap-2 border-b border-white/10 bg-white/6 px-4 py-3">
                <span className="mock-browser-dot bg-red-400/70" />
                <span className="mock-browser-dot bg-amber-300/80" />
                <span className="mock-browser-dot bg-mint/80" />
                <span className="ml-3 flex h-7 flex-1 items-center rounded-md bg-white/8 px-3 text-[11px] font-semibold text-white/46">
                  straightlinewelding.com
                </span>
              </div>
              <div className="p-5">
                <div className="rounded-xl bg-gradient-to-br from-cyan/18 via-white/8 to-mint/12 p-5">
                  <div className="mb-5 flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Image
                        alt=""
                        className="mt-1 h-10 w-10 rounded-lg border border-cyan/25 object-cover"
                        height={40}
                        src="/images/chans-logo.png"
                        width={40}
                      />
                      <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan">
                        Lincoln Contractor
                      </p>
                      <h3 className="mt-2 text-2xl font-black text-white">
                        Straight Line Welding
                      </h3>
                      </div>
                    </div>
                    <span className="rounded-lg bg-cyan px-3 py-2 text-xs font-black text-ink">
                      Call Now
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[1fr_0.76fr]">
                    <div className="space-y-3">
                      <p className="text-sm font-semibold leading-6 text-white/78">
                        Mobile welding, repairs, custom fabrication, and quick
                        quote requests around Lincoln.
                      </p>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="rounded-lg border border-white/12 bg-ink/65 p-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-mint">
                            Response
                          </p>
                          <p className="mt-2 text-lg font-black text-white">24 hrs</p>
                        </div>
                        <div className="rounded-lg border border-white/12 bg-ink/65 p-3">
                          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">
                            Service Area
                          </p>
                          <p className="mt-2 text-lg font-black text-white">Lincoln</p>
                        </div>
                      </div>
                      <div className="rounded-lg border border-white/12 bg-white/7 p-3">
                        {["Repairs", "Custom work", "On-site quotes"].map((item) => (
                          <div
                            className="flex items-center gap-2 py-1 text-xs font-semibold text-white/74"
                            key={item}
                          >
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan" />
                            {item}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/14 bg-ink/70 p-3">
                      <div className="relative h-36 overflow-hidden rounded-lg bg-[radial-gradient(circle_at_25%_25%,rgba(57,245,168,0.42),transparent_22%),linear-gradient(135deg,rgba(25,215,255,0.36),rgba(57,245,168,0.12)),repeating-linear-gradient(135deg,rgba(255,255,255,0.18)_0_2px,transparent_2px_12px)]">
                        <div className="absolute inset-x-4 bottom-4 rounded-lg border border-white/14 bg-ink/72 p-3">
                          <p className="text-xs font-black text-white">Project photos</p>
                          <p className="mt-1 text-[11px] font-semibold text-white/55">
                            Proof customers can see.
                          </p>
                        </div>
                      </div>
                      <div className="mt-3 grid grid-cols-3 gap-2">
                        <span className="h-10 rounded-md bg-cyan/20" />
                        <span className="h-10 rounded-md bg-mint/20" />
                        <span className="h-10 rounded-md bg-white/10" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-3">
                  {["Services", "Projects", "Quote"].map((item) => (
                    <div
                      className="rounded-lg border border-white/10 bg-white/6 p-3 text-center text-xs font-semibold text-white/76"
                      key={item}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
