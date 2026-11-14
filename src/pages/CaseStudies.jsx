import { Link } from "react-router-dom";

// CaseStudies: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="cs-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "80px clamp(20px, 3.5vw, 32px) 72px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "32px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
              <Link to="/" style={{ color: "#C1C3C2" }}>
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Case Studies
              </span>
            </nav>
            <h1
              id="cs-h1"
              style={{
                margin: "0",
                fontSize: "clamp(46px, 5.6vw, 80px)",
                lineHeight: "1.02",
                letterSpacing: "-0.035em",
                fontWeight: "700",
              }}
            >
              Partnerships,
              <br />
              {"not "}
              <span>placements</span>
            </h1>
          </div>
          <p style={{ margin: "0", maxWidth: "480px", fontSize: "20px", lineHeight: "1.55", color: "#D3D9DB" }}>
            How we work with technology companies to build lasting capability.
          </p>
        </div>
      </section>
      {/* S2 SESTO ROBOTICS (case study block) */}
      <section aria-labelledby="sesto-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px) 48px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              paddingBottom: "32px",
              borderBottom: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
              <div
                style={{
                  width: "200px",
                  height: "72px",
                  borderRadius: "12px",
                  background: "#262423",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  Case study 01
                </span>
                <h2
                  id="sesto-h"
                  style={{
                    margin: "0",
                    fontSize: "clamp(34px, 3.6vw, 52px)",
                    lineHeight: "1.05",
                    letterSpacing: "-0.025em",
                    fontWeight: "700",
                  }}
                >
                  SESTO Robotics
                </h2>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Model: Fixed Fee Partnership
              </span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "#34312F", fontSize: "14px", fontWeight: "700" }}>
                Specialism: Robotics
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#201F1E",
                    border: "1.5px solid #C1C3C2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  1
                </span>
                The challenge
              </span>
              <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.35", fontWeight: "700" }}>Specialist project delivery hiring</p>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>As a Singapore robotics company scaling autonomous mobile robot deployments, SESTO needed project delivery specialists who pair technical depth with customer-facing execution. It is a niche profile that rarely responds to job ads, so they wanted a partner embedded in their hiring rather than a one-off agency.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#201F1E",
                    border: "1.5px solid #C1C3C2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  2
                </span>
                Our approach
              </span>
              <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.35", fontWeight: "700" }}>
                A dedicated TA Manager and a CRM-led hiring workflow
              </p>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>A fixed monthly fee gave SESTO a dedicated Talent Acquisition Manager working as an extension of their team, with a shared CRM pipeline that kept every candidate, interview and decision visible to both sides.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#201F1E",
                  }}
                >
                  3
                </span>
                The outcome
              </span>
              <p style={{ margin: "0", fontSize: "26px", lineHeight: "1.3", fontWeight: "700" }}>
                Two successful placements and a renewed partnership
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* S3 VELODB (case study block) */}
      <section aria-labelledby="velo-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "48px clamp(20px, 3.5vw, 32px) 96px",
            display: "flex",
            flexDirection: "column",
            gap: "32px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "24px",
              paddingBottom: "32px",
              borderBottom: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "28px" }}>
              <div
                style={{
                  width: "200px",
                  height: "72px",
                  borderRadius: "12px",
                  background: "#262423",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "12px 20px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/velodb.svg" alt="VeloDB" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  Case study 02
                </span>
                <h2
                  id="velo-h"
                  style={{
                    margin: "0",
                    fontSize: "clamp(34px, 3.6vw, 52px)",
                    lineHeight: "1.05",
                    letterSpacing: "-0.025em",
                    fontWeight: "700",
                  }}
                >
                  VeloDB
                </h2>
              </div>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  padding: "8px 14px",
                  borderRadius: "999px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                Model: Exclusive Search Partnership
              </span>
              <span style={{ padding: "8px 14px", borderRadius: "999px", background: "#34312F", fontSize: "14px", fontWeight: "700" }}>
                Specialism: Data
              </span>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#201F1E",
                    border: "1.5px solid #C1C3C2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  1
                </span>
                The challenge
              </span>
              <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.35", fontWeight: "700" }}>A Solution Architect search</p>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>VeloDB, the real-time analytics database built on Apache Doris, needed a Solution Architect who combines deep data-platform knowledge with the confidence to lead technical conversations with customers across APAC.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#201F1E",
                    border: "1.5px solid #C1C3C2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#FFFFFF",
                  }}
                >
                  2
                </span>
                Our approach
              </span>
              <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.35", fontWeight: "700" }}>
                Passive candidate identification through signal-based outreach
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "32px",
                borderRadius: "20px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
              }}
            >
              <span
                style={{
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
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "13px",
                    color: "#201F1E",
                  }}
                >
                  3
                </span>
                The outcome
              </span>
              <p style={{ margin: "0", fontSize: "26px", lineHeight: "1.3", fontWeight: "700" }}>
                Successful placement, leading to further assignments
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* S4 MORE COMING */}
      <section aria-label="More case studies" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.4", fontWeight: "700" }}>New case studies are published in Insights.</p>
          <Link
            to="/insights"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            Browse case studies in Insights
          </Link>
        </div>
      </section>
      {/* S5 CTA */}
      <section aria-labelledby="cs-cta" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <h2
            id="cs-cta"
            style={{ margin: "0", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            {"Your hiring could be the "}
            <span>next story</span>
          </h2>
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
        </div>
      </section>
    </main>
  );
}

