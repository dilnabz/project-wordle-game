import React from "react";
import "./Word.css";

export function Word({word}) {
    const letters = word.split("");
    return(
        <div className="word">{letters.map(letter => {
            return <a className="letter">{letter}</a>
        })}</div>
    )
}