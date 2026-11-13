import { useEffect } from "react";

const YELLOW = "#DFE21B";
const INK = "#201F1E";

function closeMenu() {
  const menu = document.getElementById("menu");
  if (menu) menu.hidden = true;
  document.body.style.overflow = "";
}

function closeDropdowns(except) {
  document.querySelectorAll("[data-dd-btn]").forEach((b) => {
    if (b === except) return;
    b.setAttribute("aria-expanded", "false");
    const p = document.querySelector(`.v-desk [data-dd="${b.getAttribute("data-dd-btn")}"]`);
    if (p) p.hidden = true;
  });
}

function onClick(e) {
  const t = e.target;

  // mobile menu
  if (t.closest("[data-open-menu]")) {
    e.preventDefault();
    const menu = document.getElementById("menu");
    menu.hidden = false;
    document.body.style.overflow = "hidden";
    menu.querySelector("[data-close-menu]")?.focus();
    return;
  }
  if (t.closest("[data-close-menu]")) {
    e.preventDefault();
    closeMenu();
    return;
  }
  const group = t.closest(".menu-overlay button[aria-expanded]");
  if (group) {
    const open = group.getAttribute("aria-expanded") === "true";
    group.setAttribute("aria-expanded", String(!open));
    if (group.nextElementSibling) group.nextElementSibling.hidden = open;
    return;
  }

  // desktop dropdowns
  const dd = t.closest("[data-dd-btn]");
  closeDropdowns(dd);
  if (dd) {
    const open = dd.getAttribute("aria-expanded") === "true";
    dd.setAttribute("aria-expanded", String(!open));
    const p = document.querySelector(`.v-desk [data-dd="${dd.getAttribute("data-dd-btn")}"]`);
    if (p) p.hidden = open;
    return;
  }

  // FAQ accordions
  const q = t.closest("h3 > button[aria-expanded]");
  if (q) {
    const open = q.getAttribute("aria-expanded") === "true";
    q.setAttribute("aria-expanded", String(!open));
    const icon = q.querySelector("svg");
    if (icon) icon.style.transform = open ? "none" : "rotate(180deg)";
    const answer = q.parentElement.nextElementSibling;
    if (answer) answer.hidden = open;
    return;
  }

  // filter buttons (Open Roles, Insights)
  const f = t.closest("[role=group] button[aria-pressed]");
  if (f) {
    f.parentElement.querySelectorAll("button[aria-pressed]").forEach((b) => {
      const on = b === f;
      b.setAttribute("aria-pressed", String(on));
      b.style.background = on ? YELLOW : "transparent";
      b.style.color = on ? INK : "#FFFFFF";
      b.style.borderColor = on ? YELLOW : "#4E4748";
    });
    return;
  }

  // skip link: move focus to the main region that is visible at this width
  if (t.closest(".skip-link")) {
    e.preventDefault();
    const main = [...document.querySelectorAll("main")].find((m) => m.offsetParent !== null);
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus();
    }
    return;
  }

  // placeholder links
  const a = t.closest('a[href="#"]');
  if (a) e.preventDefault();
}

function onChange(e) {
  const i = e.target;
  if (!i.matches || !i.matches(".chip input")) return;
  const group = i.type === "radio" ? document.querySelectorAll(`input[name="${i.name}"]`) : [i];
  group.forEach((x) => {
    const l = x.closest(".chip");
    if (!l) return;
    l.style.background = x.checked ? YELLOW : "transparent";
    l.style.color = x.checked ? INK : "#FFFFFF";
    l.style.borderColor = x.checked ? YELLOW : "#8A8380";
  });
}

function onSubmit(e) {
  // TODO (integration stage): send to HubSpot / the ATS instead of this notice.
  e.preventDefault();
  window.alert("Thanks. Form submission is not connected yet.");
}

function onKeydown(e) {
  if (e.key !== "Escape") return;
  closeMenu();
  closeDropdowns();
}

/**
 * Small interactions shared by every page (menu, dropdowns, accordions, filters, forms),
 * handled with event delegation so page markup stays plain.
 */
export function useSiteBehaviors(path) {
  useEffect(() => {
    document.addEventListener("click", onClick);
    document.addEventListener("change", onChange);
    document.addEventListener("submit", onSubmit);
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("click", onClick);
      document.removeEventListener("change", onChange);
      document.removeEventListener("submit", onSubmit);
      document.removeEventListener("keydown", onKeydown);
    };
  }, []);

  // on every navigation: close overlays and move to the top (or to the #hash target)
  useEffect(() => {
    closeMenu();
    closeDropdowns();
    document.querySelectorAll('.menu-overlay button[aria-expanded="true"]').forEach((b) => {
      b.setAttribute("aria-expanded", "false");
      if (b.nextElementSibling) b.nextElementSibling.hidden = true;
    });
    const id = window.location.hash.slice(1);
    const target = id && document.getElementById(id);
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [path]);
}
