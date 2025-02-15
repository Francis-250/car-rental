import {
  FaCar,
  FaCarBattery,
  FaChevronCircleRight,
  FaUser,
} from "react-icons/fa";
import { cars } from "../assets/asset";
import { Link } from "react-router-dom";

const CarCard = () => {
  return (
    <div className="p-3 md:p-6 lg:p-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {cars.slice(1, 6).map((car) => (
          <Link
            key={car.id}
            to={`/car/${car.id}`}
            className="bg-white shadow-md p-3 rounded flex flex-col"
          >
            <div className="flex flex-col gap-2">
              <FaCar className="text-xl" />
              <header className="text-lg line-clamp-1">{car.name}</header>
            </div>
            <div className="flex items-center justify-center w-full border-b border-gray-200">
              <img src={car.image} alt="" />
            </div>
            <div className="flex gap-2 mt-3 text-gray-400">
              <p className="flex gap-2 items-center">
                <FaUser /> {car.seatingCapacity}
              </p>
              |<p className="flex gap-2 items-center">{car.year}</p>|
              <p className="flex gap-2 items-center">
                <FaCarBattery /> {car.fuelType}
              </p>
            </div>
            <div className="flex justify-between items-center mt-3">
              <p className="text-lg">{car.price} / Day</p>
              <div className="mt-4 flex justify-end">
                <Link
                  to="/car-listing"
                  className="px-6 py-3 bg-black text-white rounded-full hover:bg-[#93AA9C] transition-colors duration-300"
                >
                  <FaCar />
                </Link>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* More Button */}
      <div className="mt-4 flex justify-end">
        <Link
          to="/car-listing"
          className="px-6 py-3 flex items-center gap-2 bg-black text-white rounded-full hover:bg-[#93AA9C] transition-colors duration-300"
        >
          <FaChevronCircleRight className="text-xl" />
          <span className="text-lg">Load More</span>
        </Link>
      </div>
    </div>
  );
};

export default CarCard;
