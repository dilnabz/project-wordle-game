import React, {useState} from "react";
import './App.css';
import { Keyboard } from "./components/Keyboard/Keyboard";
import { Gameboard } from "./components/Gameboard/GameBoard";
import data from "./Wordle-Word-List.json";

export function App() {
  const [tryWords, setTryWords] = useState([]);
  const [hiddenWord, setHiddenWord] = useState(() => {
    const random = Math.floor(Math.random() * data.length);
    return data[random].toUpperCase();
  });
  const [enterWord, setEnterWord] = useState("");
  
  const [formattedWords, setFormattedWords] = useState([...Array(6)]);
  const [usedKeys, setUsedKeys] = useState({});
  
  
  console.log(hiddenWord);
  // console.log(formattedWords);

  function onKeyPress(key) {
    // todo: length <= 5
    // onEnterPress: enterWord → | word exists, length === 5 | → tryWords
    // onBackspacePress   enterWord.slice(0, -1)
    setEnterWord((prevState) => {
        if (prevState.length === 5) {
          return prevState;
        }
        return prevState + key;
      });
  };

  function onEnterPress() {
    console.log({enterWord})
    if (tryWords.at(-1) === hiddenWord) {
      alert("you win");
      return;
    }
    if (tryWords.length > 5 && tryWords.at(-1) !== hiddenWord) {
      alert("you lose");
      return;
    }
    if(tryWords.includes(enterWord)) {
      alert("you already try that word");
      return;
    }
    if (enterWord.length !== 5) {
      alert("word must have 5 letters");
      return;
    }
    const formattedWord = makeColor();
    // console.log(formattedWord);
    addNewWord(formattedWord);
  }

  function onBackspacePress() {
    setEnterWord((prevState) => prevState.slice(0, -1));
  }
  // todo colorFunction
  function makeColor() {
    let hiddenLetters = [...hiddenWord];
    let formattedWord = [...enterWord].map((letter) => {
      return {key: letter, color: "grey"};
    });

    formattedWord.forEach((letter, i) => {
      if (hiddenLetters[i] === letter.key) {
        formattedWord[i].color = "green";
        hiddenLetters[i] = null;
      }
    })

    formattedWord.forEach((letter, i) => {
      if (hiddenLetters.includes(letter.key) && letter.color !== "green") {
        formattedWord[i].color = "yellow";
        hiddenLetters[hiddenLetters.indexOf(letter.key)] = null;
      }
    })
    
    return formattedWord;
  };

  function addNewWord(formattedWord) {
    setFormattedWords((prev) => {
      let newFormattedWords = [...prev];
      newFormattedWords[tryWords.length] = formattedWord;
      return newFormattedWords;
    });

    setTryWords((prev) => [...prev, enterWord]);

    setUsedKeys((prev) => {
      let coloredKeys = {...prev};

      formattedWord.forEach(letter => {
        const currentColor = coloredKeys[letter.key];

        if (letter.color === "green") {
          coloredKeys[letter.key] = "green";
          return;
        }
        if (letter.color === "yellow" && currentColor !== "green") {
          coloredKeys[letter.key] = "yellow";
          return;
        }
        if (letter.color === "grey" && currentColor !== "green" && currentColor !== "yellow") {
          coloredKeys[letter.key] = "grey";
          return;
        }
      })

      return coloredKeys;
    })

    setEnterWord("");
  };

  // todo: check is win or lose
  
  return(
    <div>
      <div className="header">
        <h1>Wordle</h1>
      </div>
      {tryWords.at(-1) === hiddenWord && <div>you win!</div>}
      <Gameboard 
        enterWord={enterWord}
        formattedWords={formattedWords}
        tryWords={tryWords}
      />
      {/* onEnterPress onBackspacePress */}
      {/* color Keyboard  */}
      <Keyboard onEnterPress={onEnterPress} onBackspacePress={onBackspacePress} onKeyPress={onKeyPress} usedKeys={usedKeys}/>
    </div>
  )
}

