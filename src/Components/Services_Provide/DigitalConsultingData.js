import { Search, Share2, Megaphone, Monitor, Palette } from 'lucide-react';
import { Target, BarChart2, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import bgImage from '../../assets/Services/Digital Consulting.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgVideo from '../../assets/SocailMedia/Educate.webp';
import imgContent from '../../assets/SocailMedia/Entertain.webp';
import imgPaid from '../../assets/SocailMedia/Convert.webp';
import imgCampaign from '../../assets/SocailMedia/Build Trust.webp';
import approachImg from '../../assets/SocailMedia/Connect.webp';
import imgSEO from '../../assets/SocailMedia/Educate.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "Digital Consulting",
  tagText: "DIGITAL CONSULTING",
  headingWords: [
    { text: "Strategy" }, { text: "That" }, { text: "Connects" }, { text: "Business" },
    { text: "Goals", italic: true }, { text: "With" }, { text: "Digital" }, { text: "Action." }
  ],
  description1: "A good digital strategy shouldn't just be a theoretical presentation. It needs to provide a clear direction for what happens next.",
  description2: "ADSSERV bridges the gap between high-level business objectives and practical digital execution, helping you make better decisions about where to invest, what to fix, and how to grow.",
  button1Text: "Discuss Your Strategy",
  button2Text: "Explore Services"
};

export const problemData = {
  tagText: "THE GAP BETWEEN GOALS AND EXECUTION",
  headingWords: [
    { text: "Looking" }, { text: "professional" }, { text: "isn't" }, { text: "the" },
    { text: "same", italic: true }, { text: "as" }, { text: "being" }, { text: "effective." }
  ],
  paragraphs: ["Many businesses know where they want to go, but struggle to connect that destination with their daily digital activity."],
  items: [
    "Resources spread too thin across too many channels.",
    "Marketing activity that isn't measured against business outcomes.",
    "A disconnect between the brand promise and the digital experience."
  ],
  bottomText1: "The result is activity without progress.",
  bottomText2: "We help fix that."
};

