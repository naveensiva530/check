import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function FeaturedBlog({ post }) {
  if (!post) return null;

  return (
    <section className="w-full pb-8 pt-4 relative font-primary bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-slate-200 flex-shrink-0">
            <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--brand-orange)' }}>
            FEATURED BLOG
          </span>
        </div>

        {/* Exact Stadium Capsule Card (Brand Colors) */}
        <div
          className="group relative flex flex-col md:flex-row items-center rounded-[36px] md:rounded-full p-4 sm:p-6 md:p-3 lg:p-4 transition-all duration-300"
          style={{
            backgroundColor: post.cardBg || '#FFF9F5',
          }}
        >
          {/* Circular 3D Illustration Area */}
          <div
            className="w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 md:-ml-1 md:-my-4 transition-transform duration-500 group-hover:scale-[1.02]"
            style={{
              backgroundColor: post.circleBg || '#FCE6D2',
            }}
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content Area */}
          <div className="w-full md:flex-1 flex flex-col justify-center px-4 sm:px-8 md:px-10 lg:px-14 py-4 md:py-8">
            <span className="text-[12px] font-bold uppercase tracking-widest text-[var(--brand-orange)] mb-2 block">
              {post.category}
            </span>
            <h2 className="text-[22px] sm:text-[26px] lg:text-[29px] font-extrabold text-[var(--brand-navy)] leading-[1.25] mb-3">
              {post.title}
            </h2>

            {/* Excerpt */}
            {post.excerpt && (
              <p className="text-[14px] sm:text-[15px] font-normal text-slate-600 leading-relaxed mb-4">
                {post.excerpt}
              </p>
            )}

            {/* Article Information */}
            {post.meta && (
              <div className="text-[12px] sm:text-[13px] font-semibold text-slate-400 mb-6">
                {post.meta}
              </div>
            )}

            {/* Brand Pill Button */}
            <Link
              to={`/blog/${post.slug}`}
              className="inline-flex items-center justify-center px-8 py-3 bg-[var(--brand-orange)] hover:bg-[var(--brand-navy)] text-white text-[14px] font-bold rounded-full transition-colors duration-200 w-fit"
            >
              Read Article
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
