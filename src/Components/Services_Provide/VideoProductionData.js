import { Share2, Users, Megaphone, Palette, Monitor } from 'lucide-react';
import bgImage from '../../assets/Services/Video Production.webp';
import imgSocial from '../../assets/SocailMedia/Connect.webp';
import imgInfluencer from '../../assets/SocailMedia/Entertain.webp';
import imgPerf from '../../assets/SocailMedia/Convert.webp';
import imgBrand from '../../assets/SocailMedia/Build Trust.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';

export const heroData = {
  bgImage,
  title: "Video Production",
  tagText: "VIDEO PRODUCTION",
  headingWords: [
    { text: "Video" }, { text: "That" }, { text: "Does" }, { text: "Something" },
    { text: "More", italic: true }, { text: "Than" }, { text: "Play." }
  ],
  description1: "Most video gets watched once, forgotten immediately, and never connected to a business outcome.",
  description2: "ADSSERV creates video content built around what you actually want it to do — whether that's building awareness, explaining an offer, driving a campaign, or telling a brand story that sticks.",
  button1Text: "Start a Video Project",
  button2Text: "Talk to ADSSERV"
};

export const problemData = {
  tagText: "NOT EVERY VIDEO NEEDS A BIG PRODUCTION",
  headingWords: [
    { text: "Good" }, { text: "video" }, { text: "isn't" }, { text: "about" },
    { text: "making", italic: true }, { text: "everything" }, { text: "look" }, { text: "expensive." }
  ],
  paragraphs: [
    "A beautifully produced video can still fail if nobody understands it, watches it, or remembers it.",
    "The right production starts with the purpose. Different goals need different creative decisions:"
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
    { text: "Questions" }, { text: "before" }, { text: "you" }, { text: "start" },
    { text: "your", italic: true }, { text: "video" }, { text: "project." }
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
  tagText: "READY TO START?",
  headingText: "Let's turn it into something people want to watch.",
  description: "Tell us what you're trying to communicate, who needs to see it, and where the content will live. We'll help shape the creative and production around the job the video needs to do.",
  button1Text: "Start a Video Project",
  button2Text: "Talk to ADSSERV"
};
