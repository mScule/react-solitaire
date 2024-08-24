import Card from "../types/Card";

/**
 * Checks wether a can be on top of b
 */
export default function canBeOnTopOfFoundationPile(a: Card, b: Card): boolean {
  const isOneLarger = a.rank - 1 === b.rank;
  const isSameSuit = a.suit === b.suit;

  return isOneLarger && isSameSuit;
}
