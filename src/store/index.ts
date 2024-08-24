import { configureStore } from "@reduxjs/toolkit";

import gameSliceReducer from "./game";

const store = configureStore({
  reducer: {
    game: gameSliceReducer
  },
});

export default store;
