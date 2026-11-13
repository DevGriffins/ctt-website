import { useEffect, useReducer, useRef } from "react";
import { useLocation } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import { routes, getPage, loadPage } from "./pages/index.js";
import * as NotFound from "./pages/NotFound.jsx";
import { normalizePath } from "./seo.js";

export default function App() {
  const path = normalizePath(useLocation().pathname);
  const [, refresh] = useReducer((n) => n + 1, 0);
  const shown = useRef(path);

  // Pages are separate chunks. Until the next one has loaded, the current page stays on screen.
  const ready = !routes[path] || Boolean(getPage(path));
  useEffect(() => {
    if (ready) return;
    let live = true;
    loadPage(path).then(() => live && refresh());
    return () => {
      live = false;
    };
  }, [path, ready]);

  if (ready) shown.current = path;
  const current = shown.current;
  const page = routes[current] ? getPage(current) : NotFound;

  // key: a new page mounts fresh, so open accordions and form state never leak between routes
  return <Layout key={current} page={page} activeNav={routes[current]?.nav ?? null} path={current} />;
}
