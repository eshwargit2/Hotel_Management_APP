import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../Nav";
import Footer from "../Footer";
import HotelCard from "../HotelCard";
import { deleteHotelById, getVisibleHotels } from "../hotelsStore";
import "./UpdateHotel.css";

const toImageUrl = (imagePath) => {
  if (!imagePath || imagePath.startsWith("data:") || imagePath.startsWith("http")) {
    return imagePath || "";
  }

  return `http://localhost:5000${imagePath.startsWith("/") ? "" : "/"}${imagePath}`;
};

const UpdateHotel = () => {
  const navigate = useNavigate();
  const [hotels, setHotels] = useState(() => getVisibleHotels());
  const [successPopup, setSuccessPopup] = useState("");
  const [loadError, setLoadError] = useState("");

  const loadHotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels");
      if (!response.ok) {
        throw new Error("Could not load hotels");
      }

      const rows = await response.json();
      const apiHotels = rows.map((hotel, index) => ({
        id: String(hotel.id ?? hotel.hotel_id ?? `api-hotel-${index}`),
        hotelName: hotel.hotelName ?? hotel.hotel_name ?? hotel.name ?? "Unnamed hotel",
        location: hotel.location ?? hotel.address ?? "Salem",
        latitude: String(hotel.latitude ?? ""),
        longitude: String(hotel.longitude ?? ""),
        price: String(hotel.price ?? ""),
        rating: String(hotel.rating ?? ""),
        description: hotel.description ?? "",
        src: toImageUrl(hotel.src ?? hotel.image ?? hotel.image_url ?? ""),
        images: (hotel.images ?? []).map(toImageUrl),
        source: "api",
      }));

      setHotels(getVisibleHotels(apiHotels));
      setLoadError("");
    } catch (error) {
      console.error("Error fetching hotels:", error);
      setHotels(getVisibleHotels());
      setLoadError("Could not load hotels from the server.");
    }
  };

  useEffect(() => {
    loadHotels();
  }, []);

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

    const deleteHotel = async () => {
      try {
        if (hotel.source === "api") {
          const response = await fetch(`http://localhost:5000/hotels/${hotel.id}`, {
            method: "DELETE",
          });
          if (!response.ok) {
            throw new Error("Could not delete hotel");
          }
        }

        deleteHotelById(hotel.id);
        await loadHotels();
        setSuccessPopup(`${hotel.hotelName} was deleted successfully.`);
      } catch (error) {
        console.error("Error deleting hotel:", error);
        setLoadError("Could not delete this hotel.");
      }
    };

    deleteHotel();
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

          {loadError ? <p className="hotel-empty">{loadError}</p> : null}

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
