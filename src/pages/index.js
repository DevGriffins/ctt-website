// Route table: each page is its own chunk and is loaded on demand.
// nav: which header dropdown the page belongs to (for the active state).
export const routes = {
  "/": { load: () => import("./Home.jsx"), nav: null },
  "/talent-as-a-service": { load: () => import("./TalentAsAService.jsx"), nav: null },
  "/specialisms/ai": { load: () => import("./SpecialismAI.jsx"), nav: "spec" },
  "/specialisms/data": { load: () => import("./SpecialismData.jsx"), nav: "spec" },
  "/specialisms/deep-tech": { load: () => import("./SpecialismDeepTech.jsx"), nav: "spec" },
  "/specialisms/robotics": { load: () => import("./SpecialismRobotics.jsx"), nav: "spec" },
  "/how-we-work": { load: () => import("./HowWeWork.jsx"), nav: null },
  "/case-studies": { load: () => import("./CaseStudies.jsx"), nav: null },
  "/insights": { load: () => import("./Insights.jsx"), nav: null },
  "/insights/article": { load: () => import("./InsightArticle.jsx"), nav: null },
  "/about": { load: () => import("./About.jsx"), nav: null },
  "/join": { load: () => import("./Join.jsx"), nav: "talent" },
  "/open-roles": { load: () => import("./OpenRoles.jsx"), nav: "talent" },
  "/open-roles/role": { load: () => import("./JobDetail.jsx"), nav: "talent" },
  "/contact": { load: () => import("./Contact.jsx"), nav: null },
  "/singapore": { load: () => import("./Singapore.jsx"), nav: null },
  "/australia": { load: () => import("./Australia.jsx"), nav: null },
  "/united-states": { load: () => import("./UnitedStates.jsx"), nav: null },
  "/privacy-policy": { load: () => import("./PrivacyPolicy.jsx"), nav: null },
};

const cache = new Map();

/** The loaded page module ({ Desktop, Mobile }) or undefined if it has not been loaded yet. */
export const getPage = (path) => cache.get(path);

export async function loadPage(path) {
  if (!routes[path]) return null;
  if (!cache.has(path)) cache.set(path, await routes[path].load());
  return cache.get(path);
}

export const loadAllPages = () => Promise.all(Object.keys(routes).map(loadPage));
