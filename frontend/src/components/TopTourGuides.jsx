import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopTourGuides = () => {
  const navigate = useNavigate();
  const { TourGuidesData } = useContext(AppContext);

  const handleCardClick = (id) => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 px-4">
      <h1 className="text-3xl font-medium">Top Tour Guides to Book</h1>
      <p className="text-center text-sm mb-6">
        Simply browse through our top-rated guides and plan your next adventure.
      </p>

      <div className="w-full flex flex-wrap justify-center gap-6">
        {TourGuidesData.slice(0, 5).map((item) => (
          <div
            key={item.id}
            onClick={() => handleCardClick(item.id)}
            className="w-64 bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center border border-gray-200 cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-35 h-45 object-cover mb-4"
            />

            <div className="flex items-center text-green-600 text-sm mb-1">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available
            </div>

            <p className="font-semibold text-lg">{item.name}</p>
            <p className="text-gray-500 text-sm">{item.specialty}</p>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/tourGuides");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        {" "}
        More
      </button>
    </div>
  );
};

export default TopTourGuides;
