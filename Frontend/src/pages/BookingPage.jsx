import Header from "../components/Header";
import Footer from "../components/Footer"; // Assuming Footer is the same
import { useNavigate } from "react-router-dom";

// Reusable Card Component
const ServiceCard = ({ id, imageSrc, title, description, price, features }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#202021] rounded-lg shadow-md overflow-hidden text-white w-[380px]">
      <img src={imageSrc} alt={title} className="w-[380px] h-[340px]" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-400 text-sm mb-3">{description}</p>
        {price && <p className="text-lg font-semibold mb-3">{price}</p>}
        {features && (
          <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-4">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        )}
        <button
          onClick={() => navigate(`/booking-page/${id}`)}
          className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-4 rounded-md transition-colors text-sm"
        >
          BOOK NOW
        </button>
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
      price: "From $150",
      features: ["Up to 2 hours", "1 Photographer", "Digital gallery"],
    },
    {
      id: "mimi-session",
      imageSrc: "/images/lady.png",
      title: "Mini Session",
      description: "20-30 minutes, 1 outfit. Ideal for quick updates.",
      price: "From $80",
      features: ["20-30 mins", "1 outfit", "5 edited images"],
    },
    {
      id: "large-group-session",
      imageSrc: "/images/ladies.png",
      title: "Large Group Session",
      description: "2-3 hours coverage. For family reunions or large parties.",
      price: "From $300",
      features: ["2-3 hours", "1-2 Photographers", "Extensive digital gallery"],
    },
    {
      id: "family-group-session",
      imageSrc: "/images/family.png",
      title: "Family/Group Session",
      description: "1-2 hours coverage. Perfect for family portraits.",
      price: "From $200",
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
      price: "From $120",
      features: ["1 hour", "Props included", "Fun environment"],
    },
    {
      id: "materniity-shoots",
      imageSrc: "/images/white.png",
      title: "Maternity Shoots",
      description: "Capturing the beauty of motherhood.",
      price: "From $180",
      features: ["1-2 outfits", "Partner included", "Styling guide"],
    },
    {
      id: "corporate-headshots",
      imageSrc: "/images/blue.png",
      title: "Corporate Headshots",
      description: "Professional portraits for your business needs.",
      price: "From $100",
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
      price: "From $150",
      features: ["1-2 hours", "Multiple outfits", "Concept development"],
    },
    {
      id: "model-session",
      imageSrc: "/images/guy.png",
      title: "Model/Headshot Session",
      description: "Professional shots for portfolios and auditions.",
      price: "From $130",
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
