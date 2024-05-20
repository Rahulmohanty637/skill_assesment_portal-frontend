import React, { Component, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import About from "./Features/Pages/Home/About";

import HomeCarousel from "./Features/Pages/Home/Carousel";
import { homeCarouselData } from "./Features/Pages/Home/HomeCarouselData";
import NavigationBar from "./Features/Pages/Home/NavigationBar";

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
    </div>
  );
}

export default App;
