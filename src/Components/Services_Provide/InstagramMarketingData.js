import { Camera, Layout, Share2, MessageCircle, BarChart2, CheckCircle2, PlayCircle, Palette, Monitor, Search, Megaphone } from 'lucide-react';
import bgImage from '../../assets/Services/Instragram marketing.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgVideo from '../../assets/SocailMedia/Educate.webp';
import imgContent from '../../assets/SocailMedia/Entertain.webp';
import imgPaid from '../../assets/SocailMedia/Convert.webp';
import imgCampaign from '../../assets/SocailMedia/Build Trust.webp';
import approachImg from '../../assets/SocailMedia/Entertain.webp';
import imgSEO from '../../assets/SocailMedia/Educate.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "Instagram Marketing",
  tagText: "INSTAGRAM MARKETING",
  headingWords: [
    { text: "More" }, { text: "Than" }, { text: "Just" }, { text: "A" },
    { text: "Nice", italic: true }, { text: "Grid." }
  ],
  description1: "A good Instagram presence looks professional, but a great one actually does something for your business.",
  description2: "ADSSERV helps brands use Instagram to build awareness, connect with their audience and turn attention into measurable business results.",
  button1Text: "Improve Your Instagram",
  button2Text: "Explore Services"
};

export const problemData = {
  tagText: "THE PROBLEM WITH MOST INSTAGRAM ACCOUNTS",
  headingWords: [
    { text: "Posting" }, { text: "isn't" }, { text: "a" }, { text: "strategy", italic: true }, { text: "." }
  ],
  paragraphs: ["Many businesses treat Instagram as an obligation. They post just to show they are active, without a clear reason for why the post exists or what it should achieve."],
  items: [
    "A grid that looks good but generates no real engagement.",
    "Followers who never turn into customers or clients.",
    "Inconsistent posting that leaves audiences confused about what the brand actually stands for."
  ],
  bottomText1: "The result is a lot of effort for very little return.",
  bottomText2: "We fix that."
};

export const whatWeDoData = {
  tagText: "SERVICES",
  headingWords: [
    { text: "Instagram" }, { text: "is" }, { text: "more" }, { text: "than" },
    { text: "a", italic: true }, { text: "grid." }
  ],
  description: "We manage the different parts of Instagram so they work together as a single, cohesive strategy.",
  buttonText: "Discuss Your Needs",
  icons: [Camera, Layout, Share2],
  services: [
    { num: "01", title: "Strategy & Planning", desc: "Defining what the account should achieve, who it's for, and what content pillars will get us there.", img: imgCampaign },
    { num: "02", title: "Content Creation", desc: "Producing the photography, graphics, videos and written captions required to bring the strategy to life.", img: imgContent },
    { num: "03", title: "Reels & Short-Form", desc: "Developing platform-native video content designed for reach, engagement and current audience behaviours.", img: imgVideo },
    { num: "04", title: "Community Management", desc: "Engaging with followers, responding to comments and building an active, loyal community.", img: imgSocial },
    { num: "05", title: "Paid Amplification", desc: "Using targeted ads and boosted posts to ensure the best content reaches the right people.", img: imgPaid },
    { num: "06", title: "Reporting & Analytics", desc: "Tracking growth, engagement and conversions to understand what's working and what to do next.", img: imgWeb }
  ]
};

export const approachData = {
  tagText: "HOW WE APPROACH IT",
  headingWords: [
    { text: "A" }, { text: "good" }, { text: "Instagram" }, { text: "strategy" },
    { text: "starts", italic: true }, { text: "before" }, { text: "the" }, { text: "first" }, { text: "post." }
  ],
  imageSrc: approachImg,
  steps: [
    { num: '01', title: 'Understand', desc: 'We look at your brand, audience, offer, competitors, existing presence and business objectives.' },
    { num: '02', title: 'Position', desc: 'We identify what the account should be known for and how it should communicate differently.' },
    { num: '03', title: 'Plan', desc: 'We build content pillars, formats, themes, campaigns and priorities around the strategy.' },
    { num: '04', title: 'Create', desc: 'We turn the strategy into platform-appropriate content, creative concepts, Reels, Stories and campaigns.' },
    { num: '05', title: 'Learn', desc: 'We review performance, audience behaviour and content signals to understand what deserves more attention.' },
    { num: '06', title: 'Improve', desc: 'The strategy evolves based on what the audience responds to and what the business needs next.' }
  ]
};

