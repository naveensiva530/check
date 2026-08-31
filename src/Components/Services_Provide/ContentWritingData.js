import { FileText, Search, BookOpen, Target, Users, Palette, Share2, Megaphone, Monitor } from 'lucide-react';
import bgImage from '../../assets/Services/Content Writing.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgVideo from '../../assets/SocailMedia/Educate.webp';
import imgContent from '../../assets/SocailMedia/Entertain.webp';
import imgPaid from '../../assets/SocailMedia/Convert.webp';
import imgCampaign from '../../assets/SocailMedia/Build Trust.webp';
import approachImg from '../../assets/SocailMedia/Build Trust.webp';
import imgSEO from '../../assets/SocailMedia/Educate.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "Content Writing",
  tagText: "CONTENT WRITING",
  headingWords: [
    { text: "Content" }, { text: "That" }, { text: "Gives" }, { text: "Your" }, { text: "Brand" },
    { text: "Something", italic: true }, { text: "Worth" }, { text: "Saying." }
  ],
  description1: "Good content does more than fill a webpage or keep a social feed active. It helps people discover your brand, understand what you offer, trust your expertise and know what to do next.",
  description2: "ADSSERV creates clear, purposeful content built around your audience, brand voice, search intent and business goals.",
  button1Text: "Talk About Your Content",
  button2Text: "Explore Our Services"
};

export const problemData = {
  tagText: "THE REAL CONTENT PROBLEM",
  headingWords: [
    { text: "More" }, { text: "words" }, { text: "don't" }, { text: "always" },
    { text: "mean", italic: true }, { text: "more" }, { text: "impact." }
  ],
  paragraphs: ["Many businesses produce content because they feel they have to, not because they have something useful to say."],
  items: [
    "A website can have dozens of pages and still leave visitors confused.",
    "A blog can publish every week and still attract the wrong audience.",
    "A social account can post every day and still give people no reason to remember the brand."
  ],
  bottomText1: "The result is noise.",
  bottomText2: "That is what we solve."
};

export const approachData = {
  tagText: "HOW WE WORK",
  headingWords: [
    { text: "We" }, { text: "don't" }, { text: "start" }, { text: "with" }, { text: "a" },
    { text: "blank", italic: true }, { text: "document." }, { text: "We" }, { text: "start" }, { text: "with" }, { text: "a" }, { text: "reason." }
  ],
  imageSrc: approachImg,
  steps: [
    { num: '01', title: 'Audience & Intent', desc: 'Who are we writing for and what do they actually need to know?' },
    { num: '02', title: 'Brand Voice', desc: 'How should the brand sound when it communicates this message?' },
    { num: '03', title: 'Structure', desc: 'How do we organise the information so it is easy to read and navigate?' },
    { num: '04', title: 'Drafting', desc: 'Writing the actual content with a focus on clarity, relevance and engagement.' },
    { num: '05', title: 'Refinement', desc: 'Editing for flow, search visibility, conversion principles and brand consistency.' }
  ]
};

export const whatWeWriteData = {
  tagText: "CONTENT SERVICES",
  headingWords: [
    { text: "Writing" }, { text: "for" }, { text: "the" }, { text: "places" },
    { text: "your", italic: true }, { text: "audience" }, { text: "actually" }, { text: "looks." }
  ],
  description: "Different formats require different approaches — from persuasive website copy to search-focused articles and engaging social posts.",
  buttonText: "Plan My Content",
  icons: [FileText, Search, BookOpen],
  services: [
    { num: "01", title: "Website Content", desc: "Clear, persuasive website copy for Home, About, Services, industry pages, landing pages and other important customer touchpoints.", img: bgImage },
    { num: "02", title: "SEO Content", desc: "Search-focused content built around relevant topics, search intent, useful information and logical content structure.", img: imgSEO },
    { num: "03", title: "Blog Writing", desc: "Useful articles that answer audience questions, demonstrate expertise and create opportunities for long-term organic visibility.", img: imgSocial },
    { num: "04", title: "Landing Page Copy", desc: "Focused messaging that connects the audience's problem with your offer and gives them a clear reason to take action.", img: imgPaid },
    { num: "05", title: "Service & Product Content", desc: "Straightforward explanations that help potential customers understand what you provide, who it is for and why it matters.", img: imgWeb },
    { num: "06", title: "Social Media Content", desc: "Platform-aware captions and written content designed for fast-moving social environments and audience interaction.", img: imgContent },
    { num: "07", title: "Ad Copy", desc: "Concise, benefit-focused messaging designed to communicate an offer quickly and support paid campaign objectives.", img: imgCampaign },
    { num: "08", title: "Brand Messaging", desc: "Consistent words, positioning and messaging that help your brand sound recognisable across different channels.", img: imgBrand }
  ]
};

