import React from 'react';
import CommonMetrics from '../common/CommonMetrics';

const creatorTypesData = {
  tagText: "NOT EVERY CAMPAIGN NEEDS THE BIGGEST CREATOR",
  headingWords: [
    { text: "Different" }, { text: "creators" }, { text: "can" }, { text: "play" },
    { text: "different", italic: true }, { text: "roles." }
  ],
  description: "",
  metrics: [
    {
      num: "01",
      title: "Nano Creators",
      desc: "Smaller communities can be useful when relevance, authenticity, local reach, or niche audience fit matters.",
      pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)',
      rotate: "-rotate-[2deg]"
    },
    {
      num: "02",
      title: "Micro Creators",
      desc: "Creators with focused audiences can help brands reach specific communities without relying entirely on mass reach.",
      pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)',
      rotate: "rotate-[3deg]"
    },
    {
      num: "03",
      title: "Mid-Tier Creators",
      desc: "Useful for campaigns that need a broader audience while maintaining a defined content identity.",
      pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)',
      rotate: "-rotate-[1deg]"
    },
    {
      num: "04",
      title: "Macro Creators",
      desc: "Larger creators can support campaigns where scale, awareness, and broad visibility are important.",
      pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)',
      rotate: "rotate-[2deg]"
    },
    {
      num: "05",
      title: "Niche Creators",
      desc: "Specialist creators can help brands communicate with audiences built around particular interests, industries, lifestyles, or communities.",
      pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)',
      rotate: "-rotate-[3deg]"
    }
  ],
  bottomText: "The right creator tier depends on the campaign - not the ego attached to the follower count."
};

export default function InfluencerCreatorTypes() {
  return (
    <CommonMetrics
      {...creatorTypesData}
    />
  );
}
