import React from "react";
require("./HomeScreen.scss");

function HomeScreen() {
  return (
    <div className="home-screen">
      <h1>Hangman Game</h1>
      <a
        className="button"
        href="https://robert-sobolewski.github.io/hangman1/new"
      >
        new game
      </a>
    </div>
  );
}

export default HomeScreen;
