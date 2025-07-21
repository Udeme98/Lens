import React from "react";

const Hero = () => {
  return (
    <section className="px-8 py-12 bg-[#262627]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-[35%] space-y-8">
          <div>
            <h1 className="text-4xl lg:text-5xl font-bold text-white leading-tight font-eras">
              We bring Your Events to life with our stunning visuals
            </h1>
          </div>
          <div>
            <h2 className="text-xl font-semibold text-white mb-4">We Cover</h2>
            <ul className="space-y-2 text-lg text-white">
              <li>• Weddings</li>
              <li>• Birthdays</li>
              <li>• Portraits</li>
              <li>• Outdoor Events</li>
            </ul>
          </div>
        </div>

        <div className="w-full lg:w-[65%] relative">
          <img
            src="/images/top.png"
            alt="Wedding couple in scenic landscape"
            className="w-full h-96 lg:h-[500px] object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
