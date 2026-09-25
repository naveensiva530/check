import { useNavigate } from 'react-router-dom';
import ButtonWithIcon from '../ui/button-with-icon';
import '../../Components/HomePage/common.css';
import ScrollRevealHeading from '../Services/SocialMedia/ScrollRevealHeading';
import { useScrollAnimation, fadeUp } from '../Services/SocialMedia/useScrollAnimation';

export default function OurWork() {
  const navigate = useNavigate();
  const { sectionRef, ref } = useScrollAnimation((refs, section) => {
    fadeUp([refs.eyebrow, refs.heading, refs.paragraph], {
      trigger: section,
      start: 'top 80%',
      duration: 0.5,
      stagger: 0.08,
    });
    if (refs.cta) {
      fadeUp(refs.cta, {
        trigger: refs.cta,
        start: 'top 90%',
        duration: 0.4,
        y: 20,
      });
    }
  });

  return (
    <section ref={sectionRef} className="w-full py-32 relative font-primary bg-white">
      <div className="max-w-[1200px] w-full mx-auto px-4 md:px-8 relative z-10 text-center flex flex-col items-center">

        {/* Eyebrow */}
        <div ref={ref('eyebrow')} className="about-eyebrow flex items-center gap-2 mb-6">
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
            PROOF IN PRACTICE
          </span>
        </div>

        <div ref={ref('heading')}>
          <ScrollRevealHeading
            className="mb-8"
            maxW="900px"
            justify="center"
            words={[
              { text: "See" },
              { text: "what", italic: true },
              { text: "happens" },
              { text: "when" },
              { text: "strategy" },
              { text: "meets" },
              { text: "execution." }
            ]}
          />
        </div>

        <div
          ref={ref('paragraph')}
          className="flex flex-col gap-4 text-[16px] md:text-[18px] font-medium leading-relaxed max-w-[700px] mx-auto mb-12"
          style={{ color: '#334155' }}
        >
          <p>
            Our projects bring together different combinations of strategy, creative, content, technology, and performance depending on what the business actually needs.
          </p>
          <p>
            Explore the work to see the thinking behind the execution.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center w-full">
          <div className="w-full sm:w-auto">
            <div ref={ref('cta')}>
              <ButtonWithIcon onClick={() => navigate('/projects')}>Explore Projects</ButtonWithIcon>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
