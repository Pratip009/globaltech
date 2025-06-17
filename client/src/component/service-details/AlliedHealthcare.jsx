import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const alliedHealthcareRoles = [
  "Anesthesia Technician",
  "Athletic Trainer",
  "Autotransfusionist",
  "Chaplain",
  "Clinical Officer",
  "Dental Assistant",
  "Dental Therapist",
  "Dietitian/Nutritionist",
  "Emergency Medical Technician",
  "Inspector",
  "Anesthesiologist Assistant",
  "Audiologist",
  "Cardiovascular Technologist",
  "Clinical Neurophysiology",
  "Communicative Disorders Assistant",
  "Dental Hygienist",
  "Denturist/Clinical Dental Technician",
  "Electrocardiogram Technician",
  "Environmental Health Officer/Public Health",
  "Endoscopy Technician",
  "Healthcare Technician",
  "Medical Assistant",
  "Medical Interpreter",
  "Medical Scribe",
  "Mental Health Counselor",
  "Operating Department",
  "Orthoptist",
  "Paramedic",
  "Perfusionist",
  "Lactation Consultant",
  "Medical Coder",
  "Medical Radiation Scientist",
  "Medical Transcriptionist",
  "Midwife",
  "Practitioner",
  "Orthotist/Prosthetist",
  "Pedorthist",
  "Pharmacy Technician",
];

const serviceList = [
  "Nursing",
  "Allied Healthcare",
  "Therapy",
  "Nurse Practitioners",
  "Advanced Practice Registered Nurses",
  "Laboratory Professionals",
];

const AlliedHealthcare = () => {
  const location = useLocation();

  // Get the current service name from the URL
  const currentService = location.pathname.split("/services/")[1]?.replace(/-/g, " ").toLowerCase();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 font-outfit grid md:grid-cols-3 gap-10">
      {/* Left Content */}
      <div className="md:col-span-2">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
          <span className="inline-block border-t border-blue-800 w-10 mr-3 align-middle" />
          We give the best Services
          <span className="inline-block border-t border-blue-800 w-10 ml-3 align-middle" />
        </h2>
        <div className="grid sm:grid-cols-2 gap-4 text-black text-base">
          {alliedHealthcareRoles.map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <span className="text-blue-800">»</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="border-2 border-dotted border-blue-800 p-4 rounded-md">
        {/* Services */}
        <h3 className="text-xl font-bold text-center text-blue-800 mb-4 border-b border-blue-800 pb-2">
          <span className="inline-block border-t border-blue-800 w-6 mr-2 align-middle" />
          SERVICES
          <span className="inline-block border-t border-blue-800 w-6 ml-2 align-middle" />
        </h3>
        <div className="flex flex-col gap-2">
          {serviceList.map((service, index) => {
            const isActive = currentService === service.toLowerCase();
            return (
              <Link
                key={index}
                to={`/services/${service.toLowerCase().replace(/\s+/g, "-")}`}
                className={`py-2 px-3 rounded ${
                  isActive
                    ? "bg-blue-800 text-white"
                    : "bg-gray-100 hover:bg-blue-50"
                }`}
              >
                {service}
              </Link>
            );
          })}
        </div>

        {/* Call Us */}
        <h3 className="text-xl font-bold text-center text-blue-800 mt-8 border-t border-blue-800 pt-4">
          <span className="inline-block border-t border-blue-800 w-6 mr-2 align-middle" />
          CALL US
          <span className="inline-block border-t border-blue-800 w-6 ml-2 align-middle" />
        </h3>
        <div className="mt-4 text-center text-sm text-blue-800">
          <FaPhoneAlt className="mx-auto mb-2 text-2xl" />
          <p className="font-bold">+1732-993-5542</p>
          <p className="font-bold">+971-555447865</p>
        </div>

        {/* Brochures */}
        <h3 className="text-xl font-bold text-center text-blue-800 mt-8 border-t border-blue-800 pt-4">
          <span className="inline-block border-t border-blue-800 w-6 mr-2 align-middle" />
          BROCHURES
          <span className="inline-block border-t border-blue-800 w-6 ml-2 align-middle" />
        </h3>
        <p className="mt-2 text-sm text-center">
          View our 2020 Medical prospectus or brochure for an easy to read
          guide on all of the services offer.
        </p>
      </div>
    </div>
  );
};

export default AlliedHealthcare;
