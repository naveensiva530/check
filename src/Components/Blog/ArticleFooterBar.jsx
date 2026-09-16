import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Share2 } from 'lucide-react';
import '../../Components/HomePage/common.css';

export default function ArticleFooterBar({ post }) {
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: post.title, url });
      } catch {
        /* user cancelled */
      }
    } else {
      await navigator.clipboard.writeText(url);
    }
  };

  return (
    <section className="w-full py-12 border-t border-slate-100 font-primary bg-white">
      <div className="max-w-[850px] mx-auto px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-purple-100/60">
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Category</span>
            <span className="text-[14px] font-bold text-[var(--brand-navy)] bg-[var(--bg-light-purple)] border border-purple-200/70 px-3.5 py-1.5 rounded-full w-fit">
              {post.categoryLabel ?? post.category}
            </span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[12px] font-bold uppercase tracking-widest text-slate-400">Published</span>
            <span className="text-[14px] font-bold text-[var(--brand-navy)] bg-[var(--bg-light-purple)] border border-purple-200/70 px-3.5 py-1.5 rounded-full w-fit">
              {post.published}
            </span>
          </div>
          <button
            onClick={handleShare}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-purple-200/70 bg-[var(--bg-light-purple)] text-[13px] font-bold text-[var(--brand-navy)] hover:border-[var(--brand-orange)] hover:text-[var(--brand-orange)] transition-colors w-fit cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-[var(--brand-orange)]" />
            Share this article
          </button>
        </div>

        <div className="pt-8">
          <Link
            to="/blog"
            className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[var(--bg-light-purple)] border border-purple-200/70 hover:bg-[var(--brand-orange)] hover:border-[var(--brand-orange)] hover:text-white text-[14px] font-bold text-[var(--brand-navy)] transition-all duration-300 w-fit"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
        </div>
      </div>
    </section>
  );
}
