import React, { createElement, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import BlogArticleHero from '../Blog/BlogArticleHero';
import ArticleCTA from '../Blog/ArticleCTA';
import ArticleRelatedInsights from '../Blog/ArticleRelatedInsights';
import ArticleFooterBar from '../Blog/ArticleFooterBar';
import { getPostBySlug, blogPosts } from '../Blog/blogData';
import { getArticleContent } from '../Blog/articles';
import '../HomePage/common.css';

const articleCTAConfig = {
  'seo-in-the-age-of-ai-search': {
    eyebrow: 'WANT TO IMPROVE YOUR SEARCH VISIBILITY?',
    title: 'Want to Improve Your Search Visibility?',
    copy: 'If your website is not generating the visibility, traffic or enquiries you expect, the first step is understanding what is holding it back. ADSSERV can help businesses evaluate their digital presence, identify opportunities and build a search strategy around their actual business objectives.',
    primaryLabel: 'Talk to Our Team',
    primaryLink: '/contact',
    secondaryLabel: 'Explore SEO Services',
    secondaryLink: '/services/seo-services',
    relatedSlugs: ['how-to-build-a-digital-marketing-strategy', 'why-your-business-needs-a-social-media-strategy'],
  },
  'why-your-business-needs-a-social-media-strategy': {
    eyebrow: 'SOCIAL MEDIA STRATEGY',
    title: 'Want to Build a Stronger Social Media Presence?',
    copy: 'If your social media feels inconsistent, difficult to manage or disconnected from your business goals, a clearer strategy can help bring everything together. ADSSERV can help businesses develop social media strategies, content systems and campaigns designed around their audience, brand and growth objectives.',
    primaryLabel: 'Talk to Our Team',
    primaryLink: '/contact',
    secondaryLabel: 'Explore Social Media Services',
    secondaryLink: '/services/social-media-marketing',
    relatedSlugs: ['seo-in-the-age-of-ai-search', 'how-to-build-a-digital-marketing-strategy'],
  },
  'how-to-build-a-digital-marketing-strategy': {
    eyebrow: 'CONNECTED DIGITAL MARKETING STRATEGY',
    title: 'Want a More Connected Digital Marketing Strategy?',
    copy: 'If your SEO, content, social media, paid advertising and website activity feel disconnected, the first step is to understand what is working, what is missing and where the biggest opportunities are. ADSSERV can help businesses build a more connected digital marketing approach around their audience, objectives, customer journey and measurable business outcomes.',
    primaryLabel: 'Talk to Our Team',
    primaryLink: '/contact',
    secondaryLabel: 'Explore Digital Consulting',
    secondaryLink: '/services/digital-consulting',
    relatedSlugs: ['seo-in-the-age-of-ai-search', 'why-your-business-needs-a-social-media-strategy'],
  },
};

export default function BlogArticlePage() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const ArticleContent = getArticleContent(slug);
  const ctaConfig = articleCTAConfig[slug];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post || !ArticleContent) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = ctaConfig?.relatedSlugs
    ?.map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) ?? [];

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />
      <BlogArticleHero post={post} />
      <main className="flex-1">
        {/* Featured article image from assets/Blog/Artical Inside image */}
        {post.articleImage && (
          <div className="max-w-[520px] mx-auto px-4 md:px-8 pt-10 -mb-2">
            <div
              className="w-full aspect-square rounded-[28px] overflow-hidden border border-purple-100/80 shadow-[0_15px_40px_rgba(30,47,87,0.06)] flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]"
              style={{ backgroundColor: '#D9C6FF' }}
            >
              <div
                className="w-full h-full rounded-[24px] flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: '#D9C6FF' }}
              >
                <img
                  src={post.articleImage}
                  alt={post.title}
                  className="w-full h-full object-contain drop-shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        {createElement(ArticleContent)}
        {ctaConfig && (
          <ArticleCTA
            eyebrow={ctaConfig.eyebrow}
            title={ctaConfig.title}
            copy={ctaConfig.copy}
            primaryLabel={ctaConfig.primaryLabel}
            primaryLink={ctaConfig.primaryLink}
            secondaryLabel={ctaConfig.secondaryLabel}
            secondaryLink={ctaConfig.secondaryLink}
          />
        )}
        <ArticleRelatedInsights posts={relatedPosts} />
        <ArticleFooterBar post={post} />
      </main>
      <Footer />
    </div>
  );
}


