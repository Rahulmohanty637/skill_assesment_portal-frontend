// Sidebar.js
import React from "react";

const Sidebar = ({ selectedMenu, setSelectedMenu }) => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">AssessmentPartner</h2>
      <ul>
        <li
          className={`p-2 cursor-pointer ${
            selectedMenu === "assessment" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedMenu("assessment")}
        >
          Assessment Schedule
        </li>
        <li
          className={`p-2 cursor-pointer ${
            selectedMenu === "upload" ? "bg-gray-700" : ""
          }`}
          onClick={() => setSelectedMenu("upload")}
        >
          Upload Result
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
