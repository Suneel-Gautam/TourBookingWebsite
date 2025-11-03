import React from "react";
import services from "../../../assets/satellite-dish.png";
import sercies1 from "../../../assets/plane.png";
import services2 from "../../../assets/image 25.png";

const servicesData = [
  {
    name: "Calculated Weather ",
    description: "Built Wicket longer admire do barton vanity itself do in it.",
    image: services,
  },
  {
    name: "Best Flights ",
    description: "Engrossed listening. Park gate sell they west hard for the.",
    image: sercies1,
  },
  {
    name: "Local Events ",
    description:
      "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    image: services2,
  },
  {
    name: "Customization ",
    description: "We deliver outsourcedaviation services formilitary customers",
    image: services,
  },
];

const Category: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-col items-center justify-center ">
        <h1 className="mt-4 font-serif">CATEGORY</h1>
        <h1 className="text-2xl md:text-5xl font-serif font-semibold mt-4">
          We Offer Best Services
        </h1>
      </div>

      {/* services list  */}

      <div className=" flex flex-row mt-14 justify-between">
        {servicesData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 hover:shadow-2xl p-8 rounded-bl-2xl rounded-tr-2xl rounded-tl-lg rounded-br-lg transition-all duration-300 ease-in-out"
          >
            <div className="relative">
              <div className="w-20">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-fill"
                />
              </div>

              <div className="w-[50px] h-[50px] bg-[#FFF2D9] rounded-bl-2xl rounded-tr-2xl  absolute top-10 left-8 -z-10 "></div>
            </div>
            <h1 className="mt-8 text-2xl text-center font-semibold">
              {item.name}
            </h1>
            <p className="text-center md:w-50 ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
