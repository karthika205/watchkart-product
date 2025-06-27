import React from "react";
import watch10 from "../assets/watch10.png"; // ✅ Import image

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16"
    >
      {/* Left side: text content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Discover the Elegance of Time
        </h1>
        <p className="mt-6 text-gray-300 text-lg">
          Introducing our premium range of women's watches. Stylish. Durable. Affordable.
          Crafted for your everyday moments.
        </p>
        <a
          href="#products"
          className="mt-8 inline-block px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition"
        >
          Shop Now
        </a>
      </div>

      {/* Right side: image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <img
          src={watch10}
          alt="Elegant Watch"
          className="w-80 h-80 md:w-96 md:h-96 object-contain rounded-xl shadow-xl"
        />
      </div>
    </section>
  );
};

export default Home; // ✅ Default export
