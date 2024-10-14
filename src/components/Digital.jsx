import React from "react";
import imagePath from "../assets/image 1.png";

const Digital = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-screen p-6 md:p-12">
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 px-4 md:px-8">
        <h2 className="text-2xl font-bold text-purple-600 mb-6">
          Digital Strategy Consulting
        </h2>
        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation, and every business needs a different mix. We provide a
          clear concept and strategic overview to find the most efficient model
          for your business.
        </p>
        <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded hover:bg-orange-600 transition duration-300">
          LEARN MORE
        </button>
      </div>
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0 px-4 md:px-8">
        <img
          src={imagePath}
          alt="Web & Mobile App Development"
          className="w-2/3 md:w-1/2"
        />
      </div>
    </div>
  );
};

export default Digital;