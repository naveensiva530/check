import { Search, Share2, Megaphone, Monitor, Palette, FileText } from 'lucide-react';
import { Target, BarChart2, Zap, CheckCircle2 } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/DIGITAL CONSULTING.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Digital Consulting What We Do Images
import imgDigitalStrategy from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Digital Strategy.webp';
import imgDigitalAudits from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Digital Audits.webp';
import imgMarketingStrategy from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Marketing Strategy.webp';
import imgCompetitorAnalysis from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Competitor Analysis.webp';
import imgCustomerJourney from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Customer Journey Analysis.webp';
import imgChannelStrategy from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Channel Strategy.webp';
import imgConversionOpps from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Conversion Opportunities.webp';
import imgMeasurementKPIs from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Measurement & KPIs.webp';
import imgDigitalRoadmaps from '../../assets/Servicess/DigitalConsulting/WhatWeDo/Digital Roadmaps.webp';

// Related Services Images
import imgRelBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import imgRelWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgRelSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import imgRelSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgRelPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';

import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgEstablished from '../../assets/Servicess/WhoThisIsFor/Established Brands.webp';
import imgMarketingTeams from '../../assets/Servicess/WhoThisIsFor/Creators & Personal Brands.webp';

export const heroData = {
  bgImage,
  title: "Digital Consulting",
  breadcrumbText: "Digital Consulting",
  tagText: "DIGITAL CONSULTING",
  headingWords: [
    { text: "Stop" }, { text: "Guessing." }, { text: "Know" }, { text: "What" },
    { text: "Your" }, { text: "Digital" }, { text: "Strategy" }, { text: "Should" },
    { text: "Do", italic: true }, { text: "Next." }
  ],
  description1: "Your business doesn't need more random digital activity. It needs a clearer direction.",
  description2: "ADSSERV helps you identify what's working, what's getting in the way, where the real opportunities are, and what to prioritise next.",
  button1Text: "Talk to a Digital Strategist",
  button2Text: "View Our Services",
  button2Link: "/services/digital-consulting#digital-consulting-what-we-do"
};

export const whatWeHelpSolveData = {
  tagText: "WHAT WE HELP YOU SOLVE",
  headingWords: [
    { text: "Where" }, { text: "is" }, { text: "your" }, { text: "digital" },
    { text: "growth" }, { text: "getting", italic: true }, { text: "stuck?" }
  ],
  description: "Sometimes the problem isn't a lack of effort. It's knowing where that effort should go.",
  objectives: [
    { num: "01", label: "Unclear Direction", title: "No Clear Digital Strategy", desc: "You are active across multiple channels, but there is no clear connection between what you're doing and what the business needs to achieve.", icon: Target },
    { num: "02", label: "Scattered Marketing", title: "Too Many Channels, Too Little Focus", desc: "SEO, social, paid ads, content and other channels are competing for attention without a clear priority.", icon: BarChart2 },
    { num: "03", label: "Weak Conversion", title: "Traffic Isn't Turning Into Action", desc: "People may be finding your brand, but the journey from first interaction to enquiry, signup or purchase isn't working as well as it should.", icon: Zap },
    { num: "04", label: "Performance Gaps", title: "You Don't Know What's Working", desc: "Without the right data and measurement, it becomes difficult to decide what deserves more investment and what needs to change.", icon: CheckCircle2 }
  ]
};

export const approachData = {
  tagText: "PROCESS",
  headingWords: [
    { text: "Audit" }, { text: "first." }, { text: "Prioritise" }, { text: "second." },
    { text: "Execute", italic: true }, { text: "with" }, { text: "purpose." }
  ],
  imageSrc: approachImg,
  steps: [
    { num: '01', title: 'Understand', desc: 'We start with your business goals, audience, current challenges and what you want digital marketing to achieve.' },
    { num: '02', title: 'Audit', desc: 'We review the relevant parts of your digital presence to identify strengths, weaknesses, gaps and missed opportunities.' },
    { num: '03', title: 'Analyse', desc: 'We connect the findings with your market, competitors, customer journey, channels and available performance data.' },
    { num: '04', title: 'Prioritise', desc: 'Not every recommendation deserves immediate attention. We separate high-impact opportunities from lower-priority activity.' },
    { num: '05', title: 'Plan', desc: 'We turn the priorities into a practical digital roadmap with clear actions, channels, measurement and next steps.' },
    { num: '06', title: 'Improve', desc: 'Digital strategy should evolve. We use performance, feedback and changing business needs to identify what should happen next.' }
  ]
};

