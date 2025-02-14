import Aston from "./img/Aston.png";
import Bugatti from "./img/Bugatti.png";
import Ferrari from "./img/Ferrari.png";
import Koenigsegg from "./img/Koenigsegg.png";
import Lamborghini from "./img/Lamborghini.png";
import McLaren from "./img/McLaren.png";
import Pagani from "./img/Pagani.png";
import Porsche from "./img/Porsche.png";
import Rolls from "./img/Rolls.png";
import Tesla from "./img/Tesla.png";
import High from "./img/high.png";
import Low from "./img/low.png";

export const menu = [
  { link: "/", label: "home" },
  { link: "/car-listing", label: "model" },
  { link: "/contact", label: "contact" },
  { link: "/gallery", label: "gallery" },
];

export const hereContent = [
  {
    title: "The Premier for Car Rentals",
    subTitle: "Find the perfect car for your journey with ease.",
    img: High,
  },
  {
    title: "Low Cost Car Rentals Made Quick and Simple",
    subTitle: "Affordable and hassle-free car rentals at your fingertips.",
    img: Low,
  },
];

export const cars = [
  {
    id: 1,
    name: "Ferrari SF90 Stradale",
    year: 2024,
    price: "$524,000",
    horsePower: 1000,
    topSpeed: "211 mph",
    acceleration: "0-60 mph in 2.5 sec",
    description:
      "A hybrid V8 supercar with stunning design and cutting-edge performance, blending Ferrari’s signature speed with electric power.",
    image: Ferrari,
    manufacturer: "Ferrari",
    fuelType: "Hybrid",
    seatingCapacity: 2,
    engineType: "V8",
    safetyRating: "5 stars",
    features: [
      "Adaptive Cruise Control",
      "Navigation System",
      "Advanced Driver Assistance",
    ],
  },
  {
    id: 2,
    name: "Lamborghini Revuelto",
    year: 2024,
    price: "$600,000",
    horsePower: 1001,
    topSpeed: "217 mph",
    acceleration: "0-60 mph in 2.3 sec",
    description:
      "Lamborghini's first V12 hybrid supercar, combining raw power with modern hybrid technology for ultimate performance.",
    image: Lamborghini,
    manufacturer: "Lamborghini",
    fuelType: "Hybrid",
    seatingCapacity: 2,
    engineType: "V12",
    safetyRating: "5 stars",
    features: ["Leather Upholstery", "All-Wheel Drive", "Advanced Suspension"],
  },
  {
    id: 3,
    name: "Bugatti Chiron Super Sport",
    year: 2024,
    price: "$3.9 million",
    horsePower: 1578,
    topSpeed: "273 mph",
    acceleration: "0-60 mph in 2.4 sec",
    description:
      "A hypercar masterpiece with a quad-turbo W16 engine, delivering unmatched speed and luxury.",
    image: Bugatti,
    manufacturer: "Bugatti",
    fuelType: "Gasoline",
    seatingCapacity: 2,
    engineType: "W16",
    safetyRating: "5 stars",
    features: [
      "Adaptive Cruise Control",
      "Heads-Up Display",
      "Luxury Interior",
    ],
  },
  {
    id: 4,
    name: "McLaren P1",
    year: 2024,
    price: "$1.3 million",
    horsePower: 903,
    topSpeed: "217 mph",
    acceleration: "0-60 mph in 2.6 sec",
    description:
      "A legendary hybrid hypercar blending cutting-edge aerodynamics with race-inspired technology.",
    image: McLaren,
    manufacturer: "McLaren",
    fuelType: "Hybrid",
    seatingCapacity: 2,
    engineType: "V8",
    safetyRating: "5 stars",
    features: [
      "Active Aerodynamics",
      "Carbon Fiber Monocoque",
      "Telemetry System",
    ],
  },
  {
    id: 5,
    name: "Porsche 911 Turbo S",
    year: 2024,
    price: "$230,000",
    horsePower: 640,
    topSpeed: "205 mph",
    acceleration: "0-60 mph in 2.6 sec",
    description:
      "An iconic sports car with blistering speed, everyday usability, and timeless design.",
    image: Porsche,
    manufacturer: "Porsche",
    fuelType: "Gasoline",
    seatingCapacity: 2,
    engineType: "Flat-6",
    safetyRating: "5 stars",
    features: [
      "Sport Chrono Package",
      "All-Wheel Drive",
      "Bose Surround Sound",
    ],
  },
  {
    id: 6,
    name: "Koenigsegg Jesko",
    year: 2024,
    price: "$3 million",
    horsePower: 1600,
    topSpeed: "300+ mph",
    acceleration: "0-60 mph in 2.5 sec",
    description:
      "A record-breaking hypercar built for extreme speed and aerodynamic efficiency.",
    image: Koenigsegg,
    manufacturer: "Koenigsegg",
    fuelType: "Gasoline",
    seatingCapacity: 2,
    engineType: "V8",
    safetyRating: "5 stars",
    features: [
      "Adjustable Suspension",
      "Carbon Fiber Components",
      "Track Mode",
    ],
  },
  {
    id: 7,
    name: "Aston Martin Valkyrie",
    year: 2024,
    price: "$3.2 million",
    horsePower: 1160,
    topSpeed: "250 mph",
    acceleration: "0-60 mph in 2.5 sec",
    description:
      "A Formula 1-inspired hypercar with a naturally aspirated V12 and lightweight design.",
    image: Aston,
    manufacturer: "Aston Martin",
    fuelType: "Gasoline",
    seatingCapacity: 2,
    engineType: "V12",
    safetyRating: "5 stars",
    features: [
      "F1-Inspired Suspension",
      "Active Aerodynamics",
      "Carbon Fiber Monocoque",
    ],
  },
  {
    id: 8,
    name: "Pagani Huayra R",
    year: 2024,
    price: "$3.5 million",
    horsePower: 850,
    topSpeed: "238 mph",
    acceleration: "0-60 mph in 2.7 sec",
    description:
      "A handcrafted Italian hypercar with artistic design and a roaring V12 engine.",
    image: Pagani,
    manufacturer: "Pagani",
    fuelType: "Gasoline",
    seatingCapacity: 2,
    engineType: "V12",
    safetyRating: "5 stars",
    features: [
      "Handcrafted Interior",
      "Track Performance Mode",
      "Lightweight Frame",
    ],
  },
  {
    id: 9,
    name: "Rolls-Royce Spectre",
    year: 2024,
    price: "$420,000",
    horsePower: 577,
    topSpeed: "155 mph",
    acceleration: "0-60 mph in 4.4 sec",
    description:
      "A luxurious all-electric Rolls-Royce with silent performance and an ultra-premium cabin.",
    image: Rolls,
    manufacturer: "Rolls-Royce",
    fuelType: "Electric",
    seatingCapacity: 4,
    engineType: "Electric Motor",
    safetyRating: "5 stars",
    features: ["Premium Sound System", "Autonomous Driving", "Massaging Seats"],
  },
  {
    id: 10,
    name: "Tesla Model Y",
    year: 2024,
    price: "$52,000",
    horsePower: 455,
    topSpeed: "135 mph",
    acceleration: "0-60 mph in 3.5 sec",
    description:
      "A best-selling electric SUV offering high-tech features, great range, and a smooth ride.",
    image: Tesla,
    manufacturer: "Tesla",
    fuelType: "Electric",
    seatingCapacity: 5,
    engineType: "Electric Motor",
    safetyRating: "5 stars",
    features: ["Autopilot", "Infotainment System", "Panoramic Sunroof"],
  },
];
