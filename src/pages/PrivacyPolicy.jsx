import { Link } from "react-router-dom";

// PrivacyPolicy: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      <section aria-labelledby="pp-h1" style={{ background: "#262423", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "72px clamp(20px, 3.5vw, 32px) 56px",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Privacy Policy
            </span>
          </nav>
          <h1
            id="pp-h1"
            style={{ margin: "0", fontSize: "clamp(44px, 5vw, 72px)", lineHeight: "1.02", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            Privacy Policy
          </h1>
          <p
            style={{
              margin: "0",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px",
              fontSize: "17px",
              color: "#D3D9DB",
            }}
          >
            {"Effective date: "}
            <span
              style={{
                padding: "3px 8px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "12px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              CLIENT TO PROVIDE
            </span>
          </p>
        </div>
      </section>
      <section aria-label="Policy content" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px) 112px",
            display: "flex",
            flexWrap: "wrap",
            gap: "64px",
            alignItems: "flex-start",
          }}
        >
          <nav
            aria-label="On this page"
            className="toc"
            style={{
              flex: "1 1 280px",
              position: "sticky",
              top: "104px",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
              padding: "20px",
              borderRadius: "16px",
              border: "1px solid #3A3736",
            }}
          >
            <span
              style={{
                padding: "0 12px 8px",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#C1C3C2",
              }}
            >
              On this page
            </span>
            <a
              href="#p1"
              style={{
                padding: "10px 12px",
                borderRadius: "10px",
                background: "#34312F",
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "none",
                boxShadow: "inset 3px 0 0 #DFE21B",
              }}
            >
              1. Information we collect
            </a>
            <a href="#p2" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              2. Storage and management
            </a>
            <a href="#p3" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              3. Sharing during recruitment
            </a>
            <a href="#p4" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              4. Data retention
            </a>
            <a href="#p5" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              5. Updating or removing your information
            </a>
            <a href="#p6" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              6. Cookies and analytics
            </a>
            <a href="#p7" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              7. Applicable data protection law
            </a>
            <a href="#p8" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              8. Updates to this policy
            </a>
            <a href="#p9" style={{ padding: "10px 12px", borderRadius: "10px", fontSize: "15px", textDecoration: "none" }}>
              9. Privacy enquiries
            </a>
          </nav>
          <div style={{ flex: "999 1 640px", minWidth: "0", maxWidth: "780px", display: "flex", flexDirection: "column", gap: "48px" }}>
            <div
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "20px 24px",
                borderRadius: "14px",
                background: "#2F2C2B",
                color: "#FFFFFF",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "10px",
                  height: "10px",
                  marginTop: "7px",
                  flexShrink: "0",
                  background: "#DFE21B",
                  transform: "skewX(-20deg)",
                  color: "#201F1E",
                }}
              />
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#E4E7E8" }}>
                Full wording to be provided and approved by Celotti Tech Talent as the organisation responsible for the data. Layout shown
                with section headings only.
              </span>
            </div>
            <section id="p1" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>1. What information we collect</h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p2" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>
                2. How information is stored and managed
              </h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p3" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>
                3. How information may be shared during recruitment processes
              </h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p4" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>4. How candidate data is retained</h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p5" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>
                5. How you can update or remove your information
              </h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p6" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>6. Cookies and analytics</h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE (INCLUDES GA4)
              </div>
            </section>
            <section id="p7" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>7. Applicable data protection law</h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE (SINGAPORE AND OTHER MARKETS SERVED)
              </div>
            </section>
            <section id="p8" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>8. Effective date and updates</h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                WORDING · CLIENT TO PROVIDE
              </div>
            </section>
            <section id="p9" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>
                9. Contact details for privacy enquiries
              </h2>
              <div
                style={{
                  padding: "20px",
                  border: "1.5px dashed #60554F",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "700",
                  letterSpacing: "0.05em",
                  color: "#C1C3C2",
                }}
              >
                CONTACT DETAILS · CLIENT TO PROVIDE
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}

// PrivacyPolicy: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mpp-h1" style={{ background: "#262423", borderBottom: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "36px 20px 32px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Privacy Policy
            </span>
          </nav>
          <h1 id="mpp-h1" style={{ margin: "0", fontSize: "40px", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}>
            Privacy Policy
          </h1>
          <p
            style={{ margin: "0", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "8px", fontSize: "15px", color: "#D3D9DB" }}
          >
            {"Effective date: "}
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
          </p>
        </div>
      </section>
      <section aria-label="Policy content" style={{ padding: "24px 20px 56px", display: "flex", flexDirection: "column", gap: "28px" }}>
        <details style={{ borderRadius: "14px", border: "1px solid #3A3736" }}>
          <summary
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "52px",
              padding: "0 16px",
              fontSize: "15px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            On this page
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
          </summary>
        </details>
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "flex-start",
            padding: "16px 18px",
            borderRadius: "12px",
            background: "#2F2C2B",
            color: "#E4E7E8",
            fontSize: "14px",
            lineHeight: "1.55",
          }}
        >
          <span
            aria-hidden="true"
            style={{
              width: "9px",
              height: "9px",
              marginTop: "6px",
              flexShrink: "0",
              background: "#DFE21B",
              transform: "skewX(-20deg)",
              color: "#201F1E",
            }}
          />
          Full wording to be provided and approved by Celotti Tech Talent.
        </div>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>1. What information we collect</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>2. How information is stored and managed</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>
            3. How information may be shared during recruitment processes
          </h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>4. How candidate data is retained</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>
            5. How you can update or remove your information
          </h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>6. Cookies and analytics</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>7. Applicable data protection law</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>8. Effective date and updates</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            WORDING · CLIENT TO PROVIDE
          </div>
        </section>
        <section style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>9. Contact details for privacy enquiries</h2>
          <div
            style={{
              padding: "16px",
              border: "1.5px dashed #60554F",
              borderRadius: "10px",
              fontSize: "11px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            CONTACT DETAILS · CLIENT TO PROVIDE
          </div>
        </section>
      </section>
    </main>
  );
}
