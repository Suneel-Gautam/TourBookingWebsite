import React from "react";
import { CiMail } from "react-icons/ci";

const Footersection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10">
      {/* newsletter section  */}
      <div className="bg-purple-50 gap-8 w-full  rounded-4xl rounded-tl-[12rem] p-16 flex flex-col  items-center">
        <h1 className="font-bold text-gray-500 text-lg md:text-2xl  md:w-[60%] text-center">
          Subscribe to get information, latest news and other interesting offers
          about Jadoo
        </h1>
        <div className="flex md:flex-row justify-center items-center flex-col gap-6">
          <div className="flex flex-row  items-center gap-6 bg-white p-4 rounded-lg px-8 border-red-600 border">
            <CiMail size={20} />
            <input
              type="text"
              placeholder="Your Email"
              className="outline-0 placeholder:text-lg"
            />
          </div>

          <div className="bg-red-500 flex flex-row justify-center md:justify-center md:items-start  outline-red-500  text-white rounded-lg px-4 py-4 items-center hover:bg-red-500 cursor-pointer hover:-translate-y-2 transition-all duration-300 ease-in-out shadow-2xl ">
            Subscribe
          </div>
        </div>
      </div>

      {/* footer section */}
      <div className="mt-10 px-4 py-8 ">
        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-10">
          {/* left section */}
          <div className="md:w-1/3">
            <h1 className="text-2xl font-bold mb-2 ">Jadoo</h1>
            <p className="text-gray-700">
              Book your trip in minutes, get full control for much longer.
            </p>
          </div>

          {/* middle section */}
          <div className="md:w-2/3 flex flex-col sm:flex-row justify-between gap-6">
            <div>
              <h2 className="font-semibold mb-2">Company</h2>
              <p className="text-gray-600 mb-1">About</p>
              <p className="text-gray-600 mb-1">Careers</p>
              <p className="text-gray-600 mb-1">Blog</p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">Support</h2>
              <p className="text-gray-600 mb-1">Help Center</p>
              <p className="text-gray-600 mb-1">Terms of Service</p>
              <p className="text-gray-600 mb-1">Privacy Policy</p>
            </div>
            <div>
              <h2 className="font-semibold mb-2">More</h2>
              <p className="text-gray-600 mb-1">Help Center</p>
              <p className="text-gray-600 mb-1">Terms of Service</p>
              <p className="text-gray-600 mb-1">Privacy Policy</p>
            </div>
          </div>

          {/* right section */}
          <div className="md:w-1/3">
            <h2 className="font-semibold mb-2">Discover our app</h2>
            <p className="text-gray-600">
              Download on App Store or Google Play
            </p>
          </div>
        </div>
      </div>

      <div className="text-gray-500 text-center mt-10">
        All rights reserved@jadoo.co
      </div>
    </div>
  );
};

export default Footersection;
