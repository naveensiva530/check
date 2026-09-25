import React, { useEffect } from 'react';
import { usePopup } from '../context/PopupContext';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonStages from '../Services/common/CommonStages';
import CommonMetrics from '../Services/common/CommonMetrics';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom Sections
import PerformanceChannels from '../Services/PerformanceMarketing/PerformanceChannels';
import PerformanceStructure from '../Services/PerformanceMarketing/PerformanceStructure';
import PerformanceCreative from '../Services/PerformanceMarketing/PerformanceCreative';
import PerformanceLandingPage from '../Services/PerformanceMarketing/PerformanceLandingPage';
import PerformanceHowWeWork from '../Services/PerformanceMarketing/PerformanceHowWeWork';

// Data
import {
  heroData, problemData, approachData, whatWeDoData,
  whoThisIsForData, metricsData, whyAdsservPerformanceData,
  faqData, relatedServicesData, ctaData
} from './PerformanceMarketingData';

export default function PerformanceMarketing() {
  const { openPopup } = usePopup();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <CommonHero {...heroData} />

      {/* 2. THE PROBLEM */}
      <CommonProblem {...problemData} variant="fragments" />

      {/* 3. OUR APPROACH */}
      <CommonApproach {...approachData} />

      {/* 4. WHAT WE DO */}
      <CommonWhatWeDo {...whatWeDoData} sectionId="performance-marketing-what-we-do" buttonAction={openPopup} />

      {/* 5. PAID CHANNELS */}
      <PerformanceChannels />

      {/* 6. CAMPAIGN STRUCTURE */}
      <PerformanceStructure />

      {/* 7. WHAT WE OPTIMISE */}
      <CommonMetrics {...metricsData} />

      {/* 8. CREATIVE & COPY */}
      <PerformanceCreative />

      {/* 9. WHO THIS IS FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* 10. LANDING PAGE EXPERIENCE */}
      <PerformanceLandingPage />

      {/* 11. HOW WE WORK */}
      <PerformanceHowWeWork />

      {/* 12. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservPerformanceData} variant="list" />

      {/* 13. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 14. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 15. FINAL CTA */}
      <CommonCTA {...ctaData} button1Action={openPopup} />

      <Footer />
    </div>
  );
}

