// Eagerly discover all images in src/assets across all subdirectories
const assetImages = import.meta.glob(
  "../assets/**/*.{png,jpg,jpeg,webp,svg,gif,avif}",
  { eager: true, import: "default" }
);

// Public assets
const publicImages = [
  "/assets/main_banner_image.png",
  "/assets/author_avatar.png",
  "/favicon.svg",
];

let imagesPreloaded = false;
let routesPreloaded = false;

// Preload and decode all images into browser memory/disk cache
export function preloadAllImages() {
  if (imagesPreloaded || typeof window === "undefined") return;
  imagesPreloaded = true;

  const urls = [
    ...Object.values(assetImages),
    ...publicImages,
  ].filter((url) => typeof url === "string" && url.length > 0);

  // Load in parallel with image decoding for 0.0s instant display
  urls.forEach((src) => {
    try {
      const img = new Image();
      img.src = src;
      if (typeof img.decode === "function") {
        img.decode().catch(() => {
          // Fallback handled silently
        });
      }
    } catch {
      // Ignore
    }
  });
}

// Lazy route loader references
export const routePreloaders = {
  "/": () => import("../Home"),
  "/about": () => import("../Components/Pages/AboutPage"),
  "/projects": () => import("../Components/Pages/ProjectsPage"),
  "/blog": () => import("../Components/Pages/BlogPage"),
  "/blog/": () => import("../Components/Pages/BlogArticlePage"),
  "/faq": () => import("../Components/Pages/FAQPage"),
  "/faqs": () => import("../Components/Pages/FAQPage"),
  "/contact": () => import("../Components/Pages/ContactPage"),
  "/services": () => import("../Components/Pages/ServicesPage"),
  
  // All 10 Navbar Services
  "/services/social-media-marketing": () => import("../Components/Services_Provide/SocialMediaMarketing"),
  "/services/performance-marketing": () => import("../Components/Services_Provide/PerformanceMarketing"),
  "/services/website-development": () => import("../Components/Services_Provide/WebsiteDevelopment"),
  "/services/influencer-marketing": () => import("../Components/Services_Provide/InfluencerMarketing"),
  "/services/seo-services": () => import("../Components/Services_Provide/SEOServices"),
  "/services/video-production": () => import("../Components/Services_Provide/VideoProduction"),
  "/services/branding-solutions": () => import("../Components/Services_Provide/BrandingSolutions"),
  "/services/digital-consulting": () => import("../Components/Services_Provide/DigitalConsulting"),
  "/services/content-writing": () => import("../Components/Services_Provide/ContentWriting"),
  "/services/instagram-marketing": () => import("../Components/Services_Provide/InstagramMarketing"),

};

// Preload all page component chunks into browser memory
export function preloadAllRoutes() {
  if (routesPreloaded || typeof window === "undefined") return;
  routesPreloaded = true;

  Object.values(routePreloaders).forEach((loader) => {
    try {
      loader();
    } catch {
      // Ignore
    }
  });
}

// Preload a specific route on hover or focus
export function preloadRoute(path) {
  if (!path) return;
  const loader = routePreloaders[path];
  if (loader) {
    try {
      loader();
    } catch {
      // Ignore
    }
  }
}
