import { NavLink } from "react-router-dom";

export default function HeaderMobile() {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "10", background: "#201F1E", borderBottom: "1px solid #3A3736" }}>
      <div
        style={{ height: "68px", padding: "0 16px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "10px" }}
      >
        <NavLink aria-label="Celotti Tech Talent home" to="/" style={{ display: "flex" }}>
          <img alt="Celotti Tech Talent" src="/assets/ctt-logo-reversed.svg" style={{ height: "30px", width: "auto", display: "block" }} />
        </NavLink>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <NavLink
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              fontSize: "14px",
              fontWeight: "700",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            Book a consultation
          </NavLink>
          <a
            aria-label="Open menu"
            data-open-menu=""
            href="#menu"
            style={{
              width: "44px",
              height: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E4748",
              borderRadius: "999px",
            }}
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="20"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </a>
        </div>
      </div>
    </header>
  );
}
