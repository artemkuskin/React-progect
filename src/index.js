import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from './app';


let container = null;

document.addEventListener('DOMContentLoaded', function(event) {
  if (!container) {
    const rootElement = document.getElementById("root");
    const root = createRoot(rootElement);
root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
})

const devMode = process.env.NODE_ENV === 'development';
if (devMode && module && module.hot) {
    module.hot.accept();
}