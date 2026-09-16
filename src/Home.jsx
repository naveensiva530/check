import { useEffect } from "react";
import "./App.css";
import HeroSection from "./Components/HomePage/Hero_section/Hero_section";
import Client from "./Components/HomePage/Clients/Client";
import Services from "./Components/HomePage/Services/Services";
import About from "./Components/HomePage/About/About";
import Process from "./Components/HomePage/Process/Process";
import WhoWeWorkWith from "./Components/HomePage/WhoWeWorkWith/WhoWeWorkWith";
import Industries from "./Components/HomePage/Industries/Industries";
import WhyAdsserv from "./Components/HomePage/WhyAdsserv/WhyAdsserv";
import Projects from "./Components/HomePage/Projects/Projectsection";
import Testimonial from "./Components/HomePage/Testimonial/Testimonial";
import Numbers from "./Components/HomePage/Numbers/Numbers";
import CreativeShowcase from "./Components/HomePage/CreativeShowcase/CreativeShowcase";
import FinalCTA from "./Components/HomePage/FinalCTA/FinalCTA";
import Email from "./Components/HomePage/Email/Email";
import Footer from "./Components/HomePage/Footer/Footer";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Refresh ScrollTrigger after initial paint & animations
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 400);

    return () => {
      clearTimeout(refreshTimer);
    };
  }, []);

  return (
    <div className="page">
      <HeroSection />
      <Client />
      <div id="about"><About /></div>
      <div id="services"><Services /></div>
      <Process />
      <WhoWeWorkWith />
      <Industries />
      <WhyAdsserv />
      <div id="projects"><Projects /></div>
      <div id="testimonial"><Testimonial /></div>
      <Numbers />
      <CreativeShowcase />
      <FinalCTA />
      <Email />
      <Footer />
    </div>
  );
}
