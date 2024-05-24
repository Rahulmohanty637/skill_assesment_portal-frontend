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
      <div className="space-y-2">
        <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
          Centurion University of Technology and Management
        </h1>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
          Awarding Body recognized by NCVET
        </p>
      </div>
      <div className="flex items-center space-x-4">
        <a href="#">
          <img
            src={Ncvtlogo}
            alt="logo"
            className="w-[104px] h-[104px] object-contain md:w-32"
          />
          <span className="sr-only">Product</span>
        </a>
        <a href="#">
          <img
            src={SIlogo}
            alt="logo"
            className="w-[104px] h-[104px] object-contain md:w-32"
          />
          <span className="sr-only">Services</span>
        </a>
      </div>
    </header>
  );
};

export default Header;

/* <header className="flex items-center justify-between px-4 py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 border-t-4 border-[#A41034]">
<Link className="flex items-center" href="#">
  <img
    src={Cutmlogo}
    alt="logo"
    className="w-[154px] h-[154px] object-contain md:w-32"
  />
  <span className="sr-only">
    Centurion University of Technology and Management
  </span>
</Link>
<div className="space-y-2">
  <h1 className="text-lg font-semibold md:text-xl lg:text-2xl">
    Centurion University of Technology and Management
  </h1>
  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
    Awarding Body recognized by NCVET
  </p>
</div>
<div className="flex items-center space-x-4">
  <Link href="#">
    <img
      src={Ncvtlogo}
      alt="logo"
      className="w-[104px] h-[104px] object-contain md:w-32"
    />
    <span className="sr-only">Product</span>
  </Link>
  <Link href="#">
    <img
      src={SIlogo}
      alt="logo"
      className="w-[104px] h-[104px] object-contain md:w-32"
    />
    <span className="sr-only">Services</span>
  </Link>
</div>
</header> */
