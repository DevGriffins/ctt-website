import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App.jsx";
import { meta, sitemapPaths, absoluteUrl, headToString } from "./seo.js";
import { site } from "./site.config.js";
import { loadAllPages } from "./pages/index.js";

// every page module is needed up front for prerendering
await loadAllPages();

export const paths = Object.keys(meta);
export { sitemapPaths, absoluteUrl, site };

export function render(path) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={path} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </StaticRouter>
    </StrictMode>,
  );
  return { html, head: headToString(path) };
}
