import React from 'react';
import CommonStages from '../common/CommonStages';
import { whoItsForData } from '../../Services_Provide/DigitalConsultingData';

const WhoItsFor = () => {
  return (
    <CommonStages {...whoItsForData} />
  );
};

export default WhoItsFor;