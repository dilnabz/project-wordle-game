import React, {useState} from "react";
import './App.css';
import { Keyboard } from "./components/Keyboard/Keyboard";
import { Gameboard } from "./components/Gameboard/GameBoard";

export function App() {
  const [tryWords, setTryWords] = useState(["words", "apple", "magic"]);
  const [hiddenWord, setHiddenWord] = useState("react");
  const [enterWord, setEnterWord] = useState("wor");
  
  function onLetterPress(key) {
    // todo: length <= 5
    setEnterWord((prevState) => prevState + key);
  }

  // onEnterPress       enterWord → | word exists, length === 5 | → tryWords 
  // onBackspacePress   enterWord.slice(0, -1)

  // todo colorFunction
  // todo: check is win or lose

  return(
    <div>
      <div className="header">
        <h1>Wordle</h1>
      </div>
      <Gameboard 
        tryWords={tryWords} 
        hiddenWord={hiddenWord} 
        enterWord={enterWord}
      />
      {/* onEnterPress onBackspacePress */}
      {/* color Keyboard  */}
      <Keyboard onLetterPress={onLetterPress}/>
    </div>
  )
}

