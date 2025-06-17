import React from "react";
import missionImage from "../assets/nurse.webp"; // replace with actual image path

const MissionVision = () => {
  return (
    <div className="px-6 md:px-16 py-10 bg-white font-outfit">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Mission Card */}
        <div className="border-2 border-blue-700 rounded-xl p-6 text-gray-800">
          <div className="flex items-center mb-4">
            <div className="h-0.5 w-6 bg-blue-700 mr-2"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-800">
              Our Mission
            </h3>
            <div className="h-0.5 w-6 bg-blue-700 ml-2"></div>
          </div>
          <p className="mb-4 leading-relaxed">
            Our mission is to support healthcare organizations in achieving
            their patient care goals by delivering reliable and flexible staffing
            solutions. With a commitment to quality and excellence, we ensure
            that our clients receive personalized service tailored to their
            unique needs.
          </p>
          <img
            src={missionImage}
            alt="Our Mission"
            className="w-full mt-4 rounded-md object-cover"
          />
        </div>

        {/* Vision Card */}
        <div className="border-2 border-blue-700 rounded-xl p-6 text-gray-800">
          <div className="flex items-center mb-4">
            <div className="h-0.5 w-6 bg-blue-700 mr-2"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-800">
              Our Vision
            </h3>
            <div className="h-0.5 w-6 bg-blue-700 ml-2"></div>
          </div>
          <div className="space-y-4">
            <p>
              We prioritize integrity, professionalism, and client satisfaction.
              Our team is dedicated to maintaining high standards of service and
              fostering long-term partnerships with healthcare providers.
            </p>
            <p>
              Whether you're a hospital, medical center, clinic, or specialized
              care facility, we are here to meet your staffing challenges with
              efficiency and expertise. Join us in enhancing patient care and
              operational effectiveness through our comprehensive staffing
              solutions.
            </p>
            <p>
              We integrate advanced technology and Gen-AI into our comprehensive
              staffing solutions. Our dedicated team of healthcare experts
              collaborates closely with your organization to understand your
              unique needs and deliver the right healthcare professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;
