import React from "react";
import image from "../../../assets/Rectangle 17.jpg";
import { SiMaterialdesignicons } from "react-icons/si";
import { FaRegBuilding } from "react-icons/fa";
import image1 from '../../../assets/image 32.png'

const servicesData = [
  {
    icons: SiMaterialdesignicons,
    name: "Choose Destination",
    color: "#FACC15",
    desrption:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icons: SiMaterialdesignicons,
    name: "Make Payment",
    color: "#FF0000",
    desrption:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
  {
    icons: SiMaterialdesignicons,
    name: "Reach Airport on Selected Date",
    color: "#03045E",
    desrption:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.",
  },
];

const Aboutus: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex md:gap-2 gap-10 md:flex-row md:justify-start items-center justify-center flex-col">
        {/* left section */}
        <div className="md:w-[60%]">
          <h1 className="text-lg font-semibold text-gray-600">Easy and Fast</h1>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif mt-6 leading-snug font-semibold">
            Book your next trip in 3 easy steps
          </h1>

          <div className="mt-8 flex flex-col gap-2 ">
            {servicesData.map((item, index) => {
              const Icon = item.icons;
              return (
                <div className="flex flex-row items-start gap-6 cursor-pointer hover:bg-gray-100 transition-all duration-300 ease-in-out p-4 rounded-2xl hover:-translate-2" key={index} >
                  <div className={` p-3 rounded-lg`} style={{backgroundColor : item.color}} >
                    <Icon color="white" size={20} />
                  </div>
                  <div className="flex flex-col md:w-[80%] lg:w-[60%]">
                    <h1 className="font-bold text-gray-600 text-xl font-serif">
                      {item.name}
                    </h1>
                    <p className="text-lg">{item.desrption}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* right section */}
        <div className="relative mt-6 hover:-translate-3 transition-all duration-300 ease-in-out">

          {/* box section  */}
          <div className="shadow-2xl p-4 rounded-3xl">
            <img src={image} alt="" className="rounded-3xl"/>

            <h1 className="mt-4 mx-2 text-xl font-mono">Trip To Greece</h1>

            <div className="flex flex-row gap-4 mx-2 my-2 font-mono text-lg text-gray-500">
              <h1>14-29 June</h1> 
              <span>|</span>
              <h1>by Robbin joseph</h1>
            </div>
            <div className="flex flex-row gap-4 mx-2 my-2 font-mono text-lg text-gray-500 items-center">
              <FaRegBuilding />
              <h1 className="">24 people going</h1>
            </div>
          </div>
          {/* overlapping box section  */}
          <div className="bg-white shadow-2xl rounded-3xl p-4 w-40 absolute bottom-70 left-20  md:bottom-70 md:left-20 lg:bottom-10 lg:left-60" >
            <img src={image1} alt="" className="rounded-full"/>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
