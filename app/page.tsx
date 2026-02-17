import { Hero } from "@/components/sections/hero";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import { Intro } from "@/components/sections/intro";
import { ServicesBento } from "@/components/sections/services-bento";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Process } from "@/components/sections/process";
import { Team } from "@/components/sections/team";
import { Testimonials } from "@/components/sections/testimonials";
import { Contact } from "@/components/sections/contact";

import { GalleryGrid } from "@/components/sections/gallery-grid";
import { CTAList } from "@/components/sections/cta-list";
import { ParallaxBreak } from "@/components/sections/parallax-break";

export default function Home() {
  return (
    <>
      <Hero />
      <BrandMarquee />
      <Intro />
      <GalleryGrid />
      <ServicesBento />
      <CTAList />
      <WhyChooseUs />
      <Process />
      <ParallaxBreak />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
}
