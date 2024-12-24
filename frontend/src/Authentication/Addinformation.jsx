import React, { useState } from "react";

const PatientForm = () => {
  const [step, setStep] = useState(1);
  const handleSubmit = () => {
    if (window.confirm("Are you really want to submit?")) {
      window.location.href = "/dashboard";
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-2xl rounded-lg">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Patient Information Form
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {step === 1 && (
          <>
            {/* Step 1: Contact Information */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Contact Information
              </h3>
              <hr className="mb-4 border-gray-300" />
            </div>

            {/* Name */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="number"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="number"
                placeholder="Enter your phone number"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Email */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Gender */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="gender"
              >
                Gender
              </label>
              <select
                id="gender"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <option value="">Select</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Date of Birth */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="dob"
              >
                Date of Birth
              </label>
              <input
                type="date"
                id="dob"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Address */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                placeholder="Enter your address"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Next Button */}
            <div className="col-span-2 text-right">
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                Next ››
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            {/* Step 2: Medical History */}
            <div className="col-span-2">
              <h3 className="text-lg font-semibold text-gray-700 mb-3">
                Medical Information
              </h3>
              <hr className="border-gray-300" />
            </div>

            {/* Medical History */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="medicalHistory"
              >
                Medical History
              </label>
              <textarea
                id="medicalHistory"
                rows="2"
                placeholder="Describe your medical history"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            {/* Blood Group */}
            <div>
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="bloodGroup"
              >
                Blood Group
              </label>
              <select
                id="bloodGroup"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              >
                <option value="">Select</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>
            </div>

            {/* Previous Doctor */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="previousDoctor"
              >
                Previous Doctor (if any)
              </label>
              <input
                type="text"
                id="previousDoctor"
                placeholder="Enter previous doctor's name"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              />
            </div>

            {/* Allergies */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="allergies"
              >
                Allergies
              </label>
              <textarea
                id="allergies"
                rows="1"
                placeholder="List any allergies"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            {/* Medicines */}
            <div className="col-span-2">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="medicines"
              >
                Medicines (if you take)
              </label>
              <textarea
                id="medicines"
                rows="1"
                placeholder="List any medicines you are currently taking"
                className="mt-2 block w-full rounded-lg border border-gray-300 p-3 focus:border-indigo-500 focus:ring-indigo-500 transition duration-150 ease-in-out"
              ></textarea>
            </div>

            {/* Buttons */}
            <div className="col-span-2 flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-md border-2 border-transparent hover:bg-white hover:text-purple-600 hover:border-purple-600 focus:outline-none focus:ring-4 focus:ring-purple-400 focus:ring-offset-2 transition duration-150 ease-in-out"
              >
                ‹‹ Previous
              </button>
              <button
                className="px-8 py-3 bg-green-600 text-white font-bold rounded-lg shadow-md border-2 border-transparent hover:bg-white hover:text-green-600 hover:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-400 focus:ring-offset-2 transition duration-150 ease-in-out"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default PatientForm;
