import { useState } from "react";
import logo from "../assets/demo_logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Shaaz Jewels Logo" className="h-8 w-auto" />
          <span className="text-sm tracking-[0.3em] font-light text-white hidden sm:block">
            SHAAZ JEWELS
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm tracking-widest">
          <a href="#products" className="text-gray-300 hover:text-white transition">
            PRODUCTS
          </a>
          <a href="#about" className="text-gray-300 hover:text-white transition">
            ABOUT
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white transition">
            CONTACT
          </a>
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <nav className="flex flex-col text-center py-6 space-y-6 text-sm tracking-widest">
            <a
              href="#products"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              PRODUCTS
            </a>
            <a
              href="#about"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              ABOUT
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="text-gray-300 hover:text-white"
            >
              CONTACT
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
