import React from "react";
import { useNavigate } from "react-router-dom";

const InvoicePage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/dashboard");
  };

  return (
    <>
      {/* Main content header */}
      <div className="mb-8 flex items-center">
        {/* Back arrow icon */}
        {/* Using a simple SVG for the back arrow */}
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
        <h1 className="text-3xl font-semibold">Invoice</h1>
      </div>

      {/* New Invoice Button */}
      <div className="mb-8">
        <button
          onClick={() => navigate("/dashboard/invoice-form")}
          className="bg-zinc-900 text-white px-6 py-3 rounded-xl flex items-center shadow-md hover:bg-zinc-800 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          New Invoice
        </button>
      </div>

      {/* Recent Invoices Table */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="px-4 py-3 text-zinc-400 text-sm font-normal">
                  Invoice Number
                </th>
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
                  Event Date
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
                  <td className="px-4 py-3 text-white">Inv #{`00021`}</td>
                  <td className="px-4 py-3 text-white">samedri.2@mail.com</td>
                  <td className="px-4 py-3 text-white">CAD120</td>
                  <td className="px-4 py-3 text-white">Wedding</td>
                  <td className="px-4 py-3 text-white">20/06/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default InvoicePage;
