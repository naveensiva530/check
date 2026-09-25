import React, { useEffect, useRef } from 'react';
import ButtonWithIcon from '../../../Components/ui/button-with-icon';
import '../../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CommonCTA({ 
  tagText = "READY TO BUILD THE BRAND?", 
  headingText = "Give your business an identity people can recognise.", 
  description = "Tell us where the brand is today, where you want it to go, and what isn't working. We'll help turn that into a clearer brand direction and a system your team can actually use.", 
  button1Text = "Build My Brand", 
  button2Text = "Talk to ADSSERV",
  button1Link = "/contact",
  button2Link = "/contact",
  button1Action,
  button2Action
}) {
  const sectionRef = useRef(null);
  const eyebrowRef = useRef(null);
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 78%',
          toggleActions: 'play none none none',
        }
      });

      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      .fromTo(headingRef.current,
        { opacity: 0, scale: 0.88, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.3'
      )
      .fromTo(paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.5'
      )
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.4'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-16 sm:py-24 md:py-32 relative font-primary overflow-hidden bg-white border-t border-gray-100">


      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">

        <div ref={eyebrowRef} className="services-eyebrow flex items-center gap-2 mb-6">
          <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="text-[14px] md:text-[15px] italic font-medium uppercase tracking-wider"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-navy)' }}
          >
            {tagText}
          </span>
        </div>

        <h2 ref={headingRef} className="text-[28px] sm:text-[42px] md:text-[64px] font-extrabold leading-[1.08] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--accent-orange)' }}>
          {headingText}
        </h2>

        <div ref={paraRef} className="flex flex-col gap-3 mb-12">
          <p className="text-[16px] sm:text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            {description}
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          {button1Action ? (
            <ButtonWithIcon onClick={button1Action}>{button1Text}</ButtonWithIcon>
          ) : (
            <ButtonWithIcon to={button1Link || "/contact"}>{button1Text}</ButtonWithIcon>
          )}
          
          {button2Action ? (
            <ButtonWithIcon onClick={button2Action} outline={true}>{button2Text}</ButtonWithIcon>
          ) : (
            <ButtonWithIcon to={button2Link || "/contact"} outline={true}>{button2Text}</ButtonWithIcon>
          )}
        </div>

      </div>
    </section>
  );
}
