import { useParams } from "react-router-dom";
import { cars } from "../assets/asset";

const BookingForm = () => {
  const { id } = useParams();
  const car = cars.find((car) => car.id === parseInt(id, 10));

  if (!car) {
    return <div className="text-red-500 text-center py-4">Car not found!</div>;
  }

  return (
    <div className="flex flex-col gap-6 lg:px-6  bg-gray-50 min-h-screen">
      <form className="flex lg:flex-row flex-col lg:gap-6 gap-4">
        {/* Left - Customer Information */}
        <div className="bg-white shadow-lg p-6 w-full lg:w-[50%] rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Customer Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <img src={car.image} alt="" className="h-20 row-span-2" />
              <input
                type="text"
                placeholder={`Selected Car: ${car.name}`}
                className="rounded-lg w-full outline-none row-span-2 col-span-2 lg:col-span-1"
                readOnly
              />
              <input
                type="text"
                placeholder="First Name"
                className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              />
              <input
                type="text"
                placeholder="Driver's License Number"
                className="p-3 border border-gray-300 rounded-lg w-full outline-none col-span-2"
              />
            </div>
          </div>
        </div>

        {/* Right - Rental Details */}
        <div className="bg-white shadow-lg p-6 w-full lg:w-[50%] rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Rental Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Pickup Location"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <input
              type="text"
              placeholder="Drop-off Location"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <input
              type="date"
              placeholder="Pickup Date"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <input
              type="date"
              placeholder="Drop-off Date"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <input
              type="text"
              placeholder="Special Requests (e.g., child seat, GPS)"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none col-span-2"
            />
            <input
              type="text"
              placeholder="Country/State of Issue"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none col-span-2"
            />
          </div>
        </div>
      </form>

      {/* Payment and Additional Drivers */}
      <div className="flex lg:flex-row flex-col lg:gap-6 gap-4">
        {/* Payment Information */}
        <div className="bg-white shadow-lg p-6 w-full lg:w-[50%] rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Payment Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Card Number"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              required
            />
            <input
              type="text"
              placeholder="Expiration Date (MM/YY)"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              required
            />
            <input
              type="text"
              placeholder="CVV"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              required
            />
            <input
              type="text"
              placeholder="Billing Address"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              required
            />
            <select
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
              required
            >
              <option value="">Select Insurance Option</option>
              <option value="basic">Basic Coverage</option>
              <option value="premium">Premium Coverage</option>
            </select>
            <input
              type="text"
              placeholder="Discount Code (if any)"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
          </div>
        </div>

        {/* Additional Drivers */}
        <div className="bg-white shadow-lg p-6 w-full lg:w-[50%] rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">
            Additional Drivers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <input
              type="text"
              placeholder="Driver's License Number"
              className="p-3 border border-gray-300 rounded-lg w-full outline-none md:col-span-1 col-span-2"
            />
            <label className="flex items-center space-x-2 col-span-2 p-3 border border-gray-300 rounded-lg">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 rounded"
                required
              />
              <span className="text-gray-700">
                I agree to the terms and conditions.
              </span>
            </label>
            <button
              type="submit"
              className="bg-black col-span-2 text-white px-4 py-3 rounded hover:bg-black/80"
            >
              Submit Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