// CaseStudies: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mcs-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "40px 20px 36px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Case Studies
            </span>
          </nav>
          <h1 id="mcs-h1" style={{ margin: "0", fontSize: "44px", lineHeight: "1.02", letterSpacing: "-0.035em", fontWeight: "700" }}>
            {"Partnerships, not "}
            <span>placements</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            How we work with technology companies to build lasting capability.
          </p>
        </div>
      </section>
      <section aria-labelledby="mcs-1" style={{ padding: "48px 20px 24px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <div
          style={{
            width: "168px",
            height: "60px",
            borderRadius: "10px",
            background: "#262423",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 16px",
            boxSizing: "border-box",
          }}
        >
          <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </div>
        <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
          Case study 01
        </span>
        <h2 id="mcs-1" style={{ margin: "0", fontSize: "34px", letterSpacing: "-0.025em", fontWeight: "700" }}>
          SESTO Robotics
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <span
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              background: "#2F2C2B",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Model: Fixed Fee Partnership
          </span>
          <span
            style={{ padding: "6px 12px", borderRadius: "999px", background: "#34312F", fontSize: "13px", fontWeight: "700" }}
            className="ax-tint"
          >
            Specialism: Robotics
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "16px", background: "#262423" }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
            1 · The challenge
          </span>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>Specialist project delivery hiring</p>
          <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#D3D9DB" }}>As a Singapore robotics company scaling autonomous mobile robot deployments, SESTO needed project delivery specialists who pair technical depth with customer-facing execution. It is a niche profile that rarely responds to job ads, so they wanted a partner embedded in their hiring rather than a one-off agency.</p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "16px", background: "#262423" }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
            2 · Our approach
          </span>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
            A dedicated TA Manager and a CRM-led hiring workflow
          </p>
          <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#D3D9DB" }}>A fixed monthly fee gave SESTO a dedicated Talent Acquisition Manager working as an extension of their team, with a shared CRM pipeline that kept every candidate, interview and decision visible to both sides.</p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            borderRadius: "16px",
            background: "#2F2C2B",
            color: "#FFFFFF",
            clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
            3 · The outcome
          </span>
          <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>
            Two successful placements and a renewed partnership
          </p>
        </div>
      </section>
      <section
        aria-labelledby="mcs-2"
        style={{
          padding: "32px 20px 56px",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
          borderTop: "1px solid #3A3736",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            width: "168px",
            height: "60px",
            borderRadius: "10px",
            background: "#262423",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px 16px",
            boxSizing: "border-box",
          }}
        >
          <img src="/assets/logos/velodb.svg" alt="VeloDB" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
        </div>
        <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
          Case study 02
        </span>
        <h2 id="mcs-2" style={{ margin: "0", fontSize: "34px", letterSpacing: "-0.025em", fontWeight: "700" }}>
          VeloDB
        </h2>
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px" }}>
          <span
            style={{
              padding: "6px 12px",
              borderRadius: "999px",
              background: "#2F2C2B",
              color: "#FFFFFF",
              fontSize: "13px",
              fontWeight: "700",
            }}
          >
            Model: Exclusive Search Partnership
          </span>
          <span
            style={{ padding: "6px 12px", borderRadius: "999px", background: "#34312F", fontSize: "13px", fontWeight: "700" }}
            className="ax-tint"
          >
            Specialism: Data
          </span>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "16px", background: "#262423" }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
            1 · The challenge
          </span>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>A Solution Architect search</p>
          <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.55", color: "#D3D9DB" }}>VeloDB, the real-time analytics database built on Apache Doris, needed a Solution Architect who combines deep data-platform knowledge with the confidence to lead technical conversations with customers across APAC.</p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "16px", background: "#262423" }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
            2 · Our approach
          </span>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
            Passive candidate identification through signal-based outreach
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            borderRadius: "16px",
            background: "#2F2C2B",
            color: "#FFFFFF",
            clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
          }}
        >
          <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
            3 · The outcome
          </span>
          <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>
            Successful placement, leading to further assignments
          </p>
        </div>
      </section>
      <section aria-label="More case studies" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.4", fontWeight: "700" }}>New case studies are published in Insights.</p>
          <Link
            to="/insights"
            style={{
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            Browse case studies in Insights
          </Link>
        </div>
      </section>
      <section aria-labelledby="mcs-cta" style={{ background: "#201F1E" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2 id="mcs-cta" style={{ margin: "0", fontSize: "34px", lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Your hiring could be the "}
            <span>next story</span>
          </h2>
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
      </section>
    </main>
  );
}
