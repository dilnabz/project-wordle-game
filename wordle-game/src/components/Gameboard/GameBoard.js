import React, {useEffect} from "react";
import "./Gameboard.css";
import { Word } from "./Word/Word";

export function Gameboard({
    enterWord,
    formattedWords,
    tryWords
}) {
    return(
        <div className="gameBoard">
            <div>
                {formattedWords.map((formattedWord, i) => {
                    if (tryWords.length === i) {
                        return <Word key={i} enterWord={enterWord}/>;
                    }
                    return <Word key={i} word={formattedWord} />;
                })}
            </div>
        </div>
    )
}