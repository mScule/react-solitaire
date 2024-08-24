import Card from "../types/Card";
import Rank from "../types/Rank";
import Suit from "../types/Suit";

import range from "./range";

export default function createDeck() {
  const deck: Card[] = [];
  const suits: Suit[] = ["clubs", "diamonds", "hearts", "spades"];

  for (const suit of suits) {
    for (const rank of range(13, { from: 1 })) {
      deck.push({ suit, rank: rank as Rank });
    }
  }

  return deck;
}
