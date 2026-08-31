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

// Custom sections kept (highly unique layouts)
import OurApproach from '../Services/SocialMedia/OurApproach';
import WhatWeDo from '../Services/SocialMedia/WhatWeDo';
import Platforms from '../Services/SocialMedia/Platforms';
import ContentStrategy from '../Services/SocialMedia/ContentStrategy';
import WhoThisIsFor from '../Services/SocialMedia/WhoThisIsFor';
import SocialIndustries from '../Services/SocialMedia/SocialIndustries';
import MeasuringSuccess from '../Services/SocialMedia/MeasuringSuccess';
import SocialFunnel from '../Services/SocialMedia/SocialFunnel';
import Collaboration from '../Services/SocialMedia/Collaboration';

// Data
import {
  heroData, problemData, whyAdsservSocialData,
  faqData, relatedServicesData, ctaData
} from './SocialMediaMarketingData';

export default function SocialMediaMarketing() {
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

      <Platforms />

      <ContentStrategy />

      <WhoThisIsFor />

      <SocialIndustries />

      <MeasuringSuccess />

      <CommonWhyAdsserv {...whyAdsservSocialData} variant="list" />

      <SocialFunnel />

      <Collaboration />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
