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
      <NavigationBar />
      <HomeCarousel images={homeCarouselData} />
      <About />
      <Numbers/>
      <NewsAndSchemes/>
      <LocateUs/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
