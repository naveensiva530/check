import { PlayCircle, Share2, Palette, Monitor, Megaphone, Sparkles, TrendingUp, Target } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/Instragram Marketing.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgBrands from '../../assets/Servicess/WhoThisIsFor/Consumer Brands.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgLifestyle from '../../assets/Servicess/WhoThisIsFor/Lifestyle & Beauty Brands.webp';
import imgCampaign from '../../assets/Servicess/WhoThisIsFor/Campaign & Product Launches.webp';

import imgSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgVideo from '../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';
import imgPaid from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';

// WhatWeDo images for Influencer Marketing
import imgWwd1 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Influencer Strategy.webp';
import imgWwd2 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Creator Discovery.webp';
import imgWwd3 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Influencer Shortlisting.webp';
import imgWwd4 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Campaign Management.webp';
import imgWwd5 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Content Collaboration.webp';
import imgWwd6 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Product & Brand Collaborations.webp';
import imgWwd7 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/UGC Campaigns.webp';
import imgWwd8 from '../../assets/Servicess/InfluencerMarketing/WhatWeDo/Performance & Reporting.webp';

export const heroData = {
  bgImage,
  title: "Influencer Marketing",
  breadcrumbText: "Influencer Marketing",
  tagText: "INFLUENCER MARKETING",
  headingWords: [
    { text: "Creator" }, { text: "Campaigns" }, { text: "That" }, { text: "Feel" }, { text: "Like" },
    { text: "Content,", italic: true }, { text: "Not" }, { text: "Advertising" }
  ],
  description1: "The right creator can make a brand feel relevant before the audience even realises they're being introduced to it.",
  description2: "ADSSERV connects brands with creators who fit the audience, platform, message, and campaign objective — then builds the campaign around content people actually want to watch, share, save, and remember. Because influencer marketing works better when the creator feels like a natural fit, not a rented billboard.",
  button1Text: "Plan My Creator Campaign",
  button2Text: "View Our Services",
  button2Link: "/services/influencer-marketing#influencer-marketing-what-we-do"
};

export const problemData = {
  tagText: "THE CREATOR ISN'T THE STRATEGY",
  headingWords: [
    { text: "A" }, { text: "big" }, { text: "following" }, { text: "doesn't" },
    { text: "automatically" }, { text: "mean" }, { text: "the" }, { text: "right", italic: true },
    { text: "audience." }
  ],
  paragraphs: [
    "Follower count is easy to see. Audience relevance isn't.",
    "A creator can have a huge audience and still be completely wrong for your brand, product, location, category, or campaign objective.",
    "That's why we look beyond surface-level numbers.",
    "We consider who the creator speaks to, what their audience responds to, how they communicate, which platforms they actually understand, and whether their content style makes sense for the brand."
  ],
  items: [],
  bottomText1: "The goal is not simply to get a creator to post.",
  bottomText2: "The goal is to make the collaboration make sense."
};

export const approachData = {
  tagText: "THE INFLUENCER MARKETING PROCESS",
  headingWords: [
    { text: "Strategy" }, { text: "first." }, { text: "Creator" }, { text: "second." },
    { text: "Content", italic: true }, { text: "always." }
  ],
  description: "We don't start with a roster of creators. We start with the brand, the audience, and the campaign objective. Then we identify which creators make sense for what the campaign is trying to accomplish.",
  imageSrc: approachImg,
  imageAlt: "Influencer Marketing Approach",
  steps: [
    { num: '01', title: 'Understand', desc: 'We define the brand, audience, campaign objective, offer, message, market, platform, and constraints.' },
    { num: '02', title: 'Identify', desc: 'We research creators based on audience fit, content relevance, platform presence, engagement signals, location, niche, and campaign requirements.' },
    { num: '03', title: 'Shortlist', desc: 'Potential creators are evaluated against the campaign rather than selected purely by follower count.' },
    { num: '04', title: 'Brief', desc: 'We establish the campaign message, deliverables, creative direction, timelines, usage requirements, and important brand guidelines.' },
    { num: '05', title: 'Create', desc: 'Creators produce content in a way that feels native to their audience while staying aligned with the campaign objective.' },
    { num: '06', title: 'Launch & Monitor', desc: 'Content goes live across the agreed channels while performance and campaign activity are monitored.' },
    { num: '07', title: 'Learn', desc: 'We review the results, identify what worked, and use those insights to improve future creator campaigns.' }
  ]
};

