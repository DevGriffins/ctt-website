import { Link } from "react-router-dom";
import { site } from "../site.config.js";

// Pod-based Embedded TA Partnership (monthly, USD)
const PODS = [
  {
    name: "Startup Pod",
    price: "USD 3,000–3,800",
    detail: "Up to 3 concurrent roles · shared specialist pod · 3-month minimum · 6-month guarantee",
  },
  {
    name: "Scaleup Pod",
    price: "USD 4,500–6,500",
    detail: "Up to 6 concurrent roles · shared specialist pod · 6-month minimum · 12-month guarantee",
  },
  {
    name: "Mid-Enterprise Pod",
    price: "USD 7,500–10,000",
    detail: "Up to 12 concurrent roles · fully dedicated pod · 12-month commitment · 12-month guarantee",
  },
  {
    name: "Large Enterprise / MNC",
    price: "USD 12,000–20,000+",
    detail: "Multi-pod or hybrid · enterprise AI and Data programs · custom term, typically 12 months+ · 12-month guarantee",
  },
];

function PodList({ compact }) {
  return (
    <ul style={{ listStyle: "none", margin: "4px 0 0", padding: "0", display: "flex", flexDirection: "column", borderTop: "1px solid #3A3736" }}>
      {PODS.map((pod) => (
        <li
          key={pod.name}
          style={{ display: "flex", flexDirection: "column", gap: "4px", padding: compact ? "10px 0" : "12px 0", borderBottom: "1px solid #3A3736" }}
        >
          <span style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "4px 12px" }}>
            <span style={{ fontSize: compact ? "15px" : "16px", fontWeight: "700", color: "#FFFFFF" }}>{pod.name}</span>
            <span style={{ fontSize: compact ? "15px" : "16px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
              {pod.price}
              <span style={{ fontWeight: "400", color: "#C1C3C2" }}>/mo</span>
            </span>
          </span>
          <span style={{ fontSize: compact ? "13px" : "14px", lineHeight: "1.45", color: "#C1C3C2" }}>{pod.detail}</span>
        </li>
      ))}
    </ul>
  );
}

