import { Camera, Layout, Share2, PlayCircle, Palette, Search, Megaphone } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/Instragram Marketing.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Instagram What We Do Images from assets/Servicess/InstagramMarketing/WhatWeDo
import imgInstagramStrategy from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Instagram Strategy.webp';
import imgContentPlanning from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Content Planning.webp';
import imgInstagramContent from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Instagram Content.webp';
import imgReelsStrategy from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Reels Strategy.webp';
import imgStories from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Stories.webp';
import imgCreativeDirection from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Creative Direction.webp';
import imgCommunityEngagement from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Community Engagement.webp';
import imgInstagramCampaigns from '../../assets/Servicess/InstagramMarketing/WhatWeDo/Instagram Campaigns.webp';

// Related Services Images from assets/Servicess/RelatedServices
import imgRelSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgRelPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgRelVideo from '../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';
import imgRelContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgRelBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import imgRelSEO from '../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';

// Who It's For Images from assets/Servicess/WhoThisIsFor
import imgForBrands from '../../assets/Servicess/WhoThisIsFor/Consumer Brands.webp';
import imgForStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgForCreators from '../../assets/Servicess/WhoThisIsFor/Creators & Personal Brands.webp';
import imgForLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgForSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgForServiceBiz from '../../assets/Servicess/WhoThisIsFor/Service Businesses.webp';

export {
  imgInstagramStrategy,
  imgContentPlanning,
  imgInstagramContent,
  imgReelsStrategy,
  imgStories,
  imgCreativeDirection,
  imgCommunityEngagement,
  imgInstagramCampaigns,
  imgForBrands,
  imgForStartups,
  imgForCreators,
  imgForLocal,
  imgForSaaS,
  imgForServiceBiz
};

export const heroData = {
  bgImage,
  title: "Instagram Marketing",
  breadcrumbText: "Instagram Marketing",
  tagText: "INSTAGRAM MARKETING",
  headingWords: [
    { text: "Make" }, { text: "Your" }, { text: "Brand" },
    { text: "Worth", italic: true }, { text: "Following." }
  ],
  description1: "Instagram is more than a place to post. It is where people discover brands, judge them, follow what they create and decide whether they want to know more.",
  description2: "ADSSERV builds Instagram strategies around your audience, content, brand and business goals — from what you post to how people move from a post to your next conversion.",
  button1Text: "Build My Instagram Strategy",
  button2Text: "Explore Our Services",
  button2Link: "/services/instagram-marketing#instagram-marketing-what-we-do"
};

export const introData = {
  tagText: "MORE THAN POSTING",
  headingWords: [
    { text: "Your" }, { text: "Instagram" }, { text: "should" }, { text: "feel" },
    { text: "like" }, { text: "a" }, { text: "brand,", italic: true }, { text: "not" },
    { text: "a" }, { text: "content" }, { text: "calendar." }
  ],
  paragraphs: [
    "Posting consistently is only one part of Instagram marketing. The bigger question is whether your content gives the right people a reason to stop, watch, engage, follow and eventually take action.",
    "We combine content, creative direction, audience thinking and platform-aware strategy to build an Instagram presence that feels recognisable while supporting the wider goals of your business."
  ]
};

export const problemData = {
  tagText: "WHERE INSTAGRAM GOES WRONG",
  headingWords: [
    { text: "Posting" }, { text: "more" }, { text: "doesn't" }, { text: "automatically" },
    { text: "mean", italic: true }, { text: "growing" }, { text: "more." }
  ],
  paragraphs: [
    "A busy Instagram account can still struggle to build meaningful attention. Repeated formats, unclear messaging, weak hooks or content that isn't made for the platform can make a brand easy to scroll past.",
    "We focus on the parts that make Instagram work together — positioning, content, creative, consistency, audience behaviour and the journey beyond the post."
  ],
  cards: [
    { title: "No Clear Direction", desc: "Your account is active, but there is no clear content strategy connecting posts to business goals." },
    { title: "Content Looks the Same", desc: "Your feed is polished, but it doesn't create enough distinction, personality or recognition." },
    { title: "Low Engagement", desc: "People may see the content, but it isn't giving them a strong enough reason to interact, share, save or follow." },
    { title: "Attention Without Action", desc: "Content gets views or engagement, but there is no clear journey from Instagram interest to enquiry, website visit or purchase." }
  ]
};

