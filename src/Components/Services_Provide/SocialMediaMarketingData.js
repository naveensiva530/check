import { Monitor, PenTool, Search, Megaphone, Camera, Sparkles, TrendingUp, Target } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/SocialMedia.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

import imgWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import imgPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgVideo from '../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';
import imgInfluencer from '../../assets/Servicess/RelatedServices/Influncer_Marketing-removebg-preview.webp';

import imgWwd1 from '../../assets/SocialMedia/WhatWeDo/Social Media Strategy.webp';
import imgWwd2 from '../../assets/SocialMedia/WhatWeDo/Content Strategy.webp';
import imgWwd3 from '../../assets/SocialMedia/WhatWeDo/Social Media Management.webp';
import imgWwd4 from '../../assets/SocialMedia/WhatWeDo/Social Media Content.webp';
import imgWwd5 from '../../assets/SocialMedia/WhatWeDo/Reels & Short-Form Content.webp';
import imgWwd6 from '../../assets/SocialMedia/WhatWeDo/Community Management.webp';
import imgWwd7 from '../../assets/SocialMedia/WhatWeDo/Social Media Campaigns.webp';
import imgWwd8 from '../../assets/SocialMedia/WhatWeDo/Social Media Analytics.webp';

import imgStartups from '../../assets/SocialMedia/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/SocialMedia/WhoThisIsFor/Growing Businesses.webp';
import imgEstablished from '../../assets/SocialMedia/WhoThisIsFor/Established Brands.webp';
import imgSaaS from '../../assets/SocialMedia/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/SocialMedia/WhoThisIsFor/Local Businesses.webp';
import imgCreators from '../../assets/SocialMedia/WhoThisIsFor/Creators & Personal Brands.webp';

export const heroData = {
  bgImage,
  title: "Social Media Marketing",
  breadcrumbText: "Social Media Marketing",
  tagText: "SOCIAL MEDIA MARKETING",
  headingWords: [
    { text: "Social" }, { text: "Media", italic: true }, { text: "Marketing" },
    { text: "That" }, { text: "Gives" }, { text: "People" }, { text: "a" },
    { text: "Reason" }, { text: "to" }, { text: "Stop" }
  ],
  description1: "Your audience is already scrolling. The challenge is earning a few seconds of their attention — and giving them a reason to remember your brand.",
  description2: "ADSSERV builds social media marketing strategies around your audience, platform behaviour, content, creative direction, community, and business goals. From the first idea to ongoing optimisation, we turn social media into a more intentional part of your digital marketing.",
  button1Text: "Start Your Social Strategy",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "SOCIAL SHOULD DO MORE",
  headingWords: [
    { text: "Posting" }, { text: "more" }, { text: "isn't" }, { text: "the" },
    { text: "same" }, { text: "as" }, { text: "marketing", italic: true }, { text: "better." }
  ],
  paragraphs: [
    "A busy social feed can still produce very little.",
    "Random posts, recycled trends, inconsistent visuals, unclear messaging, and content without a purpose can make a brand look active without making it memorable.",
    "Effective social media marketing starts before the post."
  ],
  items: [
    "Who are you trying to reach?",
    "What do they care about?",
    "What should they understand about your brand?",
    "Why should they stop scrolling?",
    "And what should happen after they engage?"
  ],
  bottomText1: "We build the social strategy around those questions.",
  bottomText2: ""
};

export const approachData = {
  tagText: "OUR SOCIAL MEDIA APPROACH",
  headingWords: [
    { text: "Strategy" }, { text: "first." }, { text: "Content" }, { text: "second." },
    { text: "Optimisation", italic: true }, { text: "always." }
  ],
  description: "We don't treat social media as a monthly list of posts to complete. We look at your brand, audience, competitors, platforms, content opportunities, and business objectives before deciding what your social presence should look and sound like.",
  imageSrc: approachImg,
  imageAlt: "Our Social Media Approach",
  steps: [
    { num: '01', title: 'Understand', desc: 'We learn about your business, audience, positioning, competitors, existing social presence, and goals.' },
    { num: '02', title: 'Plan', desc: 'We develop content pillars, platform priorities, creative directions, posting opportunities, and campaign ideas.' },
    { num: '03', title: 'Create', desc: 'We turn the strategy into useful, engaging, brand-aligned content across the platforms that matter.' },
    { num: '04', title: 'Publish', desc: 'We organise content for consistent execution while adapting formats and messaging to each platform.' },
    { num: '05', title: 'Engage', desc: 'We pay attention to audience responses, conversations, comments, and signals that reveal what people care about.' },
    { num: '06', title: 'Optimise', desc: 'We review performance and use what we learn to improve future content and strategy.' }
  ]
};

