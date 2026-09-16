import React from 'react';
import CommonSpecialty from '../common/CommonSpecialty';
import { roadmapSectionData } from '../../Services_Provide/DigitalConsultingData';

const RoadmapSection = () => {
  return (
    <CommonSpecialty 
      tagText={roadmapSectionData.tagText}
      headingWords={roadmapSectionData.headingWords}
      paragraphs={roadmapSectionData.paragraphs}
      bottomText={roadmapSectionData.bottomText}
      bgColor="purple"
    />
  );
};

export default RoadmapSection;