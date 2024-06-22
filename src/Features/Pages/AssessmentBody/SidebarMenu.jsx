import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const SidebarMenu = ({ route, isOpen, setIsOpen, setSelectedComponent }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpen(true);
  };

  return (
    <>
      <div className="menu" onClick={toggleMenu}>
        <div className="flex items-center p-2 w-full text-left hover:bg-gray-700 rounded">
          <div className="flex items-center">
            <span className="mr-2">{route.icon}</span>
            <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
              {route.name}
            </span>
          </div>
          {isOpen && (
            <div
              className={`transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-180" : ""
              }`}
            >
              <FaAngleDown />
            </div>
          )}
        </div>
      </div>
      {isMenuOpen && (
        <div className="menu_container ml-4">
          {route.subRoutes.map((subRoute, i) => (
            <div
              key={i}
              className="flex items-center p-2 w-full text-left hover:bg-gray-700 rounded cursor-pointer"
              onClick={() => setSelectedComponent(subRoute.name)}
            >
              <div className="flex items-center">
                <span className="mr-2">{subRoute.icon}</span>
                <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
                  {subRoute.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SidebarMenu;
