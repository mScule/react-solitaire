import Card from "./Card";
import Face from "./Face";
import Suit from "./Suit";

type GameState = {
  foundations: Record<Suit, Card[]>;
  stock: Card[];
  talon: Card[];
  tableau: [
    Record<Face, Card[]>, // 1
    Record<Face, Card[]>, // 2
    Record<Face, Card[]>, // 3
    Record<Face, Card[]>, // 4
    Record<Face, Card[]>, // 5
    Record<Face, Card[]>, // 6
    Record<Face, Card[]>, // 7
  ];
};

export default GameState;
