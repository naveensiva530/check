import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, AlertCircle, ShieldCheck } from 'lucide-react';
import ScrollRevealHeading from '../Services/common/ScrollRevealHeading';
import { contactDetails, enquiryFormData } from './contactData';

const detailsHeadingWords = [
  { text: "We’re" },
  { text: "ready" },
  { text: "to" },
  { text: "hear" },
  { text: "from", italic: true },
  { text: "you.", italic: true }
];

const formHeadingWords = [
  { text: "Tell" },
  { text: "us" },
  { text: "what" },
  { text: "you’re" },
  { text: "working", italic: true },
  { text: "on.", italic: true }
];

// Shared Tailwind class strings (no template literals with backticks inside JSX)
const inputBase = "w-full px-4 py-3.5 bg-white border border-slate-200 rounded-xl text-[15px] font-medium placeholder:text-slate-400 text-[#1e2f57] outline-none focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0 focus:border-[#e08326] transition-all";
const labelClass = "block text-[11px] font-black uppercase tracking-widest mb-2";

export default function ContactFormSection({ preselectedService }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    website: '',
    serviceInterest: preselectedService || 'SEO Services',
    projectDetails: '',
    consent: true,
  });

  // Update when preselectedService prop changes
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, serviceInterest: preselectedService }));
    }
  }, [preselectedService]);

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) {
      alert("Please agree to the privacy consent to submit your enquiry.");
      return;
    }
    setLoading(true);
    setStatus(null);

    try {
      const targetEmail = contactDetails.email || 'connect@adsserv.in';
      const response = await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `New ADSSERV Enquiry: ${formData.fullName} (${formData.serviceInterest})`,
          "Full Name": formData.fullName,
          "Work Email": formData.workEmail,
          "Company": formData.company || "Not provided",
          "Website": formData.website || "Not provided",
          "Service Interest": formData.serviceInterest,
          "Project Details": formData.projectDetails,
          _template: "table",
          _captcha: "false"
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === "true" || data.success === true)) {
        setStatus('success');
      } else if (data.message && data.message.toLowerCase().includes('activation')) {
        setStatus('activation');
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Email submission error:', err);
      if (err.message && err.message.toLowerCase().includes('activation')) {
        setStatus('activation');
      } else {
        setStatus('error');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="enquiry-form-section" className="w-full py-14 md:py-24 scroll-mt-28" style={{ backgroundColor: 'var(--bg-light-purple)' }}>
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* LEFT COLUMN: Contact Details Card (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              {/* Standard Eyebrow */}
              <div className="flex items-center gap-2 mb-6">
                <span
                  className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
                >
                  <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                </span>
                <span
                  className="italic font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
                >
                  {contactDetails.eyebrow}
                </span>
              </div>

              <ScrollRevealHeading
                words={detailsHeadingWords}
                className="mb-4"
                style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.15 }}
              />
              <p className="text-[15px] font-medium leading-relaxed" style={{ color: '#3f6a93' }}>
                Connect directly with our team to discuss your goals, request a consultation, or ask any preliminary questions.
              </p>
            </div>

            {/* Info Cards */}
            <div className="flex flex-col gap-4">

              {/* Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-purple-200/70 hover:border-purple-400/60 transition-all duration-300" style={{ boxShadow: '0 2px 12px -4px rgba(110,60,170,0.10)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: 'var(--brand-orange)' }}>
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#9aaac0' }}>Direct Email</span>
                  <a href={`mailto:${contactDetails.email}`} className="text-[15px] font-extrabold transition-colors hover:underline" style={{ color: 'var(--brand-navy)' }}>{contactDetails.email}</a>
                  <span className="text-[12px] font-medium" style={{ color: '#6b7fa3' }}>Typical reply within 2–4 business hours.</span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-purple-200/70 hover:border-purple-400/60 transition-all duration-300" style={{ boxShadow: '0 2px 12px -4px rgba(110,60,170,0.10)' }}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-white" style={{ backgroundColor: 'var(--brand-navy)' }}>
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: '#9aaac0' }}>Business Line</span>
                  <a href={`tel:${contactDetails.phone}`} className="text-[15px] font-extrabold transition-colors hover:underline" style={{ color: 'var(--brand-navy)' }}>{contactDetails.phone}</a>
                  <span className="text-[12px] font-medium" style={{ color: '#6b7fa3' }}>Available for project enquiries and client support.</span>
                </div>
              </div>





            </div>

            {/* Privacy Badge */}
            <div className="p-5 rounded-2xl flex items-center gap-3" style={{ backgroundColor: 'var(--brand-navy)', boxShadow: '0 8px 24px -8px rgba(30,47,87,0.40)' }}>
              <ShieldCheck className="w-6 h-6 flex-shrink-0" style={{ color: '#34d399' }} />
              <p className="text-[13px] leading-relaxed font-medium" style={{ color: 'rgba(255,255,255,0.85)' }}>
                {enquiryFormData.microcopy}
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Enquiry Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="rounded-[32px] p-8 sm:p-10 md:p-12 relative overflow-hidden border border-purple-200/60" style={{ backgroundColor: '#ffffff', boxShadow: '0 20px 56px -16px rgba(110,60,170,0.22)' }}>
              {/* Ambient glow */}
              <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl pointer-events-none opacity-40" style={{ background: 'var(--bg-light-purple)' }} />

              <div className="mb-8 relative z-10">
                {/* Standard Eyebrow */}
                <div className="flex items-center gap-2 mb-6">
                  <span
                    className="flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--accent-orange, #e08326)', boxShadow: '0 2px 8px rgba(224,131,38,0.30)' }}
                  >
                    <span style={{ color: '#fff', fontSize: '12px', fontWeight: 'bold', lineHeight: 1 }}>+</span>
                  </span>
                  <span
                    className="italic font-semibold uppercase tracking-widest"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '13px', color: 'var(--accent-orange, #e08326)' }}
                  >
                    {enquiryFormData.eyebrow}
                  </span>
                </div>

                <ScrollRevealHeading
                  words={formHeadingWords}
                  className="mb-3"
                  style={{ fontSize: 'clamp(1.75rem, 3.2vw, 2.5rem)', lineHeight: 1.15 }}
                />
                <p className="text-[15px] font-medium leading-relaxed" style={{ color: '#3f6a93' }}>
                  {enquiryFormData.supportingCopy}
                </p>
              </div>

              {status === 'success' ? (
                <div className="rounded-2xl p-8 text-center space-y-5 border relative z-10" style={{ backgroundColor: 'var(--bg-light-purple)', borderColor: 'rgba(110,60,170,0.20)' }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto animate-bounce" style={{ backgroundColor: 'var(--brand-orange)', color: '#fff' }}>
                    <CheckCircle2 className="w-9 h-9" />
                  </div>
                  <h3 className="text-2xl font-extrabold" style={{ color: 'var(--brand-navy)' }}>
                    Enquiry Received!
                  </h3>
                  <p className="text-[15px] font-medium leading-relaxed max-w-md mx-auto" style={{ color: '#334155' }}>
                    {enquiryFormData.successMessage}
                  </p>
                  <button
                    onClick={() => {
                      setStatus(null);
                      setFormData({ fullName: '', workEmail: '', company: '', website: '', serviceInterest: 'SEO Services', projectDetails: '', consent: true });
                    }}
                    className="px-7 py-3 rounded-full font-bold text-[14px] text-white transition-all hover:opacity-90"
                    style={{ backgroundColor: 'var(--brand-navy)' }}
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">

                  {/* Field 01 & 02 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Your full name"
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        placeholder="Your business email"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Field 03 & 04 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>Company / Business</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your company or business name"
                        className={inputBase}
                      />
                    </div>

                    <div>
                      <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>Website</label>
                      <input
                        type="url"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Field 05: What can we help with? */}
                  <div>
                    <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>What can we help with? *</label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className={inputBase}
                    >
                      {enquiryFormData.servicesOptions.map((opt, i) => (
                        <option key={i} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>

                    {/* Quick selection chips */}
                    <div className="flex flex-wrap gap-2 mt-3">
                      {['SEO Services', 'Social Media Marketing', 'Performance Marketing', 'Website Development'].map((chip) => (
                        <button
                          key={chip}
                          type="button"
                          onClick={() => setFormData({ ...formData, serviceInterest: chip })}
                          className="px-3 py-1.5 rounded-full text-[12px] font-bold transition-all border"
                          style={
                            formData.serviceInterest === chip
                              ? { backgroundColor: 'var(--brand-orange)', color: '#fff', borderColor: 'var(--brand-orange)' }
                              : { backgroundColor: 'var(--bg-light-purple)', color: 'var(--brand-navy)', borderColor: 'rgba(110,60,170,0.25)' }
                          }
                        >
                          + {chip}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field 06: Tell us about your project */}
                  <div>
                    <label className={labelClass} style={{ color: 'var(--brand-navy)' }}>Tell us about your project *</label>
                    <textarea
                      required
                      rows={5}
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      placeholder="What are you trying to achieve, and what would you like help with?"
                      className={inputBase + ' resize-none'}
                    />
                  </div>

                  {/* Form Consent Checkbox */}
                  <div className="flex items-start gap-3 pt-2">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 w-4 h-4 rounded cursor-pointer accent-[#e08326]"
                    />
                    <label htmlFor="consent-checkbox" className="text-[13px] font-medium leading-relaxed cursor-pointer select-none" style={{ color: '#3f6a93' }}>
                      {enquiryFormData.consent}
                    </label>
                  </div>

                  {status === 'activation' && (
                    <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-900 text-xs leading-relaxed font-semibold flex items-start gap-2.5">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 text-amber-600 mt-0.5" />
                      <div>
                        <p className="font-bold text-[13px] mb-1 text-amber-950">Almost Done! One-Time Activation Required</p>
                        <p>An activation email was sent to <strong>{contactDetails.email || 'connect@adsserv.in'}</strong>. Open your email inbox, click the <strong>"Activate Form"</strong> link once, and then re-submit to start receiving enquiries!</p>
                      </div>
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{enquiryFormData.errorMessage}</span>
                    </div>
                  )}

                  {/* Form CTA Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-2xl font-extrabold text-[16px] text-white flex items-center justify-center gap-3 transition-all hover:-translate-y-0.5 disabled:opacity-50 cursor-pointer"
                    style={{ backgroundColor: 'var(--brand-navy)', boxShadow: '0 12px 28px -8px rgba(30,47,87,0.40)' }}
                  >
                    {loading ? (
                      <span>Sending Enquiry...</span>
                    ) : (
                      <>
                        <span>{enquiryFormData.cta}</span>
                        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-orange)' }}>
                          <Send className="w-4 h-4 text-white" />
                        </div>
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
