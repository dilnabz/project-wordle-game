import React, {useEffect} from "react";
import "./Keyboard.css";
import { keyColors } from "./keyColors";

export function Keyboard({
    onKeyPress,
    hiddenWord,
    onEnterPress,
    onBackspacePress,
    tryWords
}) {
    const firstKeyLine = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
    const secondKeyLine = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
    const thirdKeyLine = ["Z", "X", "C", "V", "B", "N", "M"];
    
    useEffect(() =>{
        document.addEventListener("keydown", handleKeyDown);
        function handleKeyDown(event) {
            if(event.key === "Backspace") {
                onBackspacePress();
            }
            if(event.key >= "a" && event.key <= "z" && event.key.length === 1) {
                onKeyPress(event.key.toUpperCase());
            }
            if(event.key === "Enter") {
                onEnterPress();
            }
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        }
    }, []);

    let lettersWithColors = {};
    if (tryWords.length > 0) {
        lettersWithColors = keyColors(tryWords, hiddenWord);
    }
    return(
        <div className="keyboard">
            <div className="firstKeyLine">
                {firstKeyLine.map((key, i) => {

                    return <button 
                                key={i} 
                                className={`key ${lettersWithColors[key]}`} 
                                onClick={() => onKeyPress(key)}>
                                {key}
                            </button>
                })}
            </div>
            <div className="secondKeyLine">
                {secondKeyLine.map((key, i) => {
                    return <button 
                                key={i} 
                                className={`key ${lettersWithColors[key]}`} 
                                onClick={() => onKeyPress(key)}>
                                {key}
                            </button>
                })}
            </div>
            <div className="thirdKeyLine">
                {<button className="enter" onClick={onEnterPress}>ENTER</button>}
                {/* {<button className="ENTER" onClick={() => onEnterPress()}>ENTER</button>} */}
                {thirdKeyLine.map((key, i) => {
                    return <button 
                                key={i} 
                                className={`key ${lettersWithColors[key]}`} 
                                onClick={() => onKeyPress(key)}>
                                {key}
                            </button>
                })}
                {<button className="enter" onClick={onBackspacePress}>DELETE</button>}
            </div>
        </div>
    );
}