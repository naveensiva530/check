import React from 'react';
import CommonMetrics from '../common/CommonMetrics';

const metrics = [
  {
    num: '01',
    goal: 'LEARNING AND RESEARCHING',
    title: 'Informational',
    desc: 'Someone searching for a definition is behaving differently from someone comparing providers — they are still learning.',
    pinColor: 'var(--accent-orange)',
    bg: 'rgba(224,131,38,0.08)',
    border: 'rgba(224,131,38,0.22)',
    text: 'var(--accent-orange)',
    rotate: 'rotate-[6deg]',
  },
  {
    num: '02',
    goal: 'COMPARING OPTIONS AND SOLUTIONS',
    title: 'Commercial Investigation',
    desc: 'Comparing options and solutions before choosing a provider, product, or direction.',
    pinColor: 'var(--brand-navy)',
    bg: 'rgba(30,47,87,0.06)',
    border: 'rgba(30,47,87,0.16)',
    text: 'var(--brand-navy)',
    rotate: '-rotate-[7deg]',
  },
  {
    num: '03',
    goal: 'READY TO ENQUIRE',
    title: 'Transactional',
    desc: 'Looking for a provider, product, or service — and ready to take the next step.',
    pinColor: 'var(--brand-red-orange)',
    bg: 'rgba(239,88,46,0.08)',
    border: 'rgba(239,88,46,0.22)',
    text: 'var(--brand-red-orange)',
    rotate: 'rotate-[5deg]',
  },
  {
    num: '04',
    goal: 'FINDING A DESTINATION',
    title: 'Navigational',
    desc: 'Looking for a specific brand or destination they already have in mind.',
    pinColor: 'var(--brand-blue)',
    bg: 'rgba(64,107,158,0.08)',
    border: 'rgba(64,107,158,0.22)',
    text: 'var(--brand-blue)',
    rotate: '-rotate-[6deg]',
  },
];

export default function KeywordIntent() {
  return (
    <CommonMetrics
      tagText="SEARCH WHAT MATTERS"
      headingWords={[
        { text: "Not" },
        { text: "every" },
        { text: "keyword", italic: true },
        { text: "deserves" },
        { text: "a" },
        { text: "page." },
      ]}
      description="We separate search opportunities by intent. Someone searching for a definition is behaving differently from someone comparing providers — and differently again from someone ready to enquire. We map keywords and topics to the right stage of the journey."
      bottomText="The result is a website where pages have jobs instead of competing against one another."
      metrics={metrics}
    />
  );
}
