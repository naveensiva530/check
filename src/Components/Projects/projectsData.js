// Hero background
import bgImage from '../../assets/All the Hero Section bg/Projects.webp';

// Project Case Study Images from HomePage/Project
import noquTamImg from '../../assets/HomePage/Project/Noqu TAM.webp';
import nuTechImg from '../../assets/HomePage/Project/NU-Tech Associates.webp';
import ramesNaturalCareImg from '../../assets/HomePage/Project/Rames Natural Care.webp';

// ── 1. HERO DATA ─────────────────────────────────────────────────────────────
export const heroData = {
  bgImage,
  eyebrow: "CLIENTS WORK",
  title: "Real Client Projects. Real Marketing Execution.",
  supportingCopy: "A selection of digital marketing projects delivered through AdsServ across performance marketing and social media, working with businesses from different industries and customer segments.",
  supportingLine: "Every project starts with the business objective, audience and channel — then turns that understanding into focused marketing execution.",
  ctaText: "Explore Client Work"
};

// ── 2. INTRO DATA ────────────────────────────────────────────────────────────
export const introData = {
  tag: "Selected Work Through AdsServ",
  heading: "Digital marketing looks different for every business.",
  body: "A performance marketing campaign may need a completely different approach from a social media engagement strategy. The audience, offer, creative, channel and desired action all influence how the work is executed.",
  subline: "Here are selected client projects handled through AdsServ."
};

