import { site } from "./site.config.js";

// Title and description for every route. Titles stay under ~60 characters, descriptions under ~160.
export const meta = {
  "/": {
    title: "AI, Data & Robotics Recruitment | Celotti Tech Talent",
    description:
      "Talent partner for AI-driven startups and scale-ups across APAC and the US. Specialist AI, Data, Deep Tech and Robotics hiring with transparent pricing.",
    crumb: "Home",
  },
  "/talent-as-a-service": {
    title: "Talent as a Service: Transparent Recruitment Pricing | CTT",
    description:
      "Compare Celotti Tech Talent's engagement models with published pricing: Fixed Fee, Fixed Fee Search, Exclusive Search and Retained Search partnerships.",
    crumb: "Talent as a Service",
  },
  "/specialisms/ai": {
    title: "AI Recruitment: LLM, ML & MLOps Talent | Celotti Tech Talent",
    description:
      "Specialist AI recruitment, from Chief AI Officers to LLM, ML and MLOps engineers, for startups and scale-ups across APAC and the US.",
    crumb: "AI Talent",
  },
  "/specialisms/data": {
    title: "Data Recruitment: Data Engineering & Analytics | CTT",
    description:
      "Specialist data recruitment, from Chief Data Officers to data engineers, scientists, analytics and governance leads, for startups and scale-ups across APAC.",
    crumb: "Data Talent",
  },
  "/specialisms/deep-tech": {
    title: "Deep Tech Recruitment: Quantum to Climate Tech | CTT",
    description:
      "Specialist deep tech recruitment across quantum, semiconductors, photonics, space and climate tech, for startups and scale-ups across APAC and the US.",
    crumb: "Deep Tech Talent",
  },
  "/specialisms/robotics": {
    title: "Robotics Recruitment: Autonomy & Controls | CTT",
    description:
      "Specialist robotics recruitment, from robotics and autonomy engineers to controls, embedded and computer vision specialists, across APAC and the US.",
    crumb: "Robotics Talent",
  },
  "/how-we-work": {
    title: "How We Work: AI-Powered, Human-Led Recruitment | CTT",
    description:
      "Our four-step process: discovery and alignment, talent mapping, precision shortlisting, and partnership and delivery. AI does the heavy lifting, specialists lead.",
    crumb: "How We Work",
  },
  "/case-studies": {
    title: "Case Studies | Celotti Tech Talent",
    description: "How Celotti Tech Talent has partnered with AI, data and robotics companies to build specialist teams.",
    crumb: "Case Studies",
  },
  "/insights": {
    title: "Insights: AI Talent and the Future of Work | Celotti Tech Talent",
    description: "Perspectives on hiring and retaining AI, data, deep tech and robotics talent from the Celotti Tech Talent team.",
    crumb: "Insights",
  },
  "/insights/article": {
    title: "Insight article | Celotti Tech Talent",
    description: "Insight article template. Title and description come from the CMS.",
    crumb: "Article",
    template: true,
  },
  "/about": {
    title: "About Celotti Tech Talent | Part of Celotti Group",
    description:
      "Celotti Tech Talent is the technology recruitment company of Celotti Group: Australian-backed, based in Singapore, partnering across APAC and the US.",
    crumb: "About",
  },
  "/join": {
    title: "Join the Talent Community | Celotti Tech Talent",
    description: "Register with Celotti Tech Talent to hear about AI, data, deep tech and robotics roles that match your experience.",
    crumb: "Join the Talent Community",
  },
  "/open-roles": {
    title: "Open Roles in AI, Data & Robotics | Celotti Tech Talent",
    description: "Current AI, data, deep tech and robotics roles with startups and scale-ups across APAC and the US.",
    crumb: "Open Roles",
  },
  "/open-roles/role": {
    title: "Job detail | Celotti Tech Talent",
    description: "Job detail template. Title and description come from the job record.",
    crumb: "Role",
    template: true,
  },
  "/contact": {
    title: "Book a Consultation | Celotti Tech Talent",
    description: "Book a consultation or send an enquiry to Celotti Tech Talent about building your AI, data or robotics team.",
    crumb: "Book a consultation",
  },
  "/singapore": {
    title: "AI & Tech Recruitment in Singapore | Celotti Tech Talent",
    description: "Specialist AI, Data, Deep Tech and Robotics hiring for companies building in Singapore.",
    crumb: "Singapore",
  },
  "/australia": {
    title: "AI & Tech Recruitment in Australia | Celotti Tech Talent",
    description: "Australian-backed specialist recruitment for AI, Data, Deep Tech and Robotics teams.",
    crumb: "Australia",
  },
  "/united-states": {
    title: "AI & Tech Recruitment in the United States | Celotti Tech Talent",
    description: "Specialist AI, Data, Deep Tech and Robotics hiring for startups building in California.",
    crumb: "United States",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Celotti Tech Talent",
    description: "How Celotti Tech Talent collects, uses and protects personal data.",
    crumb: "Privacy Policy",
  },
};

