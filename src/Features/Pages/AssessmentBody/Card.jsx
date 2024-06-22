import React from "react";
import {
  FaClipboardList,
  FaBookOpen,
  FaUsers,
  FaUserGraduate,
  FaCertificate,
  FaChalkboardTeacher,
} from "react-icons/fa";

const stats = [
  {
    title: "Assessment Conducted",
    icon: <FaClipboardList />,
    value: 120,
    subText: "+0 from last Month",
  },
  {
    title: "Courses Available",
    icon: <FaBookOpen />,
    value: 45,
    subText: "+0 from last Batch",
  },
  {
    title: "Number of Assessors",
    icon: <FaUsers />,
    value: 30,
    subText: "+0 from last Batch",
  },
  {
    title: "Ongoing Assessments",
    icon: <FaChalkboardTeacher />,
    value: 10,
    subText: "+0 from last Year",
  },
];

const Card = () => {
  return (
    <div className="flex flex-wrap gap-3 mt-8 justify-start xl:justify-normal">
      {stats.map((item, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 bg-white p-5 rounded-lg shadow-md flex flex-col items-center gap-1 transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
        >
          <div className="flex flex-col items-center w-full mb-3">
            <h2 className="text-md font-semibold text-gray-800 whitespace-nowrap">
              {item.title}
            </h2>
            <div className="text-3xl text-gray-600 mt-3">{item.icon}</div>
          </div>
          <div className="text-2xl font-bold text-gray-900">{item.value}</div>
          <div className="text-sm text-gray-500">{item.subText}</div>
        </div>
      ))}
    </div>
  );
};

export default Card;