// ── 3. DETAILED PROJECTS CASE STUDIES ────────────────────────────────────────
export const projectsData = [
  {
    id: "noqu-tam",
    number: "01",
    title: "No Qu TAM",
    subtitle: "Time & Attendance Management",
    client: "No Qu",
    website: "noqu.in/tam",
    websiteUrl: "https://noqu.in/tam",
    industry: "SaaS / Workforce Technology",
    projectType: "Client Work",
    service: "Performance Marketing",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
    serviceTagColor: "bg-orange-50 text-orange-700 border-orange-200",
    cardLabel: "No Qu TAM · Performance Marketing",
    image: noquTamImg,
    shortDescription: "Performance marketing support for No Qu TAM, a technology solution focused on workforce time and attendance management.",
    projectOverview: "No Qu TAM is a digital workforce-management solution designed around time and attendance requirements for organisations.\n\nThe marketing challenge is different from conventional consumer advertising: the audience needs to understand the business problem, the solution and the value of the product before taking action.\n\nThe project therefore focused on performance-oriented digital marketing with clear product communication and action-driven campaign messaging.",
    objectiveLead: "The marketing focus was to connect the TAM solution with relevant audiences through performance marketing.",
    coreObjectives: [
      "Generate relevant interest in the solution",
      "Communicate the product clearly",
      "Reach potential business customers",
      "Promote the value of the solution",
      "Encourage enquiries and further product consideration",
      "Support measurable campaign activity"
    ],
    focusTitle: "PERFORMANCE MARKETING FOCUS",
    focusPillars: [
      {
        title: "Audience Targeting",
        description: "Identify and reach audiences with potential relevance to workforce attendance and employee-management solutions."
      },
      {
        title: "Campaign Messaging",
        description: "Develop communication that connects the business problem with the No Qu TAM solution."
      },
      {
        title: "Creative Direction",
        description: "Use clear, benefit-oriented campaign communication to attract attention and communicate the product."
      },
      {
        title: "Conversion Focus",
        description: "Move interested users toward the appropriate next action, such as exploring the product or making an enquiry."
      },
      {
        title: "Optimisation",
        description: "Review campaign response and continuously refine targeting, messaging and execution based on available performance data."
      }
    ],
    flowTitle: "PRODUCT COMMUNICATION",
    flowSubtitle: "The campaign communication is built around the relationship between:",
    flowSteps: [
      { label: "Workforce Challenge", highlight: "Problem" },
      { label: "Attendance Management Need", highlight: "Need" },
      { label: "No Qu TAM Solution", highlight: "Solution" },
      { label: "Product Capabilities", highlight: "Capabilities" },
      { label: "Business Value", highlight: "Value" },
      { label: "Enquiry / Demo", highlight: "Conversion" }
    ],
    specialInsight: {
      tag: "CAMPAIGN THINKING",
      quote: "Performance marketing is not simply about generating clicks.",
      formula: ["Audience", "Problem", "Offer", "Creative", "Landing Experience", "Conversion"],
      note: "When these elements work together, paid marketing becomes more useful as a business-growth channel."
    },
    takeaway: "Performance marketing for a B2B technology product requires clear positioning, relevant audience targeting and conversion-focused communication."
  },
  {
    id: "nutech-associates",
    number: "02",
    title: "Nu-Tech Associates",
    subtitle: "Professional Digital Presence & Social Media",
    client: "Nu-Tech Associates",
    website: "nutechprojects.in",
    websiteUrl: "https://nutechprojects.in",
    industry: "Professional / Business Services",
    projectType: "Client Work",
    service: "Social Media",
    badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
    serviceTagColor: "bg-purple-50 text-purple-700 border-purple-200",
    cardLabel: "Nu-Tech Associates · Social Media",
    image: nuTechImg,
    shortDescription: "Social media management and content-focused digital communication for Nu-Tech Associates.",
    projectOverview: "Nu-Tech Associates required a professional social media presence capable of representing the business clearly and consistently.\n\nThe project focused on using social media as a communication channel for brand visibility, audience awareness and professional presentation.",
    objectiveLead: "The primary objective was to strengthen the brand's social presence and maintain consistent communication with its audience.",
    coreObjectives: [
      "Build a consistent social presence",
      "Communicate the brand professionally",
      "Increase audience awareness",
      "Present the business clearly",
      "Maintain regular content activity",
      "Support brand familiarity"
    ],
    focusTitle: "SOCIAL MEDIA FOCUS",
    focusPillars: [
      {
        title: "Content Planning",
        description: "Plan content around the business, its audience and relevant communication opportunities."
      },
      {
        title: "Brand Communication",
        description: "Maintain a professional and recognisable communication style."
      },
      {
        title: "Content Creation",
        description: "Develop social content designed to communicate information, ideas, services and brand messages."
      },
      {
        title: "Audience Engagement",
        description: "Create content that gives the audience reasons to notice, understand and interact with the brand."
      },
      {
        title: "Consistency",
        description: "Maintain continuity across social communication rather than relying on isolated posts."
      }
    ],
    contentRoles: [
      { role: "EDUCATE", desc: "Useful information and industry-relevant knowledge.", icon: "BookOpen" },
      { role: "INFORM", desc: "Important business and service-related information.", icon: "Bell" },
      { role: "ENGAGE", desc: "Content designed to encourage attention and interaction.", icon: "MessageSquareHeart" },
      { role: "BUILD TRUST", desc: "Professional and informative brand communication.", icon: "ShieldCheck" },
      { role: "REMIND", desc: "Consistent brand presence and visibility.", icon: "Sparkles" }
    ],
    flowTitle: "SOCIAL MEDIA FLOW",
    flowSubtitle: "The social media communication progression:",
    flowSteps: [
      { label: "Brand", highlight: "Identity" },
      { label: "Content", highlight: "Publishing" },
      { label: "Audience Attention", highlight: "Reach" },
      { label: "Engagement", highlight: "Interaction" },
      { label: "Familiarity", highlight: "Recall" },
      { label: "Trust", highlight: "Credibility" },
      { label: "Enquiry / Business Action", highlight: "Action" }
    ],
    takeaway: "Building social media presence is not simply about publishing frequently — it is about creating consistent communication that makes the brand easier to recognise, understand and remember."
  },
  {
    id: "dr-ramans",
    number: "03",
    title: "Dr. Raman's Nature Cure Foundation",
    subtitle: "Performance Marketing",
    client: "Dr. Raman's Nature Cure Foundation",
    reference: "Online business listing / Justdial",
    industry: "Nature Cure / Wellness",
    projectType: "Client Work",
    service: "Performance Marketing",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
    serviceTagColor: "bg-orange-50 text-orange-700 border-orange-200",
    cardLabel: "Dr. Raman's Nature Cure Foundation · Performance Marketing",
    image: ramesNaturalCareImg,
    shortDescription: "Performance marketing support for a wellness-focused organisation, using audience-oriented digital communication to create awareness and encourage relevant action.",
    projectOverview: "Dr. Raman's Nature Cure Foundation is a wellness-oriented client project in the AdsServ portfolio.\n\nMarketing in the wellness space requires communication that is easy to understand, relevant to the audience and sensitive to the importance of trust.\n\nThe project focused on performance marketing with audience-focused messaging and action-oriented campaign communication.",
    objectiveLead: "The campaign focus was to reach relevant audiences, create awareness around the organisation and encourage interested users to take the next step.",
    coreObjectives: [
      "Increase relevant audience reach",
      "Build awareness",
      "Communicate the offering clearly",
      "Generate interest",
      "Encourage enquiries",
      "Support measurable campaign activity"
    ],
    focusTitle: "PERFORMANCE MARKETING FOCUS",
    focusPillars: [
      {
        title: "Audience Targeting",
        description: "Reach audiences with potential interest in wellness and nature-cure services."
      },
      {
        title: "Message Development",
        description: "Create clear and audience-relevant advertising communication."
      },
      {
        title: "Creative",
        description: "Present the service and value proposition in a simple, accessible format."
      },
      {
        title: "Conversion",
        description: "Guide interested users toward enquiry or the relevant next action."
      },
      {
        title: "Optimisation",
        description: "Use available campaign signals to refine targeting, messaging and creative direction."
      }
    ],
    flowTitle: "COMMUNICATION APPROACH",
    flowSubtitle: "For a wellness-focused audience, the campaign journey can be expressed as:",
    flowSteps: [
      { label: "Awareness", highlight: "Discovery" },
      { label: "Relevant Information", highlight: "Education" },
      { label: "Interest", highlight: "Interest" },
      { label: "Trust", highlight: "Trust" },
      { label: "Enquiry", highlight: "Action" }
    ],
    takeaway: "Wellness performance marketing works best when audience relevance, clear communication and trust are considered alongside campaign delivery."
  }
];

