import React from "react";
import "./Word.css";

export function Word({ 
    word, 
    enterWord 
}) {
    if (word) {
        return (
            <div className="word">
                {word.map((letter, i) => {
                    return( 
                        <div 
                            key={i} 
                            className={`letter ${letter.color}`}>
                            {letter.key}
                        </div>
                        )
                })}
            </div>
        )
    }

    if (enterWord) {
        let letters = enterWord.split('');
        return (
            <div className="word">
                {letters.map((letter, i) => {
                    return (<div 
                                key={i} 
                                className="letter">
                                {letter}
                            </div>)
                })}
                {[...Array(5-letters.length)].map((_, i) => {
                    return (<div 
                                key={i} 
                                className="letter">
                            </div>)
                })}
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