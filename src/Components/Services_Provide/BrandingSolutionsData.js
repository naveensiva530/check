import { Share2, Monitor, Video, PenLine, Megaphone, Globe, RefreshCw, Sparkles, Palette, Layers } from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/DIGITAL CONSULTING.webp';
import approachImg from '../../assets/Our_Approch (2).webp';

// Branding What We Do Images
import imgStrategy from '../../assets/Servicess/BrandingSolution/WhatWeDo/Brand strategy.webp';
import imgLogo from '../../assets/Servicess/BrandingSolution/WhatWeDo/Logo design.webp';
import imgVisual from '../../assets/Servicess/BrandingSolution/WhatWeDo/Visual identity.webp';
import imgGuidelines from '../../assets/Servicess/BrandingSolution/WhatWeDo/Brand guidelines.webp';
import imgMessaging from '../../assets/Servicess/BrandingSolution/WhatWeDo/Brand messaging.webp';
import imgSocialMedia from '../../assets/Servicess/BrandingSolution/WhatWeDo/Social media branding.webp';
import imgCampaignIdentity from '../../assets/Servicess/BrandingSolution/WhatWeDo/Campaign identity.webp';
import imgCollateral from '../../assets/Servicess/BrandingSolution/WhatWeDo/Brand collateral.webp';

// Related Services Images
import imgRelSocial from '../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import imgRelWeb from '../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';
import imgRelVideo from '../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';
import imgRelContent from '../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import imgRelPerf from '../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';

export {
  imgStrategy,
  imgLogo,
  imgVisual,
  imgGuidelines,
  imgMessaging,
  imgSocialMedia,
  imgCampaignIdentity,
  imgCollateral
};

export const heroData = {
  bgImage,
  title: "Branding Solutions",
  breadcrumbText: "Branding Solutions",
  tagText: "BRANDING SOLUTIONS",
  headingWords: [
    { text: "Build" }, { text: "a" }, { text: "Brand" }, { text: "People" },
    { text: "Recognise", italic: true }, { text: "Before" }, { text: "They" },
    { text: "Read" }, { text: "the" }, { text: "Name" }
  ],
  description1: "A brand is more than a logo, a colour palette, or a polished Instagram profile.",
  description2: "It is the visual and verbal system people experience every time they see, hear, visit, click, or interact with your business.",
  description3: "ADSSERV builds branding systems that give businesses a clearer identity, a stronger presence, and a consistent way to show up across digital and real-world touchpoints.",
  button1Text: "Build My Brand",
  button2Text: "View Our Services",
  button2Link: "/#services"
};

export const problemData = {
  tagText: "BEYOND THE LOGO",
  headingWords: [
    { text: "Looking" }, { text: "professional" }, { text: "isn't" },
    { text: "the" }, { text: "same", italic: true }, { text: "as" },
    { text: "being" }, { text: "recognisable." }
  ],
  paragraphs: ["Many businesses collect individual design pieces without building an actual brand system."],
  items: [
    "A logo here.",
    "A social post there.",
    "A new colour every few months."
  ],
  bottomText1: "The result is inconsistency.",
  bottomText2: "That is what we build."
};

export const approachData = {
  tagText: "FROM POSITIONING TO PRESENCE",
  headingWords: [
    { text: "We" }, { text: "build" }, { text: "the" }, { text: "thinking" },
    { text: "before", italic: true }, { text: "we" }, { text: "polish" }, { text: "the" }, { text: "visuals." }
  ],
  imageSrc: approachImg,
  steps: [
    { num: '01', title: 'Understand', desc: 'We look at your business, audience, market, competitors, offer, personality, and where the brand needs to show up.' },
    { num: '02', title: 'Position', desc: 'Clarify what the brand should stand for, who it is for, and what should make it distinct.' },
    { num: '03', title: 'Define', desc: 'Develop the visual and verbal direction that gives the brand its character.' },
    { num: '04', title: 'Design', desc: 'Create the identity elements and supporting assets needed to bring the direction to life.' },
    { num: '05', title: 'Systemise', desc: 'Turn individual design decisions into practical rules that can be applied consistently.' },
    { num: '06', title: 'Launch', desc: 'Help translate the new identity across the touchpoints where your audience actually encounters the brand.' }
  ]
};

