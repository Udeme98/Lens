import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // optional, or use emoji/svg

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-white font-medium border-b-2 border-white pb-1"
      : "text-white font-medium hover:text-gray-200 pb-1";

  const getLinkClassMobile = ({ isActive }) =>
    isActive
      ? "text-white font-medium border-b-2 border-white pb-1 "
      : "text-white font-medium hover:text-gray-100 pb-1";

  return (
    <header className="bg-[#262627] py-6 px-8 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo2.png"
            alt="Lens by Damiano Logo"
            className="h-20 w-auto"
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
          className="md:hidden text-white"
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
            className={getLinkClassMobile}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/gallery"
            className={getLinkClassMobile}
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </NavLink>
          <NavLink
            to="/about"
            className={getLinkClassMobile}
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={getLinkClassMobile}
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
