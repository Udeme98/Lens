import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3011/booking/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        setFormData({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Network error or unexpected issue:", error);
      alert(
        "Failed to connect to the server. Please check your internet connection and try again."
      );
    }
  };

  return (
    <div>
      <Header />
      <main className="px-8 py-12 bg-[#262627]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Left Column */}
          <div className="flex-1 space-y-8">
            {/* Hero Image */}
            <div className="relative">
              <img
                src="/images/camera.png"
                alt="Camera lens - Book Your Experience With Us!"
                className="w-full h-80 object-cover rounded-lg"
              />
            </div>

            {/* Contact Info */}
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-6">Contact</h3>

              <div className="flex  gap-6 mb-8">
                <div className="w-full md:w-1/2">
                  <p className="font-medium mb-2">Email:</p>
                  <p className="italic">Glorydam@mails.com</p>
                </div>
                <div className="w-full md:w-1/2">
                  <p className="font-medium mb-2">Phone:</p>
                  <p>+988 0988 98678</p>
                </div>
              </div>

              {/* Socials */}
              <div>
                <h4 className="text-xl font-bold mb-4">Socials</h4>
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Group 1 */}
                  <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/fb.png"
                        alt="facebook"
                        className="w-5 h-5"
                      />
                      <p className="italic">lensbydamin</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src="/images/x.png"
                        alt="twitter"
                        className="w-4 h-4"
                      />
                      <p className="italic">lens</p>
                    </div>
                  </div>

                  {/* Group 2 */}
                  <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/inta.png"
                        alt="instagram"
                        className="w-4 h-4"
                      />
                      <p className="italic">lens_by_d</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src="/images/pin.png"
                        alt="pinterest"
                        className="w-4 h-4"
                      />
                      <p className="italic">lenzzz</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6 text-white">
              <div>
                <label className="block text-sm font-medium mb-2">NAME*</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#262627]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 812 345 6789"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#262627]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  EMAIL ADDRESS*
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter a valid email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#262627]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Kindly tell us more about your Event"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none bg-[#262627]"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-gray-200 hover:bg-gray-300 text-black font-medium py-4 px-8 rounded-md transition-colors"
                >
                  SEND MESSAGE
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactUs;
