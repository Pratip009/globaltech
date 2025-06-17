import React from "react";
import Banner from "../component/Banner";
import aboutImg from "../assets/aboutimg.png";
import ServicesGrid from "../component/ServicesGrid";
const Services = () => {
  return (
    <div>
      <Banner img={aboutImg} title="Services" />
      <div className="px-5">
        <ServicesGrid />
      </div>
    </div>
  );
};

export default Services;
