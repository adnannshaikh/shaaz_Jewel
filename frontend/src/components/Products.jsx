import diamond1 from "../assets/D2.png";
import diamond2 from "../assets/D1.png";
import diamond3 from "../assets/D33.png";

const products = [
  {
    id: 1,
    title: "Round Cut Diamond",
    description:
      "Expertly cut round diamonds offering exceptional brilliance and clarity for luxury applications.",
    image: diamond2,
  },
  {
    id: 2,
    title: "Princess Cut Diamond",
    description:
      "Sharp, modern lines with maximum sparkle, ideal for premium jewelry collections.",
    image: diamond1,
  },
  {
    id: 3,
    title: "Emerald Cut Diamond",
    description:
      "Elegant step-cut diamonds emphasizing clarity and timeless sophistication.",
    image: diamond3,
  }
];

const Products = () => {
  return (
    <section
      id="products"
      className="max-w-6xl mx-auto px-8 py-20"
    >
      <h2 className="text-3xl font-light tracking-wide mb-12 text-center">
        Our Collection
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {products.map(product => (
          <div
            key={product.id}
            className="border border-gray-200 p-8 hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="mb-4 h-40 w-full object-contain bg-white p-4"
            />

            <h3 className="text-xl mb-4">{product.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {product.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
