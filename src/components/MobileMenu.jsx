import { NavLink } from "react-router-dom";

export default function MobileMenu() {
  return (
    <div id="menu" className="menu-overlay" role="dialog" aria-modal="true" aria-label="Menu" hidden>
      <div
        className="ctt mm"
        style={{
          width: "100%",
          height: "100%",
          background: "#201F1E",
          color: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            height: "68px",
            flexShrink: "0",
            padding: "0 16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #3A3736",
          }}
        >
          <NavLink to="/" aria-label="Celotti Tech Talent home" style={{ display: "flex" }}>
            <img
              src="/assets/ctt-logo-reversed.svg"
              alt="Celotti Tech Talent"
              style={{ height: "30px", width: "auto", display: "block" }}
            />
          </NavLink>
          <a
            href="#"
            data-close-menu=""
            aria-label="Close menu"
            style={{
              width: "44px",
              height: "44px",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              border: "1px solid #60554F",
              borderRadius: "999px",
            }}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </a>
        </div>
        <nav
          aria-label="Main"
          style={{ flexGrow: "1", overflow: "hidden", padding: "8px 20px 0", display: "flex", flexDirection: "column" }}
        >
          <NavLink
            to="/talent-as-a-service"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              borderBottom: "1px solid #3A3736",
              fontSize: "20px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            Talent as a Service
          </NavLink>
          <div style={{ borderBottom: "1px solid #3A3736", paddingBottom: "12px" }}>
            <button
              type="button"
              aria-expanded="true"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "56px",
                padding: "0",
                border: "0",
                background: "none",
                font: "inherit",
                fontSize: "20px",
                fontWeight: "700",
                color: "#DFE21B",
                cursor: "pointer",
              }}
            >
              Specialisms
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFE21B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            </button>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "8px" }}>
              <NavLink
                to="/specialisms/ai"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                <span aria-hidden="true" style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)" }} />
                AI
              </NavLink>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                <span aria-hidden="true" style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)" }} />
                Data
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                <span aria-hidden="true" style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)" }} />
                Deep Tech
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                <span aria-hidden="true" style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)" }} />
                Robotics
              </a>
            </div>
          </div>
          <NavLink
            to="/how-we-work"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              borderBottom: "1px solid #3A3736",
              fontSize: "20px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            How We Work
          </NavLink>
          <NavLink
            to="/case-studies"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              borderBottom: "1px solid #3A3736",
              fontSize: "20px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            Case Studies
          </NavLink>
          <NavLink
            to="/insights"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              borderBottom: "1px solid #3A3736",
              fontSize: "20px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            Insights
          </NavLink>
          <NavLink
            to="/about"
            style={{
              display: "flex",
              alignItems: "center",
              minHeight: "56px",
              borderBottom: "1px solid #3A3736",
              fontSize: "20px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            About
          </NavLink>
          <div style={{ paddingBottom: "12px" }}>
            <button
              type="button"
              aria-expanded="true"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                minHeight: "56px",
                padding: "0",
                border: "0",
                background: "none",
                font: "inherit",
                fontSize: "20px",
                fontWeight: "700",
                color: "#DFE21B",
                cursor: "pointer",
              }}
            >
              For Talent
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#DFE21B"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            </button>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <NavLink
                to="/open-roles"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                Open Roles
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DFE21B"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NavLink>
              <NavLink
                to="/join"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "48px",
                  padding: "0 14px",
                  borderRadius: "12px",
                  background: "#2A2827",
                  fontSize: "16px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                Join the Talent Community
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#DFE21B"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </NavLink>
            </div>
          </div>
        </nav>
        <div
          style={{
            flexShrink: "0",
            padding: "16px 20px 28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            borderTop: "1px solid #3A3736",
            background: "#201F1E",
          }}
        >
          <NavLink
            to="/contact"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "56px",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              fontSize: "17px",
              fontWeight: "700",
            }}
          >
            Book a consultation
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#201F1E"
              strokeWidth="2.25"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </NavLink>
          <a href="mailto:advisory@celottitechtalent.com" style={{ alignSelf: "center", fontSize: "15px", color: "#C1C3C2" }}>
            advisory@celottitechtalent.com
          </a>
        </div>
      </div>
    </div>
  );
}
