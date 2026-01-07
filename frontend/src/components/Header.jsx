import logo from "../assets/demo_logo.png";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black/90 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        {/* <h1 className="text-xl tracking-[0.3em] font-light text-white">
          SHAAZ JEWELS
        </h1> */}
        <div className="flex items-center gap-3">
  <img
    src={logo}
    alt="Shaaz Jewels Logo"
    className="h-8 w-auto"
  />
  <span className="text-sm tracking-[0.3em] font-light text-white">
    SHAAZ JEWELS
  </span>
</div>

        <nav className="space-x-8 text-sm tracking-widest">
          <a
            href="#products"
            className="text-gray-300 hover:text-white transition"
          >
            PRODUCTS
          </a>
          <a
            href="#contact"
            className="text-gray-300 hover:text-white transition"
          >
            CONTACT
          </a>
          <a
            href="#about"
            className="text-gray-300 hover:text-white transition"
          >
            ABOUT US
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
