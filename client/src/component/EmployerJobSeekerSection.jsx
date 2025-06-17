import React from "react";

const EmployerJobSeekerSection = () => {
  return (
    <section className="bg-[#edf6ff] px-6 md:px-16 py-12 font-play">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 md:divide-x border-blue-800">
        {/* For Employers */}
        <div className="md:pr-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-blue-800"></div>
            <h3 className="text-2xl font-bold text-blue-800">For Employers</h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            We offer a comprehensive recruitment solution that handles every
            detail with precision. Our services include thorough screening
            processes, rigorous credentialing, and meticulous background checks.
            By partnering with us, you can be confident that you’re securing
            top-tier talent capable of meeting your specific needs and
            overcoming the challenges of the healthcare sector. We work
            diligently to match your organization with professionals who are not
            only highly qualified but also aligned with your organizational
            culture and goals.
          </p>
        </div>

        {/* For Job Seekers */}
        <div className="md:pl-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-1 bg-blue-800"></div>
            <h3 className="text-2xl font-bold text-blue-800">
              For Job Seekers
            </h3>
          </div>
          <p className="text-gray-700 text-lg leading-relaxed">
            By choosing Global Tech Services Healthcare, you gain access to
            premier job opportunities tailored to your expertise and career
            aspirations. We offer competitive salaries, flexible scheduling
            options, and a supportive work environment designed to help you
            excel. Our advanced technology and innovative approach are focused
            on ensuring your career success and satisfaction. We understand the
            importance of finding a role that not only fits your skills but also
            supports your professional growth and personal well-being.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EmployerJobSeekerSection;