export const notFoundMeta = {
  title: "Page not found | Celotti Tech Talent",
  description: "The page you are looking for could not be found.",
  noindex: true,
};

export function normalizePath(pathname) {
  const p = pathname.replace(/\/+$/, "");
  return p === "" ? "/" : p;
}

export function absoluteUrl(path) {
  const p = path === "/" ? "/" : site.trailingSlash ? `${path}/` : path;
  return site.url.replace(/\/$/, "") + p;
}

// Routes that belong in sitemap.xml (template pages are left out until they are backed by real content).
export const sitemapPaths = Object.keys(meta).filter((p) => !meta[p].template);

/** Everything that belongs in <head> for a route, as plain data. Used by the prerender step and on the client. */
export function buildHead(pathname) {
  const path = normalizePath(pathname);
  const m = meta[path] ?? notFoundMeta;
  const known = Boolean(meta[path]);
  const url = known ? absoluteUrl(path) : null;
  const image = site.url.replace(/\/$/, "") + "/og-image.png";
  const index = site.allowIndexing && !m.noindex && !m.template;

  const metas = [
    { name: "description", content: m.description },
    { name: "robots", content: index ? "index, follow" : "noindex, nofollow" },
    { property: "og:site_name", content: site.name },
    { property: "og:type", content: "website" },
    { property: "og:title", content: m.title },
    { property: "og:description", content: m.description },
    { property: "og:image", content: image },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: m.title },
    { name: "twitter:description", content: m.description },
    { name: "twitter:image", content: image },
  ];
  if (url) metas.push({ property: "og:url", content: url });

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: site.url.replace(/\/$/, "") + "/assets/ctt-logo.svg",
      email: site.email,
      address: { "@type": "PostalAddress", ...site.address },
      parentOrganization: { "@type": "Organization", name: "Celotti Group" },
    },
  ];
  if (path === "/") {
    jsonLd.push({ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url });
  } else if (known) {
    const trail = [{ name: "Home", path: "/" }];
    const parent = path.split("/").slice(0, -1).join("/");
    if (parent && meta[parent]) trail.push({ name: meta[parent].crumb, path: parent });
    trail.push({ name: m.crumb, path });
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: absoluteUrl(t.path) })),
    });
  }

  return { title: m.title, metas, canonical: url, jsonLd };
}

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** <head> markup for the prerendered HTML. */
export function headToString(pathname) {
  const h = buildHead(pathname);
  const out = [`<title>${esc(h.title)}</title>`];
  for (const m of h.metas) {
    const key = m.name ? `name="${m.name}"` : `property="${m.property}"`;
    out.push(`<meta ${key} content="${esc(m.content)}" data-seo />`);
  }
  if (h.canonical) out.push(`<link rel="canonical" href="${esc(h.canonical)}" data-seo />`);
  for (const j of h.jsonLd) out.push(`<script type="application/ld+json" data-seo>${JSON.stringify(j).replace(/</g, "\\u003c")}</script>`);
  return out.join("\n    ");
}

/** Keeps <head> in sync on client-side navigation. */
export function applyHead(pathname) {
  const h = buildHead(pathname);
  document.title = h.title;
  document.head.querySelectorAll("[data-seo]").forEach((n) => n.remove());
  const add = (tag, attrs, text) => {
    const el = document.createElement(tag);
    Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
    el.setAttribute("data-seo", "");
    if (text) el.textContent = text;
    document.head.appendChild(el);
  };
  h.metas.forEach((m) => add("meta", m));
  if (h.canonical) add("link", { rel: "canonical", href: h.canonical });
  h.jsonLd.forEach((j) => add("script", { type: "application/ld+json" }, JSON.stringify(j)));
}
