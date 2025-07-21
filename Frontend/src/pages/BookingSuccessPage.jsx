import React from "react";
import Header from "../components/Header"; // Assuming you have a Header component
import Footer from "../components/Footer"; // Assuming you have a Footer component
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const BookingSuccessPage = () => {
  const navigate = useNavigate();

  const handleContinueToHomePage = () => {
    navigate("/"); // Navigate to the home page
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#262627] text-white font-sans">
      {/* <Header /> Your existing Header component */}
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Your session has been successfully Booked
          </h2>

          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-10 bg-[#1a1a1a] rounded-full flex items-center justify-center shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-20 h-20 md:w-24 md:h-24 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>

          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            An Invoice will be forwarded to your email.
            <br />
            Thank You
          </p>

          <button
            onClick={handleContinueToHomePage}
            className="w-[300px] md:w-[400px] bg-[#1a1a1a] text-white font-semibold py-3 px-8 rounded-[30px] transition-colors hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            CONTINUE TO HOME PAGE
          </button>
        </div>
      </main>
      {/* <Footer /> Your existing Footer component */}
    </div>
  );
};

export default BookingSuccessPage;
