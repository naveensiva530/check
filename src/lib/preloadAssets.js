const routePreloaders = {
  '/': () => import('../Home'),
  '/about': () => import('../Components/Pages/AboutPage'),
  '/projects': () => import('../Components/Pages/ProjectsPage'),
  '/blog': () => import('../Components/Pages/BlogPage'),
  '/blog/:slug': () => import('../Components/Pages/BlogArticlePage'),
  '/faq': () => import('../Components/Pages/FAQPage'),
  '/contact': () => import('../Components/Pages/ContactPage'),
  '/services': () => import('../Components/Pages/ServicesPage'),
  '/services/social-media-marketing': () => import('../Components/Services_Provide/SocialMediaMarketing'),
  '/services/performance-marketing': () => import('../Components/Services_Provide/PerformanceMarketing'),
  '/services/website-development': () => import('../Components/Services_Provide/WebsiteDevelopment'),
  '/services/influencer-marketing': () => import('../Components/Services_Provide/InfluencerMarketing'),
  '/services/seo-services': () => import('../Components/Services_Provide/SEOServices'),
  '/services/video-production': () => import('../Components/Services_Provide/VideoProduction'),
  '/services/branding-solutions': () => import('../Components/Services_Provide/BrandingSolutions'),
  '/services/digital-consulting': () => import('../Components/Services_Provide/DigitalConsulting'),
  '/services/content-writing': () => import('../Components/Services_Provide/ContentWriting'),
  '/services/instagram-marketing': () => import('../Components/Services_Provide/InstagramMarketing'),
  '/industries/health-care': () => import('../Components/Industries/HealthCare/HealthCare'),
  '/industries/real-estate': () => import('../Components/Industries/RealEstate/RealEstate'),
  '/industries/education': () => import('../Components/Industries/Education/Education'),
  '/industries/it-tech-saas': () => import('../Components/Industries/ItTechSaaS/ItTechSaaS'),
  '/industries/beauty-salon': () => import('../Components/Industries/BeautySalon/BeautySalon'),
};

// Preload only the route a visitor is about to open, such as on link hover.
export function preloadRoute(path) {
  if (!path) return;

  const normalizedPath = path.replace(/\/+$/, '') || '/';
  const loader = routePreloaders[normalizedPath]
    || (normalizedPath.startsWith('/blog/') ? routePreloaders['/blog/:slug'] : undefined);

  loader?.().catch(() => {});
}
