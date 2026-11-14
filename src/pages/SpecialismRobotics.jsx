import { Link } from "react-router-dom";

// SpecialismRobotics: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="rb-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "72px clamp(20px, 3.5vw, 32px) 88px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(560px, 100%), 1fr))",
            gap: "56px",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "26px", alignItems: "flex-start" }}>
            <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
              <Link to="/" style={{ color: "#C1C3C2" }}>
                Home
              </Link>
              <span aria-hidden="true">/</span>
              <span>Specialisms</span>
              <span aria-hidden="true">/</span>
              <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Robotics
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
              Specialism 04 · Robotics Talent
            </p>
            <h1
              id="rb-h1"
              style={{ margin: "0", fontSize: "clamp(42px, 5vw, 70px)", lineHeight: "1.03", letterSpacing: "-0.03em", fontWeight: "700" }}
            >
              {"Robotics recruitment, from leadership to "}
              <span>deployment</span>
            </h1>
            <p style={{ margin: "0", maxWidth: "580px", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Specialist robotics recruitment for startups and scale-ups across APAC, from robotics and autonomy engineers to controls, embedded and computer vision specialists.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
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
              <Link
                className="btn btn-ghost"
                to="/open-roles"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  height: "56px",
                  padding: "0 28px",
                  borderRadius: "999px",
                  border: "1.5px solid #C1C3C2",
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
          {/* Specialism switcher panel (same component on all four pages) */}
          <div
            style={{
              justifySelf: "end",
              width: "100%",
              maxWidth: "520px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "32px",
              borderRadius: "24px",
              background: "#2F2C2B",
              color: "#FFFFFF",
              clipPath: "polygon(0 0, calc(100% - 64px) 0, 100% 64px, 100% 100%, 0 100%)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", color: "#DFE21B" }}>FOUR SPECIALISMS</span>
            </div>
            <div
              aria-hidden="true"
              style={{
                height: "132px",
                borderRadius: "16px",
                background: "#383533",
                backgroundImage: "radial-gradient(#4E4748 1.5px, transparent 1.5px)",
                backgroundSize: "18px 18px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "84px",
                  height: "84px",
                  borderRadius: "20px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="46"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  width="46"
                >
                  <path d="M5 21h12M8 21v-3h6v3" />
                  <circle cx="11" cy="15.5" r="1.5" />
                  <path d="M10.3 14.2L6.9 9.4" />
                  <circle cx="6" cy="8" r="1.5" />
                  <path d="M7.4 7.5L15 5" />
                  <path d="M15 5l3-2M15 5l2.5 3M18 3l2 1.5M17.5 8l2.5-.5" />
                </svg>
              </div>
            </div>
            <nav aria-label="Specialisms" style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <Link
                className="spec-tab"
                to="/specialisms/ai"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "52px",
                  padding: "0 18px",
                  borderRadius: "12px",
                  background: "#383533",
                  color: "#FFFFFF",
                  fontSize: "17px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                <span style={{ display: "flex", gap: "14px" }}>
                  <span style={{ color: "#C1C3C2" }} className="ax-text">
                    01
                  </span>
                  AI
                </span>
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
              <Link
                className="spec-tab"
                to="/specialisms/data"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "52px",
                  padding: "0 18px",
                  borderRadius: "12px",
                  background: "#383533",
                  color: "#FFFFFF",
                  fontSize: "17px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                <span style={{ display: "flex", gap: "14px" }}>
                  <span style={{ color: "#C1C3C2" }} className="ax-text">
                    02
                  </span>
                  Data
                </span>
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
              <Link
                className="spec-tab"
                to="/specialisms/deep-tech"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "52px",
                  padding: "0 18px",
                  borderRadius: "12px",
                  background: "#383533",
                  color: "#FFFFFF",
                  fontSize: "17px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                <span style={{ display: "flex", gap: "14px" }}>
                  <span style={{ color: "#C1C3C2" }} className="ax-text">
                    03
                  </span>
                  Deep Tech
                </span>
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
              <Link
                aria-current="page"
                to="/specialisms/robotics"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  minHeight: "52px",
                  padding: "0 18px",
                  borderRadius: "12px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "17px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                <span style={{ display: "flex", gap: "14px" }}>
                  <span style={{ opacity: "0.7" }} className="ax-text">
                    04
                  </span>
                  Robotics
                </span>
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
                  <path d="M5 12l5 5 9-10" />
                </svg>
              </Link>
            </nav>
          </div>
        </div>
      </section>
      {/* S2 WHY DIFFERENT */}
      <section aria-labelledby="why-h" style={{ background: "#201F1E" }}>
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
              The challenge
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
              Why robotics hiring is different
            </h2>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))",
              gap: "20px",
            }}
          >
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                01
              </span>
              <span style={{ fontSize: "26px", lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }}>
                Robotics roles span software, hardware and field deployment
              </span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                02
              </span>
              <span style={{ fontSize: "26px", lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }}>
                Experienced robotics engineers are passive and rarely apply
              </span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "48px",
                padding: "32px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span style={{ fontSize: "15px", fontWeight: "700", color: "#C1C3C2" }} className="ax-text">
                03
              </span>
              <span style={{ fontSize: "26px", lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "700" }}>
                Generalist recruiters struggle to assess technical depth
              </span>
            </li>
          </ol>
        </div>
      </section>
      {/* S3 ROLES WE RECRUIT */}
      <section aria-labelledby="roles-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
              Role families
            </p>
            <h2
              id="roles-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Roles we recruit
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(460px, 100%), 1fr))", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px",
                borderRadius: "20px",
                background: "#2F2C2B",
                color: "#FFFFFF",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>{"Leadership & Strategy"}</h3>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#DFE21B" }}>4 roles</span>
              </div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 0",
                    borderTop: "1px solid #4A4644",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                  />
                  Head of Robotics
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 0",
                    borderTop: "1px solid #4A4644",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                  />
                  VP Engineering / Engineering Director
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 0",
                    borderTop: "1px solid #4A4644",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                  />
                  Head of Autonomy
                </li>
                <li
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "16px 0",
                    borderTop: "1px solid #4A4644",
                    borderBottom: "1px solid #4A4644",
                    fontSize: "18px",
                    fontWeight: "700",
                  }}
                >
                  <span
                    aria-hidden="true"
                    style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                  />
                  Robotics Product Manager
                </li>
              </ul>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Technical</h3>
                <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2" }}>10 roles</span>
              </div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Robotics Software Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Autonomy Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Controls Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Embedded Software Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Computer Vision Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Perception Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Motion Planning Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Mechatronics Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Robotics Test / Field Engineer
                </li>
                <li
                  className="pill"
                  style={{
                    padding: "12px 18px",
                    borderRadius: "999px",
                    background: "#262423",
                    border: "1px solid #4E4748",
                    fontSize: "16px",
                    fontWeight: "700",
                  }}
                >
                  Deployment / Project Delivery Engineer
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* S4 EMERGING CROSS-FUNCTIONAL ROLES */}
      <section aria-labelledby="em-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(400px, 100%), 1fr))",
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
              Across all four specialisms
            </p>
            <h2
              id="em-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Emerging cross-functional roles
            </h2>
            <div aria-hidden="true" style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              <span
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
              </span>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#34312F",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#D3D9DB",
                }}
                className="ax-tint"
              >
                Data
              </span>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#34312F",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#D3D9DB",
                }}
                className="ax-tint"
              >
                Deep Tech
              </span>
              <span
                style={{
                  padding: "6px 12px",
                  borderRadius: "999px",
                  background: "#34312F",
                  fontSize: "13px",
                  fontWeight: "700",
                  color: "#D3D9DB",
                }}
                className="ax-tint"
              >
                Robotics
              </span>
            </div>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))",
              columnGap: "32px",
              borderTop: "1px solid #3A3736",
            }}
          >
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              {"AI & Data Product Manager"}
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              {"AI Governance & Responsible AI Lead"}
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Digital Transformation Director
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Technology Ecosystem Partnerships Lead
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Venture Studio Lead
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Innovation Program Director
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Technical Talent Intelligence Lead
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Workforce Automation Strategist
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              Human-AI Collaboration Designer
            </li>
            <li style={{ padding: "18px 0", borderBottom: "1px solid #3A3736", fontSize: "17px", fontWeight: "700" }}>
              {"AI Adoption & Change Management Lead"}
            </li>
          </ul>
        </div>
      </section>
      {/* S5 PROOF + S6 HOW TO ENGAGE */}
      <section aria-label="Proof and how to engage" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
          {/* S5 Proof */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "40px",
              borderRadius: "20px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
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
              Proof
            </p>
            <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
              Specialist robotics talent requires specialist expertise.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                minHeight: "120px",
                padding: "24px",
                borderRadius: "14px",
                background: "#262423",
              }}
            >
              <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ height: "28px", width: "auto", alignSelf: "flex-start" }} />
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#DFE21B" }}>
                Fixed Fee Partnership · Robotics
              </span>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Ongoing hiring for a Singapore robotics company scaling autonomous mobile robot deployments. The roles pair technical depth with customer-facing delivery, a niche profile that rarely responds to job ads, so a fixed monthly partnership with a dedicated Talent Acquisition Manager suited the brief better than one-off searches.
              </p>
            </div>
            <Link
              className="alink"
              to="/case-studies"
              style={{
                alignSelf: "flex-start",
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
          {/* S6 How to engage */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "24px",
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
              How to engage
            </p>
            <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
              The model that fits ongoing robotics hiring
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "22px",
                borderRadius: "14px",
                border: "1.5px solid #DFE21B",
                background: "#383533",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#DFE21B" }}>
                RECOMMENDED MODEL
              </span>
              <span style={{ fontSize: "22px", fontWeight: "700" }}>Fixed Fee Partnership</span>
              <span style={{ fontSize: "16px", color: "#C1C3C2" }}>Fixed monthly fee · best for hiring across many roles</span>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "grid",
                gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                gap: "8px",
                fontSize: "15px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "#383533",
                }}
              >
                <span style={{ color: "#E4E7E8" }}>Fixed Fee Partnership</span>
                <span style={{ fontWeight: "700" }}>10%</span>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "#383533",
                }}
              >
                <span style={{ color: "#E4E7E8" }}>Fixed Fee Search Partnership</span>
                <span style={{ fontWeight: "700" }}>15%</span>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "#383533",
                }}
              >
                <span style={{ color: "#E4E7E8" }}>Exclusive Search Partnership</span>
                <span style={{ fontWeight: "700" }}>18%</span>
              </li>
              <li
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "8px",
                  padding: "12px 14px",
                  borderRadius: "10px",
                  background: "#383533",
                }}
              >
                <span style={{ color: "#E4E7E8" }}>Retained Search</span>
                <span style={{ fontWeight: "700" }}>20%</span>
              </li>
            </ul>
            <Link
              className="btn btn-yellow"
              to="/talent-as-a-service"
              style={{
                alignSelf: "flex-start",
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
      {/* S7 RELATED INSIGHTS */}
      <section aria-labelledby="ins-h" style={{ background: "#201F1E" }}>
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
                Related insights
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
                  backgroundImage: "url(/images/circuit.jpg)",
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
                    background: "#DFE21B",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  DeepTech
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Hiring for DeepTech: Where Hardware Meets Machine Learning</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>2 September 2026 · 5 min read</p>
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
                    background: "#DFE21B",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  Workforce Planning
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>Building High-Performance AI, Data and Technology Teams</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>30 September 2026 · 6 min read</p>
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
                    background: "#DFE21B",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  Future of Work
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>The Work of the Future Is Here</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>28 October 2026 · 5 min read</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* S8 FAQ */}
      <section aria-labelledby="faq-h" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
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
              Robotics hiring questions
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", borderTop: "1px solid #3A3736" }}>
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
                  What robotics roles do you recruit for?
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
                <div style={{ padding: "0 12px 24px", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                  <p style={{ margin: "0" }}>
                    Leadership roles such as Head of Robotics, Head of Autonomy and Engineering Director, and technical roles including robotics software, autonomy, controls, embedded, computer vision and perception engineers, plus the deployment and field engineers who take robots to customers. See the full list under Roles we recruit.
                  </p>
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
                  Which markets can you hire robotics talent in?
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
                <div style={{ padding: "0 12px 24px", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
                  <p style={{ margin: "0" }}>
                    We are based in Singapore and hire robotics talent across APAC, including Singapore, Australia and the wider Southeast Asia region. We also support companies headquartered elsewhere, including the US, that are building robotics teams in or for the region. If a search spans several markets, we map each one before we agree the brief.
                  </p>
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
                  How quickly can you shortlist robotics candidates?
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
                  <p style={{ margin: "0" }}>You receive a precision shortlist of 3 to 5 high-quality candidates per role. For most robotics roles, our target is to present that shortlist within 3 to 5 working days of the brief being confirmed; highly specialised or senior searches can take longer, and we will tell you upfront.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S9 DUAL CTA */}
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
              Let's build stronger robotics capability together
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
              Robotics professional?
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
    </main>
  );
}

// SpecialismRobotics: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      {/* S1 HERO */}
      <section aria-labelledby="ma-h1" style={{ background: "#201F1E", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "32px 20px 40px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span>Specialisms</span>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Robotics
            </span>
          </nav>
          <nav aria-label="Specialisms" style={{ display: "flex", gap: "6px", overflowX: "auto", margin: "0 -20px", padding: "0 20px" }}>
            <Link
              to="/specialisms/ai"
              style={{
                flexShrink: "0",
                display: "inline-flex",
                alignItems: "center",
                height: "44px",
                padding: "0 16px",
                borderRadius: "999px",
                border: "1px solid #4E4748",
                background: "#201F1E",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              AI
            </Link>
            <Link
              to="/specialisms/data"
              style={{
                flexShrink: "0",
                display: "inline-flex",
                alignItems: "center",
                height: "44px",
                padding: "0 16px",
                borderRadius: "999px",
                border: "1px solid #4E4748",
                background: "#201F1E",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Data
            </Link>
            <Link
              to="/specialisms/deep-tech"
              style={{
                flexShrink: "0",
                display: "inline-flex",
                alignItems: "center",
                height: "44px",
                padding: "0 16px",
                borderRadius: "999px",
                border: "1px solid #4E4748",
                background: "#201F1E",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Deep Tech
            </Link>
            <Link
              aria-current="page"
              to="/specialisms/robotics"
              style={{
                flexShrink: "0",
                display: "inline-flex",
                alignItems: "center",
                height: "44px",
                padding: "0 16px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "inset 0 -3px 0 #DFE21B",
              }}
            >
              Robotics
            </Link>
          </nav>
          <p
            style={{
              margin: "8px 0 0",
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
            Specialism 04 · Robotics Talent
          </p>
          <h1 id="ma-h1" style={{ margin: "0", fontSize: "40px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Robotics recruitment, from leadership to "}
            <span>deployment</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Specialist robotics recruitment for startups and scale-ups across APAC, from robotics and autonomy engineers to controls, embedded and computer vision specialists.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "6px" }}>
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
            <Link
              to="/open-roles"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "56px",
                borderRadius: "999px",
                border: "1.5px solid #C1C3C2",
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
      {/* S2 WHY */}
      <section aria-labelledby="ma-why" style={{ background: "#201F1E" }}>
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
            The challenge
          </p>
          <h2 id="ma-why" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Why robotics hiring is different
          </h2>
          <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "10px" }}>
            <li style={{ display: "flex", gap: "16px", padding: "20px", borderRadius: "16px", background: "#262423" }}>
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2", paddingTop: "3px" }} className="ax-text">
                01
              </span>
              <span style={{ fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
                Robotics roles span software, hardware and field deployment
              </span>
            </li>
            <li style={{ display: "flex", gap: "16px", padding: "20px", borderRadius: "16px", background: "#262423" }}>
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2", paddingTop: "3px" }} className="ax-text">
                02
              </span>
              <span style={{ fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
                Experienced robotics engineers are passive and rarely apply
              </span>
            </li>
            <li style={{ display: "flex", gap: "16px", padding: "20px", borderRadius: "16px", background: "#262423" }}>
              <span style={{ fontSize: "14px", fontWeight: "700", color: "#C1C3C2", paddingTop: "3px" }} className="ax-text">
                03
              </span>
              <span style={{ fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
                Generalist recruiters struggle to assess technical depth
              </span>
            </li>
          </ol>
        </div>
      </section>
      {/* S3 ROLES */}
      <section aria-labelledby="ma-roles" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
            Role families
          </p>
          <h2
            id="ma-roles"
            style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}
          >
            Roles we recruit
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "22px",
              borderRadius: "18px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>{"Leadership & Strategy"}</h3>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#DFE21B" }}>4 roles</span>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "13px 0",
                  borderTop: "1px solid #4A4644",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                />
                Head of Robotics
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "13px 0",
                  borderTop: "1px solid #4A4644",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                />
                VP Engineering / Engineering Director
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "13px 0",
                  borderTop: "1px solid #4A4644",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                />
                Head of Autonomy
              </li>
              <li
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  padding: "13px 0",
                  borderTop: "1px solid #4A4644",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{ width: "8px", height: "8px", background: "#DFE21B", transform: "skewX(-20deg)", color: "#201F1E" }}
                />
                Robotics Product Manager
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "22px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Technical</h3>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#C1C3C2" }}>10 roles</span>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Robotics Software Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Autonomy Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Controls Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Embedded Software Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Computer Vision Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Perception Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Motion Planning Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Mechatronics Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Robotics Test / Field Engineer
              </li>
              <li
                style={{
                  padding: "10px 14px",
                  borderRadius: "999px",
                  background: "#262423",
                  border: "1px solid #4E4748",
                  fontSize: "15px",
                  fontWeight: "700",
                }}
              >
                Deployment / Project Delivery Engineer
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* S4 EMERGING */}
      <section aria-labelledby="ma-em" style={{ background: "#201F1E" }}>
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
            Across all four specialisms
          </p>
          <h2 id="ma-em" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Emerging cross-functional roles
          </h2>
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
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              {"AI & Data Product Manager"}
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              {"AI Governance & Responsible AI Lead"}
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Digital Transformation Director
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Technology Ecosystem Partnerships Lead
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Venture Studio Lead
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Innovation Program Director
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Technical Talent Intelligence Lead
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Workforce Automation Strategist
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              Human-AI Collaboration Designer
            </li>
            <li style={{ padding: "15px 0", borderBottom: "1px solid #3A3736", fontSize: "16px", fontWeight: "700" }}>
              {"AI Adoption & Change Management Lead"}
            </li>
          </ul>
        </div>
      </section>
      {/* S5 PROOF + S6 ENGAGE */}
      <section aria-label="Proof and how to engage" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
              borderRadius: "18px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <p
              style={{
                margin: "0",
                fontSize: "13px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#D3D9DB",
              }}
            >
              Proof
            </p>
            <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>
              Specialist robotics talent requires specialist expertise.
            </h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                minHeight: "96px",
                padding: "18px",
                borderRadius: "12px",
                background: "#262423",
              }}
            >
              <img src="/assets/logos/sesto.svg" alt="SESTO Robotics" style={{ height: "24px", width: "auto", alignSelf: "flex-start" }} />
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", textTransform: "uppercase", color: "#DFE21B" }}>
                Fixed Fee Partnership · Robotics
              </span>
              <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Ongoing hiring for a Singapore robotics company scaling autonomous mobile robot deployments. The roles pair technical depth with customer-facing delivery, a niche profile that rarely responds to job ads, so a fixed monthly partnership with a dedicated Talent Acquisition Manager suited the brief better than one-off searches.
              </p>
            </div>
            <Link
              to="/case-studies"
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
              Read the case studies
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "24px",
              borderRadius: "18px",
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
              How to engage
            </p>
            <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>The model that fits ongoing robotics hiring</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                padding: "18px",
                borderRadius: "12px",
                border: "1.5px solid #DFE21B",
                background: "#383533",
              }}
            >
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.06em", color: "#DFE21B" }}>
                RECOMMENDED MODEL
              </span>
              <span style={{ fontSize: "19px", fontWeight: "700" }}>Fixed Fee Partnership</span>
              <span style={{ fontSize: "15px", color: "#C1C3C2" }}>Fixed monthly fee · best for hiring across many roles</span>
            </div>
            <Link
              to="/talent-as-a-service"
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
              Compare engagement models
            </Link>
          </div>
        </div>
      </section>
      {/* S7 INSIGHTS */}
      <section aria-labelledby="ma-ins" style={{ background: "#201F1E" }}>
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
            Insights
          </p>
          <h2 id="ma-ins" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Related insights
          </h2>
          <Link
            to="/insights/article"
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
                backgroundImage: "url(/images/circuit.jpg)",
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
                  background: "#DFE21B",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#201F1E",
                }}
              >
                DeepTech
              </span>
              <h3 style={{ margin: "0", fontSize: "19px", lineHeight: "1.3", fontWeight: "700" }}>Hiring for DeepTech: Where Hardware Meets Machine Learning</h3>
              <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>2 September 2026 · 5 min read</p>
            </div>
          </Link>
          <Link
            to="/insights/article"
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
              <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>Building High-Performance AI, Data and Technology Teams</h3>
              <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Workforce Planning · 30 September 2026</p>
            </div>
          </Link>
          <Link
            to="/insights/article"
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
                backgroundImage: "url(/images/future-of-work.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>The Work of the Future Is Here</h3>
              <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>Future of Work · 28 October 2026</p>
            </div>
          </Link>
        </div>
      </section>
      {/* S8 FAQ */}
      <section aria-labelledby="ma-faq" style={{ background: "#201F1E", borderTop: "1px solid #3A3736" }}>
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
          <h2 id="ma-faq" style={{ margin: "0 0 8px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Robotics hiring questions
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
                  What robotics roles do you recruit for?
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
              <p style={{ margin: "0", padding: "0 0 20px", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                Leadership roles such as Head of Robotics, Head of Autonomy and Engineering Director, and technical roles including robotics software, autonomy, controls, embedded, computer vision and perception engineers, plus the deployment and field engineers who take robots to customers. See the full list under Roles we recruit.
              </p>
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
                  Which markets can you hire robotics talent in?
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
              <p hidden style={{ margin: "0", padding: "0 0 20px", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                We are based in Singapore and hire robotics talent across APAC, including Singapore, Australia and the wider Southeast Asia region. We also support companies headquartered elsewhere, including the US, that are building robotics teams in or for the region. If a search spans several markets, we map each one before we agree the brief.
              </p>
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
                  How quickly can you shortlist robotics candidates?
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
              <p hidden style={{ margin: "0", padding: "0 0 20px", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>
                You receive a precision shortlist of 3 to 5 high-quality candidates per role. For most robotics roles, our target is to present that shortlist within 3 to 5 working days of the brief being confirmed; highly specialised or senior searches can take longer, and we will tell you upfront.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* S9 DUAL CTA */}
      <section
        aria-label="Next steps"
        style={{ background: "#201F1E", padding: "0 20px 64px", display: "flex", flexDirection: "column", gap: "12px" }}
        className="ax-glow-b"
      >
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "28px 22px",
            borderRadius: "20px",
            background: "#2F2C2B",
            color: "#FFFFFF",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              right: "40px",
              top: "0",
              width: "12px",
              height: "64px",
              background: "#DFE21B",
              transform: "skewX(-24deg)",
              color: "#201F1E",
            }}
          />
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
          <h2 style={{ margin: "0", fontSize: "26px", lineHeight: "1.15", fontWeight: "700" }}>
            Let's build stronger robotics capability together
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "28px 22px",
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
            Robotics professional?
          </p>
          <h2 style={{ margin: "0", fontSize: "26px", lineHeight: "1.15", fontWeight: "700" }}>
            Explore specialist opportunities with CTT
          </h2>
          <Link
            to="/join"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "56px",
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
      </section>
    </main>
  );
}
