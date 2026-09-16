import React, { useEffect, useRef } from 'react';
import { Target } from 'lucide-react';
import ScrollRevealHeading from './ScrollRevealHeading';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import imgMain from '../../../assets/SocialMedia_Icons/Laptop.webp';
import imgEducate from '../../../assets/SocialMedia_Icons/Educate.webp';
import imgEntertain from '../../../assets/SocialMedia_Icons/Entertain.webp';
import imgTrust from '../../../assets/SocialMedia_Icons/Build Trust.webp';
import imgConnect from '../../../assets/SocialMedia_Icons/Connect.webp';
import imgConvert from '../../../assets/SocialMedia_Icons/Convert.webp';

const contentTypes = [
  { num: "01", title: "Educate", desc: "Make something complicated easier to understand.", img: imgEducate },
  { num: "02", title: "Entertain", desc: "Give people something worth watching, sharing, or remembering.", img: imgEntertain },
  { num: "03", title: "Build Trust", desc: "Show expertise, people, process, proof, perspective, and personality.", img: imgTrust },
  { num: "04", title: "Connect", desc: "Create conversations and make the brand feel human.", img: imgConnect },
  { num: "05", title: "Convert", desc: "Give interested audiences a clear next step when the timing is right.", img: imgConvert }
];

export default function ContentStrategy() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left block slides from left
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Right image slides from right + slight scale
      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 60, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.35, ease: 'power2.out', delay: 0.1,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Callout pill pops in
      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.9, y: 15 },
        { opacity: 1, scale: 1, y: 0, duration: 0.25, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%', toggleActions: 'play none none none' }
        }
      );

      // Cards stagger up with scale bounce
      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 40, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.3, ease: 'power2.out', stagger: 0.04,
          scrollTrigger: { trigger: cardRefs.current[0], start: 'top 88%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-14 sm:py-20 md:py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1300px] w-full mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-16 mb-14 sm:mb-20 items-center">
          
          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
              >
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                CONTENT STRATEGY
              </span>
            </div>
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Not" }, { text: "every" }, { text: "post" }, { text: "needs" },
                { text: "to" }, { text: "sell." }, { text: "Every" }, { text: "post" },
                { text: "needs" }, { text: "a" }, { text: "reason.", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>
            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-8 sm:mb-10">
              <p>
                A healthy social presence needs different types of content. Some content builds awareness. Some explains what you do. Some proves that you know what you're talking about. Some creates conversation. Some makes the brand memorable. And some gives people a reason to take the next step.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We build content mixes around those different roles rather than forcing every post to make the same pitch.
              </p>
            </div>
          </div>

          {/* Right image — hidden on mobile, shown on large screens */}
          <div ref={rightImgRef} className="hidden lg:flex relative w-full justify-end">
            <img src={imgMain} alt="Content Strategy Illustration" className="w-full max-w-[480px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" loading="lazy" decoding="async" width="480" height="400" />
          </div>
        </div>

        {/* 5 Cards — responsive: 1 col mobile, 3 col tablet, 5 col desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {contentTypes.map((type, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el}
              className="relative flex sm:flex-col items-center sm:text-center gap-4 sm:gap-0 p-4 sm:pb-8 sm:pt-2 bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100"
            >
              <div className="w-[80px] h-[80px] sm:w-[130px] sm:h-[130px] lg:w-[150px] lg:h-[150px] flex-shrink-0 sm:mb-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src={type.img} alt={type.title} className="w-full h-full object-contain drop-shadow-xl" loading="lazy" decoding="async" width="150" height="150" />
              </div>
              <div className="flex flex-col text-left sm:text-center">
                <h3 className="text-[16px] sm:text-[18px] font-extrabold mb-1 sm:mb-1.5" style={{ color: 'var(--accent-orange)' }}>{type.title}</h3>
                <p className="text-[12.5px] font-medium leading-snug text-slate-500">{type.desc}</p>
              </div>
              <div className="hidden sm:block w-[70%] border-b-2 border-dotted border-gray-200 mt-auto pt-4 mb-1"></div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
