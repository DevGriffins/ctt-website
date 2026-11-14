import { Link } from "react-router-dom";

// About: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section
        aria-labelledby="ab-h1"
        style={{ position: "relative", overflow: "hidden", background: "#2F2C2B", color: "#FFFFFF" }}
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
            right: "-60px",
            top: "0",
            bottom: "0",
            width: "30%",
            background: "#4E4748",
            clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "16%",
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
              About
            </span>
          </nav>
          <h1
            id="ab-h1"
            style={{
              margin: "0",
              maxWidth: "900px",
              fontSize: "clamp(44px, 5.4vw, 80px)",
              lineHeight: "1.02",
              letterSpacing: "-0.035em",
              fontWeight: "700",
            }}
          >
            {"Built to solve talent challenges, "}
            <span style={{ color: "#DFE21B" }}>not just fill vacancies</span>
          </h1>
          <p style={{ margin: "0", fontSize: "21px", lineHeight: "1.55", color: "#D3D9DB" }}>
            The technology recruitment company of Celotti Group.
          </p>
        </div>
      </section>
      {/* S2 OUR STORY */}
      <section aria-labelledby="story-h" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(520px, 100%), 1fr))",
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
              Our story
            </p>
            <h2
              id="story-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Technology hiring can't be solved through transactional recruitment alone
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px", paddingTop: "8px" }}>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.65", color: "#D3D9DB" }}>
              That's our founding belief. As AI reshapes industries, organisations need specialist expertise and trusted, long-term
              partnerships.
            </p>
            <div
              style={{ display: "flex", alignItems: "center", gap: "24px", padding: "28px", borderRadius: "20px", background: "#262423" }}
            >
              <span style={{ fontSize: "56px", lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }}>2013</span>
              <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "18px", lineHeight: "1.4", fontWeight: "700" }}>Celotti Group heritage since 2013</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* S3 PARTNERSHIP OVER TRANSACTIONS */}
      <section aria-labelledby="pot-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
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
                Our philosophy
              </p>
              <h2
                id="pot-h"
                style={{
                  margin: "0",
                  fontSize: "clamp(34px, 3.6vw, 52px)",
                  lineHeight: "1.06",
                  letterSpacing: "-0.025em",
                  fontWeight: "700",
                }}
              >
                Partnership over transactions
              </h2>
            </div>
            <p style={{ margin: "0", fontSize: "20px", lineHeight: "1.6", color: "#D3D9DB" }}>
              Our goal is to become an extension of a client's hiring and workforce strategy, not an external supplier.
            </p>
          </div>
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))",
              gap: "12px",
            }}
          >
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  boxShadow: "0 0 0 4px #F1EFEC",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Long-term thinking</span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  boxShadow: "0 0 0 4px #F1EFEC",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Collaboration</span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  boxShadow: "0 0 0 4px #F1EFEC",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Trust</span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  boxShadow: "0 0 0 4px #F1EFEC",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Shared outcomes</span>
            </li>
            <li
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "28px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  boxShadow: "0 0 0 4px #F1EFEC",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "21px", fontWeight: "700" }}>Sustainable growth</span>
            </li>
          </ul>
        </div>
      </section>
      {/* S4 TALENT JOURNEY */}
      <section aria-labelledby="tj-h" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "112px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
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
              Full advisory scope
            </p>
            <h2
              id="tj-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              The talent journey
            </h2>
          </div>
          <ol
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(200px, 100%), 1fr))",
              gap: "12px",
            }}
          >
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "28px 24px 32px",
                borderRadius: "18px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                1
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.04em", color: "#DFE21B" }}>ATTRACT</span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Talent branding</span>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "28px 24px 32px",
                borderRadius: "18px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                2
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.04em", color: "#DFE21B" }}>MAP</span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Talent mapping</span>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "28px 24px 32px",
                borderRadius: "18px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                3
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.04em", color: "#DFE21B" }}>SEARCH</span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Talent search</span>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "28px 24px 32px",
                borderRadius: "18px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                4
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.04em", color: "#DFE21B" }}>SECURE</span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Talent negotiation</span>
              </span>
            </li>
            <li
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "20px",
                padding: "28px 24px 32px",
                borderRadius: "18px",
                background: "#383533",
                border: "1px solid #4A4644",
              }}
            >
              <span
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "999px",
                  background: "#DFE21B",
                  color: "#201F1E",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              >
                5
              </span>
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span style={{ fontSize: "22px", fontWeight: "700", letterSpacing: "0.04em", color: "#DFE21B" }}>RETAIN</span>
                <span style={{ fontSize: "16px", color: "#D3D9DB" }}>Talent retention advisory</span>
              </span>
            </li>
          </ol>
          <Link
            to="/how-we-work"
            style={{
              alignSelf: "flex-start",
              fontSize: "16px",
              fontWeight: "700",
              color: "#FFFFFF",
              textDecoration: "underline",
              textDecorationColor: "#DFE21B",
              textDecorationThickness: "3px",
              textUnderlineOffset: "6px",
            }}
          >
            See how an assignment runs
          </Link>
        </div>
      </section>
      {/* S5 LEADERSHIP TEAM */}
      <section aria-labelledby="team-h" style={{ background: "#201F1E" }}>
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
              People
            </p>
            <h2
              id="team-h"
              style={{
                margin: "0",
                fontSize: "clamp(34px, 3.6vw, 52px)",
                lineHeight: "1.06",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Leadership team
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "24px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg,#34312F,#262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px",
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  color: "#DFE21B",
                  clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
                aria-hidden="true"
              >
                DK
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Dharshan Kumar</h3>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>{"Business Head, AI & Data"}</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>Leads CTT's AI & Data practice, partnering with founders and technology leaders across APAC to build specialist teams through long-term, advisory-led engagements.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg,#34312F,#262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px",
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  color: "#DFE21B",
                  clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
                aria-hidden="true"
              >
                VP
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Veena Pujari</h3>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Talent Advisory</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>Guides clients through market mapping, benchmarking and hiring strategy, so AI and data teams are planned with clarity before a search begins.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
              <div
                style={{
                  aspectRatio: "4 / 5",
                  borderRadius: "20px",
                  background: "linear-gradient(135deg,#34312F,#262423)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "56px",
                  fontWeight: "700",
                  letterSpacing: "0.02em",
                  color: "#DFE21B",
                  clipPath: "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
                aria-hidden="true"
              >
                KR
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <h3 style={{ margin: "0", fontSize: "24px", fontWeight: "700" }}>Kavena Rama</h3>
                <span style={{ fontSize: "16px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
              </div>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.6", color: "#D3D9DB" }}>Works alongside clients and candidates from shortlisting to offer, helping AI, data and digital professionals find roles where they can grow and stay.</p>
            </div>
          </div>
        </div>
      </section>
      {/* S6 MEMBERSHIPS & LICENCES */}
      <section aria-labelledby="mem-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "40px",
          }}
        >
          <h2 id="mem-h" style={{ margin: "0", fontSize: "clamp(30px, 3vw, 44px)", letterSpacing: "-0.02em", fontWeight: "700" }}>
            Memberships and licences
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))", gap: "16px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                style={{
                  height: "64px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/rcsa.jpg" alt="RCSA" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700" }}>RCSA Corporate Member</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                style={{
                  height: "64px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/apsco.png" alt="APSCo Southeast Asia" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700" }}>APSCo Southeast Asia</span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                style={{
                  height: "64px",
                  borderRadius: "10px",
                  background: "#2F2C2B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                  color: "#DFE21B",
                }}
              >
                EA LICENCE
              </div>
              <span style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <span style={{ fontSize: "18px", fontWeight: "700" }}>Employment Agency licence</span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Licence No. 26S3355 · UEN 202602927R</span>
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
                padding: "24px",
                borderRadius: "16px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <div
                style={{
                  height: "64px",
                  background: "#FFFFFF",
                  borderRadius: "10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px 14px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/weconnect-international.jpg" alt="WEConnect International" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
              <span style={{ fontSize: "18px", fontWeight: "700" }}>WEConnect International</span>
            </div>
          </div>
        </div>
      </section>
      {/* S7 OFFICE + CTA */}
      <section aria-labelledby="ab-cta" style={{ background: "#201F1E", padding: "112px clamp(20px, 3.5vw, 32px)" }}>
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
            <p style={{ margin: "0", display: "flex", alignItems: "center", gap: "10px", fontSize: "15px", color: "#D3D9DB" }}>
              <svg
                aria-hidden="true"
                fill="none"
                height="18"
                stroke="#DFE21B"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              JustCo, The Metropolis, Singapore
            </p>
            <h2
              id="ab-cta"
              style={{
                margin: "0",
                fontSize: "clamp(32px, 3.4vw, 48px)",
                lineHeight: "1.08",
                letterSpacing: "-0.025em",
                fontWeight: "700",
              }}
            >
              Interested in partnering with CTT? Let's talk.
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
              Get in touch
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

// About: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section
        aria-labelledby="mab-h1"
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
        <div style={{ position: "relative", padding: "48px 20px 56px", display: "flex", flexDirection: "column", gap: "18px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              About
            </span>
          </nav>
          <h1 id="mab-h1" style={{ margin: "0", fontSize: "38px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Built to solve talent challenges, "}
            <span style={{ color: "#DFE21B" }}>not just fill vacancies</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            The technology recruitment company of Celotti Group.
          </p>
        </div>
      </section>
      <section aria-labelledby="mab-story" style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
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
          Our story
        </p>
        <h2 id="mab-story" style={{ margin: "0", fontSize: "28px", lineHeight: "1.12", letterSpacing: "-0.02em", fontWeight: "700" }}>
          Technology hiring can't be solved through transactional recruitment alone
        </h2>
        <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.65", color: "#D3D9DB" }}>
          That's our founding belief. As AI reshapes industries, organisations need specialist expertise and trusted, long-term
          partnerships.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "16px", padding: "20px", borderRadius: "16px", background: "#262423" }}>
          <span style={{ fontSize: "40px", lineHeight: "1", letterSpacing: "-0.04em", fontWeight: "700" }}>2013</span>
          <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <span style={{ fontSize: "16px", lineHeight: "1.4", fontWeight: "700" }}>Celotti Group heritage since 2013</span>
          </span>
        </div>
      </section>
      <section aria-labelledby="mab-pot" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
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
            Our philosophy
          </p>
          <h2 id="mab-pot" style={{ margin: "0", fontSize: "30px", lineHeight: "1.1", fontWeight: "700" }}>
            Partnership over transactions
          </h2>
          <p style={{ margin: "0 0 6px", fontSize: "17px", lineHeight: "1.6", color: "#D3D9DB" }}>
            Our goal is to become an extension of a client's hiring and workforce strategy, not an external supplier.
          </p>
          <ul style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#DFE21B", color: "#201F1E" }}
              />
              Long-term thinking
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#DFE21B", color: "#201F1E" }}
              />
              Collaboration
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#DFE21B", color: "#201F1E" }}
              />
              Trust
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#DFE21B", color: "#201F1E" }}
              />
              Shared outcomes
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1px solid #3A3736",
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              <span
                aria-hidden="true"
                style={{ width: "8px", height: "8px", borderRadius: "999px", background: "#DFE21B", color: "#201F1E" }}
              />
              Sustainable growth
            </li>
          </ul>
        </div>
      </section>
      <section aria-labelledby="mab-tj" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "14px" }}>
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
            Full advisory scope
          </p>
          <h2 id="mab-tj" style={{ margin: "0 0 8px", fontSize: "30px", fontWeight: "700" }}>
            The talent journey
          </h2>
          <ol style={{ listStyle: "none", margin: "0", padding: "0", display: "flex", flexDirection: "column", gap: "8px" }}>
            <li
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "14px", background: "#383533" }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
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
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>ATTRACT</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Talent branding</span>
              </span>
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "14px", background: "#383533" }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
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
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>MAP</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Talent mapping</span>
              </span>
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "14px", background: "#383533" }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
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
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>SEARCH</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Talent search</span>
              </span>
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "14px", background: "#383533" }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
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
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>SECURE</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Talent negotiation</span>
              </span>
            </li>
            <li
              style={{ display: "flex", alignItems: "center", gap: "14px", padding: "14px", borderRadius: "14px", background: "#383533" }}
            >
              <span
                style={{
                  width: "40px",
                  height: "40px",
                  flexShrink: "0",
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
                5
              </span>
              <span style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#DFE21B" }}>RETAIN</span>
                <span style={{ fontSize: "15px", color: "#D3D9DB" }}>Talent retention advisory</span>
              </span>
            </li>
          </ol>
        </div>
      </section>
      <section aria-labelledby="mab-team" style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "16px" }}>
        <h2 id="mab-team" style={{ margin: "0 0 4px", fontSize: "30px", fontWeight: "700" }}>
          Leadership team
        </h2>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #3A3736" }}>
          <div
            style={{
              width: "104px",
              height: "128px",
              flexShrink: "0",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#34312F,#262423)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "0.02em",
              color: "#DFE21B",
            }}
            aria-hidden="true"
          >
            DK
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Dharshan Kumar</h3>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>{"Business Head, AI & Data"}</span>
            <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>Leads CTT's AI & Data practice, partnering with founders and technology leaders across APAC to build specialist teams through long-term, advisory-led engagements.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center", paddingBottom: "16px", borderBottom: "1px solid #3A3736" }}>
          <div
            style={{
              width: "104px",
              height: "128px",
              flexShrink: "0",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#34312F,#262423)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "0.02em",
              color: "#DFE21B",
            }}
            aria-hidden="true"
          >
            VP
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Veena Pujari</h3>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Talent Advisory</span>
            <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>Guides clients through market mapping, benchmarking and hiring strategy, so AI and data teams are planned with clarity before a search begins.</p>
          </div>
        </div>
        <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
          <div
            style={{
              width: "104px",
              height: "128px",
              flexShrink: "0",
              borderRadius: "14px",
              background: "linear-gradient(135deg,#34312F,#262423)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "32px",
              fontWeight: "700",
              letterSpacing: "0.02em",
              color: "#DFE21B",
            }}
            aria-hidden="true"
          >
            KR
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <h3 style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>Kavena Rama</h3>
            <span style={{ fontSize: "15px", fontWeight: "700", color: "#D3D9DB" }}>Talent Partner</span>
            <p style={{ margin: "0", fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>Works alongside clients and candidates from shortlisting to offer, helping AI, data and digital professionals find roles where they can grow and stay.</p>
          </div>
        </div>
      </section>
      <section aria-labelledby="mab-mem" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "56px 20px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <h2 id="mab-mem" style={{ margin: "0 0 8px", fontSize: "26px", fontWeight: "700" }}>
            Memberships and licences
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "44px",
                flexShrink: "0",
                background: "#FFFFFF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                boxSizing: "border-box",
              }}
            >
              <img src="/assets/logos/rcsa.jpg" alt="RCSA" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>RCSA Corporate Member</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "44px",
                flexShrink: "0",
                background: "#FFFFFF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                boxSizing: "border-box",
              }}
            >
              <img src="/assets/logos/apsco.png" alt="APSCo Southeast Asia" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>APSCo Southeast Asia</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "44px",
                flexShrink: "0",
                borderRadius: "8px",
                background: "#2F2C2B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: "700",
                color: "#DFE21B",
              }}
            >
              EA LICENCE
            </div>
            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>Employment Agency licence</span>
              <span style={{ fontSize: "13px", fontWeight: "700", color: "#D3D9DB" }}>Licence No. 26S3355 · UEN 202602927R</span>
            </span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "16px",
              borderRadius: "14px",
              background: "#201F1E",
              border: "1px solid #3A3736",
            }}
          >
            <div
              style={{
                width: "96px",
                height: "44px",
                flexShrink: "0",
                background: "#FFFFFF",
                borderRadius: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "6px 10px",
                boxSizing: "border-box",
              }}
            >
              <img src="/assets/logos/weconnect-international.jpg" alt="WEConnect International" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
            </div>
            <span style={{ fontSize: "16px", fontWeight: "700" }}>WEConnect International</span>
          </div>
        </div>
      </section>
      <section aria-labelledby="mab-cta" style={{ padding: "56px 16px" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            padding: "88px 22px 32px",
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
              height: "70px",
              background: "#DFE21B",
              transform: "skewX(-24deg)",
              color: "#201F1E",
            }}
          />
          <p style={{ margin: "0", fontSize: "14px", color: "#D3D9DB" }}>JustCo, The Metropolis, Singapore</p>
          <h2 id="mab-cta" style={{ margin: "0", fontSize: "28px", lineHeight: "1.12", fontWeight: "700" }}>
            Interested in partnering with CTT? Let's talk.
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
            Get in touch
          </Link>
        </div>
      </section>
    </main>
  );
}
