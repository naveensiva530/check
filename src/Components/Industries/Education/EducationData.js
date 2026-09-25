// Education Industry Page - Data Configuration
// Exact content as provided

import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import websiteImg from '../../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import bgImage from '../../../assets/Industries_bg image/EDUCATION.webp';
import approachImg from '../../../assets/Our_Approch (2).webp';

// ── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  title: "Education Digital Marketing | ADSSERV",
  breadcrumbText: "Education Digital Marketing",
  tagText: "EDUCATION",
  headingWords: [
    { text: "Marketing" },
    { text: "That" },
    { text: "Helps" },
    { text: "the" },
    { text: "Right" },
    { text: "Learners", italic: true },
    { text: "Find" },
    { text: "the" },
    { text: "Right" },
    { text: "Opportunity." },
  ],
  description1: "Students, parents, professionals and decision-makers research education options online before taking action.",
  description2: "ADSSERV helps education organisations communicate their programmes, opportunities and value through clearer digital experiences and relevant marketing channels.",
  button1Text: "Talk About Your Education Brand",
  button1Link: "/contact",
  button2Text: "Explore Our Services",
  button2Link: "/industries/education#education-services",
};

// ── THE EDUCATION CHALLENGE ─────────────────────────────────────────────
export const problemData = {
  tagText: "THE EDUCATION CHALLENGE",
  headingWords: [
    { text: "Being" },
    { text: "visible" },
    { text: "is" },
    { text: "only" },
    { text: "the" },
    { text: "beginning.", italic: true },
  ],
  paragraphs: [
    "An education brand needs to make its programme, value and next step easy to understand.",
    "ADSSERV helps connect:"
  ],
  items: [
    "Discovery → Information → Consideration → Enquiry"
  ],
  bottomText1: "The communication changes depending on who is making the decision.",
  bottomText2: "",
};

// ── WHAT WE CAN HELP WITH ─────────────────────────────────────────────────────
export const whatWeDoData = {
  referenceHeaderStyle: true,
  sectionId: "education-services",
  tagText: "WHAT WE CAN HELP WITH",
  headingWords: [
    { text: "Digital" },
    { text: "Marketing" },
    { text: "for" },
    { text: "Education", italic: true },
    { text: "Organisations" },
  ],
  description: "ADSSERV provides complete digital marketing solutions tailored for education brands and institutions.",
  buttonText: "Talk to ADSSERV",
  icons: [],
  services: [
    { title: "SEO", desc: "Improve visibility for relevant education and programme searches.", img: seoImg },
    { title: "Social Media Marketing", desc: "Create useful content that keeps students and audiences engaged.", img: socialImg },
    { title: "Performance Marketing", desc: "Reach relevant audiences through targeted digital campaigns.", img: performanceImg },
    { title: "Website Development", desc: "Present programmes, information and enquiries clearly.", img: websiteImg },
    { title: "Content Writing", desc: "Create course, programme, website and educational content.", img: contentImg },
    { title: "Branding", desc: "Build a consistent and recognisable education brand.", img: brandingImg },
  ],
};

// ── OUR APPROACH ──────────────────────────────────────────────────────────────
export const approachData = {
  tagText: "OUR APPROACH",
  headingWords: [
    { text: "Audience" },
    { text: "first." },
    { text: "Programme" },
    { text: "clear." },
    { text: "Journey" },
    { text: "connected.", italic: true },
  ],
  description: "",
  imageSrc: approachImg,
  imageAlt: "Education Marketing Approach",
  steps: [
    { num: "01", title: "Understand", desc: "institution, programme and audience" },
    { num: "02", title: "Position", desc: "clarify the opportunity and value" },
    { num: "03", title: "Communicate", desc: "content, creative and digital experiences" },
    { num: "04", title: "Reach", desc: "use relevant search, social and paid channels" },
    { num: "05", title: "Optimise", desc: "improve from actual audience response" },
  ],
};

// ── EDUCATION DIGITAL JOURNEY ──────────────────────────────────────────────
export const journeyData = {
  tagText: "EDUCATION DIGITAL JOURNEY",
  headingWords: [
    { text: "Different" },
    { text: "audiences." },
    { text: "Different" },
    { text: "questions." },
  ],
  bottomText: "ADSSERV connects these needs to the appropriate digital communication.",
  audiences: [
    { title: "Students", questions: ["What can I learn?", "What is the experience?"] },
    { title: "Parents", questions: ["Why is this the right option?"] },
    { title: "Professionals", questions: ["How does this support my goals?"] },
    { title: "Decision-makers", questions: ["Is the programme or institution relevant and credible?"] }
  ]
};

// ── FAQ ───────────────────────────────────────────────────────────────────────
export const faqData = {
  referenceHeaderStyle: true,
  tagText: "FAQ",
  headingWords: [
    { text: "Frequently" },
    { text: "Asked" },
    { text: "Questions", italic: true },
  ],
  faqs: [
    {
      q: "What does ADSSERV provide for education businesses?",
      a: "ADSSERV provides SEO, social media marketing, performance marketing, website development, content writing and branding support for education organisations.",
    },
    {
      q: "Can ADSSERV help education organisations reach students?",
      a: "Yes. Depending on the objective, ADSSERV can use search, social media, content, websites and paid campaigns to reach relevant audiences.",
    },
    {
      q: "Can education marketing target parents and professionals as well?",
      a: "Yes. The strategy can be adapted to different audiences, including students, parents, professionals and other decision-makers.",
    },
  ],
};

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
export const ctaData = {
  tagText: "MAKE YOUR EDUCATION BRAND EASIER TO DISCOVER",
  headingText: "Give Your Programmes and Opportunities a Digital Presence People Can Understand.",
  description: "",
  button1Text: "Talk About Your Education Brand",
  button1Link: "/contact",
  button2Text: "Contact ADSSERV",
  button2Link: "/contact",
};
