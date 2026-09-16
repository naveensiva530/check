import imgSeoAi from '../../assets/Blog/SEO & AI Search.webp';
import imgSocialMarketing from '../../assets/Blog/Social Media marketing.webp';
import imgDigitalMarketing from '../../assets/Blog/Digital_Marketing.webp';

export const blogPosts = [
  {
    id: '01',
    slug: 'seo-in-the-age-of-ai-search',
    category: 'SEO & AI SEARCH',
    categoryLabel: 'SEO & AI Search',
    title: 'SEO in the Age of AI Search: What Businesses Need to Do Now',
    excerpt: 'Search is changing beyond traditional blue links. AI-powered search experiences are changing how people discover information, compare businesses and decide what to trust. Businesses need to think beyond rankings and create content that is useful, clear and easy for both people and search systems to understand.',
    bullets: [
      'AI search optimization beyond traditional blue links',
      'Direct-answer architecture tailored for generative search engines',
      'Building authoritative conversational signals and brand trust'
    ],
    meta: 'SEO & AI Search · 9 Aug 2026 · 7 min read',
    published: '9 August 2026',
    readTime: '7 min read',
    image: imgSeoAi,
    cardBg: '#FFF9F5',
    circleBg: '#FCE6D2',
    featured: true,
  },
  {
    id: '02',
    slug: 'why-your-business-needs-a-social-media-strategy',
    category: 'SOCIAL MEDIA MARKETING',
    categoryLabel: 'Social Media Marketing',
    title: 'Why Your Business Needs a Social Media Strategy, Not Just More Posts',
    excerpt: 'Posting consistently is only one part of social media marketing. A stronger approach connects your content with your audience, brand, business objectives and measurable outcomes.',
    bullets: [
      'Aligning social content with commercial business objectives',
      'Platform-native creative tailored to modern attention spans',
      'Focusing on engagement that drives real retention and pipeline'
    ],
    meta: 'Social Media Marketing · 9 Aug 2026 · 6 min read',
    published: '9 August 2026',
    readTime: '6 min read',
    image: imgSocialMarketing,
    cardBg: '#F8FAFC',
    circleBg: '#E4EDF7',
  },
  {
    id: '03',
    slug: 'how-to-build-a-digital-marketing-strategy',
    category: 'DIGITAL MARKETING STRATEGY',
    categoryLabel: 'Digital Marketing Strategy',
    title: 'How to Build a Digital Marketing Strategy That Connects Every Channel',
    excerpt: 'SEO, social media, paid advertising, content and your website should not operate as disconnected activities. A connected digital marketing strategy helps each channel support the customer journey and the larger business objective.',
    bullets: [
      'Connecting SEO, paid ads, and social into a unified flywheel',
      'Eliminating siloed marketing channels and conflicting messaging',
      'End-to-end customer journey tracking with clear commercial KPIs'
    ],
    meta: 'Digital Marketing Strategy · 9 Aug 2026 · 8 min read',
    published: '9 August 2026',
    readTime: '8 min read',
    image: imgDigitalMarketing,
    cardBg: '#FFF9F5',
    circleBg: '#FCE6D2',
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}

export const topics = [
  { title: 'SEO & Organic Growth', desc: 'Search visibility, technical SEO, keyword strategy and sustainable organic growth.' },
  { title: 'AEO & AI Search', desc: 'Answer-focused content, AI search and the changing search experience.' },
  { title: 'Social Media Marketing', desc: 'Social strategy, content, engagement and audience growth.' },
  { title: 'Performance Marketing', desc: 'Paid campaigns, conversion optimisation and measurable marketing.' },
  { title: 'Content & Copywriting', desc: 'Content strategy, website copy, blogs and conversion-focused content.' },
  { title: 'Websites & UX', desc: 'Website experience, landing pages, usability and conversion journeys.' },
  { title: 'Branding & Creative', desc: 'Brand identity, creative communication and digital presence.' },
  { title: 'Digital Strategy', desc: 'Connected marketing strategies, planning and business-focused growth.' },
];
