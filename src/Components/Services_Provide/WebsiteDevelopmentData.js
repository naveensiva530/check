import { Palette, PenLine, Search, Share2, Megaphone, Monitor, Sparkles, TrendingUp, Target, Layers, Smartphone, Gauge, ShieldCheck, CheckCircle2 } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/Website Development.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Images for Who This Is For
import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgEstablished from '../../assets/Servicess/WhoThisIsFor/Established Brands.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgCreators from '../../assets/Servicess/WhoThisIsFor/Creators & Personal Brands.webp';

// Images for Related Services
import imgBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import imgContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import imgSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';

// Images for What We Build slider
import imgWwd1 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Business Websites.webp';
import imgWwd2 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Landing Pages.webp';
import imgWwd3 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Corporate Websites.webp';
import imgWwd4 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Startup Websites.webp';
import imgWwd5 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/SaaS & Technology Websites.webp';
import imgWwd6 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Service Websites.webp';
import imgWwd7 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Website Redesigns.webp';
import imgWwd8 from '../../assets/Servicess/WebsiteDevelopment/WhatWeDo/Conversion-Focused Pages.webp';

export const heroData = {
  bgImage,
  title: "Website Development",
  breadcrumbText: "Website Development",
  tagText: "WEBSITE DEVELOPMENT",
  headingWords: [
    { text: "Websites" }, { text: "Built" }, { text: "to" }, { text: "Be" },
    { text: "Seen,", italic: true }, { text: "Used" }, { text: "and" }, { text: "Remembered" }
  ],
  description1: "Your website is not just the place people go to find your business. It is where they decide whether to trust you, understand what you offer, and take the next step.",
  description2: "ADSSERV creates modern websites that bring together thoughtful design, clear content, responsive development, SEO foundations, and conversion-focused user experiences — so the site looks right and works for the business behind it.",
  button1Text: "Start My Website",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "A GOOD-LOOKING WEBSITE ISN'T ENOUGH",
  headingWords: [
    { text: "Your" }, { text: "website", italic: true }, { text: "has" },
    { text: "a" }, { text: "job" }, { text: "to" }, { text: "do." }
  ],
  paragraphs: [
    "A website can look impressive and still make people work too hard to understand the business."
  ],
  items: [
    "Slow pages.",
    "Confusing navigation.",
    "Weak messaging.",
    "Poor mobile experiences.",
    "Unclear calls to action.",
    "Content that says everything except what the visitor actually needs to know."
  ],
  bottomText1: "We approach website development from both sides: what the user needs to experience and what the business needs the website to achieve.",
  bottomText2: ""
};

export const approachData = {
  tagText: "STRATEGY BEFORE SCREENS",
  headingWords: [
    { text: "We" }, { text: "build" }, { text: "around" }, { text: "the" },
    { text: "experience,", italic: true }, { text: "not" }, { text: "just" },
    { text: "the" }, { text: "layout." }
  ],
  description: "Before thinking about colours, animations, or visual effects, we look at the purpose of the website. Who is visiting? What are they looking for? What needs to convince them? What should they do next? What needs to happen after they submit an enquiry? Those answers shape the structure, content, design, development, and conversion journey.",
  imageSrc: approachImg,
  imageAlt: "Website Development Approach",
  steps: [
    { num: '01', title: 'Discover', desc: 'Understand the business, audience, objectives, existing website, competitors, and priorities.' },
    { num: '02', title: 'Plan', desc: 'Create the sitemap, page hierarchy, content direction, user journeys, and functional requirements.' },
    { num: '03', title: 'Design', desc: 'Develop a visual system and interface that reflects the brand while keeping usability at the centre.' },
    { num: '04', title: 'Build', desc: 'Develop responsive pages with clean structure, appropriate functionality, and a strong technical foundation.' },
    { num: '05', title: 'Optimise', desc: 'Review performance, mobile usability, accessibility, SEO fundamentals, forms, navigation, and conversion paths.' },
    { num: '06', title: 'Launch', desc: 'Test the website across key devices and browsers before taking it live.' }
  ]
};

