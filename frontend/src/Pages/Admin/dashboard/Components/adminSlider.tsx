import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const AdminSlider: React.FC = () => {
  return (
    <>
     <div className="flex h-screen">
  {/* Sidebar */}
  <div className="bg-primary text-secondary w-[25vh] py-6 h-full shadow-2xl">
    <h1 className="text-2xl mx-12">Admin Panel</h1>

    <div className="mt-12 flex flex-col gap-2">
      {/* Dashboard */}
      <div className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20">
        <MdDashboard size={20} />
        <h1 className="text-xl">Dashboard</h1>
      </div>

      {/* Destination */}
      <div className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20">
        <FaLocationDot size={20} />
        <h1 className="text-xl">Destination</h1>
      </div>

      {/* Booking */}
      <div className="flex flex-row px-10 py-6 items-center gap-4 cursor-pointer hover:bg-gray-200/20">
        <FaBookOpen size={20} />
        <h1 className="text-xl">Booking</h1>
      </div>
    </div>
  </div>

  {/* Top bar */}
  <div className="flex-1 flex flex-col">
    <div className="bg-primary h-20 w-full flex items-center px-4">
      <GiHamburgerMenu color="white" size={25} />
    </div>

    {/* Content goes here */}
    <div className="flex-1 bg-card">
      {/* Dashboard or page content */}
    </div>
  </div>
</div>


    </>
  );
};

export default AdminSlider;
