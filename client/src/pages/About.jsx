import React from "react";
import aboutImg from "../assets/aboutimg.png";
import Banner from "../component/Banner";
import AboutUssection from "../component/AboutUssection";
import DownloadBrochure from "../component/DownloadBrochure";
import MissionVision from "../component/MissionVision";
import HealthcareProviders from "../component/HealthcareProviders";
import CommitmentAndWhy from "../component/CommitmentAndWhy";
import HealthcareHighlights from "../component/HealthcareHighlights";
import ConnectingProfessionals from "../component/ConnectingProfessionals";
import EmployerJobSeekerSection from "../component/EmployerJobSeekerSection";
const About = () => {
  return (
    <div>
      <Banner img={aboutImg} title="About Us" />

      <div className="px-5">
        <AboutUssection />
        <DownloadBrochure />
        <MissionVision />
        <HealthcareProviders />
        <CommitmentAndWhy />
        <HealthcareHighlights />
        <ConnectingProfessionals />
        <EmployerJobSeekerSection />
      </div>
    </div>
  );
};

export default About;
