import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import InteractiveNeedWebsite from "@/components/InteractiveNeedWebsite";
import Pricing from "@/components/Pricing";
import Problem from "@/components/Problem";
import Process from "@/components/Process";
import Services from "@/components/Services";
import { localBusinessSchema, serviceSchema } from "@/lib/schema";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([localBusinessSchema, serviceSchema])
        }}
      />
      <Header />
      <main>
        <Hero />
        <Problem />
        <Services />
        <Pricing />
        <About />
        <InteractiveNeedWebsite />
        <Process />
        <FAQ />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
