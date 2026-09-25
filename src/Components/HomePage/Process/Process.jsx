import { useRef } from 'react';
import { LayoutGroup, motion, useScroll, useTransform } from 'motion/react';
import { TextRotate } from '../../../Components/ui/text-rotate';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../common.css';
import processImg from '../../../assets/HomePage/Process/Process_image.webp';

export default function Process() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["30%", "-10%"]);

  return (
    <section ref={sectionRef} className="w-full pt-24 md:pt-32 bg-[#fff] relative z-0" style={{ fontFamily: 'var(--font-primary)' }}>
      <style>{`
        /* Process Section Mobile Responsive Styles */
        @media (max-width: 767px) {
          .process-section {
            padding-top: 40px;
          }
          .process-heading-text {
            font-size: clamp(20px, 6vw, 26px) !important;
          }
          .process-text-rotate {
            font-size: clamp(18px, 5vw, 24px) !important;
            padding: 6px 10px !important;
          }
          .process-description {
            font-size: 13px !important;
            padding: 0 12px;
          }
          .process-list {
            font-size: 12px !important;
          }
          .process-card-wrapper {
            max-width: 100% !important;
            padding-left: 50px !important;
            padding-right: 8px !important;
          }
          .process-card-number {
            left: -10px !important;
            width: 56px !important;
            height: 56px !important;
            font-size: 18px !important;
          }
          .process-card-content {
            padding: 14px 16px !important;
            min-height: 80px !important;
            border-radius: 20px !important;
          }
          .process-card-title {
            font-size: 14px !important;
          }
          .process-card-desc {
            font-size: 11px !important;
          }
          .process-character-img {
            max-width: 200px !important;
            bottom: 10px !important;
          }
          .process-card-center {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .process-character-container {
            position: relative !important;
            bottom: auto !important;
            margin-top: 12px !important;
            max-width: 280px !important;
          }
          .process-character-img {
            max-width: 280px !important;
            width: 100% !important;
            height: auto !important;
            bottom: auto !important;
          }
        }

        @media (max-width: 480px) {
          .process-section {
            padding-top: 32px;
          }
          .process-heading-text {
            font-size: clamp(18px, 5.5vw, 22px) !important;
          }
          .process-text-rotate {
            font-size: clamp(16px, 4.5vw, 20px) !important;
            padding: 4px 8px !important;
          }
          .process-description {
            font-size: 12px !important;
          }
          .process-list {
            font-size: 11px !important;
          }
          .process-card-wrapper {
            padding-left: 42px !important;
            padding-right: 4px !important;
          }
          .process-card-number {
            left: -8px !important;
            width: 48px !important;
            height: 48px !important;
            font-size: 16px !important;
          }
          .process-card-content {
            padding: 12px 14px !important;
            min-height: 70px !important;
            border-radius: 16px !important;
          }
          .process-card-title {
            font-size: 13px !important;
          }
          .process-card-desc {
            font-size: 10px !important;
          }
          .process-character-img {
            max-width: 160px !important;
          }
          .process-eyebrow-text {
            font-size: 13px !important;
          }
          .process-card-center {
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .process-character-container {
            position: relative !important;
            bottom: auto !important;
            margin-top: 8px !important;
            max-width: 220px !important;
          }
          .process-character-img {
            max-width: 220px !important;
            width: 100% !important;
            height: auto !important;
            bottom: auto !important;
          }
        }
      `}</style>
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10 pb-5 md:pb-[200px]">

        <div className="flex flex-col items-center justify-center gap-3 mb-16 md:mb-20">
          {/* Eyebrow — ⊕ icon + italic Playfair serif */}
          <div className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="process-eyebrow-text text-[16px] italic font-medium text-[#1a233a]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              OUR APPROACH
            </span>
          </div>

          {/* Heading with TextRotate */}
          <LayoutGroup>
            <motion.div
              layout
              className="process-heading-text flex flex-col sm:flex-row items-center justify-center gap-x-3 gap-y-2 text-[26px] sm:text-[36px] md:text-[50px] font-extrabold leading-[1.15] tracking-tight text-center flex-wrap"
              style={{ color: 'var(--text-dark)' }}
            >
              <motion.span layout transition={{ type: 'spring', damping: 25, stiffness: 600 }} className="whitespace-nowrap">
                We don't start with
              </motion.span>
              <TextRotate
                texts={['a content calendar. ✦', 'an assumption.', 'a template.', 'random tactics.', 'a guess.']}
                mainClassName="process-text-rotate text-white px-3 sm:px-4 py-1 overflow-hidden rounded-xl justify-center shadow-md text-[24px] sm:text-[34px] md:text-[46px]"
                style={{ background: 'var(--text-dark-blue)' }}
                staggerFrom="last"
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                exit={{ y: '-120%' }}
                staggerDuration={0.02}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ type: 'spring', damping: 25, stiffness: 600 }}
                rotationInterval={1500}
              />
            </motion.div>
          </LayoutGroup>

          <div className="process-description text-[14px] sm:text-[15px] text-gray-500 font-medium mt-3 max-w-[680px] text-center leading-relaxed px-4">
            <p className="mb-4 text-gray-800 font-bold text-base sm:text-lg">We start with the question behind it.</p>
            <ul className="process-list mb-4 text-left inline-block space-y-1">
              <li>• Who are you trying to reach?</li>
              <li>• What do they care about?</li>
              <li>• What are they already seeing?</li>
              <li>• Why should they notice you?</li>
              <li>• What needs to happen after they do?</li>
            </ul>
          </div>

          {/* CTA - Uiverse button style with brand colors */}
          <button
            className="know-more-btn mt-2"
            onClick={() => navigate('/projects')}
          >
            <span>See How We Work</span>
            <div className="know-more-icon">
              <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
            </div>
          </button>
        </div>

        {/* ── MOBILE VIEW: SEQUENTIAL 1 -> 2 -> 3 -> 4 -> 5 -> 6 ── */}
        <div className="flex md:hidden flex-col gap-3 sm:gap-5 w-full max-w-[340px] mx-auto mt-6 z-20 relative">
          {[
            { num: 1, title: "Understand", desc: "Get clear on the audience, business, market, competitors, positioning, and opportunity.", color: "#3a7eb7" },
            { num: 2, title: "Define", desc: "Decide what the marketing needs to achieve and how each channel contributes.", color: "#1a7974" },
            { num: 3, title: "Create", desc: "Turn strategy into content, campaigns, experiences, and creative people engage with.", color: "#d97c23" },
            { num: 4, title: "Launch", desc: "Put the work into the right channels with the right audience, timing, and execution.", color: "#4e5e4d" },
            { num: 5, title: "Learn", desc: "Read signals, understand what worked, identify what didn't, and use learning.", color: "#8a4baf" },
            { num: 6, title: "Improve", desc: "Digital doesn't stand still. Neither should the strategy.", color: "#c6538c" }
          ].map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="process-card-wrapper relative w-full pl-5 pr-2"
            >
              <div
                className="process-card-number absolute top-1/2 -translate-y-1/2 left-[-12px] w-[56px] h-[56px] rounded-full z-0 flex items-center justify-start pl-3 text-white text-[20px] font-bold shadow-md"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>
              <div className="process-card-content relative z-10 bg-white rounded-[20px] py-4 px-5 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[85px] border border-gray-100">
                <div className="flex-1 pr-1 text-left">
                  <h3 className="process-card-title text-[15px] font-bold text-gray-800 mb-1 leading-tight">{step.title}</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── DESKTOP VIEW: 2 COLUMNS (1,3,5 LEFT and 2,4,6 RIGHT) ── */}
        <div className="hidden md:grid relative w-full max-w-[1100px] mx-auto mt-8 grid-cols-[1fr_auto_1fr] gap-x-6 lg:gap-x-10 gap-y-12 items-center px-0">

          {/* Left Column - 3 Cards */}
          <div className="flex flex-col gap-12 lg:gap-16 w-full z-20">
            {/* 1. Understand */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.05 }} className="process-card-wrapper relative w-full max-w-[320px] mx-auto md:mr-auto pl-4 sm:pl-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#3a7eb7] z-0 flex items-center justify-start pl-3 sm:pl-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">1</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 pr-2 sm:pr-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Understand</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Get clear on the audience, business, market, competitors, positioning, and opportunity.</p>
                </div>
              </div>
            </motion.div>

            {/* 3. Create */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.15 }} className="process-card-wrapper relative w-full max-w-[320px] mx-auto md:mr-auto pl-4 sm:pl-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#d97c23] z-0 flex items-center justify-start pl-3 sm:pl-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">3</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 pr-2 sm:pr-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Create</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Turn strategy into content, campaigns, experiences, and creative people engage with.</p>
                </div>
              </div>
            </motion.div>

            {/* 5. Learn */}
            <motion.div initial={{ opacity: 0, x: -60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.25 }} className="process-card-wrapper process-card-center relative w-full max-w-[320px] mx-auto pl-4 sm:pl-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 left-[-20px] sm:left-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#8a4baf] z-0 flex items-center justify-start pl-3 sm:pl-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">5</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 pr-2 sm:pr-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Learn</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Read signals, understand what worked, identify what didn't, and use learning.</p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="hidden md:block w-[180px] lg:w-[220px] h-[400px] flex-shrink-0" />

          {/* Right Column - 3 Cards */}
          <div className="flex flex-col gap-12 lg:gap-16 w-full z-20">
            {/* 2. Define */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.1 }} className="process-card-wrapper process-card-center relative w-full max-w-[320px] mx-auto pr-4 sm:pr-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#1a7974] z-0 flex items-center justify-end pr-3 sm:pr-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">2</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 text-right pl-2 sm:pl-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Define</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Decide what the marketing needs to achieve and how each channel contributes.</p>
                </div>
              </div>
            </motion.div>

            {/* 4. Launch */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.2 }} className="process-card-wrapper relative w-full max-w-[320px] mx-auto md:ml-auto pr-4 sm:pr-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#4e5e4d] z-0 flex items-center justify-end pr-3 sm:pr-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">4</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 text-right pl-2 sm:pl-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Launch</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Put the work into the right channels with the right audience, timing, and execution.</p>
                </div>
              </div>
            </motion.div>

            {/* 6. Improve */}
            <motion.div initial={{ opacity: 0, x: 60 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.35, delay: 0.3 }} className="process-card-wrapper relative w-full max-w-[320px] mx-auto md:ml-auto pr-4 sm:pr-0">
              <div className="process-card-number absolute top-1/2 -translate-y-1/2 right-[-20px] sm:right-[-40px] w-[80px] sm:w-[100px] h-[70px] sm:h-[80px] rounded-full bg-[#c6538c] z-0 flex items-center justify-end pr-3 sm:pr-4 text-white text-[24px] sm:text-[28px] font-bold shadow-md">6</div>
              <div className="process-card-content relative z-10 bg-white rounded-[24px] sm:rounded-[30px] py-4 sm:py-5 px-5 sm:px-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] flex items-center min-h-[100px] sm:min-h-[110px]">
                <div className="flex-1 text-right pl-2 sm:pl-3">
                  <h3 className="process-card-title text-[15px] sm:text-[16px] font-bold text-gray-800 mb-1 leading-tight">Improve</h3>
                  <p className="process-card-desc text-gray-500 text-[12px] leading-relaxed">Digital doesn't stand still. Neither should the strategy.</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="process-character-container absolute bottom-[20px] md:bottom-[40px] left-1/2 -translate-x-1/2 w-full max-w-[380px] md:max-w-[400px] flex justify-center items-end z-10 pointer-events-none">
        <motion.img
          src={processImg}
          alt="Process Character"
          style={{ y }}
          className="process-character-img w-full h-auto object-contain object-bottom block"
          loading="lazy"
          decoding="async"
        />
      </div>


    </section>
  );
}
