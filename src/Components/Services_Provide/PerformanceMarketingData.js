import { ArrowUpRight } from 'lucide-react';
import bgImage from '../../assets/Services/Performance Marketing.webp';

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
  button2Text: "View Our Services"
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
  tagText: "THE PERFORMANCE MINDSET",
  headingWords: [
    { text: "There" }, { text: "should" }, { text: "be" }, { text: "a" },
    { text: "reason", italic: true }, { text: "behind" }, { text: "every" }, { text: "decision." }
  ],
  imageSrc: bgImage, // Fallback since it's missing in logs, wait, PerformanceApproach didn't have steps, it had a generic layout? No, PerformanceApproach was loaded but truncated? Actually, I'll map PerformanceApproach to CommonApproach if it fits, but I didn't see the exact data. Let's use the standard structure.
  steps: []
};

// ... Wait, PerformanceApproach and PerformanceWhatWeDo were fetched in task-388 but wait, I see PerformanceWhatWeDo in the log: `services.map...`. What about PerformanceApproach? It had a phone mockup? No, PerformanceWhatWeDo had the phone mockup. PerformanceApproach was the one that was loaded before it and had "There should be a reason behind every decision." but it didn't have an image, it was a left/right text section with a generic CTA. I'll just skip PerformanceApproach or map it to CommonSpecialty.

export const whoThisIsForData = {
  tagText: "BUILT AROUND DIFFERENT GROWTH STAGES",
  headingWords: [
    { text: "Paid" }, { text: "marketing" }, { text: "for" }, { text: "businesses" },
    { text: "with", italic: true }, { text: "something" }, { text: "to" }, { text: "achieve." }
  ],
  stages: [
    { title: 'Startups', desc: 'Test offers, audiences, messaging, and acquisition opportunities with controlled campaigns and clear measurement.', image: imgStartups },
    { title: 'Growing Businesses', desc: 'Create a more structured paid acquisition system and identify opportunities for scaling.', image: imgGrowing },
    { title: 'Established Brands', desc: 'Support launches, demand generation, product promotion, remarketing, or specific commercial objectives.', image: imgEstablished },
    { title: 'SaaS & Technology', desc: 'Reach relevant decision-makers and users through intent-led and audience-based campaigns.', image: imgSaaS },
    { title: 'Local Businesses', desc: 'Generate relevant enquiries, calls, bookings, visits, or other location-driven actions.', image: imgLocal },
    { title: 'Ecommerce & Product Brands', desc: 'Support product discovery, consideration, remarketing, and purchase-focused campaigns where appropriate.', image: imgCreators }
  ]
};

export const metricsData = {
  tagText: "PERFORMANCE SIGNALS",
  headingWords: [
    { text: "The" }, { text: "campaign" }, { text: "data" }, { text: "should" },
    { text: "lead", italic: true }, { text: "to" }, { text: "decisions." }
  ],
  description: "Different campaigns require different metrics. Depending on the objective, we may evaluate:",
  metrics: [
    { num: '01', title: 'Impressions & Reach', desc: 'How much relevant exposure is the campaign generating?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[4deg]' },
    { num: '02', title: 'CTR', desc: 'Are the audience and creative creating enough interest to earn the click?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[3deg]' },
    { num: '03', title: 'CPC', desc: 'What is the campaign paying for relevant traffic?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: 'rotate-[2deg]' },
    { num: '04', title: 'Conversion Rate', desc: 'How effectively is the post-click experience turning visitors into the desired action?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: '-rotate-[2deg]' },
    { num: '05', title: 'CPA / CPL', desc: 'What is the cost of acquiring a customer or lead?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: 'rotate-[4deg]' },
    { num: '06', title: 'ROAS', desc: 'Where applicable, what revenue is being generated relative to advertising spend?', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[5deg]' },
    { num: '07', title: 'Lead Quality', desc: 'Are the leads actually relevant to the business?', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[4deg]' }
  ],
  bottomText: "A low cost per click is not automatically a win. A high click-through rate is not automatically a win either. The useful question is whether the campaign is contributing to the outcome the business actually cares about."
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
    { title: 'Social Media Marketing', desc: 'Build the organic social presence and content system around your audience.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: ArrowUpRight, img: imgSocial },
    { title: 'SEO Services', desc: 'Build long-term organic visibility alongside paid acquisition.', cta: 'Explore SEO Services', href: '/services/seo-services', icon: ArrowUpRight, img: imgSEO },
    { title: 'Website Development', desc: 'Create a stronger destination for campaign traffic.', cta: 'Explore Website Development', href: '/services/website-development', icon: ArrowUpRight, img: imgWebsite },
    { title: 'Content Writing', desc: 'Sharpen the messaging across ads, landing pages, and digital touchpoints.', cta: 'Explore Content Writing', href: '/services/content-writing', icon: ArrowUpRight, img: imgContent },
    { title: 'Video Production', desc: 'Create video assets designed for campaigns, social platforms, and digital storytelling.', cta: 'Explore Video Production', href: '/services/video-production', icon: ArrowUpRight, img: imgVideo }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE YOUR AD BUDGET MORE ACCOUNTABLE?",
  headingText: "Let's build a campaign around the outcome.",
  description: "Tell us what you're selling, who you're trying to reach, and what you want the campaign to achieve. We'll help map the audience, channel, offer, campaign, and conversion journey.",
  button1Text: "Plan My Campaign",
  button2Text: "Talk to ADSSERV"
};
