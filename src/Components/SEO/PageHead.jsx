import { useEffect, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { blogPosts, getPostBySlug } from '../Blog/blogData';
import { faqCategories } from '../FAQ/faqData';
import { fallbackMetadata, pageMetadata, sharedDescription } from './pageMetadata';

const SITE_URL = 'https://adsserv.in';
const LOGO_URL = `${SITE_URL}/adsserv-logo.webp`;
const FAVICON_URL = '/adsserv-logo.webp?v=1';
const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const organizationSchema = {
  '@type': 'Organization',
  '@id': ORGANIZATION_ID,
  name: 'ADSSERV',
  legalName: 'ADDSERV',
  url: `${SITE_URL}/`,
  logo: { '@type': 'ImageObject', url: LOGO_URL },
  description: 'ADSSERV helps businesses grow through digital marketing strategy, creative communication and performance-focused execution.',
  slogan: 'Build, Brand, Boost',
  foundingDate: '2025',
  founder: { '@type': 'Person', name: 'VJ Babu' },
  email: 'connect@adsserv.in',
  telephone: '+91-7603912438',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'City', name: 'Chennai' },
    { '@type': 'State', name: 'Tamil Nadu' },
    { '@type': 'Country', name: 'India' },
    'Worldwide',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+91-7603912438',
      email: 'connect@adsserv.in',
      areaServed: ['Chennai, Tamil Nadu, India', 'Worldwide'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+91-7603912438',
      email: 'connect@adsserv.in',
      areaServed: ['Chennai, Tamil Nadu, India', 'Worldwide'],
    },
  ],
  knowsAbout: [
    'Digital Marketing', 'Social Media Marketing', 'Instagram Marketing',
    'Performance Marketing', 'Paid Advertising', 'SEO Services',
    'Website Development', 'Influencer Marketing', 'Creator Marketing',
    'Video Production', 'Branding Solutions', 'Content Marketing',
    'Content Writing', 'Digital Consulting', 'Digital Strategy',
    'Lead Generation', 'Customer Acquisition', 'Brand Awareness',
    'Healthcare Marketing', 'Real Estate Marketing', 'Education Marketing',
    'IT-Tech and SaaS Marketing', 'Beauty and Salon Marketing',
  ],
};

const websiteSchema = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'ADSSERV',
  url: `${SITE_URL}/`,
  description: 'ADSSERV is a Gen Z digital marketing agency helping brands grow through social media, SEO, paid advertising, websites, branding, content, creators, and digital strategy.',
  publisher: { '@id': ORGANIZATION_ID },
  inLanguage: 'en-IN',
};

const faqLoaders = {
  '/services/social-media-marketing': () => import('../Services_Provide/SocialMediaMarketingData'),
  '/services/performance-marketing': () => import('../Services_Provide/PerformanceMarketingData'),
  '/services/website-development': () => import('../Services_Provide/WebsiteDevelopmentData'),
  '/services/influencer-marketing': () => import('../Services_Provide/InfluencerMarketingData'),
  '/services/seo-services': () => import('../Services_Provide/SEOServicesData'),
  '/services/video-production': () => import('../Services_Provide/VideoProductionData'),
  '/services/branding-solutions': () => import('../Services_Provide/BrandingSolutionsData'),
  '/services/digital-consulting': () => import('../Services_Provide/DigitalConsultingData'),
  '/services/content-writing': () => import('../Services_Provide/ContentWritingData'),
  '/services/instagram-marketing': () => import('../Services_Provide/InstagramMarketingData'),
  '/industries/health-care': () => import('../Industries/HealthCare/HealthCareData'),
  '/industries/real-estate': () => import('../Industries/RealEstate/RealEstateData'),
  '/industries/education': () => import('../Industries/Education/EducationData'),
  '/industries/it-tech-saas': () => import('../Industries/ItTechSaaS/ItTechSaaSData'),
  '/industries/beauty-salon': () => import('../Industries/BeautySalon/BeautySalonData'),
};

function normalizePath(pathname) {
  const trimmed = pathname.replace(/\/+$/, '');
  return trimmed || '/';
}

