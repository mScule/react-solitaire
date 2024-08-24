import Card from "../types/Card";
import suitToColor from "./suitToColor";

/**
 * Checks wether a can be on top of b
 */
export default function canBeOnTopOfTableauPile(a: Card, b: Card): boolean {
  const isOneSmaller = a.rank + 1 === b.rank;
  const isDifferentColor = suitToColor(a.suit) !== suitToColor(b.suit);

  return isOneSmaller && isDifferentColor;
}
