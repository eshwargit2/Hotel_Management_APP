import React from "react";
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
    price: "₹4,200",
    rating: "8.4",
    description: "City hotel with AC rooms, restaurant and free parking.",
    src: HImg1,
  },
  {
    id: "hotel-salem-residency",
    hotelName: "Hotel Salem Residency",
    location: "New Bus Stand, Salem",
    price: "₹2,850",
    rating: "7.9",
    description: "Budget stay near the bus stand. Wi-Fi and breakfast included.",
    src: HImg2,
  },
  {
    id: "green-valley-inn",
    hotelName: "Green Valley Inn",
    location: "Yercaud Road, Salem",
    price: "₹3,600",
    rating: "8.1",
    description: "Quiet rooms with garden view. Suitable for family trips.",
    src: HImg3,
  },
  {
    id: "royal-park-lodge",
    hotelName: "Royal Park Lodge",
    location: "Five Roads, Salem",
    price: "₹5,100",
    rating: "8.7",
    description: "Deluxe rooms, in-house dining and 24-hour front desk.",
    src: HImg4,
  },
  {
    id: "lake-view-stay",
    hotelName: "Lake View Stay",
    location: "Yercaud",
    price: "₹6,400",
    rating: "8.9",
    description: "Hill station rooms with balcony. Check-in from 12 noon.",
    src: HImg5,
  },
  {
    id: "city-comfort-rooms",
    hotelName: "City Comfort Rooms",
    location: "Hasthampatti, Salem",
    price: "₹1,950",
    rating: "7.2",
    description: "Simple rooms for overnight stay. Walking distance to shops.",
    src: HImg6,
  },
];

const Hotellist = ({ hotels = ALL_HOTELS }) => {
  return (
    <section className="hotel-list">
      <div className="hotel-list-head">
        <h2>Hotels in Salem</h2>
        <p>{hotels.length} {hotels.length === 1 ? "property" : "properties"} found</p>
      </div>

      {hotels.length === 0 ? (
        <div style={{ textAlign: "center", padding: "40px 16px", background: "#fff", border: "1px solid #ccc" }}>
          <h3 style={{ fontSize: "16px", marginBottom: "8px" }}>No hotels found</h3>
          <p style={{ color: "#666", fontSize: "13px" }}>
            No hotels match your search criteria. Please try a different hotel name or clear the filter.
          </p>
        </div>
      ) : (
        <div className="cards">
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} data={hotel} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Hotellist;
