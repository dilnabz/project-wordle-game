import React from "react";
import "./Gameboard.css";
import { Cell } from "./Cell/Cell";

export function Gameboard() {
    const words = [
        ["W", "O", "R", "D", "S"],
        ["A", "P", "P", "L", "E"],
        ["M", "A", "G", "I", "C"],
        ["S", "A", "L", "S", "A"],
        ["J", "U", "I", "C", "E"],
        ["R", "E", "A", "C", "T"]
    ]
    return(
        <div className="gameBoard">
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={0} />
                <Cell words={words} columnPos={1} rowPos={0} />
                <Cell words={words} columnPos={2} rowPos={0} />
                <Cell words={words} columnPos={3} rowPos={0} />
                <Cell words={words} columnPos={4} rowPos={0} />
            </div>
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={1} />
                <Cell words={words} columnPos={1} rowPos={1} />
                <Cell words={words} columnPos={2} rowPos={1} />
                <Cell words={words} columnPos={3} rowPos={1} />
                <Cell words={words} columnPos={4} rowPos={1} />
            </div>
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={2} />
                <Cell words={words} columnPos={1} rowPos={2} />
                <Cell words={words} columnPos={2} rowPos={2} />
                <Cell words={words} columnPos={3} rowPos={2} />
                <Cell words={words} columnPos={4} rowPos={2} />
            </div>
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={3} />
                <Cell words={words} columnPos={1} rowPos={3} />
                <Cell words={words} columnPos={2} rowPos={3} />
                <Cell words={words} columnPos={3} rowPos={3} />
                <Cell words={words} columnPos={4} rowPos={3} />
            </div>
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={4} />
                <Cell words={words} columnPos={1} rowPos={4} />
                <Cell words={words} columnPos={2} rowPos={4} />
                <Cell words={words} columnPos={3} rowPos={4} />
                <Cell words={words} columnPos={4} rowPos={4} />
            </div>
            <div className="word">
                <Cell words={words} columnPos={0} rowPos={5} />
                <Cell words={words} columnPos={1} rowPos={5} />
                <Cell words={words} columnPos={2} rowPos={5} />
                <Cell words={words} columnPos={3} rowPos={5} />
                <Cell words={words} columnPos={4} rowPos={5} />
            </div>
        </div>
    )
    // return(
    //     <div className="gameboard">
    //         {words.map(word => {
    //             return <div className="word">{word.map(letter => {
    //                 return <a className="letter">{letter}</a>
    //             })}</div>
    //         })}
    //     </div>
    // );
}