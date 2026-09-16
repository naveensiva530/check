import React from 'react';
import CommonRelatedServices from '../Services/common/CommonRelatedServices';
import { contactRelatedServicesData } from './contactData';

export default function ContactServicesGrid() {
  return (
    <div id="services-grid-section" className="scroll-mt-24">
      <CommonRelatedServices {...contactRelatedServicesData} />
    </div>
  );
}
