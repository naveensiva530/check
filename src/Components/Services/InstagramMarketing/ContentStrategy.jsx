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
  { num: "01", title: "Educate", desc: "Make complicated ideas easier to understand and give your audience something useful.", img: imgEducate },
  { num: "02", title: "Connect", desc: "Show the personality, people, perspective and moments that make the brand feel human.", img: imgConnect },
  { num: "03", title: "Engage", desc: "Create content that gives people a reason to comment, share, save, respond or participate.", img: imgEntertain },
  { num: "04", title: "Build Trust", desc: "Use expertise, proof, experiences, customer stories and useful information to strengthen credibility.", img: imgTrust },
  { num: "05", title: "Convert", desc: "Guide interested audiences toward a relevant next step — enquiry, website visit, booking, purchase or another business action.", img: imgConvert }
];

export default function ContentStrategy() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightImgRef = useRef(null);
  const calloutRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(rightImgRef.current,
        { opacity: 0, x: 100, scale: 0.9 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(calloutRef.current,
        { opacity: 0, scale: 0.88, y: 20 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.4, ease: 'back.out(1.6)', delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      gsap.fromTo(cardRefs.current,
        { opacity: 0, y: 70, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.42, ease: 'back.out(1.3)', stagger: 0.06,
          scrollTrigger: { trigger: cardRefs.current[0], start: 'top 85%', toggleActions: 'play none none none' }
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
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>CONTENT THAT HAS A ROLE</span>
            </div>
            <ScrollRevealHeading
              justify="start"
              words={[
                { text: "Not" }, { text: "every" }, { text: "post" }, { text: "needs" },
                { text: "to" }, { text: "sell", italic: true }, { text: "something." }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>
            <div className="flex flex-col gap-4 text-[14.5px] md:text-[15px] font-medium leading-[1.8] text-slate-600 mb-10 max-w-[550px]">
              <p>
                A strong Instagram presence needs different types of content working together. Some posts create awareness. Some build trust. Some educate. Some entertain. Some drive action.
              </p>
              <p>
                We use a mix of content pillars based on what your audience needs and what your business wants to achieve.
              </p>
            </div>

            <div ref={calloutRef} className="flex items-center gap-4 p-4 pr-6 bg-white rounded-2xl shadow-[0_12px_35px_rgba(0,0,0,0.04)] max-w-[550px] border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-light-purple)] flex items-center justify-center flex-shrink-0">
                <Target size={22} style={{ color: 'var(--brand-purple, #8b5cf6)' }} />
              </div>
              <p className="text-[13px] font-bold leading-[1.6]" style={{ color: 'var(--brand-navy)' }}>
                We build content mixes around those different roles rather than forcing every post to make the same pitch.
              </p>
            </div>
          </div>

          <div ref={rightImgRef} className="relative w-full flex justify-center lg:justify-end">
            <img src={imgMain} alt="Content Strategy Illustration" className="w-full max-w-[580px] object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500" />
          </div>
        </div>

        {/* 5 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-6">
          {contentTypes.map((type, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el}
              className="relative flex flex-row lg:flex-col items-center lg:items-center text-left lg:text-center p-4 sm:p-5 lg:pb-8 lg:pt-2 bg-white rounded-[24px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-1 lg:hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100 gap-4 lg:gap-0"
            >
              <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[160px] lg:h-[160px] lg:mb-2 flex-shrink-0 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                <img src={type.img} alt={type.title} className="w-full h-full object-contain drop-shadow-xl" />
              </div>
              <div className="flex flex-col flex-1 lg:items-center w-full">
                <h3 className="text-[15px] sm:text-[17px] lg:text-[18px] font-extrabold mb-1 lg:mb-1.5 leading-tight" style={{ color: 'var(--accent-orange)' }}>{type.title}</h3>
                <div className="hidden lg:block w-[70%] border-b-2 border-dotted border-gray-200 mt-auto pt-3 mb-1 mx-auto"></div>
                <p className="text-[13px] sm:text-[14px] lg:text-[12.5px] font-medium leading-snug text-slate-500">{type.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
