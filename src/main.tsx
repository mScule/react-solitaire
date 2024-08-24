import "./main.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StoreProvider } from "react-redux";

import store from "./store";

import Game from "./views/Game";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StoreProvider store={store}>
      <Game />
    </StoreProvider>
  </StrictMode>
);