export const problemData = {
  tagText: "STRATEGIC INTRODUCTION",
  headingWords: [
    { text: "You" }, { text: "don't" }, { text: "need" }, { text: "more" },
    { text: "marketing.", italic: true }, { text: "You" }, { text: "need" },
    { text: "better" }, { text: "decisions." }
  ],
  paragraphs: [
    "SEO, social media, paid advertising, content, websites and creators can all play a role in growth. The problem starts when they're treated as separate activities with no clear connection to the business goal.",
    "Our digital consulting approach looks at the bigger picture first. We examine your current digital presence, audience, channels, customer journey and opportunities, then turn what we find into practical priorities your team can actually act on."
  ],
  bottomText1: "Find Your Next Move"
};

export const consultingServicesData = {
  tagText: "CONSULTING SERVICES",
  headingWords: [
    { text: "What" }, { text: "we" }, { text: "can" }, { text: "help" },
    { text: "you", italic: true }, { text: "figure" }, { text: "out" }
  ],
  description: "The exact scope depends on your business, but digital consulting can cover the areas that influence your online growth.",
  buttonText: "Find Your Next Move",
  icons: [Target, BarChart2, Zap],
  services: [
    { num: "01", title: "Digital Strategy", desc: "Clarify your digital objectives, priorities, channels and overall direction.", img: imgDigitalStrategy },
    { num: "02", title: "Digital Audits", desc: "Review your existing digital presence to uncover technical, strategic, content and conversion gaps.", img: imgDigitalAudits },
    { num: "03", title: "Marketing Strategy", desc: "Connect your marketing activity with your audience, positioning, business goals and acquisition priorities.", img: imgMarketingStrategy },
    { num: "04", title: "Competitor Analysis", desc: "Understand how competitors position themselves, attract attention and use digital channels so you can identify opportunities to differentiate.", img: imgCompetitorAnalysis },
    { num: "05", title: "Customer Journey Analysis", desc: "Map the journey from awareness to consideration, enquiry, purchase or another desired action.", img: imgCustomerJourney },
    { num: "06", title: "Channel Strategy", desc: "Determine where your audience is most relevant and which channels deserve attention based on your objectives.", img: imgChannelStrategy },
    { num: "07", title: "Conversion Opportunities", desc: "Identify friction and missed opportunities across landing pages, websites, forms, calls to action and customer journeys.", img: imgConversionOpps },
    { num: "08", title: "Measurement & KPIs", desc: "Define what should be measured so your team can understand performance and make better decisions.", img: imgMeasurementKPIs },
    { num: "09", title: "Digital Roadmaps", desc: "Turn strategic recommendations into an organised sequence of actions rather than an overwhelming list of tasks.", img: imgDigitalRoadmaps }
  ]
};

export const strategySectionData = {
  tagText: "THE DIGITAL STRATEGY",
  headingWords: [
    { text: "Your" }, { text: "strategy" }, { text: "should" }, { text: "connect" },
    { text: "business" }, { text: "goals" }, { text: "to", italic: true }, { text: "actual" }, { text: "channels." }
  ],
  paragraphs: [
    "A digital strategy shouldn't begin with \"Should we post more?\" or \"Should we run ads?\"",
    "It should begin with the business.",
    "What are you trying to achieve? Who needs to take action? What makes them choose you? Which channels can reach them? What happens after they click? And how will you know whether the investment is working?",
    "Those questions shape the strategy before individual tactics are chosen."
  ]
};

