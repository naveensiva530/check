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
import CommonStages from '../Services/common/CommonStages';

// Import data
import {
  heroData, problemData, whatWeHelpSolveData, approachData, consultingServicesData,
  whoItsForData, whyAdsservConsultingData, faqData, relatedServicesData, ctaData
} from './DigitalConsultingData';

export default function DigitalConsulting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />
      
      <CommonProblem {...problemData} variant="fragments" />
      
      <CommonWhatWeDo {...whatWeHelpSolveData} />
      
      <CommonSpecialty 
        tagText="OUR CONSULTING APPROACH"
        headingWords={[
          { text: "We" }, { text: "look" }, { text: "at" }, { text: "the" },
          { text: "whole", italic: true }, { text: "digital" }, { text: "picture" },
          { text: "before" }, { text: "recommending" }, { text: "the" }, { text: "next" }, { text: "move." }
        ]}
        paragraphs={[
          "Good consulting starts with understanding, not assumptions. We look at your business objectives, audience, existing digital activity, competitors, customer journey and available data before deciding where the biggest opportunities are.",
          "The goal isn't to give you a huge list of recommendations. It's to identify the moves that matter most."
        ]}
        leftContent={
          <div className="relative mt-8">
            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl p-5 shadow-xl border border-gray-100 hidden md:block max-w-[200px]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Focus</p>
              <p className="text-[14px] font-extrabold leading-snug" style={{ color: 'var(--brand-navy)' }}>High-impact moves over long task lists</p>
            </div>
          </div>
        }
        bgColor="white"
      />

      <CommonApproach {...approachData} />
      
      <CommonWhatWeDo {...consultingServicesData} />
      
      {/* Strategy Section */}
      <CommonSpecialty 
        tagText="THE DIGITAL STRATEGY"
        headingWords={[{ text: "Strategy" }, { text: "gives" }, { text: "the" }, { text: "tactics", italic: true }, { text: "a" }, { text: "job" }, { text: "to" }, { text: "do." }]}
        paragraphs={[
          "Without a strategy, digital marketing is just a collection of random activities. We help businesses define the overarching plan that guides those activities.",
          "This includes identifying which audience segments hold the most value, which channels are best suited to reach them, how the budget should be allocated and what metrics actually matter."
        ]}
        bgColor="white"
      />

      {/* Roadmap Section */}
      <CommonSpecialty 
        tagText="THE EXECUTION PLAN"
        headingWords={[{ text: "Knowing" }, { text: "what" }, { text: "to" }, { text: "do" }, { text: "is" }, { text: "only" }, { text: "half", italic: true }, { text: "the" }, { text: "challenge." }]}
        paragraphs={[
          "A strategy is useless if the team doesn't know how to execute it. We turn strategic recommendations into a practical roadmap.",
          "This means assigning clear priorities, defining who is responsible for what, setting timelines and outlining the specific steps required to get the work done."
        ]}
        bgColor="purple"
      />

      <CommonStages {...whoItsForData} />

      <CommonWhyAdsserv {...whyAdsservConsultingData} variant="list" />
      
      <CommonFAQ {...faqData} />
      
      <CommonRelatedServices {...relatedServicesData} />
      
      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
