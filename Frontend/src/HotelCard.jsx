import React from "react";
import "./HotelCard.css";

const HotelCard = ({ data }) => {
  return (
    <article className="card">
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
          <button type="button">View</button>
        </div>
      </div>
    </article>
  );
};

export default HotelCard;
