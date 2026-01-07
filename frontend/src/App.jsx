import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Products from "./components/Products";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white text-gray-900">
      <Header />
      {/* <div className="w-16 h-px bg-gray-300 mx-auto mb-8" /> */}
      <Hero />
      <About />
      <Products />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
