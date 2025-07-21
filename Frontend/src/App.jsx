import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import BookingPage from "./pages/BookingPage";
import BookingFormPage from "./pages/BookingFormPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import BookingSuccessPage from "./pages/BookingSuccessPage";
import "./fonts.css";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/booking-page" element={<BookingPage />} />
        <Route path="/booking-page/:id" element={<BookingFormPage />} />
        <Route
          path="/booking-confirmation"
          element={<BookingConfirmationPage />}
        />
        <Route path="/booking-success" element={<BookingSuccessPage />} />
      </Routes>
    </div>
  );
};

export default App;
