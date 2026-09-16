import React from 'react';
import CommonCTA from '../Services/common/CommonCTA';
import { contactCTAData } from './contactData';

export default function ContactFinalCTA({ onScrollToForm, onScrollToServices }) {
  return (
    <CommonCTA
      {...contactCTAData}
      button1Action={onScrollToForm}
      button2Action={
        onScrollToServices ||
        (() => {
          const el = document.getElementById('services-grid-section');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        })
      }
    />
  );
}
