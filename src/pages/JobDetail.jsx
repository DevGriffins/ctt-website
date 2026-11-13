import { Link } from "react-router-dom";

// JobDetail: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* Job header */}
      <section aria-labelledby="jd-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px) 56px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/open-roles" style={{ color: "#C1C3C2", display: "inline-flex", alignItems: "center", gap: "6px" }}>
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
                <path d="M19 12H5M11 6l-6 6 6 6" />
              </svg>
              Open roles
            </Link>
          </nav>
          <h1
            id="jd-h1"
            style={{ margin: "0", fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            [Job title]
          </h1>
          <ul
            aria-label="Role details"
            style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}
          >
            <li
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#DFE21B",
                fontSize: "14px",
                fontWeight: "700",
                color: "#201F1E",
              }}
            >
              AI
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              <svg
                aria-hidden="true"
                fill="none"
                height="16"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="16"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              [Location]
            </li>
            <li
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "14px",
                fontWeight: "700",
              }}
            >
              [Employment type]
            </li>
            <li
              style={{
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1.5px dashed #60554F",
                fontSize: "14px",
                fontWeight: "700",
                color: "#D3D9DB",
              }}
            >
              [Salary range · optional]
            </li>
            <li style={{ padding: "8px 14px", fontSize: "14px", color: "#C1C3C2" }}>Posted [date]</li>
          </ul>
        </div>
      </section>
      {/* Body + apply */}
      <section aria-label="Role details and application" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px) 112px",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flex: "999 1 560px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "44px",
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#D3D9DB",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>About the role</h2>
              <p style={{ margin: "0" }}>[Role overview from CMS]</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>Responsibilities</h2>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Responsibility from CMS]
                </li>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Responsibility from CMS]
                </li>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Responsibility from CMS]
                </li>
              </ul>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>Requirements</h2>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Requirement from CMS]
                </li>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Requirement from CMS]
                </li>
                <li style={{ display: "flex", gap: "14px" }}>
                  <span
                    aria-hidden="true"
                    style={{
                      width: "8px",
                      height: "8px",
                      marginTop: "11px",
                      flexShrink: "0",
                      background: "#DFE21B",
                      transform: "skewX(-20deg)",
                      color: "#201F1E",
                    }}
                  />
                  [Requirement from CMS]
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                padding: "28px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>About the client</h2>
              <p style={{ margin: "0" }}>[Client overview from CMS, anonymised if needed]</p>
            </div>
          </div>
          {/* Apply form (job application component) */}
          <form
            aria-labelledby="ap-h"
            id="apply"
            style={{
              flex: "1 1 400px",
              minWidth: "0",
              position: "sticky",
              top: "104px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              padding: "32px",
              borderRadius: "24px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h2 id="ap-h" style={{ margin: "0", fontSize: "28px", fontWeight: "700" }}>
                Apply for this role
              </h2>
              <span style={{ fontSize: "14px", color: "#C1C3C2" }}>
                <span aria-hidden="true" style={{ color: "#DFE21B", fontWeight: "700" }}>
                  *
                </span>
                {" Required"}
              </span>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="ap-nm" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"Full name "}
                <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                  *
                </span>
              </label>
              <input
                autoComplete="name"
                id="ap-nm"
                required
                style={{
                  height: "52px",
                  padding: "0 14px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  background: "#201F1E",
                  color: "#FFFFFF",
                }}
                type="text"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="ap-em" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"Email "}
                <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                  *
                </span>
              </label>
              <input
                autoComplete="email"
                id="ap-em"
                required
                style={{
                  height: "52px",
                  padding: "0 14px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  background: "#201F1E",
                  color: "#FFFFFF",
                }}
                type="email"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="ap-mo" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"Mobile number "}
                <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                  *
                </span>
              </label>
              <input
                autoComplete="tel"
                id="ap-mo"
                required
                style={{
                  height: "52px",
                  padding: "0 14px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  background: "#201F1E",
                  color: "#FFFFFF",
                }}
                type="tel"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="ap-li" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"LinkedIn profile URL "}
                <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                  *
                </span>
              </label>
              <input
                id="ap-li"
                required
                style={{
                  height: "52px",
                  padding: "0 14px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  background: "#201F1E",
                  color: "#FFFFFF",
                }}
                type="url"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>
                {"CV "}
                <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                  *
                </span>
              </span>
              <label
                className="drop"
                htmlFor="ap-cv"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  padding: "16px",
                  border: "1.5px dashed #8A8380",
                  borderRadius: "12px",
                  background: "#383533",
                  cursor: "pointer",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "40px",
                    height: "40px",
                    flexShrink: "0",
                    borderRadius: "10px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#201F1E",
                  }}
                >
                  <svg
                    fill="none"
                    height="20"
                    stroke="#201F1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="20"
                  >
                    <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontSize: "15px", fontWeight: "700" }}>Upload your CV</span>
                  <span id="ap-cv-h" style={{ fontSize: "13px", color: "#C1C3C2" }}>
                    PDF or Word, up to 10 MB
                  </span>
                </span>
                <input accept=".pdf,.doc,.docx" aria-describedby="ap-cv-h" className="sr" id="ap-cv" required type="file" />
              </label>
            </div>
            <label className="consent" htmlFor="ap-cs" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <input
                id="ap-cs"
                required
                style={{ width: "22px", height: "22px", margin: "1px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
                type="checkbox"
              />
              <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>
                {"I consent to Celotti Tech Talent processing my application and CV for this and future relevant roles, in line with the "}
                <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  Privacy Policy
                </Link>
                {". "}
                <span aria-hidden="true" style={{ color: "#DFE21B", fontWeight: "700" }}>
                  *
                </span>
              </span>
            </label>
            <button
              className="btn btn-yellow"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                height: "56px",
                border: "0",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                font: "inherit",
                fontSize: "17px",
                fontWeight: "700",
                cursor: "pointer",
              }}
              type="submit"
            >
              Submit application
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
            </button>
          </form>
        </div>
      </section>
      {/* Not quite right band */}
      <section aria-label="Talent community" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
          <p style={{ margin: "0", fontSize: "24px", lineHeight: "1.35", fontWeight: "700" }}>
            Not quite the right fit? Explore specialist opportunities with CTT.
          </p>
          <Link
            className="btn btn-dark"
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