export const whoItsForData = {
  tagText: "WHO IT'S FOR",
  headingWords: [
    { text: "Different" }, { text: "businesses" }, { text: "need" }, { text: "Instagram" },
    { text: "to", italic: true }, { text: "do" }, { text: "different" }, { text: "things." }
  ],
  stages: [
    { title: 'E-commerce & Retail', desc: 'Drive product discovery, showcase the lifestyle around the brand and convert attention into sales.', image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800' },
    { title: 'Service Businesses', desc: 'Demonstrate expertise, share results, build trust and generate qualified enquiries.', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800' },
    { title: 'Local & Hospitality', desc: 'Showcase the experience, share the atmosphere and give people a reason to visit.', image: 'https://images.unsplash.com/photo-1559136555-e4616d9d15e2?auto=format&fit=crop&q=80&w=800' },
    { title: 'B2B Brands', desc: 'Humanise the company, highlight company culture, share insights and build industry authority.', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' }
  ]
};

export const whyAdsservInstagramData = {
  tagText: "WHY ADSSERV",
  headingWords: [
    { text: "We" }, { text: "look" }, { text: "at" }, { text: "the" },
    { text: "whole", italic: true }, { text: "picture." }
  ],
  paragraphs: [
    "ADSSERV doesn't just manage Instagram in isolation. We understand how it fits into your broader digital strategy.",
    "Because we also handle website development, SEO, branding, and paid media, we know how to connect your Instagram presence to the rest of your business."
  ],
  boldParagraph: "The goal isn't just to build an audience. It's to build a business."
};

export const faqData = {
  tagText: "QUESTIONS BUSINESSES ASK",
  headingWords: [
    { text: "Instagram" }, { text: "marketing," }, { text: "without", italic: true }, { text: "the" }, { text: "mystery." }
  ],
  faqs: [
    { q: "Do you handle content creation?", a: "Yes. We can plan, direct and produce the photography, video, graphics and written content required for your Instagram strategy." },
    { q: "How often should we post?", a: "It depends on the strategy, budget and audience. Consistency matters more than frequency. We'll recommend a posting schedule that is sustainable and effective for your business." },
    { q: "Do you respond to comments and messages?", a: "Community management can be included as part of our service. We'll agree on guidelines for how we represent your brand and when to escalate specific questions to your team." },
    { q: "How do you grow an account?", a: "We focus on organic growth through high-quality content (especially Reels), strategic partnerships, clear positioning and consistent community engagement. Where appropriate, we use paid amplification to accelerate reach." },
    { q: "Can you help with Instagram Ads?", a: "Yes. We run targeted paid social campaigns to reach new audiences, promote specific offers, or drive traffic and conversions." },
    { q: "How do we know if it's working?", a: "We report on the metrics that align with your goals—whether that's reach and follower growth for awareness, engagement rate for community building, or clicks and conversions for direct response." }
  ]
};

export const relatedServicesData = {
  tagText: "INSTAGRAM WORKS BEST AS PART OF THE SYSTEM",
  headingWords: [
    { text: 'Connect' }, { text: 'social' }, { text: 'to' }, { text: 'the' },
    { text: 'rest', italic: true }, { text: 'of' }, { text: 'your' }, { text: 'digital' }, { text: 'strategy.' }
  ],
  services: [
    { title: 'Branding Solutions', desc: 'Ensure your identity is clear across every post.', cta: 'Explore Branding', href: '/services/branding-solutions', icon: Palette, img: imgBrand },
    { title: 'Content Writing', desc: 'Give your visual content a stronger voice.', cta: 'Explore Content', href: '/services/content-writing', icon: Layout, img: imgContent },
    { title: 'Video Production', desc: 'Create high-quality Reels and short-form video.', cta: 'Explore Video', href: '/services/video-production', icon: PlayCircle, img: imgVideo },
    { title: 'Website Development', desc: 'Give your audience a better place to land.', cta: 'Explore Websites', href: '/services/website-development', icon: Monitor, img: imgWeb },
    { title: 'Performance Marketing', desc: 'Turn organic reach into targeted paid campaigns.', cta: 'Explore Performance', href: '/services/performance-marketing', icon: Megaphone, img: imgPaid }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE INSTAGRAM WORK HARDER?",
  headingText: "Give people a reason to stop scrolling.",
  description: "Your Instagram doesn't need more random posts. It needs a clearer reason to exist, a stronger point of view and content people actually want to see. Let's build an Instagram presence that looks like your brand, speaks to your audience and supports what you're trying to achieve.",
  button1Text: "Build My Instagram Strategy",
  button2Text: "Talk to ADSSERV"
};
