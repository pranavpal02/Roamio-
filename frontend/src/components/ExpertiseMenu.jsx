import React from "react";
import { ExpertiseData } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const ExpertiseMenu = () => {
  const navigate = useNavigate();

  const handleClick = (specialty) => {
    window.scrollTo(0, 0); // Scroll to top
    navigate(
      `/tourguides?specialty=${encodeURIComponent(specialty.toLowerCase())}`
    );
  };

  return (
    <div className="p-4">
      {/* Centered heading section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Find by Expertise</h1>
        <p className="text-gray-600">
          Simply browse through our extensive list of tour guides, schedule your
          bookings hassle-free.
        </p>
      </div>

      {/* Grid of cards */}
      <div
        id="expertise"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
      >
        {ExpertiseData.map((guide) => (
          <div
            key={guide.id}
            onClick={() => handleClick(guide.specialty)}
            className="cursor-pointer bg-white rounded-2xl shadow-md p-4 flex flex-col items-center text-center hover:shadow-xl transition"
          >
            <img
              src={guide.image}
              alt={guide.name}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h3 className="text-xl font-semibold">{guide.name}</h3>
            <p className="text-gray-600">{guide.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpertiseMenu;