export const roadmapSectionData = {
  tagText: "THE EXECUTION PLAN",
  headingWords: [
    { text: "A" }, { text: "roadmap" }, { text: "is" }, { text: "useful" },
    { text: "only" }, { text: "when" }, { text: "someone" }, { text: "can" },
    { text: "actually", italic: true }, { text: "follow" }, { text: "it." }
  ],
  paragraphs: [
    "Recommendations are easy to collect and difficult to execute. We turn strategic findings into a clearer sequence of priorities so your team knows what needs attention first, what can wait, and what should be measured.",
    "The result is not another presentation full of complicated terminology. It is a practical direction for what happens next."
  ],
  bottomText: "Build My Digital Roadmap"
};

export const serviceConnectionData = {
  tagText: "STRATEGY DOESN'T WORK IN ISOLATION",
  headingWords: [
    { text: "Strategy" }, { text: "doesn't" }, { text: "work" }, { text: "in", italic: true }, { text: "isolation." }
  ],
  paragraphs: [
    "The right strategy may involve one channel, several channels, or a complete rethink of the digital journey.",
    "Depending on your priorities, your strategy may connect with:"
  ],
  services: [
    { title: "SEO Services", desc: "Build sustainable organic visibility around the searches that matter to your audience.", icon: Search, href: "/services/seo-services" },
    { title: "Performance Marketing", desc: "Use paid campaigns when they make commercial and audience sense.", icon: Megaphone, href: "/services/performance-marketing" },
    { title: "Social Media Marketing", desc: "Build attention, engagement and community around the right platforms.", icon: Share2, href: "/services/social-media-marketing" },
    { title: "Website Development", desc: "Create a digital experience that supports the customer journey and conversion.", icon: Monitor, href: "/services/website-development" },
    { title: "Content Writing", desc: "Turn strategic topics and customer needs into useful, discoverable content.", icon: FileText, href: "/services/content-writing" },
    { title: "Branding Solutions", desc: "Make sure positioning, messaging and visual identity support the direction of the business.", icon: Palette, href: "/services/branding-solutions" }
  ]
};

export const trustData = {
  tagText: "STRATEGY SHOULD BE BACKED BY EVIDENCE",
  headingWords: [
    { text: "Strategy" }, { text: "should" }, { text: "be" }, { text: "backed" },
    { text: "by" }, { text: "evidence,", italic: true }, { text: "not" }, { text: "assumptions." }
  ],
  paragraphs: [
    "Where the data exists, we use it. Where the gaps exist, we identify them. And where a recommendation is based on an assumption, we make that clear.",
    "Our approach is built around understanding the current situation before deciding what should change."
  ],
  proofCards: [
    { title: "Business Goals", desc: "Start with what the business needs to achieve." },
    { title: "Audience", desc: "Understand who the strategy needs to reach and influence." },
    { title: "Digital Performance", desc: "Use available data to identify opportunities and problems." },
    { title: "Priorities", desc: "Focus resources on actions that matter most." }
  ]
};

export const whoItsForData = {
  tagText: "WHO IT'S FOR",
  headingWords: [
    { text: "Digital" }, { text: "consulting" }, { text: "for" }, { text: "different" },
    { text: "stages", italic: true }, { text: "of" }, { text: "growth" }
  ],
  stages: [
    {
      title: 'Startups',
      desc: 'Build a practical digital foundation before spending heavily across disconnected channels.',
      image: imgStartups
    },
    {
      title: 'Growing Businesses',
      desc: 'Identify what is working, where growth is being limited and which opportunities deserve more attention.',
      image: imgGrowing
    },
    {
      title: 'Established Brands',
      desc: 'Review existing digital activity, uncover gaps and create a clearer direction for the next stage.',
      image: imgEstablished
    },
    {
      title: 'Marketing Teams',
      desc: 'Bring an external strategic perspective when your team needs help with priorities, channels, measurement or execution planning.',
      image: imgMarketingTeams
    }
  ]
};

