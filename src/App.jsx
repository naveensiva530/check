import React, { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import CurtainLoader from "./Components/ui/CurtainLoader";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Global Lenis smooth scroll manager across all routes
function SmoothScrollManager() {
  const { pathname } = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.6,
      infinite: false,
    });

    window.__lenis = lenis;
    lenis.on("scroll", ScrollTrigger.update);

    const rafCallback = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(rafCallback);
      delete window.__lenis;
    };
  }, []);

  useEffect(() => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);
    return () => clearTimeout(refreshTimer);
  }, [pathname]);

  return null;
}

// Code-split secondary pages for high performance & fast initial load
const AboutPage = lazy(() => import("./Components/Pages/AboutPage"));
const ProjectsPage = lazy(() => import("./Components/Pages/ProjectsPage"));
const BlogPage = lazy(() => import("./Components/Pages/BlogPage"));
const BlogArticlePage = lazy(() => import("./Components/Pages/BlogArticlePage"));
const FAQPage = lazy(() => import("./Components/Pages/FAQPage"));
const ContactPage = lazy(() => import("./Components/Pages/ContactPage"));
const ServicesPage = lazy(() => import("./Components/Pages/ServicesPage"));
const NotFoundPage = lazy(() => import("./Components/Pages/NotFoundPage"));

// Code-split service detail pages
const SocialMediaMarketing = lazy(() => import("./Components/Services_Provide/SocialMediaMarketing"));
const PerformanceMarketing = lazy(() => import("./Components/Services_Provide/PerformanceMarketing"));
const WebsiteDevelopment = lazy(() => import("./Components/Services_Provide/WebsiteDevelopment"));
const InfluencerMarketing = lazy(() => import("./Components/Services_Provide/InfluencerMarketing"));
const SEOServices = lazy(() => import("./Components/Services_Provide/SEOServices"));
const VideoProduction = lazy(() => import("./Components/Services_Provide/VideoProduction"));
const BrandingSolutions = lazy(() => import("./Components/Services_Provide/BrandingSolutions"));
const DigitalConsulting = lazy(() => import("./Components/Services_Provide/DigitalConsulting"));
const ContentWriting = lazy(() => import("./Components/Services_Provide/ContentWriting"));
const InstagramMarketing = lazy(() => import("./Components/Services_Provide/InstagramMarketing"));
const HealthCare = lazy(() => import("./Components/Services_Provide/HealthCare"));
const RealEstate = lazy(() => import("./Components/Services_Provide/RealEstate"));
const Education = lazy(() => import("./Components/Services_Provide/Education"));
const ITTechSAAS = lazy(() => import("./Components/Services_Provide/ITTechSAAS"));
const BeautyAndSalon = lazy(() => import("./Components/Services_Provide/BeautyAndSalon"));

export default function App() {
  const [showLoader, setShowLoader] = useState(() => {
    if (typeof window === "undefined") return false;
    try {
      const params = new URLSearchParams(window.location.search);
      // Optional bypass for developer testing
      if (params.get("loader") === "true") return true;

      // Only display loader on the starting (home) page
      const path = window.location.pathname.replace(/\/$/, "") || "/";
      const isStartingPage = path === "/" || path === "/index.html";
      if (!isStartingPage) return false;

      // Check if loader has already been shown in this browser session
      const hasSeen = sessionStorage.getItem("adsserv_preloader_seen");
      return !hasSeen;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (showLoader) {
      try {
        sessionStorage.setItem("adsserv_preloader_seen", "true");
      } catch {
        // ignore in case sessionStorage is disabled
      }
    }
  }, [showLoader]);

  return (
    <>
      {showLoader && (
        <CurtainLoader
          title="ADS SERV"
          subtitle="2026"
          onComplete={() => setShowLoader(false)}
        />
      )}
      <Router>
        <SmoothScrollManager />
        <Suspense fallback={<div className="w-full min-h-screen bg-white" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogArticlePage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketing />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/seo-services" element={<SEOServices />} />
            <Route path="/services/video-production" element={<VideoProduction />} />
            <Route path="/services/branding-solutions" element={<BrandingSolutions />} />
            <Route path="/services/digital-consulting" element={<DigitalConsulting />} />
            <Route path="/services/content-writing" element={<ContentWriting />} />
            <Route path="/services/instagram-marketing" element={<InstagramMarketing />} />
            <Route path="/services/health-care" element={<HealthCare />} />
            <Route path="/services/real-estate" element={<RealEstate />} />
            <Route path="/services/education" element={<Education />} />
            <Route path="/services/it-tech-saas" element={<ITTechSAAS />} />
            <Route path="/services/beauty-and-salon" element={<BeautyAndSalon />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}