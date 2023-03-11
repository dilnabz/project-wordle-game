import React, {useState, useReducer} from "react";
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
        const tryWords = state.enterWord.length === 5 && data.includes(state.enterWord)
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
  // const [tryWords, setTryWords] = useState([]);
  // const [hiddenWord, setHiddenWord] = useState(() => {
  //   const random = Math.floor(Math.random() * data.length);
  //   return data[random].toUpperCase();
  // });
  // const [enterWord, setEnterWord] = useState("");

  
  // {
  //   console.log(hiddenWord);
  // }



  const [state, dispatch] = useReducer(reducer, initialState);

  function onKeyPress(key) {
    // todo: length <= 5
    // onEnterPress: enterWord → | word exists, length === 5 | → tryWords
    // onBackspacePress   enterWord.slice(0, -1)
    // setEnterWord((prevState) => {
    //     if (prevState.length === 5) {
    //       return prevState;
    //     }
    //     return prevState + key.toUpperCase();
    //   });
    dispatch({type: "keyPress", key})
  };

  function onEnterPress() {
    // console.log({enterWord})
    // if(!data.includes(state.enterWord.toLocaleLowerCase())) {
    //   alert("this word doesn't exists");
    //   return;
    // }
    // if (enterWord.length !== 5) {
    //   alert("word must have 5 letters");
    //   return;
    // }
    addNewWord();
  }

  function onBackspacePress() {
    dispatch({type: "backspacePress"})
    // setEnterWord((prevState) => prevState.slice(0, -1));
  }
  // todo colorFunction
  function makeColor(word) {
    let hiddenLetters = [...hiddenWord];
    let colors = [...Array(5)];

    word.split("").forEach((letter, i) => {
      if (hiddenLetters[i] === letter) {
        colors[i] = "green";
        hiddenLetters[i] = null;
      } else if (hiddenLetters.includes(letter)) {
        colors[i] = "yellow";
        hiddenLetters[hiddenLetters.indexOf(letter)] = null;
      } else {
        colors[i] = "grey";
      }
    })
    return colors;
  };

  function addNewWord() {
    // setTryWords((prev) => [...prev, enterWord]);
    // setEnterWord("");
    dispatch ({type: "addNewWord"})
  };

  // todo: check is win or lose
  
  return(
    <div>
      <div className="header">
        <h1>Wordle</h1>
      </div>
      {state.tryWords.at(-1) === state.hiddenWord && <div>you win!</div>}
      {state.tryWords.length === 6 && state.tryWords.at(-1) !== state.hiddenWord && <div>you lose</div>}
      <Gameboard 
        enterWord={state.enterWord}
        makeColor={makeColor}
        tryWords={state.tryWords}
      />
      {/* onEnterPress onBackspacePress */}
      {/* color Keyboard  */}
      <Keyboard 
        onEnterPress={onEnterPress} 
        onBackspacePress={onBackspacePress} 
        onKeyPress={onKeyPress}
        tryWords={state.tryWords}
        makeColor={makeColor}
      />
    </div>
  )
}

