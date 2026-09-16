import React from 'react';
import CommonApproach from '../common/CommonApproach';
import { approachData } from '../../Services_Provide/DigitalConsultingData';

const ConsultingProcess = () => {
  return (
    <CommonApproach {...approachData} />
  );
};

export default ConsultingProcess;