import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/700.css";
import "./styles/site.css";
import "./styles/accent.css";
import App from "./App.jsx";
import { loadPage, loadAllPages } from "./pages/index.js";
import { normalizePath } from "./seo.js";

const root = document.getElementById("root");
const app = (
  <StrictMode>
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// Load the chunk for the page we landed on first, so hydration matches the prerendered HTML.
await loadPage(normalizePath(window.location.pathname));

// Production pages are prerendered, so hydrate them; in dev the root is empty.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);

// Fetch the other pages when the browser is idle, so navigation is instant.
(window.requestIdleCallback ?? ((cb) => setTimeout(cb, 1500)))(() => loadAllPages());
