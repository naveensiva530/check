import React from 'react';
import { Link } from 'react-router-dom';
import { Search, Home, ChevronRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../Components/HomePage/common.css';
import bgImage from '../../assets/All the Hero Section bg/BLOG.webp';

export default function BlogHero({ searchQuery, onSearchChange, totalArticles }) {
  return (
    <>
      {/* ── BANNER HERO ─────────────────────────────────────────── */}
      <div
        className="relative w-full flex items-center justify-center overflow-hidden"
        style={{ height: 'clamp(220px, 35vw, 420px)', marginTop: 'clamp(60px, 10vw, 90px)' }}
      >
        <div
          className="absolute inset-0 z-0"
          style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        <div className="absolute inset-0 z-[1] bg-[#0f172a]/45" />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full max-w-4xl mx-auto mb-6 sm:mb-10">
          <h1
            className="font-extrabold text-white mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.6rem)' }}
          >
            Blog
          </h1>

          {/* Breadcrumb pill */}
          <div className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full mt-1 border border-slate-200 bg-white">
            <Link
              to="/"
              className="flex items-center gap-1 sm:gap-1.5 transition-opacity hover:opacity-70"
              style={{ color: 'var(--brand-orange)', fontWeight: 700, fontSize: '14px' }}
            >
              <Home className="w-3 h-3 sm:w-3.5 sm:h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" style={{ color: '#9ca3af' }} strokeWidth={2} />
            <span className="text-[13px] sm:text-[16px] font-semibold" style={{ color: 'var(--brand-navy)' }}>
              Blog
            </span>
          </div>
        </div>

        {/* Curved white bottom */}
        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '55px', transform: 'scaleX(-1)' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* ── EDITORIAL HEADER & SEARCH (Below Curve) ── */}
      <section className="w-full bg-white pt-6 sm:pt-10 pb-6 sm:pb-8 px-4 font-primary">
        <div className="max-w-[850px] mx-auto text-center flex flex-col items-center">

          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4 justify-center">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-slate-200 flex-shrink-0">
              <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[12px] sm:text-[13px] text-[var(--brand-orange)]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              ADSSERV BLOG
            </span>
          </div>

          {/* Heading */}
          <ScrollRevealHeading
            justify="center"
            maxW="850px"
            className="mb-3 sm:mb-4"
            style={{ fontSize: 'clamp(1.4rem, 4vw, 2.9rem)', textAlign: 'center' }}
            words={[
              { text: "Digital" },
              { text: "Marketing" },
              { text: "Insights," },
              { text: "Strategies", italic: true },
              { text: "&" },
              { text: "Ideas" }
            ]}
          />

          {/* Supporting Copy */}
          <p className="text-[13px] sm:text-[15px] md:text-[17px] font-normal text-slate-600 max-w-[700px] mx-auto mb-6 sm:mb-8 leading-relaxed">
            Practical insights to help businesses understand digital marketing, improve their online presence and make smarter growth decisions.
          </p>

          {/* Search Bar */}
          <div
            className="relative w-full max-w-[650px] flex items-center bg-white rounded-full transition-colors duration-200 border border-slate-200 focus-within:border-[var(--brand-orange)]"
            style={{ padding: '3px' }}
          >
            <div className="pl-4 sm:pl-5 pr-2 flex items-center justify-center">
              <Search className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery || ''}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              className="w-full py-3 sm:py-3.5 bg-transparent outline-none text-[13px] sm:text-[15px] md:text-[16px] font-medium text-gray-700 placeholder-gray-400"
            />
            {totalArticles !== undefined && (
              <div className="pr-3 sm:pr-4 pl-2 flex items-center">
                <span className="text-[11px] sm:text-[12px] font-bold text-gray-400 whitespace-nowrap">
                  {totalArticles} articles
                </span>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
