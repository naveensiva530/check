import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonApproach from '../Services/common/CommonApproach';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonSpecialty from '../Services/common/CommonSpecialty';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Import data
import {
  heroData, problemData, approachData, whatWeWriteData, whyAdsservContentData,
  faqData, relatedServicesData, ctaData
} from './ContentWritingData';

export default function ContentWriting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />
      
      <CommonProblem {...problemData} variant="fragments" />
      
      <CommonApproach {...approachData} />
      
      <CommonWhatWeDo {...whatWeWriteData} />
      
      {/* Content Specialty Sections */}
      <CommonSpecialty 
        tagText="SEARCH CONTENT"
        headingWords={[{ text: "Search-friendly" }, { text: "without" }, { text: "sounding", italic: true }, { text: "search-engine-written." }]}
        paragraphs={["SEO content should help the person searching before it tries to impress an algorithm.", "We build content around relevant topics, search intent, useful information, clear structure and natural language. Where appropriate, content can also be structured around the questions people ask search engines and AI-powered answer systems."]}
        bottomText="The goal isn't to repeat a keyword until the writing becomes awkward. The goal is to create something useful enough to deserve attention."
        button={<button className="group flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full bg-[var(--brand-navy)] text-white hover:bg-opacity-90 transition-all duration-300">Plan My SEO Content</button>}
        bgColor="white"
      />

      <CommonSpecialty 
        tagText="CONVERSION COPY"
        headingWords={[{ text: "The" }, { text: "right" }, { text: "words" }, { text: "can" }, { text: "remove", italic: true }, { text: "friction." }]}
        paragraphs={["People rarely need more information just for the sake of having more information. They need the right information at the right moment.", "Strong conversion content makes the offer easier to understand, answers important objections, communicates value and gives visitors a clear next step."]}
        rightContent={
          <>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              People rarely need more information just for the sake of having more information. They need the right information at the right moment.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              Strong conversion content makes the offer easier to understand, answers important objections, communicates value and gives visitors a clear next step.
            </p>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <p className="text-[15px] font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>We use messaging to help bridge the gap between:</p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--accent-orange)' }}>"I'm interested."</p>
              <p className="text-[14px] font-medium text-slate-500 my-1">and</p>
              <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>"I'm ready to take the next step."</p>
            </div>
            <div className="mt-2">
              <button className="group flex items-center justify-center gap-2 px-6 py-3 font-bold rounded-full bg-[var(--brand-navy)] text-white hover:bg-opacity-90 transition-all duration-300">Improve My Website Copy</button>
            </div>
          </>
        }
        bgColor="purple"
      />

      <CommonWhyAdsserv {...whyAdsservContentData} variant="grid" />
      
      <CommonFAQ {...faqData} />
      
      <CommonRelatedServices {...relatedServicesData} />
      
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
