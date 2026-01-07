const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-24 px-6"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-light tracking-widest mb-6">
          Contact
        </h2>

        <p className="text-gray-400 mb-12">
          For wholesale inquiries, partnerships, or private consultations.
        </p>

        <div className="space-y-4 text-lg">
          <p>
            <span className="text-gray-400">Email:</span>{" "}
            <a
              href="mailto:info@shaazjewels.com"
              className="hover:text-gray-300 transition"
            >
              info@shaazjewels.com
            </a>
          </p>

          <p>
            <span className="text-gray-400">Location:</span>{" "}
            UAE
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
