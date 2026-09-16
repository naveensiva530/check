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
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom specialty sections kept as-is (highly unique layouts)
import { TechnicalSEO, OnPageSEO, ContentSEO, LocalSEO, AEOGEO } from '../Services/SEO/SEOSpecialtySections';
import KeywordIntent from '../Services/SEO/KeywordIntent';
import SEOForBusinesses from '../Services/SEO/SEOForBusinesses';
import SEOReporting from '../Services/SEO/SEOReporting';
import WhatWeDontPromise from '../Services/SEO/WhatWeDontPromise';
import SEOProcess from '../Services/SEO/SEOProcess';

// Data
import {
  heroData, problemData, approachData, whatWeDoData,
  whyAdsservSEOData, whoThisIsForData,
  faqData, relatedServicesData, ctaData
} from './SEOServicesData';

export default function SEOServices() {
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

      {/* 5. SPECIALTY SECTIONS */}
      <TechnicalSEO />
      <OnPageSEO />
      <KeywordIntent />
      <ContentSEO />
      <LocalSEO />
      <AEOGEO />

      {/* 6. BUSINESS FIT */}
      <SEOForBusinesses />

      {/* 7. REPORTING */}
      <SEOReporting />

      {/* 8. WHAT WE DONT PROMISE */}
      <WhatWeDontPromise />

      {/* 9. WHO THIS IS FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* 10. SEO PROCESS */}
      <SEOProcess />

      {/* 11. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservSEOData} variant="list" />

      {/* 12. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 13. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 14. CTA */}
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}

