import { createSlice } from "@reduxjs/toolkit";

import createDeck from "../../functions/createDeck";
import shuffleDeck from "../../functions/shuffleDeck";
import range from "../../functions/range";

import defaultGameState from "../../defaults/defaultGameState";

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
      const remaining = shuffled.slice();

      state.foundations = foundations;
      state.stock = remaining;
      state.talon = talon;
      state.tableau = tableau;
    },
  },
});

export const { dealCards } = gameSlice.actions;

export default gameSlice.reducer;
