import React, { useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import Hotellist, { ALL_HOTELS } from "./Hotellist";
import Banner from "./Banner";
import Footer from "./Footer";
import View from "./page/view";
import AddHotel from "./page/AddHotel";
import { loadExtraHotels } from "./hotelsStore";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setMinPrice("");
    setMaxPrice("");
  };

  const hotels = useMemo(
    () => [...loadExtraHotels(), ...ALL_HOTELS],
    []
  );

  const filteredHotels = useMemo(() => {
    return hotels.filter((hotel) => {
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = hotel.hotelName.toLowerCase().includes(query);
        const matchesLocation = hotel.location.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation) {
          return false;
        }
      }

      if (selectedLocation) {
        const locationQuery = selectedLocation.toLowerCase();
        if (!hotel.location.toLowerCase().includes(locationQuery)) {
          return false;
        }
      }

      const numericPrice = parseInt(hotel.price.replace(/[^0-9]/g, ""), 10);

      if (minPrice && numericPrice < parseInt(minPrice, 10)) {
        return false;
      }

      if (maxPrice && numericPrice > parseInt(maxPrice, 10)) {
        return false;
      }

      return true;
    });
  }, [hotels, searchTerm, selectedLocation, minPrice, maxPrice]);

  return (
    <div className="page">
      <Nav />
      <Banner />
      <Filter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        onReset={handleResetFilters}
      />
      <Hotellist hotels={filteredHotels} />
      <Footer />
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/add" element={<AddHotel />} />
      <Route path="/view/:id" element={<View />} />
    </Routes>
  );
};

export default App;
