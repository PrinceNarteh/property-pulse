import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/properties/HomeProperties";
import React from "react";

const HomePage = () => {
  return (
    <div className="pb-10">
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </div>
  );
};

export default HomePage;
