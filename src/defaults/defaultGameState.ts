import GameState from "../types/GameState";

const defaultGameState = (): GameState => ({
  foundations: {
    clubs: [],
    diamonds: [],
    hearts: [],
    spades: [],
  },
  stock: [],
  talon: [],
  tableau: [
    { up: [], down: [] },
    { up: [], down: [] },
    { up: [], down: [] },
    { up: [], down: [] },
    { up: [], down: [] },
    { up: [], down: [] },
    { up: [], down: [] },
  ],
});

export default defaultGameState;