// JobDetail: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mjd-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "32px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <Link to="/open-roles" style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "14px", color: "#C1C3C2" }}>
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
              <path d="M19 12H5M11 6l-6 6 6 6" />
            </svg>
            Open roles
          </Link>
          <h1 id="mjd-h1" style={{ margin: "0", fontSize: "36px", lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }}>
            [Job title]
          </h1>
          <ul
            aria-label="Role details"
            style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "6px" }}
          >
            <li
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#DFE21B",
                fontSize: "13px",
                fontWeight: "700",
                color: "#201F1E",
              }}
            >
              AI
            </li>
            <li
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              [Location]
            </li>
            <li
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #4E4748",
                fontSize: "13px",
                fontWeight: "700",
              }}
            >
              [Employment type]
            </li>
            <li
              style={{
                padding: "6px 12px",
                borderRadius: "999px",
                border: "1.5px dashed #60554F",
                fontSize: "13px",
                fontWeight: "700",
                color: "#D3D9DB",
              }}
            >
              [Salary · optional]
            </li>
          </ul>
          <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Posted [date]</p>
          <a
            href="#m-apply"
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
            Apply for this role
          </a>
        </div>
      </section>
      <section
        aria-label="Role details"
        style={{
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#D3D9DB",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "24px", color: "#FFFFFF", fontWeight: "700" }}>About the role</h2>
          <p style={{ margin: "0" }}>[Role overview from CMS]</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "24px", color: "#FFFFFF", fontWeight: "700" }}>Responsibilities</h2>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li style={{ display: "flex", gap: "12px" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  marginTop: "10px",
                  flexShrink: "0",
                  background: "#DFE21B",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              [Responsibility from CMS]
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  marginTop: "10px",
                  flexShrink: "0",
                  background: "#DFE21B",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              [Responsibility from CMS]
            </li>
          </ul>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "24px", color: "#FFFFFF", fontWeight: "700" }}>Requirements</h2>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li style={{ display: "flex", gap: "12px" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  marginTop: "10px",
                  flexShrink: "0",
                  background: "#DFE21B",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              [Requirement from CMS]
            </li>
            <li style={{ display: "flex", gap: "12px" }}>
              <span
                aria-hidden="true"
                style={{
                  width: "7px",
                  height: "7px",
                  marginTop: "10px",
                  flexShrink: "0",
                  background: "#DFE21B",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              [Requirement from CMS]
            </li>
          </ul>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px", padding: "20px", borderRadius: "16px", background: "#262423" }}
        >
          <h2 style={{ margin: "0", fontSize: "20px", color: "#FFFFFF", fontWeight: "700" }}>About the client</h2>
          <p style={{ margin: "0" }}>[Client overview, anonymised if needed]</p>
        </div>
      </section>
      <section aria-labelledby="map-h" style={{ padding: "0 12px 48px" }}>
        <form
          id="m-apply"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "24px 18px",
            borderRadius: "20px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h2 id="map-h" style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>
              Apply for this role
            </h2>
            <span style={{ fontSize: "13px", color: "#C1C3C2" }}>
              <span aria-hidden="true" style={{ color: "#DFE21B", fontWeight: "700" }}>
                *
              </span>
              {" Required"}
            </span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="map-nm" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Full name "}
              <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                *
              </span>
            </label>
            <input
              id="map-nm"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
              type="text"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="map-em" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Email "}
              <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                *
              </span>
            </label>
            <input
              id="map-em"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
              type="email"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="map-mo" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Mobile number "}
              <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                *
              </span>
            </label>
            <input
              id="map-mo"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
              type="tel"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="map-li" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"LinkedIn profile URL "}
              <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                *
              </span>
            </label>
            <input
              id="map-li"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
              type="url"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: "700" }}>
              {"CV "}
              <span aria-hidden="true" style={{ color: "#DFE21B" }}>
                *
              </span>
            </span>
            <label
              className="drop"
              htmlFor="map-cv"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "14px",
                border: "1.5px dashed #8A8380",
                borderRadius: "12px",
                background: "#383533",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  width="20"
                >
                  <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
                </svg>
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                <span style={{ fontSize: "15px", fontWeight: "700" }}>Upload your CV</span>
                <span id="map-cv-h" style={{ fontSize: "13px", color: "#C1C3C2" }}>
                  PDF or Word, up to 10 MB
                </span>
              </span>
              <input accept=".pdf,.doc,.docx" aria-describedby="map-cv-h" className="sr" id="map-cv" required type="file" />
            </label>
          </div>
          <label className="consent" htmlFor="map-cs" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <input
              id="map-cs"
              required
              style={{ width: "22px", height: "22px", margin: "1px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
              type="checkbox"
            />
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>
              {"I consent to Celotti Tech Talent processing my application and CV for this and future relevant roles, in line with the "}
              <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Privacy Policy
              </Link>
              {". "}
              <span aria-hidden="true" style={{ color: "#DFE21B", fontWeight: "700" }}>
                *
              </span>
            </span>
          </label>
          <button
            style={{
              height: "56px",
              border: "0",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              font: "inherit",
              fontSize: "17px",
              fontWeight: "700",
            }}
            type="submit"
          >
            Submit application
          </button>
        </form>
      </section>
      <section aria-label="Talent community" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.4", fontWeight: "700" }}>
            Not quite the right fit? Explore specialist opportunities with CTT.
          </p>
          <Link
            to="/join"
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
            Join the talent community
          </Link>
        </div>
      </section>
    </main>
  );
}
