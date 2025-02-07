import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { ErrorBoundary } from "./components/index.tsx";
import { BrowserRouter } from "react-router";
import "./index.css";
import "./assets/scss/main.css";

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("No rootElement in main.tsx");

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>,
);
