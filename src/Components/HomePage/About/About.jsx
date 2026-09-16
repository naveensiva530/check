import { useRef, useEffect } from "react";
import person1 from "../../../assets/HomePage/About/About_First_image.webp";
import person2 from "../../../assets/HomePage/About/About_Second_image.webp";
import person3 from "../../../assets/HomePage/About/About_Third_image.webp";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../common.css";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Left image: slide in from left
      gsap.fromTo(
        leftRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Right text: slide in from right
      gsap.fromTo(
        rightRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.08,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats: stagger fade-up
      gsap.fromTo(
        statsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          delay: 0.18,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full pt-10 pb-16 md:pt-12 md:pb-20 overflow-hidden relative"
      style={{ background: "var(--primary-white)", fontFamily: "var(--font-primary)" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-10 items-center">

          {/* LEFT: Image Collage */}
          <div ref={leftRef} className="w-full lg:w-[46%] relative min-h-[340px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center lg:justify-start z-10 px-2 sm:px-0">
            {/* Main blob image */}
            <div
              className="relative z-10 w-[240px] sm:w-[340px] md:w-[400px] max-w-[85vw] h-[320px] sm:h-[450px] md:h-[580px] bg-white rounded-t-full rounded-b-[120px] sm:rounded-b-[170px] md:rounded-b-[210px] flex items-center justify-center p-3 sm:p-4"
              style={{
                boxShadow: "0 20px 50px -10px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={person1}
                alt="Team member working"
                className="w-full h-full object-cover rounded-t-full rounded-b-[110px] sm:rounded-b-[155px] md:rounded-b-[194px]"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Video Thumbnail (bottom right, overlapping) */}
            <div
              className="absolute z-20 bottom-[-10px] sm:bottom-[-15px] right-[2%] sm:right-[5%] md:right-[0%] w-[105px] sm:w-[160px] md:w-[200px] h-[105px] sm:h-[160px] md:h-[200px] rounded-full bg-white flex items-center justify-center p-1.5 sm:p-2 overflow-hidden cursor-pointer"
              style={{
                boxShadow: "0 15px 35px -5px rgba(0,0,0,0.12)",
              }}
            >
              <div className="relative w-full h-full rounded-full overflow-hidden group">
                <img
                  src={person2}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div ref={rightRef} className="w-full lg:w-[54%] flex flex-col justify-center z-10 lg:pl-8">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-4">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm">
                <span className="text-[#f97316] text-xs font-bold leading-none">+</span>
              </span>
              <span
                className="text-[14px] sm:text-[16px] italic text-[#1a233a] font-medium"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                NOT ANOTHER DIGITAL AGENCY
              </span>
            </div>

            {/* Headline */}
            <h2 className="text-[#1a233a] mb-6">
              <span
                className="block text-[28px] sm:text-[38px] md:text-[50px] lg:text-[36px] italic font-medium leading-[1.15] mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
               The internet changed. Your marketing should too.
              </span>
            </h2>

            {/* Description */}
            <p className="text-[15px] md:text-[16px] leading-relaxed mb-8 max-w-[540px] text-gray-500 font-medium">
              People don't experience brands in neatly separated marketing channels.
They discover them through a Reel. Search for them on Google. See an ad five minutes later. Check the website. Ask a friend. Read reviews. Watch a creator talk about them. Then decide.
That's why ADSSERV doesn't treat digital marketing as a collection of disconnected services.
We connect the creative, strategic, technical, and performance sides of digital to create marketing that makes sense as a whole.

            </p>

            {/* CTA - Uiverse button style with brand colors */}
            <div className="mb-10 sm:mb-14">
              <button
                className="know-more-btn"
                onClick={() => window.location.href = '/about'}
              >
                <span>Meet ADSSERV</span>
                <div className="know-more-icon">
                  <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Bottom Row: Stats & Image */}
            <div ref={statsRef} className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8 mt-auto">
              {/* Highlights — 4 guiding principles */}
              <ul className="flex flex-col gap-3 max-w-[380px] w-full sm:w-auto">
                {[
                  "Think audience first.",
                  "Build for the platform.",
                  "Create with purpose.",
                  "Measure what matters.",
                ].map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 text-[13px] md:text-[17px] font-semibold text-[#1a233a]"
                  >
                    <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#e08326]/10 flex-shrink-0">
                      <ArrowUpRight size={12} strokeWidth={3} className="text-[#e08326]" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Small right-side image (camera woman / phone hand) */}
              <div
                className="w-[180px] sm:w-[200px] md:w-[240px] h-[130px] sm:h-[140px] md:h-[160px] bg-white rounded-3xl p-1"
                style={{
                  boxShadow: "0 15px 40px -10px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={person3}
                  alt="Photographer at work"
                  className="w-full h-full object-cover rounded-[20px]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}