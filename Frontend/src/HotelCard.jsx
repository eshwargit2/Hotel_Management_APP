import React from "react";
import { useNavigate } from "react-router-dom";
import "./HotelCard.css";

const HotelCard = ({ data }) => {
  const navigate = useNavigate();

  const openHotel = () => {
    navigate(`/view/${data.id}`);
  };

  return (
    <article
      className="card"
      onClick={openHotel}
      role="link"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openHotel();
        }
      }}
    >
      <img src={data.src} alt={data.hotelName} />
      <div className="card-body">
        <div className="card-top">
          <h3>{data.hotelName}</h3>
          <span className="rating">{data.rating}</span>
        </div>
        <p className="location">{data.location}</p>
        <p className="desc">{data.description}</p>
        <div className="card-bottom">
          <p className="price">
            {data.price} <span>/ night</span>
          </p>
          <button type="button" onClick={openHotel}>
            View
          </button>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
