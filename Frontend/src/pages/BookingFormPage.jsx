import React, { useState, useEffect, useRef } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer"; // Assuming Footer is the same
import { useParams, useNavigate } from "react-router-dom";
import { Clock } from "lucide-react";

const BookingFormPage = () => {
  // State for the form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    message: "",
    selectedDate: "",
    selectedTime: "",
    location: "",
    budget: "",
    hearAbout: "",
    eventType: [],
  });

  // State for animations
  const [animatedElements, setAnimatedElements] = useState(new Set());
  const formRefs = useRef({});

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elementId = entry.target.dataset.animateId;
            setAnimatedElements((prev) => new Set([...prev, elementId]));
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    // Observe all form elements
    Object.values(formRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Example data for the specific service being booked (you'd pass this via props/route params)
  const allServices = [
    {
      id: "photography-small-events",
      imageSrc: "/images/group.png",
      title: "Photography (Small Events)",
      description: "0-2 hours coverage. Perfect for intimate gatherings.",
      price: "150",
      features: ["Up to 2 hours", "1 Photographer", "Digital gallery"],
    },
    {
      id: "mimi-session",
      imageSrc: "/images/lady.png",
      title: "Mini Session",
      description: "20-30 minutes, 1 outfit. Ideal for quick updates.",
      price: "80",
      features: ["20-30 mins", "1 outfit", "5 edited images"],
    },
    {
      id: "large-group-session",
      imageSrc: "/images/ladies.png",
      title: "Large Group Session",
      description: "2-3 hours coverage. For family reunions or large parties.",
      price: "300",
      features: ["2-3 hours", "1-2 Photographers", "Extensive digital gallery"],
    },
    {
      id: "family-group-session",
      imageSrc: "/images/family.png",
      title: "Family/Group Session",
      description: "1-2 hours coverage. Perfect for family portraits.",
      price: "200",
      features: ["1-2 hours", "1 Photographer", "Digital gallery"],
    },
    {
      id: "crative-shots",
      imageSrc: "/images/red.png",
      title: "Creative Shots",
      description: "Conceptual and artistic photography sessions.",
      price: "Price on Request",
      features: [
        "Custom concepts",
        "Styling assistance",
        "High-end retouching",
      ],
    },
    {
      id: "kids-session",
      imageSrc: "/images/girl.png",
      title: "Kids Session",
      description: "Playful and memorable shots of your little ones.",
      price: "120",
      features: ["1 hour", "Props included", "Fun environment"],
    },
    {
      id: "materniity-shoots",
      imageSrc: "/images/white.png",
      title: "Maternity Shoots",
      description: "Capturing the beauty of motherhood.",
      price: "180",
      features: ["1-2 outfits", "Partner included", "Styling guide"],
    },
    {
      id: "corporate-headshots",
      imageSrc: "/images/blue.png",
      title: "Corporate Headshots",
      description: "Professional portraits for your business needs.",
      price: "100",
      features: ["30 mins", "Online proofing", "Retouched images"],
    },
    {
      id: "events-coverage",
      imageSrc: "/images/two.png", // Placeholder - replace with actual image if available
      title: "Event Coverage",
      description: "Comprehensive coverage for various events.",
      price: "Custom Quote",
      features: [
        "Full event coverage",
        "Multiple photographers",
        "Highlight reel",
      ],
    },
    {
      id: "garduation-session",
      imageSrc: "/images/grd.png",
      title: "Graduation",
      description: "Celebrate your academic achievement.",
      price: "From $100",
      features: ["Cap & Gown", "Outdoor/Studio options", "Quick turnaround"],
    },
    {
      id: "individual-session",
      imageSrc: "/images/sit.png",
      title: "Individual Session",
      description: "Personalized shoots for unique expressions.",
      price: "150",
      features: ["1-2 hours", "Multiple outfits", "Concept development"],
    },
    {
      id: "model-session",
      imageSrc: "/images/guy.png",
      title: "Model/Headshot Session",
      description: "Professional shots for portfolios and auditions.",
      price: "130",
      features: ["2-3 looks", "Retouching included", "Online gallery"],
    },
    {
      id: "brand-session",
      imageSrc: "/images/girls.png",
      title: "Brand Shoots",
      description: "Visual content creation for businesses and brands.",
      price: "Custom Quote",
      features: [
        "Product photography",
        "Lifestyle shots",
        "Branding consultation",
      ],
    },
  ];

  // State for current month/year for the calendar
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const { id } = useParams();
  const navigate = useNavigate();

  // Find selected service by ID
  const serviceDetails = allServices.find((service) => service.id === id);

  // Fallback if not found
  if (!serviceDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <p>Service not found</p>
      </div>
    );
  }

  // Handle form input changes
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

  // Handle date selection
  const handleDateChange = (date) => {
    setFormData((prev) => ({ ...prev, selectedDate: date }));
  };

  // Handle time selection
  const handleTimeChange = (time) => {
    setFormData((prev) => ({ ...prev, selectedTime: time }));
  };

  // Generate calendar days for the current month
  const getDaysInMonth = (month, year) => {
    const date = new Date(year, month, 1);
    const days = [];
    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }
    return days;
  };

  const daysInMonth = getDaysInMonth(currentMonth, currentYear);
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay(); // 0 for Sunday, 1 for Monday...

  // Available time slots (hardcoded for demonstration, could be dynamic)
  const timeSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "01:00 PM",
    "01:30 PM",
    "02:00 PM",
    "02:30 PM",
    "03:00 PM",
    "03:30 PM",
    "04:00 PM",
  ];

  // Helper to format date for display
  const getFormattedMonthYear = (month, year) => {
    const date = new Date(year, month);
    return date.toLocaleString("en-US", { month: "long", year: "numeric" });
  };

  const getFormattedDateForDisplay = (date) => {
    if (!date) return "";
    return date.toLocaleString("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const navigateMonth = (direction) => {
    setCurrentMonth((prev) => {
      let newMonth = prev + direction;
      let newYear = currentYear;
      if (newMonth < 0) {
        newMonth = 11;
        newYear--;
      } else if (newMonth > 11) {
        newMonth = 0;
        newYear++;
      }
      setCurrentYear(newYear);
      return newMonth;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation (you can add more robust validation)
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !formData.selectedDate ||
      !formData.selectedTime
    ) {
      alert("Please fill in all required fields and select a date and time.");
      return;
    }

    // Navigate to the confirmation page, passing the form data and service details
    navigate("/booking-confirmation", {
      state: { formData, serviceDetails },
    });
  };

  const isToday = (someDate) => {
    const today = new Date();
    return (
      someDate.getDate() === today.getDate() &&
      someDate.getMonth() === today.getMonth() &&
      someDate.getFullYear() === today.getFullYear()
    );
  };

  const isSelectedDate = (someDate) => {
    if (!formData.selectedDate) return false;
    return (
      someDate.getDate() === formData.selectedDate.getDate() &&
      someDate.getMonth() === formData.selectedDate.getMonth() &&
      someDate.getFullYear() === formData.selectedDate.getFullYear()
    );
  };

  // Animation helper function
  const getAnimationClass = (elementId) => {
    return animatedElements.has(elementId)
      ? "animate-fade-in-up"
      : "opacity-0 translate-y-8";
  };

  return (
    <div className="min-h-screen bg-[#262627] text-white font-sans">
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      {/* Header Placeholder */}
      <Header />

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
            <span className="text-sm">Back to Services</span>
          </button>
        </div>
        <div className="relative w-[80%] max-h-500px] mx-auto">
          <img
            src={serviceDetails.imageSrc}
            alt={serviceDetails.title}
            className="w-full max-h-[500px] object-cover object-[0_20%] rounded-md"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-6">
            <div className="text-white">
              <h2 className="text-3xl font-bold">{serviceDetails.title}</h2>
              <p className="text-lg">{serviceDetails.description}</p>
            </div>
          </div>
        </div>
        <div className="max-w-4xl mx-auto bg-[#262627] rounded-lg shadow-xl overflow-hidden">
          {/* Service Banner Section */}

          {/* Booking Details */}
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center gap-6 mb-4 text-gray-300 text-sm">
              <div className="flex items-center gap-2">
                {/* <svg
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
                    d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg> */}
                <Clock className="w-[32px]" />
                <span className="text-red-300">{serviceDetails.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                {/* <svg
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
                    d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.104c1.807.342 3.417-.938 3.417-2.806V14.25A2.25 2.25 0 0 0 18 12.072a30.014 30.014 0 0 0 5.041 2.764c1.916.917 3.593-1.161 3.593-3.138V7.5a2.25 2.25 0 0 0-2.25-2.25h-5.846a2.25 2.25 0 0 0-2.062-1.35 60.01 60.01 0 0 0-1.897-.071H9.75V3.375c0-.621-.504-1.125-1.125-1.125h-3.75c-.621 0-1.125.504-1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125H3.375c-.621 0-1.125.504-1.125 1.125v3.75c0 .621.504 1.125 1.125 1.125h1.5a2.25 2.25 0 0 0 2.062 1.35A60.01 60.01 0 0 0 7.25 20.824c.343 1.968-1.07 3.636-3.003 3.568H2.25Z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <span>{serviceDetails.price}</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm">{serviceDetails.photos}</p>
            <p className="text-gray-400 text-sm">{serviceDetails.delivery}</p>
          </div>

          {/* Date and Time Picker Section */}
          <div className="p-6 border-b border-gray-700  bg-[#202021]">
            <h3 className="text-xl font-semibold mb-4">
              Please pick a suitable Date and Time
            </h3>

            <div className="flex flex-col md:flex-row gap-6">
              {/* Calendar */}
              <div className="md:w-1/2 bg-[#1A1A1A] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold">
                    {getFormattedMonthYear(currentMonth, currentYear)}
                  </span>
                  <div className="flex gap-2">
                    <button
                      onClick={() => navigateMonth(-1)}
                      className="p-1 rounded-full hover:bg-gray-700 transition-colors"
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
                    </button>
                    <button
                      onClick={() => navigateMonth(1)}
                      className="p-1 rounded-full hover:bg-gray-700 transition-colors"
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
                          d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-7 text-center text-gray-400 text-sm mb-2">
                  <span>SUN</span>
                  <span>MON</span>
                  <span>TUE</span>
                  <span>WED</span>
                  <span>THU</span>
                  <span>FRI</span>
                  <span>SAT</span>
                </div>
                <div className="grid grid-cols-7 text-center">
                  {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                    <div key={`empty-${i}`} className="p-2"></div>
                  ))}
                  {daysInMonth.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => handleDateChange(day)}
                      className={`p-2 rounded-full text-sm font-medium
                        ${isToday(day) ? "border border-blue-500" : ""}
                        ${
                          isSelectedDate(day)
                            ? "bg-blue-600 text-white"
                            : "hover:bg-gray-600"
                        }
                        ${
                          day < new Date() && !isToday(day)
                            ? "text-gray-500 cursor-not-allowed"
                            : ""
                        }
                      `}
                      disabled={day < new Date() && !isToday(day)}
                    >
                      {day.getDate()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots */}
              <div className="md:w-1/2 bg-[#1A1A1A] rounded-lg p-4">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-sm">
                    {formData.selectedDate
                      ? getFormattedDateForDisplay(formData.selectedDate)
                      : "Please select a date"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m19.5 8.25-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map((time, index) => (
                    <button
                      key={index}
                      onClick={() => handleTimeChange(time)}
                      className={`py-2 px-3 rounded-md text-sm font-medium
                        ${
                          formData.selectedTime === time
                            ? "bg-blue-600 text-white"
                            : "bg-gray-700 hover:bg-gray-600"
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Personal Information Form Section */}
          <div className="p-6  bg-[#202021]">
            <h3 className="text-xl font-semibold mb-4">
              Please enter your information below
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div
                ref={(el) => (formRefs.current.firstName = el)}
                data-animate-id="firstName"
                className={`transition-all duration-700 ${getAnimationClass(
                  "firstName"
                )}`}
              >
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium mb-2"
                >
                  FIRST NAME
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div
                ref={(el) => (formRefs.current.lastName = el)}
                data-animate-id="lastName"
                className={`transition-all duration-700 ${getAnimationClass(
                  "lastName"
                )}`}
              >
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium mb-2"
                >
                  LAST NAME
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div
                ref={(el) => (formRefs.current.phone = el)}
                data-animate-id="phone"
                className={`transition-all duration-700 ${getAnimationClass(
                  "phone"
                )}`}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium mb-2"
                >
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Kindly include your number"
                  required
                />
              </div>

              <div
                ref={(el) => (formRefs.current.email = el)}
                data-animate-id="email"
                className={`transition-all duration-700 ${getAnimationClass(
                  "email"
                )}`}
              >
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div
                ref={(el) => (formRefs.current.location = el)}
                data-animate-id="location"
                className={`transition-all duration-700 ${getAnimationClass(
                  "location"
                )}`}
              >
                <label className="block text-sm font-medium mb-2">
                  LOCATION
                </label>
                <select
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md bg-[#1A1A1A] text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Where will the event take place?</option>
                  <option value="local">Local</option>
                  <option value="national">National</option>
                  <option value="international">International</option>
                </select>
              </div>

              <div
                ref={(el) => (formRefs.current.budget = el)}
                data-animate-id="budget"
                className={`transition-all duration-700 ${getAnimationClass(
                  "budget"
                )}`}
              >
                <label className="block text-sm font-medium mb-2">
                  DO YOU HAVE AN APPROX. BUDGET?
                </label>
                <textarea
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  rows="3"
                  placeholder="Kindly include your budget"
                  className="w-full px-4 py-3 border border-gray-600 rounded-md resize-none bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div
                ref={(el) => (formRefs.current.hearAbout = el)}
                data-animate-id="hearAbout"
                className={`transition-all duration-700 ${getAnimationClass(
                  "hearAbout"
                )}`}
              >
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
                        className="mr-2 bg-[#1A1A1A]"
                      />
                      {source.charAt(0).toUpperCase() + source.slice(1)}
                    </label>
                  ))}
                </div>
              </div>

              <div
                ref={(el) => (formRefs.current.eventType = el)}
                data-animate-id="eventType"
                className={`transition-all duration-700 ${getAnimationClass(
                  "eventType"
                )}`}
              >
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
                          className="mr-2 bg-[#1A1A1A]"
                        />
                        {event
                          .replace("-", " ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </label>
                    )
                  )}
                </div>
              </div>

              <div
                ref={(el) => (formRefs.current.message = el)}
                data-animate-id="message"
                className={`transition-all duration-700 ${getAnimationClass(
                  "message"
                )}`}
              >
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-600 rounded-md resize-none bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  placeholder="Kindly tell us more about your Event"
                ></textarea>
              </div>

              <div
                ref={(el) => (formRefs.current.submit = el)}
                data-animate-id="submit"
                className={`transition-all duration-700 ${getAnimationClass(
                  "submit"
                )}`}
              >
                <div className="pt-4 flex justify-center">
                  <button
                    type="submit"
                    className="w-[400px] bg-[#1a1a1a] text-black font-semibold py-[8px] px-8 rounded-[30px] transition-colors text-white"
                  >
                    CONTINUE
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingFormPage;