export const whatWeDoData = {
  tagText: "SOCIAL MEDIA SERVICES",
  headingWords: [
    { text: "Everything" }, { text: "your" }, { text: "social" }, { text: "presence" },
    { text: "needs" }, { text: "to" }, { text: "become" }, { text: "more", italic: true },
    { text: "intentional." }
  ],
  description: "From strategy and planning to content creation, community management, and performance analysis, we build a connected social media presence tailored to your brand.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Social Media Strategy", desc: "A clear direction for what you should post, where you should post it, who you're speaking to, and what each content activity is designed to achieve.", img: imgWwd1 },
    { num: "02", title: "Content Strategy", desc: "Content pillars, themes, formats, topics, and messaging designed around your audience and business objectives.", img: imgWwd2 },
    { num: "03", title: "Social Media Management", desc: "Consistent planning, publishing, monitoring, and ongoing management of your social channels.", img: imgWwd3 },
    { num: "04", title: "Social Media Content", desc: "Platform-aware posts, captions, creative concepts, carousels, short-form content, and other social assets.", img: imgWwd4 },
    { num: "05", title: "Reels & Short-Form", desc: "Short-form video concepts and content designed around how people discover and consume content today.", img: imgWwd5 },
    { num: "06", title: "Community Management", desc: "Thoughtful interaction with your audience through comments, conversations, responses, and community touchpoints.", img: imgWwd6 },
    { num: "07", title: "Social Campaigns", desc: "Campaign concepts and social activations designed around specific launches, promotions, awareness goals, or business objectives.", img: imgWwd7 },
    { num: "08", title: "Social Media Analytics", desc: "Performance analysis that identifies what is gaining attention, what is creating engagement, and where the strategy can improve.", img: imgWwd8 }
  ]
};

export const whoThisIsForData = {
  tagText: "IS SOCIAL MEDIA MARKETING RIGHT FOR YOU?",
  headingWords: [
    { text: "Built" }, { text: "for" }, { text: "brands" }, { text: "that" },
    { text: "want" }, { text: "more", italic: true }, { text: "from" }, { text: "social." }
  ],
  stages: [
    { title: "Startups", desc: "Build a recognisable social presence and communicate your value from the beginning.", img: imgStartups },
    { title: "Growing Businesses", desc: "Bring consistency, strategy, and stronger creative thinking into your existing social activity.", img: imgGrowing },
    { title: "Established Brands", desc: "Refresh social communication and create content that feels relevant to today's audiences.", img: imgEstablished },
    { title: "SaaS & Technology", desc: "Turn complex products and ideas into content people can understand and engage with.", img: imgSaaS },
    { title: "Local Businesses", desc: "Build awareness, community, and stronger connections with people in your market.", img: imgLocal },
    { title: "Creators & Personal Brands", desc: "Turn expertise, personality, and audience attention into a more intentional digital presence.", img: imgCreators }
  ]
};

export const measuringSuccessData = {
  tagText: "MEASURING SOCIAL PERFORMANCE",
  headingWords: [
    { text: "Likes" }, { text: "are" }, { text: "a" }, { text: "signal." },
    { text: "They're" }, { text: "not" }, { text: "the" }, { text: "whole", italic: true },
    { text: "story." }
  ],
  description: "Social performance should be evaluated against the objective behind the strategy. Depending on your goals, we monitor the signals that actually matter.",
  bottomText: "The right KPI depends on the business objective. We don't recommend treating follower count or likes as the only measure of success.",
  metrics: [
    { num: '01', title: 'Reach', desc: 'How many people are seeing the content?', pinColor: 'var(--accent-orange)', bg: 'rgba(224,131,38,0.08)', border: 'rgba(224,131,38,0.22)', text: 'var(--accent-orange)', rotate: 'rotate-[6deg]' },
    { num: '02', title: 'Engagement', desc: 'Are people interacting, responding, saving, sharing, or discussing?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[7deg]' },
    { num: '03', title: 'Profile & Website Actions', desc: 'Is social activity encouraging people to explore the brand further?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[5deg]' },
    { num: '04', title: 'Audience Growth', desc: 'Is the brand building a relevant audience over time?', pinColor: 'var(--brand-blue)', bg: 'rgba(64,107,158,0.08)', border: 'rgba(64,107,158,0.22)', text: 'var(--brand-blue)', rotate: '-rotate-[6deg]' },
    { num: '05', title: 'Leads & Enquiries', desc: 'Is social contributing to meaningful business actions?', pinColor: 'var(--accent-orange)', bg: 'rgba(224,131,38,0.08)', border: 'rgba(224,131,38,0.22)', text: 'var(--accent-orange)', rotate: 'rotate-[8deg]' },
    { num: '06', title: 'Content Performance', desc: 'Which topics, formats, messages, and creative approaches are earning stronger responses?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[5deg]' }
  ]
};

