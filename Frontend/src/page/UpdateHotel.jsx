import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import HotelCard from "../HotelCard";
import { ALL_HOTELS } from "../Hotellist";
import { deleteHotelById, getVisibleHotels } from "../hotelsStore";
import "./UpdateHotel.css";

const UpdateHotel = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState(() => getVisibleHotels(ALL_HOTELS));
  const [successPopup, setSuccessPopup] = useState("");

  const handleUpdate = (hotel) => {
    navigate(`/update/${hotel.id}`);
  };

  const closeSuccessPopup = () => {
    setSuccessPopup("");
  };

  const handleDelete = (hotel) => {
    const confirmed = window.confirm(
      `Delete ${hotel.hotelName}? This listing will be removed from the site.`
    );
    if (!confirmed) {
      return;
    }

    deleteHotelById(hotel.id);
    setHotels(getVisibleHotels(ALL_HOTELS));
    setSuccessPopup(`${hotel.hotelName} was deleted successfully.`);
  };

  return (
    <div className="page">
      <Nav />
      <main className="update-hotel-page">
        <section className="update-hotel-hero">
          <div className="update-hotel-hero-inner">
            <p className="eyebrow">Manage listings</p>
            <h1>Update or delete hotels</h1>
            <p className="lead">
              Every hotel card has Update and Delete. Update opens the listing
              form. Delete removes it from this page and the home list.
            </p>
          </div>
        </section>

        <section className="update-hotel-list">
          <div className="hotel-list-head">
            <h2>All hotels</h2>
            <p>
              {hotels.length} {hotels.length === 1 ? "property" : "properties"}
            </p>
          </div>

          {hotels.length === 0 ? (
            <div className="hotel-empty">
              <h3>No hotels to manage</h3>
              <p>Add a hotel first, then you can update or delete it here.</p>
            </div>
          ) : (
            <div className="cards">
              {hotels.map((hotel) => (
                <HotelCard
                  key={hotel.id}
                  data={hotel}
                  onUpdate={handleUpdate}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </section>
      </main>
      <Footer />

      {successPopup ? (
        <div
          className="hotel-popup-overlay"
          onClick={closeSuccessPopup}
          role="presentation"
        >
          <div
            className="hotel-popup"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="delete-success-title"
            onClick={(event) => event.stopPropagation()}
          >
            <h3 id="delete-success-title">Hotel deleted</h3>
            <p>{successPopup}</p>
            <button type="button" onClick={closeSuccessPopup}>
              OK
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UpdateHotel;