export const whatWeDoData = {
  tagText: "INFLUENCER MARKETING SERVICES",
  headingWords: [
    { text: "Creator" }, { text: "collaborations" }, { text: "built" }, { text: "around" },
    { text: "what", italic: true }, { text: "the" }, { text: "campaign" }, { text: "needs." }
  ],
  description: "From strategy and creator sourcing to campaign execution and performance review, we manage creator campaigns that align with your brand and audience.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Influencer Strategy", desc: "Define the role creators should play within the wider marketing campaign.", img: imgWwd1 },
    { num: "02", title: "Creator Discovery", desc: "Find creators whose audience, content, platform, location, and niche align with the campaign.", img: imgWwd2 },
    { num: "03", title: "Influencer Shortlisting", desc: "Build a focused creator shortlist based on campaign requirements rather than vanity metrics alone.", img: imgWwd3 },
    { num: "04", title: "Campaign Management", desc: "Coordinate communication, deliverables, timelines, approvals, publishing, and campaign requirements.", img: imgWwd4 },
    { num: "05", title: "Content Collaboration", desc: "Develop creative direction that gives creators enough guidance to protect the brand without making the content feel scripted.", img: imgWwd5 },
    { num: "06", title: "Product & Brand Collaborations", desc: "Create creator partnerships around launches, products, services, campaigns, events, and brand awareness.", img: imgWwd6 },
    { num: "07", title: "UGC Campaigns", desc: "Develop creator-led user-generated content that brands can use across organic and paid marketing where appropriate.", img: imgWwd7 },
    { num: "08", title: "Performance & Reporting", desc: "Review available campaign data such as reach, views, engagement, clicks, traffic, content performance, and agreed campaign outcomes.", img: imgWwd8 }
  ]
};

// ... existing whatWeDoData is now replaced by InfluencerWhatWeDo.jsx so we can ignore it ...

export const creativeDirectionData = {
  tagText: "CREATIVE DIRECTION",
  headingWords: [
    { text: "Creators" }, { text: "know" }, { text: "their" }, { text: "audience." }, { text: "We" }, { text: "help" },
    { text: "connect", italic: true }, { text: "that" }, { text: "knowledge" }, { text: "to" }, { text: "the" }, { text: "brand." }
  ],
  paragraphs: [
    "The best creator content rarely sounds like a press release.",
    "Instead of giving creators a rigid script, we establish what must be communicated, what should be avoided, what the audience needs to understand, and what action the campaign is designed to encourage.",
    "The creator can then bring their own voice, format, personality, and storytelling style into the content.",
    "That balance protects the brand without stripping away the reason people followed the creator in the first place."
  ]
};

export const whatWeMeasureData = {
  tagText: "BEYOND FOLLOWER COUNT",
  headingWords: [
    { text: "Reach" }, { text: "is" }, { text: "useful." },
    { text: "Context", italic: true }, { text: "makes" }, { text: "it" }, { text: "useful." }
  ],
  paragraphs: [
    "Campaign measurement depends on the objective.",
    "Depending on the campaign and available platform data, we can evaluate signals such as: Reach, Impressions, Views, Engagement, Engagement rate, Saves, Shares, Comments, Link clicks, Website traffic, Content performance, Leads, Conversions, Campaign-specific outcomes."
  ],
  boldParagraph: "The important metric is the one connected to the reason the campaign exists."
};

export const whoThisIsForData = {
  tagText: "CREATOR MARKETING FOR",
  headingWords: [
    { text: "Brands" }, { text: "with" }, { text: "something" },
    { text: "worth", italic: true }, { text: "talking" }, { text: "about." }
  ],
  stages: [
    { title: 'Startups', desc: 'Build awareness and introduce a new product, service, or idea through relevant creator communities.', img: imgStartups },
    { title: 'Consumer Brands', desc: 'Put products into content environments where potential customers already spend their attention.', img: imgBrands },
    { title: 'SaaS & Technology', desc: 'Use creators and specialist voices to make products, features, or use cases easier to understand.', img: imgSaaS },
    { title: 'Local Businesses', desc: 'Work with relevant local creators when location, community, and audience proximity matter.', img: imgLocal },
    { title: 'Lifestyle & Beauty Brands', desc: 'Build creator-led content around products, routines, experiences, launches, and visual storytelling.', img: imgLifestyle },
    { title: 'Campaign & Product Launches', desc: 'Use creators as part of a wider launch strategy rather than treating influencer activity as a standalone post.', img: imgCampaign }
  ]
};

export const creatorSelectionData = {
  tagText: "CREATOR SELECTION",
  headingWords: [
    { text: "We'd" }, { text: "rather" }, { text: "find" }, { text: "the" },
    { text: "right", italic: true }, { text: "audience" }, { text: "than" }, { text: "the" }, { text: "biggest" }, { text: "number." }
  ]
};

export const contentValueData = {
  tagText: "CONTENT VALUE",
  headingWords: [
    { text: "One" }, { text: "collaboration" }, { text: "can" }, { text: "create" },
    { text: "more", italic: true }, { text: "than" }, { text: "one" }, { text: "post." }
  ],
  paragraphs: [
    "A creator campaign can produce content that continues working beyond the original publication.",
    "Depending on permissions and usage rights, creator content may support: Organic social content, Paid social advertising, Product pages, Landing pages, Website content, Launch campaigns, Retargeting creative, Brand storytelling."
  ],
  boldParagraph: "Usage rights should always be agreed before content is repurposed."
};

