import React from "react";
import { FiArrowRight } from "react-icons/fi";

const services = [
  {
    title: "Nursing",
    image: "https://img.freepik.com/free-photo/asian-young-caregiver-caring-her-elderly-patient-senior-daycare-handicap-patient-wheelchair-hospital-talking-friendly-nurse-looking-cheerful-nurse-wheeling-senior-patient_609648-3125.jpg?w=740",
  },
  {
    title: "Healthcare",
    image: "https://img.freepik.com/free-photo/young-doctor-supporting-his-patient_1098-2237.jpg?w=740",
  },
  {
    title: "Therapy",
    image: "https://img.freepik.com/free-photo/father-holds-hand-newly-born-babe-diapers_140725-300.jpg?w=740",
  },
  {
    title: "Software Engineers",
    image: "https://img.freepik.com/free-photo/programming-background-collage_23-2149901789.jpg?w=740",
  },
  {
    title: "Cybersecurity Specialists",
    image: "https://img.freepik.com/free-photo/hacker-anonymous-mask-using-computer_53876-104992.jpg?w=740",
  },
  {
    title: "IT Support Technicians",
    image: "https://img.freepik.com/free-photo/man-working-call-center_23-2149307264.jpg?w=740",
  },
];

const HealthcareProviders = () => {
  return (
    <section className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 py-16 px-6">
      <div className="text-center mb-12">
        <h4 className="text-sm text-blue-200 uppercase tracking-widest font-medium mb-2">
          Best Consulting Services
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
          Healthcare & IT Experts
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative rounded-3xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-md hover:shadow-blue-400/30 transition-transform duration-500 transform hover:scale-[1.03]"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent px-5 pt-4 pb-5">
              <h3 className="text-white text-xl font-semibold drop-shadow-md">
                {service.title}
              </h3>
              <div className="max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-300 ease-in-out">
                <button className="mt-3 px-3 py-1.5 text-sm flex items-center justify-center gap-1 bg-white text-blue-900 font-semibold rounded-full shadow hover:bg-gray-100 transition-all opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  Learn More <FiArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthcareProviders;
