import { useState } from "react";

import { FaCar, FaCarBattery, FaUser } from "react-icons/fa";
import { cars } from "../assets/asset";
import { Link } from "react-router-dom";

const CarListing = () => {
  const [data, setData] = useState(cars);

  const handleSearch = (e) => {
    e.preventDefault();
    const searchValue = e.target.value.toLowerCase();
    const filterData = cars.filter((car) =>
      car.name.toLowerCase().includes(searchValue)
    );
    setData(filterData);
  };

  return (
    <div className="px-3 md:px-6 lg:px-12 pt-[5em] flex flex-col gap-3">
      <div className="flex items-center gap-4 bg-[#f9f9f9] sticky top-[5em] z-50 py-4">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search by model, name, price..."
          className="w-full p-3 border border-gray-300 rounded-lg outline-none"
        />
      </div>
      <div className="col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2">
        {data.map((car) => (
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
      </div>    </div>
  );
};

export default CarListing;
