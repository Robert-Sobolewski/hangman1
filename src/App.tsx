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
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/new" component={NewScreen} />
          <Route exact path="/game/:category" component={GameScreen} />
          <Route exact path="/win/:wrong" component={WinScreen} />
          <Route exact path="/lose" component={LoseScreen} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
