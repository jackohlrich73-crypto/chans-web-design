import {
  Brush,
  ClipboardList,
  Code2,
  Compass,
  Rocket,
  Search
} from "lucide-react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Starter Contractor Websites",
    icon: Code2,
    items: [
      "Clean 1-page website",
      "Services section",
      "Contact buttons",
      "Mobile-friendly layout"
    ]
  },
  {
    title: "Quote Request Setup",
    icon: ClipboardList,
    items: ["Simple contact form", "Call/text buttons", "Clear calls-to-action"]
  },
  {
    title: "Local SEO Basics",
    icon: Search,
    items: [
      "City/service keywords",
      "Page titles",
      "Meta descriptions",
      "Google-friendly wording"
    ]
  },
  {
    title: "Website Cleanup & Refresh",
    icon: Brush,
    items: ["Improve old sites", "Better copy", "Better layout", "Better mobile experience"]
  },
  {
    title: "Hosting & Launch Help",
    icon: Rocket,
    items: [
      "Vercel deployment",
      "Domain connection guidance",
      "Basic launch support"
    ]
  },
  {
    title: "Website Concepts",
    icon: Compass,
    items: [
      "Live preview before finalizing",
      "Easy edits",
      "Contractor-friendly design"
    ]
  }
];

export default function Services() {
  return (
    <section className="nav-offset bg-charcoal/48 py-20" id="services">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Services"
            title="Simple Websites Built to Help People Call, Trust, and Hire You"
            description="No bloated agency package. Just clean contractor web design, smart local wording, and clear ways for customers to reach you."
          />
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal delay={index * 0.04} key={service.title}>
                <article className="group h-full rounded-xl border border-white/10 bg-ink/72 p-6 shadow-card transition duration-200 hover:-translate-y-1 hover:border-cyan/40">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-mint/12 text-mint">
                      <Icon aria-hidden size={24} />
                    </div>
                    <span className="h-px flex-1 bg-gradient-to-r from-white/14 to-transparent" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  <ul className="mt-5 space-y-3">
                    {service.items.map((item) => (
                      <li className="flex gap-3 text-sm leading-6 text-white/70" key={item}>
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
