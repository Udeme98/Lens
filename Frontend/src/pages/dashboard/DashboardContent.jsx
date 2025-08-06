import React from "react";

const DashboardContent = () => {
  return (
    <>
      {/* Main content header */}
      <div className="mb-8">
        <h1 className="text-lg text-zinc-400 font-medium tracking-wide">
          DASHBOARD
        </h1>
        <p className="text-3xl font-semibold mt-2">
          Good Afternoon, Lens of Damiano
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-start shadow-md">
          <span className="text-zinc-400 text-sm uppercase font-semibold">
            Total Inbox
          </span>
          <span className="text-4xl font-bold mt-2">25</span>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-start shadow-md">
          <span className="text-zinc-400 text-sm uppercase font-semibold">
            Total Invoices
          </span>
          <span className="text-4xl font-bold mt-2">25</span>
        </div>
        <div className="bg-zinc-900 rounded-xl p-6 flex flex-col items-start shadow-md">
          <span className="text-zinc-400 text-sm uppercase font-semibold">
            Total Contracts
          </span>
          <span className="text-4xl font-bold mt-2">25</span>
        </div>
      </div>

      {/* Recent Inbox Table */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Inbox</h2>
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
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 last:border-b-0"
                >
                  <td className="px-4 py-3 text-white">samedri.2@mail.com</td>
                  <td className="px-4 py-3 text-white">CAD120</td>
                  <td className="px-4 py-3 text-white">Wedding</td>
                  <td className="px-4 py-3 text-white">20/06/2025</td>
                  <td className="px-4 py-3 text-white">20/06/2025</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 last:border-b-0"
                >
                  <td className="px-4 py-3 text-white">Inv #{`0002${i}`}</td>
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

      {/* Recent Contracts Table */}
      <div className="bg-zinc-900 rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Recent Contracts</h2>
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
              {[1, 2, 3, 4].map((i) => (
                <tr
                  key={i}
                  className="border-b border-zinc-800 last:border-b-0"
                >
                  <td className="px-4 py-3 text-white">Inv #{`0002${i}`}</td>
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

export default DashboardContent;
