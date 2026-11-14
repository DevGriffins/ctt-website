import { Link } from "react-router-dom";

// OpenRoles: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="or-h1" style={{ background: "#201F1E" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "80px clamp(20px, 3.5vw, 32px) 56px",
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
              <span>For Talent</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Open Roles
              </span>
            </nav>
            <h1
              id="or-h1"
              style={{ margin: "0", fontSize: "clamp(52px, 6.5vw, 96px)", lineHeight: "0.98", letterSpacing: "-0.04em", fontWeight: "700" }}
            >
              {"Open "}
              <span>roles</span>
            </h1>
          </div>
          <p style={{ margin: "0", maxWidth: "480px", fontSize: "20px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Specialist opportunities across AI, Data, Deep Tech and Robotics.
          </p>
        </div>
      </section>
      {/* S2 JOB LISTING */}
      <section aria-label="Job listing" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "0 clamp(20px, 3.5vw, 32px) 96px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Filters */}
          <form
            aria-label="Filter roles"
            role="search"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))",
              gap: "12px",
              padding: "20px",
              borderRadius: "20px",
              background: "#262423",
              border: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="or-q" style={{ fontSize: "13px", fontWeight: "700" }}>
                Keyword
              </label>
              <div style={{ position: "relative" }}>
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
                  id="or-q"
                  placeholder="Job title or skill"
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "0 16px 0 46px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                  }}
                  type="search"
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="or-sp" style={{ fontSize: "13px", fontWeight: "700" }}>
                Specialism
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="or-sp"
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "0 40px 0 14px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                    color: "#FFFFFF",
                    appearance: "none",
                  }}
                >
                  <option>All specialisms</option>
                  <option>AI</option>
                  <option>Data</option>
                  <option>Deep Tech</option>
                  <option>Robotics</option>
                </select>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{ position: "absolute", right: "14px", top: "17px", pointerEvents: "none" }}
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="or-lo" style={{ fontSize: "13px", fontWeight: "700" }}>
                Location
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="or-lo"
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "0 40px 0 14px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                    color: "#FFFFFF",
                    appearance: "none",
                  }}
                >
                  <option>All locations</option>
                  <option>Singapore</option>
                  <option>Australia</option>
                  <option>Remote (APAC)</option>
                </select>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{ position: "absolute", right: "14px", top: "17px", pointerEvents: "none" }}
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <label htmlFor="or-ty" style={{ fontSize: "13px", fontWeight: "700" }}>
                Job type
              </label>
              <div style={{ position: "relative" }}>
                <select
                  id="or-ty"
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "0 40px 0 14px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                    color: "#FFFFFF",
                    appearance: "none",
                  }}
                >
                  <option>All types</option>
                  <option>Permanent</option>
                  <option>Contract</option>
                </select>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{ position: "absolute", right: "14px", top: "17px", pointerEvents: "none" }}
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
          </form>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <p aria-live="polite" style={{ margin: "0", fontSize: "15px", color: "#D3D9DB" }}>
              <strong style={{ color: "#FFFFFF" }}>5</strong>
              {" roles"}
            </p>
          </div>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <li>
              <Link
                className="job"
                to="/open-roles/role"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  borderRadius: "16px",
                  border: "1px solid #3A3736",
                  background: "#201F1E",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "21px", fontWeight: "700" }}>Senior Machine Learning Engineer</span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "#DFE21B",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#201F1E",
                    }}
                  >
                    AI
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#D3D9DB" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="18"
                    stroke="#C1C3C2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Singapore
                </span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Permanent, full-time</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Posted 10 Nov 2026</span>
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
              </Link>
            </li>
            <li>
              <Link
                className="job"
                to="/open-roles/role"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  borderRadius: "16px",
                  border: "1px solid #3A3736",
                  background: "#201F1E",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "21px", fontWeight: "700" }}>Lead Data Engineer</span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "#34312F",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#D3D9DB",
                    }}
                    className="ax-tint"
                  >
                    Data
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#D3D9DB" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="18"
                    stroke="#C1C3C2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Singapore
                </span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Permanent, full-time</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Posted 6 Nov 2026</span>
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
              </Link>
            </li>
            <li>
              <Link
                className="job"
                to="/open-roles/role"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  borderRadius: "16px",
                  border: "1px solid #3A3736",
                  background: "#201F1E",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "21px", fontWeight: "700" }}>Embedded AI Engineer, Edge Inference</span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "#34312F",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#D3D9DB",
                    }}
                    className="ax-tint"
                  >
                    Deep Tech
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#D3D9DB" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="18"
                    stroke="#C1C3C2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Singapore
                </span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Permanent, full-time</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Posted 3 Nov 2026</span>
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
              </Link>
            </li>
            <li>
              <Link
                className="job"
                to="/open-roles/role"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  borderRadius: "16px",
                  border: "1px solid #3A3736",
                  background: "#201F1E",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "21px", fontWeight: "700" }}>Robotics Software Engineer, Navigation</span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "#34312F",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#D3D9DB",
                    }}
                    className="ax-tint"
                  >
                    Robotics
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#D3D9DB" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="18"
                    stroke="#C1C3C2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Singapore
                </span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Permanent, full-time</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Posted 28 Oct 2026</span>
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
              </Link>
            </li>
            <li>
              <Link
                className="job"
                to="/open-roles/role"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0, 2.2fr) minmax(0, 1fr) minmax(0, 1fr) minmax(0, 1fr) auto",
                  alignItems: "center",
                  gap: "24px",
                  padding: "24px 28px",
                  borderRadius: "16px",
                  border: "1px solid #3A3736",
                  background: "#201F1E",
                  textDecoration: "none",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "21px", fontWeight: "700" }}>AI Product Manager</span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "3px 10px",
                      borderRadius: "999px",
                      background: "#DFE21B",
                      fontSize: "12px",
                      fontWeight: "700",
                      color: "#201F1E",
                    }}
                  >
                    AI
                  </span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "16px", color: "#D3D9DB" }}>
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="18"
                    stroke="#C1C3C2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="18"
                  >
                    <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  Sydney, Australia
                </span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Permanent, full-time</span>
                <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Posted 21 Oct 2026</span>
                <span
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "999px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
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
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* S3 NO MATCH BAND */}
      <section aria-labelledby="nm-h" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
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
            padding: "88px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          <h2
            id="nm-h"
            style={{ margin: "0", fontSize: "clamp(32px, 3.4vw, 48px)", lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }}
          >
            Don't see the right role?
          </h2>
          <Link
            className="btn btn-yellow"
            to="/join"
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
        </div>
      </section>
    </main>
  );
}

