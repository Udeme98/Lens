import Header from "../components/Header";
import Footer from "../components/Footer"; // Assuming Footer is the same
import { useNavigate } from "react-router-dom";
import { MapPin, CircleDollarSign, Clock } from "lucide-react";

// Reusable Card Component
const ServiceCard = ({
  id,
  imageSrc,
  title,
  description,
  price,
  features,
  duration,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/booking-page/${id}`)}
      className="bg-[#202021] rounded-lg shadow-md overflow-hidden text-white w-[380px] cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
    >
      <img src={imageSrc} alt={title} className="w-[380px] h-[340px]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        {/* {price && <p className="text-lg font-semibold mb-3">{price}</p>}
        {features && (
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )} */}

        <div className="flex justify-between">
          <div className="flex">
            <Clock className="w-[32px]" />
            {duration}
          </div>
          <div className="flex">
            <CircleDollarSign className="w-[32px]" />
            CA${price}
          </div>
          <div>
            <MapPin className="w-[32px] text-[#202021]" />
            {/* {location} */}
          </div>
        </div>
      </div>
    </div>
  );
};

const BookingPage = () => {
  // Data for your service cards
  const services = [
    {
      id: "photography-small-events",
      imageSrc: "/images/group.png",
      title: "Photography (Small Events)",
      description: "0-2 hours coverage. Perfect for intimate gatherings.",
      price: "150.00",
      features: ["Up to 2 hours", "1 Photographer", "Digital gallery"],
      duration: "1 hour",
    },
    {
      id: "mimi-session",
      imageSrc: "/images/lady.png",
      title: "Mini Session",
      description: "20-30 minutes, 1 outfit. Ideal for quick updates.",
      price: "80.00",
      features: ["20-30 mins", "1 outfit", "5 edited images"],
      duration: "35 minutes",
    },
    {
      id: "large-group-session",
      imageSrc: "/images/ladies.png",
      title: "Large Group Session",
      description: "2-3 hours coverage. For family reunions or large parties.",
      price: "300.00",
      features: ["2-3 hours", "1-2 Photographers", "Extensive digital gallery"],
      duration: "1 hour 20 minutes",
    },
    {
      id: "family-group-session",
      imageSrc: "/images/family.png",
      title: "Family/Group Session",
      description: "1-2 hours coverage. Perfect for family portraits.",
      price: "200.00",
      features: ["1-2 hours", "1 Photographer", "Digital gallery"],
      duration: "1 hour",
    },
    {
      id: "crative-shots",
      imageSrc: "/images/red.png",
      title: "Creative Shots",
      description: "Conceptual and artistic photography sessions.",
      price: "200.00",
      features: [
        "Custom concepts",
        "Styling assistance",
        "High-end retouching",
      ],
      duration: "1 hour",
    },
    {
      id: "kids-session",
      imageSrc: "/images/girl.png",
      title: "Kids Session",
      description: "Playful and memorable shots of your little ones.",
      price: "120.00",
      features: ["1 hour", "Props included", "Fun environment"],
      duration: "1 hour",
    },
    {
      id: "materniity-shoots",
      imageSrc: "/images/white.png",
      title: "Maternity Shoots",
      description: "Capturing the beauty of motherhood.",
      price: "180.00",
      features: ["1-2 outfits", "Partner included", "Styling guide"],
      duration: "1 hour",
    },
    {
      id: "corporate-headshots",
      imageSrc: "/images/blue.png",
      title: "Corporate Headshots",
      description: "Professional portraits for your business needs.",
      price: "100.00",
      features: ["30 mins", "Online proofing", "Retouched images"],
      duration: "30 minutes",
    },
    {
      id: "events-coverage",
      imageSrc: "/images/two.png", // Placeholder - replace with actual image if available
      title: "Event Coverage",
      description: "Comprehensive coverage for various events.",
      price: "80.00",
      features: [
        "Full event coverage",
        "Multiple photographers",
        "Highlight reel",
      ],
      duration: "1 hour",
    },
    {
      id: "garduation-session",
      imageSrc: "/images/grd.png",
      title: "Graduation",
      description: "Celebrate your academic achievement.",
      price: "100.00",
      features: ["Cap & Gown", "Outdoor/Studio options", "Quick turnaround"],
      duration: "1 hour",
    },
    {
      id: "individual-session",
      imageSrc: "/images/sit.png",
      title: "Individual Session",
      description: "Personalized shoots for unique expressions.",
      price: "150.00",
      features: ["1-2 hours", "Multiple outfits", "Concept development"],
      duration: "30 minutes",
    },
    {
      id: "model-session",
      imageSrc: "/images/guy.png",
      title: "Model/Headshot Session",
      description: "Professional shots for portfolios and auditions.",
      price: "130.00",
      features: ["2-3 looks", "Retouching included", "Online gallery"],
      duration: "1 hour",
    },
    {
      id: "brand-session",
      imageSrc: "/images/girls.png",
      title: "Brand Shoots",
      description: "Visual content creation for businesses and brands.",
      price: "120.00",
      features: [
        "Product photography",
        "Lifestyle shots",
        "Branding consultation",
      ],
      duration: "1 hour",
    },
    // Add more services as needed based on your actual data
  ];

  return (
    <div className="min-h-screen bg-[#262627]">
      <Header />
      {/* Header Placeholder - you can replace this with your actual Header component */}
      {/* <Header /> */}
      <div className="h-60 bg-[#262627] flex items-center justify-center text-white text-3xl font-bold rounded-sm">
        {/* This div is a placeholder for the "Book Your Experience With Daminos" section. */}
        {/* Replace with your actual image and text structure as seen in the image. */}
        <div className="relative flex justify-center w-[1120px] h-full bg-[#262627] rounded-md">
          <img
            src="/images/frame-image.png"
            alt="Book Your Experience"
            className="w-[1120px] h-full opacity-40"
          />
          <div className="absolute inset-0  bg-opacity-40 flex flex-col items-center justify-center text-white">
            <h2 className="text-2xl lg:text-4xl font-bold mb-3 text-center">
              Book Your Experience With <br />
              Damiano
            </h2>
            <h3 className="text-sm text-center max-w-[900px] p-3">
              Kindly follow the instructions to book a session. A deposit
              confirms the shoot. Deposits are non-refundable.
              Rescheduling/cancellation should be done 2 weeks before the agreed
              shoot date. The final pictures are ready a week after picking
              preferred pictures. Thank you
            </h3>
          </div>
        </div>
      </div>

      <main className="px-8 py-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BookingPage;
