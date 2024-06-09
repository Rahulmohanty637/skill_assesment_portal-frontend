import React, { useState } from "react";
import Sidebar from "./Sidebar";
import AssessmentSchedule from "./AssessmentSchedule";

const Dashboard = () => {
  const [selectedMenu, setSelectedMenu] = useState("assessment");

  return (
    <div className="flex h-screen">
      <Sidebar selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu} />
      <div className="flex-grow">
        {selectedMenu === "assessment" && <AssessmentSchedule />}
        {selectedMenu === "upload" && <UploadResult />}
      </div>
    </div>
  );
};

export default Dashboard;
