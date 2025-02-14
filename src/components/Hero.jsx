import { hereContent } from "../assets/asset";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      {hereContent.map((hero, i) => (
        <div key={i} className="bg-white rounded-2xl">
          d
        </div>
      ))}
    </div>
  );
};

export default Hero;
