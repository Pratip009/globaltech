import React from "react";
import { FaPhoneAlt, FaEnvelope, FaPaperPlane } from "react-icons/fa";
import aboutImg from "../assets/aboutimg.png";
import Banner from "../component/Banner";
const Contact = () => {
  return (
    <>
      <Banner img={aboutImg} title="Contact Us" />
      <div className="max-w-7xl mx-auto mt-12 mb-12 p-6 md:p-12 grid md:grid-cols-2 gap-8 border-2 border-blue-800 rounded-lg font-play">
        {/* Left Section - Contact Info */}
        <div className="space-y-6">
          <h4 className="text-center text-blue-800 font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2">
            <span className="w-6 border-t border-blue-800"></span>
            For more information
            <span className="w-6 border-t border-blue-800"></span>
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Contact us if you have any questions.
          </h2>

          <div className="bg-blue-900 text-white p-6 rounded">
            <div className="flex items-center gap-3 mb-3">
              <FaEnvelope className="text-2xl" />
              <h3 className="font-semibold text-lg">Mail for information:</h3>
            </div>
            <p>info@globaltechservices.com</p>
            <p>resume@globaltechservices.com</p>
            <p>sales@globaltechservices.com</p>
          </div>

          <div className="flex items-start gap-3 mt-6">
            <div className="text-white bg-blue-900 p-2 rounded">
              <FaPhoneAlt className="text-xl" />
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-1">Call for help:</h3>
              <p>USA : 803-510-1029</p>
              <p>CANADA : +971-555-44-7865</p>
              <p>INDIA : +91-9701858786</p>
            </div>
          </div>

          <hr className="border-t-4 border-blue-800 mt-6" />
        </div>

        {/* Right Section - Form */}
        <div className="space-y-6">
          <h4 className="text-center text-blue-800 font-semibold text-sm uppercase tracking-wide flex items-center justify-center gap-2">
            <span className="w-6 border-t border-blue-800"></span>
            Fill up the form
            <span className="w-6 border-t border-blue-800"></span>
          </h4>
          <h2 className="text-2xl md:text-3xl font-bold text-center">
            Provide basic information about yourself so we can start looking for
            matches.
          </h2>

          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First name *"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="text"
                placeholder="Last name *"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="email"
                placeholder="Your mail *"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
              <input
                type="tel"
                placeholder="Phone number *"
                className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
              />
            </div>
            <textarea
              placeholder="Message..."
              rows="4"
              className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800"
            ></textarea>
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-blue-800 text-white font-semibold py-3 rounded hover:bg-blue-700 transition"
            >
              <FaPaperPlane />
              Send now
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
