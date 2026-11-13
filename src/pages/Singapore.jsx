import { Link } from "react-router-dom";

// Singapore: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="sg-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "80px clamp(20px, 3.5vw, 32px) 88px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(560px, 100%), 1fr))",
            gap: "48px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", alignItems: "flex-start" }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
              <Link to="/" style={{ color: "#C1C3C2" }}>
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span>Markets</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Singapore
              </span>
            </nav>
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
              Market · Singapore
            </p>
            <h1
              id="sg-h1"
              style={{ margin: "0", fontSize: "clamp(42px, 5vw, 70px)", lineHeight: "1.03", letterSpacing: "-0.03em", fontWeight: "700" }}
            >
              {"AI and technology recruitment in "}
              <span>Singapore</span>
            </h1>
            <p style={{ margin: "0", maxWidth: "560px", fontSize: "20px", lineHeight: "1.55", color: "#D3D9DB" }}>
              Specialist AI, Data, Deep Tech and Robotics hiring for companies building in Singapore.
            </p>
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
          <div
            aria-hidden="true"
            style={{
              justifySelf: "end",
              width: "100%",
              maxWidth: "520px",
              aspectRatio: "13 / 10",
              position: "relative",
              borderRadius: "24px",
              background: "#2F2C2B",
              overflow: "hidden",
              clipPath: "polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: "0",
                backgroundImage: "radial-gradient(#4E4748 1.5px, transparent 1.5px)",
                backgroundSize: "22px 22px",
              }}
            />
            <div
              style={{
                position: "absolute",
                left: "32px",
                top: "32px",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.14em",
                color: "#DFE21B",
              }}
            >
              MARKET
            </div>
            <div
              style={{
                position: "absolute",
                left: "28px",
                bottom: "16px",
                fontSize: "168px",
                lineHeight: "1",
                letterSpacing: "-0.06em",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              SG
            </div>
            <div
              style={{
                position: "absolute",
                right: "64px",
                top: "44%",
                width: "22px",
                height: "22px",
                borderRadius: "999px",
                background: "#DFE21B",
                boxShadow: "0 0 0 12px rgba(223,226,27,.18), 0 0 0 28px rgba(223,226,27,.08)",
                color: "#201F1E",
              }}
            />
          </div>
        </div>
      </section>
      {/* S2 MARKET CONTEXT */}
      <section aria-labelledby="mk-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
            gap: "40px 80px",
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
              Market context
            </p>
            <h2
              id="mk-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              The Singapore talent market
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "32px",
              borderRadius: "20px",
              border: "1.5px dashed #60554F",
              background: "#262423",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", color: "#C1C3C2" }}>
              MARKET CONTEXT COPY · DRAFT PENDING
            </span>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D3D9DB" }}>
              [Short market context: AI investment, demand for specialist roles, competition for talent.]
            </p>
            <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>
              Statistics only with a cited source, or from CTT's own data later.
            </p>
          </div>
        </div>
      </section>
      {/* S3 SPECIALISMS IN THIS MARKET */}
      <section aria-labelledby="sm-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
          <h2
            id="sm-h"
            style={{ margin: "0", fontSize: "clamp(34px, 3.6vw, 52px)", lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "700" }}
          >
            Specialisms in Singapore
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
            <Link
              className="card"
              to="/specialisms/ai"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                01
              </span>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "700" }}>AI</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Chief AI Officers to LLM, ML and MLOps engineers.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                SINGAPORE-SPECIFIC LINE · DRAFT
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "15px", fontWeight: "700" }}
              >
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
            <a
              className="card"
              href="#"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                02
              </span>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "700" }}>Data</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Chief Data Officers to data engineers, scientists and governance leads.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                SINGAPORE-SPECIFIC LINE · DRAFT
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "15px", fontWeight: "700" }}
              >
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
            </a>
            <a
              className="card"
              href="#"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                03
              </span>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "700" }}>Deep Tech</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Quantum, semiconductors, photonics, space and climate tech.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                SINGAPORE-SPECIFIC LINE · DRAFT
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "15px", fontWeight: "700" }}
              >
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
            </a>
            <a
              className="card"
              href="#"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                padding: "28px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                textDecoration: "none",
                color: "#FFFFFF",
                clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
              }}
            >
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                04
              </span>
              <h3 style={{ margin: "0", fontSize: "28px", fontWeight: "700" }}>Robotics</h3>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB" }}>
                Robotics, autonomy, controls, embedded and computer vision engineers.
              </p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "4px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                SINGAPORE-SPECIFIC LINE · DRAFT
              </span>
              <span
                style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "15px", fontWeight: "700" }}
              >
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
            </a>
          </div>
        </div>
      </section>
      {/* S4 HOW WE ENGAGE + S5 LOCAL PRESENCE */}
      <section aria-label="How we engage and local presence" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "24px", padding: "40px", borderRadius: "20px", background: "#262423" }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "14px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              How we engage
            </p>
            <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
              Four models, published pricing
            </h2>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "10px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#2F2C2B",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "700" }}>10%</span>
                <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Fixed Fee Partnership</span>
              </li>
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "700" }}>15%</span>
                <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Fixed Fee Search Partnership</span>
              </li>
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "700" }}>18%</span>
                <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Exclusive Search Partnership</span>
              </li>
              <li
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  padding: "16px",
                  borderRadius: "12px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
                <span style={{ fontSize: "28px", fontWeight: "700" }}>20%</span>
                <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Retained Search Partnership</span>
              </li>
            </ul>
            <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>Success fee as % of TAC.</p>
            <Link
              to="/talent-as-a-service"
              style={{
                alignSelf: "flex-start",
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              Compare engagement models
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "40px",
              borderRadius: "20px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
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
              Local presence
            </p>
            <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
              Based in Singapore
            </h2>
            <address style={{ fontStyle: "normal", fontSize: "18px", lineHeight: "1.6", color: "#E4E7E8" }}>
              JustCo, The Metropolis
              <br />
              9 North Buona Vista Drive, #02-01
              <br />
              Singapore 138588
            </address>
            <span style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", fontSize: "15px", color: "#D3D9DB" }}>
              {"EA Licence No. "}
              <span
                style={{
                  padding: "3px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "11px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                CLIENT TO PROVIDE
              </span>
            </span>
            <div
              style={{
                flexGrow: "1",
                minHeight: "120px",
                border: "1.5px dashed #60554F",
                borderRadius: "12px",
                background: "#383533",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.06em",
                color: "#C1C3C2",
              }}
            >
              MAP EMBED · OPTIONAL
            </div>
          </div>
        </div>
      </section>
      {/* S6 FAQS */}
      <section aria-labelledby="sgf-h" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
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
              id="sgf-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Hiring in Singapore
            </h2>
          </div>
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
                  Do you recruit for roles in Singapore?
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "0 12px 24px",
                  fontSize: "17px",
                  lineHeight: "1.6",
                  color: "#D3D9DB",
                }}
              >
                <p style={{ margin: "0" }}>Yes. We're based in Singapore and recruit AI, Data, Deep Tech and Robotics roles here.</p>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "3px 8px",
                    border: "1.5px dashed #60554F",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "700",
                    color: "#C1C3C2",
                  }}
                >
                  DRAFT ANSWER
                </span>
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
                  Can you hire across borders within APAC?
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="22"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    style={{ flexShrink: "0" }}
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </h3>
              <div hidden style={{ padding: "0 12px 24px" }}>
                <span
                  style={{
                    display: "inline-block",
                    padding: "3px 8px",
                    border: "1.5px dashed #60554F",
                    borderRadius: "6px",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#C1C3C2",
                  }}
                >
                  ANSWER: CLIENT TO PROVIDE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S7 CTA */}
      <section
        aria-labelledby="sg-cta"
        style={{ background: "#201F1E", padding: "0 clamp(20px, 3.5vw, 32px) 112px" }}
        className="ax-glow-b"
      >
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
              id="sg-cta"
              style={{
                margin: "0",
                fontSize: "clamp(32px, 3.4vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Let's build stronger AI and Data capability together
            </h2>
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

// Singapore: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="msg-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "36px 20px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Singapore
            </span>
          </nav>
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
            Market · Singapore
          </p>
          <h1 id="msg-h1" style={{ margin: "0", fontSize: "38px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"AI and technology recruitment in "}
            <span>Singapore</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Specialist AI, Data, Deep Tech and Robotics hiring for companies building in Singapore.
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
      </section>
      <section aria-labelledby="msg-mk" style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 id="msg-mk" style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>
          The Singapore talent market
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            borderRadius: "16px",
            border: "1.5px dashed #60554F",
            background: "#262423",
          }}
        >
          <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", color: "#C1C3C2" }}>
            MARKET CONTEXT · DRAFT PENDING
          </span>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
            [Short market context: AI investment, demand for specialist roles, competition for talent.]
          </p>
          <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Statistics only with a cited source.</p>
        </div>
      </section>
      <section aria-labelledby="msg-sm" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 id="msg-sm" style={{ margin: "0 0 8px", fontSize: "30px", lineHeight: "1.1", fontWeight: "700" }}>
            Specialisms in Singapore
          </h2>
          <Link
            to="/specialisms/ai"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "18px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "21px", fontWeight: "700" }}>AI</span>
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
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>Chief AI Officers to LLM, ML and MLOps engineers.</span>
            <span
              style={{
                alignSelf: "flex-start",
                padding: "2px 6px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              SINGAPORE LINE · DRAFT
            </span>
          </Link>
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "18px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Data</span>
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
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>
              Chief Data Officers to data engineers, scientists and governance leads.
            </span>
            <span
              style={{
                alignSelf: "flex-start",
                padding: "2px 6px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              SINGAPORE LINE · DRAFT
            </span>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "18px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Deep Tech</span>
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
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>
              Quantum, semiconductors, photonics, space and climate tech.
            </span>
            <span
              style={{
                alignSelf: "flex-start",
                padding: "2px 6px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              SINGAPORE LINE · DRAFT
            </span>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              padding: "18px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Robotics</span>
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
            <span style={{ fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>
              Robotics, autonomy, controls, embedded and computer vision engineers.
            </span>
            <span
              style={{
                alignSelf: "flex-start",
                padding: "2px 6px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              SINGAPORE LINE · DRAFT
            </span>
          </a>
        </div>
      </section>
      <section
        aria-label="How we engage and local presence"
        style={{ padding: "56px 16px", display: "flex", flexDirection: "column", gap: "12px" }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "22px", borderRadius: "18px", background: "#262423" }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#D3D9DB",
            }}
          >
            How we engage
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Four models, published pricing</h2>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "8px",
            }}
          >
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2px",
                padding: "12px",
                borderRadius: "10px",
                background: "#2F2C2B",
                color: "#FFFFFF",
              }}
            >
              <span style={{ fontSize: "24px", fontWeight: "700" }}>10%</span>
              <span style={{ fontSize: "12px", color: "#D3D9DB" }}>Fixed Fee Partnership</span>
            </li>
            <li
              style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px", borderRadius: "10px", background: "#201F1E" }}
            >
              <span style={{ fontSize: "24px", fontWeight: "700" }}>15%</span>
              <span style={{ fontSize: "12px", color: "#D3D9DB" }}>Fixed Fee Search Partnership</span>
            </li>
            <li
              style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px", borderRadius: "10px", background: "#201F1E" }}
            >
              <span style={{ fontSize: "24px", fontWeight: "700" }}>18%</span>
              <span style={{ fontSize: "12px", color: "#D3D9DB" }}>Exclusive Search Partnership</span>
            </li>
            <li
              style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px", borderRadius: "10px", background: "#201F1E" }}
            >
              <span style={{ fontSize: "24px", fontWeight: "700" }}>20%</span>
              <span style={{ fontSize: "12px", color: "#D3D9DB" }}>Retained Search</span>
            </li>
          </ul>
          <Link
            to="/talent-as-a-service"
            style={{
              fontSize: "15px",
              fontWeight: "700",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "5px",
            }}
          >
            Compare engagement models
          </Link>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "22px",
            borderRadius: "18px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: "12px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#DFE21B",
            }}
          >
            Local presence
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Based in Singapore</h2>
          <address style={{ fontStyle: "normal", fontSize: "16px", lineHeight: "1.6", color: "#E4E7E8" }}>
            JustCo, The Metropolis
            <br />
            9 North Buona Vista Drive, #02-01
            <br />
            Singapore 138588
          </address>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>
            {"EA Licence No. "}
            <span
              style={{
                padding: "2px 6px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              CLIENT TO PROVIDE
            </span>
          </span>
        </div>
      </section>
      <section aria-labelledby="msg-faq" style={{ padding: "0 20px 56px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <h2 id="msg-faq" style={{ margin: "0 0 4px", fontSize: "26px", fontWeight: "700" }}>
          Hiring in Singapore
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
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
                type="button"
              >
                Do you recruit for roles in Singapore?
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
                gap: "8px",
                padding: "0 0 18px",
                fontSize: "16px",
                lineHeight: "1.6",
                color: "#D3D9DB",
              }}
            >
              <p style={{ margin: "0" }}>Yes. We're based in Singapore and recruit AI, Data, Deep Tech and Robotics roles here.</p>
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "2px 6px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                DRAFT ANSWER
              </span>
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
                  fontSize: "17px",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  textAlign: "left",
                }}
                type="button"
              >
                Can you hire across borders within APAC?
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
            <div hidden style={{ padding: "0 12px 24px" }}>
              <span
                style={{
                  display: "inline-block",
                  padding: "3px 8px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                ANSWER: CLIENT TO PROVIDE
              </span>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="msg-cta" style={{ padding: "0 16px 56px" }} className="ax-glow-b">
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "80px 22px 28px",
            borderRadius: "20px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "60px",
              top: "0",
              width: "12px",
              height: "64px",
              background: "#DFE21B",
              transform: "skewX(-24deg)",
              color: "#201F1E",
            }}
          />
          <h2 id="msg-cta" style={{ margin: "0", fontSize: "26px", lineHeight: "1.15", fontWeight: "700" }}>
            Let's build stronger AI and Data capability together
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
