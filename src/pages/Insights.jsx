import { Link } from "react-router-dom";

// Insights: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="in-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
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
                Insights
              </span>
            </nav>
            <h1
              id="in-h1"
              style={{ margin: "0", fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "700" }}
            >
              <span>Insights</span>
            </h1>
          </div>
          <p style={{ margin: "0", maxWidth: "520px", fontSize: "20px", lineHeight: "1.55", color: "#D3D9DB" }}>
            From transactional recruitment to data-driven talent partnership. Perspectives for the AI-powered world.
          </p>
        </div>
      </section>
      {/* S2 FEATURED */}
      <section aria-label="Featured article" style={{ background: "#201F1E" }}>
        <div style={{ maxWidth: "1344px", margin: "0 auto", padding: "64px clamp(20px, 3.5vw, 32px) 0" }}>
          <Link
            className="card"
            to="/insights/article"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))",
              borderRadius: "24px",
              overflow: "hidden",
              background: "#2F2C2B",
              color: "#FFFFFF",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                minHeight: "420px",
                background: "#383533",
                backgroundImage: "repeating-linear-gradient(135deg, #34312F 0 1px, transparent 1px 16px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                color: "#C1C3C2",
              }}
            >
              FEATURED IMAGE · FROM CMS
            </div>
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "20px", padding: "56px" }}>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", alignItems: "center" }}>
                <span
                  style={{
                    padding: "5px 12px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    fontSize: "13px",
                    fontWeight: "700",
                  }}
                >
                  Featured
                </span>
                <span
                  style={{ padding: "5px 12px", borderRadius: "999px", border: "1px solid #60554F", fontSize: "13px", fontWeight: "700" }}
                >
                  Talent Intelligence
                </span>
              </div>
              <h2
                style={{ margin: "0", fontSize: "clamp(30px, 3vw, 44px)", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}
              >
                From Transactional Recruitment to Data-Driven Talent Partnerships
              </h2>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.6", color: "#C1C3C2" }}>[Excerpt from CMS]</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  paddingTop: "20px",
                  borderTop: "1px solid #4A4644",
                }}
              >
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>[Date] · [Read time]</span>
                <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "16px", fontWeight: "700" }}>
                  Read article
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
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>
      {/* S3 SEARCH + FILTERS */}
      <section aria-label="Search and filter insights" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px) 0",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
            <h2 style={{ margin: "0", fontSize: "32px", letterSpacing: "-0.02em", fontWeight: "700" }}>All insights</h2>
            <div style={{ position: "relative", flex: "0 1 420px" }}>
              <label
                htmlFor="in-q"
                style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}
              >
                Search insights
              </label>{" "}
              <svg
                aria-hidden="true"
                fill="none"
                height="20"
                stroke="#D3D9DB"
                strokeLinecap="round"
                strokeWidth="2"
                style={{ position: "absolute", left: "18px", top: "16px" }}
                viewBox="0 0 24 24"
                width="20"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M20 20l-4-4" />
              </svg>{" "}
              <input
                id="in-q"
                placeholder="Search by title, keyword or topic"
                style={{
                  width: "100%",
                  height: "52px",
                  padding: "0 18px 0 50px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "999px",
                  font: "inherit",
                  fontSize: "16px",
                  color: "#FFFFFF",
                }}
                type="search"
              />
            </div>
          </div>
          <div aria-label="Filter by category" role="group" style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <button
              aria-pressed="true"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #DFE21B",
                background: "#DFE21B",
                color: "#201F1E",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              All
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Future of Work
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Artificial Intelligence
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              {"Data & Analytics"}
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              {"Robotics & Automation"}
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              DeepTech
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Cybersecurity
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Talent Intelligence
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Workforce Planning
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Market Insights
            </button>
            <button
              aria-pressed="false"
              className="fchip"
              style={{
                height: "44px",
                padding: "0 18px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                background: "#201F1E",
                color: "#FFFFFF",
                font: "inherit",
                fontSize: "15px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="button"
            >
              Leadership Perspectives
            </button>
          </div>
        </div>
      </section>
      {/* S4 ARTICLE GRID */}
      <section aria-label="Articles" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "40px clamp(20px, 3.5vw, 32px) 112px",
            display: "flex",
            flexDirection: "column",
            gap: "48px",
          }}
        >
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))", gap: "24px" }}>
            <Link
              className="card"
              to="/insights/article"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
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
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>The Work of the Future Is Here</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </Link>
            <Link
              className="card"
              to="/insights/article"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
                <span
                  style={{
                    alignSelf: "flex-start",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  Artificial Intelligence
                </span>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>
                  The AI-Powered World Is Reshaping Talent
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </Link>
            <Link
              className="card"
              to="/insights/article"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
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
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>
                  Building High-Performance AI, Data and Technology Teams
                </h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </Link>
            <a
              className="card"
              href="#"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
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
                  [Category]
                </span>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>[Article title from CMS]</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
            <a
              className="card"
              href="#"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
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
                  [Category]
                </span>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>[Article title from CMS]</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
            <a
              className="card"
              href="#"
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
                  backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.08em",
                  color: "#C1C3C2",
                }}
              >
                ARTICLE IMAGE · FROM CMS
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px 24px 28px", flexGrow: "1" }}>
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
                  [Category]
                </span>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>[Article title from CMS]</h3>
                <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.55", color: "#D3D9DB", flexGrow: "1" }}>[Excerpt from CMS]</p>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
          </div>
          <nav aria-label="Pagination" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
            <a
              aria-label="Previous page"
              className="pg"
              href="#"
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                border: "1px solid #4E4748",
              }}
            >
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
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
            </a>
            <a
              aria-current="page"
              href="#"
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              1
            </a>
            <a
              className="pg"
              href="#"
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              2
            </a>
            <a
              className="pg"
              href="#"
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              3
            </a>
            <a
              aria-label="Next page"
              className="pg"
              href="#"
              style={{
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "999px",
                border: "1px solid #4E4748",
              }}
            >
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
            </a>
          </nav>
        </div>
      </section>
      {/* S5 DUAL CTA */}
      <section aria-label="Next steps" style={{ background: "#201F1E", padding: "0 clamp(20px, 3.5vw, 32px) 112px" }} className="ax-glow-b">
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "48px",
              borderRadius: "24px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                right: "64px",
                top: "0",
                width: "18px",
                height: "88px",
                background: "#DFE21B",
                transform: "skewX(-24deg)",
                color: "#201F1E",
              }}
            />
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
              Building a team?
            </p>
            <h2 style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>
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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              padding: "48px",
              borderRadius: "24px",
              background: "#4E4748",
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
              Specialist professional?
            </p>
            <h2 style={{ margin: "0", fontSize: "36px", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}>
              Explore specialist opportunities with CTT
            </h2>
            <Link
              className="btn btn-ghost-dark"
              to="/join"
              style={{
                alignSelf: "flex-start",
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                height: "56px",
                padding: "0 28px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                color: "#FFFFFF",
                fontSize: "17px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Join the talent community
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Insights: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mi-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "40px 20px 36px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Insights
            </span>
          </nav>
          <h1 id="mi-h1" style={{ margin: "0", fontSize: "56px", lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }}>
            <span>Insights</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            From transactional recruitment to data-driven talent partnership. Perspectives for the AI-powered world.
          </p>
        </div>
      </section>
      <section aria-label="Featured article" style={{ padding: "24px 16px 0" }}>
        <Link
          to="/insights/article"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "20px",
            overflow: "hidden",
            background: "#2F2C2B",
            color: "#FFFFFF",
            textDecoration: "none",
          }}
        >
          <div
            style={{
              aspectRatio: "16 / 10",
              background: "#383533",
              backgroundImage: "repeating-linear-gradient(135deg, #34312F 0 1px, transparent 1px 14px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: "700",
              letterSpacing: "0.08em",
              color: "#C1C3C2",
            }}
          >
            FEATURED IMAGE · FROM CMS
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "22px" }}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <span
                style={{
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "12px",
                  fontWeight: "700",
                }}
              >
                Featured
              </span>
              <span
                style={{ padding: "4px 10px", borderRadius: "999px", border: "1px solid #60554F", fontSize: "12px", fontWeight: "700" }}
              >
                Talent Intelligence
              </span>
            </div>
            <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>
              From Transactional Recruitment to Data-Driven Talent Partnerships
            </h2>
            <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
          </div>
        </Link>
      </section>
      <section aria-label="Search and filter" style={{ padding: "36px 0 0" }}>
        <div style={{ padding: "0 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700" }}>All insights</h2>
          <div style={{ position: "relative" }}>
            <label htmlFor="mi-q" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Search insights
            </label>
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              stroke="#D3D9DB"
              strokeLinecap="round"
              strokeWidth="2"
              style={{ position: "absolute", left: "16px", top: "16px" }}
              viewBox="0 0 24 24"
              width="20"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <input
              id="mi-q"
              placeholder="Search insights"
              style={{
                width: "100%",
                height: "52px",
                padding: "0 16px 0 46px",
                border: "1.5px solid #8A8380",
                borderRadius: "999px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="search"
            />
          </div>
        </div>
        <div
          aria-label="Filter by category"
          role="group"
          style={{ display: "flex", gap: "8px", overflowX: "auto", padding: "14px 16px 4px" }}
        >
          <button
            aria-pressed="true"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #DFE21B",
              background: "#DFE21B",
              color: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            All
          </button>
          <button
            aria-pressed="false"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              background: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            Future of Work
          </button>
          <button
            aria-pressed="false"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              background: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            Artificial Intelligence
          </button>
          <button
            aria-pressed="false"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              background: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            {"Data & Analytics"}
          </button>
          <button
            aria-pressed="false"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              background: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            {"Robotics & Automation"}
          </button>
          <button
            aria-pressed="false"
            style={{
              flexShrink: "0",
              height: "44px",
              padding: "0 16px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              background: "#201F1E",
              font: "inherit",
              fontSize: "14px",
              fontWeight: "700",
            }}
            type="button"
          >
            More filters
          </button>
        </div>
      </section>
      <section aria-label="Articles" style={{ padding: "20px 16px 56px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <Link
          to="/insights/article"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
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
              backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px" }}>
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
            <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "700" }}>The Work of the Future Is Here</h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>[Excerpt from CMS]</p>
            <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
          </div>
        </Link>
        <Link
          to="/insights/article"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
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
              backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px" }}>
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#DFE21B",
                fontSize: "12px",
                fontWeight: "700",
                color: "#201F1E",
              }}
            >
              Artificial Intelligence
            </span>
            <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "700" }}>
              The AI-Powered World Is Reshaping Talent
            </h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>[Excerpt from CMS]</p>
            <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
          </div>
        </Link>
        <Link
          to="/insights/article"
          style={{
            display: "flex",
            flexDirection: "column",
            borderRadius: "16px",
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
              backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 14px)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "18px" }}>
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
            <h3 style={{ margin: "0", fontSize: "20px", lineHeight: "1.3", fontWeight: "700" }}>
              Building High-Performance AI, Data and Technology Teams
            </h3>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#D3D9DB" }}>[Excerpt from CMS]</p>
            <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
          </div>
        </Link>
        <a
          href="#"
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
              backgroundImage: "repeating-linear-gradient(135deg, #3A3736 0 1px, transparent 1px 10px)",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>[Article title from CMS]</h3>
            <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Category] · [Date]</p>
          </div>
        </a>
        <nav aria-label="Pagination" style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "12px" }}>
          <a
            aria-label="Previous page"
            href="#"
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1px solid #4E4748",
            }}
          >
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
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
          </a>
          <a
            aria-current="page"
            href="#"
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            1
          </a>
          <a
            href="#"
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            2
          </a>
          <a
            aria-label="Next page"
            href="#"
            style={{
              width: "44px",
              height: "44px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "999px",
              border: "1px solid #4E4748",
            }}
          >
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
          </a>
        </nav>
      </section>
      <section
        aria-label="Next steps"
        style={{ padding: "0 16px 56px", display: "flex", flexDirection: "column", gap: "12px" }}
        className="ax-glow-b"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "26px 20px",
            borderRadius: "20px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
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
            Building a team?
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>
            Let's build stronger AI and Data capability together
          </h2>
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "26px 20px",
            borderRadius: "20px",
            background: "#4E4748",
            color: "#FFFFFF",
          }}
        >
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
            Specialist professional?
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Explore specialist opportunities with CTT</h2>
          <Link
            to="/join"
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
            Join the talent community
          </Link>
        </div>
      </section>
    </main>
  );
}
