import React from "react";
import "./Keyboard.css";
import { Key } from "./Key/Key";

export function Keyboard({onLetterPress}) {
    const firstKeyLine = ["Q", "W", "E", "T", "Y", "U", "I", "O", "P"];
    const secondKeyLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdKeyLine = ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "x"];
    return(
        <div className="keyboard">
            <div className="firstKeyLine">
                {firstKeyLine.map(key => {
                    return <button className="key" onClick={() => onLetterPress(key)}>{key}</button>
                })}
            </div>
            <div className="secondKeyLine">
                {secondKeyLine.map(key => {
                    return <button className="key" onClick={() => onLetterPress(key)}>{key}</button>
                })}
            </div>
            <div className="thirdKeyLine">
                {thirdKeyLine.map(key => {
                    return <button className="key" onClick={() => onLetterPress(key)}>{key}</button>
                })}
            </div>
        </div>
    );
}