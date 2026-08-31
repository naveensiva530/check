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
      pinColor: "#3b82f6", // Blue
      rotate: "-rotate-2"
    },
    {
      num: "02",
      title: "Micro Creators",
      desc: "Creators with focused audiences can help brands reach specific communities without relying entirely on mass reach.",
      pinColor: "#f97316", // Orange
      rotate: "rotate-3"
    },
    {
      num: "03",
      title: "Mid-Tier Creators",
      desc: "Useful for campaigns that need a broader audience while maintaining a defined content identity.",
      pinColor: "#10b981", // Green
      rotate: "-rotate-1"
    },
    {
      num: "04",
      title: "Macro Creators",
      desc: "Larger creators can support campaigns where scale, awareness, and broad visibility are important.",
      pinColor: "#8b5cf6", // Purple
      rotate: "rotate-2"
    },
    {
      num: "05",
      title: "Niche Creators",
      desc: "Specialist creators can help brands communicate with audiences built around particular interests, industries, lifestyles, or communities.",
      pinColor: "#ef4444", // Red
      rotate: "-rotate-3"
    }
  ],
  bottomText: "The right creator tier depends on the campaign — not the ego attached to the follower count."
};

const customCardPositions = [
  { className: 'md:absolute md:top-0 md:left-[10%]' },
  { className: 'md:absolute md:top-[120px] md:right-[10%]' },
  { className: 'md:absolute md:top-[420px] md:left-[10%]' },
  { className: 'md:absolute md:top-[540px] md:right-[8%]' },
  { className: 'md:absolute md:top-[840px] md:left-[15%]' },
];

// Adjusting SVG path to connect 5 cards instead of 6
const customSvgPath = "M 265 150 C 450 150, 500 260, 660 260 C 800 260, 450 370, 265 450 C 265 560, 500 660, 690 660 C 855 660, 450 760, 360 840 C 300 900, 380 940, 360 960";

export default function InfluencerCreatorTypes() {
  return (
    <CommonMetrics 
      {...creatorTypesData} 
      cardPositions={customCardPositions}
      canvasHeight={1350}
      svgPath={customSvgPath}
    />
  );
}
