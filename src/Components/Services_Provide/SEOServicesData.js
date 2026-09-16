import { Monitor, PenTool, Share2, Megaphone, Palette, Sparkles, TrendingUp, Target } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/SEO.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

import imgWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';

import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgEstablished from '../../assets/Servicess/WhoThisIsFor/Established Brands.webp';

import imgWwd1 from '../../assets/Servicess/SEO/WhatWeDo/Technical SEO.webp';
import imgWwd2 from '../../assets/Servicess/SEO/WhatWeDo/On-Page SEO.webp';
import imgWwd3 from '../../assets/Servicess/SEO/WhatWeDo/Keyword Research.webp';
import imgWwd4 from '../../assets/Servicess/SEO/WhatWeDo/Content SEO.webp';
import imgWwd5 from '../../assets/Servicess/SEO/WhatWeDo/Local SEO.webp';
import imgWwd6 from '../../assets/Servicess/SEO/WhatWeDo/E-commerce SEO.webp';
import imgWwd7 from '../../assets/Servicess/SEO/WhatWeDo/Off-Page SEO.webp';
import imgWwd8 from '../../assets/Servicess/SEO/WhatWeDo/AEO & GEO.webp';
import imgWwd9 from '../../assets/Servicess/SEO/WhatWeDo/SEO Audits.webp';

export const heroData = {
  bgImage,
  title: "SEO Services",
  breadcrumbText: "SEO Services",
  tagText: "SEO SERVICES",
  headingWords: [
    { text: "SEO" }, { text: "That" }, { text: "Helps" }, { text: "the" },
    { text: "Right", italic: true }, { text: "People" }, { text: "Find" }, { text: "You" }
  ],
  description1: "Getting traffic is not the whole point. The real goal is to become visible when someone is actively searching for what your business offers — and then give them a reason to choose you.",
  description2: "ADSSERV builds SEO strategies around technical foundations, search intent, content, authority, local visibility, and continuous improvement.",
  description3: "No shortcuts. No keyword stuffing. No promises of overnight rankings. Just search strategy built around how people actually discover businesses.",
  button1Text: "Grow My Organic Visibility",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "SEO IS MORE THAN KEYWORDS",
  headingWords: [
    { text: "Ranking" }, { text: "for" }, { text: "the" }, { text: "wrong", italic: true },
    { text: "searches" }, { text: "won't" }, { text: "grow" }, { text: "the" },
    { text: "right" }, { text: "business." }
  ],
  paragraphs: [
    "A website can have hundreds of keywords and still attract very little meaningful business.",
    "Why? Because visibility without intent is often just noise.",
    "Effective SEO connects what people search for with what your business actually sells.",
    "That means understanding:"
  ],
  items: [
    "Audience",
    "Search behaviour",
    "Competitors",
    "Website structure",
    "Content",
    "Technical health",
    "Authority",
    "The actions visitors should take once they arrive"
  ],
  bottomText1: "That's where the real work begins.",
  bottomText2: ""
};

export const approachData = {
  tagText: "SEARCH WITH PURPOSE",
  headingWords: [
    { text: "We" }, { text: "optimise" }, { text: "the" }, { text: "whole" },
    { text: "search", italic: true }, { text: "journey" }, { text: "—" },
    { text: "not" }, { text: "just" }, { text: "the" }, { text: "keyword." }
  ],
  description: "SEO is not a single task. It is a coordinated effort across technical health, search intent, content strategy, authority building, and continuous measurement. We treat each as a connected system.",
  imageSrc: approachImg,
  imageAlt: "Our SEO Approach",
  steps: [
    { num: '01', title: 'Discover', desc: 'Understand the business, audience, products, services, competitors, market, existing visibility, and commercial goals.' },
    { num: '02', title: 'Research', desc: 'Identify relevant search demand, intent, keyword opportunities, competitor gaps, topics, questions, and SERP patterns.' },
    { num: '03', title: 'Fix', desc: 'Address technical and on-page issues that make it harder for search engines and users to understand the website.' },
    { num: '04', title: 'Build', desc: 'Create or improve useful content, landing pages, internal links, topical coverage, and authority signals.' },
    { num: '05', title: 'Expand', desc: 'Develop new opportunities across organic search, local search, content, answer engines, and relevant search experiences.' },
    { num: '06', title: 'Measure', desc: 'Monitor visibility, traffic, rankings, engagement, conversions, and other meaningful business indicators.' },
    { num: '07', title: 'Improve', desc: 'SEO is iterative. We use the data to identify what should be strengthened, changed, expanded, or removed next.' }
  ]
};