export const whyAdsservSocialData = {
  tagText: "WHY WORK WITH ADSSERV",
  headingWords: [
    { text: "Gen" }, { text: "Z" }, { text: "thinking." },
    { text: "Strategic" }, { text: "social", italic: true }, { text: "marketing." }
  ],
  paragraphs: [
    "ADSSERV's Gen Z positioning is not about forcing trends into every post.",
    "It's about understanding how modern audiences discover content, how platforms shape attention, and why some ideas travel while others disappear.",
    "We combine that audience perspective with strategy, creative thinking, content execution, and performance analysis."
  ],
  boldParagraph: "The result is social marketing designed to feel native to the platform while still making sense for the business."
};

export const faqData = {
  tagText: "SOCIAL MEDIA MARKETING FAQ",
  headingWords: [
    { text: "Questions" }, { text: "brands" }, { text: "usually" }, { text: "ask" },
    { text: "before" }, { text: "getting" }, { text: "started.", italic: true }
  ],
  faqs: [
    { q: "What does a social media marketing agency do?", a: "A social media marketing agency develops and manages strategies that help brands use social platforms to build awareness, engage audiences, strengthen their presence, and support business goals. Services can include strategy, content, publishing, community management, campaigns, and performance analysis." },
    { q: "How can social media marketing help my business?", a: "Social media marketing can help a business increase brand visibility, build audience relationships, communicate its value, generate website traffic, support lead generation, and create ongoing opportunities for customer engagement. The right outcome depends on the business and its marketing objective." },
    { q: "How often should a business post on social media?", a: "There is no universal posting frequency that works for every business. A stronger approach is to choose a sustainable publishing rhythm based on audience behaviour, platform, content resources, objectives, and the quality of content that can consistently be produced." },
    { q: "Does ADSSERV create social media content?", a: "Yes. ADSSERV can support social media content strategy and content creation as part of its social media marketing services. The exact content scope depends on the agreed strategy, platforms, formats, and project requirements." },
    { q: "Which social media platforms should my business use?", a: "The right platforms depend on your audience, industry, content format, business objectives, and available resources. ADSSERV can assess these factors and recommend where your social media effort is most likely to be useful." },
    { q: "Can social media marketing generate leads?", a: "Yes. Social media can contribute to lead generation when content, audience targeting, offers, landing pages, calls to action, and conversion tracking work together. Social media should be treated as part of a broader customer journey rather than an isolated channel." },
    { q: "How do you measure social media marketing results?", a: "Measurement depends on the objective and can include reach, engagement, saves, shares, audience growth, profile actions, website traffic, leads, conversions, and content-level performance. The most useful metrics are the ones connected to the business goal." },
    { q: "How long does social media marketing take to work?", a: "There is no reliable universal timeline because results depend on the starting point, audience, industry, content quality, consistency, competition, platform, and objectives. Early signals can inform optimisation, while meaningful growth generally requires sustained execution and learning." },
    { q: "Can ADSSERV manage my social media accounts?", a: "ADSSERV can provide social media management as part of an agreed scope. This may include planning, content coordination, publishing, monitoring, community activity, reporting, and optimisation depending on the engagement." },
    { q: "How much does social media marketing cost?", a: "Social media marketing pricing depends on the number of platforms, content requirements, creative production, management scope, campaign requirements, and business objectives. ADSSERV can recommend a suitable scope after understanding what you need." }
  ]
};

export const relatedServicesData = {
  tagText: "BUILD A STRONGER DIGITAL SYSTEM",
  headingWords: [
    { text: "Social" }, { text: "works" }, { text: "better" }, { text: "when" },
    { text: "the" }, { text: "rest" }, { text: "of" }, { text: "the" },
    { text: "journey", italic: true }, { text: "works" }, { text: "too." }
  ],
  services: [
    { title: "SEO Services", desc: "Help people discover your brand through organic search.", cta: "Explore SEO Services", href: "/services/seo-services", icon: Search, img: imgSEO },
    { title: "Performance Marketing", desc: "Put paid campaigns behind the right audience, message, and offer.", cta: "Explore Performance Marketing", href: "/services/performance-marketing", icon: Megaphone, img: imgPerf },
    { title: "Website Development", desc: "Give social traffic a clear and conversion-focused destination.", cta: "Explore Website Development", href: "/services/website-development", icon: Monitor, img: imgWeb },
    { title: "Video Production", desc: "Create stronger visual assets for social platforms and campaigns.", cta: "Explore Video Production", href: "/services/video-production", icon: Camera, img: imgVideo },
    { title: "Influencer Marketing", desc: "Extend your reach through relevant creators and communities.", cta: "Explore Influencer Marketing", href: "/services/influencer-marketing", icon: Sparkles, img: imgInfluencer },
    { title: "Content Writing", desc: "Strengthen the words behind your website, campaigns, and social presence.", cta: "Explore Content Writing", href: "/services/content-writing", icon: PenTool, img: imgContent }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE SOCIAL WORK HARDER?",
  headingText: "Let's build a social presence people want to come back to.",
  description: "Tell us what you're trying to achieve, where your social presence stands today, and what isn't working. We'll help you figure out what should happen next.",
  button1Text: "Start Your Social Strategy",
  button2Text: "Talk to ADSSERV"
};
