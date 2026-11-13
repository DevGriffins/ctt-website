import { Link } from "react-router-dom";

// HowWeWork: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section
        aria-labelledby="hww-h1"
        style={{ background: "#2F2C2B", color: "#FFFFFF", position: "relative", overflow: "hidden" }}
        className="ax-glow"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage: "linear-gradient(#2F2C2B 1px, transparent 1px), linear-gradient(90deg, #2F2C2B 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "12%",
            top: "0",
            bottom: "0",
            width: "28px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-60px",
            top: "0",
            bottom: "0",
            width: "26%",
            background: "#4E4748",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px) 104px",
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
              How We Work
            </span>
          </nav>
          <h1
            id="hww-h1"
            style={{ margin: "0", fontSize: "clamp(48px, 6vw, 88px)", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}
          >
            AI-powered.
            <br />
            <span style={{ color: "#DFE21B" }}>Human-led.</span>
          </h1>
          <p style={{ margin: "0", maxWidth: "620px", fontSize: "21px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Automation handles the speed. Specialists handle the judgement. You get a curated shortlist of people who fit.
          </p>
          <Link
            className="btn btn-yellow"
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
      {/* S2 DELIVERY PROCESS (swimlane step diagram) */}
      <section aria-labelledby="proc-h" style={{ background: "#201F1E" }}>
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
                The delivery process
              </p>
              <h2
                id="proc-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Four stages, one partnership
              </h2>
            </div>
            <div
              aria-hidden="true"
              style={{ display: "flex", flexWrap: "wrap", gap: "20px", fontSize: "14px", fontWeight: "700", color: "#D3D9DB" }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "4px", background: "#34312F", border: "2px solid #DFE21B" }} />
                AI assists
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span style={{ width: "14px", height: "14px", borderRadius: "4px", background: "#4E4748" }} />
                Specialist leads
              </span>
            </div>
          </div>
          <div aria-label="Four-stage delivery process" role="list" style={{ overflowX: "auto" }}>
            <div style={{ minWidth: "1100px", display: "grid", gridTemplateColumns: "150px repeat(4, minmax(0, 1fr))", gap: "12px" }}>
              {/* header row */}
              <div />
              <div role="listitem" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "0 4px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.2", fontWeight: "700" }}>{"Discovery & Alignment"}</h3>
              </div>
              <div role="listitem" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "0 4px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.2", fontWeight: "700" }}>Talent Mapping</h3>
              </div>
              <div role="listitem" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "0 4px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                  <span
                    aria-hidden="true"
                    style={{
                      flexGrow: "1",
                      height: "2px",
                      background: "repeating-linear-gradient(90deg, #C1C3C2 0 5px, transparent 5px 11px)",
                    }}
                  />
                </div>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.2", fontWeight: "700" }}>Precision Shortlisting</h3>
              </div>
              <div role="listitem" style={{ display: "flex", flexDirection: "column", gap: "14px", padding: "0 4px 12px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
                    4
                  </span>
                </div>
                <h3 style={{ margin: "0", fontSize: "22px", lineHeight: "1.2", fontWeight: "700" }}>{"Partnership & Delivery"}</h3>
              </div>
              {/* AI lane */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#262423",
                }}
              >
                <span style={{ width: "14px", height: "14px", borderRadius: "4px", background: "#34312F", border: "2px solid #DFE21B" }} />
                <span style={{ fontSize: "15px", fontWeight: "700" }}>AI assists</span>
              </div>
              <div
                className="lane-cell"
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#262423",
                  border: "2px solid #DFE21B",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                Intake call captured by an AI job notetaker
              </div>
              <div
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  border: "1.5px dashed #4E4748",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "#D3D9DB",
                  gridRow: "span 2",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <span
                  style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  Market reach
                </span>
                Multi-channel advertising plus a search of CTT's proprietary database
              </div>
              <div
                className="lane-cell"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#262423",
                  border: "2px solid #DFE21B",
                  fontSize: "16px",
                  lineHeight: "1.45",
                }}
              >
                <span>Loxo AI ranks the pool into a longlist and priority shortlist</span>
                <span style={{ height: "1px", background: "#E6E3E0" }} />
                <span>Automated email and WhatsApp outreach</span>
                <span style={{ height: "1px", background: "#E6E3E0" }} />
                <span>AI-assisted screening questionnaires</span>
              </div>
              <div style={{ borderRadius: "16px", border: "1.5px dashed #3A3736" }} />
              {/* People lane */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                }}
              >
                <span style={{ width: "14px", height: "14px", borderRadius: "4px", background: "#DFE21B", color: "#201F1E" }} />
                <span style={{ fontSize: "15px", fontWeight: "700" }}>Specialist leads</span>
              </div>
              <div
                className="lane-cell"
                style={{
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "1.5",
                }}
              >
                Scorecard and detailed job description agreed
              </div>
              <div
                className="lane-cell"
                style={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "1.45",
                }}
              >
                <span
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="12"
                    stroke="#201F1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="12"
                  >
                    <path d="M12 4v16M6 14l6 6 6-6" />
                  </svg>
                  Handoff
                </span>
                <span>Candidate replies: automation stops, a dedicated specialist takes over</span>
                <span style={{ height: "1px", background: "#60554F" }} />
                <span>Consultant video interviews</span>
              </div>
              <div
                className="lane-cell"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "20px",
                  borderRadius: "16px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "16px",
                  lineHeight: "1.45",
                }}
              >
                <span>Shortlist of up to six delivered in Loxo</span>
                <span style={{ height: "1px", background: "#60554F" }} />
                <span>Interview coordination and optional validation</span>
                <span style={{ height: "1px", background: "#60554F" }} />
                <span>Offer, references and onboarding</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S3 WHERE AI HELPS */}
      <section aria-labelledby="ai-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
              The handoff
            </p>
            <h2
              id="ai-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Where AI helps, where people lead
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(360px, 100%), 1fr))", gap: "20px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "32px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "2px solid #DFE21B",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#34312F",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
                className="ax-tint"
              >
                AI
              </span>
              <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.45", fontWeight: "700" }}>
                Capturing requirements, matching and ranking, personalised outreach, first-pass assessment
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "32px",
                borderRadius: "20px",
                background: "#4E4748",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                People
              </span>
              <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.45", fontWeight: "700" }}>
                The moment a candidate replies or completes an assessment, automation stops and a dedicated specialist takes over
              </p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "32px",
                borderRadius: "20px",
                background: "#2F2C2B",
                color: "#FFFFFF",
              }}
            >
              <span
                style={{
                  alignSelf: "flex-start",
                  padding: "5px 12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "13px",
                  fontWeight: "700",
                }}
              >
                People
              </span>
              <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.45", fontWeight: "700" }}>
                Structured video interviews for cultural fit, motivation and technical baseline
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* S4 WHAT YOU RECEIVE */}
      <section aria-labelledby="rec-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))",
            gap: "56px 80px",
            alignItems: "center",
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
              What you receive
            </p>
            <h2
              id="rec-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              A shortlist you can act on
            </h2>
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Up to six candidates, each with CV, AI assessment summary and interview highlights, shared with the hiring manager through
              Loxo.
            </p>
          </div>
          {/* Illustrative shortlist UI (no real data) */}
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "24px",
              borderRadius: "24px",
              background: "#2F2C2B",
              clipPath: "polygon(0 0, calc(100% - 56px) 0, 100% 56px, 100% 100%, 0 100%)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "4px 4px 12px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.14em", color: "#DFE21B" }}>SHORTLIST</span>
              <span style={{ fontSize: "13px", color: "#C1C3C2" }}>Up to six candidates</span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "12px", background: "#383533" }}
            >
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#60554F" }} />
              <span style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ width: "46%", height: "9px", borderRadius: "4px", background: "#60554F" }} />
                <span style={{ width: "30%", height: "7px", borderRadius: "4px", background: "#4E4748" }} />
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                CV
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1.5px solid #DFE21B",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                AI summary
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                Interview
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "12px", background: "#383533" }}
            >
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#60554F" }} />
              <span style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ width: "38%", height: "9px", borderRadius: "4px", background: "#60554F" }} />
                <span style={{ width: "26%", height: "7px", borderRadius: "4px", background: "#4E4748" }} />
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                CV
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1.5px solid #DFE21B",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                AI summary
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                Interview
              </span>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "12px", background: "#383533" }}
            >
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#60554F" }} />
              <span style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ width: "52%", height: "9px", borderRadius: "4px", background: "#60554F" }} />
                <span style={{ width: "34%", height: "7px", borderRadius: "4px", background: "#4E4748" }} />
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#4E4748",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                CV
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  border: "1.5px solid #DFE21B",
                  color: "#FFFFFF",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                AI summary
              </span>
              <span
                style={{
                  padding: "4px 8px",
                  borderRadius: "6px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  fontSize: "11px",
                  fontWeight: "700",
                }}
              >
                Interview
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                padding: "14px",
                borderRadius: "12px",
                background: "#383533",
                opacity: "0.6",
              }}
            >
              <span style={{ width: "36px", height: "36px", borderRadius: "999px", background: "#60554F" }} />
              <span style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ width: "42%", height: "9px", borderRadius: "4px", background: "#60554F" }} />
                <span style={{ width: "28%", height: "7px", borderRadius: "4px", background: "#4E4748" }} />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* S5 OPTIONAL VALIDATION + S6 SPEED + S7 TOOLS */}
      <section aria-label="Validation, speed and tools" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              padding: "40px",
              borderRadius: "20px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
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
                Optional validation
              </p>
              <h2
                style={{ margin: "0", fontSize: "clamp(30px, 3vw, 40px)", lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }}
              >
                Go deeper before you decide
              </h2>
            </div>
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
                gap: "12px",
              }}
            >
              <li
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#262423",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Deep-dive skills testing
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#262423",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Culture and values assessments
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#262423",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Job fit and behavioural assessments
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  padding: "20px",
                  borderRadius: "14px",
                  background: "#262423",
                  fontSize: "17px",
                  fontWeight: "700",
                  lineHeight: "1.4",
                }}
              >
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="22"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.25"
                  style={{ flexShrink: "0" }}
                  viewBox="0 0 24 24"
                  width="22"
                >
                  <path d="M5 12l5 5 9-10" />
                </svg>
                Technical validation and competency evaluation
              </li>
            </ul>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(480px, 100%), 1fr))", gap: "20px" }}>
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
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
                  Speed
                </p>
                <span
                  style={{
                    padding: "3px 8px",
                    border: "1.5px dashed #60554F",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    color: "#C1C3C2",
                  }}
                >
                  TO CONFIRM BEFORE PUBLISHING
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: "14px", flexWrap: "wrap" }}>
                <span style={{ fontSize: "88px", lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }}>3–5</span>
                <span style={{ fontSize: "24px", fontWeight: "700" }}>days</span>
              </div>
              <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#D3D9DB" }}>Target per role to a first shortlist.</p>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                padding: "40px",
                borderRadius: "20px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
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
                  Tools we use
                </p>
                <span
                  style={{
                    padding: "3px 8px",
                    border: "1.5px dashed #60554F",
                    borderRadius: "6px",
                    fontSize: "11px",
                    fontWeight: "700",
                    letterSpacing: "0.06em",
                    color: "#C1C3C2",
                  }}
                >
                  CONFIRM: NAME TOOLS PUBLICLY?
                </span>
              </div>
              <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "16px 0",
                    borderTop: "1px solid #3A3736",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>Loxo</span>
                  <span style={{ fontSize: "16px", color: "#D3D9DB" }}>CRM and AI sourcing</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "16px 0",
                    borderTop: "1px solid #3A3736",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>Metaview</span>
                  <span style={{ fontSize: "16px", color: "#D3D9DB" }}>WhatsApp engagement</span>
                </li>
                <li
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "16px",
                    padding: "16px 0",
                    borderTop: "1px solid #3A3736",
                    borderBottom: "1px solid #3A3736",
                  }}
                >
                  <span style={{ fontSize: "20px", fontWeight: "700" }}>Microsoft Teams</span>
                  <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Video interviews</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* S8 CANDIDATE EXPERIENCE (dark CTA band · brown) */}
      <section aria-labelledby="cx-h" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
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
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
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
            For talent
          </p>
          <h2
            id="cx-h"
            style={{ margin: "0", fontSize: "clamp(32px, 3.2vw, 46px)", lineHeight: "1.08", letterSpacing: "-0.02em", fontWeight: "700" }}
          >
            The candidate experience
          </h2>
          <p style={{ margin: "0", maxWidth: "640px", fontSize: "19px", lineHeight: "1.6", color: "#E4E7E8" }}>
            Fast replies on email or WhatsApp, a real specialist after the first response, and honest feedback.
          </p>
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
        </div>
      </section>
      {/* S9 FINAL CTA */}
      <section aria-labelledby="cta-h" style={{ background: "#201F1E" }}>
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
            id="cta-h"
            style={{ margin: "0", fontSize: "clamp(36px, 4.4vw, 64px)", lineHeight: "1.04", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            {"See the process on your "}
            <span>next hire</span>
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

// HowWeWork: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      {/* S1 HERO */}
      <section
        aria-labelledby="mh-h1"
        style={{ position: "relative", overflow: "hidden", background: "#2F2C2B", color: "#FFFFFF" }}
        className="ax-glow"
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: "0",
            backgroundImage: "linear-gradient(#2F2C2B 1px, transparent 1px), linear-gradient(90deg, #2F2C2B 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "40px",
            top: "0",
            width: "14px",
            height: "120px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div style={{ position: "relative", padding: "48px 20px 56px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              How We Work
            </span>
          </nav>
          <h1 id="mh-h1" style={{ margin: "0", fontSize: "48px", lineHeight: "1", letterSpacing: "-0.035em", fontWeight: "700" }}>
            AI-powered.
            <br />
            <span style={{ color: "#DFE21B" }}>Human-led.</span>
          </h1>
          <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Automation handles the speed. Specialists handle the judgement. You get a curated shortlist of people who fit.
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
      {/* S2 PROCESS (stacked stages with AI People lanes) */}
      <section aria-labelledby="mh-proc" style={{ background: "#201F1E" }}>
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
            The delivery process
          </p>
          <h2 id="mh-proc" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Four stages, one partnership
          </h2>
          <div
            aria-hidden="true"
            style={{ display: "flex", gap: "16px", fontSize: "13px", fontWeight: "700", color: "#D3D9DB", marginBottom: "8px" }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#34312F", border: "2px solid #DFE21B" }} />
              AI assists
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "12px", height: "12px", borderRadius: "3px", background: "#4E4748" }} />
              Specialist leads
            </span>
          </div>
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
              <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0 28px" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700" }}>{"Discovery & Alignment"}</h3>
                <div
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#262423",
                    border: "2px solid #DFE21B",
                    fontSize: "15px",
                    lineHeight: "1.45",
                  }}
                >
                  Intake call captured by an AI job notetaker
                </div>
                <div
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#4E4748",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    lineHeight: "1.45",
                  }}
                >
                  Scorecard and detailed job description agreed
                </div>
              </div>
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
              <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0 28px" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700" }}>Talent Mapping</h3>
                <div
                  style={{
                    padding: "14px",
                    borderRadius: "12px",
                    border: "1.5px dashed #4E4748",
                    fontSize: "15px",
                    lineHeight: "1.45",
                    color: "#D3D9DB",
                  }}
                >
                  Multi-channel advertising plus a search of CTT's proprietary database
                </div>
              </div>
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
                <span
                  aria-hidden="true"
                  style={{
                    flexGrow: "1",
                    width: "2px",
                    background: "repeating-linear-gradient(180deg, #C1C3C2 0 5px, transparent 5px 11px)",
                  }}
                />
              </div>
              <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0 28px" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700" }}>Precision Shortlisting</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#262423",
                    border: "2px solid #DFE21B",
                    fontSize: "15px",
                    lineHeight: "1.45",
                  }}
                >
                  <span>Loxo AI ranks the pool into a longlist and priority shortlist</span>
                  <span>Automated email and WhatsApp outreach</span>
                  <span>AI-assisted screening questionnaires</span>
                </div>
                <span
                  style={{
                    alignSelf: "flex-start",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "6px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    fontSize: "12px",
                    fontWeight: "700",
                    color: "#201F1E",
                  }}
                >
                  <svg
                    aria-hidden="true"
                    fill="none"
                    height="12"
                    stroke="#201F1E"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                    width="12"
                  >
                    <path d="M12 4v16M6 14l6 6 6-6" />
                  </svg>
                  Handoff
                </span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#4E4748",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    lineHeight: "1.45",
                  }}
                >
                  <span>Candidate replies: automation stops, a dedicated specialist takes over</span>
                  <span>Consultant video interviews</span>
                </div>
              </div>
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
                  4
                </span>
              </div>
              <div style={{ flexGrow: "1", display: "flex", flexDirection: "column", gap: "8px", padding: "4px 0 0" }}>
                <h3 style={{ margin: "0 0 4px", fontSize: "20px", fontWeight: "700" }}>{"Partnership & Delivery"}</h3>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "8px",
                    padding: "14px",
                    borderRadius: "12px",
                    background: "#4E4748",
                    color: "#FFFFFF",
                    fontSize: "15px",
                    lineHeight: "1.45",
                  }}
                >
                  <span>Shortlist of up to six delivered in Loxo</span>
                  <span>Interview coordination and optional validation</span>
                  <span>Offer, references and onboarding</span>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </section>
      {/* S3 WHERE AI HELPS */}
      <section aria-labelledby="mh-ai" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
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
            The handoff
          </p>
          <h2 id="mh-ai" style={{ margin: "0 0 12px", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            Where AI helps, where people lead
          </h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "2px solid #DFE21B",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#34312F",
                fontSize: "12px",
                fontWeight: "700",
              }}
              className="ax-tint"
            >
              AI
            </span>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
              Capturing requirements, matching and ranking, personalised outreach, first-pass assessment
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px",
              borderRadius: "16px",
              background: "#4E4748",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              People
            </span>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
              The moment a candidate replies or completes an assessment, automation stops and a dedicated specialist takes over
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px",
              borderRadius: "16px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <span
              style={{
                alignSelf: "flex-start",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#DFE21B",
                color: "#201F1E",
                fontSize: "12px",
                fontWeight: "700",
              }}
            >
              People
            </span>
            <p style={{ margin: "0", fontSize: "18px", lineHeight: "1.45", fontWeight: "700" }}>
              Structured video interviews for cultural fit, motivation and technical baseline
            </p>
          </div>
        </div>
      </section>
      {/* S4 WHAT YOU RECEIVE */}
      <section aria-labelledby="mh-rec" style={{ background: "#201F1E" }}>
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
            What you receive
          </p>
          <h2 id="mh-rec" style={{ margin: "0", fontSize: "32px", lineHeight: "1.1", letterSpacing: "-0.025em", fontWeight: "700" }}>
            A shortlist you can act on
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Up to six candidates, each with CV, AI assessment summary and interview highlights, shared with the hiring manager through Loxo.
          </p>
          <div
            aria-hidden="true"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginTop: "8px",
              padding: "16px",
              borderRadius: "18px",
              background: "#2F2C2B",
              clipPath: "polygon(0 0, calc(100% - 36px) 0, 100% 36px, 100% 100%, 0 100%)",
            }}
          >
            <div style={{ padding: "4px 4px 8px", fontSize: "11px", fontWeight: "700", letterSpacing: "0.14em", color: "#DFE21B" }}>
              SHORTLIST
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "12px",
                borderRadius: "10px",
                background: "#383533",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "30px", height: "30px", borderRadius: "999px", background: "#60554F" }} />
                <span style={{ width: "50%", height: "8px", borderRadius: "4px", background: "#60554F" }} />
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    background: "#4E4748",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  CV
                </span>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    border: "1.5px solid #DFE21B",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  AI summary
                </span>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  Interview
                </span>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                padding: "12px",
                borderRadius: "10px",
                background: "#383533",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <span style={{ width: "30px", height: "30px", borderRadius: "999px", background: "#60554F" }} />
                <span style={{ width: "40%", height: "8px", borderRadius: "4px", background: "#60554F" }} />
              </div>
              <div style={{ display: "flex", gap: "6px" }}>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    background: "#4E4748",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  CV
                </span>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    border: "1.5px solid #DFE21B",
                    color: "#FFFFFF",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  AI summary
                </span>
                <span
                  style={{
                    padding: "3px 7px",
                    borderRadius: "5px",
                    background: "#DFE21B",
                    color: "#201F1E",
                    fontSize: "11px",
                    fontWeight: "700",
                  }}
                >
                  Interview
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* S5-S7 */}
      <section aria-label="Validation, speed and tools" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "64px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              padding: "22px",
              borderRadius: "16px",
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
              Optional validation
            </p>
            <h2 style={{ margin: "0", fontSize: "26px", lineHeight: "1.15", fontWeight: "700" }}>Go deeper before you decide</h2>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "14px 0",
                  borderTop: "1px solid #3A3736",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
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
                Deep-dive skills testing
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "14px 0",
                  borderTop: "1px solid #3A3736",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
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
                Culture and values assessments
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "14px 0",
                  borderTop: "1px solid #3A3736",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
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
                Job fit and behavioural assessments
              </li>
              <li
                style={{
                  display: "flex",
                  gap: "12px",
                  padding: "14px 0",
                  borderTop: "1px solid #3A3736",
                  fontSize: "16px",
                  fontWeight: "700",
                }}
              >
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
                Technical validation and competency evaluation
              </li>
            </ul>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              padding: "22px",
              borderRadius: "16px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
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
                Speed
              </p>
              <span
                style={{
                  padding: "3px 7px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                TO CONFIRM
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "10px" }}>
              <span style={{ fontSize: "64px", lineHeight: "0.95", letterSpacing: "-0.04em", fontWeight: "700" }}>3–5</span>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>days</span>
            </div>
            <p style={{ margin: "0", fontSize: "16px", color: "#D3D9DB" }}>Target per role to a first shortlist.</p>
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
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "8px" }}>
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
                Tools we use
              </p>
              <span
                style={{
                  padding: "3px 7px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "6px",
                  fontSize: "10px",
                  fontWeight: "700",
                  color: "#C1C3C2",
                }}
              >
                CONFIRM: NAME PUBLICLY?
              </span>
            </div>
            <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column" }}>
              <li style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>Loxo</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>CRM and AI sourcing</span>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>Metaview</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>WhatsApp engagement</span>
              </li>
              <li style={{ display: "flex", flexDirection: "column", gap: "2px", padding: "12px 0", borderTop: "1px solid #3A3736" }}>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>Microsoft Teams</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Video interviews</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* S8 CANDIDATE EXPERIENCE */}
      <section aria-labelledby="mh-cx" style={{ position: "relative", overflow: "hidden", background: "#4E4748", color: "#FFFFFF" }}>
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "96px",
            top: "0",
            width: "14px",
            height: "110px",
            background: "#DFE21B",
            transform: "skewX(-24deg)",
            color: "#201F1E",
          }}
        />
        <div style={{ position: "relative", padding: "104px 20px 56px", display: "flex", flexDirection: "column", gap: "16px" }}>
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
          <h2 id="mh-cx" style={{ margin: "0", fontSize: "30px", lineHeight: "1.12", fontWeight: "700" }}>
            The candidate experience
          </h2>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.6", color: "#E4E7E8" }}>
            Fast replies on email or WhatsApp, a real specialist after the first response, and honest feedback.
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
      {/* S9 CTA */}
      <section aria-labelledby="mh-cta" style={{ background: "#201F1E" }}>
        <div style={{ padding: "72px 20px", display: "flex", flexDirection: "column", gap: "24px" }}>
          <h2 id="mh-cta" style={{ margin: "0", fontSize: "34px", lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"See the process on your "}
            <span>next hire</span>
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
