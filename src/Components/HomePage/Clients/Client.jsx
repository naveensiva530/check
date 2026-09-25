import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import client1 from '../../../assets/HomePage/clients/client1.webp';
import client2 from '../../../assets/HomePage/clients/client2.webp';
import client3 from '../../../assets/HomePage/clients/client3.webp';
import client4 from '../../../assets/HomePage/clients/client4.webp';
import client5 from '../../../assets/HomePage/clients/client5.webp';
import client6 from '../../../assets/HomePage/clients/client6.webp';
import client7 from '../../../assets/HomePage/clients/client7.webp';
import client8 from '../../../assets/HomePage/clients/client8.webp';
import client9 from '../../../assets/HomePage/clients/client9.webp';
import client10 from '../../../assets/HomePage/clients/client10.webp';
import client11 from '../../../assets/HomePage/clients/client11.webp';
import client12 from '../../../assets/HomePage/clients/client12.webp';
import client13 from '../../../assets/HomePage/clients/client13.webp';
import client14 from '../../../assets/HomePage/clients/client14.webp';
import client15 from '../../../assets/HomePage/clients/client15.webp';
import client16 from '../../../assets/HomePage/clients/client16.webp';
import client17 from '../../../assets/HomePage/clients/client17.webp';
import client18 from '../../../assets/HomePage/clients/client18.webp';
import client19 from '../../../assets/HomePage/clients/client19.webp';
import '../common.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ─── Client Images ─────────────────────────────────────── */
const clientImages = [
  client1, client2, client3, client4, client5,
  client6, client7, client8, client9, client10,
  client11, client12, client13, client14, client15,
  client16, client17, client18, client19
];

