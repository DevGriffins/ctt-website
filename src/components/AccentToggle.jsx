import { useEffect, useState } from "react";

// Review switch for the blue accent. Controlled by site.accent.showToggle in site.config.js.
export default function AccentToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    setOn(document.documentElement.getAttribute("data-accent") === "blue");
  }, []);

  const toggle = () => {
    const next = !on;
    setOn(next);
    if (next) document.documentElement.setAttribute("data-accent", "blue");
    else document.documentElement.removeAttribute("data-accent");
    try {
      localStorage.setItem("ctt-accent", next ? "blue" : "off");
    } catch (e) {
      /* storage unavailable: the choice just lasts for this page */
    }
  };

  return (
    <button type="button" className="accent-toggle" aria-pressed={on} onClick={toggle}>
      <span className="track" aria-hidden="true" />
      Blue accent: {on ? "On" : "Off"}
    </button>
  );
}
