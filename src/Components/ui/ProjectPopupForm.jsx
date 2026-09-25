import React, { useEffect, useState } from 'react';
import { X, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { usePopup } from '../context/PopupContext';

const HELP_OPTIONS = [
  "SEO Services", "Social Media Marketing", "Performance Marketing",
  "Website Development", "Influencer Marketing", "Video Production",
  "Branding Solutions", "Digital Consulting", "Content Writing",
  "Instagram Marketing", "Industry / Sector", "Other"
];

export default function ProjectPopupForm() {
  const { isPopupOpen, isPopupMounted, closePopup } = usePopup();
  const isClosing = !isPopupOpen;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    website: '',
    helpWith: []
  });

  // Handle ESC key to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closePopup();
    };
    if (isPopupOpen) window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isPopupOpen, closePopup]);

  // Auto-close popup after successful submission
  useEffect(() => {
    if (submitStatus === 'success') {
      const autoCloseTimer = setTimeout(() => {
        closePopup();
      }, 3500);
      return () => clearTimeout(autoCloseTimer);
    }
  }, [submitStatus, closePopup]);

  // Reset form and status when popup closes
  useEffect(() => {
    if (!isPopupOpen) {
      const resetTimer = setTimeout(() => {
        setSubmitStatus(null);
        setSubmitError('');
        setFormData({
          fullName: '',
          workEmail: '',
          company: '',
          website: '',
          helpWith: []
        });
      }, 400);
      return () => clearTimeout(resetTimer);
    }
  }, [isPopupOpen]);

  if (!isPopupMounted) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleOptionToggle = (option) => {
    setFormData(prev => {
      const current = prev.helpWith;
      if (current.includes(option)) {
        return { ...prev, helpWith: current.filter(o => o !== option) };
      } else {
        return { ...prev, helpWith: [...current, option] };
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.helpWith.length === 0) {
      setSubmitStatus('error');
      setSubmitError("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitError('');
    try {
      const response = await fetch('https://formsubmit.co/ajax/connect@adsserv.in', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New ADSSERV Project Request: ${formData.fullName}`,
          'Full Name': formData.fullName,
          'Work Email': formData.workEmail,
          Company: formData.company || 'Not provided',
          Website: formData.website || 'Not provided',
          'Services Requested': formData.helpWith.join(', '),
          _template: 'table',
          _captcha: 'false'
        })
      });
      const data = await response.json();
      if (response.ok && (data.success === true || data.success === 'true')) {
        setSubmitStatus('success');
      } else if (data.message?.toLowerCase().includes('activation')) {
        setSubmitStatus('activation');
      } else {
        throw new Error(data.message || 'Could not send your request. Please try again.');
      }
    } catch (error) {
      if (error.message?.toLowerCase().includes('activation')) {
        setSubmitStatus('activation');
      } else {
        setSubmitStatus('error');
        setSubmitError(error.message || 'Could not send your request. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        .drawer-slide-in {
          animation: slideInRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .drawer-slide-out {
          animation: slideOutRight 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .bg-fade-out {
          animation: fadeOut 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes popIn {
          0% { transform: scale(0.6); opacity: 0; }
          70% { transform: scale(1.08); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in {
          animation: popIn 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
        }
        .animate-fade-in {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .hide-scrollbar::-webkit-scrollbar {
          width: 0px;
          background: transparent;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f5f9; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1; 
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8; 
        }
      `}</style>
      <div className={`fixed inset-0 z-[99999] flex justify-end bg-slate-900/60 backdrop-blur-sm ${isClosing ? 'bg-fade-out' : 'bg-fade-in'}`} style={{ fontFamily: "var(--font-primary)" }}>
        <div className="absolute inset-0 z-0" onClick={closePopup}></div>
        <div 
          className={`bg-white w-full max-w-[420px] h-full shadow-2xl relative z-10 flex flex-col ${isClosing ? 'drawer-slide-out' : 'drawer-slide-in'}`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Right Close Button */}
          <button 
            onClick={closePopup}
            aria-label="Close"
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors z-20 cursor-pointer"
          >
            <X size={18} strokeWidth={2.5} />
          </button>

          {submitStatus === 'success' ? (
            /* Centered Success View */
            <div className="flex-1 flex flex-col items-center justify-center p-8 text-center bg-white animate-fade-in">
              {/* Outer soft circle with inner bright green circle */}
              <div className="w-24 h-24 rounded-full bg-[#edf5f8] flex items-center justify-center mb-6 animate-pop-in">
                <div className="w-16 h-16 rounded-full bg-[#2ecc71] flex items-center justify-center shadow-[0_4px_14px_rgba(46,204,113,0.35)]">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-slate-900 mb-2 tracking-tight">
                Saved!
              </h3>

              {/* Description */}
              <p className="text-slate-500 text-[14px] sm:text-[15px] font-normal leading-relaxed max-w-[280px] mb-8">
                Your form was submitted successfully.
              </p>

              {/* Outlined Close Button */}
              <button
                type="button"
                onClick={closePopup}
                className="px-9 py-2 rounded-lg border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-400 font-semibold text-[14px] transition-all shadow-sm active:scale-95 cursor-pointer"
              >
                Close
              </button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="pt-5 px-6 pb-3 border-b border-slate-100 flex-shrink-0 relative">
                <div className="text-center pr-6">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--brand-navy)] mb-1">Start a Project</h2>
                  <p className="text-[13px] text-slate-500 font-medium">Tell us a bit about your needs, and we'll get back to you.</p>
                </div>
              </div>

              {/* Form Scrollable Area */}
              <div className="flex-1 overflow-y-auto hide-scrollbar p-5">
                <form id="project-form" onSubmit={handleSubmit} className="flex flex-col gap-3 w-[82%] mx-auto">
                  
                  <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-slate-700 mb-1 ml-1">Full Name <span className="text-red-500">*</span></label>
                    <input 
                      type="text" 
                      name="fullName" 
                      value={formData.fullName} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--brand-orange)] focus:ring-0 transition-all text-[13px] font-medium text-[var(--brand-navy)]" 
                      placeholder="John Doe" 
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-slate-700 mb-1 ml-1">Work Email <span className="text-red-500">*</span></label>
                    <input 
                      type="email" 
                      name="workEmail" 
                      value={formData.workEmail} 
                      onChange={handleChange} 
                      required 
                      className="w-full px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--brand-orange)] focus:ring-0 transition-all text-[13px] font-medium text-[var(--brand-navy)]" 
                      placeholder="john@company.com" 
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-slate-700 mb-1 ml-1">Company / Business</label>
                    <input 
                      type="text" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      className="w-full px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--brand-orange)] focus:ring-0 transition-all text-[13px] font-medium text-[var(--brand-navy)]" 
                      placeholder="Company Name" 
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-[12px] font-bold text-slate-700 mb-1 ml-1">Website</label>
                    <input 
                      type="url" 
                      name="website" 
                      value={formData.website} 
                      onChange={handleChange} 
                      className="w-full px-3 py-1.5 rounded-xl border-2 border-slate-100 bg-slate-50 focus:bg-white focus:outline-none focus:border-[var(--brand-orange)] focus:ring-0 transition-all text-[13px] font-medium text-[var(--brand-navy)]" 
                      placeholder="https://example.com" 
                    />
                  </div>

                  <div className="flex flex-col mt-1 relative">
                    <label className="text-[12px] font-bold text-slate-700 mb-1 ml-1">What can we help with? <span className="text-red-500">*</span></label>
                    <button
                      type="button"
                      aria-expanded={isDropdownOpen}
                      onClick={() => setIsDropdownOpen(open => !open)}
                      className="w-full px-3 py-2 rounded-xl border-2 border-slate-100 bg-slate-50 hover:border-slate-200 focus:outline-none focus:border-[var(--brand-orange)] flex justify-between items-center text-left transition-colors"
                    >
                      <span className={`text-[13px] font-medium ${formData.helpWith.length ? 'text-[var(--brand-navy)]' : 'text-slate-400'}`}>
                        {formData.helpWith.length ? `${formData.helpWith.length} service${formData.helpWith.length > 1 ? 's' : ''} selected` : 'Select options...'}
                      </span>
                      <svg className={`w-3.5 h-3.5 text-slate-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path></svg>
                    </button>

                    {isDropdownOpen && (
                      <div
                        onWheel={(event) => event.stopPropagation()}
                        className="absolute bottom-[100%] left-0 z-50 w-full mb-2 max-h-[min(45vh,280px)] overflow-y-auto overscroll-contain bg-white border-2 border-slate-100 rounded-xl shadow-[0_-10px_40px_-10px_rgba(0,0,0,0.15)] hide-scrollbar"
                      >
                        <div className="sticky top-0 z-10 flex items-center justify-between px-3 py-2 bg-white border-b border-slate-100 rounded-t-xl">
                          <span className="text-[12px] font-bold text-slate-700">Select services</span>
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(false)}
                            aria-label="Close service options"
                            className="w-6 h-6 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                          >
                            <X size={15} />
                          </button>
                        </div>
                        <div className="p-1.5">
                          {HELP_OPTIONS.map(opt => {
                            const isSelected = formData.helpWith.includes(opt);
                            return (
                              <label key={opt} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${isSelected ? 'bg-slate-50' : 'hover:bg-slate-50'}`}>
                                <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${isSelected ? 'bg-[var(--brand-navy)] border-[var(--brand-navy)]' : 'border-slate-300 bg-white'}`}>
                                  {isSelected && <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>}
                                </div>
                                <span className="text-[13px] text-slate-700 font-medium">{opt}</span>
                                <input 
                                  type="checkbox" 
                                  className="hidden"
                                  checked={isSelected}
                                  onChange={() => handleOptionToggle(opt)}
                                />
                              </label>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>

                  {submitStatus === 'activation' && (
                    <div role="alert" className="flex gap-2 rounded-xl bg-amber-50 p-3 text-[12px] text-amber-800">
                      <AlertCircle size={18} className="shrink-0" />
                      <p>Email delivery needs activation for this inbox. Please contact connect@adsserv.in directly while it is being activated.</p>
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div role="alert" className="flex gap-2 rounded-xl bg-red-50 p-3 text-[12px] text-red-700">
                      <AlertCircle size={18} className="shrink-0" />
                      <p>{submitError}</p>
                    </div>
                  )}

                </form>
              </div>

              {/* Footer with Submit Button */}
              <div className="p-4 border-t border-slate-100 bg-slate-50 flex-shrink-0 flex justify-center">
                <button
                  type="submit"
                  form="project-form"
                  disabled={isSubmitting}
                  className="w-[75%] bg-[var(--brand-navy)] hover:bg-[var(--brand-orange)] disabled:opacity-70 text-white font-bold py-2.5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-[0_8px_25px_rgba(224,131,38,0.35)] hover:-translate-y-0.5 text-[14px] cursor-pointer"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    'Submit Request'
                  )}
                </button>
              </div>
            </>
          )}

        </div>
      </div>
    </>
  );
}
