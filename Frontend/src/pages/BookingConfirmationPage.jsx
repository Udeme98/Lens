import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom"; // Import useLocation and useNavigate

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { formData, serviceDetails } = location.state || {}; // Get state passed from previous page

  // Redirect if no data is present (e.g., direct access to this URL)
  if (!formData || !serviceDetails) {
    navigate("/"); // Or to a services page
    return null;
  }

  // Helper to format date for display
  const getFormattedDateForDisplay = (date) => {
    if (!date) return "N/A";
    const d = new Date(date); // Ensure it's a Date object
    return d.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const handleConfirmBooking = () => {
    // Here you would typically send the booking data to your backend
    console.log("Booking Confirmed:", { formData, serviceDetails });
    alert("Your booking has been confirmed!");
    // After successful confirmation, you might navigate to a success page or the home page
    navigate("/booking-success");
  };

  return (
    <div className="min-h-screen bg-[#262627] text-white font-sans">
      {/* <Header /> */}

      <main className="px-8 py-12">
        <div className="mb-4">
          <button
            onClick={() => window.history.back()}
            className="text-gray-300 hover:text-white transition-colors flex items-center gap-2"
          >
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
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            <span className="text-sm">Back to Booking Form</span>
          </button>
        </div>
        <div className="max-w-4xl mx-auto bg-[#262627] rounded-lg shadow-xl overflow-hidden">
          {/* Confirmation Header */}
          <div className="p-6 border-b border-gray-700">
            <h2 className="text-3xl font-bold mb-2">Confirm Your Booking</h2>
            <p className="text-gray-300">
              Please review your details before confirming.
            </p>
          </div>

          {/* Service Summary */}
          <div className="p-6 border-b border-gray-700 bg-[#202021]">
            <h3 className="text-xl font-semibold mb-4">Service Details</h3>
            <div className="flex items-center gap-4 mb-3">
              <img
                src={serviceDetails.imageSrc}
                alt={serviceDetails.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div>
                <p className="text-lg font-semibold">{serviceDetails.title}</p>
                <p className="text-gray-400 text-sm">
                  {serviceDetails.description}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
              <p>
                <span className="font-medium">Duration:</span>{" "}
                {serviceDetails.duration}
              </p>
              <p>
                <span className="font-medium">Price:</span>{" "}
                {serviceDetails.price}
              </p>
              <p>
                <span className="font-medium">Selected Date:</span>{" "}
                {getFormattedDateForDisplay(formData.selectedDate)}
              </p>
              <p>
                <span className="font-medium">Selected Time:</span>{" "}
                {formData.selectedTime}
              </p>
              <p>
                <span className="font-medium">Location:</span> Any place of
                choice{" "}
                {/* This was from the review page, assuming it's static */}
              </p>
            </div>
          </div>

          {/* Personal Information Summary */}
          <div className="p-6 bg-[#202021]">
            <h3 className="text-xl font-semibold mb-4">Your Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300 text-sm">
              <p>
                <span className="font-medium">Name:</span> {formData.firstName}{" "}
                {formData.lastName}
              </p>
              <p>
                <span className="font-medium">Phone:</span> {formData.phone}
              </p>
              <p>
                <span className="font-medium">Email:</span> {formData.email}
              </p>
              <p className="col-span-1 md:col-span-2">
                <span className="font-medium">Message:</span>{" "}
                {formData.message || "N/A"}
              </p>
            </div>
          </div>

          {/* Total and Confirm Button */}
          <div className="p-6 flex flex-col items-center gap-4 bg-[#262627]">
            <div className="w-full max-w-xs flex justify-between items-center text-lg font-bold">
              <span>Total:</span>
              <span>CA$150.00</span>{" "}
              {/* Assuming fixed price for this example, or parse from serviceDetails.price */}
            </div>
            <button
              onClick={handleConfirmBooking}
              className="w-[400px] bg-[#1a1a1a] text-black font-semibold py-[8px] px-8 rounded-[30px] transition-colors text-white"
            >
              CONFIRM BOOKING
            </button>
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default BookingConfirmationPage;
