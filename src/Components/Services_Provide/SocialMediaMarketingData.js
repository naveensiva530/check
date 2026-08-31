import { Monitor, PenTool, Search, Megaphone, Camera } from 'lucide-react';
import bgImage from '../../assets/Services/Social Media Marketing.webp';
import imgWeb from '../../assets/SocailMedia/Laptop.webp';
import imgContent from '../../assets/SocailMedia/Educate.webp';
import imgSEO from '../../assets/SocailMedia/Connect.webp';
import imgPerf from '../../assets/SocailMedia/Convert.webp';
import imgInsta from '../../assets/SocailMedia/Build Trust.webp';

export const heroData = {
  bgImage,
  title: "Social Media Marketing",
  tagText: "SOCIAL MEDIA MARKETING",
  headingWords: [
    { text: "Social" }, { text: "Media", italic: true }, { text: "Marketing" },
    { text: "That" }, { text: "Gives" }, { text: "People" }, { text: "a" },
    { text: "Reason" }, { text: "to" }, { text: "Stop" }
  ],
  description1: "Your audience is already scrolling. The challenge is earning a few seconds of their attention — and giving them a reason to remember your brand.",
  description2: "ADSSERV builds social media marketing strategies around your audience, platform behaviour, content, creative direction, community, and business goals. From the first idea to ongoing optimisation, we turn social media into a more intentional part of your digital marketing.",
  button1Text: "Start Your Social Strategy",
  button2Text: "View Our Services"
};

export const problemData = {
  tagText: "SOCIAL SHOULD DO MORE",
  headingWords: [
    { text: "Posting" }, { text: "more" }, { text: "isn't" }, { text: "the" },
    { text: "same" }, { text: "as" }, { text: "marketing", italic: true }, { text: "better." }
  ],
  paragraphs: [
    "A busy social feed can still produce very little.",
    "Random posts, recycled trends, inconsistent visuals, unclear messaging, and content without a purpose can make a brand look active without making it memorable.",
    "Effective social media marketing starts before the post."
  ],
  items: [
    "Who are you trying to reach?",
    "What do they care about?",
    "What should they understand about your brand?",
    "Why should they stop scrolling?",
    "And what should happen after they engage?"
  ],
  bottomText1: "We build the social strategy around those questions.",
  bottomText2: ""
};

export const whyAdsservSocialData = {
  tagText: "WHY WORK WITH ADSSERV",
  headingWords: [
    { text: "Gen" }, { text: "Z" }, { text: "thinking." },
    { text: "Strategic" }, { text: "social", italic: true }, { text: "marketing." }
  ],
  paragraphs: [
    "ADSSERV's Gen Z positioning is not about forcing trends into every post.",
    "It's about understanding how modern audiences discover content, how platforms shape attention, and why some ideas travel while others disappear.",
    "We combine that audience perspective with strategy, creative thinking, content execution, and performance analysis."
  ],
  boldParagraph: "The result is social marketing designed to feel native to the platform while still making sense for the business."
};

export const faqData = {
  tagText: "SOCIAL MEDIA MARKETING FAQ",
  headingWords: [
    { text: "Questions" }, { text: "brands" }, { text: "usually" }, { text: "ask" },
    { text: "before" }, { text: "getting" }, { text: "started.", italic: true }
  ],
  faqs: [
    { q: "What does a social media marketing agency do?", a: "A social media marketing agency develops and manages strategies that help brands use social platforms to build awareness, engage audiences, strengthen their presence, and support business goals. Services can include strategy, content, publishing, community management, campaigns, and performance analysis." },
    { q: "How can social media marketing help my business?", a: "Social media marketing can help a business increase brand visibility, build audience relationships, communicate its value, generate website traffic, support lead generation, and create ongoing opportunities for customer engagement. The right outcome depends on the business and its marketing objective." },
    { q: "How often should a business post on social media?", a: "There is no universal posting frequency that works for every business. A stronger approach is to choose a sustainable publishing rhythm based on audience behaviour, platform, content resources, objectives, and the quality of content that can consistently be produced." },
    { q: "Does ADSSERV create social media content?", a: "Yes. ADSSERV can support social media content strategy and content creation as part of its social media marketing services. The exact content scope depends on the agreed strategy, platforms, formats, and project requirements." },
    { q: "Which social media platforms should my business use?", a: "The right platforms depend on your audience, industry, content format, business objectives, and available resources. ADSSERV can assess these factors and recommend where your social media effort is most likely to be useful." },
    { q: "Can social media marketing generate leads?", a: "Yes. Social media can contribute to lead generation when content, audience targeting, offers, landing pages, calls to action, and conversion tracking work together. Social media should be treated as part of a broader customer journey rather than an isolated channel." },
    { q: "How do you measure social media marketing results?", a: "Measurement depends on the objective and can include reach, engagement, saves, shares, audience growth, profile actions, website traffic, leads, conversions, and content-level performance. The most useful metrics are the ones connected to the business goal." },
    { q: "How long does social media marketing take to work?", a: "There is no reliable universal timeline because results depend on the starting point, audience, industry, content quality, consistency, competition, platform, and objectives. Early signals can inform optimisation, while meaningful growth generally requires sustained execution and learning." },
    { q: "Can ADSSERV manage my social media accounts?", a: "ADSSERV can provide social media management as part of an agreed scope. This may include planning, content coordination, publishing, monitoring, community activity, reporting, and optimisation depending on the engagement." },
    { q: "How much does social media marketing cost?", a: "Social media marketing pricing depends on the number of platforms, content requirements, creative production, management scope, campaign requirements, and business objectives. ADSSERV can recommend a suitable scope after understanding what you need." }
  ]
};

export const relatedServicesData = {
  tagText: "BUILD A STRONGER DIGITAL SYSTEM",
  headingWords: [
    { text: "Social" }, { text: "works" }, { text: "better" }, { text: "when" },
    { text: "the" }, { text: "rest" }, { text: "of" }, { text: "the" },
    { text: "journey", italic: true }, { text: "works" }, { text: "too." }
  ],
  services: [
    { title: "Website Development", desc: "Give social audiences a better place to land.", cta: "Explore Websites", href: "/services/website-development", icon: Monitor, img: imgWeb },
    { title: "Content Writing", desc: "Give every post a clearer voice and purpose.", cta: "Explore Content", href: "/services/content-writing", icon: PenTool, img: imgContent },
    { title: "SEO", desc: "Extend reach beyond social into organic search.", cta: "Explore SEO", href: "/services/seo", icon: Search, img: imgSEO },
    { title: "Performance Marketing", desc: "Amplify high-performing content with paid campaigns.", cta: "Explore Paid Ads", href: "/services/performance-marketing", icon: Megaphone, img: imgPerf },
    { title: "Instagram Marketing", desc: "Build a dedicated strategy for your Instagram presence.", cta: "Explore Instagram", href: "/services/instagram-marketing", icon: Camera, img: imgInsta }
  ]
};

export const ctaData = {
  tagText: "READY TO MAKE SOCIAL WORK HARDER?",
  headingText: "Let's build a social presence people want to come back to.",
  description: "Tell us what you're trying to achieve, where your social presence stands today, and what isn't working. We'll help you figure out what should happen next.",
  button1Text: "Start Your Social Strategy",
  button2Text: "Talk to ADSSERV"
};
