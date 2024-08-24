import Card from "../types/Card";
import CardOrigin from "../types/CardOrigin";
import GameState from "../types/GameState";

import lastIndexOf from "./lastIndexOf";
import lastOf from "./lastOf";

export default function getCardSelection(
  state: GameState,
  origin: CardOrigin
): [Card, () => Card[]] {
  switch (origin.location) {
    case "foundations": {
      const foundation = state.foundations[origin.suit];
      const card = lastOf(foundation);
      const remove = () => foundation.splice(lastIndexOf(foundation));
      return [card, remove];
    }
    case "tableau": {
      const pile = state.tableau[origin.pileIndex].up;
      const card = pile[origin.cardIndex];
      const remove = () => pile.splice(origin.cardIndex);
      return [card, remove];
    }
    case "talon": {
      const talon = state.talon;
      const card = lastOf(talon);
      const remove = () => talon.splice(lastIndexOf(talon));
      return [card, remove];
    }
  }
}