/* ─── Seamless Infinite Marquee Track ────────────────────────── */
const LogoTrack = () => {
  return (
    <div className="client-overflow-wrapper">
      <div className="client-fade-left" />
      <div className="client-fade-right" />
      <div className="client-marquee">
        {/* Primary Group */}
        <div className="client-marquee-group">
          {clientImages.map((img, i) => (
            <div key={`g1-${i}`} className="client-logo-card">
              <img
                src={img}
                alt={`Client ${i + 1}`}
                className="client-logo-img"
                loading="eager"
                decoding="async"
                width="120"
                height="60"
              />
            </div>
          ))}
        </div>
        {/* Duplicate Group for Seamless 0-jump Infinite Loop */}
        <div className="client-marquee-group" aria-hidden="true">
          {clientImages.map((img, i) => (
            <div key={`g2-${i}`} className="client-logo-card">
              <img
                src={img}
                alt={`Client ${i + 1}`}
                className="client-logo-img"
                loading="eager"
                decoding="async"
                width="120"
                height="60"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ─── Main Component ─────────────────────────────────────────── */
const Client = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading block: fade up from below
      gsap.fromTo(
        headingRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 90%',
            once: true,
          },
        }
      );

      // Logo track: fade in slightly later
      gsap.fromTo(
        trackRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="client-section">
      <div ref={headingRef} className="client-intro-block">
        <div className="client-eyebrow-row">
          <span className="client-eyebrow-icon">
            <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="client-eyebrow-text">TRUSTED BY BRANDS WE'VE WORKED WITH</span>
        </div>
        <p className="client-supporting-copy">
          Good work travels. Explore the brands, businesses, and projects we've helped move forward.
        </p>
      </div>

      <div className="client-inner">

        {/* LEFT: Heading */}
        <div className="client-heading-block">
          <p className="client-heading-text">
            TRUSTED BY BRANDS<br />WE'VE WORKED WITH

          </p>
          <span className="client-heading-arrow">
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </span>
          {/* Divider */}
          <div className="client-divider" />
        </div>

        {/* RIGHT: Scrolling Logos */}
        <div ref={trackRef} className="client-logos-area">
          <LogoTrack />
        </div>

      </div>

      <style>{`
      /* ── Section Wrapper ── */
      .client-section {
        width: 100%;
        padding: 48px 24px 10px;
        background: #fff;
        font-family: var(--font-primary, 'Inter', sans-serif);
      }

      @media (max-width: 640px) {
        .client-section {
          padding: 32px 16px 10px;
        }
      }

      /* ── Intro Block (eyebrow + heading + supporting copy) ── */
      .client-intro-block {
        max-width: 1200px;
        margin: 0 auto 24px;
        padding: 0 16px;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }

      /* ── Eyebrow row (dot + label) — matches Process.jsx ── */
      .client-eyebrow-row {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 4px;
      }

      .client-eyebrow-icon {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #fff;
        border: 1px solid #e5e7eb;
        box-shadow: 0 1px 4px rgba(0,0,0,0.08);
        flex-shrink: 0;
      }

      .client-eyebrow-text {
        font-size: 15px;
        font-style: italic;
        font-weight: 500;
        color: #1a233a;
        font-family: 'Playfair Display', Georgia, serif;
        letter-spacing: 0;
      }

      @media (max-width: 640px) {
        .client-eyebrow-text {
          font-size: 13px;
        }
      }

      /* ── Heading row with rotating text pill — matches Process.jsx ── */
      .client-heading-row {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 16px;
        font-size: 38px;
        font-weight: 800;
        line-height: 1.1;
        letter-spacing: -0.02em;
        color: var(--text-dark, #1e2f57);
        text-align: center;
        flex-wrap: wrap;
      }

      .client-heading-text-main {
        white-space: nowrap;
      }

      .client-heading-pill {
        display: inline-flex;
        flex-wrap: nowrap;
        white-space: pre-wrap;
        color: #fff;
        padding: 4px 16px;
        background: var(--brand-navy, #1e2f57);
        overflow: hidden;
        border-radius: 12px;
        justify-content: center;
        font-size: 38px;
        font-weight: 800;
        line-height: 1.1;
      }

      .client-heading-pill-split {
        overflow: hidden;
        padding-bottom: 2px;
      }

      .client-supporting-copy {
        font-size: 15px;
        font-weight: 500;
        color: #6b7280;
        margin: 6px auto 0;
        max-width: 480px;
        line-height: 1.55;
        text-align: center;
      }

      @media (max-width: 640px) {
        .client-supporting-copy {
          font-size: 13.5px;
        }
        .client-heading-row,
        .client-heading-pill {
          font-size: 26px;
          gap: 8px;
        }
      }

      /* ── Inner Banner Card ── */
      .client-inner {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 16px;
        display: flex;
        align-items: center;
        gap: 0;
        border: 1.5px solid #e8e8ee;
        border-radius: 20px;
        background: #fff;
        box-shadow: 0 4px 24px -6px rgba(0,0,0,0.06);
        overflow: hidden;
        min-height: 80px;
      }

      @media (max-width: 768px) {
        .client-inner {
          flex-direction: column;
          padding: 14px 12px;
          border-radius: 16px;
        }
      }

      /* ── Left Heading Block ── */
      .client-heading-block {
        display: flex;
        align-items: center;
        gap: 10px;
        flex-shrink: 0;
        padding: 16px 24px 16px 16px;
        position: relative;
      }

      @media (max-width: 768px) {
        .client-heading-block {
          padding: 6px 12px 12px;
          border-bottom: 1.5px solid #e8e8ee;
          width: 100%;
          justify-content: center;
        }
      }

      .client-heading-text {
        font-size: 14px;
        font-weight: 800;
        line-height: 1.35;
        color: #1a233a;
        white-space: nowrap;
        margin: 0;
      }

      @media (max-width: 768px) {
        .client-heading-text {
          font-size: 13px;
          text-align: center;
          white-space: normal;
        }
      }

      .client-heading-arrow {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 26px;
        height: 26px;
        border-radius: 50%;
        background: #f97316;
        color: #fff;
        flex-shrink: 0;
        margin-bottom: auto;
        margin-top: 2px;
      }

      /* Vertical Divider */
      .client-divider {
        position: absolute;
        right: 0;
        top: 16px;
        bottom: 16px;
        width: 1.5px;
        background: #e8e8ee;
        border-radius: 2px;
      }

      /* ── Logos Area ── */
      .client-logos-area {
        flex: 1;
        min-width: 0;
        overflow: hidden;
      }

      /* ── Overflow Container with Fade Edges ── */
      .client-overflow-wrapper {
        position: relative;
        width: 100%;
        overflow: hidden;
        touch-action: pan-y;
        -webkit-overflow-scrolling: touch;
      }

      .client-fade-left {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 60px;
        background: linear-gradient(to right, #fff 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
      }

      .client-fade-right {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 60px;
        background: linear-gradient(to left, #fff 0%, transparent 100%);
        z-index: 2;
        pointer-events: none;
      }

      /* ── Continuous Infinite Marquee (Seamless, Unbroken Loop) ── */
      .client-marquee {
        display: flex;
        width: max-content;
        user-select: none;
        -webkit-user-select: none;
      }

      .client-marquee-group {
        display: flex;
        align-items: center;
        flex-shrink: 0;
        will-change: transform;
        animation: clientContinuousMarquee 26s linear infinite;
        transform: translate3d(0, 0, 0);
        -webkit-transform: translate3d(0, 0, 0);
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
      }

      /* ── Individual Logo Card ── */
      .client-logo-card {
        display: flex;
        align-items: center;
        justify-content: center;
        min-width: 140px;
        height: 78px;
        padding: 8px 18px;
        margin: 0 4px;
        flex-shrink: 0;
        user-select: none;
        -webkit-user-select: none;
        transition: transform 0.25s ease;
      }

      /* Only subtle lift on real desktop mouse hover, NEVER pauses or breaks */
      @media (hover: hover) and (pointer: fine) {
        .client-logo-card:hover {
          transform: translateY(-3px);
        }
      }

      .client-logo-img {
        max-width: 100%;
        max-height: 100%;
        object-fit: contain;
        width: 100%;
        height: 100%;
        pointer-events: none;
      }

      @media (max-width: 768px) {
        .client-marquee-group {
          animation-duration: 20s;
        }
        .client-logo-card {
          min-width: 105px;
          height: 56px;
          padding: 6px 12px;
          margin: 0 2px;
        }
        .client-fade-left,
        .client-fade-right {
          width: 25px;
        }
      }

      /* ── Seamless 0-jump Infinite Loop Keyframe ── */
      @keyframes clientContinuousMarquee {
        0% {
          transform: translate3d(0, 0, 0);
          -webkit-transform: translate3d(0, 0, 0);
        }
        100% {
          transform: translate3d(-100%, 0, 0);
          -webkit-transform: translate3d(-100%, 0, 0);
        }
      }

      @media (prefers-reduced-motion: reduce) {
        .client-marquee-group {
          animation: none !important;
        }
      }
    `}</style>
    </section>
  );
};

export default Client;
