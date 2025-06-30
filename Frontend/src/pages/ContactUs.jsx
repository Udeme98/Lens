import Header from "../components/Header";
import Footer from "../components/Footer";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <main className="px-8 py-12">
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
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <h2 className="text-3xl font-bold mb-2">Book Your</h2>
                  <h2 className="text-3xl font-bold">Experience With Us!</h2>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>

              <div className="flex flex-wrap gap-6 mb-8">
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
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 w-1/2">
                    <span className="text-lg">f</span>
                    <span className="italic">lensbydamin</span>
                  </div>
                  <div className="flex items-center space-x-2 w-1/2">
                    <span className="text-lg">@</span>
                    <span className="italic">lens_by_d</span>
                  </div>
                  <div className="flex items-center space-x-2 w-1/2">
                    <span className="text-lg">X</span>
                    <span className="italic">lens</span>
                  </div>
                  <div className="flex items-center space-x-2 w-1/2">
                    <span className="text-lg">P</span>
                    <span className="italic">lenzzz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex-1">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">NAME*</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Kindly include your country code"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  EMAIL ADDRESS*
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Please, cross check your email address"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  LOCATION
                </label>
                <select
                  name="location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black bg-white"
                >
                  <option value="">Select</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  DO YOU HAVE AN APPROX. BUDGET?
                </label>
                <textarea
                  name="budget"
                  placeholder="Kindly include your budget"
                  rows="3"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  How did you hear about us?
                </label>
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hearAbout"
                      value="instagram"
                      className="mr-2"
                    />
                    Instagram
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hearAbout"
                      value="referral"
                      className="mr-2"
                    />
                    Referral
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hearAbout"
                      value="others"
                      className="mr-2"
                    />
                    Others
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-3">
                  Event session
                </label>
                <div className="flex flex-wrap gap-4">
                  <label className="flex items-center w-1/2">
                    <input
                      type="checkbox"
                      name="eventType"
                      value="weddings"
                      className="mr-2"
                    />
                    Weddings
                  </label>
                  <label className="flex items-center w-1/2">
                    <input
                      type="checkbox"
                      name="eventType"
                      value="portraits"
                      className="mr-2"
                    />
                    Portraits
                  </label>
                  <label className="flex items-center w-1/2">
                    <input
                      type="checkbox"
                      name="eventType"
                      value="birthdays"
                      className="mr-2"
                    />
                    Birthdays
                  </label>
                  <label className="flex items-center w-1/2">
                    <input
                      type="checkbox"
                      name="eventType"
                      value="outdoor-events"
                      className="mr-2"
                    />
                    Outdoor Events
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  placeholder="Kindly share with us more information about your event"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black resize-none"
                  required
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
