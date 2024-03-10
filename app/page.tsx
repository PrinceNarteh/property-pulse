import Hero from "@/components/Hero";
import HomeProperties from "@/components/HomeProperties";
import InfoBoxes from "@/components/InfoBoxes";
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
