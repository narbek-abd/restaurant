import React from "react";
import App from "Src/App";

import { createRoot } from "react-dom/client";
import { store } from "./store";
import { Provider } from "react-redux";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