export const whatWeHelpSolveData = {
  tagText: "WHAT WE HELP SOLVE",
  headingWords: [
    { text: "Clarity" }, { text: "before" }, { text: "execution", italic: true }, { text: "." }
  ],
  description: "Consulting provides the foundation for better decisions across your entire digital presence.",
  buttonText: "Solve These Problems",
  icons: [Target, BarChart2, Zap],
  services: [
    { num: "01", title: "Unclear Priorities", desc: "Stop guessing which channels deserve investment and focus on the activities that actually move the needle.", img: imgCampaign },
    { num: "02", title: "Fragmented Presence", desc: "Connect your website, social media, content and paid campaigns into a single, cohesive system.", img: imgSocial },
    { num: "03", title: "Poor Measurement", desc: "Move beyond vanity metrics and understand how digital activity is actually contributing to business growth.", img: imgWeb },
    { num: "04", title: "Stalled Growth", desc: "Identify the bottlenecks in your digital customer journey that are preventing conversion and retention.", img: imgVideo }
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

export const consultingServicesData = {
  tagText: "CONSULTING FOCUS AREAS",
  headingWords: [
    { text: "Expertise" }, { text: "where" }, { text: "you" }, { text: "need" }, { text: "it", italic: true }, { text: "most." }
  ],
  description: "Our consulting engagements can cover the entire digital ecosystem or focus on specific areas of improvement.",
  buttonText: "Discuss Your Needs",
  icons: [Target, BarChart2, Zap],
  services: [
    { num: "01", title: "Digital Strategy", desc: "Develop a comprehensive plan that aligns your digital presence with your overarching business objectives.", img: imgCampaign },
    { num: "02", title: "Brand Positioning", desc: "Clarify your market position, define your differentiation and ensure your digital presence communicates it effectively.", img: imgSocial },
    { num: "03", title: "Go-to-Market", desc: "Plan the digital launch strategy for new products, services or businesses entering the market.", img: imgWeb },
    { num: "04", title: "Audience & Journey", desc: "Map how your customers discover, evaluate and choose your business, and identify where you are losing them.", img: imgVideo },
    { num: "05", title: "Channel Strategy", desc: "Determine the specific roles your website, social media, SEO and paid advertising should play in your growth.", img: imgPaid },
    { num: "06", title: "Performance Audit", desc: "Review your current digital marketing activity to uncover inefficiencies and opportunities for improvement.", img: imgContent }
  ]
};

export const whoItsForData = {
  tagText: "WHO IT'S FOR",
  headingWords: [
    { text: "Digital" }, { text: "consulting" }, { text: "for" }, { text: "different" },
    { text: "stages", italic: true }, { text: "of" }, { text: "growth" }
  ],
  stages: [
    { title: 'New Ventures', desc: 'Establish a strong digital foundation and go-to-market strategy before scaling investment.', image: 'https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800' },
    { title: 'Growing Businesses', desc: 'Identify what is working, where growth is being limited and which opportunities deserve more attention.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { title: 'Established Brands', desc: 'Review existing digital activity, uncover gaps and create a clearer direction for the next stage.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { title: 'Marketing Teams', desc: 'Bring an external strategic perspective when your team needs help with priorities, channels, measurement or execution planning.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' }
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
  tagText: "FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "about" },
    { text: "digital", italic: true }, { text: "consulting" }
  ],
  faqs: [
    { q: "What is digital consulting?", a: "Digital consulting involves analysing your business goals and current digital presence to develop a strategic plan that improves performance, efficiency and growth." },
    { q: "How is consulting different from an agency service?", a: "Consulting focuses on the 'what' and 'why'—strategy, auditing, planning and direction. Agency services focus on the 'how'—the actual execution of the work (like running ads or building a website)." },
    { q: "Do you also execute the strategy?", a: "Yes. ADSSERV is a full-service digital agency. We can develop the strategy and then execute it through our branding, website, SEO, social media, content and performance marketing teams." },
    { q: "Can you consult for an existing in-house team?", a: "Yes. We often work alongside internal marketing teams to provide strategic direction, external perspective, specialised knowledge or an objective audit of their current activity." },
    { q: "What deliverables do I get from a consulting project?", a: "Deliverables depend on the project but typically include audit reports, strategic recommendations, digital roadmaps, channel plans, audience insights or specific go-to-market strategies." },
    { q: "How long does a consulting engagement last?", a: "It varies. Some projects are short, focused audits (e.g., 2-4 weeks), while others involve ongoing strategic guidance over several months to support execution." }
  ]
};

export const relatedServicesData = {
  tagText: "TURN STRATEGY INTO ACTION",
  headingWords: [
    { text: 'A' }, { text: 'plan' }, { text: 'needs' }, { text: 'the' },
    { text: 'right', italic: true }, { text: 'execution' }, { text: 'to' }, { text: 'succeed.' }
  ],
  services: [
    { title: 'Branding Solutions', desc: 'Build an identity that supports the strategic direction.', cta: 'Explore Branding', href: '/services/branding-solutions', icon: Palette, img: imgBrand },
    { title: 'Website Development', desc: 'Create a digital home built for the customer journey.', cta: 'Explore Websites', href: '/services/website-development', icon: Monitor, img: imgWeb },
    { title: 'SEO Services', desc: 'Align your website structure with search intent.', cta: 'Explore SEO', href: '/services/seo-services', icon: Search, img: imgSEO },
    { title: 'Social Media Marketing', desc: 'Execute the content and channel strategy.', cta: 'Explore Social', href: '/services/social-media-marketing', icon: Share2, img: imgSocial },
    { title: 'Performance Marketing', desc: 'Deploy paid campaigns against specific business goals.', cta: 'Explore Performance', href: '/services/performance-marketing', icon: Megaphone, img: imgPaid }
  ]
};

export const ctaData = {
  tagText: "READY TO START?",
  headingText: "You don't need another list of marketing ideas.",
  description: "You need to know which move makes sense next. Tell us where your digital marketing is today, where you want it to go, and what's getting in the way. We'll start there.",
  button1Text: "Talk to a Digital Strategist",
  button2Text: "Contact ADSSERV"
};
