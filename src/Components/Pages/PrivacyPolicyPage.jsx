import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import CommonCTA from '../Services/common/CommonCTA';
import '../HomePage/common.css';
import { policyData } from './PrivacyPolicyData';

export default function PrivacyPolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const renderText = (text) => {
    if (text.startsWith("**") && text.endsWith("**")) {
      return <strong className="text-[var(--brand-navy)]">{text.replace(/\*\*/g, "")}</strong>;
    }
    if (text.startsWith("- **")) {
      const parts = text.replace("- **", "").split("**:");
      return (
        <li className="ml-6 list-disc mb-2 text-slate-700">
          <strong className="text-[var(--brand-navy)]">{parts[0]}</strong>{parts[1] ? ":" + parts[1] : ""}
        </li>
      );
    }
    if (text.startsWith("- ")) {
      return <li className="ml-6 list-disc mb-2 text-slate-700">{text.replace("- ", "")}</li>;
    }
    return <p className="mb-4 text-slate-700">{text}</p>;
  };

  return (
    <div className="font-sans bg-white min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-16 px-4 md:px-8 max-w-[900px] mx-auto w-full text-left" style={{ fontFamily: "var(--font-primary)" }}>
        
        {/* Header */}
        <div className="mb-16">
          <div className="services-eyebrow flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0">
              <span style={{ fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="uppercase">
              {policyData.hero.tagText}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--brand-navy)] mb-8 leading-tight">
            {policyData.hero.title}
          </h1>
          {policyData.hero.paragraphs.map((p, idx) => (
            <p key={idx} className="text-lg md:text-xl text-slate-600 mb-4 leading-relaxed font-medium">
              {p}
            </p>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-12">
          {policyData.sections.map((section, idx) => (
            <section key={idx} className="border-t border-slate-100 pt-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--brand-navy)] mb-6">
                {section.title}
              </h2>
              <div className="text-[16px] leading-relaxed">
                {section.content.map((line, lineIdx) => (
                  <React.Fragment key={lineIdx}>
                    {renderText(line)}
                  </React.Fragment>
                ))}
              </div>
            </section>
          ))}
        </div>

      </main>

      <CommonCTA {...policyData.cta} />

      <Footer />
    </div>
  );
}
