import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

export default function LatestInsights({ posts }) {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', delay: i * 0.15,
            scrollTrigger: { trigger: card, start: 'top 85%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [posts]);

  if (!posts.length) return null;

  return (
    <section ref={sectionRef} className="w-full py-12 pb-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-slate-200 flex-shrink-0" style={{ background: 'var(--brand-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--brand-orange)' }}>
              FROM THE ADSSERV BLOG
            </span>
          </div>
          <ScrollRevealHeading justify="center" maxW="700px" words={[
            { text: "More" }, { text: "Ideas" }, { text: "for" }, { text: "Better", italic: true },
            { text: "Digital" }, { text: "Growth" }
          ]} />
        </div>

        {/* Stack of Alternating Capsule Cards (Brand Colors) */}
        <div className="flex flex-col gap-10 lg:gap-14">
          {posts.map((post, idx) => {
            const isReversed = idx % 2 === 0; // Alternates opposite to Featured (Content Left, Image Right)

            return (
              <div
                key={post.id}
                ref={el => cardRefs.current[idx] = el}
                className={`group relative flex flex-col md:flex-row items-center rounded-[36px] md:rounded-full p-4 sm:p-6 md:p-3 lg:p-4 transition-all duration-300
                  ${isReversed ? 'md:flex-row-reverse' : ''}`}
                style={{
                  backgroundColor: post.cardBg || (idx % 2 === 0 ? '#F8FAFC' : '#FFF9F5'),
                }}
              >
                {/* Circular 3D Illustration Area */}
                <div
                  className={`w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[390px] md:h-[390px] lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden flex items-center justify-center flex-shrink-0 mb-6 md:mb-0 transition-transform duration-500 group-hover:scale-[1.02] ${
                    isReversed ? 'md:-mr-1 md:-my-4' : 'md:-ml-1 md:-my-4'
                  }`}
                  style={{
                    backgroundColor: post.circleBg || (idx % 2 === 0 ? '#E4EDF7' : '#FCE6D2'),
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
                  <h3 className="text-[22px] sm:text-[26px] lg:text-[29px] font-extrabold text-[var(--brand-navy)] leading-[1.25] mb-3">
                    {post.title}
                  </h3>

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
            );
          })}
        </div>
      </div>
    </section>
  );
}