export const whatWeBuildData = {
  tagText: "WEBSITE DEVELOPMENT SERVICES",
  headingWords: [
    { text: "From" }, { text: "first" }, { text: "click" }, { text: "to" },
    { text: "final", italic: true }, { text: "conversion." }
  ],
  description: "Whether building a new website or redesigning an existing one, we build digital experiences aligned with your business goals.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Business Websites", desc: "Professional websites designed to communicate what your business does clearly and give visitors a reason to take action.", img: imgWwd1 },
    { num: "02", title: "Landing Pages", desc: "Focused pages designed around a specific campaign, offer, audience, or conversion objective.", img: imgWwd2 },
    { num: "03", title: "Corporate Websites", desc: "Structured digital experiences for organisations that need clear information architecture, credibility, and scalable content.", img: imgWwd3 },
    { num: "04", title: "Startup Websites", desc: "Lean, flexible websites that help emerging businesses explain their proposition and establish a credible digital presence.", img: imgWwd4 },
    { num: "05", title: "SaaS & Technology Websites", desc: "Product-focused experiences that make complex technology easier to understand, evaluate, and explore.", img: imgWwd5 },
    { num: "06", title: "Service Websites", desc: "Websites that organise multiple services into clear journeys so visitors can quickly find the solution relevant to them.", img: imgWwd6 },
    { num: "07", title: "Website Redesigns", desc: "Rework outdated websites around modern UX, clearer content, responsive design, stronger performance, and better conversion paths.", img: imgWwd7 },
    { num: "08", title: "Conversion-Focused Pages", desc: "Pages structured to reduce confusion, strengthen trust, and make the intended next action obvious.", img: imgWwd8 }
  ]
};

export const designUXData = {
  tagText: "UI / UX",
  headingWords: [
    { text: "Good" }, { text: "design" }, { text: "should" }, { text: "make" },
    { text: "the" }, { text: "next" }, { text: "step", italic: true }, { text: "obvious." }
  ],
  paragraphs: [
    "We don't design interfaces simply to fill a screen. Every design decision should have a clear reason behind it."
  ],
  items: [
    "Navigation should make sense.",
    "Content should have hierarchy.",
    "Buttons should look actionable.",
    "Important information should be easy to find.",
    "Forms should not create unnecessary friction.",
    "And the experience should remain intuitive when the screen becomes smaller."
  ],
  bottomText: "Every design decision should have a reason."
};

