import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonStages from '../Services/common/CommonStages';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom specialty sections kept as-is (highly unique layouts)
import OurApproach from '../Services/SEO/OurApproach';
import WhatWeDo from '../Services/SEO/WhatWeDo';
import { TechnicalSEO, OnPageSEO, ContentSEO, LocalSEO, AEOGEO } from '../Services/SEO/SEOSpecialtySections';
import KeywordIntent from '../Services/SEO/KeywordIntent';
import SEOForBusinesses from '../Services/SEO/SEOForBusinesses';
import SEOReporting from '../Services/SEO/SEOReporting';
import WhatWeDontPromise from '../Services/SEO/WhatWeDontPromise';
import SEOProcess from '../Services/SEO/SEOProcess';

// Data
import {
  heroData, problemData, whyAdsservSEOData, whoThisIsForData,
  faqData, relatedServicesData, ctaData
} from './SEOServicesData';

export default function SEOServices() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <OurApproach />

      <WhatWeDo />

      <TechnicalSEO />
      <OnPageSEO />
      <KeywordIntent />
      <ContentSEO />
      <LocalSEO />
      <AEOGEO />

      <SEOForBusinesses />

      <SEOReporting />

      <WhatWeDontPromise />

      <CommonStages {...whoThisIsForData} />

      <SEOProcess />

      <CommonWhyAdsserv {...whyAdsservSEOData} variant="list" />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
