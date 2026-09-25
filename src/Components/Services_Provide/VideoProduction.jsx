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
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom sections kept (highly unique layouts)
import { ShortFormContent, BrandStorytelling, VideoForPaidCampaigns, BeforeFilming } from '../Services/VideoProduction/VideoSpecialtySections';
import PlatformFit from '../Services/VideoProduction/PlatformFit';
import PostProduction from '../Services/VideoProduction/PostProduction';
import ContentSystem from '../Services/VideoProduction/ContentSystem';

// Data
import {
  heroData, problemData, approachData, whatWeDoData, whoThisIsForData,
  whyAdsservVideoData, faqData, relatedServicesData, ctaData
} from './VideoProductionData';

export default function VideoProduction() {
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
      <CommonWhatWeDo {...whatWeDoData} sectionId="video-production-what-we-do" buttonAction={openPopup} />

      {/* 5. SPECIALTY SECTIONS */}
      <ShortFormContent />
      <BrandStorytelling />
      <VideoForPaidCampaigns />

      {/* 6. PLATFORM FIT */}
      <PlatformFit />

      {/* 7. BEFORE FILMING */}
      <BeforeFilming />

      {/* 8. POST PRODUCTION */}
      <PostProduction />

      {/* 9. WHO THIS IS FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* 10. CONTENT SYSTEM */}
      <ContentSystem />

      {/* 11. WHY ADSSERV */}
      <CommonWhyAdsserv {...whyAdsservVideoData} variant="list" />

      {/* 12. FAQ */}
      <CommonFAQ {...faqData} />

      {/* 13. RELATED SERVICES */}
      <CommonRelatedServices {...relatedServicesData} />

      {/* 14. CTA */}
      <CommonCTA {...ctaData} button1Action={openPopup} />

      <Footer />
    </div>
  );
}
