import React from "react";
import "./Gameboard.css";
import { Word } from "./Word/Word";

export function Gameboard({
    enterWord,
    makeColor,
    tryWords
}) {
    const maxTries = 6;

    function makeBoard() {
        const strings = Array(6).fill(<Word />);
        if (tryWords.length > 0) {
            tryWords.forEach((tryWord, i) => {
                let wordColors = makeColor(tryWord);
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
            {/* <div>
                {tryWords.map((usedWord, i) => {
                    let wordColors = makeColor(usedWord);
                    return <Word 
                                key={i} 
                                wordColors={wordColors} 
                                word={usedWord}
                            />;
                })}
                {[...Array(maxTries-tryWords.length)].map((_, i) => {
                    if (i===0) {
                        return <Word 
                                    key={i} 
                                    enterWord={enterWord}
                                />;
                    }
                    return <Word key={i} />
                })}
            </div> */}
        </div>
    )
}