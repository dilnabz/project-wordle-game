import React from "react";
import "./Word.css";

export function Word({  
    enterWord,
    wordColors,
    word
}) {
    if (word) {
        return (
            <div className="word">
                {word.split("").map((letter, i) => {
                    return( 
                        <div 
                            key={i} 
                            className={`letter ${wordColors[i]}`}>
                            {letter}
                        </div>
                        )
                })}
            </div>
        )
    }

    if (enterWord) {
        let letters = enterWord.split('');

        function makeCells() {
            const cells = Array(5).fill(<div className="letter"></div>);

            if (letters.length > 0) {
                letters.forEach((letter, i) => {
                    cells[i] = <div className="letter">{letter}</div>
                })
            }

            return cells;
        }
        return (
            <div className="word">
                {makeCells()}
            </div>
        )
    }
    return(
        <div className="word">
            <div className="letter"></div>
            <div className="letter"></div>
            <div className="letter"></div>
            <div className="letter"></div>
            <div className="letter"></div>
        </div>
    )
}