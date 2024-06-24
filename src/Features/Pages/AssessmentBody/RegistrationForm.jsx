import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


const RegistrationForm = () => {
  
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    agencyName: "",
    officeAddress: "",
    communicationAddress: "",
    password: "",
    confirmPassword: "",
    applicationStatus: "Pending",
    phoneNumber: "",
    email: "",
    websiteLink: "",
    headOfTheOrganization: "",
    SPOC_NAME: "",
    SPOC_EMAIL: "",
    SPOC_CONTACT_NO: "",
    legalStatusOfTheOrganization: "",
    COMPANY_PAN_NO: "",
    COMPANY_GST_NO: "",
    NO_OF_BRANCHES: "",
    BRANCH_ADDRESS: "",
    geographical_region: "",
    state_Under_geographicalRegion: "",
    total_no_of_certified_Assessor: "",
    LETTER_OF_NCVET: null,
    subject: "", // Added
    availability: true, // Added
    role: "AssesmentAgency", // Added
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("Form Data : ", formData)
    try {
      const response = await axios.post("http://localhost:8000/api/v1/aa/create",formData);
      console.log(response.data)
      navigate("/login")
    } catch (error) {
      console.log(error)
    }
  };

  const connectToCourse = async () =>{
      
  }

  connectToCourse()

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="agencyName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assessment Agency Name
                </label>
                <input
                  id="agencyName"
                  name="agencyName"
                  placeholder="Enter agency name"
                  value={formData.agencyName}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phoneNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="Enter phone number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="websiteLink"
                className="block text-sm font-medium text-gray-700"
              >
                Website URL
              </label>
              <input
                id="websiteLink"
                name="websiteLink"
                placeholder="Enter website URL"
                value={formData.websiteLink}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter strong password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#A41034]">
                Registered Office Address
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="officeAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Office Address
                  </label>
                  <input
                    id="officeAddress"
                    name="officeAddress"
                    placeholder="Enter office address"
                    value={formData.officeAddress}
                    onChange={handleChange}
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-[#A41034]">
                Communication Address
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="communicationAddress"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Communication Address
                  </label>
                  <input
                    id="communicationAddress"
                    name="communicationAddress"
                    placeholder="Enter communication address"
                    value={formData.communicationAddress}
                    onChange={handleChange}
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Head of the Organization
              </label>
              <input
                type="text"
                name="headOfTheOrganization"
                value={formData.headOfTheOrganization}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SPOC Name
              </label>
              <input
                type="text"
                name="SPOC_NAME"
                value={formData.SPOC_NAME}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SPOC Email ID
              </label>
              <input
                type="email"
                name="SPOC_EMAIL"
                value={formData.SPOC_EMAIL}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                SPOC Contact No
              </label>
              <input
                type="text"
                name="SPOC_CONTACT_NO"
                value={formData.SPOC_CONTACT_NO}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Legal Status of the Organization
              </label>
              <input
                type="text"
                name="legalStatusOfTheOrganization"
                value={formData.legalStatusOfTheOrganization}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company PAN No
              </label>
              <input
                type="text"
                name="COMPANY_PAN_NO"
                value={formData.COMPANY_PAN_NO}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Company GST No
              </label>
              <input
                type="text"
                name="COMPANY_GST_NO"
                value={formData.COMPANY_GST_NO}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Availability
              </label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option value={true}>True</option>
                <option value={false}>False</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                No of Branches
              </label>
              <input
                type="text" // Updated to match the MongoDB schema
                name="NO_OF_BRANCHES"
                value={formData.NO_OF_BRANCHES}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Branch Address
              </label>
              <input
                type="text"
                name="BRANCH_ADDRESS"
                value={formData.BRANCH_ADDRESS}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Geographical Region
              </label>
              <input
                type="text"
                name="geographical_region"
                value={formData.geographical_region}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                State Under Geographical Region
              </label>
              <input
                type="text"
                name="state_Under_geographicalRegion"
                value={formData.state_Under_geographicalRegion}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Total No of Certified Assessor
              </label>
              <input
                type="text" // Updated to match the MongoDB schema
                name="total_no_of_certified_Assessor"
                value={formData.total_no_of_certified_Assessor}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Letter of NCVET
              </label>
              <input
                type="file"
                name="LETTER_OF_NCVET"
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-gray-100 p-8 rounded-lg shadow-md">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Register as Assessment Agency
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {renderPage()}
          <div className="flex justify-between">
            {page > 0 && (
              <button
                type="button"
                onClick={() => setPage(page - 1)}
                className="w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A41034] hover:bg-[#FF5C59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A41034]"
              >
                Previous
              </button>
            )}
            {page < 2 && (
              <button
                type="button"
                onClick={() => setPage(page + 1)}
                className="w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A41034] hover:bg-[#FF5C59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A41034]"
              >
                Next
              </button>
            )}
            {page === 2 && (
              <button
                type="submit"
                className="w-32 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#A41034] hover:bg-[#FF5C59] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#A41034]"
              >
                Submit
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;
