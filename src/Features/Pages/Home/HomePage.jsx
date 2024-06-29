import React from "react";
import About from "./About";
import NewsAndSchemes from "./NewsAndSchemes";
import LocationAndContact from "./Location";
import Testimonials from "./Testimonial";
import Carousel from "./CarouselSlider";
import FeaturesSection from "./Features";
import KeyStakeholders from "./KeyStakeHolders";

const slides = [
  {
    image:
      "https://www.hirequotient.com/_next/image?url=https%3A%2F%2Fstrapi.caseyinterview.com%2Fuploads%2Fskills_assessment_tools_Benefits_you_are_missing_out_on_95f5c613d1.png&w=1920&q=75",
    caption: "Slide 1",
  },
  {
    image:
      "https://sc0.blr1.digitaloceanspaces.com/large/844871-63919-fmulacfijw-1500895379.jpg",
    caption: "Slide 2",
  },
  {
    image:
      "https://www.hirequotient.com/_next/image?url=https%3A%2F%2Fstrapi.caseyinterview.com%2Fuploads%2Fskills_assessment_tools_Benefits_you_are_missing_out_on_95f5c613d1.png&w=1920&q=75",
    caption: "Slide 3",
  },
];

const HomePage = () => {
  
  return (
    <>
      <Carousel/>
      <About />
      {/* <Numbers /> */}
      <FeaturesSection/>
      <KeyStakeholders/>
      <NewsAndSchemes />
      <LocationAndContact />
      <Testimonials />
    </>
  );
};

export default HomePage;
