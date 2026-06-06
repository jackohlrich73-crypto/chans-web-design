"use client";

import { CheckCircle, Mail, MessageSquare, Phone, Send } from "lucide-react";
import Image from "next/image";
import { FormEvent, useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const contactEmail = "jackohlrich73@gmail.com";

const inputClass =
  "min-h-12 w-full rounded-lg border border-white/10 bg-white/7 px-4 text-sm text-white outline-none transition placeholder:text-white/38 focus:border-cyan focus:ring-2 focus:ring-cyan/25";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const getValue = (key: string) => String(formData.get(key) ?? "").trim();
    const business = getValue("business") || "a local business";
    const subject = encodeURIComponent(`Website preview request from ${business}`);
    const body = encodeURIComponent(
      [
        "Website preview request",
        "",
        `Name: ${getValue("name")}`,
        `Business name: ${business}`,
        `Phone number: ${getValue("phone")}`,
        `Type of business: ${getValue("type")}`,
        "",
        "Message:",
        getValue("message"),
        "",
        "Sent from Chan's Web Design website."
      ].join("\n")
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section className="nav-offset py-20" id="contact">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Get a Website Preview"
            description="Send the basics and I can follow up with next steps. The form opens an email draft to Jack, so open-ended questions and project details go straight to the right place."
          />
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-[0.72fr_1fr]">
          <Reveal>
            <aside className="glass-panel rounded-2xl p-6">
              <h3 className="text-2xl font-black text-white">Prefer texting?</h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Send your business name, service area, and what kind of website
                you want. A few project photos help too.
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  className="flex min-h-14 items-center gap-3 rounded-lg bg-cyan px-4 font-bold text-ink shadow-glow transition hover:bg-white"
                  href="sms:4022157994"
                >
                  <MessageSquare aria-hidden size={20} />
                  Text 402-215-7994
                </a>
                <a
                  className="flex min-h-14 items-center gap-3 rounded-lg border border-white/12 bg-white/7 px-4 font-bold text-white transition hover:border-cyan/45 hover:bg-white/10"
                  href={`mailto:${contactEmail}?subject=Website preview question`}
                >
                  <Mail aria-hidden size={20} />
                  Email {contactEmail}
                </a>
                <a
                  className="flex min-h-14 items-center gap-3 rounded-lg border border-white/12 bg-white/7 px-4 font-bold text-white transition hover:border-mint/45 hover:bg-white/10"
                  href="tel:4022157994"
                >
                  <Phone aria-hidden size={20} />
                  Call 402-215-7994
                </a>
              </div>

              {/* Canva graphic placeholder: quote request/contact form graphic */}
              <div className="mt-6 rounded-xl border border-white/10 bg-steel/70 p-4">
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <Image
                      alt=""
                      className="h-9 w-9 rounded-lg border border-cyan/25 object-cover"
                      height={36}
                      src="/images/chans-logo.png"
                      width={36}
                    />
                    <div>
                      <p className="text-sm font-black text-white">Preview request</p>
                      <p className="text-xs font-semibold text-cyan">Routes to Jack&apos;s email</p>
                    </div>
                  </div>
                  <Mail aria-hidden className="text-mint" size={20} />
                </div>
                <div className="space-y-3">
                  <div className="rounded-lg border border-white/10 bg-ink/58 p-3">
                    <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/42">
                      Business
                    </p>
                    <p className="mt-1 text-sm font-bold text-white">Lincoln Plumbing Co.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/10 bg-ink/58 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/42">
                        Trade
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">Plumber</p>
                    </div>
                    <div className="rounded-lg border border-white/10 bg-ink/58 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/42">
                        Area
                      </p>
                      <p className="mt-1 text-sm font-bold text-white">Lincoln</p>
                    </div>
                  </div>
                  <div className="rounded-lg border border-cyan/20 bg-cyan/8 p-3">
                    <div className="flex items-center gap-2 text-sm font-bold text-white">
                      <CheckCircle aria-hidden className="text-mint" size={16} />
                      Email draft ready
                    </div>
                    <p className="mt-2 text-xs leading-5 text-white/62">
                      Name, phone, business type, and message get packaged into
                      an email to {contactEmail}.
                    </p>
                  </div>
                  <div className="rounded-lg bg-mint px-4 py-3 text-center text-sm font-black text-ink">
                    Send Request
                  </div>
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              className="rounded-2xl border border-white/10 bg-ink/76 p-5 shadow-card sm:p-6"
              onSubmit={handleSubmit}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm font-semibold text-white/76">
                  Name
                  <input className={`${inputClass} mt-2`} name="name" placeholder="Your name" />
                </label>
                <label className="text-sm font-semibold text-white/76">
                  Business name
                  <input
                    className={`${inputClass} mt-2`}
                    name="business"
                    placeholder="Your business"
                  />
                </label>
                <label className="text-sm font-semibold text-white/76">
                  Phone number
                  <input
                    className={`${inputClass} mt-2`}
                    inputMode="tel"
                    name="phone"
                    placeholder="402-215-7994"
                  />
                </label>
                <label className="text-sm font-semibold text-white/76">
                  Type of business
                  <input
                    className={`${inputClass} mt-2`}
                    name="type"
                    placeholder="Welding, plumbing, landscaping..."
                  />
                </label>
                <label className="text-sm font-semibold text-white/76 sm:col-span-2">
                  Message
                  <textarea
                    className={`${inputClass} mt-2 min-h-36 resize-y py-3`}
                    name="message"
                    placeholder="Tell me what you want on the site, where you work, and whether you have photos."
                  />
                </label>
              </div>
              <button
                className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-lg bg-cyan px-5 text-sm font-black text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
                type="submit"
              >
                <Send aria-hidden size={17} />
                Submit Website Preview Request
              </button>
              {sent ? (
                <p className="mt-4 rounded-lg border border-mint/24 bg-mint/10 p-3 text-sm font-semibold text-mint">
                  Your email app should open with the details filled in. Send
                  that email to reach Jack at {contactEmail}.
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
