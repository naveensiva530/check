// Real Estate Industry Page - Data Configuration
// Exact content as provided, no extra sections added

import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import websiteImg from '../../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import bgImage from '../../../assets/Industries_bg image/REAL ESTATE.webp';
import approachImg from '../../../assets/Our_Approch (2).webp';

// ── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  title: "Real Estate Digital Marketing | ADSSERV",
  breadcrumbText: "Real Estate Digital Marketing",
  tagText: "REAL ESTATE",
  headingWords: [
    { text: "Marketing" },
    { text: "That" },
    { text: "Gives" },
    { text: "Your" },
    { text: "Property", italic: true },
    { text: "More" },
    { text: "Than" },
    { text: "Just" },
    { text: "Visibility." },
  ],
  description1: "Properties are discovered, compared and considered online.",
  description2: "ADSSERV helps real estate businesses turn properties, projects, locations and opportunities into digital experiences that attract attention and support enquiries.",
  button1Text: "Market My Property",
  button1Link: "/contact",
  button2Text: "Explore Our Services",
  button2Link: "/industries/real-estate#real-estate-services",
};

// ── THE REAL ESTATE CHALLENGE ─────────────────────────────────────────────
export const problemData = {
  tagText: "THE REAL ESTATE CHALLENGE",
  headingWords: [
    { text: "A" },
    { text: "property" },
    { text: "can" },
    { text: "be" },
    { text: "valuable" },
    { text: "and" },
    { text: "still" },
    { text: "get" },
    { text: "overlooked.", italic: true },
  ],
  paragraphs: [
    "Real estate marketing needs to communicate the property, location, opportunity and reason to enquire clearly.",
    "Your digital presence should help people:"
  ],
  items: [
    "Discover the property or project",
    "Understand the offering",
    "Explore the details",
    "Remember the brand",
    "Enquire when they are ready"
  ],
  bottomText1: "",
  bottomText2: "",
};

// ── WHAT WE CAN HELP WITH ─────────────────────────────────────────────────────
export const whatWeDoData = {
  referenceHeaderStyle: true,
  sectionId: "real-estate-services",
  tagText: "WHAT WE CAN HELP WITH",
  headingWords: [
    { text: "Digital" },
    { text: "Marketing" },
    { text: "for" },
    { text: "Property-Focused", italic: true },
    { text: "Businesses" },
  ],
  description: "We help real estate businesses market properties, projects and opportunities through SEO, social media, content, websites and performance marketing.",
  buttonText: "Talk to ADSSERV",
  icons: [],
  services: [
    { title: "SEO", desc: "Help relevant property and location searches discover your business.", img: seoImg },
    { title: "Social Media Marketing", desc: "Showcase properties, projects and updates through platform-native content.", img: socialImg },
    { title: "Performance Marketing", desc: "Reach relevant audiences and guide them toward enquiries.", img: performanceImg },
    { title: "Website Development", desc: "Present properties, projects, locations and calls to action clearly.", img: websiteImg },
    { title: "Content Writing", desc: "Create property, project, service and location-focused content.", img: contentImg },
    { title: "Branding", desc: "Build a consistent identity across property marketing touchpoints.", img: brandingImg },
  ],
};

// ── OUR APPROACH ──────────────────────────────────────────────────────────────
export const approachData = {
  tagText: "OUR APPROACH",
  headingWords: [
    { text: "Property" },
    { text: "first." },
    { text: "Audience" },
    { text: "next." },
    { text: "Action", italic: true },
    { text: "always." },
  ],
  description: "",
  imageSrc: approachImg,
  imageAlt: "Real Estate Marketing Approach",
  steps: [
    { num: "01", title: "Understand", desc: "property, project, location and audience" },
    { num: "02", title: "Position", desc: "clarify what makes the opportunity relevant" },
    { num: "03", title: "Create", desc: "content, creative and digital experiences" },
    { num: "04", title: "Promote", desc: "use relevant organic and paid channels" },
    { num: "05", title: "Optimise", desc: "improve based on actual response" },
  ],
};

// ── THE DIGITAL PROPERTY JOURNEY ──────────────────────────────────────────────
export const journeyData = {
  tagText: "THE DIGITAL PROPERTY JOURNEY",
  headingWords: [
    { text: "From" },
    { text: "discovery" },
    { text: "to" },
    { text: "enquiry." },
  ],
  bottomText: "ADSSERV connects the digital touchpoints around that journey instead of treating each channel separately.",
  stages: [
    { title: "Search / Social" },
    { title: "Property Discovery" },
    { title: "Project & Location Understanding" },
    { title: "Consideration" },
    { title: "Enquiry" }
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
      q: "What does ADSSERV provide for real estate businesses?",
      a: "ADSSERV provides SEO, social media marketing, performance marketing, website development, content writing and branding support for real estate businesses.",
    },
    {
      q: "Can ADSSERV market properties and projects online?",
      a: "Yes. The digital strategy can be built around the property, project, location, audience and desired enquiry journey.",
    },
    {
      q: "Can ADSSERV help generate real estate enquiries?",
      a: "Digital marketing can support enquiry generation through relevant search visibility, social content, paid campaigns, websites and conversion-focused experiences. Actual results depend on the market, offer, audience, implementation and other factors.",
    },
  ],
};

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
export const ctaData = {
  tagText: "TURN PROPERTY ATTENTION INTO ACTION",
  headingText: "Give Your Property, Project or Real Estate Brand a Digital Presence Worth Exploring.",
  description: "",
  button1Text: "Market My Property",
  button1Link: "/contact",
  button2Text: "Contact ADSSERV",
  button2Link: "/contact",
};
