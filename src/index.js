import { createRoot } from "react-dom/client";
import React from "react";
import ReduxToastr from "react-redux-toastr";
import App from "./app";
import { Provider } from "react-redux";
import { setupStore } from "./Store/mainStore";
import "react-redux-toastr/src/styles/index";

import "./styles.scss";

let container = null;

const store = setupStore();
document.addEventListener("DOMContentLoaded", function (event) {
  if (!container) {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
    root.render(
      <Provider store={store}>
        <App />
        <ReduxToastr />
      </Provider>
    );
  }
});

const devMode = process.env.NODE_ENV === "development";
if (devMode && module && module.hot) {
  module.hot.accept();
}
