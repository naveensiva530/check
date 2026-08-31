import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonStages from '../Services/common/CommonStages';
import CommonMetrics from '../Services/common/CommonMetrics';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom Sections
import PerformanceApproach from '../Services/PerformanceMarketing/PerformanceApproach';
import PerformanceWhatWeDo from '../Services/PerformanceMarketing/PerformanceWhatWeDo';
import PerformanceChannels from '../Services/PerformanceMarketing/PerformanceChannels';
import PerformanceStructure from '../Services/PerformanceMarketing/PerformanceStructure';
import PerformanceCreative from '../Services/PerformanceMarketing/PerformanceCreative';
import PerformanceLandingPage from '../Services/PerformanceMarketing/PerformanceLandingPage';
import PerformanceHowWeWork from '../Services/PerformanceMarketing/PerformanceHowWeWork';
import PerformanceWhyAdsserv from '../Services/PerformanceMarketing/PerformanceWhyAdsserv';


// Data
import {
  heroData, problemData, whoThisIsForData, metricsData,
  faqData, relatedServicesData, ctaData
} from './PerformanceMarketingData';

const customCardPositions = [
  { className: 'md:absolute md:top-0 md:left-[10%]' },
  { className: 'md:absolute md:top-[110px] md:right-[10%]' },
  { className: 'md:absolute md:top-[440px] md:left-[10%]' },
  { className: 'md:absolute md:top-[560px] md:right-[8%]' },
  { className: 'md:absolute md:top-[840px] md:left-[10%]' },
  { className: 'md:absolute md:top-[960px] md:right-[8%]' },
  { className: 'md:absolute md:top-[1240px] md:left-[10%]' },
];

const customSvgPath = "M 265 150 C 450 150, 500 260, 660 260 C 800 260, 450 370, 265 450 C 265 560, 500 660, 690 660 C 855 660, 450 760, 265 840 C 265 960, 500 1060, 700 1060 C 855 1060, 450 1160, 265 1240";

export default function PerformanceMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <PerformanceApproach />

      <PerformanceWhatWeDo />

      <PerformanceChannels />

      <PerformanceStructure />

      <CommonMetrics 
        {...metricsData} 
        cardPositions={customCardPositions}
        canvasHeight={1650}
        svgPath={customSvgPath}
      />

      <PerformanceCreative />

      <CommonStages {...whoThisIsForData} />

      <PerformanceLandingPage />

      <PerformanceHowWeWork />

      <PerformanceWhyAdsserv />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
