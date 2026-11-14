import { NavLink } from "react-router-dom";

export default function FooterMobile() {
  return (
    <>
      <section aria-labelledby="m-cred-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }}>
        <div style={{ padding: "40px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          <h2 id="m-cred-h" style={{ margin: "0", fontSize: "22px", fontWeight: "700" }}>
            Credentials
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "12px" }}>
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
        <div style={{ padding: "56px 20px 32px", display: "flex", flexDirection: "column", gap: "36px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <img
              alt="Celotti Tech Talent"
              src="/assets/ctt-logo-reversed.svg"
              style={{ height: "44px", width: "auto", alignSelf: "flex-start" }}
            />
            <p style={{ margin: "0", fontSize: "19px", lineHeight: "1.35", fontWeight: "700" }}>
              Talent Partner to Build the AI-Powered World.
            </p>
            <p style={{ margin: "0", fontSize: "15px", lineHeight: "1.5", color: "#C1C3C2" }}>
              Australian-backed, based in Singapore, partnering across APAC and the US.
            </p>
            <NavLink
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
                marginTop: "4px",
              }}
              className="hide-on-contact"
            >
              Book a consultation
            </NavLink>
          </div>
          <nav
            aria-label="Footer"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
              gap: "32px 20px",
              paddingTop: "32px",
              borderTop: "1px solid #4A4644",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                Specialisms
              </span>
              <NavLink to="/specialisms/ai" style={{ color: "#E4E7E8" }}>
                AI Talent
              </NavLink>
              <NavLink to="/specialisms/data" style={{ color: "#E4E7E8" }}>
                Data Talent
              </NavLink>
              <NavLink to="/specialisms/deep-tech" style={{ color: "#E4E7E8" }}>
                Deep Tech Talent
              </NavLink>
              <NavLink to="/specialisms/robotics" style={{ color: "#E4E7E8" }}>
                Robotics Talent
              </NavLink>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
                For Talent
              </span>
              <NavLink to="/open-roles" style={{ color: "#E4E7E8" }}>
                Open Roles
              </NavLink>
              <NavLink to="/join" style={{ color: "#E4E7E8" }}>
                Join the Talent Community
              </NavLink>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "15px" }}>
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#DFE21B" }}>
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
          <div style={{ display: "flex", flexDirection: "column", gap: "24px", paddingTop: "32px", borderTop: "1px solid #4A4644" }}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px", fontSize: "15px", lineHeight: "1.55", color: "#C1C3C2" }}
              className="hide-on-contact"
            >
              <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#FFFFFF" }}>
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
            <div style={{ display: "flex", flexDirection: "column", gap: "10px", fontSize: "15px" }}>
              <a href="#" style={{ color: "#E4E7E8" }}>
                LinkedIn ↗
              </a>
              <a href="#" style={{ color: "#E4E7E8" }}>
                Part of Celotti Group ↗
              </a>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              fontSize: "14px",
              color: "#C1C3C2",
              paddingTop: "20px",
              borderTop: "1px solid #4A4644",
            }}
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
