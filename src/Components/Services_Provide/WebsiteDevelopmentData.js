import { Palette, PenLine, Search, Share2, Megaphone, Users, Briefcase, Camera } from 'lucide-react';
import bgImage from '../../assets/Services/Website Development.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';
import imgContent from '../../assets/SocailMedia/Educate.webp';
import imgSEO from '../../assets/SocailMedia/Laptop.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgPerf from '../../assets/SocailMedia/Convert.webp';
import imgInfluencer from '../../assets/SocailMedia/Entertain.webp';
import imgConsult from '../../assets/SocailMedia/Build Trust.webp';
import imgInsta from '../../assets/SocailMedia/Connect.webp';

export const heroData = {
  bgImage,
  title: "Website Development",
  tagText: "WEBSITE DEVELOPMENT",
  headingWords: [
    { text: "Websites" }, { text: "Built" }, { text: "to" }, { text: "Be" },
    { text: "Seen,", italic: true }, { text: "Used" }, { text: "and" }, { text: "Remembered" }
  ],
  description1: "Your website is not just the place people go to find your business. It is where they decide whether to trust you, understand what you offer, and take the next step.",
  description2: "ADSSERV creates modern websites that bring together thoughtful design, clear content, responsive development, SEO foundations, and conversion-focused user experiences — so the site looks right and works for the business behind it.",
  button1Text: "Start My Website",
  button2Text: "View Our Services"
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

export const whyAdsservWebsiteData = {
  tagText: "WHY WEBSITE DEVELOPMENT WITH ADSSERV",
  headingWords: [
    { text: "We" }, { text: "build" }, { text: "websites" }, { text: "around" },
    { text: "what" }, { text: "matters.", italic: true }
  ],
  paragraphs: [
    "A website is one of the few assets that keeps working for the business long after the project is delivered.",
    "How well it works depends on how it's built — and why.",
    "A website developed with ADSSERV is shaped by:"
  ],
  items: [
    "We start with the business, the audience, and the intended outcome.",
    "Every recommendation is justified.",
    "Structure, copy, and design are treated as one conversation.",
    "Performance, accessibility, and SEO aren't afterthoughts.",
    "The website is built to be updated — not rebuilt.",
    "We keep working with you after launch."
  ],
  boldParagraph: "The result is a website that doesn't just look the part — it does its part."
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

export const structureData = {
  tagText: "BUILT AROUND THE USER JOURNEY",
  headingWords: [
    { text: "Every" }, { text: "page" }, { text: "should" }, { text: "answer" },
    { text: "the", italic: true }, { text: "next" }, { text: "question." }
  ],
  stages: [
    { title: 'Discover', desc: 'Who are you and what do you do?', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Understand', desc: 'Why does your product or service matter to me?', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Trust', desc: 'Why should I believe you?', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { title: 'Evaluate', desc: 'Is this the right solution for my situation?', image: 'https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800' },
    { title: 'Act', desc: 'What should I do next?', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Continue', desc: 'What happens after I enquire, book, buy, or contact you?', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' }
  ]
};
