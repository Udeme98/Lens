import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Gallery = () => {
  // Static image set (Weddings)
  const galleryImages = [
    {
      id: 1,
      src: "/images/top.png",
      alt: "Wedding couple outdoor portrait",
    },
    {
      id: 2,
      src: "/images/glass.png",
      alt: "Wedding reception toast",
    },
    {
      id: 3,
      src: "/images/cake.png",
      alt: "Wedding hands detail",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="px-6 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Category Navigation - static */}
          <div className="flex justify-center mb-10 space-x-6">
            <span className="bg-[#f5f0e6] px-4 py-1 rounded-full text-sm font-medium">
              Weddings
            </span>
            <span className="text-gray-500">Birthdays</span>
            <span className="text-gray-500">Portraits</span>
            <span className="text-gray-500">Outdoor Events</span>
          </div>

          {/* Hero Image */}
          <div className="mb-10">
            <img
              src={galleryImages[0].src}
              alt={galleryImages[0].alt}
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Flexbox Row for Two Smaller Images */}
          <div className="flex flex-wrap md:flex-nowrap gap-8 mb-10">
            {galleryImages.slice(1, 3).map((image) => (
              <div key={image.id} className="w-full md:w-1/2">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover rounded-xl shadow-md"
                />
              </div>
            ))}
          </div>

          {/* Full Width Image (same as third image for now) */}
          <div className="mb-14">
            <img
              src={galleryImages[2].src}
              alt={galleryImages[2].alt}
              className="w-full h-96 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Book Session Button */}
          <div className="flex justify-center">
            <button className="bg-[#f5f0e6] hover:bg-[#eae3d7] text-black font-medium py-3 px-6 rounded-md transition-colors underline text-sm">
              Book A Session With Us Now
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
