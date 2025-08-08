import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const InvoiceFormPage = () => {
  const navigate = useNavigate();

  // State to manage form data
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    eventType: "",
    amount: "",
    duration: "",
    date: "",
    location: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // You can add logic here to send data to an API or process it
    // For now, let's navigate back to the invoice list after submission
    navigate("/dashboard/invoice");
  };

  // Function to handle navigation back to the invoice list
  const handleGoBack = () => {
    navigate("/dashboard/invoice");
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-6 md:p-10 font-sans -m-9">
      {/* Header */}
      <div className="mb-8 flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 text-white mr-4 cursor-pointer"
          onClick={handleGoBack}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
        <div>
          <h1 className="text-3xl font-semibold">Invoice form</h1>
          <p className="text-zinc-400 mt-1">
            Please enter invoice information below
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md max-w-5xl mx-auto">
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white"
              placeholder="Please enter your email"
              required
            />
          </div>

          {/* Full Name Field */}
          <div className="mb-6">
            <label
              htmlFor="fullName"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white"
              placeholder="Please enter full name"
              required
            />
          </div>

          {/* Event Type Field (Dropdown) */}
          <div className="mb-6">
            <label
              htmlFor="eventType"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Event Type
            </label>
            <div className="relative">
              <select
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg appearance-none focus:outline-none focus:border-zinc-500 text-white pr-10"
                required
              >
                <option value="">Select</option>
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="Corporate">Corporate</option>
                <option value="Other">Other</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Amount Field */}
          <div className="mb-6">
            <label
              htmlFor="amount"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Amount
            </label>
            <input
              type="number"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white"
              placeholder="Please, enter an amount"
              required
            />
          </div>

          {/* Duration Field */}
          <div className="mb-6">
            <label
              htmlFor="duration"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Duration
            </label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white"
              placeholder="Please, enter time duration"
              required
            />
          </div>

          {/* Date Field */}
          <div className="mb-6">
            <label
              htmlFor="date"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Date
            </label>

            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white"
              required
            />
          </div>

          {/* Location Field */}
          <div className="mb-8">
            <label
              htmlFor="location"
              className="block text-zinc-400 text-sm font-semibold mb-2 uppercase tracking-wide"
            >
              Location
            </label>
            <div className="relative">
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg focus:outline-none focus:border-zinc-500 text-white pr-10"
                placeholder="Please, enter the location"
                required
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-zinc-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-zinc-700 text-white px-8 py-3 rounded-xl font-semibold hover:bg-zinc-600 transition-colors w-full md:w-auto"
            >
              GENERATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InvoiceFormPage;
