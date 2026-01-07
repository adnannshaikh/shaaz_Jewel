// const About = () => {
//   return (
//     <section
//       id="about"
//       className="py-24 px-6 bg-white text-gray-900"
//     >
//       <div className="max-w-4xl mx-auto text-center">
//         <h2 className="text-4xl font-light tracking-widest mb-8">
//           About Us
//         </h2>

//         <p className="text-lg leading-relaxed text-gray-600">
//           Shaaz Jewels is a UAE-based wholesaler specializing in luxury
//           diamonds and fine jewelry. We collaborate with trusted partners
//           worldwide, delivering precision-cut stones and refined
//           craftsmanship that meet the highest international standards.
//         </p>
//       </div>
//     </section>
//   );
// };

// export default About;


const About = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 text-white bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light tracking-widest mb-8">
          About Us
        </h2>

        <p className="text-lg leading-relaxed text-gray-300">
          Shaaz Jewels is a UAE-based wholesaler specializing in luxury
          diamonds and fine jewelry. We collaborate with trusted partners
          worldwide, delivering precision-cut stones and refined
          craftsmanship that meet the highest international standards.
        </p>
      </div>
    </section>
  );
};

export default About;

