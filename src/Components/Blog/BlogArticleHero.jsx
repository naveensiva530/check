import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../../Components/Services/common/ScrollRevealHeading';

import bgSeo from '../../assets/Blog/Blog_Artical bg image/SEO & AI SEARCH.webp';
import bgSocial from '../../assets/Blog/Blog_Artical bg image/SOCIAL MEDIA MARKETING.webp';
import bgDigital from '../../assets/Blog/Blog_Artical bg image/DIGITAL MARKETING STRATEGY.webp';

export default function BlogArticleHero({ post }) {
  const bgImage =
    post.slug === 'seo-in-the-age-of-ai-search' ? bgSeo :
    post.slug === 'why-your-business-needs-a-social-media-strategy' ? bgSocial :
    bgDigital;

  const emphasisBySlug = {
    'seo-in-the-age-of-ai-search': 'search',
    'why-your-business-needs-a-social-media-strategy': 'strategy',
    'how-to-build-a-digital-marketing-strategy': 'strategy',
  };
  const emphasisWord = emphasisBySlug[post.slug];
  const headingWords = post.title.split(' ').map((word) => ({
    text: word,
    italic: word.replace(/[.,:;!?]$/, '').toLowerCase() === emphasisWord,
  }));

  return (
    <>
      <div className="page-hero-banner relative w-full flex items-center justify-center overflow-hidden">
        <img
          src={bgImage}
          alt={post.title}
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 z-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />
        <div className="absolute z-[2]" style={{ top: '-40px', left: '-40px', width: '220px', height: '220px', borderRadius: '50%', background: 'rgba(196,181,253,0.18)', filter: 'blur(40px)', animation: 'floatBlob 6s ease-in-out infinite' }} />
        <div className="absolute z-[2]" style={{ bottom: '-30px', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(167,139,250,0.20)', filter: 'blur(35px)', animation: 'floatBlob 8s ease-in-out infinite reverse' }} />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
          <div
            className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1"
            style={{ background: '#ffffff', boxShadow: '0 4px 20px rgba(80,0,180,0.12)' }}
          >
            <Link to="/" className="uiverse-home-btn">
              <Home strokeWidth={2.5} />
              <p>Home</p>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <Link to="/blog" className="text-[13px] sm:text-[15px] font-semibold text-slate-500 hover:text-[var(--brand-orange)] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[15px] font-semibold truncate max-w-[120px] sm:max-w-[250px]" style={{ color: '#1e2f57' }}>
              {post.category}
            </span>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '60px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>

        <style>{`
          @keyframes floatBlob {
            0%, 100% { transform: scale(1) translate(0, 0); }
            50% { transform: scale(1.08) translate(10px, -10px); }
          }
        `}</style>
      </div>

      {/* ── EDITORIAL CONTENT SECTION ─────────────────────────── */}
      <section className="w-full bg-white pt-8 sm:pt-12 md:pt-16 pb-6 px-4 md:px-8 border-b border-purple-100/60" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="services-eyebrow max-w-[1200px] mx-auto">
          {/* Eyebrow */}
          <div className="services-eyebrow flex items-center gap-2 mb-4 sm:mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest text-[12px] sm:text-[13px]" style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange, #e08326)' }}>
              {post.category}
            </span>
          </div>

          {/* Blog Title using ScrollRevealHeading */}
          <ScrollRevealHeading className="mb-6 sm:mb-8" words={headingWords} />

          {/* Meta Info */}
          <div className="text-[13px] font-bold text-[var(--brand-navy)] bg-[var(--bg-light-purple)] border border-purple-200/70 px-4 py-2 rounded-full flex items-center gap-2 w-fit">
            <span>{post.meta}</span>
          </div>
        </div>
      </section>
    </>
  );
}