export const whyAdsservInfluencerData = {
  tagText: "WHY ADSSERV",
  headingWords: [
    { text: "We" }, { text: "understand" }, { text: "the" }, { text: "difference" }, { text: "between" }, { text: "creator" }, { text: "reach" }, { text: "and" }, { text: "creator" },
    { text: "relevance.", italic: true }
  ],
  paragraphs: [
    "ADSSERV approaches influencer marketing as part of a broader digital strategy.",
    "That means the creator campaign can connect with the brand's social content, paid media, website, landing pages, launch strategy, and wider content system."
  ],
  boldParagraph: "The creator brings the audience and voice. The strategy makes sure the collaboration has somewhere to go."
};

export const faqData = {
  tagText: "INFLUENCER MARKETING FAQ",
  headingWords: [
    { text: "Questions" }, { text: "brands" }, { text: "ask" }, { text: "before" }, { text: "working" }, { text: "with" }, { text: "creators." }
  ],
  faqs: [
    { q: "What is influencer marketing?", a: "Influencer marketing is a marketing approach where brands collaborate with creators who have an established audience and influence within a particular community or niche. Campaigns can support objectives such as awareness, engagement, traffic, content creation, leads, or sales." },
    { q: "How does influencer marketing work?", a: "A typical influencer campaign starts with an objective and audience, followed by creator research, selection, campaign briefing, content creation, publishing, and performance measurement. The exact process depends on the campaign, platform, creators, and commercial arrangement." },
    { q: "How do I choose the right influencer for my brand?", a: "The right influencer should have an audience, content style, platform presence, and communication style that fit the campaign. Follower count is only one factor; relevance, engagement, audience quality, location, content fit, and campaign objectives should also be considered." },
    { q: "Do you work with micro influencers?", a: "Yes, micro influencers can be valuable when a campaign needs a focused or highly relevant audience. The appropriate creator size depends on the campaign objective, target audience, platform, budget, and desired reach." },
    { q: "How much does influencer marketing cost?", a: "Influencer marketing costs vary according to creator size, platform, content format, number of deliverables, campaign duration, usage rights, production requirements, exclusivity, and creator commercial terms. A campaign scope is needed before an accurate budget can be determined." },
    { q: "Can influencer marketing generate sales?", a: "It can contribute to sales when the creator, offer, audience, content, landing experience, and conversion path are aligned. Results depend on many factors, so influencer marketing should not be presented as a guaranteed sales channel." },
    { q: "Can influencer content be used in paid ads?", a: "Creator content can sometimes be reused in paid advertising, but the brand needs appropriate usage rights and permissions. Paid usage, duration, platforms, whitelisting or creator-authorised advertising arrangements should be agreed before the content is used commercially." },
    { q: "What platforms can influencer campaigns run on?", a: "Campaigns can be developed for platforms such as Instagram, YouTube, TikTok, and other relevant creator ecosystems. The appropriate platform depends on where the target audience spends time and which content format suits the campaign." },
    { q: "Do influencers create the content themselves?", a: "Creators can produce content using their own style and audience knowledge while working within an agreed campaign brief. The strongest collaborations usually provide clear brand requirements without making the creator's content feel overly scripted." },
    { q: "How do you measure influencer marketing?", a: "Measurement depends on the campaign objective and available data. Common indicators include reach, impressions, views, engagement, clicks, website traffic, leads, conversions, content performance, and other agreed campaign outcomes." }
  ]
};

export const relatedServicesData = {
  tagText: "CREATOR CAMPAIGNS DON'T HAVE TO WORK ALONE",
  headingWords: [
    { text: "Connect" }, { text: "the" }, { text: "campaign" }, { text: "to" }, { text: "the" },
    { text: "rest" }, { text: "of" }, { text: "your", italic: true }, { text: "digital" }, { text: "strategy." }
  ],
  services: [
    { title: 'Social Media Marketing', desc: 'Turn creator content into part of a broader social presence.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: Share2, img: imgSocial },
    { title: 'Performance Marketing', desc: 'Extend suitable creator content into paid campaigns where usage rights allow.', cta: 'Explore Performance Marketing', href: '/services/performance-marketing', icon: Megaphone, img: imgPaid },
    { title: 'Video Production', desc: 'Create polished brand-led video when the campaign needs production beyond creator content.', cta: 'Explore Video Production', href: '/services/video-production', icon: PlayCircle, img: imgVideo },
    { title: 'Branding Solutions', desc: 'Keep creator collaborations aligned with the brand\'s visual and verbal identity.', cta: 'Explore Branding Solutions', href: '/services/branding-solutions', icon: Palette, img: imgBrand },
    { title: 'Website Development', desc: 'Give creator traffic a clear destination built around the campaign objective.', cta: 'Explore Website Development', href: '/services/website-development', icon: Monitor, img: imgWeb }
  ]
};

export const ctaData = {
  tagText: "HAVE A CAMPAIGN IN MIND?",
  headingText: "Let's find the creators your audience actually wants to hear from.",
  description: "Tell us about the brand, audience, campaign, and goal. We'll help shape the creator strategy around what you actually want the campaign to achieve.",
  button1Text: "Plan My Creator Campaign",
  button2Text: "Talk to ADSSERV"
};
