import React from "react";
// import image from "../../../assets/Image.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";

const testiomonialData = [
  {
    quote:
      "“This platform completely changed the way I manage my projects. The team is super responsive and helpful!”",
    name: "Sarah Johnson",
    location: "New York, USA",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    quote:
      "“Amazing experience! The interface is smooth, intuitive, and makes my work much easier every single day.”",
    name: "Aarav Sharma",
    location: "Mumbai, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "“I’ve tried many platforms, but none of them were as user-friendly and efficient as this one. Highly recommend!”",
    name: "Emma Williams",
    location: "London, United Kingdom",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "“The customer support is excellent and the features are exactly what I needed for my business.”",
    name: "Daniel Kim",
    location: "Seoul, South Korea",
    image: "https://randomuser.me/api/portraits/men/77.jpg",
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testiomonialData.length);
  };
  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testiomonialData.length) % testiomonialData.length
    );
  };
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 md:pb-50 pb-40 ">
      <div className="flex md:flex-row   md:justify-between md:items-center flex-col justify-center">
        {/* left section of testiomonials  */}
        <div className="text-center md:text-start ">
          <h1 className="text-lg font-semibold text-gray-600 ">Testimonials</h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-6 leading-snug font-semibold">
            What people say about Us.
          </h1>
          <div className="mt-10 flex flex-row gap-4 items-center">
            {testiomonialData.map((_, index) => (
              <div className={` rounded-full w-2 h-2 ${currentIndex === index ? "bg-black" : "bg-gray-200"}`} key={index}>

              </div>
            ))}
          </div>
        </div>

        {/* right section  */}

        <div className="flex flex-row items-center mt-6">
          <div className="mx-auto font-mono md:w-2/4 w-[70%] relative mt-10 ">
            <AnimatePresence mode="wait">
              {/* main box  */}
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="relative"
              >
                <div className="shadow-2xl rounded-2xl px-16  py-9 relative z-10 bg-white">
                  <h1 className="">{testiomonialData[currentIndex].quote}</h1>
                  <h1 className="text-lg font-semibold text-gray-600 mt-8">
                    {testiomonialData[currentIndex].name}
                  </h1>
                  <h1>{testiomonialData[currentIndex].location}</h1>
                </div>

                <div className="border border-gray-200 rounded-2xl px-16  py-9 absolute -right-15 -bottom-30 -z-20 ">
                  <h1 className="h-28 w-64"></h1>
                  <h1 className="text-lg font-semibold text-gray-600 mt-8">
                    {
                      testiomonialData[
                        (currentIndex + 1) % testiomonialData.length
                      ].name
                    }
                  </h1>
                  <h1>
                    {
                      testiomonialData[
                        (currentIndex + 1) % testiomonialData.length
                      ].location
                    }
                  </h1>
                </div>
              </motion.div>

              {/* image section  */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "linear" }}
                className="absolute -top-8 -left-8 w-20 h-20"
                >
                <img
                  src={testiomonialData[currentIndex].image}
                  alt=""
                  className="absolute -top-8 -left-8 w-20 h-20 rounded-full object-cover z-10"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <div>
            <div
              className="hover:bg-amber-100 rounded-full p-4"
              onClick={handleNext}
            >
              <IoIosArrowUp size={20} />
            </div>

            <div
              className="hover:bg-amber-100 rounded-full p-4"
              onClick={handlePrev}
            >
              <IoIosArrowDown size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
