import { NavLink } from "react-router-dom";

export default function HeaderDesktop({ activeNav }) {
  return (
    <header style={{ position: "sticky", top: "0", zIndex: "10", background: "rgba(32,31,30,0.96)", borderBottom: "1px solid #3A3736" }}>
      <div
        style={{
          maxWidth: "1344px",
          margin: "0 auto",
          padding: "0 clamp(20px, 3.5vw, 32px)",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        <NavLink aria-label="Celotti Tech Talent home" to="/" style={{ display: "flex", alignItems: "center", flexShrink: "0" }}>
          <img alt="Celotti Tech Talent" src="/assets/ctt-logo-reversed.svg" style={{ height: "40px", width: "auto", display: "block" }} />
        </NavLink>
        <nav
          aria-label="Main"
          className="nav nav-links"
          style={{ display: "flex", alignItems: "center", gap: "28px", fontSize: "15px", fontWeight: "700", height: "80px" }}
        >
          <NavLink to="/talent-as-a-service" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Talent as a Service
          </NavLink>
          <button
            aria-expanded="false"
            data-dd-btn="spec"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0",
              border: "0",
              background: "none",
              font: "inherit",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
            type="button"
            data-active={activeNav === "spec" ? "" : undefined}
          >
            Specialisms
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <NavLink to="/how-we-work" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            How We Work
          </NavLink>
          <NavLink to="/case-studies" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Case Studies
          </NavLink>
          <NavLink to="/insights" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Insights
          </NavLink>
          <NavLink to="/about" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            About
          </NavLink>
          <button
            aria-expanded="false"
            data-dd-btn="talent"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "6px",
              padding: "0",
              border: "0",
              background: "none",
              font: "inherit",
              color: "#FFFFFF",
              cursor: "pointer",
            }}
            type="button"
            data-active={activeNav === "talent" ? "" : undefined}
          >
            For Talent
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: "0" }}>
          <NavLink
            className="btn btn-dark"
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              height: "48px",
              padding: "0 22px",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              fontSize: "15px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Book a consultation
            <svg
              aria-hidden="true"
              className="arr"
              fill="none"
              height="18"
              stroke="#201F1E"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </NavLink>
          <button
            aria-label="Open menu"
            className="nav-burger"
            data-open-menu=""
            style={{
              display: "none",
              width: "48px",
              height: "48px",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #4E4748",
              borderRadius: "999px",
              background: "#201F1E",
              cursor: "pointer",
            }}
            type="button"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="22"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="22"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
        </div>
      </div>
      <div className="dd-panel" data-dd="spec" hidden>
        <div className="dd-inner dd-wide">
          <NavLink className="dd-item" to="/specialisms/ai">
            <strong>AI Talent</strong>
            <span>Chief AI Officers to LLM, ML and MLOps engineers.</span>
          </NavLink>{" "}
          <NavLink className="dd-item" to="/specialisms/data">
            <strong>Data Talent</strong>
            <span>Chief Data Officers to data engineers, scientists and governance leads.</span>
          </NavLink>{" "}
          <NavLink className="dd-item" to="/specialisms/deep-tech">
            <strong>Deep Tech Talent</strong>
            <span>Quantum, semiconductors, photonics, space and climate tech.</span>
          </NavLink>{" "}
          <NavLink className="dd-item" to="/specialisms/robotics">
            <strong>Robotics Talent</strong>
            <span>Robotics, autonomy, controls, embedded and computer vision engineers.</span>
          </NavLink>
          <div className="dd-cta">
            <strong>Specialist AI and Data talent requires specialist expertise.</strong>
            <NavLink to="/contact">Book a consultation</NavLink>
          </div>
        </div>
      </div>
      <div className="dd-panel dd-right" data-dd="talent" hidden>
        <div className="dd-inner">
          <NavLink className="dd-item" to="/open-roles">
            <strong>Open Roles</strong>
            <span>Current roles across AI, Data, Deep Tech and Robotics.</span>
          </NavLink>{" "}
          <NavLink className="dd-item" to="/join">
            <strong>Join the Talent Community</strong>
            <span>Share your profile and CV with a specialist.</span>
          </NavLink>
        </div>
      </div>
    </header>
  );
}
