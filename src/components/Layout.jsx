import { useEffect } from "react";
import HeaderDesktop from "./HeaderDesktop.jsx";
import HeaderMobile from "./HeaderMobile.jsx";
import FooterDesktop from "./FooterDesktop.jsx";
import FooterMobile from "./FooterMobile.jsx";
import MobileMenu from "./MobileMenu.jsx";
import AccentToggle from "./AccentToggle.jsx";
import { useSiteBehaviors } from "../lib/behaviors.js";
import { applyHead } from "../seo.js";
import { site } from "../site.config.js";

const shell = { width: "100%", background: "#201F1E", color: "#FFFFFF" };

/**
 * Page shell. Every page ships a desktop and a mobile layout; CSS shows one of them
 * (breakpoint 768px, see .v-desk / .v-mob in styles/site.css).
 */
export default function Layout({ page, activeNav, path }) {
  const { Desktop, Mobile } = page;
  useSiteBehaviors(path);
  useEffect(() => applyHead(path), [path]);

  return (
    <div data-route={path}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="v-desk">
        <div className="ctt" style={shell}>
          <HeaderDesktop activeNav={activeNav} />
          <Desktop />
          <FooterDesktop />
        </div>
      </div>
      <div className="v-mob">
        <div className="ctt" style={shell}>
          <HeaderMobile />
          <Mobile />
          <FooterMobile />
        </div>
      </div>
      <MobileMenu />
      {site.accent.showToggle && <AccentToggle />}
    </div>
  );
}
