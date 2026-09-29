import React from "react";
import { Link, useParams } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import { ALL_HOTELS } from "../Hotellist";
import HotelMap from "./HotelMap";
import { loadExtraHotels } from "../hotelsStore";
import "./view.css";

const View = () => {
  const { id } = useParams();
  const hotel = [...loadExtraHotels(), ...ALL_HOTELS].find((item) => item.id === id);
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

        <div className="hotel-view-layout">
          <article className="hotel-view-card">
            <img src={hotel.src} alt={hotel.hotelName} />
            {hotel.images?.length > 1 && (
              <div className="hotel-view-thumbs">
                {hotel.images.map((src, index) => (
                  <img key={`${hotel.id}-img-${index}`} src={src} alt={`${hotel.hotelName} ${index + 1}`} />
                ))}
              </div>
            )}
            <div className="hotel-view-body">
              <div className="hotel-view-top">
                <h1>{hotel.hotelName}</h1>
                <span className="rating">{hotel.rating}</span>
              </div>
              <p className="location">{hotel.location}</p>
              <p className="hotel-view-coords">
                <span>Latitude: {hotel.latitude}</span>
                <span>Longitude: {hotel.longitude}</span>
              </p>
              <p className="hotel-view-desc">{hotel.description}</p>
              <p className="price">
                {hotel.price} <span>/ night</span>
              </p>
            </div>
          </article>

          <aside className="hotel-map-wrap">
            <h2>Map</h2>
            <HotelMap
              latitude={hotel.latitude}
              longitude={hotel.longitude}
              hotelName={hotel.hotelName}
              location={hotel.location}
            />
            <p className="hotel-map-note">
              Location from OpenStreetMap for {hotel.latitude}, {hotel.longitude}
            </p>
          </aside>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default View;
