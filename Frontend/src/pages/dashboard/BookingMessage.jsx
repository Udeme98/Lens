import React from "react";
import { useNavigate } from "react-router-dom";

const BookingMessage = () => {
  const navigate = useNavigate();

  // Function to handle navigation back to the inbox
  const handleGoBack = () => {
    navigate("/dashboard/inbox");
  };

  // Dummy data for the booking message, replace with actual data fetching
  const bookingDetails = {
    firstName: "James",
    lastName: "Jones",
    phoneNumber: "415-708-9917",
    emailAddress: "samedri.2@mail.com",
    eventType: "Couples Session",
    duration: "1 hour",
    date: "20/06/2025",
    location: "4315 Merton Street, Ontario, Toronto, Canada",
    amount: "CAD150",
    message: "We're looking forward to the session",
  };

  return (
    <div className="min-h-screen bg-zinc-800 text-white p-6 md:p-10 font-sans -mx-8 -my-8">
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
        <h1 className="text-3xl font-semibold">Booking Message</h1>
      </div>

      {/* Booking Details Section */}
      <div className="bg-zinc-800 rounded-xl p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-[200px]">
        {/* First Name */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            First Name
          </p>
          <p className="text-white text-lg">{bookingDetails.firstName}</p>
        </div>
        {/* Last Name */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Last Name
          </p>
          <p className="text-white text-lg">{bookingDetails.lastName}</p>
        </div>
        {/* Phone Number */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Phone Number
          </p>
          <p className="text-white text-lg">{bookingDetails.phoneNumber}</p>
        </div>
        {/* Email Address */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Email Address
          </p>
          <p className="text-white text-lg">{bookingDetails.emailAddress}</p>
        </div>
        {/* Event Type */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Event Type
          </p>
          <p className="text-white text-lg">{bookingDetails.eventType}</p>
        </div>
        {/* Duration */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Duration
          </p>
          <p className="text-white text-lg">{bookingDetails.duration}</p>
        </div>
        {/* Date */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Date
          </p>
          <p className="text-white text-lg">{bookingDetails.date}</p>
        </div>
        {/* Location */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Location
          </p>
          <p className="text-white text-lg">{bookingDetails.location}</p>
        </div>
        {/* Amount */}
        <div>
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Amount
          </p>
          <p className="text-white text-lg">{bookingDetails.amount}</p>
        </div>
        {/* Message */}
        <div className="md:col-span-3">
          {" "}
          {/* Span across all columns */}
          <p className="text-zinc-400 text-sm uppercase font-semibold mb-1">
            Message
          </p>
          <p className="text-white text-lg">{bookingDetails.message}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col md:flex-row justify-center gap-6">
        <button className="bg-zinc-900 text-white px-8 py-3 rounded-xl flex items-center justify-center shadow-md hover:bg-zinc-800 transition-colors">
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M9 21h4.5M12 4.5V9m-3 9h7.5"
            />
          </svg>
          SEND AN INVOICE
        </button>
        <button className="bg-zinc-900 text-white px-8 py-3 rounded-xl flex items-center justify-center shadow-md hover:bg-zinc-800 transition-colors">
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
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M9 21h4.5M12 4.5V9m-3 9h7.5"
            />
          </svg>
          SEND A CONTRACT
        </button>
      </div>
    </div>
  );
};

export default BookingMessage;