export const whyAdsservConsultingData = {
  tagText: "WHY ADSSERV",
  headingWords: [
    { text: "Good" }, { text: "strategy" }, { text: "should" }, { text: "make" },
    { text: "execution", italic: true }, { text: "easier," }, { text: "not" }, { text: "more" }, { text: "complicated." }
  ],
  paragraphs: [
    "ADSSERV sits close to the work. That matters because a strategy has to survive outside a presentation.",
    "Our consulting connects strategic thinking with the digital services that bring the plan to life — from SEO and social media to paid campaigns, websites, content, video and branding."
  ],
  boldParagraph: "We focus on what your business actually needs, not on creating a longer list of things to do."
};

export const faqData = {
  tagText: "FREQUENTLY ASKED QUESTIONS",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "about" },
    { text: "digital", italic: true }, { text: "consulting" }
  ],
  faqs: [
    { q: "What is digital consulting?", a: "Digital consulting helps businesses make better decisions about their digital strategy, channels, customer journey, technology and growth priorities. It can include audits, analysis, recommendations and an actionable roadmap." },
    { q: "What does a digital consultant do?", a: "A digital consultant evaluates a business's digital presence and identifies opportunities to improve strategy, performance and customer experience. The work can cover areas such as SEO, paid advertising, social media, websites, content, analytics and conversion." },
    { q: "What is included in a digital consulting service?", a: "The scope depends on the business, but it can include digital audits, competitor analysis, customer journey analysis, channel strategy, conversion opportunities, measurement and a practical digital roadmap." },
    { q: "Can digital consulting help improve marketing performance?", a: "Yes. Consulting can identify gaps in strategy, targeting, channel selection, customer journeys and measurement that may be limiting marketing performance. The recommendations should then be tested and evaluated against relevant business KPIs." },
    { q: "Does ADSSERV provide digital consulting?", a: "Yes. ADSSERV provides digital consulting focused on helping businesses understand their current digital position, identify opportunities and prioritise practical next steps." },
    { q: "Can startups use digital consulting?", a: "Yes. Startups can use digital consulting to establish clearer digital priorities, identify the right channels and avoid spending resources across disconnected marketing activities." },
    { q: "How long does digital consulting take?", a: "The timeframe depends on the scope, number of channels, business complexity and depth of analysis required. A focused consultation can be much shorter than a full digital audit and strategy engagement." },
    { q: "How much does digital consulting cost?", a: "The cost depends on the scope of the consulting engagement, the level of analysis required and the services involved. ADSSERV can determine the appropriate scope after understanding the business and its objectives." }
  ]
};

export const relatedServicesData = {
  tagText: "TURN STRATEGY INTO ACTION",
  headingWords: [
    { text: 'A' }, { text: 'plan' }, { text: 'needs' }, { text: 'the' },
    { text: 'right', italic: true }, { text: 'execution' }, { text: 'to' }, { text: 'succeed.' }
  ],
  services: [
    { title: 'Branding Solutions', desc: 'Build an identity that supports the strategic direction.', cta: 'Explore Branding', href: '/services/branding-solutions', icon: Palette, img: imgRelBrand },
    { title: 'Website Development', desc: 'Create a digital home built for the customer journey.', cta: 'Explore Websites', href: '/services/website-development', icon: Monitor, img: imgRelWeb },
    { title: 'SEO Services', desc: 'Align your website structure with search intent.', cta: 'Explore SEO', href: '/services/seo-services', icon: Search, img: imgRelSEO },
    { title: 'Social Media Marketing', desc: 'Execute the content and channel strategy.', cta: 'Explore Social', href: '/services/social-media-marketing', icon: Share2, img: imgRelSocial },
    { title: 'Performance Marketing', desc: 'Deploy paid campaigns against specific business goals.', cta: 'Explore Performance', href: '/services/performance-marketing', icon: Megaphone, img: imgRelPerf }
  ]
};

export const ctaData = {
  tagText: "READY TO START?",
  headingText: "You don't need another list of marketing ideas.",
  description: "You need to know which move makes sense next. Tell us where your digital marketing is today, where you want it to go, and what's getting in the way. We'll start there.",
  button1Text: "Talk to a Digital Strategist",
  button2Text: "Contact ADSSERV"
};
