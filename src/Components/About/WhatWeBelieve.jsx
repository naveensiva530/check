import React from 'react';
import CommonApproach from '../Services/common/CommonApproach';
import approachImg from '../../assets/Our_Approch (2).webp';

const believeData = {
  tagText: "OUR POINT OF VIEW",
  headingWords: [
    { text: "Attention" },
    { text: "is" },
    { text: "earned,", italic: true },
    { text: "not" },
    { text: "requested." }
  ],
  description: "People don't owe a brand their attention. Every post, page, ad, video, and campaign must give someone a reason to stay. We look for the ideas and experiences that make communication truly worth their time.",
  imageSrc: approachImg,
  imageAlt: "What We Believe - ADSSERV",
  steps: [
    {
      num: "01",
      title: "Relevance over noise",
      desc: "More content isn't automatically better. The right message reaching the right audience at the right moment matters far more."
    },
    {
      num: "02",
      title: "Ideas need execution",
      desc: "A clever concept means very little if it can't be produced, distributed, measured, and systematically improved."
    },
    {
      num: "03",
      title: "Creative and performance belong together",
      desc: "Creative work should earn genuine attention. Performance data should reveal what to learn from that attention."
    },
    {
      num: "04",
      title: "Platforms are not interchangeable",
      desc: "A piece of content shouldn't feel like it was copied from one platform and pasted onto another without platform-native thinking."
    },
    {
      num: "05",
      title: "Clarity beats jargon",
      desc: "If a marketing strategy cannot be explained simply and clearly, it probably isn't clear enough yet."
    },
    {
      num: "06",
      title: "Keep learning",
      desc: "Audiences evolve. Platforms change. Technology moves fast. We treat ongoing learning as a core part of our craft."
    }
  ]
};

export default function WhatWeBelieve() {
  return (
    <CommonApproach
      {...believeData}
      imageWrapClassName="lg:w-[45%] flex justify-center lg:justify-start lg:-ml-6"
      imageContainerClassName="w-full flex justify-center lg:justify-start"
      imageClassName="w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[430px] xl:max-w-[460px] h-auto object-contain drop-shadow-sm"
    />
  );
}

