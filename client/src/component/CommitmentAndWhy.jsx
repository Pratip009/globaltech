import React from "react";

const CommitmentAndWhy = () => {
  return (
    <div className="px-6 md:px-16 py-10 bg-white font-play">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {/* Commitment Section */}
        <div className="border-r-0 md:border-r-2 border-blue-700 pr-0 md:pr-8">
          <div className="flex items-center mb-4">
            <div className="h-0.5 w-6 bg-blue-700 mr-2"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-800">
              Our Commitment to Excellence
            </h3>
          </div>
          <p className="text-gray-800 leading-relaxed">
            Choose us for innovative technology-driven solutions, personalized service, and a commitment to excellence in healthcare staffing. Partner with us to enhance your operational efficiency and achieve superior patient care outcomes.
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="pl-0 md:pl-8 border-l-0 md:border-l-2 border-blue-700">
          <div className="flex items-center mb-4">
            <div className="h-0.5 w-6 bg-blue-700 mr-2"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-800">
              Why Choose us?
            </h3>
          </div>
          <p className="text-gray-800 leading-relaxed">
            At <span className="font-bold">AE Talents</span> Healthcare, we prioritize both the well-being and professional development of our healthcare professionals. Our commitment to competitive compensation, flexible scheduling, and a supportive work environment helps foster an atmosphere where you can thrive. We are dedicated to creating opportunities that not only meet your career goals but also support your personal growth and satisfaction.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommitmentAndWhy;
