import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePopup } from '../../context/PopupContext';
import CommonCTA from '../../Services/common/CommonCTA';

export default function FinalCTA() {
  const { openPopup } = usePopup();
  const navigate = useNavigate();
  return (
    <CommonCTA
      tagText="YOUR NEXT MOVE"
      headingText="Have something worth building?"
      description="Tell us what you're working on, what isn't working, or where you want to go next. No giant pitch deck required. Just start the conversation."
      button1Text="Start a Project"
      button2Text="Talk to ADSSERV"
      button1Action={openPopup}
      button2Action={() => navigate('/contact')}
    />
  );
}
