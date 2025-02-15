import Hero from "../components/Hero";
import CarCard from "../components/CarCard";

const Home = () => {
  return (
    <div className="flex flex-col gap-2  pt-20">
      <Hero />
      <CarCard />
    </div>
  );
};

export default Home;
