import { hereContent } from "../assets/asset";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronCircleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="p-3 md:p-6 lg:p-12">
      {hereContent.map((hero, i) => (
        <div
          key={i}
          className="flex lg:flex-row flex-col justify-between items-center gap-8 lg:gap-12"
        >
          {/* Left Section: Text Content */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <header className="text-4xl lg:text-5xl font-bold text-gray-900">
              {hero.title}
            </header>
            <p className="text-2xl font-semibold text-gray-700">{hero.name}</p>
            <p className="text-lg text-gray-600">
              <span className="font-medium">Price:</span> {hero.price} |{" "}
              <span className="font-medium">Year:</span> {hero.year} |{" "}
              <span className="font-medium">Fuel Type:</span> {hero.fuelType}
            </p>
            <p className="text-lg text-gray-600">{hero.description}</p>

            {/* Features Section */}
            <div className="flex flex-col gap-3">
              <header className="text-lg font-medium text-gray-900">
                Features:
              </header>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                {hero.features.map((feature, i) => (
                  <span
                    key={i}
                    className="border border-gray-300 text-sm lg:text-base px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* Explore Button */}
            <div className="mt-4 flex gap-10 items-center">
              <Link
                to={`/car/${hero.id}`}
                className="px-6 py-3 flex items-center gap-2 bg-black text-white rounded-full hover:bg-[#93AA9C] transition-colors duration-300"
              >
                <FaChevronCircleRight className="text-xl" />
                <span className="text-lg">Rent Now</span>
              </Link>
              <div className="flex gap-10">
                <div className="border p-3 rounded-full cursor-pointer">
                  <FaArrowRight />
                </div>
                <div className="border p-3 rounded-full cursor-pointer">
                  <FaArrowLeft />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="w-full lg:w-auto flex justify-center">
            <img
              src={hero.image}
              alt={hero.name}
              className="w-full max-w-3xl lg:max-w-4xl xl:max-w-5xl rounded-lg"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
