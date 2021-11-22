import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import "./App.scss";
import HomeScreen from "./screens/HomeScreen";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import NewScreen from "./screens/NewScreen";
import GameScreen from "./screens/GameScreen";
import WinScreen from "./screens/WinScreen";
import LoseScreen from "./screens/LoseScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact
            path="https://robert-sobolewski.github.io/hangman1/"
            component={HomeScreen}
          />
          <Route
            exact
            path="https://robert-sobolewski.github.io/hangman1/new"
            component={NewScreen}
          />
          <Route
            exact
            path="https://robert-sobolewski.github.io/hangman1/game/:category"
            component={GameScreen}
          />
          <Route
            exact
            path="https://robert-sobolewski.github.io/hangman1/win/:wrong"
            component={WinScreen}
          />
          <Route
            exact
            path="https://robert-sobolewski.github.io/hangman1/lose"
            component={LoseScreen}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
