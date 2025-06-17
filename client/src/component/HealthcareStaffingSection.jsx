import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const featuresLeft = [
  "Elder Care",
  "Nursing Homes",
  "Long Term Care",
  "Rehabilitation Centers",
];

const featuresRight = [
  "Hospitals",
  "Surgical Centers",
  "Trauma Centers",
  "Hospices Facilities",
];

const progressBars = [
  { label: "Nursing", value: 95 },
  { label: "Healthcare", value: 90 },
  { label: "Software Engineering", value: 85 },
];

const HealthcareStaffingSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    progressBars.map(() => 0)
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimatedValues(progressBars.map((bar) => bar.value));
    }, 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left - Image */}
        <div className="relative group rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://img.freepik.com/free-photo/asian-young-caregiver-caring-her-elderly-patient-senior-daycare-handicap-patient-wheelchair-hospital-talking-friendly-nurse-looking-cheerful-nurse-wheeling-senior-patient_609648-3125.jpg?w=740"
            alt="Healthcare Worker"
            className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-5 left-5 bg-green-600 text-white text-xs px-4 py-1 rounded-full shadow-md uppercase tracking-wider">
            Get Started
          </span>
        </div>

        {/* Right - Content */}
        <div className="text-gray-800">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-900 mb-4 leading-tight">
            Choose <span className="text-purple-700">Global Tech Services</span> Healthcare & IT <br />
            for Your Staffing Needs
          </h2>
          <p className="text-gray-600 text-base mb-6 leading-relaxed">
            We connect professionals driven by compassion and skill with organizations that value
            excellence in care and technology. Our team ensures you’re matched with the right
            opportunity — fast, friendly, and focused.
          </p>

          <button className="bg-white/30 backdrop-blur-md border border-blue-600 hover:bg-blue-600 hover:text-white text-blue-700 font-bold px-6 py-2 rounded-xl shadow-lg transition-all duration-300 mb-6">
            + (732) 823-5562
          </button>

          {/* Feature Checklist */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[featuresLeft, featuresRight].map((group, idx) => (
              <ul key={idx} className="space-y-2">
                {group.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-2 text-gray-700 text-sm"
                  >
                    <FaCheckCircle className="text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>

          {/* Progress Bars with Custom Tooltip */}
          <div className="space-y-6">
            {progressBars.map((bar, index) => (
              <div key={bar.label}>
                <div className="mb-2">
                  <span className="text-sm font-semibold text-gray-700">
                    {bar.label}
                  </span>
                </div>
                <div className="relative h-6">
                  {/* Tooltip */}
                  <div
                    className="absolute -top-9 left-0 text-white text-xs px-2 py-1 rounded bg-blue-700 shadow-md transition-all duration-700"
                    style={{
                      left: `calc(${animatedValues[index]}% - 20px)`,
                      opacity: animatedValues[index] > 0 ? 1 : 0,
                    }}
                  >
                    {animatedValues[index]}%
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-blue-700" />
                  </div>

                  {/* Progress Track */}
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-blue-700 h-3 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${animatedValues[index]}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareStaffingSection;
