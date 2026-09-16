import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';
import CommonStages from '../Services/common/CommonStages';

// Custom sections (following template pattern)
import ContentStrategy from '../Services/InstagramMarketing/ContentStrategy';
import { ConversionJourney } from '../Services/InstagramMarketing/InstagramSpecialtySections';
import InstagramIntro from '../Services/InstagramMarketing/InstagramIntro';
import PlatformFirst from '../Services/InstagramMarketing/PlatformFirst';

// Data
import {
  heroData, problemData, approachData, whatWeDoData, whyAdsservInstagramData,
  faqData, relatedServicesData, ctaData, whoItsForData, introData,
  contentStrategyData, platformFirstData, conversionJourneyData
} from './InstagramMarketingData';

export default function InstagramMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <CommonHero {...heroData} />

      {/* 2. INTRODUCTION - MORE THAN POSTING */}
      <InstagramIntro />

      {/* 3. THE PROBLEM */}
      <CommonProblem {...problemData} variant="cards" />

      {/* 4. OUR INSTAGRAM SERVICES */}
      <CommonWhatWeDo {...whatWeDoData} />

      {/* 5. CONTENT STRATEGY */}
      <ContentStrategy />

      {/* 6. PROCESS */}
      <CommonApproach {...approachData} />

      {/* 7. PLATFORM-FIRST CONTENT */}
      <PlatformFirst />

      {/* 8. CONVERSION JOURNEY */}
      <ConversionJourney />

      {/* 9. WHO IT'S FOR */}
      <CommonStages {...whoItsForData} />

      {/* 10. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservInstagramData} variant="grid" />

      {/* 11. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 12. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 13. FINAL CTA */}
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
