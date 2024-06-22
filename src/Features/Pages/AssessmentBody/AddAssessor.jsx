import React, { useState } from 'react';

const AddAssessorForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    educationalQualification1: "",
    educationalQualification2: "",
    educationalQualification3: "",
    educationalQualification4: "",
    industryExperience: "",
    otherExperience: "",
    address: "",
    district: "",
    state: "",
    pincode: "",
    certifiedCourseName: "",
    courseCode: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form data to the backend server or API
    console.log(formData);
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#A41034]">Personal Information</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Name of the Assessor</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={() => setCurrentStep(2)}
              className="bg-[#A41034] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#820a29] transition duration-300 mt-4"
            >
              Next
            </button>
          </div>
        );
      case 2:
        return (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#A41034]">Educational Qualifications</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Educational Qualification 1</label>
              <input
                type="text"
                name="educationalQualification1"
                value={formData.educationalQualification1}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Educational Qualification 2</label>
              <input
                type="text"
                name="educationalQualification2"
                value={formData.educationalQualification2}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Educational Qualification 3</label>
              <input
                type="text"
                name="educationalQualification3"
                value={formData.educationalQualification3}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Educational Qualification 4</label>
              <input
                type="text"
                name="educationalQualification4"
                value={formData.educationalQualification4}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentStep(1)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentStep(3)}
                className="bg-[#A41034] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#820a29] transition duration-300"
              >
                Next
              </button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h2 className="text-2xl font-bold text-center text-[#A41034]">Professional Experience and Address</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">Relevant Industry Experience (Years)</label>
              <input
                type="text"
                name="industryExperience"
                value={formData.industryExperience}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Other Relevant Experience</label>
              <input
                type="text"
                name="otherExperience"
                value={formData.otherExperience}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">District</label>
              <input
                type="text"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Pincode</label>
              <input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Certified Course Name (if any)</label>
              <input
                type="text"
                name="certifiedCourseName"
                value={formData.certifiedCourseName}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Course Code (if any)</label>
              <input
                type="text"
                name="courseCode"
                value={formData.courseCode}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Upload Photo</label>
              <input
                type="file"
                name="photo"
                onChange={handleChange}
                className="mt-1 block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-50 file:text-indigo-700
                hover:file:bg-indigo-100"
              />
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setCurrentStep(2)}
                className="bg-gray-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-600 transition duration-300"
              >
                Previous
              </button>
              <button
                onClick={handleSubmit}
                className="bg-[#A41034] text-white py-2 px-4 rounded-md shadow-md hover:bg-[#820a29] transition duration-300"
              >
                Submit
              </button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {renderFormStep()}
    </div>
  );
};

export default AddAssessorForm;
