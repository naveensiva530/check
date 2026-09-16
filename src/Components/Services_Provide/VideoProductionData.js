import { Share2, Users, Megaphone, Palette, Monitor, Sparkles, TrendingUp, Target } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/Video Production.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

import imgSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgInfluencer from '../../assets/Servicess/RelatedServices/Influncer_Marketing-removebg-preview.webp';
import imgPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import imgBrand from '../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import imgWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';

import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgConsumer from '../../assets/Servicess/WhoThisIsFor/Consumer Brands.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';

import imgShortForm from '../../assets/Servicess/VideoProduction/WhatWeDo/Short-form social videos.webp';
import imgBrandVideos from '../../assets/Servicess/VideoProduction/WhatWeDo/Brand videos.webp';
import imgProductVideos from '../../assets/Servicess/VideoProduction/WhatWeDo/Product videos.webp';
import imgCampaignVideos from '../../assets/Servicess/VideoProduction/WhatWeDo/Campaign videos.webp';
import imgExplainerVideos from '../../assets/Servicess/VideoProduction/WhatWeDo/Explainer videos.webp';
import imgUgcStyle from '../../assets/Servicess/VideoProduction/WhatWeDo/UGC-style content.webp';
import imgCorporateVideos from '../../assets/Servicess/VideoProduction/WhatWeDo/Brand videos.webp';
import imgVideoAds from '../../assets/Servicess/VideoProduction/WhatWeDo/Video ads.webp';
import imgEventContent from '../../assets/Servicess/VideoProduction/WhatWeDo/Campaign videos.webp';

export const heroData = {
  bgImage,
  title: "Video Production",
  breadcrumbText: "Video Production",
  tagText: "VIDEO PRODUCTION",
  headingWords: [
    { text: "Make" }, { text: "Your" }, { text: "Brand" },
    { text: "Impossible", italic: true }, { text: "to" }, { text: "Scroll" }, { text: "Past" }
  ],
  description1: "People don't wait around for brands to explain themselves. A strong video has to earn attention quickly, communicate something worth remembering, and fit the platform where it will be watched.",
  description2: "ADSSERV creates brand, social, campaign, and short-form video content designed around the audience, the message, and the job the video needs to do.",
  description3: "From the first idea to the final edit, we build content made to be watched — not just uploaded.",
  button1Text: "Start a Video Project",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "NOT EVERY VIDEO NEEDS A BIG PRODUCTION",
  headingWords: [
    { text: "Good" }, { text: "video" }, { text: "isn't" }, { text: "about" },
    { text: "making", italic: true }, { text: "everything" }, { text: "look" }, { text: "expensive." }
  ],
  paragraphs: [
    "A beautifully produced video can still fail if nobody understands it, watches it, or remembers it.",
    "The right production starts with the purpose.",
    "Different goals need different creative decisions."
  ],
  items: [
    "Is the video introducing a brand?",
    "Explaining a product?",
    "Launching something new?",
    "Building trust?",
    "Generating attention on social?",
    "Supporting a paid campaign?"
  ],
  bottomText1: "We start there.",
  bottomText2: ""
};

export const approachData = {
  tagText: "HOW WE APPROACH VIDEO",
  headingWords: [
    { text: "The" }, { text: "idea" }, { text: "comes" }, { text: "before" },
    { text: "the", italic: true }, { text: "camera." }
  ],
  description: "Before anything is filmed, we look at what the video needs to accomplish, who it is for, where it will be published, and what it should make the audience think, feel, or do. That clarity shapes everything from the concept to the final edit.",
  imageSrc: approachImg,
  imageAlt: "Our Video Production Approach",
  steps: [
    { num: '01', title: 'Understand', desc: 'Define the objective, audience, platform, message, budget, and constraints before the project begins.' },
    { num: '02', title: 'Develop', desc: 'Create the concept, script, shot list, visual direction, and production plan.' },
    { num: '03', title: 'Produce', desc: 'Film, direct, and capture the required footage and assets.' },
    { num: '04', title: 'Edit', desc: 'Assemble the footage, add sound design, motion graphics, captions, colour treatment, and platform adaptations.' },
    { num: '05', title: 'Review', desc: 'Share the edit for feedback and refine until the content achieves the agreed creative direction.' },
    { num: '06', title: 'Deliver', desc: 'Export in the right formats, aspect ratios, and specifications for each platform.' }
  ]
};

