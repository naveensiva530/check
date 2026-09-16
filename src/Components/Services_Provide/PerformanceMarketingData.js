import { ArrowUpRight, Sparkles, TrendingUp, Target } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/PerformanceMarketing.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Images for What We Do
import imgGoogleAds from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Google Ads.webp';
import imgPaidSocial from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Paid Social Advertising.webp';
import imgSearchAdv from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Search Advertising.webp';
import imgDisplay from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Display & Remarketing.webp';
import imgCampaignStrategy from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Campaign Strategy.webp';
import imgAdCreative from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Ad Creative & Copy.webp';
import imgLandingPage from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Landing Page Optimisation.webp';
import imgConvTracking from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Conversion Tracking.webp';
import imgCampaignOpt from '../../assets/Servicess/PerformanceMarketing/PerformanceWhatWeDo/Campaign Optimisation.webp';

// Images for Who This Is For
import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgEstablished from '../../assets/Servicess/WhoThisIsFor/Established Brands.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgCreators from '../../assets/Servicess/WhoThisIsFor/Creators & Personal Brands.webp';

// Images for Related Services
import imgSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import imgWebsite from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgVideo from '../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';

export const heroData = {
  bgImage,
  title: "Performance Marketing",
  breadcrumbText: "Performance Marketing",
  tagText: "PERFORMANCE MARKETING",
  headingWords: [
    { text: "Performance" },
    { text: "Marketing" },
    { text: "Built" },
    { text: "to" },
    { text: "Turn", italic: true },
    { text: "Ad" },
    { text: "Spend" },
    { text: "Into" },
    { text: "Action" }
  ],
  description1: "Paid advertising should do more than put your brand in front of people.",
  description2: "ADSSERV builds performance marketing campaigns around the audience, offer, creative, landing experience, budget, and conversion goal — then uses campaign data to understand what is working and what needs to change. From Google Ads and paid social to ongoing optimisation, we focus on making every part of the journey more accountable.",
  button1Text: "Plan My Campaign",
  button2Text: "Talk to ADSSERV",
  button2Link: "/contact"
};

export const problemData = {
  tagText: "PAID MEDIA WITHOUT A PLAN",
  headingWords: [
    { text: "More" },
    { text: "clicks" },
    { text: "don't" },
    { text: "automatically", italic: true },
    { text: "mean" },
    { text: "better" },
    { text: "marketing." }
  ],
  paragraphs: [
    "A campaign can generate impressions, clicks, and even enquiries without creating the business outcome you actually need."
  ],
  items: [
    "The problem may be the audience.",
    "It may be the offer.",
    "It may be the creative.",
    "It may be the landing page.",
    "It may be the conversion journey.",
    "Or the campaign may simply be optimising for the wrong signal."
  ],
  bottomText1: "We look beyond the ad itself and consider the journey from first impression to meaningful action.",
  bottomText2: ""
};

export const approachData = {
  tagText: "HOW WE THINK ABOUT PERFORMANCE",
  headingWords: [
    { text: "Start" }, { text: "with" }, { text: "the" }, { text: "business" },
    { text: "goal." }, { text: "Work" }, { text: "backwards", italic: true },
    { text: "to" }, { text: "the" }, { text: "campaign." }
  ],
  description: "Before deciding where to spend the budget, we want to understand what the campaign needs to accomplish. That means connecting the business objective with the audience, offer, messaging, media channels, landing experience, tracking, and optimisation process.",
  imageSrc: approachImg,
  imageAlt: "Our Performance Marketing Approach",
  steps: [
    { num: '01', title: 'Define', desc: 'Clarify the business objective, target audience, offer, conversion goal, budget, and campaign priorities.' },
    { num: '02', title: 'Research', desc: 'Study the audience, market, competitors, search behaviour, creative opportunities, and available campaign data.' },
    { num: '03', title: 'Build', desc: 'Develop campaign structure, targeting, creative direction, messaging, landing-page requirements, and measurement.' },
    { num: '04', title: 'Launch', desc: 'Set up and activate campaigns with the appropriate targeting, budgets, bidding, creative, and conversion signals.' },
    { num: '05', title: 'Learn', desc: 'Monitor campaign behaviour and identify patterns across audiences, keywords, placements, creatives, and conversion actions.' },
    { num: '06', title: 'Optimise', desc: 'Adjust campaigns based on evidence — improving what works and reducing wasted spend where possible.' }
  ]
};

