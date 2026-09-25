import { useEffect, useRef } from "react";
import Navbar from "../../Navbar/Navbar";
import personImg from "../../../assets/HomePage/Hero_section/Hero_Banner-removebg-preview.webp";
import heroBg from "../../../assets/All the Hero Section bg/Hero_Section_bg.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FlowButton } from "../../../Components/ui/FlowButton";
import { usePopup } from "../../../Components/context/PopupContext";
import "../common.css";

gsap.registerPlugin(ScrollTrigger);

/* ------------------------------------------------------------------ */
/*  SplitText helper — splits a string into word spans for animation  */
/* ------------------------------------------------------------------ */
const SplitWords = ({ text, className = "" }) => (
  <span className={className}>
    {text.split(" ").map((word, i, arr) => (
      <span
        key={i}
        className="title-word-wrap"
        style={{ display: "inline-block", overflow: "hidden", verticalAlign: "top" }}
      >
        <span className="title-word" style={{ display: "inline-block" }}>
          {word}
          {i < arr.length - 1 ? " " : ""}
        </span>
      </span>
    ))}
  </span>
);

const Hero_section = () => {
  const { openPopup } = usePopup();
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitle2Ref = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);
  const eyebrowRef = useRef(null);
  const primaryBtnRef = useRef(null);
  const secondaryBtnRef = useRef(null);

  /* ============================================================== */
  /*  GSAP — all 4 animation phases                                  */
  /* ============================================================== */
  useEffect(() => {
    const cleanupData = {};
    const ctx = gsap.context(() => {
      /* ---------- Set initial states ---------- */
      // word-clip mask so words slide up from inside
      gsap.set(".title-word", { yPercent: 110, opacity: 0 });
      gsap.set(eyebrowRef.current, { opacity: 0, x: -30 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 25 });
      gsap.set(subtitle2Ref.current, { opacity: 0, y: 25 });
      gsap.set(buttonRef.current, { opacity: 0, y: 30 });
      gsap.set(".dashed-line line", { strokeDasharray: 200, strokeDashoffset: 200 });
      gsap.set(".background-doodle-svg path", {
        strokeDasharray: 1500,
        strokeDashoffset: 1500,
      });

      /* ================================================== */
      /*  PHASE 1 — Entrance / Reveal                       */
      /* ================================================== */
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // 1a) Background doodle self-draw
      tl.to(".background-doodle-svg path", {
        strokeDashoffset: 0,
        duration: 1,
        ease: "power2.inOut",
      }, 0);

      // 1b) Hero image — slide + scale + fade from right
      tl.fromTo(
        imageRef.current,
        { opacity: 0, x: 120, scale: 0.85 },
        { opacity: 1, x: 0, scale: 1, duration: 0.7, ease: "power3.out" },
        0
      );

      // 1c) Eyebrow — slide in from left
      tl.to(
        eyebrowRef.current,
        { opacity: 1, x: 0, duration: 0.4 },
        0.2
      );

      // 1e) Title words — stagger slide-up (the wow factor)
      tl.to(
        ".title-word",
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.03,
          ease: "expo.out",
        },
        0.3
      );

      // 1f) Subtitle 1
      tl.to(
        subtitleRef.current,
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      );

      // 1g) Subtitle 2 (slight delay)
      tl.to(
        subtitle2Ref.current,
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.3"
      );

      // 1h) Buttons container
      tl.to(
        buttonRef.current,
        { opacity: 1, y: 0, duration: 0.4 },
        "-=0.2"
      );

      // 1i) Dashed line draw-on
      tl.to(
        ".dashed-line line",
        { strokeDashoffset: 0, duration: 0.5, ease: "power2.inOut" },
        "-=0.2"
      );

      /* ================================================== */
      /*  PHASE 2 — Continuous / Idle                       */
      /* ================================================== */


      // 2c) Doodle burst — wobble (rotation yoyo)
      gsap.to(".doodle-burst", {
        rotation: 18,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2d) Doodle sparkle — pulse scale
      gsap.to(".doodle-sparkle", {
        scale: 1.25,
        duration: 1.6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // 2e) Eyebrow "+" icon — pulse glow
      gsap.to(".eyebrow-icon", {
        boxShadow: "0 0 0 8px rgba(249,115,22,0.18)",
        duration: 1.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      /* ================================================== */
      /*  PHASE 3 — Scroll / Mouse Parallax                 */
      /* ================================================== */

      // 3a) Image parallax on scroll
      gsap.to(imageRef.current, {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
        },
      });

      // 3b) Title — fade + scale up slightly on exit
      gsap.to(titleRef.current, {
        opacity: 0.5,
        scale: 0.95,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // 3c) Mouse-follow image parallax (magnetic feel)
      const onMouseMove = (e) => {
        const { innerWidth } = window;
        const x = (e.clientX / innerWidth - 0.5) * 24;
        gsap.to(imageRef.current, {
          x: x * 0.5,
          duration: 0.7,
          ease: "power2.out",
          overwrite: "auto",
        });
      };
      heroRef.current.addEventListener("mousemove", onMouseMove);
      // store for cleanup
      cleanupData._mouseHandler = onMouseMove;
      cleanupData._mouseTarget = heroRef.current;

      /* ================================================== */
      /*  PHASE 4 — Micro-interactions                      */
      /* ================================================== */

      // 4a) Magnetic primary button
      const onBtnMove = (e) => {
        const rect = primaryBtnRef.current.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);
        gsap.to(primaryBtnRef.current, {
          x: x * 0.25,
          y: y * 0.25,
          duration: 0.4,
          ease: "power3.out",
        });
      };
      const onBtnLeave = () => {
        gsap.to(primaryBtnRef.current, {
          x: 0,
          y: 0,
          duration: 0.7,
          ease: "elastic.out(1, 0.4)",
        });
      };
      primaryBtnRef.current.addEventListener("mousemove", onBtnMove);
      primaryBtnRef.current.addEventListener("mouseleave", onBtnLeave);
      cleanupData._btnMoveHandler = onBtnMove;
      cleanupData._btnLeaveHandler = onBtnLeave;
      cleanupData._btnTarget = primaryBtnRef.current;

      // 4b) Secondary button — ripple on click
      const onRipple = (e) => {
        const btn = secondaryBtnRef.current;
        const rect = btn.getBoundingClientRect();
        const ripple = document.createElement("span");
        const size = Math.max(rect.width, rect.height) * 2;
        ripple.style.cssText = `
          position: absolute;
          border-radius: 50%;
          background: var(--text-dark);
          width: ${size}px;
          height: ${size}px;
          left: ${e.clientX - rect.left - size / 2}px;
          top: ${e.clientY - rect.top - size / 2}px;
          transform: scale(0);
          opacity: 0.4;
          pointer-events: none;
        `;
        btn.appendChild(ripple);
        gsap.to(ripple, {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          onComplete: () => ripple.remove(),
        });
      };
      secondaryBtnRef.current.addEventListener("click", onRipple);
      cleanupData._rippleHandler = onRipple;
      cleanupData._rippleTarget = secondaryBtnRef.current;
    }, heroRef);

    return () => {
      // explicit handler cleanup
      if (cleanupData._mouseTarget && cleanupData._mouseHandler) {
        cleanupData._mouseTarget.removeEventListener("mousemove", cleanupData._mouseHandler);
      }
      if (cleanupData._btnTarget && cleanupData._btnMoveHandler) {
        cleanupData._btnTarget.removeEventListener("mousemove", cleanupData._btnMoveHandler);
        cleanupData._btnTarget.removeEventListener("mouseleave", cleanupData._btnLeaveHandler);
      }
      if (cleanupData._rippleTarget && cleanupData._rippleHandler) {
        cleanupData._rippleTarget.removeEventListener("click", cleanupData._rippleHandler);
      }
      ctx.revert();
    };
  }, []);

  return (
    <>
      <style>{`
        .hero-section {
          font-family: var(--font-primary);
          color: var(--text-dark);
          background: var(--bg-light-purple);
          min-height: 620px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 130px 20px 80px;
          position: relative;
          overflow: hidden;
          box-sizing: border-box;
        }

        .background-doodle-svg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          opacity: 0.2;
          pointer-events: none;
        }

        .hero-content {
          text-align: left;
          z-index: 10;
          max-width: 1200px;
          width: 100%;
          margin-left: auto;
          margin-right: auto;
          padding: 0 16px;
          position: relative;
          box-sizing: border-box;
        }

        .headline-container {
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
          text-align: left;
        }

        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }

        .eyebrow-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #fff;
          border: 1px solid #e5e7eb;
          box-shadow: 0 1px 4px rgba(0,0,0,0.08);
          flex-shrink: 0;
          will-change: box-shadow, transform;
        }

        .eyebrow-text {
          font-size: 16px;
          font-style: italic;
          font-weight: 500;
          color: #1a233a;
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: 0;
        }

        .headline-highlight {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-dark);
          margin-top: 28px;
          margin-bottom: -50px;
          line-height: 1.3;
          text-align: left;
        }

        .doodle-burst {
          position: absolute;
          left: -40px;
          top: -25px;
          width: 35px;
          height: 35px;
        }

        .doodle-sparkle {
          position: absolute;
          right: -45px;
          top: 30%;
          width: 28px;
          height: 28px;
          animation: spinSlow 6s linear infinite;
        }

        .main-title {
          font-size: 44px;
          font-weight: 800;
          margin: 0;
          line-height: 1.15;
        }

        .title-word-wrap {
          /* mask container — keeps overflow hidden for slide-up reveal */
        }

        .title-word {
          display: inline-block;
          will-change: transform, opacity;
        }

        .subtitle {
          font-size: 17px;
          color: var(--text-secondary);
          margin-top: 16px;
          margin-bottom: 16px;
          text-align: left;
          max-width: 600px;
          line-height: 1.55;
        }

        .button-container {
          position: relative;
          display: inline-block;
        }

        .dashed-line {
          position: absolute;
          left: -50px;
          bottom: -40px;
          width: 60px;
          height: 50px;
          color: #888888;
        }

        .primary-cta-wrap {
          display: inline-block;
          will-change: transform;
        }

        .get-started-button {
          background-color: var(--text-dark);
          color: #ffffff;
          font-size: 18px;
          font-weight: 600;
          padding: 15px 35px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
          transition: background-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease;
        }

        .get-started-button:hover {
          background-color: var(--text-secondary);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
        }

        .secondary-cta {
          position: relative;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          right: 0;
          bottom: -20px;
          height: 90%;
          z-index: 5;
          object-fit: contain;
          pointer-events: none;
          will-change: transform;
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        @media (min-width: 1024px) {
          .hero-section {
            padding: 130px 40px 90px;
            min-height: 680px;
          }
          .hero-content {
            padding-left: 40px;
          }
          .main-title {
            font-size: 52px;
          }
        }

        @media (max-width: 1023px) and (min-width: 768px) {
          .hero-section {
            padding: 110px 30px 70px;
            min-height: 600px;
          }
          .main-title {
            font-size: 40px;
          }
          .hero-image {
            height: 60%;
            right: -20px;
            bottom: 0;
            opacity: 0.75;
          }
        }

        @media (max-width: 767px) {
          .hero-section {
            padding: 90px 20px 40px !important;
            min-height: auto !important;
            overflow: hidden !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-content {
            padding-left: 0 !important;
            max-width: 100% !important;
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .headline-container {
            text-align: center !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
          }
          .main-title {
            font-size: clamp(24px, 8vw, 34px) !important;
            line-height: 1.2 !important;
            max-width: 100% !important;
            text-align: center !important;
          }
          .subtitle {
            font-size: 14px !important;
            line-height: 1.6 !important;
            max-width: 100% !important;
            margin-top: 12px !important;
            margin-bottom: 12px !important;
            text-align: center !important;
          }
          .eyebrow {
            margin-bottom: 12px !important;
            justify-content: center !important;
          }
          .eyebrow-text {
            font-size: 10px !important;
            letter-spacing: 0.3px !important;
          }
          .eyebrow-icon {
            width: 18px !important;
            height: 18px !important;
          }
          .hero-image {
            position: relative !important;
            height: auto !important;
            width: 90% !important;
            max-width: 340px !important;
            right: auto !important;
            bottom: auto !important;
            opacity: 1 !important;
            margin-top: 20px !important;
            order: 10 !important;
          }
          .doodle-burst, .doodle-sparkle, .dashed-line {
            display: none !important;
          }
          .button-container {
            flex-direction: row !important;
            align-items: center !important;
            justify-content: center !important;
            gap: 12px !important;
            margin-top: 20px !important;
            width: 100% !important;
            flex-wrap: wrap !important;
            order: 5 !important;
          }
          .primary-cta-wrap {
            width: auto !important;
            text-align: center;
          }
          .primary-cta-wrap button {
            padding: 10px 24px !important;
            font-size: 14px !important;
          }
          .secondary-cta {
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 10px 24px !important;
            font-size: 14px !important;
            width: auto !important;
          }
          .background-doodle-svg {
            opacity: 0.4 !important;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 80px 16px 30px !important;
          }
          .main-title {
            font-size: clamp(22px, 7vw, 28px) !important;
          }
          .subtitle {
            font-size: 13px !important;
          }
          .eyebrow-text {
            font-size: 9px !important;
          }
          .hero-image {
            width: 85% !important;
            max-width: 280px !important;
            margin-top: 16px !important;
          }
          .primary-cta-wrap button {
            padding: 8px 20px !important;
            font-size: 13px !important;
          }
          .secondary-cta {
            padding: 8px 20px !important;
            font-size: 13px !important;
          }
          .button-container {
            gap: 10px !important;
          }
        }
      `}</style>

      <Navbar />

      <section className="hero-section" ref={heroRef} style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <svg
          className="background-doodle-svg"
          viewBox="0 0 1000 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 150,150 Q 300,100 450,250 T 750,150 T 950,300"
            stroke="#059669"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M 100,200 Q 280,350 480,150 T 800,250"
            stroke="#059669"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>

        <img
          src={personImg}
          alt="person"
          className="hero-image"
          ref={imageRef}
          fetchPriority="high"
          decoding="async"
        />

        <div className="hero-content">
          <div className="headline-container" ref={titleRef}>
            <svg className="doodle-burst" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 28L6 31" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M15 16L9 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              <path d="M26 13L24 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>

            <svg className="doodle-sparkle" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
            </svg>

            <div className="eyebrow" ref={eyebrowRef}>
              <span className="eyebrow-icon">
                <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
              </span>
              <span className="eyebrow-text">GEN Z DIGITAL MARKETING &amp; GROWTH AGENCY</span>
            </div>

            <h1 className="main-title" style={{ maxWidth: '800px', lineHeight: '1.2' }}>
              <SplitWords text="Marketing That Moves at the Speed of Culture" />
            </h1>
          </div>

          <p className="subtitle" ref={subtitleRef}>
            ADSSERV is a Gen Z digital marketing agency helping brands get noticed,
            understood, and chosen through social media, SEO, paid advertising,
            websites, branding, content, creators, and digital strategy.
          </p>
          <p className="subtitle" ref={subtitle2Ref}>
            We combine creative thinking with digital performance to build brands
            that don't just show up online—they have something worth paying
            attention to.
          </p>

          <div
            className="button-container"
            ref={buttonRef}
            style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}
          >
            <svg className="dashed-line" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line
                x1="80" y1="10" x2="10" y2="70"
                stroke="currentColor" strokeWidth="2"
                strokeDasharray="6 6" strokeLinecap="round"
              />
            </svg>

            <div className="primary-cta-wrap" ref={primaryBtnRef} onClick={openPopup} style={{ cursor: 'pointer' }}>
              <FlowButton text="Start a Project" />
            </div>

            <button
              ref={secondaryBtnRef}
              className="secondary-cta"
              style={{
                position: "relative",
                overflow: "hidden",
                background: "transparent",
                color: "var(--text-dark)",
                fontSize: "16px",
                fontWeight: "600",
                padding: "16px 35px",
                border: "2px solid var(--text-dark)",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--text-dark)';
                e.currentTarget.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-dark)';
              }}
            >
              See What We Do
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero_section;
