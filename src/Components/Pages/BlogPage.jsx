import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import BlogHero from '../Blog/BlogHero';
import FeaturedBlog from '../Blog/FeaturedBlog';
import LatestInsights from '../Blog/LatestInsights';
import ExploreTopics from '../Blog/ExploreTopics';
import BlogNewsletter from '../Blog/BlogNewsletter';
import BlogFinalCTA from '../Blog/BlogFinalCTA';
import { blogPosts } from '../Blog/blogData';
import '../HomePage/common.css';

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return blogPosts;
    return blogPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) ?? filteredPosts[0] ?? null;
  const latestPosts = filteredPosts.filter((p) => p.id !== featuredPost?.id);

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />
      
      <main className="flex-1">
        {/* ── 1. HERO ───────────────────────── */}
        <BlogHero
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          totalArticles={filteredPosts.length}
        />

        {/* ── 2. FEATURED BLOG ───────────────────────── */}
        {featuredPost && <FeaturedBlog post={featuredPost} />}

        {/* ── 3. LATEST INSIGHTS ───────────────────────── */}
        <LatestInsights posts={latestPosts} />

        {/* ── 4. EXPLORE MORE ───────────────────────── */}
        <ExploreTopics />

        {/* ── 5. NEWSLETTER ───────────────────────── */}
        <BlogNewsletter />

        {/* ── 6. FINAL CTA ───────────────────────── */}
        <BlogFinalCTA />
      </main>

      <Footer />
    </div>
  );
}
