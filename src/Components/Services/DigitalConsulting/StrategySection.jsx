import React from 'react';
import CommonSpecialty from '../common/CommonSpecialty';
import { strategySectionData } from '../../Services_Provide/DigitalConsultingData';

const StrategySection = () => {
  return (
    <CommonSpecialty 
      tagText={strategySectionData.tagText}
      headingWords={strategySectionData.headingWords}
      paragraphs={strategySectionData.paragraphs}
      bgColor="white"
    />
  );
};

export default StrategySection;