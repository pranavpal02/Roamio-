import React, { useState, useEffect } from "react";
import group_profile from "../assets/group_profile.jpg";
import next from "../assets/next.png";
import header1 from "../assets/header1.jpg";
import header2 from "../assets/header2.jpg";
import header3 from "../assets/header3.jpg";
import header4 from "../assets/header4.jpg";

const Header = () => {
  const images = [header1, header2, header3, header4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div className="relative w-full">
      {/*-------- Header Image -------- */}
      <img
        src={images[currentIndex]}
        alt="Header Background"
        className="w-full h-[500px] md:h-[550px] sm:h-[300px] object-cover transition-all duration-1000 ease-in-out"
      />

      {/* ------------Overlapping Section --------------*/}
      <div className="absolute top-[50%] left-10 transform -translate-y-1/2 bg-white/75 p-6 rounded-lg shadow-lg backdrop-blur-sm">
        <p className="text-xl font-bold">Your Journey Begins Here</p>
        <p className="text-sm text-gray-600">Seamless Bookings, Hassle-Free!</p>

        <div className="flex items-center gap-4 mt-4">
          <img
            src={group_profile}
            alt="People"
            className="w-25 h-16 rounded-full"
          />
          <p className="text-md font-semibold">
            Your Next Experience Starts Here!
          </p>
        </div>

        <a
          href="#expertise"
          className="mt-6 inline-flex items-center justify-center gap-3 px-5 py-2 bg-cyan-50 text-black rounded-full shadow-md hover:bg-cyan-100 transition-all duration-300"
        >
          <span className="text-base font-semibold">Plan Your Experience</span>
          <img src={next} alt="arrow" className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
};

export default Header;
