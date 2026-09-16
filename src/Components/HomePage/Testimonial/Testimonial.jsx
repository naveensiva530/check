import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
// Removed unused framer-motion imports
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, LayoutGroup } from 'framer-motion';
import { TextRotate } from '../../../Components/ui/text-rotate';
import '../common.css';

// Import real client logos
import clientTam from '../../../assets/HomePage/clients/client7.webp';
import clientNuTech from '../../../assets/HomePage/clients/client13.webp';
import clientRamans from '../../../assets/HomePage/clients/client6.webp';
import clientAayushmaan from '../../../assets/HomePage/clients/client1.webp';
import clientJkHomes from '../../../assets/HomePage/clients/client2.webp';
import clientBlueNest from '../../../assets/HomePage/clients/client4.webp';
import clientRightAngle from '../../../assets/HomePage/clients/client5.webp';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    id: 1,
    name: "No Qu TAM",
    role: "Workforce Technology / SaaS",
    quote: "AdsServ gave our TAM workforce solution sharp positioning and high-intent performance marketing. Their B2B campaign messaging connected our software directly with relevant enterprise decision-makers and boosted demo enquiries.",
    rating: "5.0",
    avatar: clientTam
  },
  {
    id: 2,
    name: "Nu-Tech Associates",
    role: "Professional / Business Services",
    quote: "Nu-Tech needed a consistent, professional digital presence. AdsServ structured our entire social media communication across educating, engaging, and building trust, making our brand easily recognized and respected.",
    rating: "5.0",
    avatar: clientNuTech
  },
  {
    id: 3,
    name: "Dr. Raman's Nature Cure",
    role: "Nature Cure & Wellness Foundation",
    quote: "Marketing in healthcare requires clarity and deep audience trust. AdsServ's performance marketing approach guided patients smoothly from initial awareness to confident consultation enquiries.",
    rating: "5.0",
    avatar: clientRamans
  },
  {
    id: 4,
    name: "Sterling Aayushmaan",
    role: "Natural Healthcare & Wellness",
    quote: "AdsServ's creative direction and targeted digital campaigns helped us reach health-conscious audiences effectively. Their team understands how to communicate genuine health benefits while driving measurable results.",
    rating: "5.0",
    avatar: clientAayushmaan
  },
  {
    id: 5,
    name: "JK Homes",
    role: "Real Estate & Construction",
    quote: "Generating qualified real estate buyer leads requires high-converting ad funnels and trustworthy presentation. AdsServ delivered exceptional performance campaigns that lowered our acquisition costs significantly.",
    rating: "5.0",
    avatar: clientJkHomes
  },
  {
    id: 6,
    name: "BlueNest Homes",
    role: "Residential Developments",
    quote: "From project launches to social media engagement, AdsServ brought our properties into the spotlight. Their data-driven marketing execution consistently brought high-intent homebuyers to our projects.",
    rating: "5.0",
    avatar: clientBlueNest
  },
  {
    id: 7,
    name: "Right Angle Design Institute",
    role: "Design Education & Training",
    quote: "Our student enrollments increased significantly thanks to AdsServ's focused digital advertising and Instagram marketing. Their campaigns captured our creative curriculum with great impact.",
    rating: "5.0",
    avatar: clientRightAngle
  }
];

