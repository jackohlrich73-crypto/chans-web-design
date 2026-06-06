import { MessageSquare, Phone } from "lucide-react";
import ButtonLink from "./ButtonLink";
import Reveal from "./Reveal";

export default function FinalCTA() {
  return (
    <section className="py-20">
      <div className="section-shell">
        <Reveal>
          <div className="accent-border overflow-hidden rounded-2xl bg-gradient-to-br from-cyan/18 via-steel to-mint/10 p-6 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_0.6fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-mint">
                  Portfolio spots available
                </p>
                <h2 className="mt-3 text-3xl font-black leading-tight text-white sm:text-4xl">
                  Want a Website Without Paying Agency Prices?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-white/74">
                  I&apos;m taking on a few local contractor websites at a
                  discounted portfolio rate. If you want a clean website that
                  makes your business easier to find and easier to call, text me
                  today.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <ButtonLink href="sms:4022157994">
                  <MessageSquare aria-hidden size={18} />
                  Text Jack: 402-215-7994
                </ButtonLink>
                <ButtonLink href="#contact" variant="secondary">
                  <Phone aria-hidden size={18} />
                  Start a Website Preview
                </ButtonLink>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
