import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { ALL_HOTELS } from "../Hotellist";
import "./view.css";

const View = () => {
  const { id } = useParams();
  const hotel = ALL_HOTELS.find((item) => item.id === id);

  if (!hotel) {
    return (
      <div className="page">
        <Nav />
        <main className="hotel-view">
          <div className="hotel-view-missing">
            <h1>Hotel not found</h1>
            <p>This listing is not available. Go back to the hotel list.</p>
            <Link to="/" className="hotel-view-back">
              Back to hotels
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page">
      <Nav />
      <main className="hotel-view">
        <Link to="/" className="hotel-view-back">
          ← Back to hotels
        </Link>

        <article className="hotel-view-card">
          <img src={hotel.src} alt={hotel.hotelName} />
          <div className="hotel-view-body">
            <div className="hotel-view-top">
              <h1>{hotel.hotelName}</h1>
              <span className="rating">{hotel.rating}</span>
            </div>
            <p className="location">{hotel.location}</p>
            <p className="hotel-view-desc">{hotel.description}</p>
            <p className="price">
              {hotel.price} <span>/ night</span>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default View;
