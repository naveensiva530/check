import { useEffect, useRef } from 'react';
import '../../../Components/HomePage/common.css';
import ScrollRevealHeading from './ScrollRevealHeading';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const points = [
  "The audience is the starting point, not the design brief.",
  "Structure and content are developed alongside the visual design, not after.",
  "SEO, performance, and accessibility are built in from the start.",
  "The website is handed over with the context needed to manage it.",
  "We continue to work with businesses after launch to improve results.",
];

export default function WebsiteWhyAdsserv() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const paraRefs = useRef([]);
  const listItemRefs = useRef([]);
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
        { opacity: 0, x: 60, scale: 0.97 },
        { opacity: 1, x: 0, scale: 1, duration: 0.45, ease: 'power3.out', delay: 0.2,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(paraRefs.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', stagger: 0.06, delay: 0.3,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(listItemRefs.current,
        { opacity: 0, x: -25 },
        { opacity: 1, x: 0, duration: 0.3, ease: 'power2.out', stagger: 0.05, delay: 0.5,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
      gsap.fromTo(finalRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.35, ease: 'power2.out', delay: 0.85,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 78%', toggleActions: 'play none none none' }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full py-24 relative font-primary" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          <div ref={leftRef} className="flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
                <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}>+</span>
              </span>
              <span
                className="italic font-semibold uppercase tracking-widest"
                style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}
              >
                WHY ADSSERV
              </span>
            </div>
            <ScrollRevealHeading
              words={[
                { text: "Websites" },
                { text: "built" },
                { text: "to" },
                { text: "work," },
                { text: "not" },
                { text: "just", italic: true },
                { text: "to" },
                { text: "exist." }
              ]}
            />
          </div>

          <div ref={rightRef} className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed text-slate-700">
            <p ref={el => paraRefs.current[0] = el}>
              Website development is not about producing something that looks impressive in a portfolio.
            </p>
            <p ref={el => paraRefs.current[1] = el}>
              It's about building a digital environment where the right visitor can find the business, understand what it offers, and take the next step with confidence.
            </p>
            <p ref={el => paraRefs.current[2] = el}>Our approach ensures:</p>

            <ul className="flex flex-col gap-3 mt-1 mb-2 pl-1">
              {points.map((p, i) => (
                <li
                  key={i}
                  ref={el => listItemRefs.current[i] = el}
                  className="flex items-start gap-3"
                >
                  <span className="text-[var(--accent-orange)] font-bold text-[18px] mt-0.5 leading-none">›</span>
                  <span className="text-[15.5px] font-semibold" style={{ color: 'var(--brand-navy)' }}>{p}</span>
                </li>
              ))}
            </ul>

            <p ref={finalRef} className="font-bold mt-2" style={{ color: 'var(--brand-navy)' }}>
              That's the difference between a website that looks like a business and one that grows it.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
