import { Monitor, PenTool, Share2, Megaphone, Palette } from 'lucide-react';
import bgImage from '../../assets/Services/SEO.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgContent from '../../assets/SocailMedia/Educate.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgPerf from '../../assets/SocailMedia/Convert.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "SEO Services",
  tagText: "SEO SERVICES",
  headingWords: [
    { text: "SEO" }, { text: "That" }, { text: "Helps" }, { text: "the" },
    { text: "Right", italic: true }, { text: "People" }, { text: "Find" }, { text: "You" }
  ],
  description1: "Getting traffic is not the whole point. The real goal is to become visible when someone is actively searching for what your business offers — and then give them a reason to choose you.",
  description2: "ADSSERV builds SEO strategies around technical foundations, search intent, content, authority, local visibility, and continuous improvement. No shortcuts. No keyword stuffing. No promises of overnight rankings. Just search strategy built around how people actually discover businesses.",
  button1Text: "Grow My Organic Visibility",
  button2Text: "Talk to ADSSERV"
};

export const problemData = {
  tagText: "THE REAL PROBLEM",
  headingWords: [
    { text: "Most" }, { text: "SEO" }, { text: "problems" }, { text: "aren't" },
    { text: "really", italic: true }, { text: "about" }, { text: "rankings." }
  ],
  paragraphs: [
    "Many businesses chase rankings without considering whether those rankings will actually reach relevant people.",
    "A page that ranks for the wrong search term brings the wrong audience. Traffic that doesn't convert serves no business purpose."
  ],
  items: [
    "Ranking for high-volume keywords that don't match your actual offer.",
    "Technical issues that prevent search engines from properly crawling and indexing your content.",
    "Content that exists but doesn't satisfy the intent behind the searches it appears in."
  ],
  bottomText1: "Search visibility is only valuable if it connects the right people with the right offer.",
  bottomText2: "We focus on that connection."
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
    { title: "Startups", desc: "Build search foundations before competitors occupy the space around your category.", image: "https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800" },
    { title: "Growing Businesses", desc: "Expand visibility around services, products, locations, and high-intent searches.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800" },
    { title: "Local Businesses", desc: "Capture relevant searches from people looking for businesses and services in specific areas.", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800" },
    { title: "SaaS & Technology", desc: "Build discoverability across product, use-case, problem, comparison, and educational searches.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" },
    { title: "Established Brands", desc: "Strengthen existing organic visibility while identifying technical, content, and competitive gaps.", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
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
