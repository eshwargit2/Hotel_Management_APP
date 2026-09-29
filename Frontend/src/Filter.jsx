import React from "react";
import "./Filter.css";

const Filter = () => {
  return (
    <section className="filter">
      <div className="filter-inner">
        <input
          type="text"
          className="search-input"
          placeholder="Search hotel name"
        />

        <select defaultValue="">
          <option value="" disabled>
            Location
          </option>
          <option value="salem">Salem</option>
          <option value="chennai">Chennai</option>
          <option value="coimbatore">Coimbatore</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Min price
          </option>
          <option value="1000">₹1,000</option>
          <option value="2500">₹2,500</option>
          <option value="5000">₹5,000</option>
        </select>

        <select defaultValue="">
          <option value="" disabled>
            Max price
          </option>
          <option value="4000">₹4,000</option>
          <option value="8000">₹8,000</option>
          <option value="15000">₹15,000</option>
        </select>

        <button type="button">Search</button>
      </div>
    </section>
  );
};

export default Filter;
