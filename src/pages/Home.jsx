import Hero from "../components/Hero";
import CarCard from "../components/CarCard";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div className="flex flex-col gap-2 px-6 pt-20">
      <Hero />
      <CarCard />
      <Contact />
    </div>
  );
};

export default Home;
