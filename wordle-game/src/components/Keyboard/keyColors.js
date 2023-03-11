import { makeColor } from "../../makeColor";

export const keyColors = (words, hiddenWord) => {
    let lettersWithColors = {};

    words.forEach( (word) => {
        let colors = makeColor(word, hiddenWord);
        word.split("").forEach((letter, i) => {
            if (!lettersWithColors[letter] || colors[i] === "green") {
                lettersWithColors[letter] = colors[i];
            }
        })
    })
    return lettersWithColors;
} 