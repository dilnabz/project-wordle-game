import React from "react";
import "./Gameboard.css";
import { Word } from "./Word/Word";

export function Gameboard({
    tryWords,
    hiddenWord,
    enterWord
}) {
    // const words = [
    //     ["W", "O", "R", "D", "S"],
    //     ["A", "P", "P", "L", "E"],
    //     ["M", "A", "G", "I", "C"],
    //     ["S", "A", "L", "S", "A"],
    //     ["J", "U", "I", "C", "E"],
    //     ["R", "E", "A", "C", "T"]
    // ]
    return(
        <div className="gameBoard">
            <div>
                {/* color tryWords  */}
                {tryWords.map(tryWord => {
                    return <Word word={tryWord} />
                })}
            </div>
            {/* todo: css for enterWord */}
           {enterWord}
           {/* todo: render empty lines */}
        </div>
    )
}