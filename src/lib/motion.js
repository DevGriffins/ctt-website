import { useEffect } from "react";

/*
  Site-wide motion, added on top of the prerendered markup after each navigation:
  - animated node network behind page heroes (.ax-glow), closing CTAs (.ax-glow-b) and the dotted decorative panels
  - scroll reveal with stagger for headings, cards and grid items
  - count-up for large figures (10%, 2013 ...)
  - pointer-follow highlight on cards, scroll progress bar
  Everything is skipped when the visitor prefers reduced motion (the node network then draws one still frame).
*/

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isBlue = () => document.documentElement.getAttribute("data-accent") === "blue";

/* ---------- node network ---------- */

function nodeField(host, variant) {
  if (host.querySelector(":scope > .nodes")) return null;
  const cs = getComputedStyle(host);
  if (cs.position === "static") host.style.position = "relative";
  host.style.isolation = "isolate";

  const canvas = document.createElement("canvas");
  canvas.className = `nodes nodes-${variant}`;
  canvas.setAttribute("aria-hidden", "true");
  host.appendChild(canvas);
  const ctx = canvas.getContext("2d");

  let w = 0, h = 0, dpr = 1, nodes = [], raf = 0, visible = false, t0 = performance.now();
  const pointer = { x: -9999, y: -9999 };

  function seed() {
    const r = canvas.getBoundingClientRect();
    w = r.width; h = r.height;
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const density = variant === "panel" ? 5200 : 9000;
    const n = Math.max(14, Math.min(variant === "panel" ? 46 : 72, Math.round((w * h) / density)));
    nodes = Array.from({ length: n }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.6 + 1.1,
      hot: i % 9 === 0, // a few highlighted nodes that pulse
      ph: Math.random() * Math.PI * 2,
    }));
  }

  function draw(now) {
    const blue = isBlue();
    const line = blue ? "43,110,245" : "193,195,194";
    const dot = blue ? "143,177,255" : "193,195,194";
    const hot = "223,226,27";
    const link = Math.min(150, Math.max(90, w / 9));
    const t = (now - t0) / 1000;

    ctx.clearRect(0, 0, w, h);
    for (const p of nodes) {
      p.x += p.vx; p.y += p.vy;
      if (p.x < -10) p.x = w + 10; else if (p.x > w + 10) p.x = -10;
      if (p.y < -10) p.y = h + 10; else if (p.y > h + 10) p.y = -10;
      // gentle pull towards the pointer
      const dx = pointer.x - p.x, dy = pointer.y - p.y, d2 = dx * dx + dy * dy;
      if (d2 < 160 * 160) { p.x += dx * 0.004; p.y += dy * 0.004; }
    }
    for (let i = 0; i < nodes.length; i++) {
      const a = nodes[i];
      for (let j = i + 1; j < nodes.length; j++) {
        const b = nodes[j];
        const dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
        if (d < link) {
          ctx.strokeStyle = `rgba(${line},${(1 - d / link) * 0.42})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
        }
      }
      const pd = Math.hypot(pointer.x - a.x, pointer.y - a.y);
      if (pd < 170) {
        ctx.strokeStyle = `rgba(${hot},${(1 - pd / 170) * 0.35})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
      }
    }
    for (const p of nodes) {
      if (p.hot) {
        const s = 0.5 + 0.5 * Math.sin(t * 2 + p.ph);
        ctx.fillStyle = `rgba(${hot},${0.12 + s * 0.18})`;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r + 4 + s * 5, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = `rgba(${hot},0.95)`;
      } else {
        ctx.fillStyle = `rgba(${dot},0.85)`;
      }
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill();
    }
  }

  function loop(now) {
    draw(now);
    raf = visible ? requestAnimationFrame(loop) : 0;
  }

  seed();
  if (reduced()) { draw(performance.now()); }

  const io = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible && !raf && !reduced()) raf = requestAnimationFrame(loop);
  });
  io.observe(canvas);

  const ro = new ResizeObserver(() => { seed(); if (reduced()) draw(performance.now()); });
  ro.observe(host);

  const onMove = (e) => {
    const r = canvas.getBoundingClientRect();
    pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top;
  };
  const onLeave = () => { pointer.x = pointer.y = -9999; };
  host.addEventListener("pointermove", onMove);
  host.addEventListener("pointerleave", onLeave);

  return () => {
    cancelAnimationFrame(raf); io.disconnect(); ro.disconnect();
    host.removeEventListener("pointermove", onMove);
    host.removeEventListener("pointerleave", onLeave);
    canvas.remove();
  };
}

/* ---------- scroll reveal ---------- */

const REVEAL = [
  "main h1", "main h2", "main .card", "main figure", "main .job", "main .lane-cell",
  'main [style*="display: grid"] > *', 'main [style*="display: flex"][style*="flex-wrap: wrap"] > *',
].join(",");

