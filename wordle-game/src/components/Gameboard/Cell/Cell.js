import React from "react";
import "./Cell.css";

export function Cell({words, columnPos, rowPos}) {
    const letter = words[rowPos][columnPos];
    return(
        <a className="letter">{letter}</a>
    )
}