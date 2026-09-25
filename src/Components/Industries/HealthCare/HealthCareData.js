// Health Care Industry Page - Data Configuration
// Exact content as provided, no extra sections added

import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import websiteImg from '../../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import bgImage from '../../../assets/Industries_bg image/HEALTH CARE.webp';
import approachImg from '../../../assets/Our_Approch (2).webp';

// ── HERO ─────────────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  title: "Health Care Digital Marketing | ADSSERV",
  breadcrumbText: "Health Care Digital Marketing",
  tagText: "HEALTH CARE",
  headingWords: [
    { text: "Digital" },
    { text: "Marketing" },
    { text: "for" },
    { text: "Health", italic: true },
    { text: "Care", italic: true },
    { text: "That" },
    { text: "Starts" },
    { text: "With" },
    { text: "Trust." },
  ],
  description1: "Health care audiences often research before they act.",
  description2: "ADSSERV helps health care businesses build a clearer digital presence through relevant content, search visibility, social media, websites and performance-focused marketing.",
  button1Text: "Talk About Your Health Care Brand",
  button1Link: "/contact",
  button2Text: "Explore Our Services",
  button2Link: "/industries/health-care#health-care-services",
};

// ── WHY HEALTH CARE IS DIFFERENT ─────────────────────────────────────────────
export const problemData = {
  tagText: "WHY HEALTH CARE IS DIFFERENT",
  headingWords: [
    { text: "Clear" },
    { text: "communication" },
    { text: "matters" },
    { text: "when" },
    { text: "the" },
    { text: "decision", italic: true },
    { text: "matters." },
  ],
  paragraphs: [
    "Health care marketing needs more than attention.",
    "It needs clarity, relevance and trust.",
    "ADSSERV considers the audience, decision journey, communication needs and business objective before choosing the right digital channels.",
  ],
  items: [],
  bottomText1: "",
  bottomText2: "",
};

// ── WHAT WE CAN HELP WITH ─────────────────────────────────────────────────────
export const whatWeDoData = {
  referenceHeaderStyle: true,
  sectionId: "health-care-services",
  tagText: "WHAT WE CAN HELP WITH",
  headingWords: [
    { text: "The" },
    { text: "Right" },
    { text: "Digital" },
    { text: "Pieces" },
    { text: "for" },
    { text: "Your" },
    { text: "Health", italic: true },
    { text: "Care", italic: true },
    { text: "Business" },
  ],
  description: "ADSSERV helps health care businesses build a clearer digital presence through the right combination of channels and communication.",
  buttonText: "Talk to ADSSERV",
  icons: [],
  services: [
    { title: "SEO", desc: "Improve visibility for relevant health care searches.", img: seoImg },
    { title: "Social Media", desc: "Build useful, consistent audience communication.", img: socialImg },
    { title: "Website Development", desc: "Make services, information and next steps easier to understand.", img: websiteImg },
    { title: "Content Writing", desc: "Create clear website, service and educational content.", img: contentImg },
    { title: "Performance Marketing", desc: "Reach relevant audiences through measurable campaigns.", img: performanceImg },
    { title: "Branding", desc: "Create a more consistent and recognisable digital identity.", img: brandingImg },
  ],
};

// ── OUR APPROACH ──────────────────────────────────────────────────────────────
export const approachData = {
  tagText: "OUR APPROACH",
  headingWords: [
    { text: "Audience" },
    { text: "first." },
    { text: "Clear" },
    { text: "communication." },
    { text: "Connected" },
    { text: "execution.", italic: true },
  ],
  description: "",
  imageSrc: approachImg,
  imageAlt: "Health Care Marketing Approach",
  steps: [
    { num: "01", title: "Understand", desc: "Business, audience and objective." },
    { num: "02", title: "Plan", desc: "Channels, message and customer journey." },
    { num: "03", title: "Create", desc: "Content, creative and digital experiences." },
    { num: "04", title: "Optimise", desc: "Learn from performance and improve." },
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
      q: "What does ADSSERV provide for health care businesses?",
      a: "ADSSERV provides digital marketing support including SEO, social media, website development, content, performance marketing and branding.",
    },
    {
      q: "Can ADSSERV help improve health care visibility online?",
      a: "Yes. Depending on the business, ADSSERV can work across search, content, social media, websites and paid campaigns to improve digital visibility.",
    },
    {
      q: "Why does health care marketing need a different approach?",
      a: "Health care audiences may spend more time researching before taking action, so clarity, relevance and trust can be especially important.",
    },
  ],
};

// ── FINAL CTA ─────────────────────────────────────────────────────────────────
export const ctaData = {
  tagText: "BUILD A CLEARER DIGITAL PRESENCE",
  headingText: "Make Your Health Care Brand Easier to Find, Understand and Trust.",
  description: "Tell us what you are trying to achieve and where your digital presence needs improvement.",
  button1Text: "Talk About Your Health Care Brand",
  button1Link: "/contact",
  button2Text: "Talk to ADSSERV",
  button2Link: "/contact",
};
