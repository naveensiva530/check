import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import AboutHero from '../About/AboutHero';
import WhoWeAre from '../About/WhoWeAre';
import WhatWeBelieve from '../About/WhatWeBelieve';
import HowWeThink from '../About/HowWeThink';
import Strengths from '../About/Strengths';
import Services from '../HomePage/Services/Services';
import WhoWeWorkWith from '../About/WhoWeWorkWith';
import Industries from '../About/Industries';
import Collaboration from '../About/Collaboration';
import WhyAdsserv from '../About/WhyAdsserv';
import OurWork from '../About/OurWork';
import Trust from '../About/Trust';
import QuickFacts from '../About/QuickFacts';
import AboutFAQ from '../About/AboutFAQ';
import AboutFinalCTA from '../About/AboutFinalCTA';
import '../About/about.css';

export default function AboutPage() {
  // Ensure the page loads at the top when navigating to it
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-page font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <AboutHero />
      <WhoWeAre />
      <WhatWeBelieve />
      <HowWeThink />
      <Strengths />
      <div id="about-capabilities" className="scroll-mt-24">
        <Services />
      </div>
      <WhoWeWorkWith />
      <Industries />
      <Collaboration />
      <WhyAdsserv />
      <OurWork />
      <Trust />
      <QuickFacts />
      <AboutFAQ />
      <AboutFinalCTA />
      <Footer />
    </div>
  );
}
