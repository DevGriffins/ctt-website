import { Link } from "react-router-dom";

// Join: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section
        aria-labelledby="join-h1"
        style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}
        className="ax-glow"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-40px",
            top: "0",
            bottom: "0",
            width: "460px",
            background: "#60554F",
            clipPath: "polygon(45% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "330px",
            top: "0",
            bottom: "0",
            width: "28px",
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
            padding: "88px clamp(20px, 3.5vw, 32px) 96px",
            display: "flex",
            flexDirection: "column",
            gap: "26px",
            alignItems: "flex-start",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#D3D9DB", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#D3D9DB" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>For Talent</span>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Join the Talent Community
            </span>
          </nav>
          <h1
            id="join-h1"
            style={{
              margin: "0",
              maxWidth: "820px",
              fontSize: "clamp(42px, 5vw, 72px)",
              lineHeight: "1.03",
              letterSpacing: "-0.03em",
              fontWeight: "700",
            }}
          >
            {"Explore specialist opportunities with "}
            <span style={{ color: "#DFE21B" }}>CTT</span>
          </h1>
          <p style={{ margin: "0", maxWidth: "600px", fontSize: "20px", lineHeight: "1.55", color: "#E4E7E8" }}>
            Join a talent community for people building the AI-powered world.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <a
              className="btn btn-yellow"
              href="#register"
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
              Register your profile
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
                <path d="M12 5v14M6 13l6 6 6-6" />
              </svg>
            </a>
            <Link
              className="btn btn-ghost-dark"
              to="/open-roles"
              style={{
                display: "inline-flex",
                alignItems: "center",
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
              View open roles
            </Link>
          </div>
        </div>
      </section>
      {/* S2 WHY JOIN + S3 FORM */}
      <section aria-label="Why join and registration" style={{ background: "#262423" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px) 112px",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            alignItems: "flex-start",
          }}
        >
          {/* S2 Why join */}
          <div style={{ flex: "1 1 340px", display: "flex", flexDirection: "column", gap: "28px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
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
                Why join
              </p>
              <h2
                style={{
                  margin: "0",
                  fontSize: "clamp(32px, 3vw, 44px)",
                  lineHeight: "1.08",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                A specialist on your side
              </h2>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <li
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "22px",
                  borderRadius: "16px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
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
                <span style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: "700" }}>Specialists who understand your field</span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "22px",
                  borderRadius: "16px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
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
                    <circle cx="12" cy="12" r="8" />
                    <circle cx="12" cy="12" r="4" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <span style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: "700" }}>
                    Roles matched to your skills and interests, including ones that are never advertised
                  </span>
                  <span
                    style={{
                      alignSelf: "flex-start",
                      padding: "2px 7px",
                      border: "1.5px dashed #60554F",
                      borderRadius: "6px",
                      fontSize: "11px",
                      fontWeight: "700",
                      letterSpacing: "0.04em",
                      color: "#C1C3C2",
                    }}
                  >
                    TO CONFIRM
                  </span>
                </span>
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "16px",
                  padding: "22px",
                  borderRadius: "16px",
                  background: "#201F1E",
                  border: "1px solid #3A3736",
                }}
              >
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
                    <path d="M4 5h16v11H8l-4 4z" />
                  </svg>
                </span>
                <span style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: "700" }}>A real person after your first reply</span>
              </li>
            </ul>
          </div>
          {/* S3 Registration form */}
          <form
            aria-labelledby="reg-h"
            id="register"
            style={{
              flex: "999 1 620px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              padding: "48px",
              borderRadius: "24px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              boxShadow: "0 24px 60px rgba(0,0,0,.35)",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
              <h2 id="reg-h" style={{ margin: "0", fontSize: "32px", letterSpacing: "-0.02em", fontWeight: "700" }}>
                Register your profile
              </h2>
              <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>
                <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  *
                </span>
                {" Required"}
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "20px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="j-fn" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"First name "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="given-name"
                  className="fld"
                  id="j-fn"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="j-ln" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Last name "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="family-name"
                  className="fld"
                  id="j-ln"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="j-em" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Email "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="email"
                  className="fld"
                  id="j-em"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="j-mo" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Mobile number "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="tel"
                  className="fld"
                  id="j-mo"
                  placeholder="+65"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="j-lo" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Current location "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="address-level2"
                  className="fld"
                  id="j-lo"
                  placeholder="City, country"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="j-jt" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Current job title "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="organization-title"
                  className="fld"
                  id="j-jt"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="j-li" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"LinkedIn profile URL "}
                <span aria-hidden="true">*</span>
              </label>
              <input
                className="fld"
                id="j-li"
                placeholder="https://www.linkedin.com/in/"
                required
                style={{
                  height: "52px",
                  padding: "0 16px",
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
              <span id="j-cv-l" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"CV "}
                <span aria-hidden="true">*</span>
              </span>
              <label
                className="drop"
                htmlFor="j-cv"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  padding: "22px",
                  border: "1.5px dashed #8A8380",
                  borderRadius: "14px",
                  background: "#262423",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "48px",
                    height: "48px",
                    flexShrink: "0",
                    borderRadius: "12px",
                    background: "#2F2C2B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg
                    fill="none"
                    height="22"
                    stroke="#DFE21B"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="22"
                  >
                    <path d="M12 16V4M7 9l5-5 5 5M4 20h16" />
                  </svg>
                </span>
                <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span style={{ fontSize: "16px", fontWeight: "700" }}>
                    {"Upload your CV "}
                    <span style={{ fontWeight: "400", color: "#D3D9DB" }}>or drag it here</span>
                  </span>
                  <span id="j-cv-h" style={{ fontSize: "14px", color: "#C1C3C2" }}>
                    PDF or Word, up to 10 MB
                  </span>
                </span>
                <input accept=".pdf,.doc,.docx" aria-describedby="j-cv-h" className="sr" id="j-cv" required type="file" />
              </label>
            </div>
            <fieldset style={{ margin: "0", padding: "0", border: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
              <legend style={{ padding: "0", marginBottom: "12px", fontSize: "15px", fontWeight: "700" }}>
                {"Areas of interest "}
                <span style={{ fontWeight: "400", color: "#C1C3C2" }}>(select all that apply)</span>
              </legend>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #201F1E",
                    background: "#DFE21B",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  <input defaultChecked style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  Artificial Intelligence
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  {"Data & Analytics"}
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  {"Robotics & Automation"}
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  DeepTech
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  Cybersecurity
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  {"Digital & Software Engineering"}
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                  Technology Leadership
                </label>
              </div>
            </fieldset>
            <label
              className="consent"
              htmlFor="j-cs"
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "20px",
                borderRadius: "14px",
                background: "#262423",
              }}
            >
              <input
                id="j-cs"
                required
                style={{ width: "22px", height: "22px", margin: "2px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
                type="checkbox"
              />
              <span style={{ fontSize: "15px", lineHeight: "1.6", color: "#D3D9DB" }}>
                {
                  "I consent to Celotti Tech Talent collecting, storing and processing my personal information, CV and professional profile for recruitment, talent community engagement and future employment opportunities. I understand that my information may be retained within Celotti Tech Talent's CRM and that I may update, correct or request removal of my information at any time in accordance with the "
                }
                <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  Privacy Policy
                </Link>
                {". "}
                <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  *
                </span>
              </span>
            </label>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: "40px",
                  padding: "0 12px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "8px",
                  fontSize: "11px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                SPAM PROTECTION (reCAPTCHA OR SIMILAR)
              </span>
              <button
                className="btn btn-dark"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "56px",
                  padding: "0 32px",
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
                Register
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
            </div>
          </form>
        </div>
      </section>
      {/* S4 WHAT HAPPENS NEXT */}
      <section aria-labelledby="next-h" style={{ background: "#201F1E" }}>
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
              After you register
            </p>
            <h2
              id="next-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              What happens next
            </h2>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(300px, 100%), 1fr))",
              gap: "0",
              borderTop: "1px solid #3A3736",
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
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  1
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    height: "2px",
                    background: "repeating-linear-gradient(90deg, #C1C3C2 0 5px, transparent 5px 11px)",
                  }}
                />
              </div>
              <span style={{ fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>We review your profile</span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 28px 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  2
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    height: "2px",
                    background: "repeating-linear-gradient(90deg, #C1C3C2 0 5px, transparent 5px 11px)",
                  }}
                />
              </div>
              <span style={{ fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>
                A specialist contacts you when there's a relevant role
              </span>
            </li>
            <li style={{ display: "flex", flexDirection: "column", gap: "16px", padding: "32px 0 8px 0" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <span
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "16px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  3
                </span>
              </div>
              <span style={{ fontSize: "22px", lineHeight: "1.3", fontWeight: "700" }}>
                You can update or remove your details at any time
              </span>
            </li>
          </ol>
        </div>
      </section>
      {/* S5 OPEN ROLES LINK */}
      <section aria-label="Open roles" style={{ background: "#201F1E", padding: "0 clamp(20px, 3.5vw, 32px) 112px" }}>
        <div
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "40px 48px",
            borderRadius: "24px",
            background: "#2F2C2B",
            color: "#FFFFFF",
            clipPath: "polygon(0 0, calc(100% - 48px) 0, 100% 48px, 100% 100%, 0 100%)",
          }}
        >
          <h2 style={{ margin: "0", fontSize: "clamp(26px, 2.6vw, 36px)", lineHeight: "1.15", fontWeight: "700" }}>
            Looking for something specific now?
          </h2>
          <Link
            className="btn btn-yellow"
            to="/open-roles"
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
            View current open roles
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

// Join: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      {/* S1 HERO */}
      <section
        aria-labelledby="mj-h1"
        style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}
        className="ax-glow"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "48px",
            top: "0",
            width: "14px",
            height: "110px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div style={{ position: "relative", padding: "48px 20px 52px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#D3D9DB", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#D3D9DB" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Join
            </span>
          </nav>
          <h1 id="mj-h1" style={{ margin: "0", fontSize: "40px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Explore specialist opportunities with "}
            <span style={{ color: "#DFE21B" }}>CTT</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#E4E7E8" }}>
            Join a talent community for people building the AI-powered world.
          </p>
          <a
            href="#m-register"
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
            Register your profile
          </a>
        </div>
      </section>
      {/* S2 WHY JOIN */}
      <section aria-labelledby="mj-why" style={{ background: "#262423" }}>
        <div style={{ padding: "48px 20px 24px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
            Why join
          </p>
          <h2 id="mj-why" style={{ margin: "0 0 8px", fontSize: "28px", lineHeight: "1.12", fontWeight: "700" }}>
            A specialist on your side
          </h2>
          <div
            style={{
              display: "flex",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
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
                strokeWidth="1.9"
                viewBox="0 0 24 24"
                width="20"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21c1-4 4.2-6 8-6s7 2 8 6" />
              </svg>
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.4", fontWeight: "700" }}>Specialists who understand your field</span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
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
                strokeWidth="1.9"
                viewBox="0 0 24 24"
                width="20"
              >
                <circle cx="12" cy="12" r="8" />
                <circle cx="12" cy="12" r="4" />
              </svg>
            </span>
            <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <span style={{ fontSize: "16px", lineHeight: "1.4", fontWeight: "700" }}>
                Roles matched to your skills and interests, including ones that are never advertised
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
                TO CONFIRM
              </span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
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
                strokeWidth="1.9"
                viewBox="0 0 24 24"
                width="20"
              >
                <path d="M4 5h16v11H8l-4 4z" />
              </svg>
            </span>
            <span style={{ fontSize: "16px", lineHeight: "1.4", fontWeight: "700" }}>A real person after your first reply</span>
          </div>
        </div>
      </section>
      {/* S3 FORM */}
      <section aria-labelledby="mj-reg" style={{ background: "#262423" }}>
        <form
          id="m-register"
          style={{
            margin: "0 12px",
            padding: "28px 18px",
            borderRadius: "20px",
            background: "#201F1E",
            border: "1px solid #3A3736",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h2 id="mj-reg" style={{ margin: "0", fontSize: "26px", fontWeight: "700" }}>
              Register your profile
            </h2>
            <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>
              <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                *
              </span>
              {" Required"}
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-fn" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"First name "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="given-name"
              id="mj-fn"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="text"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-ln" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Last name "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="family-name"
              id="mj-ln"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="text"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-em" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Email "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="email"
              id="mj-em"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="email"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-mo" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Mobile number "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              autoComplete="tel"
              id="mj-mo"
              placeholder="+65"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="tel"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-lo" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Current location "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mj-lo"
              placeholder="City, country"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="text"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-jt" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Current job title "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mj-jt"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="text"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mj-li" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"LinkedIn profile URL "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mj-li"
              placeholder="https://www.linkedin.com/in/"
              required
              style={{
                height: "52px",
                padding: "0 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
              }}
              type="url"
            />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <span style={{ fontSize: "15px", fontWeight: "700" }}>
              {"CV "}
              <span aria-hidden="true">*</span>
            </span>
            <label
              className="drop"
              htmlFor="mj-cv"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "16px",
                border: "1.5px dashed #8A8380",
                borderRadius: "12px",
                background: "#262423",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "44px",
                  height: "44px",
                  flexShrink: "0",
                  borderRadius: "10px",
                  background: "#2F2C2B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg
                  fill="none"
                  height="20"
                  stroke="#DFE21B"
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
                <span style={{ fontSize: "16px", fontWeight: "700" }}>Upload your CV</span>
                <span id="mj-cv-h" style={{ fontSize: "14px", color: "#C1C3C2" }}>
                  PDF or Word, up to 10 MB
                </span>
              </span>
              <input accept=".pdf,.doc,.docx" aria-describedby="mj-cv-h" className="sr" id="mj-cv" required type="file" />
            </label>
          </div>
          <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
            <legend style={{ padding: "0", marginBottom: "12px", fontSize: "15px", fontWeight: "700" }}>
              {"Areas of interest "}
              <span style={{ fontWeight: "400", color: "#C1C3C2" }}>(select all that apply)</span>
            </legend>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #201F1E",
                  background: "#DFE21B",
                  fontSize: "14px",
                  fontWeight: "700",
                  color: "#201F1E",
                }}
              >
                <input defaultChecked style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                Artificial Intelligence
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                {"Data & Analytics"}
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                {"Robotics & Automation"}
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                DeepTech
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                Cybersecurity
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                {"Digital & Software Engineering"}
              </label>
              <label
                className="chip"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  minHeight: "44px",
                  padding: "0 14px",
                  borderRadius: "999px",
                  border: "1.5px solid #8A8380",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="checkbox" />
                Technology Leadership
              </label>
            </div>
          </fieldset>
          <label
            className="consent"
            htmlFor="mj-cs"
            style={{ display: "flex", gap: "12px", alignItems: "flex-start", padding: "16px", borderRadius: "12px", background: "#262423" }}
          >
            <input
              id="mj-cs"
              required
              style={{ width: "22px", height: "22px", margin: "2px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
              type="checkbox"
            />
            <span style={{ fontSize: "14px", lineHeight: "1.6", color: "#D3D9DB" }}>
              {
                "I consent to Celotti Tech Talent collecting, storing and processing my personal information, CV and professional profile for recruitment, talent community engagement and future employment opportunities. I understand that my information may be retained within Celotti Tech Talent's CRM and that I may update, correct or request removal of my information at any time in accordance with the "
              }
              <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Privacy Policy
              </Link>
              {". "}
              <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                *
              </span>
            </span>
          </label>
          <span
            style={{
              alignSelf: "flex-start",
              padding: "8px 10px",
              border: "1.5px dashed #60554F",
              borderRadius: "8px",
              fontSize: "10px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            SPAM PROTECTION (reCAPTCHA OR SIMILAR)
          </span>
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
            Register
          </button>
        </form>
        <div style={{ height: "48px" }} />
      </section>
      {/* S4 NEXT */}
      <section aria-labelledby="mj-next" style={{ background: "#201F1E" }}>
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
            After you register
          </p>
          <h2 id="mj-next" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            What happens next
          </h2>
          <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
            <li style={{ display: "flex", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  1
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "2px",
                    background: "repeating-linear-gradient(180deg, #C1C3C2 0 5px, transparent 5px 11px)",
                  }}
                />
              </div>
              <span style={{ padding: "6px 0 24px", fontSize: "18px", lineHeight: "1.35", fontWeight: "700" }}>We review your profile</span>
            </li>
            <li style={{ display: "flex", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  2
                </span>
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "2px",
                    background: "repeating-linear-gradient(180deg, #C1C3C2 0 5px, transparent 5px 11px)",
                  }}
                />
              </div>
              <span style={{ padding: "6px 0 24px", fontSize: "18px", lineHeight: "1.35", fontWeight: "700" }}>
                A specialist contacts you when there's a relevant role
              </span>
            </li>
            <li style={{ display: "flex", gap: "14px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  style={{
                    width: "36px",
                    height: "36px",
                    flexShrink: "0",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  3
                </span>
              </div>
              <span style={{ padding: "6px 0 0", fontSize: "18px", lineHeight: "1.35", fontWeight: "700" }}>
                You can update or remove your details at any time
              </span>
            </li>
          </ol>
        </div>
      </section>
      {/* S5 OPEN ROLES */}
      <section aria-label="Open roles" style={{ background: "#201F1E", padding: "0 20px 64px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "28px 22px",
            borderRadius: "20px",
            background: "#2F2C2B",
            color: "#FFFFFF",
            clipPath: "polygon(0 0, calc(100% - 32px) 0, 100% 32px, 100% 100%, 0 100%)",
          }}
        >
          <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Looking for something specific now?</h2>
          <Link
            to="/open-roles"
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
            View current open roles
          </Link>
        </div>
      </section>
    </main>
  );
}