export const builtIntoExperienceData = {
  tagText: "MORE THAN VISUALS",
  headingWords: [
    { text: "The" }, { text: "details" }, { text: "users" }, { text: "notice" },
    { text: "—" }, { text: "and" }, { text: "the" }, { text: "ones", italic: true },
    { text: "they" }, { text: "don't." }
  ],
  description: "Behind every seamless website is a suite of foundational capabilities built into the experience:",
  bottomText: "We engineer websites that perform reliably across every modern browser and device.",
  metrics: [
    { num: '01', title: 'Responsive Design', desc: 'A consistent experience across desktop, tablet, and mobile devices.', pinColor: 'var(--accent-orange)', bg: 'rgba(224,131,38,0.08)', border: 'rgba(224,131,38,0.22)', text: 'var(--accent-orange)', rotate: 'rotate-[6deg]' },
    { num: '02', title: 'Clear Information Architecture', desc: 'Pages and navigation organised around how visitors actually find information.', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[7deg]' },
    { num: '03', title: 'Conversion Paths', desc: 'Clear calls to action that guide users towards enquiries, bookings, purchases, registrations, or other intended actions.', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[5deg]' },
    { num: '04', title: 'SEO Foundations', desc: 'Page structure, headings, metadata, URLs, internal linking, and other foundational elements considered during development.', pinColor: 'var(--brand-blue)', bg: 'rgba(64,107,158,0.08)', border: 'rgba(64,107,158,0.22)', text: 'var(--brand-blue)', rotate: '-rotate-[6deg]' },
    { num: '05', title: 'Performance', desc: 'Attention to page weight, image delivery, scripts, layout stability, and loading experience.', pinColor: 'var(--accent-orange)', bg: 'rgba(224,131,38,0.08)', border: 'rgba(224,131,38,0.22)', text: 'var(--accent-orange)', rotate: 'rotate-[8deg]' },
    { num: '06', title: 'Accessible Interfaces', desc: 'Interfaces designed with readable structure, keyboard usability, contrast, labels, and other accessibility considerations in mind.', pinColor: 'var(--brand-navy)', bg: 'rgba(30,47,87,0.06)', border: 'rgba(30,47,87,0.16)', text: 'var(--brand-navy)', rotate: '-rotate-[5deg]' },
    { num: '07', title: 'Content-Ready Structure', desc: 'A flexible page architecture that allows the business to expand its content and services without rebuilding everything from scratch.', pinColor: 'var(--brand-red-orange)', bg: 'rgba(239,88,46,0.08)', border: 'rgba(239,88,46,0.22)', text: 'var(--brand-red-orange)', rotate: 'rotate-[7deg]' },
    { num: '08', title: 'Analytics & Tracking', desc: 'Support for the measurement tools required to understand website behaviour and conversions.', pinColor: 'var(--brand-blue)', bg: 'rgba(64,107,158,0.08)', border: 'rgba(64,107,158,0.22)', text: 'var(--brand-blue)', rotate: '-rotate-[4deg]' }
  ]
};

export const seoReadyData = {
  tagText: "BUILT WITH SEARCH IN MIND",
  headingWords: [
    { text: "SEO" }, { text: "shouldn't" }, { text: "be" }, { text: "something" },
    { text: "added", italic: true }, { text: "after" }, { text: "launch." }
  ],
  paragraphs: [
    "A website's visual design and search visibility should not have to fight each other.",
    "We consider SEO fundamentals during the planning and development process — including logical page architecture, crawlable content, heading structure, URLs, internal linking, metadata, image optimisation, mobile experience, and technical performance."
  ],
  bottomText: "The goal is not to make a website look 'optimised'. The goal is to build a useful website that search engines and people can understand."
};

export const conversionData = {
  tagText: "FROM TRAFFIC TO ACTION",
  headingWords: [
    { text: "Getting" }, { text: "visitors" }, { text: "is" }, { text: "only" },
    { text: "half", italic: true }, { text: "the" }, { text: "job." }
  ],
  paragraphs: [
    "Your website may receive visitors from Google, social media, paid advertising, referrals, email, or direct traffic. The experience after that visit matters.",
    "We structure key pages around clear actions such as:"
  ],
  items: [
    "Enquire", "Book a consultation", "Request a quote", "Call / WhatsApp",
    "Submit a form", "Purchase / Checkout", "Register", "Start a conversation"
  ],
  bottomText: "The right conversion depends on the business and the visitor's stage in the journey."
};

export const whoThisIsForData = {
  tagText: "WE BUILD FOR DIFFERENT BUSINESS STAGES",
  headingWords: [
    { text: "A" }, { text: "website" }, { text: "should" }, { text: "fit" },
    { text: "the" }, { text: "business,", italic: true }, { text: "not" },
    { text: "the" }, { text: "other" }, { text: "way" }, { text: "around." }
  ],
  stages: [
    { title: "Startups", desc: "For businesses establishing their proposition, brand, audience, and digital presence.", img: imgStartups },
    { title: "Growing Businesses", desc: "For companies whose existing website no longer reflects their services, positioning, or growth.", img: imgGrowing },
    { title: "Established Brands", desc: "For organisations looking to modernise, restructure, or improve an existing digital experience.", img: imgEstablished },
    { title: "SaaS & Technology", desc: "For technology companies that need to make products, features, and value propositions easier to understand.", img: imgSaaS },
    { title: "Local Businesses", desc: "For businesses that need a clear, trustworthy website that supports local discovery and enquiries.", img: imgLocal },
    { title: "Service Businesses", desc: "For businesses where the website needs to explain expertise, services, proof, and the next step clearly.", img: imgCreators }
  ]
};

export const redesignData = {
  tagText: "ALREADY HAVE A WEBSITE?",
  headingWords: [
    { text: "You" }, { text: "may" }, { text: "not" }, { text: "need" },
    { text: "to" }, { text: "start" }, { text: "from", italic: true }, { text: "zero." }
  ],
  paragraphs: [
    "If your current website receives traffic but fails to communicate clearly, feels outdated, performs poorly on mobile, or makes conversion difficult, a redesign may be the better move.",
    "We can review the existing structure, content, user experience, technical foundation, and conversion paths to identify what should stay, what should change, and what should be rebuilt."
  ],
  bottomText: "Keep what works. Rebuild what holds you back."
};

export const whyAdsservWebsiteData = {
  tagText: "WHY BUILD WITH ADSSERV",
  headingWords: [
    { text: "We" }, { text: "think" }, { text: "about" }, { text: "the" },
    { text: "website" }, { text: "after", italic: true }, { text: "launch," }, { text: "too." }
  ],
  paragraphs: [
    "A website should not become a digital brochure that nobody updates.",
    "ADSSERV approaches web development with the wider digital ecosystem in mind: The website needs to work with your SEO, campaigns need somewhere useful to send traffic, social content needs somewhere to direct interested people, and analytics need to tell you what visitors actually do."
  ],
  boldParagraph: "That is why we connect design, development, content, search, and conversion thinking instead of treating them as isolated tasks."
};

export const faqData = {
  tagText: "WEBSITE DEVELOPMENT FAQ",
  headingWords: [
    { text: "Questions" }, { text: "to" }, { text: "ask" }, { text: "before" },
    { text: "building", italic: true }, { text: "a" }, { text: "new" }, { text: "website." }
  ],
  faqs: [
    { q: "What does a website development agency do?", a: "A website development agency plans, designs, builds, tests, and launches websites based on a business's objectives and user needs. Depending on the project, the work can include UX, UI design, responsive development, content structure, SEO foundations, integrations, analytics, and ongoing improvements." },
    { q: "How much does website development cost?", a: "Website development costs vary according to the number of pages, design requirements, functionality, integrations, content, technology, and project complexity. A suitable scope should be defined before providing an accurate project estimate." },
    { q: "How long does it take to build a website?", a: "The timeline depends on the website's size, functionality, content readiness, design requirements, feedback process, and technical complexity. A simple business website generally requires less work than a large corporate, ecommerce, or SaaS website." },
    { q: "Can you redesign my existing website?", a: "Yes. A redesign can improve an existing site's structure, user experience, visual design, mobile experience, content hierarchy, technical performance, SEO foundations, and conversion paths without automatically requiring a complete rebuild." },
    { q: "Will the website be mobile-friendly?", a: "Responsive development is used so the website can adapt to different screen sizes and devices. Mobile usability should be tested alongside desktop rather than treated as a final adjustment." },
    { q: "Do you build SEO-friendly websites?", a: "Yes. SEO considerations can be incorporated into the website architecture and development process, including crawlable content, headings, URLs, metadata, internal linking, image optimisation, mobile experience, and technical foundations." },
    { q: "Can you build a website for a SaaS company?", a: "Yes. SaaS websites can be structured around product understanding, use cases, features, benefits, audiences, proof, pricing, FAQs, and conversion paths so visitors can evaluate the product more easily." },
    { q: "Can you create landing pages for Google Ads?", a: "Yes. Landing pages can be designed around a specific campaign, audience, offer, and conversion objective. The page experience should align with the advertisement and make the intended next action clear." },
    { q: "Can website development include analytics and conversion tracking?", a: "Yes. Analytics and conversion tracking can be incorporated so businesses can understand important actions such as form submissions, calls, button clicks, purchases, bookings, or other defined conversions." },
    { q: "What makes a website good for conversions?", a: "A conversion-focused website makes the value proposition clear, builds appropriate trust, reduces friction, and provides an obvious next action. The best conversion path depends on the business, audience, offer, and stage of the customer journey." }
  ]
};

export const relatedServicesData = {
  tagText: "THE WEBSITE IS PART OF THE SYSTEM",
  headingWords: [
    { text: "Build" }, { text: "the" }, { text: "rest" }, { text: "of" }, { text: "the" },
    { text: "digital", italic: true }, { text: "journey" }, { text: "around" }, { text: "it." }
  ],
  services: [
    { title: "Performance Marketing", desc: "Send paid traffic to pages designed around the campaign objective.", cta: "Explore Performance Marketing", href: "/services/performance-marketing", icon: Megaphone, img: imgPerf },
    { title: "SEO Services", desc: "Build organic visibility and help the right people discover your website.", cta: "Explore SEO Services", href: "/services/seo-services", icon: Search, img: imgSEO },
    { title: "Social Media Marketing", desc: "Create social content and campaigns that bring people back to your digital home.", cta: "Explore Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, img: imgSocial },
    { title: "Branding Solutions", desc: "Build a visual and verbal identity that remains consistent across the website and wider marketing.", cta: "Explore Branding Solutions", href: "/services/branding-solutions", icon: Palette, img: imgBrand },
    { title: "Content Writing", desc: "Create clear website copy that helps visitors understand the offer and take action.", cta: "Explore Content Writing", href: "/services/content-writing", icon: PenLine, img: imgContent }
  ]
};

export const ctaData = {
  tagText: "YOUR NEXT WEBSITE SHOULD DO MORE THAN LOOK GOOD",
  headingText: "Let's build a website people can actually use.",
  description: "Tell us what you're building, what isn't working today, and what you want the new website to achieve. We'll help turn that into a clearer digital experience.",
  button1Text: "Start My Website",
  button2Text: "Talk to ADSSERV"
};
