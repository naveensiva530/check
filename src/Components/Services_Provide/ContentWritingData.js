import { FileText, Search, BookOpen, Target, Users, Palette, Share2, Megaphone, Monitor } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/CONTENT WRITING.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Content Writing - What We Do Images from assets/Servicess/ContentWriting/WhatWeDo
import imgWebsiteContent from '../../assets/Servicess/ContentWriting/WhatWeDo/Website Content.webp';
import imgSEOContent from '../../assets/Servicess/ContentWriting/WhatWeDo/SEO Content.webp';
import imgBlogWriting from '../../assets/Servicess/ContentWriting/WhatWeDo/Blog Writing.webp';
import imgLandingPageCopy from '../../assets/Servicess/ContentWriting/WhatWeDo/Landing Page Copy.webp';
import imgServiceProductContent from '../../assets/Servicess/ContentWriting/WhatWeDo/Service & Product Content.webp';
import imgSocialMediaContent from '../../assets/Servicess/ContentWriting/WhatWeDo/Social Media Content.webp';
import imgAdCopy from '../../assets/Servicess/ContentWriting/WhatWeDo/Ad Copy.webp';
import imgBrandMessaging from '../../assets/Servicess/ContentWriting/WhatWeDo/Brand Messaging.webp';

// Related Services Images from assets/Servicess/RelatedServices
import imgRelSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import imgRelSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgRelPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgRelWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgRelBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';

// Audience / Who It's For Images from assets/Servicess/WhoThisIsFor
import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';

export {
  imgWebsiteContent,
  imgSEOContent,
  imgBlogWriting,
  imgLandingPageCopy,
  imgServiceProductContent,
  imgSocialMediaContent,
  imgAdCopy,
  imgBrandMessaging,
  imgStartups,
  imgSaaS,
  imgLocal,
  imgGrowing
};

export const heroData = {
  bgImage,
  title: "Content Writing",
  breadcrumbText: "Content Writing",
  tagText: "CONTENT WRITING",
  headingWords: [
    { text: "Content" }, { text: "That" }, { text: "Gives" }, { text: "Your" }, { text: "Brand" },
    { text: "Something", italic: true }, { text: "Worth" }, { text: "Saying." }
  ],
  description1: "Good content does more than fill a webpage or keep a social feed active. It helps people discover your brand, understand what you offer, trust your expertise and know what to do next.",
  description2: "ADSSERV creates clear, purposeful content built around your audience, brand voice, search intent and business goals.",
  button1Text: "Talk About Your Content",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "THE REAL CONTENT PROBLEM",
  headingWords: [
    { text: "More" }, { text: "words" }, { text: "aren't" }, { text: "always" },
    { text: "better", italic: true }, { text: "content." }
  ],
  paragraphs: ["A website can have dozens of pages and still leave visitors confused. A blog can publish every week and still attract the wrong audience. A social account can post every day and still give people no reason to remember the brand."],
  items: [
    "A website can have dozens of pages and still leave visitors confused.",
    "A blog can publish every week and still attract the wrong audience.",
    "A social account can post every day and still give people no reason to remember the brand."
  ],
  bottomText1: "The problem is rarely a shortage of words. It is usually a lack of direction.",
  bottomText2: "We create content around a clear purpose so every page, article, caption or campaign message has a reason to exist."
};

