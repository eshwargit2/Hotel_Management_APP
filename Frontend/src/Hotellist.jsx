import React, { useEffect, useState } from "react";
import "./Hotellist.css";
import HotelCard from "./HotelCard";

import HImg1 from "./assets/hotel.jpg";
import HImg2 from "./assets/hotel2.jpg";
import HImg3 from "./assets/hotel3.jpg";
import HImg4 from "./assets/hotel4.jpg";
import HImg5 from "./assets/hotel5.jpg";
import HImg6 from "./assets/hotel6.jpg";

export const ALL_HOTELS = [
  {
    id: "grand-palace-hotel",
    hotelName: "Grand Palace Hotel",
    location: "Fairlands, Salem",
    latitude: "11.6643",
    longitude: "78.1460",
    price: "₹4,200",
    rating: "8.4",
    description: "City hotel with AC rooms, restaurant and free parking.",
    src: HImg1,
  },
  {
    id: "hotel-salem-residency",
    hotelName: "Hotel Salem Residency",
    location: "New Bus Stand, Salem",
    latitude: "11.6538",
    longitude: "78.1612",
    price: "₹2,850",
    rating: "7.9",
    description: "Budget stay near the bus stand. Wi-Fi and breakfast included.",
    src: HImg2,
  },
  {
    id: "green-valley-inn",
    hotelName: "Green Valley Inn",
    location: "Yercaud Road, Salem",
    latitude: "11.7014",
    longitude: "78.1526",
    price: "₹3,600",
    rating: "8.1",
    description: "Quiet rooms with garden view. Suitable for family trips.",
    src: HImg3,
  },
  {
    id: "royal-park-lodge",
    hotelName: "Royal Park Lodge",
    location: "Five Roads, Salem",
    latitude: "11.6619",
    longitude: "78.1468",
    price: "₹5,100",
    rating: "8.7",
    description: "Deluxe rooms, in-house dining and 24-hour front desk.",
    src: HImg4,
  },
  {
    id: "lake-view-stay",
    hotelName: "Lake View Stay",
    location: "Yercaud",
    latitude: "11.7748",
    longitude: "78.2097",
    price: "₹6,400",
    rating: "8.9",
    description: "Hill station rooms with balcony. Check-in from 12 noon.",
    src: HImg5,
  },
  {
    id: "city-comfort-rooms",
    hotelName: "City Comfort Rooms",
    location: "Hasthampatti, Salem",
    latitude: "11.6541",
    longitude: "78.1584",
    price: "₹1,950",
    rating: "7.2",
    description: "Simple rooms for overnight stay. Walking distance to shops.",
    src: HImg6,
  },
  {
    id: "hotel-shevaroys",
    hotelName: "Hotel Shevaroys",
    location: "Yercaud",
    latitude: "11.7756",
    longitude: "78.2031",
    price: "₹5,800",
    rating: "8.5",
    description: "Hill hotel with restaurant and valley view rooms.",
    src: HImg1,
  },
  {
    id: "salem-gateway-inn",
    hotelName: "Salem Gateway Inn",
    location: "Junction, Salem",
    latitude: "11.6698",
    longitude: "78.1394",
    price: "₹3,250",
    rating: "7.8",
    description: "Near the railway station. Early check-in on request.",
    src: HImg2,
  },
  {
    id: "omalur-road-lodge",
    hotelName: "Omalur Road Lodge",
    location: "Omalur Road, Salem",
    latitude: "11.6822",
    longitude: "78.1310",
    price: "₹2,200",
    rating: "7.1",
    description: "Basic lodge with attached bath. Parking for two-wheelers.",
    src: HImg3,
  },
  {
    id: "cherry-hills-homestay",
    hotelName: "Cherry Hills Homestay",
    location: "Yercaud",
    latitude: "11.7812",
    longitude: "78.2154",
    price: "₹7,100",
    rating: "9.0",
    description: "Homestay with garden, bonfire and home-cooked meals.",
    src: HImg4,
  },
  {
    id: "alagapuram-stay",
    hotelName: "Alagapuram Stay",
    location: "Alagapuram, Salem",
    latitude: "11.6705",
    longitude: "78.1598",
    price: "₹2,650",
    rating: "7.6",
    description: "Family rooms close to shops and hospitals.",
    src: HImg5,
  },
  {
    id: "five-roads-residency",
    hotelName: "Five Roads Residency",
    location: "Five Roads, Salem",
    latitude: "11.6602",
    longitude: "78.1481",
    price: "₹4,750",
    rating: "8.3",
    description: "Business hotel with conference hall and buffet breakfast.",
    src: HImg6,
  },
];

const PAGE_SIZE = 3;

const Hotellist = ({ hotels = ALL_HOTELS }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(hotels.length / PAGE_SIZE));

  useEffect(() => {
    setPage(1);
  }, [hotels]);

  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageHotels = hotels.slice(start, start + PAGE_SIZE);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const goToPage = (nextPage) => {
    setPage(nextPage);
    window.scrollTo({ top: 320, behavior: "smooth" });
  };

  return (
    <section className="hotel-list">
      <div className="hotel-list-head">
        <h2>Hotels in Salem</h2>
        <p>
          {hotels.length} {hotels.length === 1 ? "property" : "properties"} found
        </p>
      </div>

      {hotels.length === 0 ? (
        <div className="hotel-empty">
          <h3>No hotels found</h3>
          <p>
            No hotels match your search criteria. Please try a different hotel
            name or clear the filter.
          </p>
        </div>
      ) : (
        <>
          <div className="cards">
            {pageHotels.map((hotel) => (
              <HotelCard key={hotel.id} data={hotel} />
            ))}
          </div>

          <nav className="pagination" aria-label="Hotel pages">
            <button
              type="button"
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
            >
              Prev
            </button>

            {pages.map((pageNumber) => (
              <button
                key={pageNumber}
                type="button"
                className={pageNumber === currentPage ? "active" : ""}
                onClick={() => goToPage(pageNumber)}
              >
                {pageNumber}
              </button>
            ))}

            <button
              type="button"
              disabled={currentPage === totalPages}
              onClick={() => goToPage(currentPage + 1)}
            >
              Next
            </button>
          </nav>
        </>
      )}
    </section>
  );
};

export default Hotellist;
