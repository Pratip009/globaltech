import React from "react";
import HeroSection from "../component/HeroSection";
import StatsSection from "../component/StatsSection";
import Advantages from "../component/Advantages";
import HealthcareProviders from "../component/HealthcareProviders";
import HealthcareStaffingSection from "../component/HealthcareStaffingSection";
const Home = () => {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <Advantages />
      <HealthcareProviders/>
      <HealthcareStaffingSection/>
    </>
  );
};

export default Home;