export const whatWeDoData = {
  tagText: "SEO SERVICES",
  headingWords: [
    { text: "Every" }, { text: "part" }, { text: "of" }, { text: "search" },
    { text: "covered", italic: true }, { text: "and" }, { text: "connected." }
  ],
  description: "We work across the technical, content, and authority dimensions of SEO to build a search presence that grows over time.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Technical SEO", desc: "Improve the technical foundations that help search engines crawl, understand, and access important pages.", img: imgWwd1 },
    { num: "02", title: "On-Page SEO", desc: "Optimise page structure, headings, content, metadata, internal links, images, and search intent.", img: imgWwd2 },
    { num: "03", title: "Keyword Research", desc: "Find commercially relevant search opportunities based on intent, competition, audience needs, and business value.", img: imgWwd3 },
    { num: "04", title: "Content SEO", desc: "Build content around real questions, topics, problems, comparisons, and search journeys rather than publishing for volume alone.", img: imgWwd4 },
    { num: "05", title: "Local SEO", desc: "Improve visibility for relevant local searches through location-focused optimisation and local search signals.", img: imgWwd5 },
    { num: "06", title: "E-commerce SEO", desc: "Optimise product, category, collection, and supporting pages where e-commerce SEO is part of the project.", img: imgWwd6 },
    { num: "07", title: "Off-Page SEO", desc: "Strengthen relevant authority signals through ethical outreach, digital PR, citations, partnerships, and other appropriate activities.", img: imgWwd7 },
    { num: "08", title: "AEO & GEO", desc: "Structure useful information so brands can become easier for answer engines and generative search experiences to understand and reference.", img: imgWwd8 },
    { num: "09", title: "SEO Audits", desc: "Identify technical, content, on-page, authority, UX, indexing, and opportunity gaps with prioritised recommendations.", img: imgWwd9 }
  ]
};

export const whyAdsservSEOData = {
  tagText: "OUR VIEW OF SEO",
  headingWords: [
    { text: "SEO" }, { text: "shouldn't" }, { text: "live" }, { text: "in" },
    { text: "a", italic: true }, { text: "silo." }
  ],
  paragraphs: [
    "A page that ranks but doesn't explain the offer is a problem.",
    "A beautiful website that nobody finds is also a problem.",
    "Content without a search strategy can miss the people who need it.",
    "That's why ADSSERV connects SEO with the rest of the digital journey — including content, social media, paid campaigns, websites, branding, analytics, and conversion paths."
  ],
  boldParagraph: "Search brings the opportunity. The experience determines what happens next."
};

export const whoThisIsForData = {
  tagText: "SEO FOR",
  headingWords: [
    { text: "Businesses" }, { text: "that" }, { text: "want" }, { text: "organic" },
    { text: "visibility", italic: true }, { text: "to" }, { text: "become" }, { text: "an" }, { text: "asset." }
  ],
  stages: [
    { title: "Startups", desc: "Build search foundations before competitors occupy the space around your category.", img: imgStartups },
    { title: "Growing Businesses", desc: "Expand visibility around services, products, locations, and high-intent searches.", img: imgGrowing },
    { title: "Local Businesses", desc: "Capture relevant searches from people looking for businesses and services in specific areas.", img: imgLocal },
    { title: "SaaS & Technology", desc: "Build discoverability across product, use-case, problem, comparison, and educational searches.", img: imgSaaS },
    { title: "Established Brands", desc: "Strengthen existing organic visibility while identifying technical, content, and competitive gaps.", img: imgEstablished }
  ]
};

