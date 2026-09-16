import React from 'react';
import { Link } from 'react-router-dom';
import ButtonWithIcon from '../../Components/ui/button-with-icon';
import '../../Components/HomePage/common.css';

export default function ArticleCTA({ eyebrow, title, copy, primaryLabel, primaryLink, secondaryLabel, secondaryLink }) {
  return (
    <section className="w-full py-16 font-primary bg-white">
      <div className="max-w-[850px] mx-auto px-4 md:px-8">
        <div
          className="relative rounded-[28px] px-8 md:px-12 py-12 md:py-14 overflow-hidden border border-purple-200/80 shadow-md"
          style={{ backgroundColor: 'var(--bg-light-purple)' }}
        >
          {/* Subtle soft ambient shapes */}
          <div className="absolute top-[-30%] right-[-15%] w-[320px] h-[320px] rounded-full opacity-40 blur-[80px] pointer-events-none bg-white/70" />
          <div className="absolute bottom-[-30%] left-[-15%] w-[280px] h-[280px] rounded-full opacity-30 blur-[70px] pointer-events-none bg-white/50" />

          <div className="relative z-10">
            {eyebrow && (
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-purple-200 shadow-sm flex-shrink-0">
                  <span style={{ color: 'var(--brand-orange)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest text-[13px]"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--brand-orange)' }}
                >
                  {eyebrow}
                </span>
              </div>
            )}

            <h2
              className="text-[28px] sm:text-[36px] font-extrabold leading-[1.2] mb-4 tracking-tight"
              style={{ color: 'var(--brand-navy)' }}
            >
              {title}
            </h2>

            <p className="text-[16px] sm:text-[17px] font-medium leading-relaxed text-slate-800 mb-8 max-w-[700px]">
              {copy}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              {primaryLink && (
                <Link to={primaryLink} className="w-full sm:w-auto">
                  <ButtonWithIcon>{primaryLabel}</ButtonWithIcon>
                </Link>
              )}
              {secondaryLink && (
                <Link to={secondaryLink} className="w-full sm:w-auto">
                  <ButtonWithIcon
                    outline={true}
                    className="!bg-white hover:!bg-white/90 !text-[var(--brand-navy)] !border-2 !border-[var(--brand-navy)] shadow-sm"
                  >
                    {secondaryLabel}
                  </ButtonWithIcon>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