export const approachData = {
  tagText: "CONTENT PROCESS",
  headingWords: [
    { text: "We" }, { text: "don't" }, { text: "start" }, { text: "with" }, { text: "a" },
    { text: "blank", italic: true }, { text: "document." }, { text: "We" }, { text: "start" }, { text: "with" }, { text: "a" }, { text: "reason." }
  ],
  imageSrc: approachImg,
  steps: [
    { num: '01', title: 'Understand', desc: 'We learn about your business, audience, offer, competitors, brand and the job the content needs to perform.' },
    { num: '02', title: 'Research', desc: 'We research relevant topics, audience questions, search intent, competitors and information that can make the content genuinely useful.' },
    { num: '03', title: 'Plan', desc: 'We establish the structure, angle, messaging and content priorities before the writing begins.' },
    { num: '04', title: 'Write', desc: 'We turn the strategy into clear, natural copy that sounds like a real brand rather than a keyword generator.' },
    { num: '05', title: 'Refine', desc: 'We review the content for clarity, accuracy, flow, brand consistency, search relevance and conversion intent.' },
    { num: '06', title: 'Publish & Improve', desc: 'Once the content is live, performance and audience response can help identify what should be improved, expanded or created next.' }
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
    { num: "01", title: "Website Content", desc: "Clear, persuasive website copy for Home, About, Services, industry pages, landing pages and other important customer touchpoints.", img: imgWebsiteContent },
    { num: "02", title: "SEO Content", desc: "Search-focused content built around relevant topics, search intent, useful information and logical content structure.", img: imgSEOContent },
    { num: "03", title: "Blog Writing", desc: "Useful articles that answer audience questions, demonstrate expertise and create opportunities for long-term organic visibility.", img: imgBlogWriting },
    { num: "04", title: "Landing Page Copy", desc: "Focused messaging that connects the audience's problem with your offer and gives them a clear reason to take action.", img: imgLandingPageCopy },
    { num: "05", title: "Service & Product Content", desc: "Straightforward explanations that help potential customers understand what you provide, who it is for and why it matters.", img: imgServiceProductContent },
    { num: "06", title: "Social Media Content", desc: "Platform-aware captions and written content designed for fast-moving social environments and audience interaction.", img: imgSocialMediaContent },
    { num: "07", title: "Ad Copy", desc: "Concise, benefit-focused messaging designed to communicate an offer quickly and support paid campaign objectives.", img: imgAdCopy },
    { num: "08", title: "Brand Messaging", desc: "Consistent words, positioning and messaging that help your brand sound recognisable across different channels.", img: imgBrandMessaging }
  ]
};

export const introData = {
  tagText: "CONTENT WITH A PURPOSE",
  headingWords: [
    { text: "Your" }, { text: "content" }, { text: "should" }, { text: "have" },
    { text: "a" }, { text: "job", italic: true }, { text: "to" }, { text: "do." }
  ],
  paragraphs: [
    "Not every piece of content needs to sell something. Some content needs to answer a question. Some needs to build trust. Some needs to explain a complicated product. Some needs to get discovered through search. And some simply needs to make people stop scrolling.",
    "We start with the reason behind the content, then build the message around the audience, platform and objective. The result is content that feels natural to read while still supporting the bigger digital strategy."
  ],
  bottomText: "See What We Write"
};

export const objectivesData = {
  tagText: "CONTENT OBJECTIVES",
  headingWords: [
    { text: "What" }, { text: "should" }, { text: "your" }, { text: "content" },
    { text: "actually", italic: true }, { text: "achieve?" }
  ],
  description: "Content should have a clear purpose. Here's what we focus on:",
  cards: [
    { title: "Get Found", desc: "Create useful, search-focused content around topics and questions that matter to your audience." },
    { title: "Get Understood", desc: "Explain your product, service or idea clearly without hiding the important information behind unnecessary jargon." },
    { title: "Build Trust", desc: "Answer real questions, address concerns and demonstrate knowledge before asking someone to make a decision." },
    { title: "Drive Action", desc: "Guide the reader naturally toward an enquiry, consultation, signup, purchase or another relevant next step." }
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
    { num: "01", title: 'Audience First', desc: 'We write for real people with real questions, needs and reasons to choose.' },
    { num: "02", title: 'Purpose Led', desc: 'Every content piece starts with a clear reason for existing.' },
    { num: "03", title: 'Search Aware', desc: 'Where search matters, content is structured around relevance and intent rather than keyword stuffing.' },
    { num: "04", title: 'Brand Consistent', desc: 'The writing should sound like your brand, not like a generic agency.' }
  ]
};

export const seoContentData = {
  tagText: "SEARCH CONTENT",
  headingWords: [
    { text: "Search-friendly" }, { text: "without" }, { text: "sounding" },
    { text: "search-engine-written.", italic: true }
  ],
  paragraphs: [
    "SEO content should help the person searching before it tries to impress an algorithm.",
    "We build content around relevant topics, search intent, useful information, clear structure and natural language. Where appropriate, content can also be structured around the questions people ask search engines and AI-powered answer systems."
  ],
  bottomText: "The goal isn't to repeat a keyword until the writing becomes awkward. The goal is to create something useful enough to deserve attention.",
  buttonText: "Plan My SEO Content"
};

export const conversionData = {
  tagText: "CONVERSION COPY",
  headingWords: [
    { text: "The" }, { text: "right" }, { text: "words" }, { text: "can" },
    { text: "remove", italic: true }, { text: "friction." }
  ],
  paragraphs: [
    "People rarely need more information just for the sake of having more information. They need the right information at the right moment.",
    "Strong conversion content makes the offer easier to understand, answers important objections, communicates value and gives visitors a clear next step."
  ],
  highlightText: "I'm interested.",
  highlightText2: "I'm ready to take the next step.",
  buttonText: "Improve My Website Copy"
};

