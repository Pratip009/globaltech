import React from "react";
import aboutImg from "../assets/aboutsection.png";

const AboutUssection = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-12 bg-white font-play">
      {/* Text Section */}
      <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
        <div className="flex items-center mb-4">
          <div className="h-0.5 w-6 bg-blue-600 mr-2"></div>
          <p className="text-blue-600 font-semibold">About Us</p>
          <div className="h-0.5 w-6 bg-blue-600 ml-2"></div>
        </div>
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Welcome to Global Tech Services Healthcare
        </h2>
        <p className="text-gray-700 mb-4">
          <span className="font-bold">Global Tech Services</span> Healthcare are
          a dedicated provider of specialized staffing solutions for healthcare
          facilities across diverse settings.
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Global Tech Services</span> Healthcare
          specialize in connecting healthcare providers with skilled
          professionals, including registered nurses (RNs), licensed practical
          nurses (LPNs), certified nursing assistants (CNAs), and other
          essential healthcare roles.
        </p>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <img
          src={aboutImg}
          alt="Healthcare Team"
          className="w-full max-w-md h-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default AboutUssection;
