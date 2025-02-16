import { cars } from "../assets/asset";
import { useParams, Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

const CarDetail = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id, 10));

  if (!car) {
    return <div>No Car Found</div>;
  }

  return (
    <div className="px-3 md:px-6 lg:px-12 pt-[8em]">
      <div className="flex lg:flex-row flex-col justify-between items-center gap-8 lg:gap-12">
        {/* Left */}
        <div className="flex flex-col gap-6 max-w-2xl">
          <header className="text-4xl lg:text-5xl font-bold text-gray-900">
            {car.name}
          </header>
          <p className="text-lg text-gray-600">
            <span className="font-medium"></span> {car.price} |{" "}
            <span className="font-medium"></span> {car.year} |{" "}
            <span className="font-medium"></span> {car.fuelType}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium"></span> {car.engineType} |{" "}
            <span className="font-medium">Seating:</span> {car.seatingCapacity}
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-medium"></span> {car.horsePower} |{" "}
            <span className="font-medium"></span> {car.topSpeed} |{" "}
            <span className="font-medium"></span> {car.acceleration}
          </p>
          <p className="text-lg text-gray-600">{car.description}</p>

          {/* Features Section */}
          <div className="flex flex-col gap-3">
            <header className="text-lg font-medium text-gray-900">
              Features:
            </header>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {car.features.map((feature, i) => (
                <span
                  key={i}
                  className="border border-gray-300 text-sm lg:text-base px-3 py-1.5 rounded items-center justify-center flex bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/*  Button */}
          <div className="mt-4 flex gap-10 items-center">
            <Link
              to={`/booking/${car.id}`}
              className="px-6 py-3 flex items-center gap-2 bg-black text-white rounded-full hover:bg-[#93AA9C] transition-colors duration-300"
            >
              <FaChevronCircleRight className="text-xl" />
              <span className="text-lg">Rent Now</span>
            </Link>
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:w-auto flex justify-center">
          <img
            src={car.image}
            alt={car.name}
            className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CarDetail;
