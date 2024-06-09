import React from "react";
import { Link } from "react-router-dom";
import Cutmlogo from "../../../assets/logo.png";
import Ncvtlogo from "../../../assets/NCVET logo.jpeg";
import SIlogo from "../../../assets/Skill-India-Logo-PNG.png";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border-t-4 border-[#A41034]">
      <a className="flex items-center" href="#">
        <img
          src={Cutmlogo}
          alt="logo"
          className="w-[154px] h-[154px] object-contain md:w-32"
        />
      </a>
      <div className="space-y-2 lg:ml-1 ml-3">
        <h1 className="text-sm font-semibold md:text-xl lg:text-3xl">
          Centurion University of Technology and Management
        </h1>
        <p className="text-xs lg:text-xl font-medium text-gray-500 dark:text-gray-400">
          Awarding Body recognized by NCVET
        </p>
      </div>
      <div className="flex items-center">
        <a href="#">
          <img
            src={Ncvtlogo}
            alt="logo"
            className="w-[104px] h-[104px] object-contain md:w-32"
          />         
        </a>
        <a href="#">
          <img
            src={SIlogo}
            alt="logo"
            className="w-[104px] h-[104px] object-contain md:w-32"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;

