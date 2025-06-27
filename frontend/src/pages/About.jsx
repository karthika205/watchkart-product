import React from "react";
import watchImage from "../assets/product.png"; // Import the watch image

const About = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-8 bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Left Side: Image */}
      <div className="md:w-1/2 flex justify-center p-4">
        <img
          src={watchImage}
          alt="Watch Store"
          className="rounded-2xl shadow-xl w-80 h-80 object-cover transform hover:scale-105 transition duration-300"
        />
      </div>

      {/* Right Side: Text */}
      <div className="md:w-1/2 flex flex-col justify-center text-gray-800 p-4">
        <h1 className="text-4xl font-bold">Time to Elevate Your Style</h1>
        <p className="mt-4 text-lg text-gray-600">
          Discover a premium range of elegant and luxurious watches — crafted for precision,
          durability, and timeless style.
        </p>
        <ul className="mt-4 space-y-2 text-gray-600">
          <li>⌚️ Designed for every moment — from casual outings to formal occasions</li>
          <li>🎯 Perfect precision and long‑lasting quality</li>
          <li>💳 Affordable pricing for premium craftsmanship</li>
          <li>⚡️ Modern, sleek designs that stand out</li>
        </ul>
        <div className="mt-6">
          <a
            href="/products"
            className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition duration-300"
          >
            Explore Our Collection
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