function reveal(root) {
  const els = [...root.querySelectorAll(REVEAL)].filter(
    (el) => !el.closest(".nodes, header, footer, nav, form, [hidden]") && !el.classList.contains("in"),
  );
  // only animate the outermost element of nested matches, so cards don't animate twice
  const set = new Set(els);
  const fold = innerHeight * 0.92;
  const top = els.filter((el) => {
    for (let p = el.parentElement; p; p = p.parentElement) if (set.has(p)) return false;
    if (el.classList.contains("rv")) return true; // already tagged by an earlier run of this effect
    const r = el.getBoundingClientRect();
    return r.height > 0 && r.top > fold; // content already on screen stays put (no flash after hydration)
  });
  top.forEach((el) => {
    const sibs = el.parentElement ? [...el.parentElement.children].filter((c) => set.has(c)) : [el];
    const i = Math.max(0, sibs.indexOf(el));
    el.style.setProperty("--rv-d", `${Math.min(i, 6) * 80}ms`);
    el.classList.add("rv");
  });
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
  top.forEach((el) => io.observe(el));
  const onScroll = () => {
    for (const el of top) if (!el.classList.contains("in") && el.getBoundingClientRect().top < innerHeight * 0.9) el.classList.add("in");
  };
  addEventListener("scroll", onScroll, { passive: true });
  return () => { io.disconnect(); removeEventListener("scroll", onScroll); };
}

/* ---------- count-up for big figures ---------- */

function countUp(root) {
  const cands = [...root.querySelectorAll("main span, main p, main strong, main div")].filter((el) => {
    if (el.children.length || el.closest("header, footer, form")) return false;
    const m = /^(\d{1,4})(%|\+)?$/.exec(el.textContent.trim());
    return m && parseFloat(getComputedStyle(el).fontSize) >= 36;
  });
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      const el = e.target;
      const [, num, suf = ""] = /^(\d{1,4})(%|\+)?$/.exec(el.textContent.trim());
      const end = +num, start = end > 1900 ? end - 13 : 0, dur = 1100, t0 = performance.now();
      el.style.fontVariantNumeric = "tabular-nums";
      const step = (now) => {
        const k = Math.min(1, (now - t0) / dur), ease = 1 - Math.pow(1 - k, 3);
        el.textContent = Math.round(start + (end - start) * ease) + suf;
        if (k < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, { threshold: 0.6 });
  cands.forEach((el) => io.observe(el));
  return () => io.disconnect();
}

/* ---------- card spotlight + progress bar ---------- */

function onCardMove(e) {
  const c = e.target.closest?.(".card, .job, .lane-cell");
  if (!c) return;
  const r = c.getBoundingClientRect();
  c.style.setProperty("--mx", `${e.clientX - r.left}px`);
  c.style.setProperty("--my", `${e.clientY - r.top}px`);
}

function progressBar() {
  let bar = document.querySelector(".scroll-progress");
  if (!bar) {
    bar = document.createElement("div");
    bar.className = "scroll-progress";
    bar.setAttribute("aria-hidden", "true");
    document.body.appendChild(bar);
  }
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
  };
  update();
  addEventListener("scroll", update, { passive: true });
  return () => removeEventListener("scroll", update);
}

export function useMotion(path) {
  useEffect(() => {
    const root = document.getElementById("root");
    const cleanups = [];
    const hosts = [
      ...[...root.querySelectorAll(".ax-glow")].map((el) => [el, "hero"]),
      ...[...root.querySelectorAll(".ax-glow-b")].map((el) => [el, "cta"]),
      ...[...root.querySelectorAll(
        ['[aria-hidden="true"]', '[aria-hidden="true"] >'].flatMap((a) =>
          ["#4E4748", "rgb(78, 71, 72)"].map((c) => `main ${a}[style*="radial-gradient(${c}"]`)).join(","),
      )]
        .map((el) => [el.getAttribute("aria-hidden") === "true" ? el : el.parentElement, "panel"]),
    ];
    const seen = new Set();
    for (const [el, v] of hosts) {
      if (seen.has(el) || !el.getClientRects().length) continue; // skip the hidden desktop/mobile twin
      seen.add(el);
      const c = nodeField(el, v);
      if (c) cleanups.push(c);
    }
    if (!reduced()) {
      cleanups.push(reveal(root), countUp(root), progressBar());
      document.addEventListener("pointermove", onCardMove, { passive: true });
      cleanups.push(() => document.removeEventListener("pointermove", onCardMove));
    }
    document.documentElement.classList.add("motion-ready");
    return () => cleanups.forEach((f) => f && f());
  }, [path]);
}
