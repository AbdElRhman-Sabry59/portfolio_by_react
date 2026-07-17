import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/portfolio_by_react/">
      <App />
    </BrowserRouter>
  </StrictMode>,
);