export const whatWeDoData = {
  tagText: "VIDEO PRODUCTION SERVICES",
  headingWords: [
    { text: "Content" }, { text: "that" }, { text: "earns" }, { text: "attention" },
    { text: "across", italic: true }, { text: "every" }, { text: "platform." }
  ],
  description: "From brand storytelling to short-form social content and campaign video, we create video built to be watched, shared, and remembered.",
  buttonText: "View More",
  icons: [Sparkles, TrendingUp, Target],
  services: [
    { num: "01", title: "Short-form social videos", desc: "Fast, platform-native content built for attention on channels such as Instagram, TikTok, and YouTube Shorts.", img: imgShortForm },
    { num: "02", title: "Brand videos", desc: "Communicate who you are, what you stand for, and why your brand deserves attention.", img: imgBrandVideos },
    { num: "03", title: "Product videos", desc: "Show products through demonstrations, features, use cases, visual storytelling, or creative concepts.", img: imgProductVideos },
    { num: "04", title: "Campaign videos", desc: "Create campaign-led content designed around a specific launch, promotion, message, or audience.", img: imgCampaignVideos },
    { num: "05", title: "Explainer videos", desc: "Make products, services, processes, or ideas easier to understand.", img: imgExplainerVideos },
    { num: "06", title: "UGC-style content", desc: "Create authentic-feeling content designed around the way people naturally consume social video.", img: imgUgcStyle },
    { num: "07", title: "Corporate & business videos", desc: "Turn important business messages into clear, professional visual communication.", img: imgCorporateVideos },
    { num: "08", title: "Video ads", desc: "Develop creative assets for paid campaigns across relevant digital platforms.", img: imgVideoAds },
    { num: "09", title: "Event & behind-the-scenes content", desc: "Capture moments, people, atmosphere, and activity that can extend the value of an event beyond the day itself.", img: imgEventContent }
  ]
};

export const whoThisIsForData = {
  tagText: "VIDEO FOR",
  headingWords: [
    { text: "For" }, { text: "brands" }, { text: "that" }, { text: "have" },
    { text: "something", italic: true }, { text: "worth" }, { text: "showing." }
  ],
  stages: [
    {
      title: 'Startups',
      desc: "Introduce the idea, product, people, or problem you're solving without making the brand feel bigger or smaller than it really is.",
      img: imgStartups
    },
    {
      title: 'Growing Businesses',
      desc: 'Turn products, services, expertise, and customer stories into content that can travel across digital channels.',
      img: imgGrowing
    },
    {
      title: 'SaaS & Technology',
      desc: 'Make complex products easier to understand through demonstrations, explainers, product stories, and educational content.',
      img: imgSaaS
    },
    {
      title: 'Consumer Brands',
      desc: 'Create visual content that gives products a stronger presence across social, campaigns, websites, and launches.',
      img: imgConsumer
    },
    {
      title: 'Local Businesses',
      desc: 'Show the people, place, experience, and personality behind the business.',
      img: imgLocal
    }
  ]
};

export const whyAdsservVideoData = {
  tagText: "OUR CREATIVE APPROACH",
  headingWords: [
    { text: "We" }, { text: "care" }, { text: "about" }, { text: "the" },
    { text: "idea", italic: true }, { text: "before" }, { text: "the" }, { text: "equipment." }
  ],
  paragraphs: [
    "Better cameras don't automatically create better marketing.",
    "We start with the audience, message, platform, and objective.",
    "Then we decide what needs to be filmed, how it should look, how it should sound, and where the finished content will be used."
  ],
  boldParagraph: "That keeps the production creative without losing sight of why the content exists in the first place."
};

