import React from 'react';
import CommonSpecialty from '../common/CommonSpecialty';

const ConsultingApproach = () => {
  return (
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

      bgColor="white"
    />
  );
};

export default ConsultingApproach;