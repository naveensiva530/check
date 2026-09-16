import React from 'react';
import CommonWhyAdsserv from '../Services/common/CommonWhyAdsserv';

const factsData = {
  tagText: "ADSSERV AT A GLANCE",
  headingWords: [
    { text: "ADSSERV" },
    { text: "at", italic: true },
    { text: "a" },
    { text: "glance." }
  ],
  description1: "A snapshot of the agency — what we do, the work we cover, and the way we think about digital marketing for modern brands.",
  points: [
    {
      tag: "WHO WE ARE",
      title: "Agency",
      desc: "Gen Z digital marketing and growth agency."
    },
    {
      tag: "WHAT WE DO",
      title: "Core focus",
      desc: "Creative, strategy, digital execution, and performance."
    },
    {
      tag: "WHAT WE COVER",
      title: "Capabilities",
      desc: "Social media, paid advertising, SEO, websites, influencers, video, branding, consulting, content, and Instagram marketing."
    },
    {
      tag: "WHERE WE WORK",
      title: "Industries",
      desc: "Health Care, Real Estate, Education, IT-Tech / SaaS, and Beauty & Salon."
    },
    {
      tag: "HOW WE WORK",
      title: "Approach",
      desc: "Audience-first, platform-aware, commercially focused, and continuously improving."
    }
  ]
};

export default function QuickFacts() {
  return (
    <CommonWhyAdsserv
      {...factsData}
      variant="grid"
    />
  );
}
