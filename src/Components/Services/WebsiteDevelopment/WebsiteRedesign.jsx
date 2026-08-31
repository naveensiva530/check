import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from '../SocialMedia/ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const signs = [];

export default function WebsiteRedesign() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const cardRef = useRef(null);
  const itemRefs = useRef([]);
  const finalRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(leftRef.current,
        { opacity: 0, x: -80 },
        { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(rightRef.current,
        { opacity: 0, x: 80, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.55, ease: 'power3.out', delay: 0.15,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: 'back.out(1.4)', delay: 0.3,
          scrollTrigger: { trigger: cardRef.current, start: 'top 85%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(itemRefs.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.4,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.9,
          scrollTrigger: { trigger: cardRef.current, start: 'top 82%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                WEBSITE REDESIGN
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "Don't" },
                { text: "lose" },
                { text: "the" },
                { text: "value" },
                { text: "you" },
                { text: "already" },
                { text: "have.", italic: true }
              ]}
            />
            <div className="w-12 h-[3px] opacity-70 rounded-full mt-4 mb-8" style={{ backgroundColor: 'var(--brand-purple, #8b5cf6)' }}></div>

            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-4 max-w-[550px]" style={{ color: '#334155' }}>
              A redesign shouldn't mean starting from zero.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-4 max-w-[550px]" style={{ color: '#334155' }}>
              If an existing website has built up search rankings, content, and history, that value needs to be protected during a rebuild.
            </p>
            <p className="text-[16px] md:text-[17px] font-medium leading-relaxed mb-4 max-w-[550px]" style={{ color: '#334155' }}>
              We manage the transition so businesses get the benefit of a better website without losing the momentum they've already built.
            </p>
            <p ref={finalRef} className="text-[16px] md:text-[17px] font-bold leading-relaxed max-w-[550px]" style={{ color: 'var(--brand-navy)' }}>
              That means mapping redirects, preserving URLs where possible, migrating content cleanly, and ensuring search engines understand the new structure.
            </p>
          </div>

          <div ref={rightRef} className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700 mt-8 lg:mt-0">
            <p>What often changes during a redesign:</p>

            <ul className="flex flex-col gap-3 pl-4">
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>The way pages are organised.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How information is prioritised.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How the website performs on mobile and on slower connections.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How clear the calls to action are.</span></li>
              <li className="flex items-start gap-3"><span className="text-[var(--accent-orange)] font-bold">•</span><span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>How the website supports search visibility.</span></li>
            </ul>

            <p className="mt-2 font-bold" style={{ color: 'var(--brand-navy)' }}>
              The goal is a website that feels more useful from the moment it loads — and easier to grow from the moment it goes live.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
