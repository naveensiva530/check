import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function BlogArticleHero({ post }) {
  return (
    <>
      <div className="relative w-full flex items-center justify-center overflow-hidden" style={{ minHeight: '340px', marginTop: '90px' }}>
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${post.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0 z-[1]"
          style={{ background: 'linear-gradient(135deg, rgba(30,47,87,0.94) 0%, rgba(30,47,87,0.84) 100%)' }}
        />

        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 max-w-[950px] pt-12 pb-16">
          <div className="flex items-center gap-2 mb-4 justify-center">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-slate-200 flex-shrink-0">
              <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="text-[12px] font-bold uppercase tracking-widest text-[var(--brand-orange)]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {post.category}
            </span>
          </div>

          <h1 className="font-extrabold text-white tracking-tight leading-[1.2] text-[26px] sm:text-[34px] md:text-[42px] max-w-[850px]">
            {post.title}
          </h1>
        </div>

        <div className="absolute bottom-[-1px] left-0 w-full overflow-hidden z-20" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1200 100" preserveAspectRatio="none" className="block w-full" style={{ height: '70px' }}>
            <path d="M0,100 C300,0 900,0 1200,100 L1200,100 L0,100 Z" fill="#ffffff" />
          </svg>
        </div>
      </div>

      {/* Breadcrumbs and Article Meta below curve */}
      <div className="w-full bg-white pt-6 pb-6 px-4 md:px-8 font-primary border-b border-purple-100/60">
        <div className="max-w-[850px] mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full w-fit bg-[var(--bg-light-purple)] border border-purple-200/70">
            <Link to="/" className="flex items-center gap-1.5 transition-opacity hover:opacity-70 text-[13px] font-bold text-[var(--brand-orange)]">
              <Home className="w-3.5 h-3.5" strokeWidth={2.5} />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
            <Link to="/blog" className="text-[13px] font-bold text-[var(--brand-navy)] hover:text-[var(--brand-orange)] transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" strokeWidth={2} />
            <span className="text-[13px] font-semibold text-slate-700 truncate max-w-[180px] sm:max-w-[300px]">
              {post.title}
            </span>
          </div>
          <div className="text-[13px] font-bold text-[var(--brand-navy)] bg-[var(--bg-light-purple)] border border-purple-200/70 px-4 py-2 rounded-full flex items-center gap-2 w-fit">
            <span>{post.meta}</span>
          </div>
        </div>
      </div>
    </>
  );
}
