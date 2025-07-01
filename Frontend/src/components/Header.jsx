import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional, or use emoji/svg

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-medium border-b-2 border-black pb-1"
      : "text-black font-medium hover:text-gray-600 pb-1";

  return (
    <header className="bg-white py-6 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Lens by Damiano Logo"
            className="h-16 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          <NavLink to="/" className={getLinkClass}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={getLinkClass}>
            Gallery
          </NavLink>
          <NavLink to="/about" className={getLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={getLinkClass}>
            Contact Us
          </NavLink>
        </nav>

        {/* Hamburger Icon (Mobile only) */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 px-8 flex flex-col space-y-4">
          <NavLink
            to="/"
            className={getLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={getLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={getLinkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={getLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