export const whyAdsservContentData = {
  tagText: "WHY ADSSERV",
  headingWords: [
    { text: "Good" }, { text: "writing" }, { text: "respects" }, { text: "the" },
    { text: "reader's", italic: true }, { text: "time." }
  ],
  description1: "We believe content should be clear before it tries to be clever, and useful before it tries to sell.",
  description2: "Every piece of content we create is designed to serve a specific purpose for both the audience reading it and the business publishing it.",
  points: [
    { num: "01", title: 'Audience First', desc: 'We write for real people with real questions, needs and reasons to choose.', icon: Users },
    { num: "02", title: 'Purpose Led', desc: 'Every content piece starts with a clear reason for existing.', icon: Target },
    { num: "03", title: 'Search Aware', desc: 'Where search matters, content is structured around relevance and intent rather than keyword stuffing.', icon: Search },
    { num: "04", title: 'Brand Consistent', desc: 'The writing should sound like your brand, not like a generic agency.', icon: Palette }
  ]
};

export const faqData = {
  tagText: "FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "about" },
    { text: "content", italic: true }, { text: "writing" }
  ],
  faqs: [
    { q: "What is content writing?", a: "Content writing is the creation of written material for websites, blogs, landing pages, social media, advertisements and other digital channels. Effective content is created around a specific audience, purpose and desired outcome." },
    { q: "What does a content writing service include?", a: "Depending on the project, content writing can include website copy, SEO content, blogs, landing pages, service pages, product content, social media copy, advertising copy and brand messaging." },
    { q: "Can content writing help SEO?", a: "Yes. Useful, well-structured content can support SEO by addressing relevant topics, search intent and audience questions while strengthening a website's topical coverage. Content is one part of a broader SEO strategy." },
    { q: "Can you write website content?", a: "Yes. We can create or refine content for pages such as Home, About, Services, industry pages, landing pages and other important website sections." },
    { q: "Can you write content for SaaS and technology companies?", a: "Yes. Technical products can be translated into clearer language that communicates both functionality and business value without unnecessarily removing important technical detail." },
    { q: "Can content writing improve conversions?", a: "It can. Clear messaging can reduce confusion, answer objections and guide visitors toward an appropriate next action. Conversion performance also depends on the offer, audience, website experience and other factors." },
    { q: "Do you provide blog writing?", a: "Yes. Blog content can be planned around audience questions, relevant search opportunities, business expertise and the role each article plays within the wider content strategy." },
    { q: "How do you make content sound like our brand?", a: "We first understand your positioning, audience, personality, communication style and goals. Those inputs guide the vocabulary, structure, messaging and tone used throughout the content." },
    { q: "Can you update existing website content?", a: "Yes. Existing content can be reviewed for clarity, relevance, search intent, messaging, structure and conversion opportunities before being rewritten or improved." }
  ]
};

export const relatedServicesData = {
  tagText: "CONTENT WORKS BEST AS PART OF THE SYSTEM",
  headingWords: [
    { text: 'Content' }, { text: 'needs' }, { text: 'design,' }, { text: 'distribution' },
    { text: 'and', italic: true }, { text: 'visibility' }, { text: 'to' }, { text: 'perform.' }
  ],
  services: [
    { title: 'SEO Services', desc: 'Build visibility around the searches that matter.', cta: 'Explore SEO Services', href: '/services/seo-services', icon: Search, img: imgSEO },
    { title: 'Social Media Marketing', desc: 'Turn ideas into platform-ready social content and campaigns.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: Share2, img: imgSocial },
    { title: 'Performance Marketing', desc: 'Connect messaging with paid acquisition.', cta: 'Explore Performance Marketing', href: '/services/performance-marketing', icon: Megaphone, img: imgPaid },
    { title: 'Website Development', desc: 'Give your content a website experience built to support it.', cta: 'Explore Website Development', href: '/services/website-development', icon: Monitor, img: imgWeb },
    { title: 'Branding Solutions', desc: 'Create a stronger and more consistent brand identity.', cta: 'Explore Branding Solutions', href: '/services/branding-solutions', icon: Palette, img: imgBrand }
  ]
};

export const ctaData = {
  tagText: "READY TO START?",
  headingText: "Have something worth saying?",
  description: "Let's turn it into content people can find, understand and remember. Tell us what you're trying to communicate, who you're trying to reach and what you want them to do next.",
  button1Text: "Talk About Your Content",
  button2Text: "Contact ADSSERV"
};
