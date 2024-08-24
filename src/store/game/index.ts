import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import createDeck from "../../functions/createDeck";
import shuffleDeck from "../../functions/shuffleDeck";
import getCardSelection from "../../functions/getCardSelection";
import canBeOnTopOfTableauPile from "../../functions/canBeOnTopOfTableauPile";
import canBeOnTopOfFoundationPile from "../../functions/canBeOnTopOfFoundationPile";
import range from "../../functions/range";
import lastOf from "../../functions/lastOf";

import defaultGameState from "../../defaults/defaultGameState";

import CardSelection from "../../types/CardOrigin";
import isEmpty from "../../functions/isEmpty";
import Suit from "../../types/Suit";

export const gameSlice = createSlice({
  name: "game",
  initialState: defaultGameState(),
  reducers: {
    dealCards: (state) => {
      const { foundations, talon, tableau } = defaultGameState();

      const deck = createDeck();
      const shuffled = shuffleDeck(deck);

      // Deal cards to tableau piles
      range(7).forEach((deal) => {
        tableau.forEach((pile, index) => {
          if (deal == 0) {
            pile.up.push(shuffled.pop()!);
          } else if (index >= deal) {
            pile.down.push(shuffled.pop()!);
          }
        });
      });

      // Remaining cards to stock
      const remaining = shuffled;

      state.foundations = foundations;
      state.stock = remaining;
      state.talon = talon;
      state.tableau = tableau;
    },
    moveCardsToTableauPile: (
      state,
      action: PayloadAction<{
        selection: CardSelection;
        targetPileIndex: number;
      }>
    ) => {
      const { selection, targetPileIndex } = action.payload;

      const [selected, removeSelected] = getCardSelection(state, selection);
      const targetPile = state.tableau[targetPileIndex];

      const isKing = selected.rank === 13;
      const noDownFacingCards = isEmpty(targetPile.down);
      const noUpFacingCards = isEmpty(targetPile.up);
      const isTargetPileEmpty = noDownFacingCards && noUpFacingCards;

      const kingCanBePlaced = isKing && isTargetPileEmpty;
      const othersCanBePlaced =
        !isTargetPileEmpty &&
        canBeOnTopOfTableauPile(selected, lastOf(targetPile.up));

      const canBePlaced = kingCanBePlaced || othersCanBePlaced;

      if (canBePlaced) {
        targetPile.up.push(...removeSelected());
      }
    },
    moveCardToFoundationPile: (
      state,
      action: PayloadAction<{ selection: CardSelection; targetSuit: Suit }>
    ) => {
      const { selection, targetSuit } = action.payload;

      const [selected, removeSelected] = getCardSelection(state, selection);
      const targetPile = state.foundations[targetSuit];

      const isAce = selected.rank === 1;
      const isTargetSuit = selected.suit === targetSuit;
      const isTargetPileEmpty = isEmpty(targetPile);

      const aceCanBePlaced = isAce && isTargetSuit && isTargetPileEmpty;
      const othersCanBePlaced =
        !isTargetPileEmpty &&
        canBeOnTopOfFoundationPile(selected, lastOf(targetPile));

      const canBePlaced = aceCanBePlaced || othersCanBePlaced;

      if (canBePlaced) {
        targetPile.push(...removeSelected());
      }
    },
    moveCardFromStockToTalonPile: (state) => {
      if (isEmpty(state.stock)) {
        state.stock = state.talon.slice().reverse();
        state.talon = [];
      } else {
        state.talon.push(state.stock.pop()!);
      }
    },

    revealDownFacingCard: (state, action: PayloadAction<{ from: number }>) => {
      const { from } = action.payload;
      const card = state.tableau[from].down.pop()!;
      state.tableau[from].up.push(card);
    },
  },
});

export const {
  dealCards,
  moveCardsToTableauPile,
  moveCardToFoundationPile,
  moveCardFromStockToTalonPile,
  revealDownFacingCard,
} = gameSlice.actions;

export default gameSlice.reducer;
