import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';
import CommonStages from '../Services/common/CommonStages';

// Import custom sections
import ContentStrategy from '../Services/InstagramMarketing/ContentStrategy';
import { ConversionJourney } from '../Services/InstagramMarketing/InstagramSpecialtySections';

// Import data
import {
  heroData, problemData, approachData, whatWeDoData, whyAdsservInstagramData,
  faqData, relatedServicesData, ctaData, whoItsForData
} from './InstagramMarketingData';

export default function InstagramMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />
      
      {/* Instagram Intro section combined into Problem or Hero - skipping separate intro as it's repetitive */}
      
      <CommonProblem {...problemData} variant="fragments" />
      
      <CommonWhatWeDo {...whatWeDoData} />
      
      <ContentStrategy />
      
      <CommonApproach {...approachData} />
      
      <ConversionJourney />
      
      <CommonStages {...whoItsForData} />
      
      <CommonWhyAdsserv {...whyAdsservInstagramData} variant="list" />
      
      <CommonFAQ {...faqData} />
      
      <CommonRelatedServices {...relatedServicesData} />
      
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
