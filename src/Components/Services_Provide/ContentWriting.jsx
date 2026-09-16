import React, { useEffect } from 'react';
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
import ContentIntro from '../Services/ContentWriting/ContentIntro';
import ContentObjectives from '../Services/ContentWriting/ContentObjectives';
import ContentProcess from '../Services/ContentWriting/ContentProcess';
import WhatWeWrite from '../Services/ContentWriting/WhatWeWrite';
import { SEOContentSection as SeoContent, ConversionContentSection as ConversionContent } from '../Services/ContentWriting/ContentSpecialtySections';
import AudienceSection from '../Services/ContentWriting/AudienceSection';
import ContentMarketing from '../Services/ContentWriting/ContentMarketing';
import ContentQuality from '../Services/ContentWriting/ContentQuality';
import ContentFit from '../Services/ContentWriting/ContentFit';

// Data
import {
  heroData, problemData, whyAdsservContentData,
  faqData, relatedServicesData, ctaData
} from './ContentWritingData';

export default function ContentWriting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      {/* 1. HERO */}
      <CommonHero {...heroData} />

      {/* 2. INTRODUCTION - CONTENT WITH A PURPOSE */}
      <ContentIntro />

      {/* 3. THE REAL PROBLEM */}
      <CommonProblem {...problemData} variant="fragments" />



      {/* 4. CONTENT OBJECTIVES */}
      <ContentObjectives />

      {/* 5. WHAT WE WRITE */}
      <WhatWeWrite />

      {/* 6. CONTENT PROCESS */}
      <ContentProcess />

      {/* 7. SEO CONTENT */}
      <SeoContent />

      {/* 8. CONVERSION CONTENT */}
      <ConversionContent />

      {/* 9. AUDIENCE SECTION */}
      <AudienceSection />

      {/* 10. CONTENT + DIGITAL MARKETING */}
      <ContentMarketing />

      {/* 11. CONTENT QUALITY */}
      <ContentQuality />

      {/* 12. CONTENT FIT - ONE VOICE DIFFERENT PLATFORMS */}
      <ContentFit />

      {/* 13. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservContentData} variant="grid" />

      {/* 14. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 15. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 16. FINAL CTA */}
      <CommonCTA {...ctaData} />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
