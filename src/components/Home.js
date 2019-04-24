import React from "react";

const Home = ({ onClick }) => {
  return (
    <button className="home-button" onClick={onClick}>
      Home &#8962;
    </button>
  );
};

export default Home;
