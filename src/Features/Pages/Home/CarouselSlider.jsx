import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = 3000; // 3 seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideInterval);
    return () => clearInterval(interval);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full lg:h-96 mx-auto">
      <div className="overflow-hidden relative">
        <div
          className="flex transition-transform duration-1000"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="w-full lg:h-96 flex-shrink-0"
              style={{ width: "100%" }}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full lg:h-96 object-fill"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        <FaArrowLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Carousel;
