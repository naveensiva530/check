import React from 'react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import '../../Components/HomePage/common.css';

// 3D Illustrations from PerformanceCreative
import imgObjective from '../../assets/Servicess/PerformanceCreative/Objective.webp';
import imgAudience from '../../assets/Servicess/PerformanceCreative/Audience.webp';
import imgMessage from '../../assets/Servicess/PerformanceCreative/Message.webp';
import imgChannel from '../../assets/Servicess/PerformanceCreative/channel.webp';
import imgExecution from '../../assets/Servicess/PerformanceCreative/Execution.webp';
import imgConversion from '../../assets/Servicess/PerformanceCreative/Conversion.webp';
import imgOptimisation from '../../assets/Servicess/PerformanceCreative/Optimisation.webp';

export default function MarketingApproach() {
  const steps = [
    {
      step: "01",
      title: "OBJECTIVE",
      question: "What does the campaign or channel need to achieve?",
      desc: "Understand the core business goal, commercial targets, and expectations before selecting marketing channels or spending budget.",
      img: imgObjective
    },
    {
      step: "02",
      title: "AUDIENCE",
      question: "Who needs to see or engage with the message?",
      desc: "Identify who the target customers are, what they care about, and what problem they are looking to solve.",
      img: imgAudience
    },
    {
      step: "03",
      title: "MESSAGE",
      question: "What should the audience understand?",
      desc: "Develop clear, value-driven communication that connects the business solution directly with customer needs.",
      img: imgMessage
    },
    {
      step: "04",
      title: "CHANNEL",
      question: "Where is the audience most likely to respond?",
      desc: "Select the most effective platforms—whether paid performance ads, organic social, or content—where the audience is active.",
      img: imgChannel
    },
    {
      step: "05",
      title: "EXECUTION",
      question: "Build and launch the appropriate marketing activity.",
      desc: "Produce campaign creative, messaging, audience setup, and landing experience, then deploy the activity.",
      img: imgExecution
    },
    {
      step: "06",
      title: "MEASUREMENT",
      question: "Review available campaign and audience signals.",
      desc: "Monitor engagement, response, clicks, enquiries, and performance indicators against the defined objective.",
      img: imgConversion
    },
    {
      step: "07",
      title: "OPTIMISATION",
      question: "Improve targeting, creative, messaging and execution.",
      desc: "Use real-world response data to continuously refine audiences, creative direction, copy, and conversion funnels.",
      img: imgOptimisation
    }
  ];

  const row1 = steps.slice(0, 4); // First 4 steps
  const row2 = steps.slice(4);    // Next 3 steps

  const renderCard = (item, idx) => (
    <div
      key={idx}
      className="relative flex flex-col items-center text-center p-5 pb-7 pt-4 bg-white rounded-[26px] shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-400 group border border-transparent hover:border-gray-100"
    >


      {/* 3D Illustration at Top */}
      <div className="w-[110px] h-[110px] sm:w-[125px] sm:h-[125px] mb-2 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-contain drop-shadow-md"
          loading="lazy"
        />
      </div>

      {/* Title in Orange */}
      <h3
        className="text-[16px] sm:text-[17px] md:text-[18px] font-extrabold mb-1 leading-tight uppercase tracking-wider"
        style={{ color: 'var(--accent-orange)' }}
      >
        {item.title}
      </h3>

      {/* Dotted Divider Line matching Image 1 */}
      <div className="w-[70%] border-b-2 border-dotted border-gray-200 mt-2 mb-3"></div>

      {/* Question */}
      <p className="text-[12.5px] sm:text-[13px] md:text-[13.5px] font-semibold text-slate-800 mb-2 leading-snug">
        "{item.question}"
      </p>

      {/* Description */}
      <p className="text-[11px] sm:text-[11.5px] md:text-[12px] font-medium leading-relaxed text-slate-500 mt-auto">
        {item.desc}
      </p>
    </div>
  );

  return (
    <section className="w-full py-24 px-4 md:px-8 font-primary relative" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1260px] mx-auto relative z-10">

        {/* Header in Services Style */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white border border-gray-200 shadow-sm flex-shrink-0">
              <span style={{ color: '#f97316', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span
              className="italic font-semibold uppercase tracking-widest text-[13px]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif", color: 'var(--accent-orange)' }}
            >
              MY MARKETING APPROACH
            </span>
          </div>

          <ScrollRevealHeading
            words={[
              { text: "Start" },
              { text: "With" },
              { text: "The", italic: true },
              { text: "Objective." }
            ]}
            justify="center"
            maxW="800px"
          />

          <p className="text-slate-600 text-base md:text-lg mt-6 font-medium leading-relaxed">
            Before selecting the tactic, understand what the business needs.
          </p>
        </div>

        {/* Two-Row Card Layout formatted like Image 1 */}
        <div className="flex flex-col gap-6">
          {/* Row 1: 4 Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {row1.map(renderCard)}
          </div>

          {/* Row 2: 3 Cards Centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[945px] mx-auto w-full gap-6">
            {row2.map(renderCard)}
          </div>
        </div>

      </div>
    </section>
  );
}
