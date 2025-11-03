import React from "react";
import Navbar from "../../Components/Layouts/Navbar";
import HeroSection from "./Components/HeroSection";
import Category from "./Components/Category";

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Category />

     
    </div>
  );
};

export default Homepage;
