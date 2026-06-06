import { GraduationCap, Hammer } from "lucide-react";
import Image from "next/image";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="nav-offset py-20" id="about">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
        <Reveal>
          <div className="glass-panel rounded-2xl p-4 sm:p-5">
            <div className="grid gap-3">
              <div className="relative h-80 overflow-hidden rounded-xl border border-white/10 bg-steel/70 sm:h-96">
                <Image
                  alt="Jack Ohlrich outdoors at a golf course"
                  className="object-cover object-[center_56%]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, 100vw"
                  src="/images/jack-golf.png"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/95 via-ink/35 to-transparent p-4">
                  <div className="flex items-center gap-3">
                    <Image
                      alt=""
                      className="h-12 w-12 rounded-xl border border-cyan/25 object-cover shadow-glow"
                      height={48}
                      src="/images/chans-logo.png"
                      width={48}
                    />
                    <div>
                      <p className="text-lg font-black text-white">Jack Ohlrich</p>
                      <p className="text-xs font-bold uppercase tracking-[0.14em] text-cyan">
                        Chan&apos;s Web Design
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative h-56 overflow-hidden rounded-xl border border-white/10 bg-steel/70 sm:h-64">
                <Image
                  alt="Jack Ohlrich with friends"
                  className="object-cover object-[center_45%]"
                  fill
                  priority
                  sizes="(min-width: 1024px) 430px, 100vw"
                  src="/images/jack-friends.jpeg"
                />
              </div>
              <div className="rounded-xl border border-white/10 bg-steel/70 p-5">
                <h3 className="text-2xl font-black text-white">Jack Ohlrich</h3>
                <p className="mt-2 text-sm font-semibold text-cyan">
                  UNL business student. Local-business focused. Practical websites.
                </p>
                <div className="mt-6 grid gap-3">
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-3 text-sm font-semibold text-white/76">
                    <GraduationCap aria-hidden className="text-mint" size={18} />
                    Business, sales, marketing, and customer service background
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/6 p-3 text-sm font-semibold text-white/76">
                    <Hammer aria-hidden className="text-cyan" size={18} />
                    Built for contractors, service calls, and real-world trust
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <SectionHeading align="left" eyebrow="About" title="About Jack" />
          <div className="space-y-5 text-base leading-8 text-white/74">
            <p>
              I&apos;m Jack Ohlrich, a UNL business student building affordable
              websites for local contractors and small businesses. I&apos;ve
              worked in sales, customer service, landscaping, marketing, and
              local business outreach, so I understand how important it is for a
              business to look professional, be easy to contact, and make a
              strong first impression.
            </p>
            <p>
              I started Chan&apos;s Web Design because a lot of great local
              businesses do great work, but their online presence does not
              always show it. My goal is simple: build clean, practical websites
              that help people find you, trust you, and call you.
            </p>
            <p>
              I&apos;m not trying to sell anyone a giant agency package.
              I&apos;m building my portfolio, you get a professional starter
              website at a discounted rate, and everybody wins.
            </p>
            <p className="rounded-xl border border-cyan/20 bg-cyan/8 p-5 font-semibold text-white">
              Basically, I make sure your business does not look like it
              disappeared from the internet in 2012.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
