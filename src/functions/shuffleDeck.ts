import Card from "../types/Card";

export default function shuffleDeck(deck: Card[]) {
  return deck
    .map((card) => ({ card, order: Math.random() }))
    .sort((a, b) => a.order - b.order)
    .map(({ card }) => card);
}
