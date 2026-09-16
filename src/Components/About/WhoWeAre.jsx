import React from 'react';
import CommonProblem from '../Services/common/CommonProblem';

const whoWeAreData = {
  tagText: "MORE THAN A DIGITAL AGENCY",
  headingWords: [
    { text: "We" },
    { text: "understand", italic: true },
    { text: "the" },
    { text: "internet" },
    { text: "because" },
    { text: "we're" },
    { text: "part" },
    { text: "of" },
    { text: "it." }
  ],
  paragraphs: [
    "The way people discover brands has changed. Attention moves through feeds, search results, creators, communities, websites, conversations, and recommendations. Trends can change in days.",
    "ADSSERV was built for that fast-moving environment. Our Gen Z perspective is about understanding how modern audiences behave — what makes them stop, what makes them care, and what makes them convert.",
    "We combine that cultural fluency with the business fundamentals that build long-term value:"
  ],
  items: [
    "Strong brand positioning and narrative clarity",
    "Creative built for where attention actually lives",
    "Modern web technology and conversion infrastructure",
    "Measurable, performance-driven marketing systems",
    "Disciplined execution without bureaucratic lag"
  ],
  bottomText1: "Modern audience thinking. Serious marketing execution.",
  bottomText2: "This is what defines ADSSERV."
};

export default function WhoWeAre() {
  return (
    <CommonProblem
      {...whoWeAreData}
      variant="fragments"
    />
  );
}
