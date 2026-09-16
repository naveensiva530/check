import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { serviceConnectionData } from '../../Services_Provide/DigitalConsultingData';
import ScrollRevealHeading from '../common/ScrollRevealHeading';
import '../../HomePage/common.css';

const ServiceConnection = () => {
  return (
    <section className="w-full py-24 bg-white relative font-primary">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0" style={{ background: 'var(--accent-orange)' }}>
              <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
            </span>
            <span className="italic font-semibold uppercase tracking-widest" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange)' }}>
              {serviceConnectionData.tagText}
            </span>
          </div>
          <ScrollRevealHeading maxW="800px" words={serviceConnectionData.headingWords} />
        </div>

        <div className="max-w-[700px] mx-auto text-center mb-12">
          {serviceConnectionData.paragraphs.map((para, idx) => (
            <p key={idx} className="text-[16px] md:text-[17px] font-medium leading-relaxed text-slate-700 mb-4">{para}</p>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceConnectionData.services.map((service, idx) => (
            <Link key={idx} to={service.href} className="p-6 rounded-2xl border border-gray-100 hover:border-[var(--accent-orange)] hover:shadow-lg transition-all duration-300 group bg-white">
              <div className="flex items-center gap-3 mb-3">
                <service.icon className="w-5 h-5 text-[var(--accent-orange)]" />
                <h3 className="font-bold text-[var(--brand-navy)]">{service.title}</h3>
              </div>
              <p className="text-sm text-slate-600 mb-3">{service.desc}</p>
              <div className="flex items-center gap-1 text-[var(--accent-orange)] text-sm font-semibold group-hover:gap-2 transition-all">
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceConnection;