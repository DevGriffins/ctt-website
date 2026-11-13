// Turns the client build into static HTML: one index.html per route, plus 404.html, sitemap.xml and robots.txt.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const server = await import(pathToFileURL(path.join(root, "dist-server", "entry-server.js")).href);
const template = fs.readFileSync(path.join(dist, "index.html"), "utf8");

const page = (route) => {
  const { html, head } = server.render(route);
  let out = template.replace(/<!--app-head-->[\s\S]*?<!--\/app-head-->/, head).replace("<!--app-html-->", html);
  if (server.site.accent.default !== "blue") out = out.replace(' data-accent="blue"', "");
  return out;
};

for (const route of server.paths) {
  const file = route === "/" ? path.join(dist, "index.html") : path.join(dist, route, "index.html");
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, page(route));
}
fs.writeFileSync(path.join(dist, "404.html"), page("/404"));

const today = new Date().toISOString().slice(0, 10);
const urls = server.sitemapPaths.map((p) => `  <url><loc>${server.absoluteUrl(p)}</loc><lastmod>${today}</lastmod></url>`).join("\n");
fs.writeFileSync(
  path.join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
);

const base = server.site.url.replace(/\/$/, "");
fs.writeFileSync(
  path.join(dist, "robots.txt"),
  server.site.allowIndexing
    ? `User-agent: *\nAllow: /\n\nSitemap: ${base}/sitemap.xml\n`
    : `# Staging build: indexing is off (site.config.js > allowIndexing)\nUser-agent: *\nDisallow: /\n`,
);

fs.rmSync(path.join(root, "dist-server"), { recursive: true, force: true });
console.log(`Prerendered ${server.paths.length} pages + 404, sitemap.xml and robots.txt`);
