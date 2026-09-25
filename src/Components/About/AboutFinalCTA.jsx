import { useEffect, useRef } from 'react';
import ButtonWithIcon from '../ui/button-with-icon';
import { Link } from 'react-router-dom';
import { usePopup } from '../../Components/context/PopupContext';
import '../../Components/HomePage/common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function AboutFinalCTA() {
  const { openPopup } = usePopup();
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

      // Eyebrow fades in first
      tl.fromTo(eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' }
      )
      // Heading dramatically scales + fades
      .fromTo(headingRef.current,
        { opacity: 0, scale: 0.88, y: 40 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'back.out(1.3)' }, '-=0.3'
      )
      // Paragraphs slide up
      .fromTo(paraRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.5'
      )
      // Buttons pop in together
      .fromTo(buttonsRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: 'back.out(1.5)' }, '-=0.4'
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-32 relative font-primary overflow-hidden bg-white border-t border-gray-100">
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">

        <div ref={eyebrowRef} className="about-eyebrow flex items-center gap-2 mb-6">
          <span
            className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
            style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
          >
            <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span
            className="italic font-semibold uppercase tracking-widest"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
          >
            LET'S BUILD SOMETHING USEFUL
          </span>
        </div>

        <h2 ref={headingRef} className="text-[44px] md:text-[64px] font-extrabold leading-[1.05] tracking-tight mb-8 max-w-[900px]" style={{ color: 'var(--accent-orange)' }}>
          Your brand has a story. Let's make the digital version worth finding.
        </h2>

        <div ref={paraRef} className="flex flex-col gap-3 mb-12">
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            Whether you need a sharper social presence, stronger search visibility, better campaigns, a new website, or a clearer digital direction, start with the problem.
          </p>
          <p className="text-[18px] font-medium leading-relaxed text-slate-600 max-w-[650px] mx-auto">
            We'll figure out the next move together.
          </p>
        </div>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full">
          <div onClick={openPopup} className="cursor-pointer">
            <ButtonWithIcon>Start a Project</ButtonWithIcon>
          </div>
          <Link to="/contact" style={{ textDecoration: 'none' }}>
            <ButtonWithIcon outline={true}>Talk to ADSSERV</ButtonWithIcon>
          </Link>
        </div>

      </div>
    </section>
  );
}
