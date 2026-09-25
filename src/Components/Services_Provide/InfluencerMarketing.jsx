import React, { useEffect } from 'react';
import { usePopup } from '../context/PopupContext';
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

// Keep the custom components that don't fit the common abstracted patterns
import InfluencerCreatorTypes from '../Services/InfluencerMarketing/InfluencerCreatorTypes';
import PlatformFit from '../Services/InfluencerMarketing/PlatformFit';
import CampaignProcess from '../Services/InfluencerMarketing/CampaignProcess';

// Import data
import { heroData, problemData, approachData, whatWeDoData, creativeDirectionData, whatWeMeasureData, whoThisIsForData, whyAdsservInfluencerData, faqData, relatedServicesData, ctaData } from './InfluencerMarketingData';

export default function InfluencerMarketing() {
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
      <CommonWhatWeDo {...whatWeDoData} sectionId="influencer-marketing-what-we-do" buttonAction={openPopup} />

      <InfluencerCreatorTypes />

      <PlatformFit />

      {/* CreativeDirection: CONTENT THAT DOESN'T FEEL FORCED */}
      <CommonSpecialty {...creativeDirectionData} bgColor="purple" />

      {/* WhatWeMeasure: BEYOND FOLLOWER COUNT */}
      <CommonSpecialty {...whatWeMeasureData} bgColor="white" />

      {/* WhoItsFor: CREATOR MARKETING FOR */}
      <CommonStages {...whoThisIsForData} />

      {/* TrustMatters: CREATOR SELECTION */}
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
                { title: 'Audience relevance', desc: 'Does the creator reach people who could realistically care about the brand?' },
                { title: 'Content fit', desc: 'Does their existing content style make sense for the campaign?' },
                { title: 'Engagement quality', desc: 'Does the audience actually interact with the creator\'s content?' },
                { title: 'Platform fit', desc: 'Is the creator strong on the platform where the campaign needs to happen?' },
                { title: 'Location', desc: 'Does the audience or creator location matter for the campaign?' },
                { title: 'Brand alignment', desc: 'Can the creator work with the brand without making the collaboration feel unnatural?' }
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

      {/* CampaignProcess: HOW WE RUN IT */}
      <CampaignProcess />

      {/* ContentValue: CREATOR CONTENT CAN LIVE LONGER */}
      <CommonSpecialty
        tagText="CONTENT VALUE"
        headingWords={[
          { text: "One" }, { text: "collaboration" }, { text: "can" }, { text: "create" },
          { text: "more", italic: true }, { text: "than" }, { text: "one" }, { text: "post." }
        ]}
        leftContent={null}
        rightContent={
          <div className="flex flex-col gap-6 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p>A creator campaign can produce content that continues working beyond the original publication.</p>
            <p>Depending on permissions and usage rights, creator content may support:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              {[
                'Organic social content',
                'Paid social advertising',
                'Product pages',
                'Landing pages',
                'Website content',
                'Launch campaigns',
                'Retargeting creative',
                'Brand storytelling'
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent-orange)' }}
                  />
                  <span className="text-[15px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-2 font-bold" style={{ color: 'var(--brand-navy)' }}>
              Usage rights should always be agreed before content is repurposed.
            </p>
          </div>
        }
        bgColor="white"
      />

      <CommonWhyAdsserv {...whyAdsservInfluencerData} variant="list" />

      <CommonFAQ {...faqData} />

      <CommonRelatedServices {...relatedServicesData} />

      <CommonCTA {...ctaData} button1Action={openPopup} />

      <Footer />
    </div>
  );
}
