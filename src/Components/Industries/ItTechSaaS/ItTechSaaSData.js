// IT-Tech / SaaS Industry Page - Data Configuration
// Exact content as provided

import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import websiteImg from '../../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import bgImage from '../../../assets/Industries_bg image/IT-TECH  SAAS.webp';
import approachImg from '../../../assets/Our_Approch (2).webp';

// ── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  title: "IT-Tech & SaaS Digital Marketing | ADSSERV",
  breadcrumbText: "IT-Tech & SaaS Digital Marketing",
  tagText: "IT-TECH / SAAS",
  headingWords: [
    { text: "Make" },
    { text: "Complex" },
    { text: "Technology" },
    { text: "Easier" },
    { text: "to" },
    { text: "Understand,", italic: true },
    { text: "Discover" },
    { text: "and" },
    { text: "Choose." },
  ],
  description1: "Great technology can be difficult to market when the value is buried behind technical language.",
  description2: "ADSSERV helps IT and SaaS businesses turn complex products into clearer digital experiences that audiences can discover, understand and evaluate.",
  button1Text: "Market My SaaS",
  button1Link: "/contact",
  button2Text: "Explore Our Services",
  button2Link: "/industries/it-tech-saas#it-tech-saas-services",
};

// ── THE CHALLENGE ─────────────────────────────────────────────
export const problemData = {
  tagText: "THE CHALLENGE",
  headingWords: [
    { text: "Good" },
    { text: "technology" },
    { text: "still" },
    { text: "needs" },
    { text: "a" },
    { text: "clear", italic: true },
    { text: "story." },
  ],
  paragraphs: [
    "Technology buyers want to understand:"
  ],
  items: [
    "What does it do?",
    "Why does it matter?",
    "Is it relevant to my problem?",
    "Why should I consider it?",
    "What should I do next?"
  ],
  bottomText1: "ADSSERV builds marketing around those questions.",
  bottomText2: "",
};

// ── WHAT WE CAN HELP WITH ─────────────────────────────────────────────────────
export const whatWeDoData = {
  referenceHeaderStyle: true,
  sectionId: "it-tech-saas-services",
  tagText: "WHAT WE CAN HELP WITH",
  headingWords: [
    { text: "Digital" },
    { text: "Marketing" },
    { text: "for" },
    { text: "IT" },
    { text: "&" },
    { text: "SaaS", italic: true },
    { text: "Brands" },
  ],
  description: "ADSSERV provides digital marketing solutions tailored to help IT and SaaS brands explain complex products and reach technology buyers.",
  buttonText: "Talk to ADSSERV",
  icons: [],
  services: [
    { title: "SEO", desc: "Build visibility around relevant technology searches and product questions.", img: seoImg },
    { title: "Content", desc: "Explain products, features, use cases and value in clearer language.", img: contentImg },
    { title: "Social Media", desc: "Turn technical ideas into useful, audience-friendly content.", img: socialImg },
    { title: "Performance Marketing", desc: "Reach relevant audiences with focused campaigns and product messaging.", img: performanceImg },
    { title: "Website Development", desc: "Create product experiences that make evaluation easier.", img: websiteImg },
    { title: "Branding", desc: "Build a consistent identity across the technology buying journey.", img: brandingImg },
  ],
};

// ── OUR APPROACH ──────────────────────────────────────────────────────────────
export const approachData = {
  tagText: "OUR APPROACH",
  headingWords: [
    { text: "Product" },
    { text: "clarity" },
    { text: "first." },
    { text: "Audience" },
    { text: "relevance", italic: true },
    { text: "throughout." },
  ],
  description: "",
  imageSrc: approachImg,
  imageAlt: "IT-Tech & SaaS Marketing Approach",
  steps: [
    { num: "01", title: "Understand", desc: "product, audience and market" },
    { num: "02", title: "Position", desc: "problem, value and differentiation" },
    { num: "03", title: "Explain", desc: "content, creative and product messaging" },
    { num: "04", title: "Reach", desc: "search, social and paid channels" },
    { num: "05", title: "Optimise", desc: "improve from audience and campaign signals" },
  ],
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
      q: "What does ADSSERV provide for IT and SaaS companies?",
      a: "ADSSERV provides SEO, content, social media marketing, performance marketing, website development and branding support for technology-focused businesses.",
    },
    {
      q: "Can ADSSERV market complex SaaS products?",
      a: "Yes. The approach focuses on making the product, problem, value and next step easier for the intended audience to understand.",
    },
    {
      q: "Can ADSSERV support B2B SaaS marketing?",
      a: "Yes. The strategy can be adapted around the product, buying audience, market and desired business action.",
    },
  ],
};

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
export const ctaData = {
  tagText: "MAKE YOUR TECHNOLOGY EASIER TO CHOOSE",
  headingText: "Your Product Is Technical. Your Marketing Doesn't Have to Be.",
  description: "",
  button1Text: "Market My SaaS",
  button1Link: "/contact",
  button2Text: "Contact ADSSERV",
  button2Link: "/contact",
};
