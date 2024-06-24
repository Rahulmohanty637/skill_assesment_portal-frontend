import React, { useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  FaHome,
  FaInfoCircle,
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  let Links = [
    { name: "HOME", link: "/", icon: <FaHome className="h-10 w-10" /> },
    { name: "ABOUT", link: "/", icon: <FaInfoCircle className="h-10 w-10" /> },
    {
      name: "STAKE HOLDERS",
      link: "/",
      icon: <FaUsers className="h-10 w-10" />,
    },
    { name: "RESOURCES", link: "/", icon: <FaBook className="h-8 w-8" /> },
    {
      name: "TRAINING & ASSESMENT",
      link: "/",
      icon: <FaChalkboardTeacher className="h-10 w-10" />,
    },
    { name: "CONTACT", link: "/", icon: <FaEnvelope className="h-8 w-8" /> },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full border border-[#A41034] top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#A41034] py-4 md:px-10 px-7">
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[1] left-0 w-full bg-[#A41034] md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-22" : "top-[-500px]"
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className=" md:ml-8 md:my-0 my-7 font-semibold">
              <a
                href={link.link}
                className="flex items-center text-white hover:text-gray-800 duration-500"
              >
                {!open && link.icon}
                <span className={!open ? "ml-2" : ""}>{link.name}</span>
              </a>
            </li>
          ))}
          <Link to="/login">
            <button className="btn bg-yellow-400 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default NavigationBar;
