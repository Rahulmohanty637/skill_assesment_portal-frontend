import React from "react";

const assessments = [
  {
    id: 1,
    institute: "Institute A",
    course: "Course 101",
    project: "Project Alpha",
    numberOfStudents: 30,
    status: "Scheduled",
  },
  {
    id: 2,
    institute: "Institute B",
    course: "Course 202",
    project: "Project Beta",
    numberOfStudents: 25,
    status: "In Progress",
  },
  {
    id: 3,
    institute: "Institute C",
    course: "Course 303",
    project: "Project Gamma",
    numberOfStudents: 40,
    status: "Completed",
  },
];

const ScheduleBox = () => {
  return (
    <div className="p-5  bg-gray-100">
      <h1 className="text-xl mb-2">Scheduled</h1>
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Training Institute
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Course
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Project
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Number of Students
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {assessments.map((assessment) => (
            <tr key={assessment.id}>
              <td className="p-3 text-md text-gray-700">
                {assessment.institute}
              </td>
              <td className="p-3 text-md text-gray-700">{assessment.course}</td>
              <td className="p-3 text-md text-gray-700">
                {assessment.project}
              </td>
              <td className="pl-20 text-md text-gray-700">
                {assessment.numberOfStudents}
              </td>
              <td className="p-3 text-sm">
                <span
                  className={`p-1.5 text-xs font-medium uppercase tracking-wider rounded-lg bg-opacity-50 ${
                    assessment.status === "Scheduled"
                      ? "text-blue-800 bg-blue-200"
                      : assessment.status === "In Progress"
                      ? "text-yellow-800 bg-yellow-200"
                      : "text-green-800 bg-green-200"
                  }`}
                >
                  {assessment.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScheduleBox;