export const whatWeDoData = {
  tagText: "PERFORMANCE MARKETING SERVICES",
  headingWords: [
    { text: "Paid" }, { text: "campaigns" }, { text: "with" }, { text: "a" },
    { text: "reason", italic: true }, { text: "behind" }, { text: "every" }, { text: "decision." }
  ],
  description: "We connect paid acquisition with creative testing, funnel architecture, and conversion measurement to maximize every dollar of ad spend.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Google Ads", desc: "Search and other relevant Google advertising campaigns built around intent, targeting, messaging, and measurable actions.", img: imgGoogleAds },
    { num: "02", title: "Paid Social Advertising", desc: "Paid campaigns across relevant social platforms designed around audience, creative, offer, and campaign objective.", img: imgPaidSocial },
    { num: "03", title: "Search Advertising", desc: "Reach people actively searching for relevant products, services, solutions, or information.", img: imgSearchAdv },
    { num: "04", title: "Display & Remarketing", desc: "Reconnect with relevant audiences through carefully planned display or remarketing activity where appropriate.", img: imgDisplay },
    { num: "05", title: "Campaign Strategy", desc: "Plan the audience, offer, channels, budget, creative direction, landing experience, and measurement before launch.", img: imgCampaignStrategy },
    { num: "06", title: "Ad Creative & Copy", desc: "Develop campaign messaging and creative concepts designed to communicate the value of the offer clearly.", img: imgAdCreative },
    { num: "07", title: "Landing Page Optimisation", desc: "Identify friction and opportunities across the page users reach after clicking an advertisement.", img: imgLandingPage },
    { num: "08", title: "Conversion Tracking", desc: "Connect campaign activity with meaningful actions so performance can be evaluated beyond clicks and impressions.", img: imgConvTracking },
    { num: "09", title: "Campaign Optimisation", desc: "Continuously review campaign data and make informed changes to targeting, budgets, creative, bidding, keywords, and other relevant variables.", img: imgCampaignOpt }
  ]
};

export const whoThisIsForData = {
  tagText: "BUILT AROUND DIFFERENT GROWTH STAGES",
  headingWords: [
    { text: "Paid" }, { text: "marketing" }, { text: "for" }, { text: "businesses" },
    { text: "with", italic: true }, { text: "something" }, { text: "to" }, { text: "achieve." }
  ],
  stages: [
    { title: 'Startups', desc: 'Test offers, audiences, messaging, and acquisition opportunities with controlled campaigns and clear measurement.', img: imgStartups },
    { title: 'Growing Businesses', desc: 'Create a more structured paid acquisition system and identify opportunities for scaling.', img: imgGrowing },
    { title: 'Established Brands', desc: 'Support launches, demand generation, product promotion, remarketing, or specific commercial objectives.', img: imgEstablished },
    { title: 'SaaS & Technology', desc: 'Reach relevant decision-makers and users through intent-led and audience-based campaigns.', img: imgSaaS },
    { title: 'Local Businesses', desc: 'Generate relevant enquiries, calls, bookings, visits, or other location-driven actions.', img: imgLocal },
    { title: 'Ecommerce & Product Brands', desc: 'Support product discovery, consideration, remarketing, and purchase-focused campaigns where appropriate.', img: imgCreators }
  ]
};

