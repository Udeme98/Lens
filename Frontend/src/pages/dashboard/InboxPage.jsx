import React from "react";
import { useNavigate } from "react-router-dom";

const InboxPage = () => {
  const navigate = useNavigate();

  // Function to handle navigation back to the dashboard
  const handleGoBack = () => {
    navigate("/dashboard");
  };

  const handleBookingClick = () => {
    navigate("/dashboard/booking-message");
  };

  return (
    <>
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
        <h1 className="text-3xl font-semibold">Inbox</h1>
      </div>

      {/* Bookings Table */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Bookings</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Email
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Amount
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Type
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Duration
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Event Date
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data based on the image */}
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 last:border-b-0 cursor-pointer"
                  onClick={handleBookingClick}
                >
                  <td className="px-4 py-3 text-white">samedri.2@mail.com</td>
                  <td className="px-4 py-3 text-white">CAD120</td>
                  <td className="px-4 py-3 text-white">Wedding</td>
                  <td className="px-4 py-3 text-white">
                    {i % 2 === 0 ? "1hr 30min" : "1hr"}
                  </td>
                  <td className="px-4 py-3 text-white">20/06/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Contact Us Table */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Name
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Phone Number
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Email
                </th>
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Message
                </th>
              </tr>
            </thead>
            <tbody>
              {/* Sample data based on the image */}
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 last:border-b-0"
                >
                  <td className="px-4 py-3 text-white">James Sandri</td>
                  <td className="px-4 py-3 text-white">982 09764 08873</td>
                  <td className="px-4 py-3 text-white">samedri.2@mail.com</td>
                  <td className="px-4 py-3 text-white">
                    I would love to speak to you...
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InboxPage;
