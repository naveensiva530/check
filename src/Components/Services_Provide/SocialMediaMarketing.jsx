import React, { useEffect } from 'react';
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

// Specialty Custom Sections
import Platforms from '../Services/SocialMedia/Platforms';
import ContentStrategy from '../Services/SocialMedia/ContentStrategy';
import SocialIndustries from '../Services/SocialMedia/SocialIndustries';
import SocialFunnel from '../Services/SocialMedia/SocialFunnel';
import Collaboration from '../Services/SocialMedia/Collaboration';

// Data
import {
  heroData, problemData, approachData, whatWeDoData,
  whoThisIsForData, measuringSuccessData, whyAdsservSocialData,
  faqData, relatedServicesData, ctaData
} from './SocialMediaMarketingData';

export default function SocialMediaMarketing() {
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
      <CommonWhatWeDo {...whatWeDoData} />

      {/* 5. PLATFORMS */}
      <Platforms />

      {/* 6. CONTENT STRATEGY */}
      <ContentStrategy />

      {/* 7. WHO THIS IS FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* 8. INDUSTRIES */}
      <SocialIndustries />

      {/* 9. WHAT SUCCESS LOOKS LIKE */}
      <CommonMetrics {...measuringSuccessData} />

      {/* 10. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservSocialData} variant="list" />

      {/* 11. SOCIAL MEDIA FUNNEL */}
      <SocialFunnel />

      {/* 12. HOW WE COLLABORATE */}
      <Collaboration />

      {/* 13. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 14. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 15. FINAL CTA */}
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}

