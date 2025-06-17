import React from "react";
import { FiDownload } from "react-icons/fi";

const DownloadBrochure = () => {
  return (
    <div className="bg-[#143C96] text-white py-6 px-6 md:px-12 rounded-lg flex flex-col md:flex-row items-center justify-between font-play">
      {/* Text */}
      <p className="text-lg md:text-xl font-medium text-center md:text-left mb-4 md:mb-0">
        <span className="font-bold text-white">Want to know more about us?</span>{" "}
        <span className="text-gray-300">Just download brochure...</span>
      </p>

      {/* Button */}
      <a
        href="/path-to-brochure.pdf" // Replace with actual file path
        download
        className="bg-white text-black font-semibold flex items-center gap-2 px-6 py-3 rounded-full hover:bg-gray-200 transition"
      >
        <FiDownload className="text-xl" />
        Download Brochure
      </a>
    </div>
  );
};

export default DownloadBrochure;
