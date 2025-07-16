import React from "react";

const Gallery = () => {
  return (
    <section className="px-8 py-12 bg-[#262627]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="relative">
            <img
              src="images/glass.png"
              alt="Wedding reception with champagne toast"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="relative">
            <img
              src="images/cake.png"
              alt="Birthday celebration with candles"
              className="w-full h-80 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