export const whatWeBuildData = {
  tagText: "BRAND IDENTITY SERVICES",
  headingWords: [
    { text: "A" }, { text: "brand" }, { text: "system" }, { text: "should" },
    { text: "work", italic: true }, { text: "beyond" }, { text: "one" }, { text: "presentation." }
  ],
  description: "Different messages need different formats — from strategy and logo design to guidelines, messaging, and campaign identity.",
  buttonText: "Build My Brand",
  icons: [Sparkles, Palette, Layers],
  services: [
    { num: "01", title: "Brand Strategy", desc: "Define the foundation behind the identity, including audience, positioning, personality, differentiation, and communication direction.", img: imgStrategy },
    { num: "02", title: "Logo Design", desc: "Create a distinctive visual mark designed to work across the formats and sizes your business actually needs.", img: imgLogo },
    { num: "03", title: "Visual Identity", desc: "Develop the colours, typography, imagery, graphic elements, layout direction, and visual language that make the brand recognisable.", img: imgVisual },
    { num: "04", title: "Brand Guidelines", desc: "Document the key identity rules so the brand remains consistent when different people create different materials.", img: imgGuidelines },
    { num: "05", title: "Brand Messaging", desc: "Shape the language, positioning statements, messaging direction, and communication principles that help the business sound like itself.", img: imgMessaging },
    { num: "06", title: "Social Media Branding", desc: "Translate the identity into social profiles, templates, content formats, and visual systems that make the feed feel connected.", img: imgSocialMedia },
    { num: "07", title: "Campaign Identity", desc: "Develop visual directions for launches, promotions, events, campaigns, or specific marketing initiatives.", img: imgCampaignIdentity },
    { num: "08", title: "Brand Collateral", desc: "Create practical brand assets such as presentations, business materials, digital templates, marketing assets, and other required touchpoints.", img: imgCollateral }
  ]
};

export const marketingData = {
  tagText: "THE BRAND SHOULD HELP THE MARKETING",
  headingWords: [
    { text: "Good" }, { text: "branding" }, { text: "makes" }, { text: "every" },
    { text: "future", italic: true }, { text: "campaign" }, { text: "easier" }, { text: "to" }, { text: "recognise." }
  ],
  paragraphs: [
    "Your brand shouldn't live inside a brand guideline PDF.",
    "It should show up in the social content, website, advertisements, videos, campaigns, landing pages, and experiences your audience actually sees.",
    "That is why branding works best when it connects with the rest of your marketing system.",
    "A stronger identity gives future creative more consistency — without forcing every campaign to look exactly the same."
  ]
};

export const digitalBrandingData = {
  tagText: "BUILT FOR WHERE PEOPLE ACTUALLY SEE YOU",
  headingWords: [
    { text: "Your" }, { text: "digital" }, { text: "presence" }, { text: "is" },
    { text: "part", italic: true }, { text: "of" }, { text: "the" }, { text: "brand." }
  ],
  paragraphs: [
    "A brand identity has to work on screens.",
    "That means considering how it appears across:"
  ],
  items: [
    "Websites",
    "Instagram",
    "Social media",
    "Digital advertising",
    "Email",
    "Landing pages",
    "Presentations",
    "Video",
    "Content",
    "Mobile experiences"
  ],
  bottomText: "We build the identity with those environments in mind rather than treating digital as an afterthought."
};

export const rebrandingData = {
  tagText: "WHEN THE OLD VERSION NO LONGER FITS",
  headingWords: [
    { text: "Sometimes" }, { text: "the" }, { text: "brand" }, { text: "doesn't" },
    { text: "need" }, { text: "a" }, { text: "new" }, { text: "logo.", italic: true },
    { text: "It" }, { text: "needs" }, { text: "a" }, { text: "new" }, { text: "direction." }
  ],
  paragraphs: [
    "A rebrand can mean different things.",
    "For some businesses, the existing identity simply needs refinement.",
    "For others, the market, audience, product, or ambition has changed enough that the brand needs a more fundamental reset.",
    "We identify what should stay, what needs to change, and what the new identity needs to accomplish before rebuilding everything from scratch."
  ]
};

export const whyAdsservData = {
  tagText: "OUR CREATIVE APPROACH",
  headingWords: [
    { text: "We" }, { text: "don't" }, { text: "design" }, { text: "brands" },
    { text: "just", italic: true }, { text: "to" }, { text: "look" }, { text: "good" },
    { text: "in" }, { text: "a" }, { text: "case" }, { text: "study." }
  ],
  paragraphs: [
    "The identity has to work in the real world.",
    "It needs to make sense to the people you're trying to reach, fit the category you're competing in, and remain practical across the channels where your business operates."
  ],
  boldParagraph: "We combine strategic thinking with digital-first creative so the final brand can actually be used — not simply admired."
};

