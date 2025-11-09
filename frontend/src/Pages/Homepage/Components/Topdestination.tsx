import React from "react";
import image1 from "../../../assets/Rectangle 14 (1).png";
import image2 from "../../../assets/Rectangle 14.jpg";
import image3 from "../../../assets/Rectangle 14.png";
import { CiLocationArrow1 } from "react-icons/ci";

const destinationData = [
  {
    image: image1,
    City: "Rome",
    Country: "Italty",
    duration: "10 Days",
    price: "$542k",
  },
  {
    image: image2,
    City: "London",
    Country: "UK",
    duration: "12 Days",
    price: "$42k",
  },
  {
    image: image3,
    City: "Full Europe",
    Country: "",
    duration: "28 Days",
    price: "$122k",
  },
];

const Topdestination: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h3 className="text-sm tracking-widest text-[#F1A501] font-semibold">
          Top Selling
        </h3>
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mt-3 text-gray-800">
          Top Destinations
        </h1>
      </div>

      {/* destinations  */}
      <div className="flex flex-row gap-4 items-center justify-center md:justify-center xl:justify-between flex-wrap">
        {destinationData.map((item, index) => (
          <div key={index} className="shadow-lg hover:shadow-2xl rounded-2xl transition-all duration-300 ease-in-out hover:-translate-y-4">
            <div className="w-90 h-100 rounded-2xl ">
              <img
                src={item.image}
                alt="destionation image"
                className="w-full h-full object-cover rounded-t-2xl"
              />
            </div>
            <div className="flex flex-row justify-between items-center px-4 py-4">
              <h1 className="text-xl ">
                {item.City && item.City} , {item.Country && item.Country}
              </h1>
              <h1 className="text-xl ">{item.price}</h1>
            </div>
            <div className="flex flex-row gap-2  items-center px-4 py-4 mb-4">
                <CiLocationArrow1  />
              <h1 className="text-xl">{item.duration} trip</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topdestination;
