import React from 'react';
import CommonStages from '../Services/common/CommonStages';

import imgStartups from '../../assets/Servicess/WhoThisIsFor/Startups.webp';
import imgGrowing from '../../assets/Servicess/WhoThisIsFor/Growing Businesses.webp';
import imgEstablished from '../../assets/Servicess/WhoThisIsFor/Established Brands.webp';
import imgSaaS from '../../assets/Servicess/WhoThisIsFor/SaaS & Technology.webp';
import imgLocal from '../../assets/Servicess/WhoThisIsFor/Local Businesses.webp';
import imgCreators from '../../assets/Servicess/WhoThisIsFor/Creators & Personal Brands.webp';

const stages = [
  {
    num: "01",
    title: "Startups & Emerging Brands",
    desc: "Build a strong digital foundation and establish a clear presence from the beginning.",
    img: imgStartups,
  },
  {
    num: "02",
    title: "Growing Businesses",
    desc: "Bring more structure, consistency, and performance thinking into digital marketing.",
    img: imgGrowing,
  },
  {
    num: "03",
    title: "Established Brands",
    desc: "Refresh digital communication and connect existing brand value with modern audience behaviour.",
    img: imgEstablished,
  },
  {
    num: "04",
    title: "SaaS & Technology Companies",
    desc: "Make complex products easier to understand, discover, evaluate, and choose.",
    img: imgSaaS,
  },
  {
    num: "05",
    title: "Local Businesses",
    desc: "Build stronger visibility and meaningful connections within the markets they serve.",
    img: imgLocal,
  },
  {
    num: "06",
    title: "Creators & Personal Brands",
    desc: "Turn expertise, personality, and audience attention into a stronger digital presence.",
    img: imgCreators,
  },
];

export default function WhoWeWorkWith() {
  return (
    <CommonStages
      tagText="THE BRANDS WE HELP"
      headingWords={[
        { text: "We" },
        { text: "work", italic: true },
        { text: "with" },
        { text: "ambition" },
        { text: "at" },
        { text: "different" },
        { text: "stages." },
      ]}
      paragraphs={[
        "A startup doesn't have the same problem as an established brand. A SaaS company doesn't communicate like a salon. A creator doesn't build an audience like a real estate business.",
        "We don't force them into the same playbook. We build strategies that fit where they are and where they want to go.",
      ]}
      stages={stages}
    />
  );
}