export const faqData = {
  tagText: "BRANDING FAQ",
  headingWords: [
    { text: "Questions" }, { text: "businesses" }, { text: "ask" }, { text: "before" },
    { text: "starting", italic: true }, { text: "a" }, { text: "branding" }, { text: "project." }
  ],
  faqs: [
    { q: "What does branding include?", a: "Branding can include brand strategy, positioning, logo design, visual identity, typography, colour systems, messaging, brand guidelines, social branding, campaign identity, and supporting brand assets. The exact scope depends on the business and project requirements." },
    { q: "What is the difference between a logo and a brand?", a: "A logo is one visual element of a brand. A brand is the broader experience people associate with a business, including its identity, positioning, messaging, visual language, personality, and interactions." },
    { q: "Do you create complete brand identities?", a: "Yes. A complete identity can include the strategic foundation, logo, visual system, typography, colours, imagery direction, messaging principles, guidelines, and practical brand assets required for the business." },
    { q: "Do you provide logo design?", a: "Yes. Logo design can be developed as part of a wider identity system or as a focused project, depending on what the business actually needs." },
    { q: "Do you offer rebranding?", a: "Yes. Rebranding can range from refining an existing identity to developing a substantially new positioning and visual system. The appropriate approach depends on what is working, what has changed, and what the business needs next." },
    { q: "Can you create brand guidelines?", a: "Yes. Brand guidelines can document logo usage, colours, typography, visual direction, messaging principles, and other identity rules so the brand can be applied consistently." },
    { q: "Can you brand a startup?", a: "Yes. Startup branding can establish a clear identity and positioning from the beginning while keeping the system practical enough to evolve as the business grows." },
    { q: "Can you make branding for social media?", a: "Yes. Brand identity can be translated into social profiles, content templates, visual systems, campaign assets, and other digital touchpoints so social content feels connected to the wider brand." },
    { q: "How much does branding cost?", a: "Branding costs depend on the scope, strategic work, number of identity elements, deliverables, revisions, guidelines, and supporting assets required. A focused logo project and a complete brand identity are different levels of work." },
    { q: "How long does a branding project take?", a: "The timeline depends on the project's scope, number of deliverables, feedback cycles, research requirements, and approval process. The schedule should be agreed before the project begins." }
  ]
};

export const relatedServicesData = {
  tagText: "BUILD THE BRAND. THEN PUT IT TO WORK.",
  headingWords: [
    { text: 'Connect' }, { text: 'your' }, { text: 'identity' }, { text: 'with' },
    { text: 'the', italic: true }, { text: 'rest' }, { text: 'of' }, { text: 'your' }, { text: 'digital' }, { text: 'presence.' }
  ],
  services: [
    { title: 'Social Media Marketing', desc: 'Turn your visual identity into a consistent social presence.', cta: 'Explore Social Media Marketing', href: '/services/social-media-marketing', icon: Share2, img: imgRelSocial },
    { title: 'Website Development', desc: 'Build a website that reflects the new brand rather than fighting against it.', cta: 'Explore Website Development', href: '/services/website-development', icon: Monitor, img: imgRelWeb },
    { title: 'Video Production', desc: "Carry the brand's visual language into video and campaign content.", cta: 'Explore Video Production', href: '/services/video-production', icon: Video, img: imgRelVideo },
    { title: 'Content Writing', desc: 'Give the brand a consistent voice across pages, campaigns, and content.', cta: 'Explore Content Writing', href: '/services/content-writing', icon: PenLine, img: imgRelContent },
    { title: 'Performance Marketing', desc: 'Put the brand in front of the right audiences through paid campaigns.', cta: 'Explore Performance Marketing', href: '/services/performance-marketing', icon: Megaphone, img: imgRelPerf }
  ]
};

export const ctaData = {
  tagText: "READY TO BUILD THE BRAND?",
  headingText: "Give your business an identity people can recognise.",
  description: "Tell us where the brand is today, where you want it to go, and what isn't working. We'll help turn that into a clearer brand direction and a system your team can actually use.",
  button1Text: "Build My Brand",
  button2Text: "Talk to ADSSERV"
};
