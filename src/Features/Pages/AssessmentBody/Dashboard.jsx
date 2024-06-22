import { NavLink } from "react-router-dom";
import { FaBars, FaFileInvoice, FaUserEdit, FaUpload } from "react-icons/fa";
import { MdSchedule } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { useState } from "react";
import SidebarMenu from "./SidebarMenu";
import AssessmentSchedule from "./AssessmentSchedule";
import AddAssessor from "./AddAssessor";
import UploadResult from "./UploadResult";
import UpdateDetails from "./UpdateDetails";
import Invoice from "./Invoice";

const routes = [
  {
    path: "/assessment-schedule",
    name: "Assessment Schedule",
    icon: <MdSchedule />,
  },
  {
    path: "/add-assessor",
    name: "Add Assessor",
    icon: <FaUserEdit />,
  },
  {
    path: "/upload-result",
    name: "Upload Result",
    icon: <FaUpload />,
  },
  {
    path: "/update-details",
    name: "Update Details",
    icon: <AiFillEdit />,
  },
  {
    path: "/invoice",
    name: "Invoice",
    icon: <FaFileInvoice />,
  },
];

const SideBar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [selectedComponent, setSelectedComponent] = useState(
    "Assessment Schedule"
  );

  const renderComponent = () => {
    switch (selectedComponent) {
      case "Assessment Schedule":
        return <AssessmentSchedule />;
      case "Add Assessor":
        return <AddAssessor />;
      case "Upload Result":
        return <UploadResult />;
      case "Update Details":
        return <UpdateDetails />;
      case "Invoice":
        return <Invoice />;
      default:
        return <AssessmentSchedule />;
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className={`lg:flex flex-col bg-gray-800 text-white transition-width duration-300 ${
          isOpen ? "w-64" : "w-16"
        } lg:w-64`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700 flex justify-between items-center">
          <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
            Skill Assessment Dashboard
          </span>
          <FaBars onClick={toggle} className="cursor-pointer" />
        </div>
        <div className="flex-1 p-4">
          <div className="space-y-2">
            {routes.map((route, index) =>
              route.subRoutes ? (
                <SidebarMenu
                  key={index}
                  route={route}
                  isOpen={isOpen}
                  setIsOpen={setIsOpen}
                  setSelectedComponent={setSelectedComponent}
                />
              ) : (
                <div
                  key={index}
                  className="flex items-center p-2 w-full text-left hover:bg-gray-700 rounded cursor-pointer"
                  onClick={() => setSelectedComponent(route.name)}
                >
                  <span className="mr-2">{route.icon}</span>
                  <span className={`${isOpen ? "block" : "hidden"} lg:block`}>
                    {route.name}
                  </span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <main className="flex-1 p-6 bg-gray-100">{renderComponent()}</main>
    </div>
  );
};

export default SideBar;