// TalentAsAService: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="taas-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "88px clamp(20px, 3.5vw, 32px) 80px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            alignItems: "flex-start",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Talent as a Service
            </span>
          </nav>
          <h1
            id="taas-h1"
            style={{ margin: "0", fontSize: "clamp(44px, 5.4vw, 76px)", lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            {"Talent as a "}
            <span>Service</span>
          </h1>
          <p style={{ margin: "0", maxWidth: "620px", fontSize: "21px", lineHeight: "1.5", color: "#D3D9DB" }}>
            Specialist recruitment with transparent pricing. Predictable, not cheap.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "12px 24px" }}>
            <Link
              className="btn btn-dark"
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "17px",
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
            </Link>
            <a
              href="#models"
              style={{
                fontSize: "16px",
                fontWeight: "700",
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Compare the four models
            </a>
          </div>
        </div>
      </section>
      {/* S2 WHY FIXED FEE */}
      <section aria-labelledby="why-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))",
            gap: "48px 80px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              Why a fixed-fee model
            </p>
            <h2
              id="why-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Predictable value, not a race to the bottom
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Traditional agency fees fluctuate and reward volume. Our models make cost and effort visible from day one, so we can work as
              an extension of your hiring strategy rather than an external supplier.
            </p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid #3A3736",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "20px", padding: "28px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "52px",
                  height: "52px",
                  flexShrink: "0",
                  borderRadius: "14px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <rect height="17" rx="2" width="18" x="3" y="4" />
                  <path d="M3 9h18M8 2v4M16 2v4M8 14h3M8 17h6" />
                </svg>
              </span>
              <span style={{ fontSize: "24px", fontWeight: "700" }}>Predictable cost</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "20px", padding: "28px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "52px",
                  height: "52px",
                  flexShrink: "0",
                  borderRadius: "14px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1-4 4.2-6 8-6s7 2 8 6" />
                </svg>
              </span>
              <span style={{ fontSize: "24px", fontWeight: "700" }}>Dedicated specialist effort</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "20px", padding: "28px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "52px",
                  height: "52px",
                  flexShrink: "0",
                  borderRadius: "14px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="9" cy="12" r="5" />
                  <circle cx="15" cy="12" r="5" />
                </svg>
              </span>
              <span style={{ fontSize: "24px", fontWeight: "700" }}>Shared outcomes</span>
            </li>
          </ul>
        </div>
      </section>
      {/* S3 FOUR MODELS (pricing plan cards) */}
      <section aria-labelledby="models-h" id="models" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              Engagement models
            </p>
            <h2
              id="models-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              The four engagement models
            </h2>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(270px, 100%), 1fr))",
              gap: "20px",
              alignItems: "stretch",
            }}
          >
            <article
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                color: "#FFFFFF",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    color: "#D3D9DB",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                  className="ax-tint"
                >
                  PARTNERSHIP
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Fixed Fee Partnership</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#C1C3C2", minHeight: "48px" }}>
                  Best for businesses hiring across many roles.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", borderTop: "1px solid #4E4748" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>10%</span>
                  <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
                </div>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>
                  {"+ "}
                  <span className="fee">{site.monthlyFee}</span>
                  {" per month"}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "16px",
                  lineHeight: "1.45",
                  color: "#E4E7E8",
                  flexGrow: "1",
                }}
              >
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Monthly partnership fee
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Success fee on placement
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Minimum commitment of 3 roles
                </li>
              </ul>
              <Link
                className="btn btn-ghost"
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
                  color: "#FFFFFF",
                  fontSize: "16px",
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
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </article>
            <article
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    color: "#D3D9DB",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                  className="ax-tint"
                >
                  SEARCH
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Fixed Fee Search Partnership</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB", minHeight: "48px" }}>
                  Best for hiring specialists across several roles.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", borderTop: "1px solid #3A3736" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>15%</span>
                  <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
                </div>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#FFFFFF" }}>
                  {"+ "}
                  <span className="fee">{site.monthlyFee}</span>
                  {" per month"}
                </span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "16px",
                  lineHeight: "1.45",
                  color: "#D3D9DB",
                  flexGrow: "1",
                }}
              >
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Monthly engagement fee
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Success fee on placement
                </li>
              </ul>
              <Link
                className="btn btn-ghost"
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Book a consultation
              </Link>
            </article>
            <article
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "2px solid #DFE21B",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                >
                  MOST POPULAR
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Exclusive Search Partnership</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB", minHeight: "48px" }}>
                  Best for a business-critical role that needs passive-talent outreach.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", borderTop: "1px solid #3A3736" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>18%</span>
                  <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
                </div>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#FFFFFF" }}>Success fee only</span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "16px",
                  lineHeight: "1.45",
                  color: "#D3D9DB",
                  flexGrow: "1",
                }}
              >
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  No engagement fee
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.25"
                    style={{ flexShrink: "0", marginTop: "1px" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M5 12l5 5 9-10" />
                  </svg>
                  Success fee on placement
                </li>
              </ul>
              <Link
                className="btn btn-yellow"
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "52px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Book a consultation
              </Link>
            </article>
            <article
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px 28px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    color: "#D3D9DB",
                    fontSize: "12px",
                    fontWeight: "700",
                    letterSpacing: "0.04em",
                  }}
                  className="ax-tint"
                >
                  EXECUTIVE
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Retained Search Partnership</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB", minHeight: "48px" }}>
                  Best for leadership and executive appointments.
                </p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", borderTop: "1px solid #3A3736" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                  <span style={{ fontSize: "64px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>20%</span>
                  <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
                </div>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#FFFFFF" }}>Paid in thirds</span>
              </div>
              <ul
                style={{
                  listStyle: "none",
                  margin: "0",
                  padding: "0",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  fontSize: "16px",
                  lineHeight: "1.45",
                  color: "#D3D9DB",
                  flexGrow: "1",
                }}
              >
                <li style={{ display: "flex", gap: "10px" }}>
                  <span aria-hidden="true" style={{ width: "20px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                    1/3
                  </span>
                  On commencement
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <span aria-hidden="true" style={{ width: "20px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                    1/3
                  </span>
                  On shortlist
                </li>
                <li style={{ display: "flex", gap: "10px" }}>
                  <span aria-hidden="true" style={{ width: "20px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                    1/3
                  </span>
                  On placement
                </li>
              </ul>
              <Link
                className="btn btn-ghost"
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Book a consultation
              </Link>
            </article>
          </div>
          {/* FDE ON DEMAND (30 Oct review) */}
          <div
            className="card"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              gap: "24px 48px",
              alignItems: "center",
              padding: "28px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", gridColumn: "span 2" }}>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 9px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.04em",
                }}
                className="ax-solid"
              >
                NEW · MONTHLY
              </span>
              <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>FDE on Demand</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", maxWidth: "640px" }}>
                Forward Deployed AI Engineers, embedded in your team and billed monthly. Built for AI companies that need hands-on
                engineering capacity fast.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", alignItems: "flex-start" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "24px", fontWeight: "700" }}>Monthly rate</span>
                <span style={{ fontSize: "16px", color: "#C1C3C2" }}>Quoted per engagement, billed monthly in USD</span>
              </div>
              <Link
                className="btn btn-ghost"
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 24px",
                  height: "52px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Ask about FDE on Demand
              </Link>
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#C1C3C2" }}>
            TAC = Total Annual Compensation of the hired candidate. Monthly fees are in USD.
          </p>
        </div>
      </section>
      {/* S4 COMPARISON TABLE */}
      <section aria-labelledby="cmp-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              Compare
            </p>
            <h2
              id="cmp-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Compare the models side by side
            </h2>
          </div>
          <div style={{ overflowX: "auto", border: "1px solid #3A3736", borderRadius: "20px" }}>
            <table
              className="cmp"
              style={{
                width: "100%",
                minWidth: "960px",
                borderCollapse: "separate",
                borderSpacing: "0",
                fontSize: "16px",
                lineHeight: "1.5",
              }}
            >
              <caption style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                Comparison of the four Talent as a Service engagement models
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      width: "20%",
                      padding: "24px",
                      background: "#262423",
                      fontSize: "13px",
                      fontWeight: "700",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#C1C3C2",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "20%",
                      padding: "24px",
                      background: "#2F2C2B",
                      color: "#FFFFFF",
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px solid #C1C3C2",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        width: "28px",
                        height: "4px",
                        background: "#DFE21B",
                        marginBottom: "12px",
                        color: "#201F1E",
                      }}
                    />
                    Fixed Fee Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "20%",
                      padding: "24px",
                      background: "#262423",
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Fixed Fee Search Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "20%",
                      padding: "24px",
                      background: "#262423",
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Exclusive Search Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "20%",
                      padding: "24px",
                      background: "#262423",
                      fontSize: "18px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Retained Search Partnership
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700", borderBottom: "1px solid #3A3736" }}>
                    Success fee
                  </th>
                  <td
                    className="hl"
                    style={{
                      padding: "20px 24px",
                      background: "#33321F",
                      fontWeight: "700",
                      fontSize: "20px",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    10% of TAC
                  </td>
                  <td style={{ padding: "20px 24px", fontWeight: "700", fontSize: "20px", borderBottom: "1px solid #3A3736" }}>
                    15% of TAC
                  </td>
                  <td style={{ padding: "20px 24px", fontWeight: "700", fontSize: "20px", borderBottom: "1px solid #3A3736" }}>
                    18% of TAC
                  </td>
                  <td style={{ padding: "20px 24px", fontWeight: "700", fontSize: "20px", borderBottom: "1px solid #3A3736" }}>
                    20% of TAC
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700", borderBottom: "1px solid #3A3736" }}>
                    Monthly fee
                  </th>
                  <td
                    className="hl"
                    style={{ padding: "20px 24px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}
                  >
                    <span className="fee">{site.monthlyFee}</span>
                    {" partnership fee"}
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    <span className="fee">{site.monthlyFee}</span>
                    {" engagement fee"}
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>None</td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>None</td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700", borderBottom: "1px solid #3A3736" }}>
                    When fees are paid
                  </th>
                  <td
                    className="hl"
                    style={{ padding: "20px 24px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}
                  >
                    Monthly fee each month; success fee on placement
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Monthly fee each month; success fee on placement
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>On placement only</td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    In thirds: on commencement, on shortlist, on placement
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700", borderBottom: "1px solid #3A3736" }}>
                    Minimum commitment
                  </th>
                  <td
                    className="hl"
                    style={{ padding: "20px 24px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}
                  >
                    3 roles
                  </td>
                  <td style={{ padding: "20px 24px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>Monthly engagement, scoped to your hiring plan</span>
                  </td>
                  <td style={{ padding: "20px 24px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>None: one role, on an exclusive mandate</span>
                  </td>
                  <td style={{ padding: "20px 24px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>One role, with the first third due on commencement</span>
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700", borderBottom: "1px solid #3A3736" }}>
                    Best for
                  </th>
                  <td
                    className="hl"
                    style={{ padding: "20px 24px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}
                  >
                    Businesses hiring across many roles
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Hiring specialists across several roles
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    A business-critical role that needs passive-talent outreach
                  </td>
                  <td style={{ padding: "20px 24px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Leadership and executive appointments
                  </td>
                </tr>
                <tr>
                  <th scope="row" style={{ padding: "20px 24px", fontWeight: "700" }}>
                    Typical roles
                  </th>
                  <td className="hl" style={{ padding: "20px 24px", background: "#33321F" }}>
                    <span style={{ color: "#D3D9DB" }}>AI, data and software engineers hired in volume</span>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <span style={{ color: "#D3D9DB" }}>Data scientists, ML engineers and data engineers</span>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <span style={{ color: "#D3D9DB" }}>Senior AI engineers, ML and robotics specialists</span>
                  </td>
                  <td style={{ padding: "20px 24px" }}>
                    <span style={{ color: "#D3D9DB" }}>Heads of AI and Data, CTOs, product and digital leaders</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* S5 SERVICES */}
      <section aria-labelledby="svc-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "760px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              Services
            </p>
            <h2
              id="svc-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              How each service works
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
                />
                Fixed Fee Partnership
              </span>
              <h3 style={{ margin: "0", fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Fixed-Fee Subscription</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Fully managed recruitment for ongoing hiring, through a fixed monthly model.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
                />
                Exclusive Search Partnership
              </span>
              <h3 style={{ margin: "0", fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Exclusive Executive Search</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Signal-based outreach and market intelligence for niche, specialist roles.
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
                />
                Pod-based Partnership
              </span>
              <h3 style={{ margin: "0", fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Embedded TA Partnership</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                A dedicated specialist team embedded in your business, ideal for startups and scale-ups in rapid growth.
              </p>
              <PodList />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
                />
                Retained Search Partnership
              </span>
              <h3 style={{ margin: "0", fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Retained Search</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Market mapping and research for senior and business-critical appointments.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* S6 INCLUDED */}
      <section aria-labelledby="inc-h" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(440px, 100%), 1fr))",
            gap: "48px 80px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#DFE21B",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              Every engagement
            </p>
            <h2
              id="inc-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Included in every engagement
            </h2>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D3D9DB" }}>The commercial terms change from model to model. The search process and the quality bar do not.</p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: "16px",
            }}
          >
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px",
                borderRadius: "16px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                01
              </span>
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
                Discovery and alignment on the role and scorecard
              </span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px",
                borderRadius: "16px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                02
              </span>
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
                AI-assisted sourcing and screening, with specialist review
              </span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px",
                borderRadius: "16px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                03
              </span>
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
                Curated shortlist of 3–5 high-quality candidates delivered through Loxo
              </span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "24px",
                borderRadius: "16px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                04
              </span>
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
                Interview coordination, reference checks, offer and onboarding support
              </span>
            </li>
          </ul>
        </div>
      </section>
      {/* S7 FAQ */}
      <section aria-labelledby="faq-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
            gap: "48px 80px",
            alignItems: "start",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <p
              style={{
                margin: "0",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  background: "#DFE21B",
                  display: "block",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              FAQs
            </p>
            <h2
              id="faq-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Questions about pricing
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #3A3736", gridColumn: "span 1" }}>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="true"
                  className="faq-q"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "76px",
                    padding: "20px 12px",
                    border: "0",
                    background: "#201F1E",
                    font: "inherit",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  type="button"
                >
                  What is TAC?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "rotate(180deg)" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div className="faq-a">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "0 12px 24px",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    color: "#D3D9DB",
                  }}
                >
                  <p style={{ margin: "0" }}>Total Annual Compensation for the hired candidate: the first-year base salary plus guaranteed cash elements such as fixed allowances and contractual bonuses. We confirm the exact components in your terms of business before a search begins.</p>
                </div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  className="faq-q"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "76px",
                    padding: "20px 12px",
                    border: "0",
                    background: "#201F1E",
                    font: "inherit",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  type="button"
                >
                  Which currency are fees in?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "none" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div className="faq-a" hidden>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                    padding: "0 12px 24px",
                    fontSize: "17px",
                    lineHeight: "1.6",
                    color: "#D3D9DB",
                  }}
                >
                  <p style={{ margin: "0" }}>All fees are quoted and invoiced in USD, including monthly partnership and pod fees and success fees.</p>
                </div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  className="faq-q"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "76px",
                    padding: "20px 12px",
                    border: "0",
                    background: "#201F1E",
                    font: "inherit",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  type="button"
                >
                  What happens if a hire leaves early?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "none" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div className="faq-a" hidden>
                <div style={{ padding: "0 12px 24px" }}>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>Every placement is covered by a guarantee period. On our pod partnerships that is 6 months on the Startup Pod and 12 months on the Scaleup, Mid-Enterprise and Enterprise pods. If a hire leaves within the guarantee period, we reopen the search and work to replace them. The guarantee for each search partnership is set out in your agreement.</p>
                </div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  className="faq-q"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "76px",
                    padding: "20px 12px",
                    border: "0",
                    background: "#201F1E",
                    font: "inherit",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  type="button"
                >
                  Can we switch models?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "none" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div className="faq-a" hidden>
                <div style={{ padding: "0 12px 24px" }}>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>Yes. Many clients start with a single exclusive or retained search, then move to a Fixed Fee Partnership or a dedicated pod as their hiring grows. Pods can also step up, from Startup to Scaleup or Mid-Enterprise, as your number of concurrent roles increases. We review fit with you at each stage.</p>
                </div>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  className="faq-q"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "20px",
                    minHeight: "76px",
                    padding: "20px 12px",
                    border: "0",
                    background: "#201F1E",
                    font: "inherit",
                    fontSize: "20px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                  type="button"
                >
                  Which countries can you hire in?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "none" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div className="faq-a" hidden>
                <div style={{ padding: "0 12px 24px" }}>
                  <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>We are based in Singapore and hire mid to senior AI, Data, Digital and Robotics talent across APAC. As part of the Celotti Group, founded in Australia in 2013, we also hire in Australia, and we support US and global companies building teams in or for the region.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S8 FINAL CTA (dark CTA band · ink) */}
      <section aria-labelledby="fit-h" style={{ background: "#201F1E", padding: "0 clamp(20px, 3.5vw, 32px) 112px" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            maxWidth: "1280px",
            margin: "0 auto",
            borderRadius: "24px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-40px",
              top: "0",
              bottom: "0",
              width: "360px",
              background: "#3A3736",
              clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "250px",
              top: "0",
              bottom: "0",
              width: "22px",
              background: "#DFE21B",
              transform: "skewX(-24deg)",
              color: "#201F1E",
            }}
          />
          <div
            style={{
              position: "relative",
              padding: "72px clamp(24px, 5vw, 72px)",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              maxWidth: "760px",
            }}
          >
            <h2
              id="fit-h"
              style={{
                margin: "0",
                fontSize: "clamp(32px, 3.4vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Not sure which model fits?
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Book a 30-minute consultation and we'll recommend the right model for your hiring plan.
            </p>
            <Link
              className="btn btn-yellow"
              to="/contact"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "17px",
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// TalentAsAService: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      {/* S1 HERO */}
      <section aria-labelledby="mt-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "40px 20px 48px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Talent as a Service
            </span>
          </nav>
          <h1 id="mt-h1" style={{ margin: "0", fontSize: "44px", lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Talent as a "}
            <span>Service</span>
          </h1>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.5", color: "#D3D9DB" }}>
            Specialist recruitment with transparent pricing. Predictable, not cheap.
          </p>
          <Link
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
              textDecoration: "none",
            }}
          >
            Book a consultation
            <svg
              aria-hidden="true"
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
          </Link>
          <a
            href="#m-models"
            style={{
              alignSelf: "center",
              fontSize: "16px",
              fontWeight: "700",
              color: "#FFFFFF",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            Compare the four models
          </a>
        </div>
      </section>
      {/* S2 WHY */}
      <section aria-labelledby="mt-why" style={{ background: "#201F1E" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            Why a fixed-fee model
          </p>
          <h2 id="mt-why" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Predictable value, not a race to the bottom
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Traditional agency fees fluctuate and reward volume. Our models make cost and effort visible from day one, so we can work as an
            extension of your hiring strategy rather than an external supplier.
          </p>
          <ul
            style={{
              listStyle: "none",
              margin: "8px 0 0",
              padding: "0",
              display: "flex",
              flexDirection: "column",
              borderTop: "1px solid #3A3736",
            }}
          >
            <li style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: "0",
                  borderRadius: "12px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <rect height="17" rx="2" width="18" x="3" y="4" />
                  <path d="M3 9h18M8 2v4M16 2v4M8 14h3M8 17h6" />
                </svg>
              </span>
              <span style={{ fontSize: "19px", fontWeight: "700" }}>Predictable cost</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: "0",
                  borderRadius: "12px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 21c1-4 4.2-6 8-6s7 2 8 6" />
                </svg>
              </span>
              <span style={{ fontSize: "19px", fontWeight: "700" }}>Dedicated specialist effort</span>
            </li>
            <li style={{ display: "flex", alignItems: "center", gap: "16px", padding: "18px 0", borderBottom: "1px solid #3A3736" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: "0",
                  borderRadius: "12px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="22"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <circle cx="9" cy="12" r="5" />
                  <circle cx="15" cy="12" r="5" />
                </svg>
              </span>
              <span style={{ fontSize: "19px", fontWeight: "700" }}>Shared outcomes</span>
            </li>
          </ul>
        </div>
      </section>
      {/* S3 MODELS */}
      <section aria-labelledby="mt-models" id="m-models" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            Engagement models
          </p>
          <h2
            id="mt-models"
            style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}
          >
            The four engagement models
          </h2>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "24px 22px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 9px",
                borderRadius: "999px",
                background: "#34312F",
                color: "#D3D9DB",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
              }}
              className="ax-tint"
            >
              PARTNERSHIP
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Fixed Fee Partnership</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#C1C3C2" }}>
                Best for businesses hiring across many roles.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "16px", borderTop: "1px solid #4E4748" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>10%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#DFE21B" }}>
                {"+ "}
                <span className="fee">{site.monthlyFee}</span>
                {" per month"}
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "16px",
                color: "#E4E7E8",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Monthly partnership fee
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Success fee on placement
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Minimum commitment of 3 roles
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                border: "1.5px solid #C1C3C2",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Book a consultation
            </Link>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "24px 22px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 9px",
                borderRadius: "999px",
                background: "#34312F",
                color: "#D3D9DB",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
              }}
              className="ax-tint"
            >
              SEARCH
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Fixed Fee Search Partnership</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>
                Best for hiring specialists across several roles.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "16px", borderTop: "1px solid #3A3736" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>15%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>
                {"+ "}
                <span className="fee">{site.monthlyFee}</span>
                {" per month"}
              </span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "16px",
                color: "#D3D9DB",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Monthly engagement fee
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Success fee on placement
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                border: "1.5px solid #C1C3C2",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Book a consultation
            </Link>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "24px 22px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "2px solid #DFE21B",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 9px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
              }}
            >
              MOST POPULAR
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Exclusive Search Partnership</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>
                Best for a business-critical role that needs passive-talent outreach.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "16px", borderTop: "1px solid #3A3736" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>18%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>Success fee only</span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "16px",
                color: "#D3D9DB",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                No engagement fee
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Success fee on placement
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Book a consultation
            </Link>
          </article>
          <article
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "24px 22px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 9px",
                borderRadius: "999px",
                background: "#34312F",
                color: "#D3D9DB",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
              }}
              className="ax-tint"
            >
              EXECUTIVE
            </span>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Retained Search Partnership</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>
                Best for leadership and executive appointments.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "4px", paddingTop: "16px", borderTop: "1px solid #3A3736" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                <span style={{ fontSize: "52px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>20%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>Paid in thirds</span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                fontSize: "16px",
                color: "#D3D9DB",
              }}
            >
              <li style={{ display: "flex", gap: "10px" }}>
                <span aria-hidden="true" style={{ width: "24px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                  1/3
                </span>
                On commencement
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <span aria-hidden="true" style={{ width: "24px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                  1/3
                </span>
                On shortlist
              </li>
              <li style={{ display: "flex", gap: "10px" }}>
                <span aria-hidden="true" style={{ width: "24px", flexShrink: "0", fontWeight: "700", color: "#FFFFFF" }}>
                  1/3
                </span>
                On placement
              </li>
            </ul>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                border: "1.5px solid #C1C3C2",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Book a consultation
            </Link>
          </article>
          {/* FDE ON DEMAND (30 Oct review) */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 9px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.04em",
              }}
              className="ax-solid"
            >
              NEW · MONTHLY
            </span>
            <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>FDE on Demand</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>
              Forward Deployed AI Engineers, embedded in your team and billed monthly. Built for AI companies that need hands-on engineering
              capacity fast.
            </p>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                flexWrap: "wrap",
                paddingTop: "14px",
                borderTop: "1px solid #3A3736",
              }}
            >
              <span style={{ fontSize: "20px", fontWeight: "700" }}>Monthly rate</span>
              <span style={{ fontSize: "16px", color: "#C1C3C2" }}>Quoted per engagement, billed monthly in USD</span>
            </div>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                border: "1.5px solid #C1C3C2",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Ask about FDE on Demand
            </Link>
          </div>
          <p style={{ margin: "4px 0 0", fontSize: "14px", lineHeight: "1.55", color: "#C1C3C2" }}>
            TAC = Total Annual Compensation of the hired candidate. Monthly fees are in USD.
          </p>
        </div>
      </section>
      {/* S4 COMPARISON (scrolls sideways) */}
      <section aria-labelledby="mt-cmp" style={{ background: "#201F1E" }}>
        <div style={{ padding: "64px 0 64px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            Compare
          </p>
          <h2
            id="mt-cmp"
            style={{ margin: "0", paddingRight: "20px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}
          >
            Compare the models side by side
          </h2>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "14px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            Swipe to compare
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              stroke="#C1C3C2"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.25"
              viewBox="0 0 24 24"
              width="16"
            >
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </p>
          <div style={{ overflowX: "auto", border: "1px solid #3A3736", borderRight: "0", borderRadius: "16px 0 0 16px" }}>
            <table
              className="cmp"
              style={{ minWidth: "860px", borderCollapse: "separate", borderSpacing: "0", fontSize: "15px", lineHeight: "1.5" }}
            >
              <caption style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
                Comparison of the four engagement models
              </caption>
              <thead>
                <tr>
                  <th
                    scope="col"
                    style={{
                      position: "sticky",
                      left: "0",
                      width: "132px",
                      padding: "16px",
                      background: "#262423",
                      fontSize: "12px",
                      fontWeight: "700",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "#C1C3C2",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Model
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "182px",
                      padding: "16px",
                      background: "#2F2C2B",
                      color: "#FFFFFF",
                      fontSize: "16px",
                      fontWeight: "700",
                    }}
                  >
                    Fixed Fee Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "182px",
                      padding: "16px",
                      background: "#262423",
                      fontSize: "16px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Fixed Fee Search Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "182px",
                      padding: "16px",
                      background: "#262423",
                      fontSize: "16px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Exclusive Search Partnership
                  </th>
                  <th
                    scope="col"
                    style={{
                      width: "182px",
                      padding: "16px",
                      background: "#262423",
                      fontSize: "16px",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    Retained Search Partnership
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Success fee
                  </th>
                  <td
                    style={{
                      padding: "16px",
                      background: "#33321F",
                      fontWeight: "700",
                      fontSize: "18px",
                      borderBottom: "1px solid #3A3736",
                    }}
                  >
                    10% of TAC
                  </td>
                  <td style={{ padding: "16px", fontWeight: "700", fontSize: "18px", borderBottom: "1px solid #3A3736" }}>15% of TAC</td>
                  <td style={{ padding: "16px", fontWeight: "700", fontSize: "18px", borderBottom: "1px solid #3A3736" }}>18% of TAC</td>
                  <td style={{ padding: "16px", fontWeight: "700", fontSize: "18px", borderBottom: "1px solid #3A3736" }}>20% of TAC</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Monthly fee
                  </th>
                  <td style={{ padding: "16px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    <span className="fee">{site.monthlyFee}</span>
                    {" partnership fee"}
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    <span className="fee">{site.monthlyFee}</span>
                    {" engagement fee"}
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>None</td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>None</td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    When fees are paid
                  </th>
                  <td style={{ padding: "16px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Monthly fee each month; success fee on placement
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Monthly fee each month; success fee on placement
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>On placement only</td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    In thirds: on commencement, on shortlist, on placement
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Minimum commitment
                  </th>
                  <td style={{ padding: "16px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>3 roles</td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>Monthly engagement, scoped to your hiring plan</span>
                  </td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>None: one role, on an exclusive mandate</span>
                  </td>
                  <td style={{ padding: "16px", borderBottom: "1px solid #3A3736" }}>
                    <span style={{ color: "#D3D9DB" }}>One role, with the first third due on commencement</span>
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderBottom: "1px solid #3A3736",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Best for
                  </th>
                  <td style={{ padding: "16px", background: "#33321F", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Businesses hiring across many roles
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Hiring specialists across several roles
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    A business-critical role that needs passive-talent outreach
                  </td>
                  <td style={{ padding: "16px", color: "#D3D9DB", borderBottom: "1px solid #3A3736" }}>
                    Leadership and executive appointments
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    style={{
                      position: "sticky",
                      left: "0",
                      padding: "16px",
                      background: "#201F1E",
                      fontWeight: "700",
                      borderRight: "1px solid #3A3736",
                    }}
                  >
                    Typical roles
                  </th>
                  <td style={{ padding: "16px", background: "#33321F" }}>
                    <span style={{ color: "#D3D9DB" }}>AI, data and software engineers hired in volume</span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#D3D9DB" }}>Data scientists, ML engineers and data engineers</span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#D3D9DB" }}>Senior AI engineers, ML and robotics specialists</span>
                  </td>
                  <td style={{ padding: "16px" }}>
                    <span style={{ color: "#D3D9DB" }}>Heads of AI and Data, CTOs, product and digital leaders</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {/* S5 SERVICES */}
      <section aria-labelledby="mt-svc" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            Services
          </p>
          <h2 id="mt-svc" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            How each service works
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
              />
              Fixed Fee Partnership
            </span>
            <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Fixed-Fee Subscription</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Fully managed recruitment for ongoing hiring, through a fixed monthly model.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
              />
              Exclusive Search Partnership
            </span>
            <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Exclusive Executive Search</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Signal-based outreach and market intelligence for niche, specialist roles.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
              />
              Pod-based Partnership
            </span>
            <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Embedded TA Partnership</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
              A dedicated specialist team embedded in your business, ideal for startups and scale-ups in rapid growth.
            </p>
            <PodList compact />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "7px", height: "7px", background: "#DFE21B", borderRadius: "999px", color: "#201F1E" }}
              />
              Retained Search Partnership
            </span>
            <h3 style={{ margin: "0", fontSize: "21px", fontWeight: "700" }}>Retained Search</h3>
            <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Market mapping and research for senior and business-critical appointments.
            </p>
          </div>
        </div>
      </section>
      {/* S6 INCLUDED */}
      <section aria-labelledby="mt-inc" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#DFE21B",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            Every engagement
          </p>
          <h2 id="mt-inc" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Included in every engagement
          </h2>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>The commercial terms change from model to model. The search process and the quality bar do not.</p>
          <ul style={{ listStyle: "none", margin: "8px 0 0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li
              style={{
                display: "flex",
                gap: "14px",
                padding: "18px",
                borderRadius: "14px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                01
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.45", fontWeight: "700" }}>
                Discovery and alignment on the role and scorecard
              </span>
            </li>
            <li
              style={{
                display: "flex",
                gap: "14px",
                padding: "18px",
                borderRadius: "14px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                02
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.45", fontWeight: "700" }}>
                AI-assisted sourcing and screening, with specialist review
              </span>
            </li>
            <li
              style={{
                display: "flex",
                gap: "14px",
                padding: "18px",
                borderRadius: "14px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                03
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.45", fontWeight: "700" }}>
                Curated shortlist of 3–5 high-quality candidates delivered through Loxo
              </span>
            </li>
            <li
              style={{
                display: "flex",
                gap: "14px",
                padding: "18px",
                borderRadius: "14px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }} className="ax-text">
                04
              </span>
              <span style={{ fontSize: "17px", lineHeight: "1.45", fontWeight: "700" }}>
                Interview coordination, reference checks, offer and onboarding support
              </span>
            </li>
          </ul>
        </div>
      </section>
      {/* S7 FAQ */}
      <section aria-labelledby="mt-faq" style={{ background: "#201F1E" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            <span
              aria-hidden="true"
              style={{ width: "9px", height: "9px", background: "#DFE21B", display: "block", transform: "skewX(-20deg)", color: "#201F1E" }}
            />
            FAQs
          </p>
          <h2 id="mt-faq" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Questions about pricing
          </h2>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #3A3736" }}>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="true"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    minHeight: "64px",
                    padding: "16px 0",
                    border: "0",
                    background: "none",
                    font: "inherit",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  What is TAC?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0", transform: "rotate(180deg)" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "0 0 20px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                  color: "#D3D9DB",
                }}
              >
                <p style={{ margin: "0" }}>Total Annual Compensation for the hired candidate: the first-year base salary plus guaranteed cash elements such as fixed allowances and contractual bonuses. We confirm the exact components in your terms of business before a search begins.</p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    minHeight: "64px",
                    padding: "16px 0",
                    border: "0",
                    background: "none",
                    font: "inherit",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  Which currency are fees in?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div hidden style={{ padding: "0 0 20px" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>All fees are quoted and invoiced in USD, including monthly partnership and pod fees and success fees.</p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    minHeight: "64px",
                    padding: "16px 0",
                    border: "0",
                    background: "none",
                    font: "inherit",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  What happens if a hire leaves early?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div hidden style={{ padding: "0 0 20px" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>Every placement is covered by a guarantee period. On our pod partnerships that is 6 months on the Startup Pod and 12 months on the Scaleup, Mid-Enterprise and Enterprise pods. If a hire leaves within the guarantee period, we reopen the search and work to replace them. The guarantee for each search partnership is set out in your agreement.</p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    minHeight: "64px",
                    padding: "16px 0",
                    border: "0",
                    background: "none",
                    font: "inherit",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  Can we switch models?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div hidden style={{ padding: "0 0 20px" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>Yes. Many clients start with a single exclusive or retained search, then move to a Fixed Fee Partnership or a dedicated pod as their hiring grows. Pods can also step up, from Startup to Scaleup or Mid-Enterprise, as your number of concurrent roles increases. We review fit with you at each stage.</p>
              </div>
            </div>
            <div style={{ borderBottom: "1px solid #3A3736" }}>
              <h3 style={{ margin: "0" }}>
                <button
                  aria-expanded="false"
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "16px",
                    minHeight: "64px",
                    padding: "16px 0",
                    border: "0",
                    background: "none",
                    font: "inherit",
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#FFFFFF",
                    textAlign: "left",
                  }}
                  type="button"
                >
                  Which countries can you hire in?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="20"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0" }}
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div hidden style={{ padding: "0 0 20px" }}>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>We are based in Singapore and hire mid to senior AI, Data, Digital and Robotics talent across APAC. As part of the Celotti Group, founded in Australia in 2013, we also hire in Australia, and we support US and global companies building teams in or for the region.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S8 FINAL CTA */}
      <section aria-labelledby="mt-fit" style={{ background: "#201F1E", padding: "0 20px 64px" }}>
        <div style={{ position: "relative", overflow: "hidden", borderRadius: "20px", background: "#2F2C2B", color: "#FFFFFF" }}>
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "-50px",
              top: "0",
              width: "160px",
              height: "96px",
              background: "#3A3736",
              clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
            }}
          />
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "80px",
              top: "0",
              width: "12px",
              height: "96px",
              background: "#DFE21B",
              transform: "skewX(-24deg)",
              color: "#201F1E",
            }}
          />
          <div style={{ position: "relative", padding: "88px 22px 32px", display: "flex", flexDirection: "column", gap: "18px" }}>
            <h2 id="mt-fit" style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>
              Not sure which model fits?
            </h2>
            <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Book a 30-minute consultation and we'll recommend the right model for your hiring plan.
            </p>
            <Link
              to="/contact"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "17px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Book a consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
