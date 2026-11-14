import { NavLink } from "react-router-dom";

export default function FooterDesktop() {
  return (
    <>
      <section aria-labelledby="cred-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "56px clamp(20px, 3.5vw, 32px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <h2 id="cred-h" style={{ margin: "0", fontSize: "26px", fontWeight: "700" }}>
            Credentials
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(240px, 100%), 1fr))", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                UEN
              </span>
              <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.02em", color: "#FFFFFF" }}>
                202602927R
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                EA Licence No.
              </span>
              <span style={{ fontSize: "20px", fontWeight: "700", letterSpacing: "0.02em", color: "#FFFFFF" }}>
                26S3355
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                RCSA Corporate Member
              </span>
              <div
                style={{
                  height: "48px",
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 12px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/rcsa.jpg" alt="RCSA" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                padding: "20px",
                borderRadius: "14px",
                background: "#201F1E",
                border: "1px solid #3A3736",
              }}
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                APSCo Southeast Asia
              </span>
              <div
                style={{
                  height: "48px",
                  background: "#FFFFFF",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 12px",
                  boxSizing: "border-box",
                }}
              >
                <img src="/assets/logos/apsco.png" alt="APSCo Southeast Asia" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="foot" style={{ background: "#2F2C2B", color: "#FFFFFF" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: "88px clamp(20px, 3.5vw, 32px) 40px",
            display: "flex",
            flexDirection: "column",
            gap: "56px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "32px",
              paddingBottom: "48px",
              borderBottom: "1px solid #4A4644",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "520px" }}>
              <img
                alt="Celotti Tech Talent"
                src="/assets/ctt-logo-reversed.svg"
                style={{ height: "52px", width: "auto", alignSelf: "flex-start" }}
              />
              <p style={{ margin: "0", fontSize: "22px", lineHeight: "1.35", fontWeight: "700" }}>
                Talent Partner to Build the AI-Powered World.
              </p>
              <p style={{ margin: "0", fontSize: "16px", lineHeight: "1.5", color: "#C1C3C2" }}>
                Australian-backed, based in Singapore, partnering across APAC and the US.
              </p>
            </div>
            <NavLink
              className="btn btn-yellow"
              to="/contact"
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
            </NavLink>
          </div>
          <nav
            aria-label="Footer"
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(180px, 100%), 1fr))", gap: "40px 32px" }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                Specialisms
              </span>
              <NavLink to="/specialisms/ai" style={{ color: "#E4E7E8" }}>
                AI Talent
              </NavLink>
              <a href="#" style={{ color: "#E4E7E8" }}>
                Data Talent
              </a>
              <a href="#" style={{ color: "#E4E7E8" }}>
                Deep Tech Talent
              </a>
              <a href="#" style={{ color: "#E4E7E8" }}>
                Robotics Talent
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                Talent as a Service
              </span>
              <NavLink to="/talent-as-a-service" style={{ color: "#E4E7E8" }}>
                Fixed Fee Partnership
              </NavLink>
              <NavLink to="/talent-as-a-service" style={{ color: "#E4E7E8" }}>
                Fixed Fee Search Partnership
              </NavLink>
              <NavLink to="/talent-as-a-service" style={{ color: "#E4E7E8" }}>
                Exclusive Search Partnership
              </NavLink>
              <NavLink to="/talent-as-a-service" style={{ color: "#E4E7E8" }}>
                Retained Search Partnership
              </NavLink>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                Markets
              </span>
              <NavLink to="/singapore" style={{ color: "#E4E7E8" }} className="ft-current">
                Singapore
              </NavLink>
              <NavLink to="/australia" style={{ color: "#E4E7E8" }} className="ft-current">
                Australia
              </NavLink>
              <NavLink to="/united-states" style={{ color: "#E4E7E8" }} className="ft-current">
                United States
              </NavLink>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                For Talent
              </span>
              <NavLink to="/open-roles" style={{ color: "#E4E7E8" }}>
                Open Roles
              </NavLink>
              <NavLink to="/join" style={{ color: "#E4E7E8" }}>
                Join the Talent Community
              </NavLink>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "15px" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                Company
              </span>
              <NavLink to="/about" style={{ color: "#E4E7E8" }}>
                About
              </NavLink>
              <NavLink to="/how-we-work" style={{ color: "#E4E7E8" }}>
                How We Work
              </NavLink>
              <NavLink to="/case-studies" style={{ color: "#E4E7E8" }}>
                Case Studies
              </NavLink>
              <NavLink to="/insights" style={{ color: "#E4E7E8" }}>
                Insights
              </NavLink>
              <NavLink to="/contact" style={{ color: "#E4E7E8" }}>
                Contact
              </NavLink>
            </div>
          </nav>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
              gap: "32px",
              paddingTop: "40px",
              borderTop: "1px solid #4A4644",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C1C3C2" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF" }}>
                Office
              </span>
              <address style={{ fontStyle: "normal" }}>
                JustCo, The Metropolis
                <br />
                9 North Buona Vista Drive, #02-01
                <br />
                Singapore 138588
              </address>
              <a href="mailto:advisory@celottitechtalent.com" style={{ color: "#FFFFFF", fontWeight: "700" }}>
                advisory@celottitechtalent.com
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px", color: "#C1C3C2" }}>
              <span style={{ fontSize: "13px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF" }}>
                Connect
              </span>
              <a href="#" style={{ color: "#E4E7E8" }}>
                LinkedIn ↗
              </a>
              <a href="#" style={{ color: "#E4E7E8" }}>
                Part of Celotti Group ↗
              </a>
            </div>
          </div>
          <div
            style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "12px", fontSize: "14px", color: "#C1C3C2" }}
          >
            <span>© 2026 Celotti Tech Talent (Singapore) Pte. Ltd.</span>
            <NavLink to="/privacy-policy" style={{ color: "#C1C3C2" }} className="ft-current">
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </footer>
    </>
  );
}
