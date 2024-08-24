import Color from "../types/Color";
import Suit from "../types/Suit";

export default function suitToColor(suit: Suit): Color {
  switch (suit) {
    case "spades":
    case "clubs":
      return "black";
    case "hearts":
    case "diamonds":
      return "red";
  }
}
