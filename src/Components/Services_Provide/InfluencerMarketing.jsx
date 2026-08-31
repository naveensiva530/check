import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import '../HomePage/common.css';

import CommonHero from '../Services/common/CommonHero';
import CommonProblem from '../Services/common/CommonProblem';
import CommonWhatWeDo from '../Services/common/CommonWhatWeDo';
import CommonSpecialty from '../Services/common/CommonSpecialty';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';
import CommonFAQ from '../Services/common/CommonFAQ';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import CommonCTA from '../Services/common/CommonCTA';

// Keep the custom components that don't fit the common abstracted patterns
import InfluencerCreatorTypes from '../Services/InfluencerMarketing/InfluencerCreatorTypes';
import PlatformFit from '../Services/InfluencerMarketing/PlatformFit';
import CampaignProcess from '../Services/InfluencerMarketing/CampaignProcess';
import InfluencerApproach from '../Services/InfluencerMarketing/InfluencerApproach';
import InfluencerWhatWeDo from '../Services/InfluencerMarketing/InfluencerWhatWeDo';

// Import data
import {
  heroData, problemData, whatWeDoData, whyAdsservInfluencerData,
  faqData, relatedServicesData, ctaData
} from './InfluencerMarketingData';

export default function InfluencerMarketing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <CommonHero {...heroData} />

      <CommonProblem {...problemData} variant="fragments" />

      <InfluencerApproach />

      <InfluencerWhatWeDo />

      <InfluencerCreatorTypes />

      <PlatformFit />

      {/* CreativeDirection - mapped to CommonSpecialty with custom right content */}
      <CommonSpecialty
        tagText="CREATOR SELECTION"
        headingWords={[{ text: "We'd" }, { text: "rather" }, { text: "find" }, { text: "the" }, { text: "right", italic: true }, { text: "audience" }, { text: "than" }, { text: "the" }, { text: "biggest" }, { text: "number." }]}
        leftContent={null}
        rightContent={
          <div className="flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>Creator selection should consider more than follower count.</p>
            <p className="font-bold text-[18px] md:text-[20px]" style={{ color: 'var(--brand-navy)' }}>
              We look at factors such as:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {[
                { title: 'Audience Demographics', desc: 'Age, location, gender, and interests of the followers.' },
                { title: 'Engagement Rate', desc: 'The percentage of followers who actively interact with the content.' },
                { title: 'Brand Alignment', desc: 'How well the creator\'s style, values, and past content fit the brand.' },
                { title: 'Content Quality', desc: 'The production value and storytelling ability of the creator.' }
              ].map((factor, idx) => (
                <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h4 className="text-[16px] font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>{factor.title}</h4>
                  <p className="text-[14px] font-medium leading-relaxed text-slate-600">{factor.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 font-bold" style={{ color: 'var(--brand-navy)' }}>
              Where platform or third-party data is available, it should be reviewed before final selection.
            </p>
          </div>
        }
        bgColor="purple"
      />

      {/* WhatWeMeasure - mapped to CommonSpecialty for simplicity of the grid */}
      <CommonSpecialty
        tagText="MEASURING PERFORMANCE"
        headingWords={[{ text: "Tracking" }, { text: "what" }, { text: "actually", italic: true }, { text: "matters." }]}
        paragraphs={[
          "Views and likes are nice, but they don't pay the bills. We measure campaign success based on the objectives we set at the start.",
          "Whether the goal is awareness, engagement, or direct sales, we track the metrics that indicate real business impact."
        ]}
        bgColor="white"
      />

      <CampaignProcess />

      <CommonWhyAdsserv {...whyAdsservInfluencerData} variant="list" />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} />

      <Footer />
    </div>
  );
}