// ── 4. MY MARKETING APPROACH (7 STEPS) ────────────────────────────────────────
export const marketingApproachSteps = [
  {
    step: "01",
    title: "OBJECTIVE",
    question: "What does the campaign or channel need to achieve?",
    desc: "Understand the core business goal, commercial targets, and expectations before selecting marketing channels or spending budget."
  },
  {
    step: "02",
    title: "AUDIENCE",
    question: "Who needs to see or engage with the message?",
    desc: "Identify who the target customers are, what they care about, and what problem they are looking to solve."
  },
  {
    step: "03",
    title: "MESSAGE",
    question: "What should the audience understand?",
    desc: "Develop clear, value-driven communication that connects the business solution directly with customer needs."
  },
  {
    step: "04",
    title: "CHANNEL",
    question: "Where is the audience most likely to respond?",
    desc: "Select the most effective platforms—whether paid performance ads, organic social, or content—where the audience is active."
  },
  {
    step: "05",
    title: "EXECUTION",
    question: "Build and launch the appropriate marketing activity.",
    desc: "Produce campaign creative, messaging, audience setup, and landing experience, then deploy the activity."
  },
  {
    step: "06",
    title: "MEASUREMENT",
    question: "Review available campaign and audience signals.",
    desc: "Monitor engagement, response, clicks, enquiries, and performance indicators against the defined objective."
  },
  {
    step: "07",
    title: "OPTIMISATION",
    question: "Improve targeting, creative, messaging and execution.",
    desc: "Use real-world response data to continuously refine audiences, creative direction, copy, and conversion funnels."
  }
];

// ── 5. FINAL CTA DATA ─────────────────────────────────────────────────────────
export const finalCtaData = {
  headingText: "Have a Business That Needs Better Digital Marketing?",
  copy1: "Every business has a different audience, objective and growth opportunity.",
  copy2: "Let's build the marketing approach around what the business actually needs.",
  primaryCtaText: "Start a Project",
  primaryCtaLink: "/contact",
  secondaryCtaText: "View Services",
  secondaryCtaLink: "/services"
};
