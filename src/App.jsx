import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import BookingConfirmation from "./pages/BookingConfirmation";
import CarDetail from "./pages//CarDetail";
import CarListing from "./pages/CarListing";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />
        <Route path="/car/:id" element={<CarDetail />} />
        <Route path="/car-listing" element={<CarListing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;
