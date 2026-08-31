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
import OurApproach from '../Services/VideoProduction/OurApproach';
import WhatWeCreate from '../Services/VideoProduction/WhatWeCreate';
import { ShortFormContent, BrandStorytelling, VideoForPaidCampaigns, BeforeFilming } from '../Services/VideoProduction/VideoSpecialtySections';
import PlatformFit from '../Services/VideoProduction/PlatformFit';
import PostProduction from '../Services/VideoProduction/PostProduction';
import WhoThisIsFor from '../Services/VideoProduction/WhoThisIsFor';
import ContentSystem from '../Services/VideoProduction/ContentSystem';

// Data
import {
  heroData, problemData, whyAdsservVideoData,
  faqData, relatedServicesData, ctaData
} from './VideoProductionData';

export default function VideoProduction() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <OurApproach />

      <WhatWeCreate />

      <ShortFormContent />
      <BrandStorytelling />
      <VideoForPaidCampaigns />

      <PlatformFit />

      <BeforeFilming />

      <PostProduction />

      <WhoThisIsFor />

      <ContentSystem />

      <CommonWhyAdsserv {...whyAdsservVideoData} variant="list" />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
