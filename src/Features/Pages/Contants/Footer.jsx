import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];
const Footer = () => {
  return (
    <div className="bg-[#A41034] mt-14 border-t-4 border-[#A41034] ">
      <div className="space-y-2 text-center mt-3 -mb-14">
        <h1 className="text-xl font-bold md:text-xl lg:text-3xl text-white">
          Centurion University of Technology and Management
        </h1>
        <p className="text-lg lg:text-xl font-semibold text-black">
          Awarding Body recognized by NCVET
        </p>
      </div>
      <section className="container mt-20 bg-[#3C3C3C]">
        <div className=" grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className=" py-8 px-4 ">
            <h1 className="sm:text-3xl text-xl text-[#FFD575] font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              Skill Assessment Platform
            </h1>
            <p className="text-sm text-white">
              Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Possimus, voluptate.{" "}
            </p>
            <br />
            <div className="flex items-center gap-3 text-white">
              <FaLocationArrow />
              <p>Bhubaneswar, Odisha</p>
            </div>
            <div className="flex items-center gap-3 mt- text-white">
              <FaMobileAlt />
              <p>+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6 text-white">
              <a href="#">
                <FaInstagram className="text-3xl hover:text-[#FFD575] duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl hover:text-[#FFD575] duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl hover:text-[#FFD575] duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10 ">
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-[#FFD575]">
                  Important Links
                </h1>
                <ul className={`flex flex-col gap-3`}>
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-[#FFD575] space-x-1 text-white">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-[#FFD575]">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-[#FFD575] space-x-1 text-white ">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4 ">
                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3 text-[#FFD575]">
                  Location
                </h1>
                {/* <ul className="list-disc list-inside"> */}
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li className="cursor-pointer hover:translate-x-1 duration-300 hover:text-[#FFD575] space-x-1 text-white">
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