function getBreadcrumbSchema(path, title, canonical) {
  if (path === '/') return null;
  const segments = path.split('/').filter(Boolean);
  const items = [{ '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` }];
  segments.forEach((segment, index) => {
    const itemPath = `/${segments.slice(0, index + 1).join('/')}`;
    const label = index === segments.length - 1
      ? title
      : segment.replace(/-/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase());
    items.push({
      '@type': 'ListItem',
      position: index + 2,
      name: label,
      item: index === segments.length - 1 ? canonical : `${SITE_URL}${itemPath}/`,
    });
  });
  return { '@type': 'BreadcrumbList', itemListElement: items };
}

function getPageSchema(path, metadata, canonical, post, pageFaqs) {
  const webpageId = `${canonical}#webpage`;
  const breadcrumb = getBreadcrumbSchema(path, metadata.title, canonical);
  const graph = [organizationSchema, websiteSchema];
  const webpageType = ['AboutPage', 'ContactPage', 'CollectionPage'].includes(metadata.pageType)
    ? metadata.pageType
    : 'WebPage';
  const webpage = {
    '@type': webpageType,
    '@id': webpageId,
    url: canonical,
    name: metadata.title,
    description: metadata.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': ORGANIZATION_ID },
    publisher: { '@id': ORGANIZATION_ID },
    inLanguage: 'en-IN',
  };

  if (path === '/') {
    webpage.mainEntity = { '@id': ORGANIZATION_ID };
    graph.push(webpage);
    return { '@context': 'https://schema.org', '@graph': graph };
  }

  if (metadata.pageType === 'Service') {
    const serviceId = `${canonical}#service`;
    webpage.mainEntity = { '@id': serviceId };
    graph.push(webpage, {
      '@type': 'Service',
      '@id': serviceId,
      name: metadata.title.replace(/\s\|\sADSSERV$/, ''),
      description: metadata.description,
      url: canonical,
      provider: { '@id': ORGANIZATION_ID },
      areaServed: ['India', 'Worldwide'],
      serviceType: metadata.title.replace(/\s\|\sADSSERV$/, ''),
    });
  } else if (metadata.pageType === 'IndustryPage') {
    const industryName = metadata.title.replace(' Digital Marketing | ADSSERV', '');
    const industryId = `${canonical}#industry`;
    webpage.mainEntity = { '@id': industryId };
    graph.push(webpage, {
      '@type': 'Thing',
      '@id': industryId,
      name: `${industryName} Marketing`,
      description: metadata.description,
      subjectOf: { '@id': webpageId },
    });
  } else if (metadata.pageType === 'FAQPage') {
    webpage.mainEntity = { '@id': `${canonical}#faq` };
    graph.push(webpage, {
      '@type': 'FAQPage',
      '@id': `${canonical}#faq`,
      url: canonical,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: faqCategories.flatMap((category) => category.faqs).map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
      inLanguage: 'en-IN',
    });
  } else if (metadata.pageType === 'CollectionPage' && path === '/blog') {
    const blogId = `${canonical}#blog`;
    webpage.mainEntity = { '@id': blogId };
    graph.push(webpage, {
      '@type': 'Blog',
      '@id': blogId,
      name: metadata.title,
      url: canonical,
      publisher: { '@id': ORGANIZATION_ID },
      blogPost: blogPosts.map((blogPost) => ({
        '@type': 'BlogPosting',
        headline: blogPost.title,
        url: `${SITE_URL}/blog/${blogPost.slug}/`,
      })),
    });
  } else if (metadata.pageType === 'CollectionPage' && path === '/projects') {
    const listId = `${canonical}#project-list`;
    webpage.mainEntity = { '@id': listId };
    graph.push(webpage, {
      '@type': 'ItemList',
      '@id': listId,
      name: metadata.title,
      itemListElement: [
        { id: 'no-qu-tam', name: 'No Qu TAM', description: 'Performance marketing for a workforce time and attendance management solution.' },
        { id: 'nu-tech-associates', name: 'Nu-Tech Associates', description: 'Social media marketing for a professional business services company.' },
        { id: 'dr-ramans-nature-cure-foundation', name: "Dr. Raman's Nature Cure Foundation", description: 'Performance marketing for a wellness-focused organisation.' },
      ].map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: project.name,
        description: project.description,
        url: `${canonical}#${project.id}`,
      })),
    });
  } else if (post) {
    const articleId = `${canonical}#article`;
    webpage.mainEntity = { '@id': articleId };
    graph.push(webpage, {
      '@type': 'BlogPosting',
      '@id': articleId,
      headline: post.title,
      description: metadata.description,
      image: post.image ? new URL(post.image, SITE_URL).href : LOGO_URL,
      datePublished: post.published ? new Date(`${post.published} 12:00:00 UTC`).toISOString().slice(0, 10) : undefined,
      mainEntityOfPage: { '@id': webpageId },
      author: { '@id': ORGANIZATION_ID },
      publisher: { '@id': ORGANIZATION_ID },
      inLanguage: 'en-IN',
    });
  } else {
    graph.push(webpage);
  }

  if (pageFaqs?.length && ['Service', 'IndustryPage'].includes(metadata.pageType)) {
    const faqId = `${canonical}#faq`;
    webpage.hasPart = { '@id': faqId };
    graph.push({
      '@type': 'FAQPage',
      '@id': faqId,
      url: canonical,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: pageFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: { '@type': 'Answer', text: faq.a },
      })),
      inLanguage: 'en-IN',
    });
  }

  if (breadcrumb) graph.push(breadcrumb);
  return { '@context': 'https://schema.org', '@graph': graph };
}

