import React from "react";
import {
  FaUserNurse,
  FaHandsHelping,
  FaWifi,
  FaProjectDiagram,
  FaRobot,
  FaHandshake,
} from "react-icons/fa";

const GTTalentsHealthcare = () => {
  const features = [
    {
      icon: <FaUserNurse className="text-3xl text-blue-800" />,
      title: "Healthcare Staffing Expertise",
      description:
        "We specialize in connecting you with highly qualified healthcare professionals, including RNs, LPNs, CNAs, and specialists across various disciplines. Our rigorous screening processes ensure you receive top-tier talent for your healthcare facility.",
    },
    {
      icon: <FaHandsHelping className="text-3xl text-blue-800" />,
      title: "Comprehensive Support",
      description:
        "Beyond staffing and technology, we provide personalized support to meet your specific organizational goals. Whether you need temporary staffing solutions, strategic technology integration, or ongoing support, we are committed to delivering exceptional service and value.",
    },
    {
      icon: <FaWifi className="text-3xl text-blue-800" />,
      title: "Technology Solutions",
      description:
        "As a technology-driven company, we offer innovative solutions tailored to enhance operational efficiency and patient care. Our offerings include",
    },
    {
      icon: <FaProjectDiagram className="text-3xl text-blue-800" />,
      title: "Managed Service Provider (MSP)",
      description:
        "Outsource your staffing management to our dedicated MSP services, allowing you to focus on core operations while we handle workforce management.",
    },
    {
      icon: <FaRobot className="text-3xl text-blue-800" />,
      title: "Integration of GEN–AI",
      description:
        "Incorporate cutting-edge AI technologies to analyze healthcare data, optimize workflows, and improve decision-making processes. GEN-AI enhances diagnostic accuracy, patient monitoring, and overall healthcare outcomes.",
    },
    {
      icon: <FaHandshake className="text-3xl text-blue-800" />,
      title: "Partnership Approach",
      description:
        "We prioritize building long-term partnerships based on trust, reliability, and innovation. Our team collaborates closely with you to understand your challenges and deliver customized solutions that drive success.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 font-play">
      {/* Top Section */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 rounded-xl text-white p-8 shadow-lg mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          At Global Tech Services
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-base leading-relaxed">
          <p>
            At <strong className="text-yellow-300">Global Tech Services</strong>, we go beyond staffing—integrating technology to deliver
            advanced solutions that fulfill diverse healthcare requirements with
            precision and flexibility.
          </p>
          <p>
            Choose us for unmatched healthcare staffing and tech expertise.
            We help enhance patient outcomes and operational standards. Partner
            with us to innovate healthcare with confidence and excellence.
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="backdrop-blur-md bg-white/90 border border-gray-200 rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GTTalentsHealthcare;
