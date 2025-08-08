// src/pages/Dashboard.jsx
import React, { useState } from "react";
import SideNav from "../components/SideNav";

const Dashboard = () => {
  const [activePage, setActivePage] = useState("Home");

  return (
    <div className="flex bg-zinc-950 font-sans">
      <SideNav active={activePage} setActive={setActivePage} />

      {/* Content Area */}
      <div className="flex-1 p-8 text-gray-200">
        {activePage === "Home" && (
          <>
            <h1 className="text-3xl font-semibold mb-4">Dashboard Home</h1>
            <p>Welcome to your dashboard, Lens of Damiano.</p>
          </>
        )}

        {activePage === "Inbox" && (
          <>
            <h1 className="text-3xl font-semibold mb-4">Inbox Page</h1>
            <p>This is the content for the Inbox page.</p>
          </>
        )}

        {activePage === "Invoice" && (
          <>
            <h1 className="text-3xl font-semibold mb-4">Invoice Page</h1>
            <p>This is the content for the Invoice page.</p>
          </>
        )}

        {activePage === "Contract" && (
          <>
            <h1 className="text-3xl font-semibold mb-4">Contract Page</h1>
            <p>This is the content for the Contract page.</p>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
