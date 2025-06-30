import { NavLink, Link } from "react-router-dom";

const Header = () => {
  const getLinkClass = ({ isActive }) =>
    isActive
      ? "text-black font-medium border-b-2 border-black pb-1"
      : "text-black font-medium hover:text-gray-600 pb-1";

  return (
    <header className="bg-white py-6 px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="Lens by Damiano Logo"
            className="h-16 w-auto"
          />
        </Link>
        <nav className="flex space-x-8">
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
      </div>
    </header>
  );
};

export default Header;
