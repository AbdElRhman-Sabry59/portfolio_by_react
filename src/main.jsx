import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio_by_react/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