export const faqData = {
  tagText: "SEO FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "before" },
    { text: "investing", italic: true }, { text: "in" }, { text: "SEO." }
  ],
  faqs: [
    { q: "What is SEO?", a: "SEO, or search engine optimisation, is the process of improving a website and its content so search engines can understand it and relevant users can discover it through organic search. Effective SEO combines technical optimisation, content, search intent, authority, user experience, and ongoing measurement." },
    { q: "How long does SEO take to work?", a: "SEO timelines vary based on competition, website condition, authority, search demand, content quality, technical issues, and the amount of work being implemented. Some improvements can be visible relatively quickly, while meaningful organic growth often requires consistent work over time." },
    { q: "How much do SEO services cost?", a: "SEO costs depend on the website's size, market, competition, technical requirements, content needs, target locations, and scope of work. A proper recommendation should be based on the business's current situation and objectives rather than a one-size-fits-all package." },
    { q: "Can you guarantee first-page Google rankings?", a: "No legitimate SEO provider can guarantee a specific Google ranking because search results are influenced by algorithms, competitors, search behaviour, location, and many other factors. SEO should instead focus on improving the website's relevance, technical quality, authority, and ability to satisfy search intent." },
    { q: "What does an SEO audit include?", a: "An SEO audit can examine technical SEO, crawling, indexing, site architecture, on-page optimisation, content, internal linking, performance, structured data, local visibility, authority, competitors, and search opportunities. The scope depends on the website and audit objectives." },
    { q: "Does SEO still matter with AI search?", a: "Yes. Search is expanding into AI-generated answers and conversational experiences, but discoverability still depends on useful information, clear entities, strong technical foundations, relevant content, and credible signals. SEO and AEO/GEO can therefore work together rather than being treated as separate worlds." },
    { q: "What is the difference between SEO and paid advertising?", a: "SEO focuses primarily on earning organic visibility in search results, while paid advertising uses advertising platforms to purchase targeted placements. They can support each other, but they require different strategies, budgets, measurement models, and timelines." },
    { q: "Can SEO generate leads?", a: "SEO can contribute to lead generation when relevant search visibility connects users with useful pages, compelling offers, clear conversion paths, and a strong overall website experience. Lead volume depends on search demand, competition, offer quality, website performance, and other business factors." },
    { q: "Do you provide local SEO?", a: "Yes, local SEO can be part of the service for businesses that genuinely serve specific geographic markets. The work can include local search optimisation, Google Business Profile support, location pages, local content, citations, reviews, and measurement where appropriate." },
    { q: "Can SEO help a new website?", a: "Yes. Starting SEO during website planning and development can help establish stronger information architecture, crawlability, page structure, content targeting, internal linking, metadata, and technical foundations before the site grows." },
    { q: "Do you provide AEO and GEO?", a: "ADSSERV can structure content for answer-oriented and generative search experiences by using clear questions, direct answers, entity relationships, useful supporting information, structured content, and strong topical context. These practices complement rather than replace core SEO." }
  ]
};

export const relatedServicesData = {
  tagText: "SEO WORKS BETTER AS PART OF THE SYSTEM",
  headingWords: [
    { text: "Connect" }, { text: "organic" }, { text: "search" }, { text: "with" },
    { text: "the", italic: true }, { text: "rest" }, { text: "of" }, { text: "your" },
    { text: "digital" }, { text: "strategy." }
  ],
  services: [
    { title: "Website Development", desc: "Build the technical and UX foundation where organic visitors land.", cta: "Explore Website Development", href: "/services/website-development", icon: Monitor, img: imgWeb },
    { title: "Content Writing", desc: "Create useful content that supports search intent and topical authority.", cta: "Explore Content Writing", href: "/services/content-writing", icon: PenTool, img: imgContent },
    { title: "Social Media Marketing", desc: "Extend content and brand visibility beyond search.", cta: "Explore Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, img: imgSocial },
    { title: "Performance Marketing", desc: "Use paid campaigns alongside organic acquisition where appropriate.", cta: "Explore Performance Marketing", href: "/services/performance-marketing", icon: Megaphone, img: imgPerf },
    { title: "Branding Solutions", desc: "Make the experience after the search consistent with the brand.", cta: "Explore Branding Solutions", href: "/services/branding-solutions", icon: Palette, img: imgBrand }
  ]
};

export const ctaData = {
  tagText: "READY TO BE FOUND?",
  headingText: "Let's turn search visibility into something your business can build on.",
  description: "Tell us what you sell, who you want to reach, and where you want to grow. We'll identify the search opportunities worth pursuing and the work needed to capture them.",
  button1Text: "Grow My Organic Visibility",
  button2Text: "Talk to ADSSERV"
};