export const metricsData = {
  tagText: "PERFORMANCE SIGNALS",
  headingWords: [
    { text: "The" }, { text: "campaign" }, { text: "data" }, { text: "should" },
    { text: "lead", italic: true }, { text: "to" }, { text: "decisions." }
  ],
  description: "Different campaigns require different metrics. Depending on the objective, we may evaluate:",
  bottomText: "A low cost per click is not automatically a win. A high click-through rate is not automatically a win either. The useful question is whether the campaign is contributing to the outcome the business actually cares about.",
  metrics: [
    { num: '01', title: 'Impressions & Reach', desc: 'How much relevant exposure is the campaign generating?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[4deg]' },
    { num: '02', title: 'CTR', desc: 'Are the audience and creative creating enough interest to earn the click?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[3deg]' },
    { num: '03', title: 'CPC', desc: 'What is the campaign paying for relevant traffic?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: 'rotate-[2deg]' },
    { num: '04', title: 'Conversion Rate', desc: 'How effectively is the post-click experience turning visitors into the desired action?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: '-rotate-[2deg]' },
    { num: '05', title: 'CPA / CPL', desc: 'What is the cost of acquiring a customer or lead?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: 'rotate-[4deg]' },
    { num: '06', title: 'ROAS', desc: 'Where applicable, what revenue is being generated relative to advertising spend?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[5deg]' },
    { num: '07', title: 'Lead Quality', desc: 'Are the leads actually relevant to the business?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[4deg]' }
  ]
};

export const whyAdsservPerformanceData = {
  tagText: "WHY PERFORMANCE MARKETING WITH ADSSERV",
  headingWords: [
    { text: "Less" }, { text: "obsession" }, { text: "with" }, { text: "vanity" },
    { text: "metrics.", italic: true }, { text: "More" }, { text: "attention" },
    { text: "to" }, { text: "the" }, { text: "actual" }, { text: "journey." }
  ],
  paragraphs: [
    "ADSSERV approaches paid marketing as a connected system.",
    "The advertisement matters. The audience matters. The offer matters. The landing page matters. The tracking matters.",
    "Our Gen Z perspective also influences how we think about creative: modern audiences move quickly, ignore repetitive advertising, and expect brands to communicate clearly."
  ],
  boldParagraph: "And the business outcome matters most. We make the message relevant enough to deserve attention."
};

export const faqData = {
  tagText: "PERFORMANCE MARKETING FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "before" }, { text: "investing" }, { text: "in", italic: true }, { text: "paid" }, { text: "campaigns." }
  ],
  faqs: [
    { q: "What is performance marketing?", a: "Performance marketing is a measurable form of digital marketing where campaigns are planned and optimised around specific actions or business outcomes. Depending on the campaign, those actions can include leads, purchases, registrations, bookings, or other conversions." },
    { q: "What does a performance marketing agency do?", a: "A performance marketing agency can plan, launch, manage, measure, and optimise paid campaigns across channels such as Google Ads and paid social. The work may also include audience research, creative, landing-page optimisation, conversion tracking, and reporting." },
    { q: "What is the difference between performance marketing and digital marketing?", a: "Digital marketing is the broader discipline covering channels such as SEO, social media, content, email, websites, and paid advertising. Performance marketing focuses more specifically on measurable campaigns and actions, particularly where paid acquisition and conversion measurement are involved." },
    { q: "Can performance marketing generate leads?", a: "Yes. Performance campaigns can be designed to generate leads when the audience, offer, advertisement, landing experience, and conversion tracking are properly aligned. Lead quality should also be evaluated rather than measuring only lead volume." },
    { q: "How much should I spend on Google Ads?", a: "There is no universal advertising budget that works for every business. A suitable budget depends on factors such as market demand, competition, customer value, conversion rates, available margins, geographic targeting, and the business's acquisition objectives." },
    { q: "How long does it take for paid advertising to work?", a: "Paid campaigns can begin generating data soon after launch, but meaningful optimisation requires enough relevant data to identify patterns. The time required varies according to budget, audience size, conversion volume, competition, offer, and campaign complexity." },
    { q: "Does ADSSERV manage Google Ads?", a: "ADSSERV offers performance marketing services that can include Google Ads and other paid campaign activity, subject to the agreed campaign scope and current service offering." },
    { q: "Can you optimise an existing advertising campaign?", a: "Yes. An existing campaign can be audited for structure, targeting, keywords, creative, bidding, budget allocation, landing experience, tracking, and conversion performance before optimisation recommendations are made." },
    { q: "How do you measure paid advertising performance?", a: "Performance can be measured using metrics such as impressions, clicks, CTR, CPC, conversions, conversion rate, CPL, CPA, revenue, and ROAS where reliable revenue data is available. The most important metrics depend on the campaign objective." },
    { q: "Should I use Google Ads or Meta Ads?", a: "The better channel depends on how your customers discover and evaluate your product or service. Google Ads can capture existing search intent, while Meta advertising can be useful for audience-based discovery, demand creation, retargeting, and visual creative." }
  ]
};

export const relatedServicesData = {
  tagText: "BUILD THE FULL ACQUISITION JOURNEY",
  headingWords: [
    { text: "Paid" }, { text: "traffic" }, { text: "works" }, { text: "better" },
    { text: "when" }, { text: "the" }, { text: "destination" }, { text: "is", italic: true }, { text: "ready." }
  ],
  services: [
    { title: 'Social Media Marketing', desc: 'Build the organic social presence and content system around your audience.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', img: imgSocial },
    { title: 'SEO Services', desc: 'Build long-term organic visibility alongside paid acquisition.', cta: 'Explore SEO Services', href: '/services/seo-services', img: imgSEO },
    { title: 'Website Development', desc: 'Create a stronger destination for campaign traffic.', cta: 'Explore Website Development', href: '/services/website-development', img: imgWebsite },
    { title: 'Content Writing', desc: 'Sharpen the messaging across ads, landing pages, and digital touchpoints.', cta: 'Explore Content Writing', href: '/services/content-writing', img: imgContent },
    { title: 'Video Production', desc: 'Create video assets designed for campaigns, social platforms, and digital storytelling.', cta: 'Explore Video Production', href: '/services/video-production', img: imgVideo }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE YOUR AD BUDGET MORE ACCOUNTABLE?",
  headingText: "Let's build a campaign around the outcome.",
  description: "Tell us what you're selling, who you're trying to reach, and what you want the campaign to achieve. We'll help map the audience, channel, offer, campaign, and conversion journey.",
  button1Text: "Plan My Campaign",
  button2Text: "Talk to ADSSERV"
};
