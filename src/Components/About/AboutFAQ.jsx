import React from 'react';
import CommonFAQ from '../Services/common/CommonFAQ';

const faqs = [
  {
    q: "What is ADSSERV?",
    a: "ADSSERV is a Gen Z digital marketing agency helping brands and businesses build stronger digital presence through strategy, creative, technology, content, and performance-focused marketing."
  },
  {
    q: "Why is ADSSERV called a Gen Z digital marketing agency?",
    a: "The positioning reflects ADSSERV's understanding of the platforms, behaviours, content formats, and cultural patterns influencing modern digital audiences. It is not simply a visual style; that perspective is intended to influence how marketing decisions are made."
  },
  {
    q: "What services does ADSSERV provide?",
    a: "ADSSERV provides social media marketing, performance marketing, website development, influencer marketing, SEO services, video production, branding solutions, digital consulting, content writing, and Instagram marketing."
  },
  {
    q: "What types of businesses does ADSSERV work with?",
    a: "ADSSERV works with brands, startups, growing businesses, established companies, SaaS and technology businesses, local businesses, creators, and other organisations that need digital marketing support."
  },
  {
    q: "Does ADSSERV only work with Gen Z audiences?",
    a: "No. ADSSERV's Gen Z perspective refers to how the agency approaches modern digital behaviour and culture. The actual target audience depends on each client's business, market, product, and customer profile."
  },
  {
    q: "Can ADSSERV provide only one service?",
    a: "Yes. A business can engage ADSSERV for an individual service such as SEO, social media marketing, performance marketing, website development, or another capability, depending on its needs."
  },
  {
    q: "How does ADSSERV approach new clients?",
    a: "ADSSERV begins by understanding the business, audience, objectives, existing digital presence, and challenges. That information is then used to determine the most appropriate strategy, services, priorities, and execution plan."
  },
  {
    q: "How can I contact ADSSERV?",
    a: "Use the Start a Project or Contact option to share your requirements. ADSSERV can then discuss your business, objectives, scope, and potential next steps."
  }
];

export default function AboutFAQ() {
  return (
    <CommonFAQ
      tagText="ABOUT ADSSERV"
      headingWords={[
        { text: "A" },
        { text: "few", italic: true },
        { text: "things" },
        { text: "you" },
        { text: "might" },
        { text: "want" },
        { text: "to" },
        { text: "know." }
      ]}
      faqs={faqs}
    />
  );
}