export const whatWeDoData = {
  tagText: "INSTAGRAM SERVICES",
  headingWords: [
    { text: "Everything" }, { text: "your" }, { text: "Instagram" }, { text: "presence" },
    { text: "needs" }, { text: "to" }, { text: "work", italic: true }, { text: "harder." }
  ],
  description: "The exact mix depends on your brand, audience and objectives. We build the Instagram system around what actually makes sense for you.",
  buttonText: "Build My Instagram Strategy",
  icons: [Camera, Layout, Share2],
  services: [
    { num: "01", title: "Instagram Strategy", desc: "Define your audience, positioning, content pillars, formats, objectives and publishing direction.", img: imgInstagramStrategy },
    { num: "02", title: "Content Planning", desc: "Build a structured content approach around themes, campaigns, audience interests and business priorities.", img: imgContentPlanning },
    { num: "03", title: "Instagram Content", desc: "Create captions, concepts and written content designed around the way people consume information on Instagram.", img: imgInstagramContent },
    { num: "04", title: "Reels Strategy", desc: "Develop short-form video concepts, hooks and formats designed to capture attention and communicate quickly.", img: imgReelsStrategy },
    { num: "05", title: "Stories", desc: "Use Stories for timely communication, interaction, education, behind-the-scenes content, offers and audience engagement.", img: imgStories },
    { num: "06", title: "Creative Direction", desc: "Shape the visual language, messaging and creative approach so the account feels recognisable rather than random.", img: imgCreativeDirection },
    { num: "07", title: "Community Engagement", desc: "Support meaningful interaction with your audience and help turn passive viewers into an active community.", img: imgCommunityEngagement },
    { num: "08", title: "Instagram Campaigns", desc: "Plan campaign-focused content around launches, offers, events, products or other business objectives.", img: imgInstagramCampaigns }
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
  tagText: "BUILT FOR DIFFERENT TYPES OF BRANDS",
  headingWords: [
    { text: "Different" }, { text: "businesses." }, { text: "Different" },
    { text: "Instagram", italic: true }, { text: "reasons." }
  ],
  stages: [
    {
      title: 'Brands',
      desc: 'Build recognition, personality and a consistent social presence.',
      img: imgForBrands
    },
    {
      title: 'Startups',
      desc: 'Turn an emerging brand into something people can discover and remember.',
      img: imgForStartups
    },
    {
      title: 'Creators & Artists',
      desc: 'Build an audience around personality, creative work and community.',
      img: imgForCreators
    },
    {
      title: 'Local Businesses',
      desc: 'Use Instagram to stay visible, communicate offers and build relationships with nearby audiences.',
      img: imgForLocal
    },
    {
      title: 'SaaS & Technology',
      desc: 'Turn complex products and ideas into clearer, more accessible social content.',
      img: imgForSaaS
    },
    {
      title: 'Service Businesses',
      desc: 'Explain expertise, demonstrate value and give potential customers a reason to start a conversation.',
      img: imgForServiceBiz
    }
  ]
};

export const whyAdsservInstagramData = {
  tagText: "WHY WORK WITH US",
  headingWords: [
    { text: "We" }, { text: "don't" }, { text: "treat" }, { text: "Instagram" },
    { text: "like" }, { text: "a" }, { text: "notice", italic: true }, { text: "board." }
  ],
  paragraphs: [
    "Instagram moves quickly. Formats change. Attention changes. Audiences change.",
    "ADSSERV approaches the platform with a combination of strategy, creative thinking, content and business context. The goal isn't to make your account look busy. It is to make the presence feel intentional, relevant and worth paying attention to."
  ],
  points: [
    { title: "Platform-Aware", desc: "We build content around how people actually consume Instagram content." },
    { title: "Creative + Strategy", desc: "Creative ideas are stronger when they have a strategic reason behind them." },
    { title: "Business-Minded", desc: "We connect social activity to the broader goals of the business." },
    { title: "Always Learning", desc: "Content performance gives us information. We use it to improve what comes next." }
  ]
};

export const faqData = {
  tagText: "QUESTIONS BUSINESSES ASK",
  headingWords: [
    { text: "Instagram" }, { text: "marketing," }, { text: "without", italic: true }, { text: "the" }, { text: "mystery." }
  ],
  faqs: [
    { q: "What is Instagram marketing?", a: "Instagram marketing uses content, strategy, creative, community engagement and campaigns to help a brand build awareness, relationships and business results on Instagram." },
    { q: "What does an Instagram marketing service include?", a: "It can include Instagram strategy, content planning, captions, creative direction, Reels, Stories, campaigns, community engagement and performance analysis, depending on the business's needs." },
    { q: "Can Instagram marketing help my business?", a: "Yes. Instagram can help businesses build visibility, communicate their value, engage audiences and generate interest. The results depend on the audience, offer, content, consistency and conversion journey." },
    { q: "Do you create Instagram Reels?", a: "Yes. Reels can be part of the strategy through concepts, hooks, scripts, creative direction and platform-appropriate short-form video content." },
    { q: "Can you manage our Instagram content?", a: "Yes. Depending on the scope, support can include strategy, content planning, copy, creative direction, publishing support and performance analysis." },
    { q: "How do you create an Instagram strategy?", a: "We start with the brand, audience, positioning and business objective. Those inputs shape the content pillars, formats, creative direction, campaigns and measurement approach." },
    { q: "Is Instagram marketing suitable for small businesses?", a: "It can be, particularly when the target audience is active on Instagram and the business has something useful, interesting or visually compelling to communicate." },
    { q: "Can Instagram marketing generate leads?", a: "It can contribute to lead generation when content, offers, calls to action and the conversion journey are designed to move interested users toward a relevant next step." }
  ]
};

export const relatedServicesData = {
  tagText: "MORE THAN INSTAGRAM",
  headingWords: [
    { text: "Instagram" }, { text: "works" }, { text: "better" }, { text: "when" },
    { text: "the" }, { text: "rest", italic: true }, { text: "of" }, { text: "your" },
    { text: "digital" }, { text: "presence" }, { text: "is" }, { text: "ready" }, { text: "too." }
  ],
  services: [
    { title: 'Social Media Marketing', desc: 'Extend your social strategy beyond Instagram.', cta: 'Explore Social Media', href: '/services/social-media-marketing', icon: Share2, img: imgRelSocial },
    { title: 'Performance Marketing', desc: 'Turn organic reach into targeted paid campaigns.', cta: 'Explore Performance', href: '/services/performance-marketing', icon: Megaphone, img: imgRelPerf },
    { title: 'Video Production', desc: 'Create high-quality Reels and short-form video.', cta: 'Explore Video', href: '/services/video-production', icon: PlayCircle, img: imgRelVideo },
    { title: 'Content Writing', desc: 'Give your visual content a stronger voice.', cta: 'Explore Content', href: '/services/content-writing', icon: Layout, img: imgRelContent },
    { title: 'Branding Solutions', desc: 'Ensure your identity is clear across every post.', cta: 'Explore Branding', href: '/services/branding-solutions', icon: Palette, img: imgRelBrand },
    { title: 'SEO Services', desc: 'Build visibility around the searches that matter.', cta: 'Explore SEO', href: '/services/seo-services', icon: Search, img: imgRelSEO }
  ]
};

export const contentStrategyData = {
  tagText: "CONTENT THAT HAS A ROLE",
  headingWords: [
    { text: "Not" }, { text: "every" }, { text: "post" }, { text: "needs" },
    { text: "to" }, { text: "sell", italic: true }, { text: "something." }
  ],
  paragraphs: [
    "A strong Instagram presence needs different types of content working together. Some posts create awareness. Some build trust. Some educate. Some entertain. Some drive action.",
    "We use a mix of content pillars based on what your audience needs and what your business wants to achieve."
  ],
  pillars: [
    { title: "Educate", desc: "Make complicated ideas easier to understand and give your audience something useful." },
    { title: "Connect", desc: "Show the personality, people, perspective and moments that make the brand feel human." },
    { title: "Engage", desc: "Create content that gives people a reason to comment, share, save, respond or participate." },
    { title: "Build Trust", desc: "Use expertise, proof, experiences, customer stories and useful information to strengthen credibility." },
    { title: "Convert", desc: "When the time is right, guide interested audiences toward a relevant next step — enquiry, website visit, booking, purchase or another business action." }
  ]
};

export const platformFirstData = {
  tagText: "MADE FOR INSTAGRAM",
  headingWords: [
    { text: "Content" }, { text: "should" }, { text: "work" }, { text: "with" },
    { text: "the" }, { text: "platform,", italic: true }, { text: "not" }, { text: "against" }, { text: "it." }
  ],
  paragraphs: [
    "Instagram rewards attention, relevance and content people actually want to spend time with. That means a good Instagram strategy cannot simply copy a website post, advertisement or brochure and place it on a feed.",
    "We adapt the idea to the format — whether that means a sharp Reel hook, a useful carousel, an interactive Story, a strong caption or a campaign built around a specific moment."
  ]
};

export const conversionJourneyData = {
  tagText: "THE CONVERSION JOURNEY",
  headingWords: [
    { text: "From" }, { text: "first" }, { text: "impression" }, { text: "to" },
    { text: "next", italic: true }, { text: "action." }
  ],
  paragraphs: [
    "A follower is not automatically a customer. The content needs to create a natural path between attention and action.",
    "That might mean moving someone from a Reel to your profile, from your profile to your website, from a Story to a conversation, or from useful content to an enquiry.",
    "We think beyond individual posts and consider what happens after someone becomes interested."
  ],
  journeySteps: [
    { step: "01", title: "DISCOVER", desc: "A person encounters your content." },
    { step: "02", title: "INTEREST", desc: "The content gives them a reason to keep watching or exploring." },
    { step: "03", title: "TRUST", desc: "Your profile and content demonstrate relevance, personality and credibility." },
    { step: "04", title: "EXPLORE", desc: "They visit your website, profile, offer or other relevant destination." },
    { step: "05", title: "ACT", desc: "They enquire, book, purchase, contact you or take another meaningful step." }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE INSTAGRAM WORK HARDER?",
  headingText: "Give people a reason to stop scrolling.",
  description: "Your Instagram doesn't need more random posts. It needs a clearer reason to exist, a stronger point of view and content people actually want to see. Let's build an Instagram presence that looks like your brand, speaks to your audience and supports what you're trying to achieve.",
  button1Text: "Build My Instagram Strategy",
  button2Text: "Talk to ADSSERV"
};
