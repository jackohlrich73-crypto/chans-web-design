"use client";

import { Menu, MessageSquare, Phone, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/82 backdrop-blur-xl">
      <div className="section-shell flex min-h-20 items-center justify-between gap-4">
        <a
          aria-label="Chan's Web Design home"
          className="flex items-center gap-3"
          href="#home"
          onClick={() => setOpen(false)}
        >
          <Image
            alt=""
            className="h-11 w-11 rounded-xl border border-cyan/25 object-cover shadow-glow"
            height={44}
            priority
            src="/images/chans-logo.png"
            width={44}
          />
          <span className="text-base font-bold text-white sm:text-lg">
            Chan&apos;s Web Design
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a
              className="rounded-lg px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/8 hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-white/12 bg-white/6 px-4 text-sm font-semibold text-white transition hover:border-mint/50 hover:bg-white/10"
            href="tel:4022157994"
          >
            <Phone aria-hidden size={17} />
            Call
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-lg bg-cyan px-4 text-sm font-bold text-ink shadow-glow transition hover:-translate-y-0.5 hover:bg-white"
            href="sms:4022157994"
          >
            <MessageSquare aria-hidden size={17} />
            Text Me: 402-215-7994
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/12 bg-white/6 text-white md:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-ink/96 px-4 pb-5 pt-2 md:hidden">
          <nav className="mx-auto flex max-w-xl flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                className="rounded-lg px-3 py-3 text-sm font-semibold text-white/78 transition hover:bg-white/8 hover:text-white"
                href={item.href}
                key={item.href}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/12 bg-white/6 text-sm font-semibold"
                href="tel:4022157994"
              >
                <Phone aria-hidden size={17} />
                Call
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-cyan text-sm font-bold text-ink"
                href="sms:4022157994"
              >
                <MessageSquare aria-hidden size={17} />
                Text
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
