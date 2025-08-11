import React from "react";
import { useNavigate } from "react-router-dom";
import { Eye, Home, LogOut } from "lucide-react";

const DashboardContent = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear any stored authentication data (if using localStorage, sessionStorage, etc.)
    localStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("isLoggedIn");

    // Navigate to home page
    navigate("/");
  };

  return (
    <>
      {/* Main content header */}
      <div className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-lg text-zinc-400 font-medium tracking-wide">
            DASHBOARD
          </h1>
          <p className="text-3xl font-semibold mt-2">
            Good Afternoon, Lens of Damiano
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-zinc-800"
            title="Go to Home"
          >
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </button>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 text-zinc-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-zinc-800"
            title="Logout"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm">Logout</span>
          </button>
        </div>
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Inbox</h2>
          <button
            onClick={() => navigate("/dashboard/inbox")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">See more</span>
          </button>
        </div>
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
              {[1, 2, 3].map((i) => (
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Invoices</h2>
          <button
            onClick={() => navigate("/dashboard/invoice")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">See more</span>
          </button>
        </div>
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
              {[1, 2, 3].map((i) => (
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
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Recent Contracts</h2>
          <button
            onClick={() => navigate("/dashboard/contract")}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
          >
            <Eye className="w-4 h-4" />
            <span className="text-sm">See more</span>
          </button>
        </div>
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
              {[1, 2, 3].map((i) => (
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
