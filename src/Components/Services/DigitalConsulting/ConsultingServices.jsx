import React from 'react';
import CommonWhatWeDo from '../common/CommonWhatWeDo';
import { consultingServicesData } from '../../Services_Provide/DigitalConsultingData';

const ConsultingServices = ({ sectionId, buttonAction }) => {
  return (
    <CommonWhatWeDo {...consultingServicesData} sectionId={sectionId} buttonAction={buttonAction} />
  );
};

export default ConsultingServices;
