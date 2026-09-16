import React, { useEffect, useRef } from 'react';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import '../../../Components/HomePage/common.css';

gsap.registerPlugin(ScrollTrigger);

import imgDiscover from '../../../assets/Servicess/Funnel/Discover.webp';
import imgEngage from '../../../assets/Servicess/Funnel/Engage.webp';
import imgExplore from '../../../assets/Servicess/Funnel/Explore.webp';
import imgTrust from '../../../assets/Servicess/Funnel/Trust.webp';
import imgAct from '../../../assets/Servicess/Funnel/Act.webp';

export function PlatformFirstContent() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(contentRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out', scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' } });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8">
        <div ref={contentRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>MADE FOR INSTAGRAM</span>
            </div>
            <ScrollRevealHeading words={[
              { text: "Content" }, { text: "should" }, { text: "work" }, { text: "with" },
              { text: "the", italic: true }, { text: "platform," }, { text: "not" }, { text: "against" }, { text: "it." }
            ]} />
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700">
              Instagram rewards attention, relevance and content people actually want to spend time with. That means a good Instagram strategy cannot simply copy a website post, advertisement or brochure and place it on a feed.
            </p>
            <p className="text-[17px] font-bold" style={{ color: 'var(--brand-navy)' }}>
              We adapt the idea to the format — whether that means a sharp Reel hook, a useful carousel, an interactive Story, a strong caption or a campaign built around a specific moment.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-2">
              {['Reels', 'Carousels', 'Stories', 'Captions', 'Campaigns', 'Profile'].map((format) => (
                <div key={format} className="bg-[var(--bg-light-purple)] rounded-xl p-4 text-center">
                  <span className="text-[14px] font-extrabold" style={{ color: 'var(--brand-navy)' }}>{format}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConversionJourney() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const cardRefs = useRef([]);

  const stages = [
    { num: "01", title: "Discover", goal: "GOAL: AWARENESS", desc: "A person encounters your content.", img: imgDiscover },
    { num: "02", title: "Interest", goal: "GOAL: INTEREST", desc: "The content gives them a reason to keep watching or exploring.", img: imgEngage },
    { num: "03", title: "Trust", goal: "GOAL: EVALUATION", desc: "Your profile and content demonstrate relevance, personality and credibility.", img: imgTrust },
    { num: "04", title: "Explore", goal: "GOAL: CONSIDERATION", desc: "They visit your website, profile, offer or other relevant destination.", img: imgExplore },
    { num: "05", title: "Act", goal: "GOAL: CONVERSION", desc: "They enquire, book, purchase, contact you or take another meaningful step.", img: imgAct }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 40, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );

      cardRefs.current.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -60 : 60;
        gsap.fromTo(card,
          { opacity: 0, x: xDir, y: 40, scale: 0.92 },
          {
            opacity: 1, x: 0, y: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: i * 0.05,
            scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1280px] w-full mx-auto px-4 md:px-8 relative z-10">

        <div ref={headingRef} className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              THE CONVERSION JOURNEY
            </span>
          </div>
          <ScrollRevealHeading maxW="800px"
            words={[{ text: "From" }, { text: "first" }, { text: "impression" }, { text: "to" }, { text: "next", italic: true }, { text: "action." }]}
          />
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[750px] mt-8">
            A follower is not automatically a customer. The content needs to create a natural path between attention and action. That might mean moving someone from a Reel to your profile, from your profile to your website, from a Story to a conversation, or from useful content to an enquiry. We think beyond individual posts and consider what happens after someone becomes interested.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage, idx) => (
            <div key={idx} ref={el => cardRefs.current[idx] = el}
              className="relative flex bg-white rounded-[28px] p-6 gap-5 shadow-[0_10px_35px_rgba(139,92,246,0.07)] border border-white/80 hover:shadow-[0_16px_45px_rgba(139,92,246,0.12)] hover:-translate-y-1 transition-all duration-400 group overflow-hidden"
            >


              <div className="absolute top-3 right-4 w-[200px] h-[200px] flex-shrink-0 transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1">
                <img src={stage.img} alt={stage.title} className="w-full h-full object-contain drop-shadow-lg" />
              </div>

              <div className="flex flex-col justify-end pt-[110px] w-full pr-[110px]">
                <span className="text-[10px] font-extrabold uppercase tracking-widest mb-2" style={{ color: 'var(--accent-orange)' }}>
                  {stage.goal}
                </span>
                <h3 className="text-[26px] font-extrabold mb-2 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                  {stage.title}
                </h3>
                <p className="text-[13.5px] font-medium leading-relaxed text-slate-500">{stage.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
