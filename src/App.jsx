import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import BookingConfirmation from "./pages/BookingConfirmation";
import CarDetail from "./pages//CarDetail";
import CarListing from "./pages/CarListing";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="md:p-6 md:px-13 p-3">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/booking/:id" element={<BookingConfirmation />} />
          <Route path="/car/:id" element={<CarDetail />} />
          <Route path="/car-listing" element={<CarListing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
