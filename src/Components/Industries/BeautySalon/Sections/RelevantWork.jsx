import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ScrollRevealHeading from '../../../Services/common/ScrollRevealHeading';
import "../../../HomePage/common.css";

export default function RelevantWork() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-4 md:px-8" style={{ fontFamily: "var(--font-primary)" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0 bg-white border border-slate-200 shadow-sm">
            <span style={{ color: 'var(--accent-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
          </span>
          <span className="italic font-semibold uppercase tracking-widest text-[12px] text-[var(--brand-navy)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            Relevant Work
          </span>
        </div>

        <ScrollRevealHeading justify="center" maxW="900px" className="mx-auto mb-12" words={[{ text: 'Naturals' }, { text: 'Social', italic: true }, { text: 'Media', italic: true }, { text: 'Marketing', italic: true }]} />

        <div className="bg-[var(--bg-light-purple)] rounded-[24px] p-8 md:p-12 border-2 border-purple-200/80 shadow-sm">
          <div className="mb-6">
            <h3 className="text-xl md:text-2xl font-extrabold text-[var(--brand-navy)] mb-2">
              Naturals
            </h3>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 mb-4">
              <span><strong>Industry:</strong> Beauty & Salon</span>
              <span><strong>Service:</strong> Social Media Marketing</span>
            </div>
            <div className="text-slate-700 mb-4 space-y-4">
              <p><strong>Challenge:</strong> Build a stronger and more consistent digital presence around the beauty and salon brand.</p>
              <p><strong>Approach:</strong> ADSSERV focused on social content, visual brand communication, audience engagement and consistent digital presence.</p>
              <p><strong>Outcome:</strong> The work supported a more consistent social presence and audience-facing brand communication.</p>
            </div>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/projects"
              onClick={() => window.scrollTo(0, 0)}
              className="inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[var(--brand-navy)] text-white font-semibold text-[15px] hover:bg-[var(--brand-orange)] transition-all"
            >
              <span>View Project</span>
              <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center text-[var(--brand-navy)] hover:scale-110 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2.5} />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
