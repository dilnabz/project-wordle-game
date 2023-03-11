import React from "react";
import "./Gameboard.css";
import { Word } from "./Word/Word";
import { makeColor } from "../../makeColor";

export function Gameboard({
    enterWord,
    hiddenWord,
    tryWords
}) {
    const maxTries = 6;

    function makeBoard() {
        const strings = Array(6).fill(<Word />);
        if (tryWords.length > 0) {
            tryWords.forEach((tryWord, i) => {
                let wordColors = makeColor(tryWord, hiddenWord);
                strings[i] = <Word wordColors={wordColors} word={tryWord} />
            })
        }
        if ( tryWords.length < maxTries)
        {strings[tryWords.length] = <Word enterWord={enterWord} />}
        return strings;
    }

    return(
        <div className="gameBoard">
            <div>{makeBoard()}</div>
        </div>
    )
}