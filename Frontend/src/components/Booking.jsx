import React from "react";
import { Link } from "react-router-dom";

const Booking = () => {
  return (
    <section className="px-8 py-12 bg-[#262627]">
      <div className="max-w-7xl mx-auto">
        <div className="p-8">
          <Link to="/booking-page">
            <button className="w-[300px] h-[100px] bg-[#F0EBE0] rounded-[18px]  hover:opacity-90 text-black font-medium rounded-md transition-colors underline">
              Book A Session With Us Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Booking;
