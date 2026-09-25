import React, { useEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom sections (following template pattern)
import ConsultingApproach from '../Services/DigitalConsulting/ConsultingApproach';
import WhatWeHelpSolve from '../Services/DigitalConsulting/WhatWeHelpSolve';
import ConsultingProcess from '../Services/DigitalConsulting/ConsultingProcess';
import ConsultingServices from '../Services/DigitalConsulting/ConsultingServices';
import StrategySection from '../Services/DigitalConsulting/StrategySection';
import RoadmapSection from '../Services/DigitalConsulting/RoadmapSection';
import TrustSection from '../Services/DigitalConsulting/TrustSection';
import WhoItsFor from '../Services/DigitalConsulting/WhoItsFor';

// Data
import {
  heroData, problemData, whyAdsservConsultingData,
  faqData, relatedServicesData, ctaData
} from './DigitalConsultingData';

export default function DigitalConsulting() {
  const { openPopup } = usePopup();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <CommonHero {...heroData} />

      {/* 2. STRATEGIC INTRODUCTION */}
      <CommonProblem {...problemData} variant="fragments" />

      {/* 3. WHAT WE HELP YOU SOLVE */}
      <WhatWeHelpSolve />

      {/* 4. OUR CONSULTING APPROACH */}
      <ConsultingApproach />

      {/* 5. PROCESS */}
      <ConsultingProcess />

      {/* 6. CONSULTING SERVICES */}
      <ConsultingServices sectionId="digital-consulting-what-we-do" buttonAction={openPopup} />

      {/* 7. THE DIGITAL STRATEGY */}
      <StrategySection />

      {/* 8. THE EXECUTION PLAN / ROADMAP */}
      <RoadmapSection />



      {/* 10. TRUST / PROOF SECTION */}
      <TrustSection />

      {/* 11. WHO IT'S FOR */}
      <WhoItsFor />

      {/* 12. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservConsultingData} variant="list" />

      {/* 13. FAQ */}
      <CommonFAQ {...faqData} />

      {/* RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 14. FINAL CTA */}
      <CommonCTA {...ctaData} button1Action={openPopup} />

      {/* 15. FOOTER */}
      <Footer />
    </div>
  );
}
