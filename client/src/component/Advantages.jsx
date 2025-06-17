import React from "react";
import { MdCheckCircle } from "react-icons/md";
import financeImg from "../assets/finance.webp";

const Advantages = () => {
  return (
    <section className="bg-white py-12 px-6 sm:py-16 sm:px-8 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT COLUMN */}
        <div className="space-y-6">
          <span className="inline-block bg-blue-100 text-blue-800 font-semibold text-sm px-5 py-2 rounded-full shadow-sm animate-fade-in">
            Advantages for Healthcare and IT Professionals
          </span>

          <p className="text-gray-800 text-base sm:text-lg leading-relaxed">
            <span className="text-[#164194] font-bold">GLOBAL TECH SERVICES</span>{" "}
            empowers registered nurses, CNAs, IT specialists, and professionals
            from both sectors with unmatched career support, attractive
            compensation, and nationwide opportunities.
          </p>

          {/* Highlight Card */}
          <div className="relative bg-[#164194] text-white p-6 rounded-2xl shadow-xl transition-transform duration-300 hover:scale-[1.02]">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 flex items-center gap-2">
              <MdCheckCircle size={24} color="white" />
              Competitive Pay Packages
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-white/90">
              Enjoy industry-leading pay structures, customized for both
              healthcare and IT professionals. Our weekly direct deposits ensure
              you’re paid promptly and accurately—reflecting your true value and
              skill.
            </p>
            <div className="absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-[#164194] rotate-45 hidden md:block"></div>
          </div>

          {/* Secondary Box */}
          <div className="border rounded-2xl p-6 shadow-md transition duration-300 hover:shadow-lg bg-gray-50">
            <h3 className="text-lg font-bold mb-2 text-gray-900">
              Reimbursement of Costs
            </h3>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              We help cover the essentials: physicals, immunizations, drug
              screenings for healthcare roles; and for IT, assistance with
              certification, background checks, and even relocation support for
              qualifying roles.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex justify-center items-center">
          <img
            src={financeImg}
            alt="Compensation and support"
            className="rounded-xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.01]"
          />
        </div>
      </div>
    </section>
  );
};

export default Advantages;
