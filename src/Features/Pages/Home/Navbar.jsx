import React, { useState } from "react";
import {
  Bars3BottomRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import logo from '../../../assets/logo.png';
import HomeCarousel from "./Carousel";
import { homeCarouselData } from "./HomeCarouselData";

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "STAKE HOLDERS", link: "/" },
    { name: "RESOURCES", link: "/" },
    { name: "TRAINING & ASSESMENT", link: "/" },
    { name: "CONTACT", link: "/" },

  ];
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-blue-200 py-4 md:px-10 px-7">
        {/* logo section */}
        <a href="/" className="text-white">
          <img
            src={logo}
            alt="logo"
            className="w-[124px] h-[124px] object-contain md:w-32"
          />
        </a>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-blue-200 md:z-auto z-[1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-22" : "top-[-490px]"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="text-gray-800 hover:text-white duration-500"
              >
                {link.name}
              </a>
            </li>
          ))}
          <button className="btn bg-blue-900 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button>
        </ul>
        {/* button */}
      </div>
      <HomeCarousel images={homeCarouselData}/>
    </div>
  );
};

export default Navbar;