// Duplicated array for seamless infinite looping
const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [cardStep, setCardStep] = useState(380);
  const [touchStartX, setTouchStartX] = useState(0);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);
  const cardBoxRef = useRef(null);
  const firstCardRef = useRef(null);

  const handleNext = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    const updateCardStep = () => {
      if (firstCardRef.current) {
        const gap = window.innerWidth >= 768 ? 20 : 16;
        setCardStep(firstCardRef.current.offsetWidth + gap);
      }
    };
    updateCardStep();
    window.addEventListener('resize', updateCardStep);
    return () => window.removeEventListener('resize', updateCardStep);
  }, []);

  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
  };

  // Seamless infinite loop reset logic
  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length);
      }, 700);
      return () => clearTimeout(timer);
    } else if (currentIndex < testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(testimonials.length * 2 - 1);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  // Automatic 4s smooth auto-play carousel
  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      handleNext();
    }, 4000);
    return () => clearInterval(autoPlayRef.current);
  }, [currentIndex]);

  const handleDotClick = (index) => {
    setIsTransitioning(true);
    setCurrentIndex(testimonials.length + index);
  };

  // Scroll Trigger entrance animation for card box
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardBoxRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const activeDotIndex = currentIndex % testimonials.length;

  return (
    <section ref={sectionRef} className="w-full py-12 md:py-20 relative overflow-hidden bg-white font-sans">

      {/* ── Heading ── */}
      <div className="flex flex-col items-center justify-center gap-3 mb-12 sm:mb-20 text-center px-4 relative z-20">
        {/* Eyebrow */}
        <div className="flex items-center gap-2 mb-4">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="text-[13px] sm:text-[16px] italic font-medium uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--text-dark-blue)' }}
          >
            WHAT CLIENTS THINK
          </span>
        </div>

        <LayoutGroup>
          <motion.div
            layout
            className="flex flex-col items-center justify-center gap-x-3 gap-y-2 text-[22px] sm:text-[36px] md:text-[50px] font-extrabold leading-[1.1] tracking-tight text-center flex-wrap"
            style={{ color: 'var(--text-dark-blue)' }}
          >
            <motion.span layout transition={{ type: 'spring', damping: 30, stiffness: 400 }}>
              The work should speak for itself.
            </motion.span>
            <TextRotate
              texts={['Our clients can add context.', 'Their success speaks volumes.', 'They can tell you more.']}
              mainClassName="text-white px-3 sm:px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md"
              style={{ background: 'var(--text-dark-blue)' }}
              staggerFrom="last"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '-120%' }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden pb-0.5"
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
              rotationInterval={3000}
            />
          </motion.div>
        </LayoutGroup>

        <p className="text-[14px] sm:text-[15px] font-medium mt-4 max-w-[680px] leading-relaxed" style={{ color: 'var(--text-gray)' }}>
          Good partnerships are measured by more than a finished deliverable. They are built through communication, thinking, execution, and the ability to keep improving.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-4 md:px-6 relative">
        {/* Main Outer Container with background: var(--bg-light-purple) and borderRadius: 40px */}
        <div
          ref={cardBoxRef}
          className="p-4 sm:p-6 md:p-8 shadow-[0_15px_40px_rgba(30,47,87,0.08)] relative z-10 rounded-[24px] sm:rounded-[32px] md:rounded-[40px]"
          style={{
            background: 'var(--bg-light-purple)',
            opacity: 0,
          }}
        >
          {/* Continuous Smooth Slider Track */}
          <div 
            className="overflow-hidden py-1 w-full touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className={`flex gap-4 md:gap-5 ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''
                }`}
              style={{
                transform: `translateX(-${currentIndex * cardStep}px)`,
              }}
            >
              {extendedTestimonials.map((item, idx) => (
                <div
                  ref={idx === 0 ? firstCardRef : null}
                  key={`${item.id}-${idx}`}
                  className="flex-shrink-0 w-[min(calc(100vw-48px),340px)] sm:w-[330px] md:w-[360px] bg-white rounded-2xl p-4 md:p-5 flex flex-col justify-between shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.01]"
                  style={{
                    border: '1px solid rgba(30, 47, 87, 0.08)',
                  }}
                >
                  {/* Top Row: Rating & Avatar */}
                  <div>
                    <div className="flex items-start justify-between gap-2.5 mb-2">
                      {/* Rating & Stars Pill Badge */}
                      <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-1">
                          <span className="font-extrabold text-sm md:text-base" style={{ color: 'var(--brand-navy)' }}>
                            {item.rating}
                          </span>
                          <span className="text-[11px] md:text-xs font-medium" style={{ color: 'var(--brand-steel)' }}>
                            Rating
                          </span>
                        </div>
                        <div
                          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full shadow-2xs"
                          style={{ background: 'var(--brand-yellow)' }}
                        >
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-current text-[#1e2f57]"
                            />
                          ))}
                        </div>
                      </div>

                      {/* Client Logo in Place of Avatar */}
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex items-center justify-center p-2 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.avatar}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>

                    {/* Name & Role */}
                    <div className="text-left my-2">
                      <h3
                        className="text-sm md:text-base font-bold tracking-tight mb-0.5"
                        style={{ color: 'var(--brand-navy)' }}
                      >
                        {item.name}
                      </h3>
                      <p
                        className="text-[11px] md:text-xs font-medium"
                        style={{ color: 'var(--brand-steel)' }}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Compact Sleek Quote Box */}
                  <div className="bg-slate-50/90 rounded-xl p-3.5 md:p-4 border border-slate-100 relative shadow-2xs mt-2 flex-1 flex flex-col justify-between min-h-[75px]">
                    <p
                      className="text-[12px] md:text-[13px] italic font-normal leading-relaxed mb-1"
                      style={{ color: 'var(--brand-navy)' }}
                    >
                      "{item.quote}"
                    </p>
                    <div className="flex justify-end">
                      <Quote
                        className="w-3.5 h-3.5 rotate-180"
                        style={{ color: 'var(--brand-steel)', opacity: 0.35 }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Left/Right Arrow Buttons + 5 Dots */}
          <div className="flex items-center justify-between gap-4 mt-6 pt-1">
            {/* Left Arrow Button */}
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ color: 'var(--brand-navy)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-navy)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = 'var(--brand-navy)';
              }}
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Connecting Track Line with 5 Dots */}
            <div className="flex-1 relative flex items-center justify-center mx-2 sm:mx-6 max-w-xs md:max-w-sm">
              <div className="w-full h-[1px] bg-slate-300/60 absolute top-1/2 left-0 -translate-y-1/2 z-0" />
              <div className="relative z-10 flex items-center gap-3 px-3 rounded-full" style={{ background: 'var(--bg-light-purple)' }}>
                {testimonials.map((_, dotIdx) => {
                  const isCurrent = dotIdx === activeDotIndex;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => handleDotClick(dotIdx)}
                      aria-label={`Go to review ${dotIdx + 1}`}
                      className="transition-all duration-300 cursor-pointer flex items-center justify-center"
                    >
                      {isCurrent ? (
                        <div
                          className="w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center shadow-2xs"
                          style={{ borderColor: 'var(--brand-navy)' }}
                        >
                          <div
                            className="w-2 h-2 rounded-full"
                            style={{ background: 'var(--brand-navy)' }}
                          />
                        </div>
                      ) : (
                        <div className="w-3 h-3 rounded-full border-2 border-slate-400/80 bg-white hover:border-[var(--brand-navy)] transition-colors" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Arrow Button */}
            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="w-10 h-10 rounded-xl border border-slate-200/80 bg-white flex items-center justify-center shadow-xs transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              style={{ color: 'var(--brand-navy)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--brand-navy)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#ffffff';
                e.currentTarget.style.color = 'var(--brand-navy)';
              }}
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}