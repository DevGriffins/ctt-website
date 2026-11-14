import { Link } from "react-router-dom";

// Australia: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="au-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
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
                Australia
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
              Market · Australia
            </p>
            <h1
              id="au-h1"
              style={{ margin: "0", fontSize: "clamp(42px, 5vw, 70px)", lineHeight: "1.03", letterSpacing: "-0.03em", fontWeight: "700" }}
            >
              {"AI and technology recruitment in "}
              <span>Australia</span>
            </h1>
            <p style={{ margin: "0", maxWidth: "560px", fontSize: "20px", lineHeight: "1.55", color: "#D3D9DB" }}>
              Australian-backed specialist recruitment for AI, Data, Deep Tech and Robotics teams.
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
              AU
            </div>
            <div
              style={{
                position: "absolute",
                right: "80px",
                top: "52%",
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
      <section aria-labelledby="amk-h" style={{ background: "#201F1E" }}>
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
              id="amk-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              The Australia talent market
            </h2>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "32px",
              borderRadius: "20px",
              border: "1px solid #3A3736",
              background: "#262423",
            }}
          >
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Australian organisations, from banks and miners to government agencies and venture-backed scale-ups, are building in-house AI and data capability. Experienced ML engineers, data engineers and AI product leaders remain hard to find, and the strongest candidates are usually already employed and not applying.
            </p>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Celotti Group has recruited in Australia since 2013. CTT pairs that heritage with a specialist AI and Data practice run from our Singapore hub, so Australian teams can hire locally or across APAC with one partner.
            </p>
          </div>
        </div>
      </section>
      {/* S3 SPECIALISMS IN THIS MARKET */}
      <section aria-labelledby="asm-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
            id="asm-h"
            style={{ margin: "0", fontSize: "clamp(34px, 3.6vw, 52px)", lineHeight: "1.06", letterSpacing: "-0.025em", fontWeight: "700" }}
          >
            Specialisms in Australia
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
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#C1C3C2" }}>
                For Australian teams scaling AI, from first ML hires to AI leadership.
              </p>
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
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#C1C3C2" }}>
                Data platform, analytics and governance hires for Australian organisations.
              </p>
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
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#C1C3C2" }}>
                Specialist engineers for Australia's quantum, space and climate tech sectors.
              </p>
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
              <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.6", color: "#C1C3C2" }}>
                Robotics and autonomy talent for mining, agriculture and logistics automation.
              </p>
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
              Australian-backed
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                borderRadius: "14px",
                background: "#383533",
              }}
            >
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
                Australian-backed through Celotti Group, founded in Darwin in 2013
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "20px",
                borderRadius: "14px",
                background: "#383533",
              }}
            >
              <span style={{ fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>Group head office in Darwin, NT, with our APAC hub in Singapore</span>
            </div>
          </div>
        </div>
      </section>
      {/* S6 FAQS */}
      <section aria-labelledby="auf-h" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
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
              id="auf-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Hiring in Australia
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
                  Do you recruit for roles in Australia?
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
              <div style={{ padding: "0 12px 24px" }}>
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                  Yes. CTT is part of the Celotti Group, which has recruited in Australia since 2013, and we take on AI, Data, Deep Tech and Robotics searches for Australian organisations. Our specialist team works from Singapore, so we can also help Australian companies hire across the wider APAC region.
                </p>
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
                <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                  Yes. We map and approach candidates across APAC, including Singapore, Australia and Southeast Asia, and shortlist 3–5 high-quality candidates per role wherever the strongest people are. We also advise on salary benchmarks and location strategy, and flag early where work passes or an employer-of-record arrangement will be needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S7 CTA */}
      <section
        aria-labelledby="au-cta"
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
              id="au-cta"
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

// Australia: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mau-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "36px 20px 40px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Australia
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
            Market · Australia
          </p>
          <h1 id="mau-h1" style={{ margin: "0", fontSize: "38px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"AI and technology recruitment in "}
            <span>Australia</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Australian-backed specialist recruitment for AI, Data, Deep Tech and Robotics teams.
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
      <section aria-labelledby="mau-mk" style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 id="mau-mk" style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>
          The Australia talent market
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "20px",
            borderRadius: "16px",
            border: "1px solid #3A3736",
            background: "#262423",
          }}
        >
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Australian organisations, from banks and miners to government agencies and venture-backed scale-ups, are building in-house AI and data capability. Experienced ML engineers, data engineers and AI product leaders remain hard to find, and the strongest candidates are usually already employed and not applying.
          </p>
          <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Celotti Group has recruited in Australia since 2013. CTT pairs that heritage with a specialist AI and Data practice run from our Singapore hub, so Australian teams can hire locally or across APAC with one partner.
          </p>
        </div>
      </section>
      <section aria-labelledby="mau-sm" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 id="mau-sm" style={{ margin: "0 0 8px", fontSize: "30px", lineHeight: "1.1", fontWeight: "700" }}>
            Specialisms in Australia
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
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#C1C3C2" }}>
              For Australian teams scaling AI, from first ML hires to AI leadership.
            </p>
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
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#C1C3C2" }}>
              Data platform, analytics and governance hires for Australian organisations.
            </p>
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
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#C1C3C2" }}>
              Specialist engineers for Australia's quantum, space and climate tech sectors.
            </p>
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
            <p style={{ margin: "0", fontSize: "13px", lineHeight: "1.6", color: "#C1C3C2" }}>
              Robotics and autonomy talent for mining, agriculture and logistics automation.
            </p>
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
            gap: "12px",
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
          <h2 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Australian-backed</h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px", borderRadius: "12px", background: "#383533" }}
          >
            <span style={{ fontSize: "16px", lineHeight: "1.45", fontWeight: "700" }}>
              Australian-backed through Celotti Group, founded in Darwin in 2013
            </span>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "8px", padding: "16px", borderRadius: "12px", background: "#383533" }}
          >
            <span style={{ fontSize: "16px", lineHeight: "1.45", fontWeight: "700" }}>Group head office in Darwin, NT, with our APAC hub in Singapore</span>
          </div>
        </div>
      </section>
      <section aria-labelledby="mau-faq" style={{ padding: "0 20px 56px", display: "flex", flexDirection: "column", gap: "12px" }}>
        <h2 id="mau-faq" style={{ margin: "0 0 4px", fontSize: "26px", fontWeight: "700" }}>
          Hiring in Australia
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
                Do you recruit for roles in Australia?
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
            <div style={{ padding: "0 0 18px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Yes. CTT is part of the Celotti Group, which has recruited in Australia since 2013, and we take on AI, Data, Deep Tech and Robotics searches for Australian organisations. Our specialist team works from Singapore, so we can also help Australian companies hire across the wider APAC region.
              </p>
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
            <div hidden style={{ padding: "0 0 18px" }}>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Yes. We map and approach candidates across APAC, including Singapore, Australia and Southeast Asia, and shortlist 3–5 high-quality candidates per role wherever the strongest people are. We also advise on salary benchmarks and location strategy, and flag early where work passes or an employer-of-record arrangement will be needed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section aria-labelledby="mau-cta" style={{ padding: "0 16px 56px" }} className="ax-glow-b">
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
          <h2 id="mau-cta" style={{ margin: "0", fontSize: "26px", lineHeight: "1.15", fontWeight: "700" }}>
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
