import { makeColor } from "./makeColor";

it("word = 'abcde', hiddenWord = 'acxyz'", () => {
  expect(makeColor("abcde", "acxyz")).toEqual([
    "green",
    "grey",
    "yellow",
    "grey",
    "grey",
  ])
})