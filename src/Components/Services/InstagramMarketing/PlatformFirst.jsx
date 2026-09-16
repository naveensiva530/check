import React from 'react';
import CommonSpecialty from '../common/CommonSpecialty';
import { platformFirstData } from '../../Services_Provide/InstagramMarketingData';

const PlatformFirst = () => {
  return (
    <CommonSpecialty 
      tagText={platformFirstData.tagText}
      headingWords={platformFirstData.headingWords}
      paragraphs={platformFirstData.paragraphs}
      bgColor="white"
    />
  );
};

export default PlatformFirst;