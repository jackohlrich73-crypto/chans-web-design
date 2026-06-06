import { EyeOff, ListX, MapPinned, PhoneOff } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const problems = [
  {
    title: "No website = less trust",
    text: "Even good work can get overlooked when customers cannot find a clean business page.",
    icon: EyeOff
  },
  {
    title: "Hard-to-find phone number = missed jobs",
    text: "If calling takes too much work, people usually move on.",
    icon: PhoneOff
  },
  {
    title: "No service list = confused customers",
    text: "Clear services help customers know if you are the right fit before they call.",
    icon: ListX
  },
  {
    title: "No local SEO = fewer people finding you",
    text: "A practical website can help connect your trade, city, and service area.",
    icon: MapPinned
  }
];

export default function Problem() {
  return (
    <section className="nav-offset py-20" id="problem">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="The Problem"
            title="Most Customers Look You Up Before They Call"
            description="A lot of great contractors do solid work, but their online presence does not always show it. If people cannot quickly find your services, photos, phone number, or service area, they may move on to the next business that looks easier to trust."
          />
        </Reveal>

        {/* Canva graphic placeholder: before/after online presence graphic */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <Reveal delay={index * 0.05} key={problem.title}>
                <article className="h-full rounded-xl border border-white/10 bg-white/[0.055] p-5 transition duration-200 hover:-translate-y-1 hover:border-cyan/35 hover:bg-white/[0.075]">
                  <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-cyan/12 text-cyan">
                    <Icon aria-hidden size={22} />
                  </div>
                  <h3 className="text-lg font-bold text-white">{problem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{problem.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
