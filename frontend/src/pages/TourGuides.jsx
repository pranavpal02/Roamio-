import { useLocation } from "react-router-dom";
import { ExpertiseData } from "../assets/assets";

const TourGuides = () => {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const specialty = query.get("specialty");

  const filteredGuides = specialty
    ? ExpertiseData.filter(
        (guide) => guide.specialty.toLowerCase() === specialty.toLowerCase()
      )
    : ExpertiseData;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tour Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredGuides.map((guide) => (
          <div
            key={guide.id}
            className="w-full bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col items-center text-center border border-gray-200 cursor-pointer"
          >
            <img
              src={guide.image}
              alt={guide.name}
              className="w-35 h-45 object-cover mb-4"
            />

            <div className="flex items-center text-green-600 text-sm mb-1">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Available
            </div>

            <p className="font-semibold text-lg">{guide.name}</p>
            <p className="text-gray-500 text-sm">{guide.specialty}</p>
            <p className="text-sm text-gray-500 mt-2">{guide.about}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourGuides;
