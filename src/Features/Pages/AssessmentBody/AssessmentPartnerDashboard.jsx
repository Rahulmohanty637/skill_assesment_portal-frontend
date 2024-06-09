// AssessmentPartnerDashboard.js
import React from 'react';

const assessments = [
  {
    id: 1,
    institute: 'Institute A',
    course: 'Course 101',
    project: 'Project Alpha',
    numberOfStudents: 30,
    status: 'Scheduled'
  },
  {
    id: 2,
    institute: 'Institute B',
    course: 'Course 202',
    project: 'Project Beta',
    numberOfStudents: 25,
    status: 'In Progress'
  },
  {
    id: 3,
    institute: 'Institute C',
    course: 'Course 303',
    project: 'Project Gamma',
    numberOfStudents: 40,
    status: 'Completed'
  }
];

const AssessmentPartnerDashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">AssessmentPartner Dashboard</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b-2 border-gray-300">Training Institute</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Course</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Project</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Number of Students</th>
              <th className="py-2 px-4 border-b-2 border-gray-300">Status</th>
            </tr>
          </thead>
          <tbody>
            {assessments.map(assessment => (
              <tr key={assessment.id}>
                <td className="py-2 px-4 border-b border-gray-200">{assessment.institute}</td>
                <td className="py-2 px-4 border-b border-gray-200">{assessment.course}</td>
                <td className="py-2 px-4 border-b border-gray-200">{assessment.project}</td>
                <td className="py-2 px-4 border-b border-gray-200">{assessment.numberOfStudents}</td>
                <td className={`py-2 px-4 border-b border-gray-200 ${
                  assessment.status === 'Scheduled' ? 'text-blue-500' :
                  assessment.status === 'In Progress' ? 'text-yellow-500' :
                  'text-green-500'
                }`}>
                  {assessment.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssessmentPartnerDashboard;
