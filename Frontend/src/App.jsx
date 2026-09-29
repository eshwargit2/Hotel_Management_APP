import React, { useState, useMemo } from "react";
import "./App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import Hotellist, { ALL_HOTELS } from "./Hotellist";
import Banner from "./Banner";
import Footer from "./Footer";

const App = () => {
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

  // Filter hotels by search term (hotel name), location, and price range
  const filteredHotels = useMemo(() => {
    return ALL_HOTELS.filter((hotel) => {
      // Filter by hotel name
      if (searchTerm.trim()) {
        const query = searchTerm.toLowerCase().trim();
        const matchesName = hotel.hotelName.toLowerCase().includes(query);
        const matchesLocation = hotel.location.toLowerCase().includes(query);
        if (!matchesName && !matchesLocation) {
          return false;
        }
      }

      // Filter by location dropdown
      if (selectedLocation) {
        const locationQuery = selectedLocation.toLowerCase();
        if (!hotel.location.toLowerCase().includes(locationQuery)) {
          return false;
        }
      }

      // Extract numeric price (e.g. "₹4,200" -> 4200)
      const numericPrice = parseInt(hotel.price.replace(/[^0-9]/g, ""), 10);

      // Filter by min price
      if (minPrice && numericPrice < parseInt(minPrice, 10)) {
        return false;
      }

      // Filter by max price
      if (maxPrice && numericPrice > parseInt(maxPrice, 10)) {
        return false;
      }

      return true;
    });
  }, [searchTerm, selectedLocation, minPrice, maxPrice]);

  return (
    <div className="page">
      <Nav />
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
      <Banner />
      <Hotellist hotels={filteredHotels} />
      <Footer />
    </div>
  );
};

export default App;