export default function PageHead() {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);
  const path = normalizedPath === '/faqs' ? '/faq' : normalizedPath;
  const post = path.startsWith('/blog/') ? getPostBySlug(path.split('/').filter(Boolean).at(-1)) : null;
  const [loadedFaqData, setLoadedFaqData] = useState({ path: null, faqs: [] });
  useEffect(() => {
    let active = true;
    const loadFaqs = faqLoaders[path];
    if (loadFaqs) {
      loadFaqs().then((module) => {
        if (active) setLoadedFaqData({ path, faqs: module.faqData?.faqs || [] });
      });
    }
    return () => { active = false; };
  }, [path]);
  const pageFaqs = useMemo(
    () => loadedFaqData.path === path ? loadedFaqData.faqs : [],
    [loadedFaqData, path],
  );
  const metadata = useMemo(() => post
    ? {
        title: `${post.title} | ADSSERV Blog`,
        description: post.excerpt,
        pageType: 'BlogPosting',
      }
    : pageMetadata[path] || fallbackMetadata, [path, post]);
  const canonical = `${SITE_URL}${path === '/' ? '/' : `${path}/`}`;
  const schema = useMemo(() => getPageSchema(path, metadata, canonical, post, pageFaqs), [path, metadata, canonical, post, pageFaqs]);
  const image = post?.image ? new URL(post.image, SITE_URL).href : LOGO_URL;
  const robots = metadata.noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  return (
    <Helmet>
      <html lang="en-IN" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description || sharedDescription} />
      <meta name="keywords" content={metadata.keywords || `${metadata.title.replace(/\s\|\sADSSERV$/, '')}, ADSSERV`} />
      <meta name="robots" content={robots} />
      <meta name="author" content="ADSSERV" />
      <meta name="copyright" content="ADSSERV" />
      <meta name="language" content="en-IN" />
      <meta httpEquiv="content-language" content="en-IN" />
      <meta name="geo.region" content="IN-TN" />
      <meta name="geo.placename" content="Chennai, Tamil Nadu, India" />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/webp" href={FAVICON_URL} />
      <link rel="apple-touch-icon" href={FAVICON_URL} />
      <meta property="og:type" content={post ? 'article' : 'website'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={metadata.title} />
      <meta property="og:description" content={metadata.description || sharedDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={post?.title || 'ADSSERV digital marketing'} />
      <meta property="og:site_name" content="ADSSERV" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={metadata.title} />
      <meta name="twitter:description" content={metadata.description || sharedDescription} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={post?.title || 'ADSSERV digital marketing'} />
      <script type="application/ld+json">{JSON.stringify(schema).replace(/</g, '\\u003c')}</script>
    </Helmet>
  );
}
