import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./Features/Pages/Home/About";

import HomeCarousel from "./Features/Pages/Home/Carousel";
import { homeCarouselData } from "./Features/Pages/Home/HomeCarouselData";
import NavigationBar from "./Features/Pages/Home/NavigationBar";
import Numbers from "./Features/Pages/Home/Numbers";
import NewsAndSchemes from "./Features/Pages/Home/NewsAndSchemes";
import LocateUs from "./Features/Pages/Home/Location";
import Testimonials from "./Features/Pages/Home/Testimonial";
import Footer from "./Features/Pages/Home/Footer";
import Header from "./Features/Pages/Home/Header";
import Carousel from "./Features/Pages/Home/CarouselSlider";
import RegistrationForm from "./Features/Pages/AssessmentBody/RegistrationForm";
import AssessmentPartnerDashboard from "./Features/Pages/AssessmentBody/AssessmentPartnerDashboard";

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

function App() {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <NavigationBar />
      {/* <HomeCarousel images={homeCarouselData} /> */}
      {/* <Carousel slides={slides}/>
      <About />
      <Numbers />
      <NewsAndSchemes />
      <LocateUs />
      <Testimonials />
      <RegistrationForm/> */}
      <AssessmentPartnerDashboard/>
      <Footer />
    </div>
  );
}

export default App;
