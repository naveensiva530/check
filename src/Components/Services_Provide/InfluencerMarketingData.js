import { Users, Filter, BarChart2, MessageCircle, PlayCircle, PlusCircle, Share2, Palette, Monitor, Search, Megaphone } from 'lucide-react';
import bgImage from '../../assets/Services/Influncer Marketing.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgVideo from '../../assets/SocailMedia/Educate.webp';
import imgContent from '../../assets/SocailMedia/Entertain.webp';
import imgPaid from '../../assets/SocailMedia/Convert.webp';
import imgCampaign from '../../assets/SocailMedia/Build Trust.webp';
import imgSEO from '../../assets/SocailMedia/Educate.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "Influencer Marketing",
  tagText: "INFLUENCER MARKETING",
  headingWords: [
    { text: "Creator" }, { text: "Campaigns" }, { text: "That" }, { text: "Feel" }, { text: "Like" },
    { text: "Content,", italic: true }, { text: "Not" }, { text: "Advertising" }
  ],
  description1: "The right creator can make a brand feel relevant before the audience even realises they're being introduced to it.",
  description2: "ADSSERV connects brands with creators who fit the audience, platform, message, and campaign objective — then builds the campaign around content people actually want to watch, share, save, and remember. Because influencer marketing works better when the creator feels like a natural fit, not a rented billboard.",
  button1Text: "Plan My Creator Campaign",
  button2Text: "Explore Our Services"
};

export const problemData = {
  tagText: "THE CREATOR ISN'T THE STRATEGY",
  headingWords: [
    { text: "A" }, { text: "big" }, { text: "following" }, { text: "doesn't" },
    { text: "automatically" }, { text: "mean" }, { text: "the" }, { text: "right", italic: true },
    { text: "audience." }
  ],
  paragraphs: [
    "Follower count is easy to see. Audience relevance isn't.",
    "A creator can have a huge audience and still be completely wrong for your brand, product, location, category, or campaign objective.",
    "That's why we look beyond surface-level numbers.",
    "We consider who the creator speaks to, what their audience responds to, how they communicate, which platforms they actually understand, and whether their content style makes sense for the brand."
  ],
  items: [],
  bottomText1: "The goal is not simply to get a creator to post.",
  bottomText2: "The goal is to make the collaboration make sense."
};

export const whatWeDoData = {
  tagText: "CAMPAIGN TYPES",
  headingWords: [
    { text: "Matching" }, { text: "the" }, { text: "campaign", italic: true }, { text: "to" },
    { text: "the" }, { text: "objective." }
  ],
  description: "Different goals require different types of creator partnerships.",
  buttonText: "Discuss Campaign Types",
  icons: [Users, Filter, BarChart2],
  services: [
    { num: "01", title: "Brand Awareness", desc: "Reach new, relevant audiences through trusted voices to introduce a product, service, or brand message.", img: imgCampaign },
    { num: "02", title: "Product Launches", desc: "Coordinate multiple creators to build momentum and visibility around a new release or announcement.", img: imgSocial },
    { num: "03", title: "Direct Response", desc: "Campaigns structured around specific actions—sign-ups, purchases, or downloads—using targeted offers and tracking.", img: imgPaid },
    { num: "04", title: "UGC Creation", desc: "Partner with creators specifically to generate authentic, high-quality content that can be used in your own paid ads and organic channels.", img: imgContent }
  ]
};

export const whyAdsservInfluencerData = {
  tagText: "WHY ADSSERV",
  headingWords: [
    { text: "We" }, { text: "look" }, { text: "past" }, { text: "the" },
    { text: "vanity", italic: true }, { text: "metrics." }
  ],
  paragraphs: [
    "ADSSERV doesn't just match brands with big numbers. We look for alignment in audience, values, and engagement.",
    "Because we manage campaigns across social, paid, and content channels, we understand how creator content should fit into your broader digital strategy."
  ],
  boldParagraph: "The goal isn't just to get your product in a video. The goal is to get it in front of the right people."
};

export const faqData = {
  tagText: "FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "about" },
    { text: "influencer", italic: true }, { text: "marketing" }
  ],
  faqs: [
    { q: "How do you find the right creators?", a: "We look at audience demographics, engagement rates, content quality, previous brand partnerships, and alignment with your brand values—not just follower counts." },
    { q: "What is the difference between a micro and macro influencer?", a: "Micro-influencers generally have smaller (10k-50k) but highly engaged, niche audiences. Macro-influencers have larger followings (100k+) and provide broader reach. The right choice depends on your campaign goals and budget." },
    { q: "Can we use the creator's content in our own ads?", a: "This depends on the usage rights negotiated in the contract. We typically secure rights to repurpose creator content (UGC) for your own paid and organic channels, as this often drives strong performance." },
    { q: "How is influencer marketing priced?", a: "Pricing varies widely based on the creator's audience size, engagement rate, platform, deliverables (e.g., a Story vs. a dedicated YouTube video), and usage rights. We help negotiate fair rates and manage the budget." },
    { q: "How do you measure the success of a campaign?", a: "Measurement depends on the objective. We track metrics like reach, impressions, engagement rate, click-throughs (via tracked links), promo code usage, and overall content performance." },
    { q: "Do you handle the contracts and payments?", a: "Yes. When managing a campaign, we handle the end-to-end process including outreach, negotiation, contracts, briefing, content approval, and payment." }
  ]
};

export const relatedServicesData = {
  tagText: "CREATOR CAMPAIGNS DON'T HAVE TO WORK ALONE",
  headingWords: [
    { text: "Connect" }, { text: "the" }, { text: "campaign" }, { text: "to" }, { text: "the" },
    { text: "rest" }, { text: "of" }, { text: "your", italic: true }, { text: "digital" }, { text: "strategy." }
  ],
  services: [
    { title: 'Social Media Marketing', desc: 'Publish and amplify creator content on your own channels.', cta: 'Explore Social', href: '/services/social-media-marketing', icon: Share2, img: imgSocial },
    { title: 'Performance Marketing', desc: 'Turn high-performing creator content into paid ads.', cta: 'Explore Paid Ads', href: '/services/performance-marketing', icon: Megaphone, img: imgPaid },
    { title: 'Video Production', desc: 'Support creator campaigns with professional brand video.', cta: 'Explore Video', href: '/services/video-production', icon: PlayCircle, img: imgVideo },
    { title: 'Branding Solutions', desc: 'Ensure the brand identity is clear when audiences click through.', cta: 'Explore Branding', href: '/services/branding-solutions', icon: Palette, img: imgBrand }
  ]
};

export const ctaData = {
  tagText: "READY TO START?",
  headingText: "Let's find the creators your audience actually wants to hear from.",
  description: "Tell us about the brand, audience, campaign, and goal. We'll help shape the creator strategy around what you actually want the campaign to achieve.",
  button1Text: "Plan My Creator Campaign",
  button2Text: "Talk to ADSSERV"
};
