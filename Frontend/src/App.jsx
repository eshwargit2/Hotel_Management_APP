import { useEffect, useState, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import Hotellist from "./Hotellist";
import Banner from "./Banner";
import Footer from "./Footer";
import View from "./page/view";
import AddHotel from "./page/AddHotel";
import UpdateHotel from "./page/UpdateHotel";
import { getVisibleHotels } from "./hotelsStore";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [apiHotels, setApiHotels] = useState(null);

  const handleResetFilters = () => {
    setSearchTerm("");
    setSelectedLocation("");
    setMinPrice("");
    setMaxPrice("");
  };

  useEffect(() => {
    fetch("http://localhost:5000/hotels")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Hotels request failed: ${response.status}`);
        }
        return response.json();
      })
      .then((rows) => {
        const normalizedHotels = rows.map((hotel, index) => ({
          id: hotel.id ?? hotel.hotel_id ?? `api-hotel-${index}`,
          hotelName: hotel.hotelName ?? hotel.hotel_name ?? hotel.name ?? "Unnamed hotel",
          location: hotel.location ?? hotel.address ?? "Salem",
          latitude: String(hotel.latitude ?? ""),
          longitude: String(hotel.longitude ?? ""),
          price: String(hotel.price ?? ""),
          rating: String(hotel.rating ?? ""),
          description: hotel.description ?? "",
          src: [hotel.src, hotel.image, hotel.image_url].find(Boolean)?.replace(
            /^\/(uploads\/)/,
            "http://localhost:5000/$1"
          ) ?? "",
          images: hotel.images ?? [],
        }));
        setApiHotels(normalizedHotels);
      })
      .catch((error) => {
        console.error("Error fetching hotels:", error);
        setApiHotels([]);
      });
  }, []);

  const hotels = useMemo(
    () => getVisibleHotels(apiHotels ?? []),
    [apiHotels]
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
      <Route path="/update" element={<UpdateHotel />} />
      <Route path="/update/:id" element={<AddHotel />} />
      <Route path="/view/:id" element={<View />} />
    </Routes>
  );
};

export default App;
