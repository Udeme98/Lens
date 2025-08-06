import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import ContactUs from "./pages/ContactUs";
import BookingPage from "./pages/BookingPage";
import BookingFormPage from "./pages/BookingFormPage";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import BookingSuccessPage from "./pages/BookingSuccessPage";
import DashboardContent from "./pages/dashboard/DashboardContent";
import DashboardLayout from "./components/DashboardLayout";
import InboxPage from "./pages/dashboard/InboxPage";
import InvoicePage from "./pages/dashboard/InvoicePage";
import ContractPage from "./pages/dashboard/ContractPage";
import InvoiceFormPage from "./pages/dashboard/InvoiceFormPage";
import ContractFormPage from "./pages/dashboard/ContractFormPage";
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

        {/* Dashboard routes using nested routing */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardContent />} />
          <Route path="inbox" element={<InboxPage />} />
          <Route path="invoice" element={<InvoicePage />} />
          <Route path="contract" element={<ContractPage />} />
          <Route path="invoice-form" element={<InvoiceFormPage />} />
          <Route path="contract-form" element={<ContractFormPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
