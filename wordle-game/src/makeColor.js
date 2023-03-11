export function makeColor(word, hiddenWord) {
    let hiddenLetters = [...hiddenWord];
    let colors = [...Array(5)];

    word.split("").forEach((letter, i) => {
      if (hiddenLetters[i] === letter) {
        colors[i] = "green";
        hiddenLetters[i] = null;
      } else if (hiddenLetters.includes(letter)) {
        colors[i] = "yellow";
        hiddenLetters[hiddenLetters.indexOf(letter)] = null;
      } else {
        colors[i] = "grey";
      }
    })
    return colors;
  };