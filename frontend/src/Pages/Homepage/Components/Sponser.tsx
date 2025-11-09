import React from "react";
import image from "../../../assets/image 29.png";

const Sponser: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex flex-row  gap-8 justify-between flex-wrap">
        {[1, 2, 3, 4,5].map((_, index) => (
          <img src={image} alt=""  key={index}/>
        ))}
      </div>
    </div>
  );
};

export default Sponser;
