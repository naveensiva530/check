// Beauty & Salon Industry Page - Data Configuration
// Exact content as provided

import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import bgImage from '../../../assets/Industries_bg image/BEAUTY & SALON.webp';
import approachImg from '../../../assets/Our_Approch (2).webp';

// ── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  title: "Beauty & Salon Digital Marketing | ADSSERV",
  breadcrumbText: "Beauty & Salon Digital Marketing",
  tagText: "BEAUTY & SALON",
  headingWords: [
    { text: "Make" },
    { text: "Your" },
    { text: "Beauty" },
    { text: "Brand" },
    { text: "Impossible", italic: true },
    { text: "to" },
    { text: "Scroll" },
    { text: "Past." },
  ],
  description1: "Beauty is visual, personal and highly discoverable online.",
  description2: "ADSSERV helps beauty and salon businesses turn their services, style and personality into digital experiences people notice and remember.",
  button1Text: "Grow My Beauty Brand",
  button1Link: "/contact",
  button2Text: "Explore Our Services",
  button2Link: "/industries/beauty-salon#beauty-salon-services",
};

// ── THE CHALLENGE ─────────────────────────────────────────────
export const problemData = {
  tagText: "THE CHALLENGE",
  headingWords: [
    { text: "Great" },
    { text: "service" },
    { text: "needs" },
    { text: "a" },
    { text: "digital" },
    { text: "presence" },
    { text: "people", italic: true },
    { text: "can" },
    { text: "find." },
  ],
  paragraphs: [
    "Beauty and salon audiences often discover businesses through visual content, search and social platforms.",
    "ADSSERV focuses on:"
  ],
  items: [
    "Visibility – Help relevant audiences discover the brand.",
    "Presentation – Show services and brand personality clearly.",
    "Engagement – Create reasons for people to interact and return.",
    "Action – Make the next step simple."
  ],
  bottomText1: "",
  bottomText2: "",
};

// ── WHAT WE CAN HELP WITH ─────────────────────────────────────────────────────
export const whatWeDoData = {
  referenceHeaderStyle: true,
  sectionId: "beauty-salon-services",
  tagText: "WHAT WE CAN HELP WITH",
  headingWords: [
    { text: "Digital" },
    { text: "Marketing" },
    { text: "for" },
    { text: "Beauty" },
    { text: "&" },
    { text: "Salon", italic: true },
    { text: "Businesses" },
  ],
  description: "ADSSERV provides digital marketing solutions to build visibility, showcase services, and engage your audiences effectively.",
  buttonText: "Talk to ADSSERV",
  icons: [],
  services: [
    { title: "Social Media Marketing", desc: "Build consistent, visual communication around the brand and its services.", img: socialImg },
    { title: "Instagram Marketing", desc: "Use Reels, Stories and visual content to showcase the business.", img: socialImg },
    { title: "SEO", desc: "Improve relevant search visibility and discoverability.", img: seoImg },
    { title: "Performance Marketing", desc: "Reach relevant audiences through focused campaigns.", img: performanceImg },
    { title: "Content Writing", desc: "Create service, website and social content that communicates clearly.", img: contentImg },
    { title: "Branding", desc: "Create a recognisable and consistent digital identity.", img: brandingImg },
  ],
};

// ── OUR APPROACH ──────────────────────────────────────────────────────────────
export const approachData = {
  tagText: "OUR APPROACH",
  headingWords: [
    { text: "Visual" },
    { text: "content." },
    { text: "Audience" },
    { text: "attention." },
    { text: "Consistent" },
    { text: "presence.", italic: true },
  ],
  description: "",
  imageSrc: approachImg,
  imageAlt: "Beauty & Salon Marketing Approach",
  steps: [
    { num: "01", title: "Understand", desc: "brand, services and audience" },
    { num: "02", title: "Create", desc: "content and creative direction" },
    { num: "03", title: "Reach", desc: "search, social and campaigns" },
    { num: "04", title: "Engage", desc: "audience interaction and community" },
    { num: "05", title: "Improve", desc: "refine based on performance" },
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
      q: "What does ADSSERV provide for beauty and salon businesses?",
      a: "ADSSERV provides social media marketing, Instagram marketing, SEO, performance marketing, content writing, website development and branding support.",
    },
    {
      q: "Can ADSSERV help salons grow their online visibility?",
      a: "Yes. ADSSERV can combine search, social media, content and relevant digital campaigns around the business objective.",
    },
    {
      q: "Can ADSSERV create Instagram content for beauty brands?",
      a: "Yes. Instagram strategy can include visual content, Reels, Stories, creative direction and audience-focused communication.",
    },
  ],
};

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
export const ctaData = {
  tagText: "BUILD A BRAND PEOPLE WANT TO FOLLOW",
  headingText: "Turn Your Beauty Business Into a Digital Brand People Remember.",
  description: "",
  button1Text: "Grow My Beauty Brand",
  button1Link: "/contact",
  button2Text: "Contact ADSSERV",
  button2Link: "/contact",
};
