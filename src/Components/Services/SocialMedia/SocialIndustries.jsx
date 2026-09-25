import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

// Import the specific 3D illustration assets
import imgHealth from '../../../assets/SocialMedia/SocialIndustries/Health Care.webp';
import imgRealEstate from '../../../assets/SocialMedia/SocialIndustries/Real Estate.webp';
import imgEducation from '../../../assets/SocialMedia/SocialIndustries/Education care.webp';
import imgTech from '../../../assets/SocialMedia/SocialIndustries/Beauty & Salon.webp';
import imgBeauty from '../../../assets/SocialMedia/SocialIndustries/Beauty & Salon.webp';

const industries = [
  {
    category: "HEALTHCARE MARKETING",
    title: "Health Care",
    path: "/industries/health-care",
    desc: "Build trust through clear, responsible, useful communication.",
    img: imgHealth
  },
  {
    category: "PROPERTY MARKETING",
    title: "Real Estate",
    path: "/industries/real-estate",
    desc: "Turn properties, projects, locations, and expertise into content people can discover and remember.",
    img: imgRealEstate
  },
  {
    category: "EDUCATION MARKETING",
    title: "Education",
    path: "/industries/education",
    desc: "Create content that informs students, parents, professionals, and decision-makers.",
    img: imgEducation
  },
  {
    category: "TECH MARKETING",
    title: "IT-Tech / SaaS",
    path: "/industries/it-tech-saas",
    desc: "Make complex products easier to understand through useful, visual, and educational content.",
    img: imgTech
  },
  {
    category: "LIFESTYLE MARKETING",
    title: "Beauty & Salon",
    path: "/industries/beauty-salon",
    desc: "Use visual storytelling, social proof, community, and short-form content to make the brand more discoverable.",
    img: imgBeauty
  }
];

export default function SocialIndustries() {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          x: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.2,
          ease: 'power3.out',
          stagger: 0.03,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 bg-white relative font-primary overflow-hidden">
      <div className="services-eyebrow max-w-[1400px] w-full mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 max-w-3xl mx-auto">
          <div className="services-eyebrow flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-200 shadow-sm flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '13px',
                color: 'var(--accent-orange)',
              }}
            >
              SOCIAL MEDIA BY INDUSTRY
            </span>
          </div>
          
          <ScrollRevealHeading
            justify="center"
            words={[
              { text: "The" },
              { text: "audience" },
              { text: "changes." },
              { text: "The" },
              { text: "strategy", italic: true },
              { text: "should" },
              { text: "too." }
            ]}
          />
        </div>

        {/* Cards Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-4 lg:gap-3 xl:gap-5 mb-8 max-w-[280px] sm:max-w-none mx-auto" style={{ paddingTop: '20px' }}>
          {industries.map((ind, idx) => {
            // Middle card (index 2) is tallest, cards taper outward
            const heights = ['200px', '240px', '280px', '240px', '200px'];
            const cardHeight = heights[idx] || '220px';

            return (
              <Link
                to={ind.path}
                key={idx}
                ref={el => cardsRef.current[idx] = el}
                className="flex flex-col items-center group relative z-10 hover:z-20 cursor-pointer no-underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent-orange)]"
              >
                {/* Oval Image Card */}
                <div
                  style={{
                    width: '100%',
                    height: cardHeight,
                    borderRadius: '120px',
                    overflow: 'hidden',
                    backgroundColor: '#E8DCFA',
                    position: 'relative',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                    boxShadow: '0 8px 32px rgba(139, 92, 246, 0.12)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 50px rgba(139, 92, 246, 0.22)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(139, 92, 246, 0.12)';
                  }}
                >
                  <img
                    src={ind.img}
                    alt={ind.title}
                    loading="lazy"
                    decoding="async"
                    width="220"
                    height="340"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top',
                      transition: 'transform 0.5s ease',
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.06)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                  />
                  {/* Subtle purple overlay at bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '40%',
                    background: 'linear-gradient(to top, rgba(196, 168, 237, 0.5), transparent)',
                    pointerEvents: 'none',
                  }} />
                </div>

                {/* Text Below */}
                <div className="flex flex-col items-center text-center mt-6 px-2 w-full">
                  
                  <h3
                    className="text-[18px] md:text-[20px] font-extrabold mb-2 leading-tight"
                    style={{ color: 'var(--text-dark-blue)' }}
                  >
                    {ind.title}
                  </h3>
                  <p
                    className="text-[12.5px] md:text-[13px] font-medium leading-relaxed max-w-[180px]"
                    style={{ color: 'var(--text-gray)' }}
                  >
                    {ind.desc}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
        
      </div>
    </section>
  );
}
