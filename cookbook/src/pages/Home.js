import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> The 차이 Cookbook </h1>
        <p> Korean recipes from my family to yours</p>
        <Link to="/recipes">
          <button> Get started </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;