import { Link } from "react-router-dom";

// Home: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="hero-h" style={{ position: "relative", overflow: "hidden", background: "#201F1E" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px) 88px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(540px, 100%), 1fr))",
            gap: "64px",
            alignItems: "center",
          }}
        >
          <div className="reveal" style={{ display: "flex", flexDirection: "column", gap: "28px", alignItems: "flex-start" }}>
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
              AI · Data · Deep Tech · Robotics
            </p>
            <h1
              id="hero-h"
              style={{
                margin: "0",
                fontSize: "clamp(44px, 5.4vw, 76px)",
                lineHeight: "1.02",
                letterSpacing: "-0.03em",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              {"Talent Partner to Build the "}
              <span>AI-Powered World</span>
            </h1>
            <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.4", fontWeight: "700", color: "#D3D9DB" }}>
              Specialist talent expertise. Predictable recruitment value.
            </p>
            <p style={{ margin: "0", maxWidth: "560px", fontSize: "18px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Hiring for AI-driven startups and scale-ups across APAC and the US, delivered as an advisory partnership with transparent
              pricing.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(250px, 100%), 1fr))",
                gap: "12px",
                width: "100%",
                maxWidth: "600px",
                marginTop: "8px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#2F2C2B",
                }}
              >
                <span
                  style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  I'm building a team
                </span>
                <Link
                  className="btn btn-yellow"
                  to="/contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    height: "52px",
                    padding: "0 20px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#201F1E",
                  border: "1px solid #4E4748",
                }}
              >
                <span
                  style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  I'm exploring opportunities
                </span>
                <Link
                  className="btn btn-ghost"
                  to="/open-roles"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "10px",
                    height: "52px",
                    padding: "0 20px",
                    borderRadius: "999px",
                    background: "#201F1E",
                    border: "1.5px solid #C1C3C2",
                    color: "#FFFFFF",
                    fontSize: "16px",
                    fontWeight: "700",
                    textDecoration: "none",
                  }}
                >
                  Explore open roles
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
              </div>
            </div>
          </div>
          <div
            style={{
              justifySelf: "end",
              width: "100%",
              maxWidth: "600px",
              aspectRatio: "560 / 520",
              borderRadius: "24px",
              background: "#262423",
              backgroundImage: "url(/images/hero-team.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              lineHeight: "1.6",
              color: "#C1C3C2",
            }}
          >
          </div>
        </div>
        {/* Trust strip */}
        <div style={{ borderTop: "1px solid #3A3736", background: "#201F1E" }}>
          <div
            style={{
              maxWidth: "1344px",
              margin: "0 auto",
              padding: "22px clamp(20px, 3.5vw, 32px)",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px 40px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "104px",
                  height: "40px",
                  borderRadius: "6px",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 10px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/rcsa.jpg" alt="RCSA" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>RCSA Corporate Member</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
              <div
                style={{
                  width: "104px",
                  height: "40px",
                  borderRadius: "6px",
                  background: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "5px 10px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/apsco.png" alt="APSCo" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>APSCo Southeast Asia</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Part of Celotti Group since 2013</span>
            </div>
          </div>
        </div>
      </section>
      {/* S2 PROBLEM */}
      <section aria-labelledby="prob-h" style={{ background: "#262423" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
              gap: "32px 64px",
              alignItems: "end",
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
                What we believe
              </p>
              <h2
                id="prob-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                The AI-powered world can't be built through transactional recruitment
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB", maxWidth: "560px" }}>
              It takes advisory, data-driven partnership. As AI reshapes industries, organisations need specialist expertise and long-term
              partners, not just access to CVs.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "48px",
                  height: "48px",
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
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Finding specialist AI and Data talent</h3>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "48px",
                  height: "48px",
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
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Understanding emerging skill needs</h3>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "48px",
                  height: "48px",
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
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="12" cy="12" r="0.6" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Competing for high-demand candidates</h3>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "40px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  width: "48px",
                  height: "48px",
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
                  height="24"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.9"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Retaining critical talent</h3>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "16px 28px",
              paddingTop: "32px",
              borderTop: "1px solid #4E4748",
            }}
          >
            <p style={{ margin: "0", fontSize: "clamp(22px, 2vw, 28px)", lineHeight: "1.35", color: "#C1C3C2" }}>
              Most recruitment models are built to fill vacancies.
            </p>
            <p style={{ margin: "0", fontSize: "clamp(22px, 2vw, 28px)", lineHeight: "1.35", fontWeight: "700", color: "#FFFFFF" }}>
              <span>CTT was built to solve talent challenges.</span>
            </p>
          </div>
        </div>
      </section>
      {/* S6 PROOF */}
      <section aria-labelledby="proof-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px" }}>
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
                Case studies
              </p>
              <h2
                id="proof-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Partnerships that keep growing
              </h2>
            </div>
            <Link
              className="alink"
              to="/case-studies"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "700",
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Read the case studies
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
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))", gap: "20px" }}>
            <a
              className="card alink"
              href="/case-studies/"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "32px",
                borderRadius: "16px",
                background: "#262423",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <div
                  style={{
                    width: "180px",
                    height: "56px",
                    borderRadius: "8px",
                    background: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 16px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
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
                  Fixed Fee Partnership
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
                  SESTO Robotics
                </h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#D3D9DB" }}>
                  2 placements and a partnership renewal.
                </p>
              </div>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700", marginTop: "auto" }}
              >
                Read the case study
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
              </span>
            </a>
            <a
              className="card alink"
              href="/case-studies/"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "32px",
                borderRadius: "16px",
                background: "#262423",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                <div
                  style={{
                    width: "180px",
                    height: "56px",
                    borderRadius: "8px",
                    background: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px 16px",
                    boxSizing: "border-box",
                    overflow: "hidden",
                  }}
                >
                  <img src="/assets/logos/velodb.svg" alt="VeloDB" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
                </div>
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
                  Exclusive Search Partnership
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>VeloDB</h3>
                <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#D3D9DB" }}>
                  Solution Architect placed from passive talent, leading to further assignments.
                </p>
              </div>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700", marginTop: "auto" }}
              >
                Read the case study
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
              </span>
            </a>
          </div>
        </div>
      </section>
      {/* CLIENTS AND PARTNERS (added from 24 Oct review) */}
      <section aria-label="Clients and partners" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "0 clamp(20px, 3.5vw, 32px) 120px",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              Clients and partners
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
              <div
                style={{
                  height: "72px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/weconnect-international.jpg" alt="WEConnect International" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div
                style={{
                  height: "72px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/austcham-singapore.png" alt="AustCham Singapore" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              Our team's enterprise experience
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))", gap: "12px" }}>
              <div
                style={{
                  height: "72px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/microsoft.svg" alt="Microsoft" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div
                style={{
                  height: "72px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/visa.svg" alt="Visa" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S3 SPECIALISMS */}
      <section aria-labelledby="spec-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px" }}>
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
                What we specialise in
              </p>
              <h2
                id="spec-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Four specialisms. One focus.
              </h2>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
            <Link
              className="card alink"
              to="/specialisms/ai"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "340px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                className="bar"
                style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "5px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                  01
                </span>
              </div>
              <svg
                aria-hidden="true"
                fill="none"
                height="40"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="40"
                className="ax-icon"
              >
                <rect height="12" rx="2" width="12" x="6" y="6" />
                <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                <path d="M10 10h4v4h-4z" />
              </svg>
              <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>AI</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>
                Chief AI Officers to LLM, ML and MLOps engineers.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Explore AI talent
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
              </span>
            </Link>
            <Link
              className="card alink"
              to="/specialisms/data"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "340px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                className="bar"
                style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "5px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                  02
                </span>
              </div>
              <svg
                aria-hidden="true"
                fill="none"
                height="40"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="40"
                className="ax-icon"
              >
                <ellipse cx="12" cy="5" rx="8" ry="3" />
                <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
              </svg>
              <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>Data</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>
                Chief Data Officers to data engineers, scientists and governance leads.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Explore Data talent
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
              </span>
            </Link>
            <Link
              className="card alink"
              to="/specialisms/deep-tech"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "340px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                className="bar"
                style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "5px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                  03
                </span>
              </div>
              <svg
                aria-hidden="true"
                fill="none"
                height="40"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="40"
                className="ax-icon"
              >
                <circle cx="12" cy="12" r="1.5" />
                <ellipse cx="12" cy="12" rx="10" ry="4" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
              </svg>
              <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>Deep Tech</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>
                Quantum, semiconductors, photonics, space and climate tech.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Explore Deep Tech talent
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
              </span>
            </Link>
            <Link
              className="card alink"
              to="/specialisms/robotics"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                minHeight: "340px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                className="bar"
                style={{ position: "absolute", left: "0", top: "0", width: "100%", height: "5px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                  04
                </span>
              </div>
              <svg
                aria-hidden="true"
                fill="none"
                height="40"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                width="40"
                className="ax-icon"
              >
                <path d="M4 21h9" />
                <path d="M8.5 21v-4" />
                <circle cx="8.5" cy="15" r="2" />
                <path d="M10 13.5L15 8.5" />
                <circle cx="16.5" cy="7" r="2" />
                <path d="M18.5 7H21M18 5l1.8-1.8M18 9l1.8 1.8" />
              </svg>
              <h3 style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>Robotics</h3>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>
                Robotics, autonomy, controls, embedded and computer vision engineers.
              </p>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Explore Robotics talent
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
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/* S5 HOW WE WORK */}
      <section aria-labelledby="hww-h" style={{ background: "#2F2C2B", color: "#FFFFFF", position: "relative", overflow: "hidden" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "64px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
              gap: "32px 64px",
              alignItems: "end",
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
                How we work
              </p>
              <h2
                id="hww-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                {"AI-powered. "}
                <span style={{ color: "#DFE21B" }}>Human-led.</span>
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB", maxWidth: "560px" }}>
              AI does the heavy lifting on sourcing and screening. Specialists lead every conversation that matters.
            </p>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: "0",
              borderTop: "1px solid #4E4748",
            }}
          >
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 28px 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  1
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    height: "1px",
                    background: "repeating-linear-gradient(90deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-h"
                />
              </div>
              <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>{"Discovery & Alignment"}</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                Intake call captured by an AI notetaker. Scorecard and detailed job description agreed.
              </p>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 28px 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  2
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    height: "1px",
                    background: "repeating-linear-gradient(90deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-h"
                />
              </div>
              <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>Talent Mapping</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                Multi-channel advertising plus a search of CTT's proprietary database.
              </p>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 28px 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  3
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    height: "1px",
                    background: "repeating-linear-gradient(90deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-h"
                />
              </div>
              <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>Precision Shortlisting</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                AI ranks the pool and runs first-pass screening. Consultants interview by video.
              </p>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 0 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  4
                </span>
              </div>
              <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>{"Partnership & Delivery"}</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                Shortlist delivered, interviews coordinated, offer, references and onboarding.
              </p>
            </li>
          </ol>
          {/* AI human handoff */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(420px, 100%), 1fr))",
              gap: "0",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid #4E4748",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 32px", background: "#383533" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#C1C3C2",
                }}
                className="ax-text"
              >
                <span
                  aria-hidden="true"
                  style={{ width: "12px", height: "12px", borderRadius: "999px", border: "2px solid #DFE21B", display: "block" }}
                  className="ax-ring"
                />
                Where AI helps
              </span>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#FFFFFF" }}>
                Capturing requirements, matching and ranking, personalised outreach, first-pass assessment.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "28px 32px", background: "#4E4748" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#DFE21B",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "block",
                    color: "#201F1E",
                  }}
                />
                Where people take over
              </span>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#FFFFFF" }}>
                The moment a candidate replies, automation stops and a dedicated specialist leads every conversation.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "44px",
                  padding: "0 18px",
                  borderRadius: "999px",
                  border: "1px solid #60554F",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                Shortlist of 3 to 5 candidates per role
              </span>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "44px",
                  padding: "0 18px",
                  borderRadius: "999px",
                  border: "1px solid #60554F",
                  fontSize: "15px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                }}
              >
                Guarantee periods up to 12 months
              </span>
            </div>
            <Link
              className="btn btn-ghost-dark"
              to="/how-we-work"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "52px",
                padding: "0 24px",
                borderRadius: "999px",
                border: "1.5px solid #60554F",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              See how we work
              <svg
                aria-hidden="true"
                className="arr"
                fill="none"
                height="18"
                stroke="#DFE21B"
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
      {/* S4 TALENT AS A SERVICE TEASER */}
      <section aria-labelledby="taas-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
              gap: "32px 64px",
              alignItems: "end",
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
                Our transparent pricing model
              </p>
              <h2
                id="taas-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Recruitment, priced as clearly as a SaaS plan
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB", maxWidth: "560px" }}>
              Four engagement models with published pricing, so you know what you pay and what you get before you start.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                <h3 style={{ margin: "8px 0 0", fontSize: "21px", lineHeight: "1.25", fontWeight: "700" }}>Fixed Fee Partnership</h3>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "20px", borderTop: "1px solid #4E4748" }}>
                <span style={{ fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>10%</span>
                <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>+ monthly partnership fee</p>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                <h3 style={{ margin: "8px 0 0", fontSize: "21px", lineHeight: "1.25", fontWeight: "700" }}>Fixed Fee Search Partnership</h3>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "20px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>15%</span>
                <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>+ monthly engagement fee</p>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "2px solid #DFE21B",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                <h3 style={{ margin: "8px 0 0", fontSize: "21px", lineHeight: "1.25", fontWeight: "700" }}>Exclusive Search Partnership</h3>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "20px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>18%</span>
                <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>Success fee only</p>
            </div>
            <div
              className="card"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
                <h3 style={{ margin: "8px 0 0", fontSize: "21px", lineHeight: "1.25", fontWeight: "700" }}>Retained Search Partnership</h3>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "20px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "56px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>20%</span>
                <span style={{ fontSize: "16px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#D3D9DB" }}>Paid in three stages</p>
            </div>
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
                <span style={{ fontSize: "24px", fontWeight: "700" }}>Monthly rate on request</span>
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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "20px" }}>
            <p style={{ margin: "0", fontSize: "15px", color: "#C1C3C2" }}>TAC = Total Annual Compensation of the hired candidate.</p>
            <Link
              className="btn btn-dark"
              to="/talent-as-a-service"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "52px",
                padding: "0 24px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Compare engagement models
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
      {/* PEOPLE-START */}
      {/* PEOPLE (leadership + key team, 30 Oct review) */}
      <section aria-labelledby="ppl-h" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px" }}>
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
                Our people
              </p>
              <h2
                id="ppl-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                The people behind CTT
              </h2>
            </div>
            <Link
              to="/about"
              style={{
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Meet the team
            </Link>
          </div>
          <h3
            style={{
              margin: "8px 0 0",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            Leadership
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                SC
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Suzie Celotti</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>{"Founder & Director"}</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                AC
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Adrian Celotti</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Director</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                DK
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Dharshan Kumar</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>{"Business Head, AI & Data"}</span>
            </div>
          </div>
          <h3
            style={{
              margin: "8px 0 0",
              fontSize: "14px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            Key team
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(240px, 100%), 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                VP
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Veena Pujari</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Talent Advisory</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                KR
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Kavena Rama</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg, #34312F, #262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  fontWeight: "700",
                  fontSize: "56px",
                  letterSpacing: "-0.02em",
                  color: "#DFE21B",
                }}
                aria-hidden="true"
              >
                A
              </div>
              <p style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>Alex</p>
              <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
            </div>
          </div>
        </div>
      </section>
      {/* S7 INSIGHTS */}
      <section aria-labelledby="ins-h" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "120px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "24px" }}>
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
                Insights
              </p>
              <h2
                id="ins-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Insights for the AI-powered world
              </h2>
            </div>
            <Link
              className="alink"
              to="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "16px",
                fontWeight: "700",
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              All insights
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
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(320px, 100%), 1fr))", gap: "24px" }}>
            <a
              className="card"
              href="/insights/article/"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                overflow: "hidden",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  background: "#34312F",
                  backgroundImage: "url(/images/future-of-work.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#D3D9DB",
                  }}
                  className="ax-tint"
                >
                  Future of Work
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>
                  The Work of the Future Is Here
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>12 Nov 2026 · 6 min read</p>
              </div>
            </a>
            <a
              className="card"
              href="/insights/article/"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                overflow: "hidden",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  background: "#34312F",
                  backgroundImage: "url(/images/ai.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#D3D9DB",
                  }}
                  className="ax-tint"
                >
                  Artificial Intelligence
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>
                  The AI-Powered World Is Reshaping Talent
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>28 Oct 2026 · 5 min read</p>
              </div>
            </a>
            <a
              className="card"
              href="/insights/article/"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                overflow: "hidden",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 10",
                  background: "#34312F",
                  backgroundImage: "url(/images/teams.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#D3D9DB",
                  }}
                  className="ax-tint"
                >
                  Workforce Planning
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>
                  Building High-Performance AI, Data and Technology Teams
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>9 Oct 2026 · 7 min read</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* S8 TALENT BAND (dark CTA band · brown) */}
      <section aria-labelledby="tal-h" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-40px",
            top: "0",
            bottom: "0",
            width: "420px",
            background: "#60554F",
            clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "300px",
            top: "0",
            bottom: "0",
            width: "26px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "40px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "640px" }}>
            <p
              style={{
                margin: "0",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#DFE21B",
              }}
            >
              For talent
            </p>
            <h2
              id="tal-h"
              style={{ margin: "0", fontSize: "clamp(32px, 3.2vw, 46px)", lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }}
            >
              Explore specialist opportunities with CTT
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#E4E7E8" }}>
              Join a talent community built for AI, Data, Deep Tech and Robotics professionals.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginRight: "clamp(0px, 22vw, 340px)" }}>
            <Link
              className="btn btn-yellow"
              to="/join"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "52px",
                padding: "0 24px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Join the talent community
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
            <Link
              className="btn btn-ghost-dark"
              to="/open-roles"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "52px",
                padding: "0 24px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              View open roles
            </Link>
          </div>
        </div>
      </section>
      {/* S9 FINAL CTA */}
      <section aria-labelledby="cta-h" style={{ background: "#201F1E" }} className="ax-glow-b">
        <div
          style={{
            maxWidth: "1040px",
            margin: "0 auto",
            padding: "128px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "32px",
            textAlign: "center",
          }}
        >
          <h2
            id="cta-h"
            style={{ margin: "0", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            {"Let's build stronger AI and Data capability "}
            <span>together</span>
          </h2>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "center", gap: "16px 28px" }}>
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
            <a href="mailto:advisory@celottitechtalent.com" style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>
              advisory@celottitechtalent.com
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// Home: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      {/* S1 HERO */}
      <section aria-labelledby="m-hero" style={{ background: "#201F1E" }} className="ax-glow">
        <div style={{ padding: "48px 20px 40px", display: "flex", flexDirection: "column", gap: "20px" }}>
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
            AI · Data · Deep Tech · Robotics
          </p>
          <h1 id="m-hero" style={{ margin: "0", fontSize: "42px", lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Talent Partner to Build the "}
            <span>AI-Powered World</span>
          </h1>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.4", fontWeight: "700", color: "#D3D9DB" }}>
            Specialist talent expertise. Predictable recruitment value.
          </p>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Hiring for AI-driven startups and scale-ups across APAC and the US, delivered as an advisory partnership with transparent
            pricing.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
                borderRadius: "16px",
                background: "#2F2C2B",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                I'm building a team
              </span>
              <Link
                to="/contact"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "52px",
                  padding: "0 20px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "16px",
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
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "16px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #4E4748",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                I'm exploring opportunities
              </span>
              <Link
                to="/open-roles"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "52px",
                  padding: "0 20px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Explore open roles
                <svg
                  aria-hidden="true"
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
            </div>
          </div>
          <div
            style={{
              width: "100%",
              aspectRatio: "4 / 3",
              marginTop: "12px",
              borderRadius: "20px",
              background: "#262423",
              backgroundImage: "url(/images/hero-team.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              lineHeight: "1.6",
              color: "#C1C3C2",
            }}
          >
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid #3A3736",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            background: "#201F1E",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "88px",
                height: "36px",
                flexShrink: "0",
                borderRadius: "6px",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 10px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <img src="/assets/logos/rcsa.jpg" alt="RCSA" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>RCSA Corporate Member</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: "88px",
                height: "36px",
                flexShrink: "0",
                borderRadius: "6px",
                background: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "5px 10px",
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <img src="/assets/logos/apsco.png" alt="APSCo" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>APSCo Southeast Asia</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              aria-hidden="true"
              style={{
                width: "9px",
                height: "9px",
                margin: "0 39px",
                background: "#DFE21B",
                display: "block",
                transform: "skewX(-20deg)",
                color: "#201F1E",
              }}
            />
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Part of Celotti Group since 2013</span>
          </div>
        </div>
      </section>
      {/* S2 PROBLEM */}
      <section aria-labelledby="m-prob" style={{ background: "#262423" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            What we believe
          </p>
          <h2 id="m-prob" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            The AI-powered world can't be built through transactional recruitment
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            It takes advisory, data-driven partnership. As AI reshapes industries, organisations need specialist expertise and long-term
            partners, not just access to CVs.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
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
                  <circle cx="11" cy="11" r="7" />
                  <path d="M20 20l-4-4" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "18px", lineHeight: "1.3", fontWeight: "700" }}>Finding specialist AI and Data talent</h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
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
                  <path d="M3 17l6-6 4 4 8-8" />
                  <path d="M15 7h6v6" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "18px", lineHeight: "1.3", fontWeight: "700" }}>Understanding emerging skill needs</h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
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
                  <circle cx="12" cy="12" r="8" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "18px", lineHeight: "1.3", fontWeight: "700" }}>Competing for high-demand candidates</h3>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "16px",
                padding: "18px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
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
                  <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
                  <path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3 style={{ margin: "0", fontSize: "18px", lineHeight: "1.3", fontWeight: "700" }}>Retaining critical talent</h3>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px", paddingTop: "24px", borderTop: "1px solid #4E4748" }}>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.4", color: "#C1C3C2" }}>
              Most recruitment models are built to fill vacancies.
            </p>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.4", fontWeight: "700" }}>
              <span>CTT was built to solve talent challenges.</span>
            </p>
          </div>
        </div>
      </section>
      {/* S6 PROOF */}
      <section aria-labelledby="m-proof" style={{ background: "#201F1E" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            Case studies
          </p>
          <h2 id="m-proof" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Partnerships that keep growing
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
            <a
              href="/case-studies/"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "22px",
                borderRadius: "14px",
                background: "#262423",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Fixed Fee Partnership
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "700" }}>SESTO Robotics</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                  2 placements and a partnership renewal.
                </p>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Read the case study
                <svg
                  aria-hidden="true"
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
              </span>
            </a>
            <a
              href="/case-studies/"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "22px",
                borderRadius: "14px",
                background: "#262423",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "160px",
                  height: "48px",
                  borderRadius: "8px",
                  background: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/velodb.svg" alt="VeloDB" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "5px 10px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    color: "#FFFFFF",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  Exclusive Search Partnership
                </span>
                <h3 style={{ margin: "4px 0 0", fontSize: "24px", fontWeight: "700" }}>VeloDB</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                  Solution Architect placed from passive talent, leading to further assignments.
                </p>
              </div>
              <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "15px", fontWeight: "700" }}>
                Read the case study
                <svg
                  aria-hidden="true"
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
              </span>
            </a>
          </div>
          <Link
            to="/case-studies"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#FFFFFF",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            Read the case studies
          </Link>
        </div>
      </section>
      {/* CLIENTS AND PARTNERS (added from 24 Oct review) */}
      <section aria-label="Clients and partners" style={{ background: "#201F1E" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "28px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              Clients and partners
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div
                style={{
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/weconnect-international.jpg" alt="WEConnect International" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div
                style={{
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/austcham-singapore.png" alt="AustCham Singapore" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
            <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              Our team's enterprise experience
            </span>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
              <div
                style={{
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/microsoft.svg" alt="Microsoft" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <div
                style={{
                  height: "56px",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FFFFFF",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                  overflow: "hidden",
                }}
              >
                <img src="/assets/logos/visa.svg" alt="Visa" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S3 SPECIALISMS */}
      <section aria-labelledby="m-spec" style={{ background: "#201F1E" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            What we specialise in
          </p>
          <h2 id="m-spec" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Four specialisms. One focus.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
            <Link
              to="/specialisms/ai"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "0", top: "0", width: "64px", height: "4px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="32"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="32"
                  className="ax-icon"
                >
                  <rect height="12" rx="2" width="12" x="6" y="6" />
                  <path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" />
                  <path d="M10 10h4v4h-4z" />
                </svg>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700", flexGrow: "1" }}>AI</h3>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Chief AI Officers to LLM, ML and MLOps engineers.
              </p>
            </Link>
            <Link
              to="/specialisms/data"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "0", top: "0", width: "64px", height: "4px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="32"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="32"
                  className="ax-icon"
                >
                  <ellipse cx="12" cy="5" rx="8" ry="3" />
                  <path d="M4 5v14c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
                  <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
                </svg>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700", flexGrow: "1" }}>Data</h3>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Chief Data Officers to data engineers, scientists and governance leads.
              </p>
            </Link>
            <Link
              to="/specialisms/deep-tech"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "0", top: "0", width: "64px", height: "4px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="32"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="32"
                  className="ax-icon"
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
                </svg>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700", flexGrow: "1" }}>Deep Tech</h3>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Quantum, semiconductors, photonics, space and climate tech.
              </p>
            </Link>
            <Link
              to="/specialisms/robotics"
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "22px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%)",
                overflow: "hidden",
              }}
            >
              <span
                aria-hidden="true"
                style={{ position: "absolute", left: "0", top: "0", width: "64px", height: "4px", background: "#DFE21B", color: "#201F1E" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="32"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="32"
                  className="ax-icon"
                >
                  <path d="M4 21h9" />
                  <path d="M8.5 21v-4" />
                  <circle cx="8.5" cy="15" r="2" />
                  <path d="M10 13.5L15 8.5" />
                  <circle cx="16.5" cy="7" r="2" />
                  <path d="M18.5 7H21M18 5l1.8-1.8M18 9l1.8 1.8" />
                </svg>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700", flexGrow: "1" }}>Robotics</h3>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="20"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Robotics, autonomy, controls, embedded and computer vision engineers.
              </p>
            </Link>
          </div>
        </div>
      </section>
      {/* S5 HOW WE WORK */}
      <section aria-labelledby="m-hww" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            How we work
          </p>
          <h2 id="m-hww" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            {"AI-powered. "}
            <span style={{ color: "#DFE21B" }}>Human-led.</span>
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            AI does the heavy lifting on sourcing and screening. Specialists lead every conversation that matters.
          </p>
          <ol style={{ listStyle: "none", margin: "8px 0 0", padding: "0", display: "flex", flexDirection: "column" }}>
            <li style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  1
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "1px",
                    background: "repeating-linear-gradient(180deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-v"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 0 28px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>{"Discovery & Alignment"}</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                  Intake call captured by an AI notetaker. Scorecard and detailed job description agreed.
                </p>
              </div>
            </li>
            <li style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  2
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "1px",
                    background: "repeating-linear-gradient(180deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-v"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 0 28px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Talent Mapping</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                  Multi-channel advertising plus a search of CTT's proprietary database.
                </p>
              </div>
            </li>
            <li style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  3
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "1px",
                    background: "repeating-linear-gradient(180deg, #60554F 0 4px, transparent 4px 10px)",
                  }}
                  className="ax-dash-v"
                />
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 0 28px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Precision Shortlisting</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                  AI ranks the pool and runs first-pass screening. Consultants interview by video.
                </p>
              </div>
            </li>
            <li style={{ display: "flex", gap: "16px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  4
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px", padding: "6px 0 8px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>{"Partnership & Delivery"}</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#C1C3C2" }}>
                  Shortlist delivered, interviews coordinated, offer, references and onboarding.
                </p>
              </div>
            </li>
          </ol>
          <div style={{ display: "flex", flexDirection: "column", borderRadius: "14px", overflow: "hidden", border: "1px solid #4E4748" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "20px", background: "#383533" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#C1C3C2",
                }}
                className="ax-text"
              >
                <span
                  aria-hidden="true"
                  style={{ width: "11px", height: "11px", borderRadius: "999px", border: "2px solid #DFE21B", display: "block" }}
                  className="ax-ring"
                />
                Where AI helps
              </span>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                Capturing requirements, matching and ranking, personalised outreach, first-pass assessment.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "20px", background: "#4E4748" }}>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#DFE21B",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "11px",
                    height: "11px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "block",
                    color: "#201F1E",
                  }}
                />
                Where people take over
              </span>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55" }}>
                The moment a candidate replies, automation stops and a dedicated specialist leads every conversation.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                height: "40px",
                padding: "0 14px",
                borderRadius: "999px",
                border: "1px solid #60554F",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Shortlist of 3 to 5 candidates per role
            </span>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                height: "40px",
                padding: "0 14px",
                borderRadius: "999px",
                border: "1px solid #60554F",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              Guarantee up to 12 months
            </span>
          </div>
          <Link
            to="/how-we-work"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              height: "52px",
              borderRadius: "999px",
              border: "1.5px solid #60554F",
              color: "#FFFFFF",
              fontSize: "16px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            See how we work
            <svg
              aria-hidden="true"
              fill="none"
              height="18"
              stroke="#DFE21B"
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
      {/* S4 TAAS */}
      <section aria-labelledby="m-taas" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            Our transparent pricing model
          </p>
          <h2 id="m-taas" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Recruitment, priced as clearly as a SaaS plan
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Four engagement models with published pricing, so you know what you pay and what you get before you start.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Fixed Fee Partnership</h3>
                <span
                  style={{
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
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "14px", borderTop: "1px solid #4E4748" }}>
                <span style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>10%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", color: "#D3D9DB" }}>+ monthly partnership fee</p>
            </div>
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Fixed Fee Search Partnership</h3>
                <span
                  style={{
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
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "14px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>15%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", color: "#D3D9DB" }}>+ monthly engagement fee</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "22px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "2px solid #DFE21B",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Exclusive Search Partnership</h3>
                <span
                  style={{
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
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "14px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>18%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", color: "#D3D9DB" }}>Success fee only</p>
            </div>
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Retained Search Partnership</h3>
                <span
                  style={{
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
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "8px", paddingTop: "14px", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "44px", lineHeight: "1", letterSpacing: "-0.03em", fontWeight: "700" }}>20%</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>of TAC</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", color: "#D3D9DB" }}>Paid in three stages</p>
            </div>
          </div>
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
              <span style={{ fontSize: "20px", fontWeight: "700" }}>Monthly rate on request</span>
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
          <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>TAC = Total Annual Compensation of the hired candidate.</p>
          <Link
            to="/talent-as-a-service"
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
            Compare engagement models
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
        </div>
      </section>
      {/* PEOPLE-START */}
      {/* PEOPLE */}
      <section aria-labelledby="m-ppl" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <p
            style={{
              margin: "0",
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "13px",
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
            Our people
          </p>
          <h2 id="m-ppl" style={{ margin: "0 0 6px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            The people behind CTT
          </h2>
          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            Leadership
          </h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              SC
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Suzie Celotti</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>{"Founder & Director"}</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              AC
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Adrian Celotti</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Director</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              DK
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Dharshan Kumar</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>{"Business Head, AI & Data"}</span>
            </div>
          </div>
          <h3
            style={{
              margin: "10px 0 0",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            Key team
          </h3>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              VP
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Veena Pujari</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Talent Advisory</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              KR
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Kavena Rama</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
            </div>
          </div>
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            <div
              style={{
                width: "80px",
                height: "100px",
                flexShrink: "0",
                borderRadius: "14px",
                background: "linear-gradient(135deg, #34312F, #262423)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                fontWeight: "700",
                fontSize: "32px",
                letterSpacing: "-0.02em",
                color: "#DFE21B",
              }}
              aria-hidden="true"
            >
              A
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <p style={{ margin: "0", fontSize: "19px", fontWeight: "700" }}>Alex</p>
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
            </div>
          </div>
        </div>
      </section>
      {/* S7 INSIGHTS */}
      <section aria-labelledby="m-ins" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
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
            Insights
          </p>
          <h2 id="m-ins" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Insights for the AI-powered world
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
            <a
              href="/insights/article/"
              style={{
                display: "flex",
                flexDirection: "column",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                overflow: "hidden",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  aspectRatio: "16 / 9",
                  background: "#34312F",
                  backgroundImage: "url(/images/future-of-work.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px 18px 22px" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#34312F",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#D3D9DB",
                  }}
                  className="ax-tint"
                >
                  Future of Work
                </span>
                <h3 style={{ margin: "0", fontSize: "19px", lineHeight: "1.3", fontWeight: "700" }}>
                  The Work of the Future Is Here
                </h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>12 Nov 2026 · 6 min read</p>
              </div>
            </a>
            <a
              href="/insights/article/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "88px",
                  height: "72px",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#34312F",
                  backgroundImage: "url(/images/ai.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>
                  The AI-Powered World Is Reshaping Talent
                </h3>
                <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Artificial Intelligence · 28 Oct 2026</p>
              </div>
            </a>
            <a
              href="/insights/article/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px",
                borderRadius: "14px",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
              }}
            >
              <div
                style={{
                  width: "88px",
                  height: "72px",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#34312F",
                  backgroundImage: "url(/images/teams.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>
                  Building High-Performance AI, Data and Technology Teams
                </h3>
                <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Workforce Planning · 9 Oct 2026</p>
              </div>
            </a>
          </div>
          <Link
            to="/insights"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "16px",
              fontWeight: "700",
              color: "#FFFFFF",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            All insights
          </Link>
        </div>
      </section>
      {/* S8 TALENT BAND */}
      <section aria-labelledby="m-tal" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-60px",
            top: "0",
            width: "180px",
            height: "120px",
            background: "#60554F",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "96px",
            top: "0",
            width: "14px",
            height: "120px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div style={{ position: "relative", padding: "112px 20px 64px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <p
            style={{
              margin: "0",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#DFE21B",
            }}
          >
            For talent
          </p>
          <h2 id="m-tal" style={{ margin: "0", fontSize: "30px", lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }}>
            Explore specialist opportunities with CTT
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#E4E7E8" }}>
            Join a talent community built for AI, Data, Deep Tech and Robotics professionals.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "8px" }}>
            <Link
              to="/join"
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
              Join the talent community
            </Link>
            <Link
              to="/open-roles"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "52px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                color: "#FFFFFF",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              View open roles
            </Link>
          </div>
        </div>
      </section>
      {/* S9 FINAL CTA */}
      <section aria-labelledby="m-cta" style={{ background: "#201F1E" }} className="ax-glow-b">
        <div style={{ padding: "80px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2 id="m-cta" style={{ margin: "0", fontSize: "34px", lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Let's build stronger AI and Data capability "}
            <span>together</span>
          </h2>
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
            href="mailto:advisory@celottitechtalent.com"
            style={{ alignSelf: "center", fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}
          >
            advisory@celottitechtalent.com
          </a>
        </div>
      </section>
    </main>
  );
}
