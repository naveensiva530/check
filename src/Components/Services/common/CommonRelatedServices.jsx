import React, { useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Palette, 
  PenLine, 
  BarChart2, 
  Users, 
  Camera, 
  Megaphone, 
  Search, 
  Share2, 
  Video, 
  Monitor 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import all 10 service images from assets/Servicess/RelatedServices folder
import brandingImg from '../../../assets/Servicess/RelatedServices/Branding_Solution-removebg-preview.webp';
import contentImg from '../../../assets/Servicess/RelatedServices/Content_Writing-removebg-preview.webp';
import consultingImg from '../../../assets/Servicess/RelatedServices/Digital_consulting-removebg-preview.webp';
import influencerImg from '../../../assets/Servicess/RelatedServices/Influncer_Marketing-removebg-preview.webp';
import instagramImg from '../../../assets/Servicess/RelatedServices/Instragram_marketing-removebg-preview.webp';
import performanceImg from '../../../assets/Servicess/RelatedServices/Performance_marketing-removebg-preview.webp';
import seoImg from '../../../assets/Servicess/RelatedServices/SEO-removebg-preview.webp';
import socialImg from '../../../assets/Servicess/RelatedServices/Social_Media_Marketing-removebg-preview.webp';
import videoImg from '../../../assets/Servicess/RelatedServices/Video_Production-removebg-preview.webp';
import websiteImg from '../../../assets/Servicess/RelatedServices/Website_Development-removebg-preview.webp';

gsap.registerPlugin(ScrollTrigger);

// Helper function to resolve metadata based on service name / title
const getServiceMeta = (svc = {}) => {
  const title = (svc.title || '').toLowerCase().replace(/\s+/g, ' ').trim();
  const href = (svc.href || svc.link || '').toLowerCase().trim();

  if (title.includes('brand') || href.includes('brand')) {
    return {
      img: brandingImg,
      href: '/services/branding-solutions',
      icon: Palette,
      cta: 'Explore Branding Solutions'
    };
  }
  if (title.includes('content') || href.includes('content')) {
    return {
      img: contentImg,
      href: '/services/content-writing',
      icon: PenLine,
      cta: 'Explore Content Writing'
    };
  }
  if (title.includes('consult') || href.includes('consult')) {
    return {
      img: consultingImg,
      href: '/services/digital-consulting',
      icon: BarChart2,
      cta: 'Explore Digital Consulting'
    };
  }
  if (title.includes('influencer') || href.includes('influencer')) {
    return {
      img: influencerImg,
      href: '/services/influencer-marketing',
      icon: Users,
      cta: 'Explore Influencer Marketing'
    };
  }
  if (title.includes('instagram') || href.includes('instagram')) {
    return {
      img: instagramImg,
      href: '/services/instagram-marketing',
      icon: Camera,
      cta: 'Explore Instagram Marketing'
    };
  }
  if (title.includes('performance') || href.includes('performance')) {
    return {
      img: performanceImg,
      href: '/services/performance-marketing',
      icon: Megaphone,
      cta: 'Explore Performance Marketing'
    };
  }
  if (title.includes('seo') || href.includes('seo')) {
    return {
      img: seoImg,
      href: '/services/seo-services',
      icon: Search,
      cta: 'Explore SEO Services'
    };
  }
  if (title.includes('video') || href.includes('video')) {
    return {
      img: videoImg,
      href: '/services/video-production',
      icon: Video,
      cta: 'Explore Video Production'
    };
  }
  if (title.includes('social') || href.includes('social')) {
    return {
      img: socialImg,
      href: '/services/social-media-marketing',
      icon: Share2,
      cta: 'Explore Social Media Marketing'
    };
  }
  if (title.includes('web') || href.includes('web')) {
    return {
      img: websiteImg,
      href: '/services/website-development',
      icon: Monitor,
      cta: 'Explore Website Development'
    };
  }

  return {
    img: svc.img || svc.image || null,
    href: svc.href || svc.link || '#',
    icon: svc.icon || ArrowRight,
    cta: svc.cta || `Explore ${svc.title || 'Service'}`
  };
};

export default function CommonRelatedServices({ 
  tagText = "BUILD THE BRAND. THEN PUT IT TO WORK.",
  headingWords,
  services = []
}) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headingRef.current, 
        { opacity: 0, y: 40 }, 
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.5, 
          ease: 'power3.out', 
          scrollTrigger: { 
            trigger: sectionRef.current, 
            start: 'top 78%', 
            toggleActions: 'play none none none' 
          } 
        }
      );
      cardRefs.current.forEach((card, i) => {
        if (card) {
          gsap.fromTo(
            card, 
            { opacity: 0, x: i % 2 === 0 ? -70 : 70, y: 30 }, 
            { 
              opacity: 1, 
              x: 0, 
              y: 0, 
              duration: 0.45, 
              ease: 'power3.out', 
              delay: i * 0.04, 
              scrollTrigger: { 
                trigger: card, 
                start: 'top 88%', 
                toggleActions: 'play none none none' 
              } 
            }
          );
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [services]);

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              {tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={headingWords} />
        </div>

        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          {services.map((svc, idx) => {
            const meta = getServiceMeta(svc);
            const targetImg = meta.img || svc.img || svc.image;
            const targetHref = svc.href || svc.link || meta.href;
            const IconComponent = svc.icon || meta.icon || ArrowRight;
            const ctaText = svc.cta || meta.cta || `Explore ${svc.title || 'Service'}`;

            return (
              <Link 
                key={idx} 
                to={targetHref} 
                onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                ref={el => cardRefs.current[idx] = el} 
                className="relative w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)] overflow-hidden flex flex-col justify-between bg-white p-7 rounded-[28px] border border-transparent shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-400 group min-h-[280px]"
              >
                <div className="absolute right-[-15px] sm:right-[-20px] bottom-0 w-[180px] h-[180px] sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px] transition-transform duration-500 group-hover:scale-105 group-hover:-translate-x-2 z-0 pointer-events-none flex items-end justify-end">
                  {targetImg && (
                    <img 
                      src={targetImg} 
                      alt={svc.title} 
                      className="w-full h-full object-contain drop-shadow-xl" 
                      loading="lazy" 
                      decoding="async" 
                      width="220" 
                      height="220" 
                    />
                  )}
                </div>
                <div className="relative z-10 flex flex-col h-full w-[60%] sm:w-[55%]">
                  <div 
                    className="w-[42px] h-[42px] rounded-full flex items-center justify-center mb-5 text-white shadow-md transition-transform duration-300 group-hover:scale-110" 
                    style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}
                  >
                    <IconComponent size={20} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-[19px] font-extrabold mb-2.5 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                    {svc.title}
                  </h3>
                  <p className="text-[12.5px] font-medium leading-[1.6] text-slate-500 mb-6 pr-2 line-clamp-3">
                    {svc.desc}
                  </p>
                  <div className="mt-auto inline-flex items-center gap-3 bg-white border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.05)] rounded-full py-1.5 pl-4 pr-1.5 w-max transition-all duration-300 group-hover:border-[var(--brand-purple)] group-hover:shadow-md">
                    <span className="text-[11px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>
                      {ctaText}
                    </span>
                    <div 
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-0.5" 
                      style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}
                    >
                      <ArrowRight size={13} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