export const audienceData = {
  tagText: "WRITTEN FOR THE PEOPLE YOU WANT TO REACH",
  headingWords: [
    { text: "Different" }, { text: "audiences" }, { text: "need" }, { text: "different" },
    { text: "reasons", italic: true }, { text: "to" }, { text: "care." }
  ],
  paragraphs: [
    "A startup founder, a SaaS buyer, a local customer and a social media follower do not read content with the same expectations.",
    "We adapt the message to the audience, platform, buying stage and business objective while keeping the underlying brand voice consistent."
  ],
  cards: [
    { title: "Startups", desc: "Clear positioning and content that explains a new product or service without making it unnecessarily complicated.", img: imgStartups },
    { title: "SaaS & Technology", desc: "Content that turns technical features, workflows and capabilities into understandable business value.", img: imgSaaS },
    { title: "Local Businesses", desc: "Useful, relevant content that helps potential customers discover your business and understand why they should choose you.", img: imgLocal },
    { title: "Growing Brands", desc: "A consistent content approach across websites, search, social media and campaigns as the brand expands.", img: imgGrowing }
  ]
};

export const contentMarketingData = {
  tagText: "THE BIGGER PICTURE",
  headingWords: [
    { text: "Content" }, { text: "works" }, { text: "better" }, { text: "when" },
    { text: "it" }, { text: "isn't", italic: true }, { text: "working" }, { text: "alone." }
  ],
  paragraphs: [
    "A blog should connect with your SEO strategy. Website copy should support conversion. Social content should reinforce your brand. Ad copy should match the landing page. Educational content should answer the questions your audience is already asking.",
    "That's why we look at content as part of the wider digital journey rather than an isolated writing task."
  ],
  journeySteps: ["Search", "Discover", "Understand", "Trust", "Act"]
};

export const qualityData = {
  tagText: "OUR STANDARD",
  headingWords: [
    { text: "Clear" }, { text: "beats", italic: true }, { text: "complicated." }
  ],
  paragraphs: [
    "We keep the writing direct, useful and human.",
    "That means cutting unnecessary jargon, avoiding empty claims and making complicated ideas easier to understand. When a subject needs depth, we give it depth. When something can be said in one sentence, we don't use five.",
    "Every piece should earn its place."
  ]
};

export const contentFitData = {
  tagText: "ONE VOICE. DIFFERENT PLATFORMS.",
  headingWords: [
    { text: "One" }, { text: "voice." }, { text: "Different", italic: true }, { text: "platforms." }
  ],
  paragraphs: [
    "Your brand should still feel like your brand whether someone finds you through Google, reads your website, sees an Instagram post or lands on a campaign page.",
    "We adapt the writing to the platform without losing the core message."
  ],
  platforms: [
    { name: "Website", desc: "Explain clearly. Build confidence. Drive action." },
    { name: "Search", desc: "Answer relevant questions with useful, structured information." },
    { name: "Social", desc: "Capture attention quickly and give people a reason to engage." },
    { name: "Advertising", desc: "Communicate the offer quickly and clearly." },
    { name: "Email", desc: "Move the relationship forward with relevant, purposeful messaging." }
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
    { title: 'SEO Services', desc: 'Build visibility around the searches that matter.', cta: 'Explore SEO Services', href: '/services/seo-services', icon: Search, img: imgRelSEO },
    { title: 'Social Media Marketing', desc: 'Turn ideas into platform-ready social content and campaigns.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: Share2, img: imgRelSocial },
    { title: 'Performance Marketing', desc: 'Connect messaging with paid acquisition.', cta: 'Explore Performance Marketing', href: '/services/performance-marketing', icon: Megaphone, img: imgRelPerf },
    { title: 'Website Development', desc: 'Give your content a website experience built to support it.', cta: 'Explore Website Development', href: '/services/website-development', icon: Monitor, img: imgRelWeb },
    { title: 'Branding Solutions', desc: 'Create a stronger and more consistent brand identity.', cta: 'Explore Branding Solutions', href: '/services/branding-solutions', icon: Palette, img: imgRelBrand }
  ]
};

export const ctaData = {
  tagText: "READY TO START?",
  headingText: "Have something worth saying?",
  description: "Let's turn it into content people can find, understand and remember. Tell us what you're trying to communicate, who you're trying to reach and what you want them to do next.",
  button1Text: "Talk About Your Content",
  button2Text: "Contact ADSSERV"
};
