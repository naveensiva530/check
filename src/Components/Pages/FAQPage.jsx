import React, { useEffect, useMemo, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../HomePage/Footer/Footer';
import { faqCategories } from '../FAQ/faqData';
import CommonHero from '../Services/common/CommonHero';
import { usePopup } from '../context/PopupContext';
import '../HomePage/common.css';
import {
  Search, Plus, Minus
} from 'lucide-react';
import bgImage from '../../assets/All the Hero Section bg/FAQ(1).webp';

/* ─────────────────────────────────────────
   HELPER: highlight search matches
───────────────────────────────────────── */
function highlightText(text, query) {
  if (!query) return text;
  const parts = text.split(new RegExp(`(${query})`, 'gi'));
  return parts.map((part, i) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark key={i} className="bg-amber-200 text-slate-900 rounded px-0.5 font-semibold">{part}</mark>
    ) : part
  );
}

/* ─────────────────────────────────────────
   FAQ ACCORDION ITEM (Services Style)
───────────────────────────────────────── */
function FAQItem({ faq, isOpen, onToggle, searchQuery }) {
  return (
    <div
      id={faq.id}
      className="rounded-2xl border border-purple-200/80 transition-all duration-300 hover:shadow-md overflow-hidden shadow-sm"
      style={{ backgroundColor: 'var(--bg-light-purple)' }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left group cursor-pointer"
      >
        <h3 className="text-[17px] md:text-[18px] font-bold leading-snug" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
          {highlightText(faq.question, searchQuery)}
        </h3>
        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white transition-all duration-200 shadow-sm ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          style={{ backgroundColor: isOpen ? 'var(--brand-navy, #1e2f57)' : 'var(--accent-orange, #e08326)' }}
        >
          {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
        </div>
      </button>

      {/* Answer Area - smooth, fast expand without delay */}
      <div
        className="grid transition-all duration-200 ease-out"
        style={{
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
          transition: 'grid-template-rows 220ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease-out'
        }}
      >
        <div className="overflow-hidden">
          <div className="px-6 pb-6 text-[15.5px] font-medium leading-relaxed text-[#1e2f57]">
            {faq.answer.split('\n\n').map((para, i) => (
              <p key={i} className={i > 0 ? "mt-4" : ""}>{highlightText(para, searchQuery)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   MAIN FAQ PAGE
───────────────────────────────────────── */
export default function FAQPage() {
  const { openPopup } = usePopup();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [faqState, setFaqState] = useState({ id: 'faq-01', query: '' });

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filteredCategories = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return faqCategories.map((cat) => {
      if (activeCategory !== 'all' && cat.id !== activeCategory) return { ...cat, faqs: [] };
      if (!q) return cat;
      return {
        ...cat,
        faqs: cat.faqs.filter((faq) =>
          faq.question.toLowerCase().includes(q) ||
          faq.answer.toLowerCase().includes(q)
        )
      };
    }).filter(cat => cat.faqs.length > 0);
  }, [searchQuery, activeCategory]);

  const matchingFirstFaq = searchQuery.trim() ? filteredCategories[0]?.faqs[0]?.id : null;
  const openFaqId = faqState.query !== searchQuery && matchingFirstFaq ? matchingFirstFaq : faqState.id;
  const toggleFaq = (faqId) => {
    setFaqState({ id: openFaqId === faqId ? null : faqId, query: searchQuery });
  };

  const allFaqCount = faqCategories.reduce((a, c) => a + c.faqs.length, 0);

  return (
    <div className="font-primary bg-white min-h-screen flex flex-col selection:bg-orange-500 selection:text-white">
      <Navbar />

      <main className="flex-1">
        <h1 className="sr-only">Questions About Digital Marketing? Start Here.</h1>
        <CommonHero
          bgImage={bgImage}
          title="Frequently Asked Questions"
          breadcrumbText="FAQ"
          tagText="FREQUENTLY ASKED QUESTIONS"
          button2Text={null}
          headingWords={[
            { text: "Questions" },
            { text: "About" },
            { text: "Digital" },
            { text: "Marketing?", italic: true },
            { text: "Start" },
            { text: "Here." },
          ]}
        >
          <div>
            <p className="mb-4 text-[15px] sm:text-[17px] md:text-[20px] font-medium leading-relaxed text-slate-700">
              From SEO and social media to paid advertising, websites, branding and content, find answers to the questions businesses commonly ask before choosing a digital marketing partner.
            </p>
            <p className="mb-6 text-[14px] sm:text-[15px] md:text-[17px] leading-relaxed text-slate-600">
              If you cannot find what you are looking for, talk to our team and tell us what you are trying to achieve.
            </p>
          </div>
        </CommonHero>

        <section className="w-full bg-white pt-8 sm:pt-16 pb-10 sm:pb-12 px-4 md:px-8 font-primary">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex flex-col items-center text-center pt-8 border-t border-gray-100 mb-14">
              <div className="flex items-center gap-2 mb-4">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-slate-200 shadow-sm flex-shrink-0">
                  <span style={{ color: 'var(--brand-orange, #e08326)', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span className="italic font-semibold uppercase tracking-widest text-[13px] text-[var(--brand-navy)]" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  Find Your Answer
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold mb-8" style={{ color: 'var(--brand-navy, #1e2f57)' }}>
                What would you like to know?
              </h2>

              {/* Search Bar */}
              <div className="w-full max-w-2xl relative shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full overflow-hidden bg-white mb-10 border border-gray-100">
                <div className="relative flex items-center">
                  <Search className="absolute left-6 w-5 h-5 text-slate-400 pointer-events-none" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search questions... (e.g. SEO, cost, social media)"
                    className="w-full pl-14 pr-32 py-4 bg-white text-slate-800 placeholder:text-slate-400 rounded-full text-[15.5px] font-medium outline-none"
                  />
                  {searchQuery ? (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-4 text-[11px] font-bold uppercase tracking-wider bg-gray-100 hover:bg-gray-200 text-slate-700 px-4 py-2 rounded-full transition-colors"
                    >
                      Clear
                    </button>
                  ) : (
                    <span className="absolute right-6 text-[12px] font-semibold text-slate-400 hidden sm:block">
                      {allFaqCount} answers
                    </span>
                  )}
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all ${activeCategory === 'all'
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 hover:border-gray-300'
                    }`}
                >
                  All Categories ({allFaqCount})
                </button>
                {faqCategories.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-2.5 rounded-full text-[14px] font-bold transition-all flex items-center gap-2 ${activeCategory === cat.id
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-white border border-gray-200 text-slate-600 hover:bg-gray-50 hover:border-gray-300'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${activeCategory === cat.id ? 'bg-white' : 'bg-gray-400'}`} />
                    {cat.navLabel}
                    <span className={`ml-1 text-[11px] px-1.5 py-0.5 rounded-full font-extrabold ${activeCategory === cat.id ? 'bg-white/20 text-white' : 'bg-gray-100 text-slate-500'
                      }`}>
                      {cat.faqs.length}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* ── FAQ LIST ── */}
            {filteredCategories.length > 0 ? (
              <div className="space-y-16">
                {filteredCategories.map((cat) => (
                  <div key={cat.id} id={cat.id} className="scroll-mt-32">
                    {/* Category Title */}
                    <div className="flex items-center gap-3 mb-6">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange, #e08326)' }}>
                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                      </span>
                      <h2 className="text-2xl font-extrabold uppercase tracking-widest text-slate-400">
                        {cat.eyebrow}
                      </h2>

                    </div>

                    {/* Accordion List */}
                    <div className="flex flex-col gap-4">
                      {cat.faqs.map((faq) => (
                        <FAQItem
                          key={faq.id}
                          faq={faq}
                          isOpen={openFaqId === faq.id}
                          onToggle={() => toggleFaq(faq.id)}
                          searchQuery={searchQuery}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Empty state */
              <div className="py-20 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                <div className="w-16 h-16 rounded-full bg-orange-50 text-orange-500 flex items-center justify-center mx-auto mb-5 text-2xl font-bold border border-orange-100">?</div>
                <h3 className="text-2xl font-extrabold mb-2" style={{ color: 'var(--brand-navy)' }}>No results found</h3>
                <p className="text-slate-500 max-w-md mx-auto mb-7 text-[15px] leading-relaxed">
                  No questions matching "<span className="font-bold text-slate-700">{searchQuery}</span>". Try different keywords.
                </p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                  className="px-6 py-3 bg-gray-100 text-slate-700 font-bold text-sm rounded-full hover:bg-gray-200 transition-colors"
                >
                  View all FAQs
                </button>
              </div>
            )}

            {/* Bottom CTA */}
            <div className="mt-20 p-10 rounded-[2rem] flex flex-col items-center text-center shadow-lg" style={{ backgroundColor: 'var(--brand-navy, #1e2f57)' }}>
              <div className="text-[12px] font-bold uppercase tracking-widest text-orange-400 mb-3">Still have questions?</div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-6">Let's find the right answer for your business.</h3>
              <button
                onClick={openPopup}
                className="px-8 py-4 bg-[var(--accent-orange)] hover:bg-orange-500 text-white font-bold text-[15px] rounded-full shadow-md transition-all"
              >
                Ask Our Team
              </button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
