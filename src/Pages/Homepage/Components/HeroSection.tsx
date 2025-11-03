import React from "react";
import backgroundDecore from "../../../assets/Decore.png";
import heroImage from '../../../assets/Traveller.png'
import textDecore from '../../../assets/Decore (1).png'
import { GoTriangleRight } from "react-icons/go";


const HeroSection: React.FC = () => {
  const heading = "Best Destinations around the world";
  return (
    <div>
      {/* background decore   */}
      <img
        src={backgroundDecore}
        alt=""
        className="absolute top-0 right-0 -z-80"
      />
      {/* herosection contain  */}
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row mt-12 items-center ">
        <div className="flex flex-col gap-6 ">
          <h1 className="text-lg font-semibold text-red-600 text-center md:text-start">
            {heading.toUpperCase()}
          </h1>
          <h1 className=" text-3xl md:text-4xl lg:text-7xl font-semibold md:w-[70%] leading-tight font-serif text-blue-950 text-center md:text-start ">
            Travel, <span className="relative">enjoy  <img src={textDecore} alt="" className="absolute bottom-0 right-0"/></span>  and live a new and full life

           
          </h1>
          <p className="md:w-[80%] font-sans text-center md:text-start">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>

          {/* buttons of hero section  */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center md:justify-start">

          <button className="bg-yellow-600 text-white rounded-md px-6 py-3 shadow-2xl">
            Find out more
          </button>
          <div className="w-12 h-12 rounded-full bg-red-400 flex items-center justify-center  shadow-2xl">

            <GoTriangleRight size={30} className="text-white" />
  
          </div>
          <span>Play Demo</span>
          </div>
        </div>
        <div className="mt-4 text-center w-[20rem] md:w-7xl">
            <img src={heroImage} alt="" className=""/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
