import React from "react";
import { Link } from "react-router-dom";
require("./HomeScreen.scss");

function HomeScreen() {
  return (
    <div className="home-screen">
      <h1>Hangman Game</h1>
      <Link to="/new" className="button">
        new game
      </Link>
    </div>
  );
}

export default HomeScreen;
