import React, { useEffect } from 'react';
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
    eyebrow: 'LOOKING FOR STRATEGIC SOCIAL MEDIA GROWTH?',
    title: 'Turn Followers into Commercial Customers',
    copy: 'If your social media is not generating meaningful engagement, qualified inquiries or brand recognition, we can help build a platform-native strategy that delivers measurable business outcomes.',
    primaryLabel: 'Talk to Our Team',
    primaryLink: '/contact',
    secondaryLabel: 'Explore Social Media Services',
    secondaryLink: '/services/social-media-marketing',
    relatedSlugs: ['seo-in-the-age-of-ai-search', 'how-to-build-a-digital-marketing-strategy'],
  },
  'how-to-build-a-digital-marketing-strategy': {
    eyebrow: 'READY TO CONNECT EVERY MARKETING CHANNEL?',
    title: 'Build a Synchronized Growth Engine',
    copy: 'Stop running disconnected campaigns. ADSSERV helps ambitious businesses unite SEO, paid advertising, social media, and web conversion into a cohesive, high-performing system.',
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
        {/* Featured Visual Image from assets/Blog */}
        {post.image && (
          <div className="max-w-[850px] mx-auto px-4 md:px-8 pt-10 -mb-2">
            <div
              className="w-full h-[300px] sm:h-[380px] md:h-[440px] rounded-[32px] overflow-hidden border border-purple-100/80 shadow-[0_15px_40px_rgba(30,47,87,0.06)] flex items-center justify-center transition-transform duration-500 hover:scale-[1.01]"
              style={{ backgroundColor: post.cardBg || '#FFF9F5' }}
            >
              <div
                className="w-full h-full rounded-[24px] flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: post.circleBg || '#FCE6D2' }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover drop-shadow-md"
                />
              </div>
            </div>
          </div>
        )}

        <ArticleContent />
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
