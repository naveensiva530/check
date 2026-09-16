import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonSpecialty from '../Services/common/CommonSpecialty';
import CommonMetrics from '../Services/common/CommonMetrics';
import CommonStages from '../Services/common/CommonStages';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom Specialty Sections
import WebsiteStructure from '../Services/WebsiteDevelopment/WebsiteStructure';
import WebsiteHowWeWork from '../Services/WebsiteDevelopment/WebsiteHowWeWork';

// Data
import {
  heroData, problemData, approachData, whatWeBuildData,
  designUXData, builtIntoExperienceData, seoReadyData, conversionData,
  whoThisIsForData, redesignData, whyAdsservWebsiteData,
  faqData, relatedServicesData, ctaData
} from './WebsiteDevelopmentData';

export default function WebsiteDevelopment() {
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

      {/* 4. WHAT WE BUILD */}
      <CommonWhatWeDo {...whatWeBuildData} />

      {/* 5. DESIGN & EXPERIENCE */}
      <CommonSpecialty {...designUXData} bgColor="white" />

      {/* 6. WHAT'S BUILT INTO THE EXPERIENCE */}
      <CommonMetrics {...builtIntoExperienceData} />

      {/* 7. WEBSITE STRUCTURE */}
      <WebsiteStructure />

      {/* 8. SEO-READY DEVELOPMENT */}
      <CommonSpecialty {...seoReadyData} bgColor="purple" />

      {/* 9. CONVERSION EXPERIENCE */}
      <CommonSpecialty {...conversionData} bgColor="white" />

      {/* 10. WHO THIS IS FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* 11. WEBSITE REDESIGN */}
      <CommonSpecialty {...redesignData} bgColor="purple" />

      {/* 12. HOW WE WORK */}
      <WebsiteHowWeWork />

      {/* 13. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservWebsiteData} variant="list" />

      {/* 14. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 15. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 16. FINAL CTA */}
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}