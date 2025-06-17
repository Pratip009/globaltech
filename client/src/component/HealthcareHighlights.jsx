import React from "react";
import { FaBriefcaseMedical, FaNetworkWired, FaChartLine } from "react-icons/fa";

const HealthcareHighlights = () => {
  return (
    <div className="bg-white px-6 md:px-16 py-12 font-play">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white shadow-md p-6 text-center rounded-md">
          <FaBriefcaseMedical className="text-4xl text-blue-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Expertise in Healthcare Domain
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our team comprises seasoned professionals with deep expertise in the healthcare industry, ensuring tailored staffing solutions that meet your exact requirements.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-md p-6 text-center rounded-md">
          <FaNetworkWired className="text-4xl text-blue-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Nationwide Coverage
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Registered across multiple states in the US, we are equipped to provide healthcare resources wherever you need them, ensuring compliance and seamless service delivery.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-md p-6 text-center rounded-md">
          <FaChartLine className="text-4xl text-blue-800 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-blue-800 mb-2">
            Diverse and Certified
          </h3>
          <p className="text-gray-700 leading-relaxed">
            As a minority and women-owned company, we bring diverse perspectives and are committed to promoting inclusivity in healthcare staffing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthcareHighlights;
