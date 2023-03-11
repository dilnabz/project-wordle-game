import {keyColors} from "./keyColors";

it("wor", () => {
    expect(keyColors(["abc", "cde", "xyz"], "ade")).toEqual({
        "a":"green",
        "b": "grey",
        "c": "grey",
        "d": "green",
        "e": "green",
        "x": "grey",
        "y": "grey",
        "z": "grey",
    })
})

it("word with the same letters", () => {
  expect(keyColors(["cde", "abc"], "aeb")).toEqual({
      "a":"green",
      "b": "yellow",
      "c": "grey",
      "d": "grey",
      "e": "yellow",
  })
})