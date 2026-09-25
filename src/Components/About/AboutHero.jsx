import CommonHero from '../Services/common/CommonHero';
import bgImage from '../../assets/All the Hero Section bg/About Us.webp';

export default function AboutHero() {
  return (
    <CommonHero
      bgImage={bgImage}
      title="About ADSSERV"
      breadcrumbText="About"
      tagText="ABOUT ADSSERV"
      headingWords={[
        { text: 'We' },
        { text: 'Build', italic: true },
        { text: 'Digital' },
        { text: 'Work' },
        { text: 'People' },
        { text: 'Actually' },
        { text: 'Notice' },
      ]}
      description1="ADSSERV is a Gen Z digital marketing agency built around a simple idea: good marketing should feel relevant to the people it's trying to reach."
      description2="We bring together strategy, creative, technology, content, and performance to help brands communicate better and compete in a digital world that moves quickly."
      description3="Good marketing should feel relevant to the people it's trying to reach. We help brands communicate better."
      button2Text="Explore Our Services"
      button2Link="/about#about-capabilities"
    />
  );
}
