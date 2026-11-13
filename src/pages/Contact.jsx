import { Link } from "react-router-dom";

// Contact: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      {/* S1 HERO */}
      <section aria-labelledby="ct-h1" style={{ background: "#201F1E" }} className="ax-glow">
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "80px clamp(20px, 3.5vw, 32px) 64px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
            alignItems: "flex-start",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Book a consultation
            </span>
          </nav>
          <h1
            id="ct-h1"
            style={{
              margin: "0",
              maxWidth: "960px",
              fontSize: "clamp(42px, 5vw, 72px)",
              lineHeight: "1.03",
              letterSpacing: "-0.03em",
              fontWeight: "700",
            }}
          >
            {"Let's build stronger AI and Data capability "}
            <span>together</span>
          </h1>
          <p
            style={{
              margin: "0",
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              gap: "10px",
              fontSize: "20px",
              lineHeight: "1.55",
              color: "#D3D9DB",
            }}
          >
            {"Book a 30-minute consultation, or send us a message. "}
            <span
              style={{
                padding: "3px 8px",
                border: "1.5px dashed #60554F",
                borderRadius: "6px",
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "0.05em",
                color: "#C1C3C2",
              }}
            >
              CONFIRM LENGTH
            </span>
          </p>
        </div>
      </section>
      {/* S2 BOOKING + S3 ENQUIRY */}
      <section aria-label="Book or enquire" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "0 clamp(20px, 3.5vw, 32px) 112px",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* S2 Booking */}
          <div
            style={{
              flex: "1 1 520px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              padding: "40px",
              borderRadius: "24px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                Option 1
              </p>
              <h2 style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
                Book a consultation
              </h2>
              <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>Pick a time that suits you.</p>
            </div>
            <div
              style={{
                flexGrow: "1",
                minHeight: "560px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                padding: "32px",
                border: "1.5px dashed #60554F",
                borderRadius: "16px",
                background: "#383533",
                textAlign: "center",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "16px",
                  background: "#DFE21B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#201F1E",
                }}
              >
                <svg
                  fill="none"
                  height="30"
                  stroke="#201F1E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  viewBox="0 0 24 24"
                  width="30"
                >
                  <rect height="17" rx="2" width="18" x="3" y="4" />
                  <path d="M3 9h18M8 2v4M16 2v4" />
                  <path d="M8 14h2M14 14h2M8 17h2" />
                </svg>
              </span>
              <span style={{ fontSize: "18px", fontWeight: "700" }}>Calendly booking embed</span>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.06em", color: "#C1C3C2" }}>
                LINK AND CALENDAR OWNER · CLIENT TO PROVIDE
              </span>
            </div>
          </div>
          {/* S3 Enquiry form */}
          <form
            aria-labelledby="enq-h"
            id="enquiry"
            style={{
              flex: "1 1 520px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
              padding: "40px",
              borderRadius: "24px",
              background: "#262423",
              border: "1px solid #3A3736",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
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
                Option 2
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", justifyContent: "space-between", gap: "12px" }}>
                <h2 id="enq-h" style={{ margin: "0", fontSize: "32px", lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "700" }}>
                  Send an enquiry
                </h2>
                <span style={{ fontSize: "14px", color: "#C1C3C2" }}>
                  <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                    *
                  </span>
                  {" Required"}
                </span>
              </div>
            </div>
            <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
              <legend style={{ padding: "0", marginBottom: "10px", fontSize: "15px", fontWeight: "700" }}>
                I'm getting in touch about
              </legend>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
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
                  <input
                    defaultChecked
                    name="etype"
                    style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }}
                    type="radio"
                  />
                  Building a team
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input name="etype" style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="radio" />
                  Partnering with CTT
                </label>
                <label
                  className="chip"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    minHeight: "44px",
                    padding: "0 16px",
                    borderRadius: "999px",
                    border: "1.5px solid #8A8380",
                    background: "#201F1E",
                    fontSize: "15px",
                    fontWeight: "700",
                  }}
                >
                  <input name="etype" style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="radio" />
                  Something else
                </label>
              </div>
            </fieldset>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(220px, 100%), 1fr))", gap: "18px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                <label htmlFor="c-nm" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Name "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="name"
                  className="fld"
                  id="c-nm"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="c-em" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Work email "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="email"
                  className="fld"
                  id="c-em"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="c-co" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Company "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="organization"
                  className="fld"
                  id="c-co"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
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
                <label htmlFor="c-ro" style={{ fontSize: "15px", fontWeight: "700" }}>
                  {"Your role "}
                  <span aria-hidden="true">*</span>
                </label>
                <input
                  autoComplete="organization-title"
                  className="fld"
                  id="c-ro"
                  required
                  style={{
                    height: "52px",
                    padding: "0 16px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                  }}
                  type="text"
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="c-ar" style={{ fontSize: "15px", fontWeight: "700" }}>
                Area of hiring need
              </label>
              <div style={{ position: "relative" }}>
                <select
                  className="fld"
                  id="c-ar"
                  style={{
                    width: "100%",
                    height: "52px",
                    padding: "0 44px 0 16px",
                    border: "1.5px solid #8A8380",
                    borderRadius: "10px",
                    font: "inherit",
                    fontSize: "16px",
                    background: "#201F1E",
                    color: "#FFFFFF",
                    appearance: "none",
                  }}
                >
                  <option>Select an area</option>
                  <option>AI</option>
                  <option>Data</option>
                  <option>Deep Tech</option>
                  <option>Robotics</option>
                  <option>Other</option>
                </select>
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="18"
                  stroke="#FFFFFF"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  style={{ position: "absolute", right: "16px", top: "17px", pointerEvents: "none" }}
                  viewBox="0 0 24 24"
                  width="18"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              <label htmlFor="c-ms" style={{ fontSize: "15px", fontWeight: "700" }}>
                {"Message "}
                <span aria-hidden="true">*</span>
              </label>
              <textarea
                className="fld"
                id="c-ms"
                placeholder="Tell us about the roles you're hiring for"
                required
                rows="5"
                style={{
                  padding: "14px 16px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  lineHeight: "1.5",
                  background: "#201F1E",
                  resize: "vertical",
                }}
              />
            </div>
            <label className="consent" htmlFor="c-cs" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <input
                id="c-cs"
                required
                style={{ width: "22px", height: "22px", margin: "1px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
                type="checkbox"
              />
              <span style={{ fontSize: "15px", lineHeight: "1.55", color: "#D3D9DB" }}>
                {"I agree to Celotti Tech Talent using these details to respond to my enquiry, in line with the "}
                <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  Privacy Policy
                </Link>
                {". "}
                <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                  *
                </span>
              </span>
            </label>
            <button
              className="btn btn-dark"
              style={{
                alignSelf: "flex-start",
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
              Send enquiry
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
      {/* S4 OTHER ROUTES + S5 OFFICE */}
      <section aria-label="Other routes and office" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "96px clamp(20px, 3.5vw, 32px) 112px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(380px, 100%), 1fr))",
            gap: "20px",
          }}
        >
          <Link
            className="card"
            to="/join"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "32px",
              borderRadius: "20px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              For talent
            </span>
            <span style={{ fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Looking for a role?</span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "16px", fontWeight: "700" }}
            >
              Join the talent community
              <svg
                aria-hidden="true"
                className="arr"
                fill="none"
                height="18"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
                style={{ transition: "transform .18s ease" }}
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </Link>
          <a
            className="card"
            href="#enquiry"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "32px",
              borderRadius: "20px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              For partners
            </span>
            <span style={{ fontSize: "26px", lineHeight: "1.2", fontWeight: "700" }}>Interested in partnering with CTT? Let's talk.</span>
            <span
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "auto", fontSize: "16px", fontWeight: "700" }}
            >
              Send a partner enquiry
              <svg
                aria-hidden="true"
                className="arr"
                fill="none"
                height="18"
                stroke="#FFFFFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.25"
                style={{ transition: "transform .18s ease" }}
                viewBox="0 0 24 24"
                width="18"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </a>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              padding: "32px",
              borderRadius: "20px",
              background: "#2F2C2B",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "14px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
              Office
            </span>
            <address style={{ fontStyle: "normal", fontSize: "18px", lineHeight: "1.55" }}>
              JustCo, The Metropolis
              <br />
              9 North Buona Vista Drive, #02-01
              <br />
              Singapore 138588
            </address>
            <a
              href="mailto:advisory@celottitechtalent.com"
              style={{
                fontSize: "17px",
                fontWeight: "700",
                color: "#FFFFFF",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "2px",
                textUnderlineOffset: "5px",
              }}
            >
              advisory@celottitechtalent.com
            </a>
            <div
              style={{
                height: "120px",
                marginTop: "8px",
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
    </main>
  );
}

// Contact: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <section aria-labelledby="mc-h1" style={{ background: "#201F1E" }} className="ax-glow">
        <div style={{ padding: "40px 20px 32px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Book a consultation
            </span>
          </nav>
          <h1 id="mc-h1" style={{ margin: "0", fontSize: "38px", lineHeight: "1.06", letterSpacing: "-0.03em", fontWeight: "700" }}>
            {"Let's build stronger AI and Data capability "}
            <span>together</span>
          </h1>
          <p style={{ margin: "0", fontSize: "17px", lineHeight: "1.55", color: "#D3D9DB" }}>
            Book a 30-minute consultation, or send us a message.
          </p>
          <span
            style={{
              alignSelf: "flex-start",
              padding: "3px 7px",
              border: "1.5px dashed #60554F",
              borderRadius: "6px",
              fontSize: "10px",
              fontWeight: "700",
              color: "#C1C3C2",
            }}
          >
            CONFIRM LENGTH
          </span>
        </div>
      </section>
      <section aria-label="Book" style={{ padding: "0 12px 12px" }}>
        <div
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
            Option 1
          </p>
          <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700" }}>Book a consultation</h2>
          <div
            style={{
              minHeight: "420px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              padding: "20px",
              border: "1.5px dashed #60554F",
              borderRadius: "14px",
              background: "#383533",
              textAlign: "center",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "14px",
                background: "#DFE21B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#201F1E",
              }}
            >
              <svg
                fill="none"
                height="26"
                stroke="#201F1E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.8"
                viewBox="0 0 24 24"
                width="26"
              >
                <rect height="17" rx="2" width="18" x="3" y="4" />
                <path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
            </span>
            <span style={{ fontSize: "17px", fontWeight: "700" }}>Calendly booking embed</span>
            <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", color: "#C1C3C2" }}>
              LINK AND OWNER · CLIENT TO PROVIDE
            </span>
          </div>
        </div>
      </section>
      <section aria-label="Enquiry" style={{ padding: "0 12px 64px" }}>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            padding: "24px 18px",
            borderRadius: "20px",
            background: "#262423",
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
            Option 2
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <h2 style={{ margin: "0", fontSize: "26px", fontWeight: "700" }}>Send an enquiry</h2>
            <span style={{ fontSize: "14px", color: "#C1C3C2" }}>
              <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                *
              </span>
              {" Required"}
            </span>
          </div>
          <fieldset style={{ margin: "0", padding: "0", border: "0" }}>
            <legend style={{ padding: "0", marginBottom: "10px", fontSize: "15px", fontWeight: "700" }}>I'm getting in touch about</legend>
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
                <input
                  defaultChecked
                  name="metype"
                  style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }}
                  type="radio"
                />
                Building a team
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
                  background: "#201F1E",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input name="metype" style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="radio" />
                Partnering with CTT
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
                  background: "#201F1E",
                  fontSize: "14px",
                  fontWeight: "700",
                }}
              >
                <input name="metype" style={{ width: "18px", height: "18px", margin: "0", accentColor: "#DFE21B" }} type="radio" />
                Something else
              </label>
            </div>
          </fieldset>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mc-nm" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Name "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mc-nm"
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
            <label htmlFor="mc-em" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Work email "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mc-em"
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
            <label htmlFor="mc-co" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Company "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mc-co"
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
            <label htmlFor="mc-ro" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Your role "}
              <span aria-hidden="true">*</span>
            </label>
            <input
              id="mc-ro"
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
            <label htmlFor="mc-ar" style={{ fontSize: "15px", fontWeight: "700" }}>
              Area of hiring need
            </label>
            <div style={{ position: "relative" }}>
              <select
                id="mc-ar"
                style={{
                  width: "100%",
                  height: "52px",
                  padding: "0 44px 0 14px",
                  border: "1.5px solid #8A8380",
                  borderRadius: "10px",
                  font: "inherit",
                  fontSize: "16px",
                  background: "#201F1E",
                  color: "#FFFFFF",
                  appearance: "none",
                }}
              >
                <option>Select an area</option>
                <option>AI</option>
                <option>Data</option>
                <option>Deep Tech</option>
                <option>Robotics</option>
                <option>Other</option>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label htmlFor="mc-ms" style={{ fontSize: "15px", fontWeight: "700" }}>
              {"Message "}
              <span aria-hidden="true">*</span>
            </label>
            <textarea
              id="mc-ms"
              required
              rows="5"
              style={{
                padding: "12px 14px",
                border: "1.5px solid #8A8380",
                borderRadius: "10px",
                font: "inherit",
                fontSize: "16px",
                background: "#201F1E",
              }}
            />
          </div>
          <label className="consent" htmlFor="mc-cs" style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
            <input
              id="mc-cs"
              required
              style={{ width: "22px", height: "22px", margin: "1px 0 0", flexShrink: "0", accentColor: "#DFE21B" }}
              type="checkbox"
            />
            <span style={{ fontSize: "14px", lineHeight: "1.55", color: "#D3D9DB" }}>
              {"I agree to Celotti Tech Talent using these details to respond to my enquiry, in line with the "}
              <Link to="/privacy-policy" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                Privacy Policy
              </Link>
              {". "}
              <span aria-hidden="true" style={{ color: "#FFFFFF", fontWeight: "700" }}>
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
            Send enquiry
          </button>
        </form>
      </section>
      <section aria-label="Other routes and office" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "56px 20px 64px", display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link
            to="/join"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              For talent
            </span>
            <span style={{ fontSize: "21px", fontWeight: "700" }}>Looking for a role?</span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "5px",
              }}
            >
              Join the talent community
            </span>
          </Link>
          <a
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              padding: "22px",
              borderRadius: "16px",
              background: "#201F1E",
              border: "1px solid #3A3736",
              textDecoration: "none",
              color: "#FFFFFF",
            }}
          >
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#D3D9DB" }}>
              For partners
            </span>
            <span style={{ fontSize: "21px", lineHeight: "1.25", fontWeight: "700" }}>Interested in partnering with CTT? Let's talk.</span>
            <span
              style={{
                fontSize: "15px",
                fontWeight: "700",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "5px",
              }}
            >
              Send a partner enquiry
            </span>
          </a>
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
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
              Office
            </span>
            <address style={{ fontStyle: "normal", fontSize: "16px", lineHeight: "1.55" }}>
              JustCo, The Metropolis
              <br />
              9 North Buona Vista Drive, #02-01
              <br />
              Singapore 138588
            </address>
            <a href="mailto:advisory@celottitechtalent.com" style={{ fontSize: "16px", fontWeight: "700", color: "#FFFFFF" }}>
              advisory@celottitechtalent.com
            </a>
            <div
              style={{
                height: "96px",
                border: "1.5px dashed #60554F",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "10px",
                fontWeight: "700",
                color: "#C1C3C2",
              }}
            >
              MAP EMBED · OPTIONAL
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
