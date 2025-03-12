import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-white text-2xl font-bold">
          MyBrand
        </Link>

        <button 
          className="text-white md:hidden" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <ul className={`md:flex md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent top-16 left-0 w-full md:w-auto p-4 md:p-0 ${isOpen ? "block" : "hidden"}`}>
          <li>
            <Link to="/" className="text-white block py-2 md:py-0">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-white block py-2 md:py-0">About</Link>
          </li>
          <li>
            <Link to="/services" className="text-white block py-2 md:py-0">Services</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white block py-2 md:py-0">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;