// OpenRoles: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mor-h1" style={{ background: "#201F1E" }} className="ax-glow">
        <div style={{ padding: "40px 20px 28px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Open Roles
            </span>
          </nav>
          <h1 id="mor-h1" style={{ margin: "0", fontSize: "52px", lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }}>
            {"Open "}
            <span>roles</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Specialist opportunities across AI, Data, Deep Tech and Robotics.
          </p>
        </div>
      </section>
      <section aria-label="Job listing" style={{ padding: "0 16px 56px", display: "flex", flexDirection: "column", gap: "14px" }}>
        <form
          aria-label="Filter roles"
          role="search"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "14px",
            borderRadius: "16px",
            background: "#262423",
            border: "1px solid #3A3736",
          }}
        >
          <div style={{ position: "relative" }}>
            <label htmlFor="mor-q" style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Keyword
            </label>
            <svg
              aria-hidden="true"
              fill="none"
              height="20"
              stroke="#D3D9DB"
              strokeLinecap="round"
              strokeWidth="2"
              style={{ position: "absolute", left: "14px", top: "16px" }}
              viewBox="0 0 24 24"
              width="20"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-4-4" />
            </svg>
            <input
              id="mor-q"
              placeholder="Job title or skill"
              style={{
                width: "100%",
                height: "52px",
                padding: "0 14px 0 44px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
              type="search"
            />
          </div>
          <button
            aria-expanded="false"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "48px",
              padding: "0 16px",
              border: "1.5px solid #8A8380",
              borderRadius: "10px",
              background: "#201F1E",
              font: "inherit",
              fontSize: "15px",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
            type="button"
          >
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M4 6h16M7 12h10M10 18h4" />
              </svg>
              Filters: specialism, location, type
            </span>
            <svg
              aria-hidden="true"
              fill="none"
              height="18"
              stroke="#FFFFFF"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="18"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
          <div style={{ display: "flex", gap: "6px", overflowX: "auto" }}>
            <span
              style={{
                flexShrink: "0",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#2F2C2B",
                color: "#FFFFFF",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              All
            </span>
            <span
              style={{
                flexShrink: "0",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              AI
            </span>
            <span
              style={{
                flexShrink: "0",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Data
            </span>
            <span
              style={{
                flexShrink: "0",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Deep Tech
            </span>
            <span
              style={{
                flexShrink: "0",
                padding: "8px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              Robotics
            </span>
          </div>
        </form>
        <p style={{ margin: "4px 4px 0", fontSize: "14px", color: "#D3D9DB" }}>
          <strong style={{ color: "#FFFFFF" }}>5</strong>
          {" roles"}
        </p>
        <Link
          to="/open-roles/role"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #3A3736",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>Senior Machine Learning Engineer</span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#DFE21B",
                fontSize: "12px",
                fontWeight: "700",
                color: "#201F1E",
              }}
            >
              AI
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Singapore · Permanent, full-time</span>
          <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Posted 10 Nov 2026</span>
        </Link>
        <Link
          to="/open-roles/role"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #3A3736",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>Lead Data Engineer</span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#34312F",
                fontSize: "12px",
                fontWeight: "700",
                color: "#D3D9DB",
              }}
              className="ax-tint"
            >
              Data
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Singapore · Permanent, full-time</span>
          <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Posted 6 Nov 2026</span>
        </Link>
        <Link
          to="/open-roles/role"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #3A3736",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>Embedded AI Engineer, Edge Inference</span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#34312F",
                fontSize: "12px",
                fontWeight: "700",
                color: "#D3D9DB",
              }}
              className="ax-tint"
            >
              Deep Tech
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Singapore · Permanent, full-time</span>
          <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Posted 3 Nov 2026</span>
        </Link>
        <Link
          to="/open-roles/role"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #3A3736",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>Robotics Software Engineer, Navigation</span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#34312F",
                fontSize: "12px",
                fontWeight: "700",
                color: "#D3D9DB",
              }}
              className="ax-tint"
            >
              Robotics
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Singapore · Permanent, full-time</span>
          <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Posted 28 Oct 2026</span>
        </Link>
        <Link
          to="/open-roles/role"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            padding: "18px",
            borderRadius: "14px",
            border: "1px solid #3A3736",
            textDecoration: "none",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "18px", fontWeight: "700" }}>AI Product Manager</span>
            <span
              style={{
                padding: "3px 10px",
                borderRadius: "999px",
                background: "#DFE21B",
                fontSize: "12px",
                fontWeight: "700",
                color: "#201F1E",
              }}
            >
              AI
            </span>
          </div>
          <span style={{ fontSize: "14px", color: "#D3D9DB" }}>Sydney, Australia · Permanent, full-time</span>
          <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Posted 21 Oct 2026</span>
        </Link>
      </section>
      <section aria-labelledby="mor-nm" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "60px",
            top: "0",
            width: "14px",
            height: "90px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div style={{ position: "relative", padding: "96px 20px 56px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <h2 id="mor-nm" style={{ margin: "0", fontSize: "30px", lineHeight: "1.12", fontWeight: "700" }}>
            Don't see the right role?
          </h2>
          <Link
            to="/join"
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
            Join the talent community
          </Link>
        </div>
      </section>
    </main>
  );
}
