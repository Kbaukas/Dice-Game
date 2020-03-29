import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Game from "./components/Game";
import DiceGame from "./components/DiceGame";

function App() {
  return (
    <div className="App">
      <DiceGame />
    </div>
  );
}

export default App;
