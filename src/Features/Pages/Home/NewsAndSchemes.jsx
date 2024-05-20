import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from "../../../../public/abt.jpg"; 
import Image2 from "../../../../public/abt.jpg";
import Image3 from "../../../../public/abt.jpg";

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 rounded-full`}
      style={{ ...style, display: "block", right: "10px" }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-blue-500 rounded-full`}
      style={{ ...style, display: "block", left: "10px", zIndex: 1 }}
      onClick={onClick}
    />
  );
};

const NewsAndSchemes = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-blue-300 mt-10 p-6">
      <h2 className="text-center text-2xl font-bold mb-4">News and Schemes</h2>
      <Slider {...settings}>
        <div className="px-2">
          <div className="bg-white p-4 rounded-2xl shadow">
            <img src={Image1} alt="News 1" className="w-full rounded-t-2xl" />
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.
            </p>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white p-4 rounded-2xl shadow">
            <img src={Image2} alt="News 2" className="w-full rounded-t-2xl" />
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.
            </p>
          </div>
        </div>
        <div className="px-2">
          <div className="bg-white p-4 rounded-2xl shadow">
            <img src={Image3} alt="News 3" className="w-full rounded-t-2xl" />
            <p className="mt-2 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Veritatis.
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default NewsAndSchemes;
