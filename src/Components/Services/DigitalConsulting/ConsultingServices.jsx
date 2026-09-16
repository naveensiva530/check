import React from 'react';
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { consultingServicesData } from '../../Services_Provide/DigitalConsultingData';

const ConsultingServices = () => {
  return (
    <CommonWhatWeDo {...consultingServicesData} />
  );
};

export default ConsultingServices;