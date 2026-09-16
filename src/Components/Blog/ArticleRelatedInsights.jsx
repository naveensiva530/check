import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function ArticleRelatedInsights({ posts }) {
  if (!posts?.length) return null;

  return (
    <section className="w-full py-16 font-primary border-t border-purple-200/80" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[850px] mx-auto px-4 md:px-8">
        <div className="flex items-center gap-2 mb-8">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-purple-200 flex-shrink-0 shadow-sm">
            <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest text-[13px] text-[var(--brand-orange)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            RELATED INSIGHTS
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {posts.map((post, idx) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group flex flex-col p-5 sm:p-6 bg-white rounded-[24px] border border-purple-100 hover:border-[var(--brand-orange)] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image Preview */}
              {post.image && (
                <div
                  className="w-full h-48 rounded-[18px] overflow-hidden flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ backgroundColor: post.circleBg || '#FCE6D2' }}
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--brand-navy)] bg-[var(--bg-light-purple)] px-3 py-1 rounded-full w-fit mb-3">
                Related Article {String(idx + 1).padStart(2, '0')}
              </span>
              <h3 className="text-[16.5px] font-extrabold leading-snug mb-4 text-[var(--brand-navy)] group-hover:text-[var(--brand-orange)] transition-colors flex-1">
                {post.title}
              </h3>
              <span className="inline-flex items-center gap-2 text-[13px] font-bold text-[var(--brand-navy)] group-hover:text-[var(--brand-orange)] transition-colors">
                Read Article
                <ArrowUpRight className="w-4 h-4 text-[var(--brand-orange)] group-hover:translate-x-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
