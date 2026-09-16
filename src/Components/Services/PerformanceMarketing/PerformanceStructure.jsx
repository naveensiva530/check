import { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import imgMain from '../../../assets/Servicess/PerformanceCreative/right_side_image.webp';
import imgAudience from '../../../assets/Servicess/PerformanceCreative/Audience.webp';
import imgMessage from '../../../assets/Servicess/PerformanceCreative/Message.webp';
import imgOffer from '../../../assets/Servicess/PerformanceCreative/Offer.webp';
import imgClick from '../../../assets/Servicess/PerformanceCreative/Click.webp';
import imgExperience from '../../../assets/Servicess/PerformanceCreative/Experience.webp';
import imgConversion from '../../../assets/Servicess/PerformanceCreative/Conversion.webp';
import imgOptimisation from '../../../assets/Servicess/PerformanceCreative/Optimisation.webp';

gsap.registerPlugin(ScrollTrigger);

const stages = [
  { num: "Stage 01", title: "Audience",        desc: "Who should see the message?",                          img: imgAudience },
  { num: "Stage 02", title: "Message",         desc: "What should make them pay attention?",                 img: imgMessage },
  { num: "Stage 03", title: "Offer",           desc: "Why should they take the next step?",                  img: imgOffer },
  { num: "Stage 04", title: "Click",           desc: "Where does the advertisement send them?",              img: imgClick },
  { num: "Stage 05", title: "Experience",      desc: "Does the landing page make the next action clear?",    img: imgExperience },
  { num: "Stage 06", title: "Conversion",      desc: "What meaningful action should be recorded?",           img: imgConversion },
  { num: "Stage 07", title: "Optimisation",    desc: "What does the data tell us to change?",                img: imgOptimisation }
];

export default function PerformanceStructure() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left block slides from left - FASTER
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Right image slides from right + slight scale - FASTER
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 0.35, ease: 'power2.out', delay: 0.05,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Callout pill pops in - FASTER
      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'back.out(1.4)', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );

      // Stage cards stagger up with scale bounce - FASTER
      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 60, scale: 0.92 },
        { opacity: 1, y: 0, scale: 1, duration: 0.25, ease: 'back.out(1.2)', stagger: 0.03,
          scrollTrigger: { trigger: cardRefs.current[0], start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 mb-20 items-center">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 justify-start">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.35)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                FROM IMPRESSION TO CONVERSION
              </span>
            </div>
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "The" }, { text: "campaign", italic: true }, { text: "is" },
                { text: "only" }, { text: "one" }, { text: "part" }, { text: "of" }, { text: "the" }, { text: "equation." }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>
            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-10 max-w-[550px]">
              <p>
                Performance marketing is a system — not a single ad.
                Every step from the first impression to the final action has to work together for the campaign to actually deliver the result the business needs.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We consider the relationship between audience, hook, message, visual, offer, call to action, and landing experience rather than treating ad creative as decoration.
              </p>
            </div>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img
              src={imgMain}
              alt="Performance funnel illustration"
              className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500"
            />
          </div>
        </div>

        {/* 7 Stage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-3 sm:gap-4 lg:gap-6">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              ref={el => cardRefs.current[idx] = el}
              className="relative flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center p-4 sm:p-5 lg:pb-8 lg:pt-2 bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100 gap-4 lg:gap-0"
            >
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[140px] lg:h-[140px] lg:mb-2 flex-shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src={stage.img} alt={stage.title} className="w-full h-full object-contain drop-shadow-xl" loading="lazy" decoding="async" width="140" height="140" />
              </div>
              
              <div className="flex flex-col flex-1 lg:items-center w-full">
                <h3
                  className="text-[15px] sm:text-[17px] lg:text-[18px] font-extrabold mb-1 lg:mb-1.5 leading-tight"
                  style={{ color: 'var(--accent-orange)' }}
                >
                  {stage.title}
                </h3>
                <div className="hidden lg:block w-[70%] border-b-2 border-dotted border-gray-200 mt-auto pt-3 mb-1 mx-auto"></div>
                <p className="text-[13px] sm:text-[14px] lg:text-[12.5px] font-medium leading-snug text-slate-500">
                  {stage.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
