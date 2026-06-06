import { FileText, Link2, PencilLine, Rocket } from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const steps = [
  {
    title: "Send Me Your Business Info",
    text: "Name, services, phone number, photos, service area.",
    icon: FileText
  },
  {
    title: "I Build a Website Preview",
    text: "You get a live preview link before anything is final.",
    icon: Link2
  },
  {
    title: "We Make Changes",
    text: "Wording, photos, colors, services, and layout can be adjusted.",
    icon: PencilLine
  },
  {
    title: "We Launch It",
    text: "I help get it live with either a preview link or a custom domain.",
    icon: Rocket
  }
];

export default function Process() {
  return (
    <section className="nav-offset py-20" id="process">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Process"
            title="How It Works"
            description="Most starter websites can be built quickly once I have the right info."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal delay={index * 0.05} key={step.title}>
                <article className="relative h-full rounded-xl border border-white/10 bg-white/[0.055] p-6">
                  <span className="absolute right-5 top-5 text-4xl font-black text-white/8">
                    {index + 1}
                  </span>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-lg bg-cyan/12 text-cyan">
                    <Icon aria-hidden size={24} />
                  </div>
                  <h3 className="text-lg font-black text-white">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/66">{step.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
