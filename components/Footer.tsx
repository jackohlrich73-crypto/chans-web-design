import { Mail, Phone } from "lucide-react";
import Image from "next/image";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" }
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-10">
      <div className="section-shell grid gap-8 md:grid-cols-[1fr_auto]">
        <div>
          <div className="flex items-center gap-3">
            <Image
              alt=""
              className="h-12 w-12 rounded-xl border border-cyan/25 object-cover shadow-glow"
              height={48}
              src="/images/chans-logo.png"
              width={48}
            />
            <h2 className="text-xl font-black text-white">Chan&apos;s Web Design</h2>
          </div>
          <p className="mt-2 max-w-lg text-sm leading-6 text-white/62">
            Affordable websites for contractors and local businesses.
          </p>
          <a
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-cyan transition hover:text-white"
            href="tel:4022157994"
          >
            <Phone aria-hidden size={17} />
            402-215-7994
          </a>
          <a
            className="ml-0 mt-3 inline-flex items-center gap-2 text-sm font-bold text-cyan transition hover:text-white sm:ml-5"
            href="mailto:jackohlrich73@gmail.com?subject=Website preview question"
          >
            <Mail aria-hidden size={17} />
            jackohlrich73@gmail.com
          </a>
        </div>
        <nav className="flex flex-wrap gap-2 md:justify-end" aria-label="Footer navigation">
          {links.map((link) => (
            <a
              className="rounded-lg px-3 py-2 text-sm font-semibold text-white/62 transition hover:bg-white/8 hover:text-white"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <p className="border-t border-white/10 pt-6 text-xs text-white/42 md:col-span-2">
          &copy; 2026 Chan&apos;s Web Design. Built for local businesses that
          want to look legit online.
        </p>
      </div>
    </footer>
  );
}
