import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

// Common Components
import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Custom sections kept (highly unique layouts)
import WebsiteApproach from '../Services/WebsiteDevelopment/WebsiteApproach';
import WebsiteWhatWeDo from '../Services/WebsiteDevelopment/WebsiteWhatWeDo';
import WebsiteDesign from '../Services/WebsiteDevelopment/WebsiteDesign';
import WebsiteFeatures from '../Services/WebsiteDevelopment/WebsiteFeatures';
import WebsiteStructure from '../Services/WebsiteDevelopment/WebsiteStructure';
import WebsiteSEO from '../Services/WebsiteDevelopment/WebsiteSEO';
import WebsiteConversion from '../Services/WebsiteDevelopment/WebsiteConversion';
import WebsiteWhoThisIsFor from '../Services/WebsiteDevelopment/WebsiteWhoThisIsFor';
import WebsiteRedesign from '../Services/WebsiteDevelopment/WebsiteRedesign';
import WebsiteHowWeWork from '../Services/WebsiteDevelopment/WebsiteHowWeWork';
import WebsiteWhyAdsserv from '../Services/WebsiteDevelopment/WebsiteWhyAdsserv';

// Data
import {
  heroData, problemData, faqData, relatedServicesData, ctaData
} from './WebsiteDevelopmentData';

export default function WebsiteDevelopment() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <WebsiteApproach />

      <WebsiteWhatWeDo />

      <WebsiteDesign />

      <WebsiteFeatures />

      <WebsiteStructure />

      <WebsiteSEO />

      <WebsiteConversion />

      <WebsiteWhoThisIsFor />

      <WebsiteRedesign />

      <WebsiteHowWeWork />

      <WebsiteWhyAdsserv />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}