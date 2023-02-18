import React from "react";
import './App.css';
import { Keyboard } from "./components/Keyboard/Keyboard";
import { Gameboard } from "./components/Gameboard/GameBoard";

export function App() {
  return(
    <div>
      <div className="header">
        <h1>Wordle</h1>
      </div>
      <Gameboard />
      <Keyboard />
    </div>
  )
}