export const faqData = {
  tagText: "VIDEO PRODUCTION FAQ",
  headingWords: [
    { text: "Questions" }, { text: "brands" }, { text: "ask" }, { text: "before" },
    { text: "starting", italic: true }, { text: "a" }, { text: "video" }, { text: "project." }
  ],
  faqs: [
    { q: "What does video production include?", a: "Video production can include concept development, scripting, planning, filming, editing, sound, graphics, captions, colour treatment, platform adaptations, and final delivery. The exact scope depends on the project's objectives and required deliverables." },
    { q: "What types of videos do you create?", a: "ADSSERV can create short-form social videos, brand videos, product videos, campaign content, explainers, UGC-style content, business videos, video ads, and event or behind-the-scenes content, depending on project requirements." },
    { q: "Do you create Reels and TikTok videos?", a: "Yes. Short-form video can be created specifically for platforms such as Instagram Reels, TikTok, and YouTube Shorts, with the format, pacing, hooks, captions, and creative direction adapted to the platform." },
    { q: "Can you create video ads?", a: "Yes. Video creative can be developed for paid campaigns with consideration for audience, placement, message, opening hook, CTA, format, and testing requirements." },
    { q: "Do you provide video editing?", a: "Yes. Post-production can include editing, sound, captions, motion graphics, colour correction, colour grading, transitions, text overlays, and platform-specific versions depending on the project." },
    { q: "Can one video be used across multiple platforms?", a: "Often, yes. A production can be planned so footage is adapted into different aspect ratios, lengths, hooks, cuts, and formats for platforms such as Instagram, TikTok, YouTube, websites, and paid media." },
    { q: "How much does video production cost?", a: "Video production costs vary according to the concept, filming requirements, locations, talent, equipment, production time, post-production, number of deliverables, and usage requirements. The right scope should be defined before a project is priced." },
    { q: "Do you help with the video concept?", a: "Yes. Creative development can begin with the objective and audience before moving into the concept, story, script, visual direction, shot planning, and production requirements." },
    { q: "Can you create UGC-style videos?", a: "Yes. UGC-style content can be developed when an authentic, social-first format is appropriate for the brand, audience, and campaign objective." },
    { q: "Can video content support SEO and website conversions?", a: "Yes. Relevant video can support website communication, product understanding, engagement, and conversion journeys when it is placed where it genuinely helps the user. Video should support the page rather than simply exist for decoration." }
  ]
};

export const relatedServicesData = {
  tagText: "MAKE THE CONTENT WORK HARDER",
  headingWords: [
    { text: "Connect" }, { text: "video" }, { text: "with" }, { text: "the" },
    { text: "rest", italic: true }, { text: "of" }, { text: "your" }, { text: "digital" }, { text: "strategy." }
  ],
  services: [
    { title: "Social Media Marketing", desc: "Turn finished video assets into a consistent social content system.", cta: "Explore Social Media Marketing", href: "/services/social-media-marketing", icon: Share2, img: imgSocial },
    { title: "Influencer Marketing", desc: "Combine creator-led content with broader campaign creative.", cta: "Explore Influencer Marketing", href: "/services/influencer-marketing", icon: Users, img: imgInfluencer },
    { title: "Performance Marketing", desc: "Use video creative across relevant paid campaigns and testing strategies.", cta: "Explore Performance Marketing", href: "/services/performance-marketing", icon: Megaphone, img: imgPerf },
    { title: "Branding Solutions", desc: "Keep visual content aligned with the wider brand identity.", cta: "Explore Branding Solutions", href: "/services/branding-solutions", icon: Palette, img: imgBrand },
    { title: "Website Development", desc: "Give important video content the right digital home.", cta: "Explore Website Development", href: "/services/website-development", icon: Monitor, img: imgWeb }
  ]
};

export const ctaData = {
  tagText: "HAVE AN IDEA?",
  headingText: "Let's turn it into something people want to watch.",
  description: "Tell us what you're trying to communicate, who needs to see it, and where the content will live. We'll help shape the creative and production around the job the video needs to do.",
  button1Text: "Start a Video Project",
  button2Text: "Talk to ADSSERV"
};
