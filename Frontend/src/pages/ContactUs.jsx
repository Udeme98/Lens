import Header from "../components/Header";
import Footer from "../components/Footer";

import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    proposedDate: "",
    budget: "",
    hearAbout: "",
    eventType: [],
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const updatedEventTypes = checked
          ? [...prev.eventType, value]
          : prev.eventType.filter((event) => event !== value);

        return { ...prev, eventType: updatedEventTypes };
      });
    } else if (type === "radio") {
      setFormData((prev) => ({ ...prev, [name]: value }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // You can also reset form here if needed:
    setFormData({
      name: "",
      phone: "",
      email: "",
      location: "",
      proposedDate: "",
      budget: "",
      hearAbout: "",
      eventType: [],
      message: "",
    });
  };

  const canadaCities = [
    "Toronto",
    "Vancouver",
    "Montreal",
    "Calgary",
    "Ottawa",
    "Edmonton",
    "Quebec City",
    "Winnipeg",
    "Hamilton",
    "Victoria",
    "Halifax",
    "Regina",
    "Saskatoon",
    "St. John's",
    "Windsor",
    "Mississauga",
    "Brampton",
    "Surrey",
    "Guelph",
    "Kelowna",
  ];

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
              {/* <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">Book Your</h2>
                  <h2 className="text-3xl font-bold">Experience With Us!</h2>
                </div>
              </div> */}
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
                        src="/images/facebook.png"
                        alt="facebook"
                        className="w-5 h-5"
                      />
                      <p className="italic">lensbydamin</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src="/images/twitter.png"
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
                        src="/images/instagram.png"
                        alt="instagram"
                        className="w-4 h-4"
                      />
                      <p className="italic">lens_by_d</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <img
                        src="/images/pinterest.png"
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
                  LOCATION
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#262627]"
                >
                  <option value="">Where will the event take place?</option>
                  <option value="local">Local</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  PROPOSED DATE(S)*
                </label>
                <input
                  type="date"
                  name="proposedDate"
                  value={formData.proposedDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md bg-[#262627]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  DO YOU HAVE AN APPROX. BUDGET?
                </label>
                <textarea
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Kindly include your budget"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none bg-[#262627]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  How did you hear about us?
                </label>
                <div className="flex flex-wrap gap-6">
                  {["instagram", "referral", "others"].map((source) => (
                    <label key={source} className="flex items-center">
                      <input
                        type="radio"
                        name="hearAbout"
                        value={source}
                        checked={formData.hearAbout === source}
                        onChange={handleChange}
                        className="mr-2 bg-[#262627]"
                      />
                      {source.charAt(0).toUpperCase() + source.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Event session
                </label>
                <div className="flex flex-wrap gap-4">
                  {["weddings", "portraits", "birthdays", "outdoor-events"].map(
                    (event) => (
                      <label key={event} className="flex items-center w-1/2">
                        <input
                          type="checkbox"
                          name="eventType"
                          value={event}
                          checked={formData.eventType.includes(event)}
                          onChange={handleChange}
                          className="mr-2 bg-[#262627]"
                        />
                        {event
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </label>
                    )
                  )}
                </div>
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
