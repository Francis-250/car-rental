const Footer = () => {
  return (
    <div className="bg-white lg:pt-6 pt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t mt-10">
      <div className="flex flex-col gap-2 px-4">
        <header className="text-2xl font-semibold text-gray-700">
          Buying & Selling
        </header>
        <p className="text-lg text-gray-700 flex gap-2 items-center capitalize">
          <span className="font-bold text-2xl">.</span>find a car
        </p>
        <p className="text-lg text-gray-700 flex gap-2 items-center capitalize">
          <span className="font-bold text-2xl">.</span>find a dealer
        </p>
        <p className="text-lg text-gray-700 flex gap-2 items-center capitalize">
          <span className="font-bold text-2xl">.</span>car payment calculator
        </p>
        <p className="text-lg text-gray-700 flex gap-2 items-center capitalize">
          <span className="font-bold text-2xl">.</span>car review & ratings
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex uppercase text-xl gap-2 font-semibold">
          <span className="text-black">rent</span>
          <span className="text-[#93AA9C] md:flex hidden">drive</span>
        </div>
        <p className="text-lg text-gray-700 capitalize">
          Your gateway to freedom an four wheels - explore, compare, and book
          your ideal ride with ease on our intuitive car rental platform.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <header className="text-2xl font-semibold text-gray-700">
          Explore Our Brand
        </header>
        <p className="text-lg text-gray-700 flex gap-2 items-center capitalize">
          <span className="font-bold text-2xl">.</span>Dealer Rate
        </p>
      </div>
      <div className="bg-gray-900 flex items-center col-span-3 justify-center text-lg text-white p-3">
        &copy; | Munyankindi Francois
      </div>
    </div>
  );
};

export default Footer;
