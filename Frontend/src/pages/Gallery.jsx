import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Gallery = () => {
  // Static image set
  const galleryImages = [
    {
      id: 1,
      src: "/images/toop.png", // Replace with the path to the image of the person in the white hat
      alt: "Person in a white hat",
    },
    {
      id: 2,
      src: "/images/dr.png", // Replace with the path to the image of the woman in the green dress
      alt: "Woman in a green and gold dress",
    },
    {
      id: 3,
      src: "/images/gr.png", // Replace with the path to the image of the man with the black cloth
      alt: "Muscular man with a black cloth",
    },
    {
      id: 4,
      src: "/images/dl.png", // Replace with the path to the image of the woman in the red dress
      alt: "Woman in a red dress",
    },
    {
      id: 5,
      src: "/images/sit.png", // Replace with the path to the image of the woman with flowers
      alt: "Woman sitting amongst flowers",
    },
    {
      id: 6,
      src: "/images/gls.png", // Replace with the path to the image of the family
      alt: "Family portrait",
    },
    {
      id: 7,
      src: "/images/bot.png", // Replace with the path to the image of the woman in the blue head wrap
      alt: "Woman in a blue head wrap and suit",
    },
  ];

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#262627] text-white font-sans">
        <main className="px-4 md:px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Category Navigation */}
            <div className="flex justify-center items-center mb-10 space-x-6">
              <span className="text-white bg-[#424242] px-4 py-1 rounded-full text-sm font-medium">
                All
              </span>
              <span className="text-[#a5a5a5] text-sm font-medium">
                Weddings
              </span>
              <span className="text-[#a5a5a5] text-sm font-medium">
                Birthdays
              </span>
              <span className="text-[#a5a5a5] text-sm font-medium">
                Portraits
              </span>
              <span className="text-[#a5a5a5] text-sm font-medium">
                Outdoor Events
              </span>
            </div>

            {/* Gallery Layout */}
            <div className="grid grid-cols-1 gap-8">
              {/* First large image */}
              <div className="w-full">
                <img
                  src={galleryImages[0].src}
                  alt={galleryImages[0].alt}
                  className="w-full h-[500px] object-cover object-[0_10%] rounded-md"
                />
              </div>

              {/* Two images in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src={galleryImages[1].src}
                  alt={galleryImages[1].alt}
                  className="w-full h-[500px] object-[0_10%]  object-cover rounded-md"
                />
                <img
                  src={galleryImages[2].src}
                  alt={galleryImages[2].alt}
                  className="w-full h-[500px] object-[0_10%]  object-cover rounded-md"
                />
              </div>

              {/* Another large image */}
              <div className="w-full">
                <img
                  src={galleryImages[3].src}
                  alt={galleryImages[3].alt}
                  className="w-full h-[500px] object-[0_10%] object-cover  rounded-md"
                />
              </div>

              {/* Another two images in a row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <img
                  src={galleryImages[4].src}
                  alt={galleryImages[4].alt}
                  className="w-full h-[500px] object-[0_10%]  object-cover rounded-md"
                />
                <img
                  src={galleryImages[5].src}
                  alt={galleryImages[5].alt}
                  className="w-full h-[500px] object-[0_10%]  object-cover rounded-md"
                />
              </div>

              {/* Last large image */}
              <div className="w-full">
                <img
                  src={galleryImages[6].src}
                  alt={galleryImages[6].alt}
                  className="w-full h-[500px] object-[0_10%]  object-cover rounded-md"
                />
              </div>
            </div>

            {/* "Book a Session" button */}
            <div className="flex justify-center mt-12">
              <Link to="/booking-page">
                <button className="bg-[#e4e4e4] hover:bg-[#c9c9c9] text-black font-medium py-3 px-6 rounded-md transition-colors text-sm">
                  Book A Session With Us Now
                </button>
              </Link>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Gallery;
