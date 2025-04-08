import React from "react";
import BannerImage from "../assets/Banner.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className="flex mx-auto bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20">
      {/*------------- Left Side ---------------*/}
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <div className="flex-1 py-8 sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white">
          <p>Book a Tour</p>
          <p className="mt-4">With 50+ Trusted Tour Guides across Canada</p>
        </div>
        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
        >
          Create Account
        </button>
      </div>

      {/*------------- Right Side ---------------*/}
      <div className="hidden md:block md:w-1/2 lg:w-[500px] relative">
        <img
          className="w-[140%] max-w-none absolute bottom-0 right-0"
          src={BannerImage}
          alt="Tour"
        />
      </div>
    </div>
  );
};

export default Banner;
