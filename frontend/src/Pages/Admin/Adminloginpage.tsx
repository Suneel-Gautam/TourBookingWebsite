import React from "react";
import { FiLock, FiPhone } from "react-icons/fi";
import {  useNavigate } from "react-router-dom";

const Adminloginpage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="flex justify-center items-center h-screen bg-primary">
      <div className="max-w-xl w-full shadow-2xl bg-card rounded-lg px-12 py-8">
        {/* login name  */}
        <div className="text-primary">
          <h1 className="text-2xl font-semibold">Login</h1>
          <hr className="border-t-4 border-secondary w-10 mt-2" />
        </div>

        <div className="flex flex-col gap-4 mt-8">
          {/* text fields */}
          <div className="relative w-full mt-4">
            <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-primary text-lg" />
            <input
              type="text"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-primary bg-card focus:outline-none focus:ring-2 focus:ring-accent placeholder-text-secondary shadow-sm"
              placeholder="Phone Number"
            />
          </div>

          <div className="relative w-full mt-4">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-primary text-lg" />
            <input
              type="password"
              className="w-full pl-10 pr-3 py-3 rounded-xl border border-primary bg-card focus:outline-none focus:ring-2 focus:ring-accent placeholder-text-secondary shadow-sm"
              placeholder="Password"
            />
          </div>

          {/* button */}
          <button className="bg-primary text-secondary font-semibold text-xl shadow-2xl py-2 rounded-lg mt-4 transition-all duration-200 ease-in-out hover:shadow-2xl hover:-translate-y-1"
            onClick={() => navigate("/admin/dashboard")} 
           >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Adminloginpage;
