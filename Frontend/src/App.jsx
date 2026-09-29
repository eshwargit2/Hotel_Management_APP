import React from "react";
import "./App.css";
import Nav from "./Nav";
import Filter from "./Filter";
import Hotellist from "./Hotellist";
import Banner from "./Banner";
import Footer from "./Footer";

const App = () => {
  return (
    <div className="page">
      <Nav />
      <Filter />
      <Banner />
      <Hotellist />
      <Footer />
    </div>
  );
};

export default App;
