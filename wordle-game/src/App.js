import React, { useReducer} from "react";
import './App.css';
import { Keyboard } from "./components/Keyboard/Keyboard";
import { Gameboard } from "./components/Gameboard/GameBoard";
import data from "./Wordle-Word-List.json";


const random = Math.floor(Math.random() * data.length);
const hiddenWord = data[random].toUpperCase();

const initialState = {
  tryWords: [],
  hiddenWord,
  enterWord: "",
}


const reducer = (state, action) => {
  switch(action.type) {
    case "keyPress":
      return {
        ...state,
        enterWord: state.enterWord.length === 5 ? state.enterWord : state.enterWord + action.key
      }
    case "addNewWord":
      {
        const tryWords = state.enterWord.length === 5
          ? [...state.tryWords, state.enterWord]
          : state.tryWords;

        return {
          ...state,
          tryWords,
          enterWord: ""
        }
      };
    case "backspacePress": 
       {
        return {
          ...state,
          enterWord: state.enterWord.slice(0, -1)
        }
      };
  }
  
}

export function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(hiddenWord);

  function onKeyPress(key) {
    dispatch({type: "keyPress", key})
  };

  function onBackspacePress() {
    dispatch({type: "backspacePress"});
  }

  function onEnterPress() {
    addNewWord();
  }
  
  function addNewWord() {
    dispatch ({type: "addNewWord"});
  };
  
  return(
    <div>
      <div className="header">
        <h1>Wordle</h1>
      </div>
      {state.tryWords.at(-1) === state.hiddenWord 
        && <div className="winCase">you win!</div>}
      {state.tryWords.length === 6 
        && state.tryWords.at(-1) !== state.hiddenWord 
        && <div className="loseCase">you lose</div>}
      <Gameboard 
        enterWord={state.enterWord}
        hiddenWord={state.hiddenWord}
        tryWords={state.tryWords}
      />
      <Keyboard 
        onEnterPress={onEnterPress} 
        onBackspacePress={onBackspacePress} 
        onKeyPress={onKeyPress}
        tryWords={state.tryWords}
        hiddenWord={state.hiddenWord}
      />
    </div>
  )
}

