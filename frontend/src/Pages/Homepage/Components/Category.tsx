import React from "react";
import services from "../../../assets/satellite-dish.png";
import services1 from "../../../assets/plane.png";
import services2 from "../../../assets/image 25.png";

const servicesData = [
  {
    name: "Calculated Weather",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: services,
  },
  {
    name: "Best Flights",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: services1,
  },
  {
    name: "Local Events",
    description:
      "Barton vanity itself do in it. Preferred to men it engrossed listening.",
    image: services2,
  },
  {
    name: "Customization",
    description:
      "We deliver outsourced aviation services for military customers.",
    image: services,
  },
];

const Category: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-16">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <h3 className="text-sm tracking-widest text-[#F1A501] font-semibold">
          CATEGORY
        </h3>
        <h1 className="text-3xl md:text-5xl font-serif font-semibold mt-3 text-gray-800">
          We Offer Best Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md hover:shadow-2xl rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
          >
            <div className="relative mb-6">
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-[60px] h-[60px] bg-[#FFF2D9] rounded-bl-3xl rounded-tr-3xl absolute top-6 left-6 -z-10" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">
              {item.name}
            </h2>
            <p className="text-center text-gray-500 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
