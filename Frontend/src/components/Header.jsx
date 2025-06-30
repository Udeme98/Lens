import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Lens by Damiano Logo"
            className="h-16 w-auto"
          />
        </div>
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="text-black font-medium hover:text-gray-600 border-b-2 border-black pb-1"
          >
            Home
          </Link>
          <Link
            to="/gallery"
            className="text-black font-medium hover:text-gray-600"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="text-black font-medium hover:text-gray-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-black font-medium hover:text-gray-600"
          >
            Contact Us
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
