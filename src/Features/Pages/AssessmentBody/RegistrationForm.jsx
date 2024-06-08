import React, { useState } from "react";

const RegistrationForm = () => {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    agencyName: "",
    registeredAddress: "",
    communicationAddress: "",
    phone: "",
    email: "",
    website: "",
    head: "",
    spocName: "",
    spocEmail: "",
    spocPhone: "",
    legalStatus: "",
    pan: "",
    gst: "",
    branches: "",
    regions: "",
    states: "",
    totalAssessors: "",
    sectorCount: "",
    sectorNames: "",
    recognitionLetter: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  const renderPage = () => {
    switch (page) {
      case 0:
        return (
          <div className="grid gap-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label
                  htmlFor="agency-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Assessment Agency Name
                </label>
                <input
                  id="agency-name"
                  placeholder="Enter agency name"
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number
                </label>
                <input
                  id="phone"
                  placeholder="Enter phone number"
                  className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                htmlFor="website"
                className="block text-sm font-medium text-gray-700"
              >
                Website URL
              </label>
              <input
                id="website"
                placeholder="Enter website URL"
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
                type="email"
                placeholder="Enter email address"
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">
                Registered Office Address
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="reg-street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    id="reg-street"
                    placeholder="Enter street address"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="reg-city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="reg-city"
                    placeholder="Enter city"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="reg-state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    id="reg-state"
                    placeholder="Enter state"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="reg-zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <input
                    id="reg-zip"
                    placeholder="Enter zip code"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="reg-country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    id="reg-country"
                    placeholder="Enter country"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium text-gray-700">
                Communication Address
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="comm-street"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Street
                  </label>
                  <input
                    id="comm-street"
                    placeholder="Enter street address"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="comm-city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    City
                  </label>
                  <input
                    id="comm-city"
                    placeholder="Enter city"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="comm-state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    State
                  </label>
                  <input
                    id="comm-state"
                    placeholder="Enter state"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="comm-zip"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Zip Code
                  </label>
                  <input
                    id="comm-zip"
                    placeholder="Enter zip code"
                    className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="comm-country"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Country
                  </label>
                  <input
                    id="comm-country"
                    placeholder="Enter country"
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
              <label className="block text-sm font-medium text-[#A41034]">
                Head of the Organization
              </label>
              <input
                type="text"
                name="head"
                value={formData.head}
                onChange={handleChange}
                className="mt-1 block w-full h-8 p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                SPOC Name
              </label>
              <input
                type="text"
                name="spocName"
                value={formData.spocName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                SPOC Email ID
              </label>
              <input
                type="email"
                name="spocEmail"
                value={formData.spocEmail}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                SPOC Contact No
              </label>
              <input
                type="text"
                name="spocPhone"
                value={formData.spocPhone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                Legal Status of the Organization
              </label>
              <input
                type="text"
                name="legalStatus"
                value={formData.legalStatus}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                PAN of the Company
              </label>
              <input
                type="text"
                name="pan"
                value={formData.pan}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                GST No of Company
              </label>
              <input
                type="text"
                name="gst"
                value={formData.gst}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                No of Branches/Office and Location
              </label>
              <input
                type="text"
                name="branches"
                value={formData.branches}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                Geographical Regions
              </label>
              <input
                type="text"
                name="regions"
                value={formData.regions}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                State Under the Region
              </label>
              <input
                type="text"
                name="states"
                value={formData.states}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                Total No of Certified Assessor
              </label>
              <input
                type="text"
                name="totalAssessors"
                value={formData.totalAssessors}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                No of Sector Skill Council AA is Affiliated
              </label>
              <input
                type="text"
                name="sectorCount"
                value={formData.sectorCount}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                Name of the Sector Skill Council AA is Affiliated
              </label>
              <input
                type="text"
                name="sectorNames"
                value={formData.sectorNames}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#A41034]">
                Upload Recognition Letter Received from NCVET
              </label>
              <input
                type="file"
                name="recognitionLetter"
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-[#ffc107] p-8 rounded-lg shadow-md w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold text-center text-gray-700">
          Registration Form
        </h2>
        {renderPage()}
        <div className="flex justify-between">
          {page > 0 && (
            <button
              type="button"
              onClick={() => setPage(page - 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Previous
            </button>
          )}
          {page < 2 ? (
            <button
              type="button"
              onClick={() => setPage(page + 1)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ml-auto"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 ml-auto"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
