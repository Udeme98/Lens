import React from "react";
import { Home, Inbox, FileText, FileSignature } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const navItems = [
    { name: "Home", icon: Home, path: "/dashboard" },
    { name: "Inbox", icon: Inbox, path: "/dashboard/inbox" },
    { name: "Invoice", icon: FileText, path: "/dashboard/invoice" }, // Base path for Invoice
    { name: "Contract", icon: FileSignature, path: "/dashboard/contract" },
  ];

  return (
    <aside className="w-64 bg-zinc-900 h-screen p-6 border-r border-zinc-700 flex flex-col fixed left-0 top-0">
      {/* Logo Section */}
      <div className="flex items-center space-x-3 mb-8">
        {/* <span className="text-2xl font-serif text-gray-200">
          Lens of Damiano
        </span> */}
        {/* Assuming /images/dashboard.png is correctly served */}
        <img src="/images/dashboard.png" alt="Dashboard Logo" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item) => {
            // Determine if the item should be highlighted
            const isActive =
              item.path === "/dashboard/invoice"
                ? location.pathname.startsWith(item.path) // For Invoice, check if path starts with /dashboard/invoice
                : location.pathname === item.path; // For others, exact match

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`w-full text-left flex items-center gap-4 p-3 rounded-lg transition-colors duration-200 ${
                    isActive
                      ? "bg-zinc-800 text-white"
                      : "text-zinc-400 hover:bg-zinc-800 hover:text-white"
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="text-lg">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNav;
