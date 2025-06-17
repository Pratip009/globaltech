import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Nursing",
    image:
      "https://img.freepik.com/free-photo/caregiver-taking-care-woman-wheelchair_23-2148239080.jpg?w=740",
    slug: "nursing",
  },
  {
    title: "Allied Healthcare",
    image:
      "https://img.freepik.com/free-photo/medical-team-examining-x-ray-report_107420-84798.jpg?w=740",
    slug: "allied-healthcare",
  },
  {
    title: "Therapy",
    image:
      "https://img.freepik.com/free-photo/family-therapy-psychologist-office_23-2149175227.jpg?w=740",
    slug: "therapy",
  },
  {
    title: "Nurse Practitioners",
    image:
      "https://img.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg?w=740",
    slug: "nurse-practitioners",
  },
  {
    title: "Laboratory Professionals",
    image:
      "https://img.freepik.com/free-photo/team-scientist-white-coat-working-together-with-smoking-blue-liquid-modern-research-lab_482257-31052.jpg?w=740",
    slug: "laboratory-professionals",
  },
  {
    title: "Advanced Practice Registered Nurses",
    image:
      "https://img.freepik.com/free-photo/pharmacist-nurse-with-stethoscope-analyzing-healthcare-treatment_482257-19380.jpg?w=740",
    slug: "advanced-practice-registered-nurses",
  },
];

const ServicesGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-play">
      {/* Header Section */}
      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div>
          <span className="text-blue-800 font-semibold text-sm uppercase tracking-wide">
            Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug text-gray-900">
            We position our clients at the forefront of their field by advancing
            an agenda.
          </h2>
        </div>
        <div className="text-gray-600 text-base leading-relaxed">
          Easily apply to multiple jobs with one click! Quick Apply shows you
          recommended jobs based off your most recent search and allows you to
          apply to 25+ jobs in a matter of seconds!
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Link to={`/services/${service.slug}`} key={index}>
            <div className="rounded-xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow duration-300 bg-white cursor-pointer">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center font-semibold text-gray-800">
                {service.title}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServicesGrid;
