import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white font-sans overflow-x-hidden">
      <div
        className="w-full"
        style={{
          backgroundImage:
            'url("https://wallpaperaccess.com/full/3004472.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700">
            {/* Phone Section */}
            <div className="min-w-0 break-words">
              <h2 className="text-xl font-semibold mb-4">Free Consultation</h2>
              {[
                { label: "USA Team", number: "803-510-1029" },
                { label: "Canada Team", number: "+1-555-44-7865" },
                { label: "India Team", number: "+91-9701858786" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-bold break-words">{item.number}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Email Section */}
            <div className="min-w-0 break-words">
              <h2 className="text-xl font-semibold mb-4">Free Consultation</h2>
              {[
                {
                  label: "Mail us for any query:",
                  email: "info@globaltechservices.com",
                },
                {
                  label: "Drop your resume:",
                  email: "resume@globaltechservices.com",
                },
                {
                  label: "Send your requirements:",
                  email: "sales@globaltechservices.com",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">{item.label}</p>
                    <p className="font-bold break-words">{item.email}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="min-w-0 break-words">
              <h2 className="text-xl font-semibold mb-4">QUICK LINK</h2>
              <ul className="space-y-3 text-gray-300">
                <li>› About us</li>
                <li>› Our Services</li>
                <li>› FAQ</li>
                <li>› Contact</li>
                <li>› Testimonials</li>
              </ul>
            </div>

            {/* Office Addresses */}
            <div className="bg-white text-black rounded-xl p-6 min-w-0 break-words">
              <h2 className="text-xl font-bold mb-4">GLOBAL TECH SERVICES</h2>
              {[
                {
                  title: "📍 USA Office:",
                  lines: [
                    "Global Tech Services Inc.",
                    "2213A, Platt Springs Road",
                    "West Columbia, SC 29169.",
                  ],
                },
                {
                  title: "📍 Canada Office:",
                  lines: [
                    "Office #10, level 1, SHAMS",
                    "(Sharjah Media City) Sharjah",
                    "UAE.",
                  ],
                },
                {
                  title: "📍 India Office:",
                  lines: [
                    "Office #2, 5th Floor",
                    "Exotica Commercial Complex",
                    "Santosh Nagar, Hyderabad 500659.",
                  ],
                },
              ].map((item, idx) => (
                <div key={idx} className="mb-4">
                  <h3 className="font-semibold">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              ))}
              <div className="flex flex-wrap gap-4 text-xl text-blue-800 mt-4">
                <FaFacebookF />
                <FaTwitter />
                <FaLinkedinIn />
                <FaInstagram />
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="bg-blue-900 text-white text-center py-4 text-sm">
            2025 © All rights reserved by Global Tech Services
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
