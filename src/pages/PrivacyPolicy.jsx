import { Link } from "react-router-dom";

const EFFECTIVE_DATE = "1 November 2026";
const DPO_EMAIL = "advisory@celottitechtalent.com";

const linkStyle = { color: "#FFFFFF", fontWeight: "700", textDecoration: "underline", textDecorationColor: "#DFE21B", textUnderlineOffset: "3px" };
const listStyle = { margin: "0", paddingLeft: "22px", display: "flex", flexDirection: "column", gap: "8px" };

const INTRO = (
  <>
    This Privacy Policy explains how CELOTTI Tech Talent (Singapore) Pte. Ltd. (UEN 202602927R, EA Licence No. 26S3355), part of the
    Celotti Group ("CTT", "we", "us"), collects, uses, discloses and protects personal data when you use this website, register with
    our talent community, apply for a role or work with us as a client. By providing your personal data to us, you consent to it being
    handled as described in this policy.
  </>
);

// Policy sections, shared by the desktop and mobile layouts.
const SECTIONS = [
  {
    id: "p1",
    title: "1. What information we collect",
    body: (
      <>
        <p style={{ margin: "0" }}>Depending on how you interact with us, we may collect:</p>
        <ul style={listStyle}>
          <li>Identity and contact details, such as your name, email address, phone number, location and LinkedIn profile.</li>
          <li>
            Professional information, such as your CV, employment history, qualifications, skills, current and expected remuneration,
            notice period, work preferences and right-to-work status.
          </li>
          <li>Information from interviews, assessments and reference checks carried out with your knowledge.</li>
          <li>
            Information from publicly available professional sources, such as LinkedIn or industry networks, and from people who refer you
            to us.
          </li>
          <li>Business contact details of client representatives who enquire about or use our services.</li>
          <li>Technical and usage information collected through cookies and analytics when you visit this website (see section 6).</li>
        </ul>
        <p style={{ margin: "0" }}>
          We use this information to match you with suitable opportunities, manage recruitment processes, deliver our talent advisory and
          search services, keep you informed about relevant roles and insights (you can opt out at any time), meet our legal and
          regulatory obligations, and improve this website. We do not ask for sensitive personal data unless it is required for a specific
          role or by law, and only with your consent.
        </p>
      </>
    ),
  },
  {
    id: "p2",
    title: "2. How information is stored and managed",
    body: (
      <>
        <p style={{ margin: "0" }}>
          Your information is stored in secure, cloud-based recruitment (CRM) and business systems operated by reputable service providers.
          We protect it with reasonable security arrangements, including access controls, encryption in transit, and limiting access to
          team members who need it to do their work and who are bound by confidentiality obligations.
        </p>
        <p style={{ margin: "0" }}>
          Some of our service providers, and other Celotti Group companies, may store or process data outside Singapore, including in
          Australia. Where personal data is transferred overseas, we take steps to ensure it receives a standard of protection comparable to
          that required under Singapore's Personal Data Protection Act 2012 (PDPA).
        </p>
      </>
    ),
  },
  {
    id: "p3",
    title: "3. How information may be shared during recruitment processes",
    body: (
      <>
        <p style={{ margin: "0" }}>We only share your personal data where it is needed for the purposes described in this policy:</p>
        <ul style={listStyle}>
          <li>
            With prospective employers, but only after we have discussed a specific role with you and you have agreed to be put forward.
          </li>
          <li>With referees you have nominated, to obtain references.</li>
          <li>With other Celotti Group companies, for administration and to identify relevant opportunities.</li>
          <li>
            With service providers who support our business, such as hosting, CRM, communications and, with your consent, background or
            qualification checks. They may only use the data to provide services to us.
          </li>
          <li>Where required or permitted by law, or to respond to lawful requests from government or regulatory authorities.</li>
        </ul>
        <p style={{ margin: "0" }}>We never sell your personal data.</p>
      </>
    ),
  },
  {
    id: "p4",
    title: "4. How candidate data is retained",
    body: (
      <>
        <p style={{ margin: "0" }}>
          We keep candidate information for as long as it is needed for recruitment purposes, including so that we can contact you about
          future opportunities while you remain part of our talent community, and for as long as we must keep it to meet legal, regulatory
          and record-keeping obligations, including those under Singapore's Employment Agencies Act.
        </p>
        <p style={{ margin: "0" }}>
          We review our records regularly. When personal data is no longer needed for these purposes, we securely delete it or anonymise
          it so that it can no longer identify you.
        </p>
      </>
    ),
  },
  {
    id: "p5",
    title: "5. How you can update or remove your information",
    body: (
      <>
        <p style={{ margin: "0" }}>
          You may at any time ask to access the personal data we hold about you, ask us to correct or update it, withdraw your consent to
          our use of it, or ask us to delete it. You can also unsubscribe from our emails using the link in any message.
        </p>
        <p style={{ margin: "0" }}>
          To make a request, contact our Data Protection Officer (see section 9). We may need to verify your identity before acting on a
          request, and we aim to respond within 30 days. If you withdraw consent, we may no longer be able to put you forward for roles, and
          we may still keep limited information where the law requires us to.
        </p>
      </>
    ),
  },
  {
    id: "p6",
    title: "6. Cookies and analytics",
    body: (
      <>
        <p style={{ margin: "0" }}>
          This website uses Google Analytics 4 (GA4), provided by Google, to understand how visitors use the site so we can improve it.
          GA4 uses cookies (such as <code>_ga</code> and <code>_ga_*</code>) to collect information such as the pages you visit, how long
          you stay, the device and browser you use, how you arrived at the site and your approximate location. GA4 does not log or store
          full IP addresses, and we do not use analytics data to identify you personally. These cookies can last for up to two years.
        </p>
        <p style={{ margin: "0" }}>
          The site may also store a small number of functional settings in your browser so that it works as expected. You can block or
          delete cookies through your browser settings, or opt out of Google Analytics using the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="noopener noreferrer" target="_blank" style={linkStyle}>
            Google Analytics opt-out browser add-on
          </a>
          . Blocking cookies will not stop you from using this website.
        </p>
      </>
    ),
  },
  {
    id: "p7",
    title: "7. Applicable data protection law",
    body: (
      <>
        <p style={{ margin: "0" }}>
          As a Singapore company, we handle personal data in accordance with the Personal Data Protection Act 2012 (PDPA). As part of an
          Australian-founded group, we also handle the personal information of individuals in Australia in accordance with the Privacy Act
          1988 (Cth) and the Australian Privacy Principles. Where we recruit in other APAC markets, we also comply with the local data
          protection laws that apply.
        </p>
        <p style={{ margin: "0" }}>
          If you have a concern, please contact us first so we can try to resolve it. You may also contact the Personal Data Protection
          Commission in Singapore or, for individuals in Australia, the Office of the Australian Information Commissioner.
        </p>
      </>
    ),
  },
  {
    id: "p8",
    title: "8. Effective date and updates",
    body: (
      <p style={{ margin: "0" }}>
        This policy is effective from {EFFECTIVE_DATE}. We may update it from time to time to reflect changes in our services or in the law.
        The current version will always be published on this page with its effective date, and where changes are significant we will
        take reasonable steps to let you know.
      </p>
    ),
  },
  {
    id: "p9",
    title: "9. Contact details for privacy enquiries",
    body: (
      <>
        <p style={{ margin: "0" }}>For any question, request or complaint about how we handle personal data, please contact:</p>
        <address style={{ fontStyle: "normal", display: "flex", flexDirection: "column", gap: "4px" }}>
          <strong style={{ color: "#FFFFFF" }}>Data Protection Officer</strong>
          <span>CELOTTI Tech Talent (Singapore) Pte. Ltd.</span>
          <span>JustCo, The Metropolis, 9 North Buona Vista Drive, #02-01, Singapore 138588</span>
          <span>
            {"Email: "}
            <a href={`mailto:${DPO_EMAIL}`} style={linkStyle}>
              {DPO_EMAIL}
            </a>
          </span>
          <span>
            {"Phone: "}
            <a href="tel:+6560119790" style={linkStyle}>
              +65 6011 9790
            </a>
          </span>
        </address>
      </>
    ),
  },
];

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
            <strong style={{ color: "#FFFFFF" }}>{EFFECTIVE_DATE}</strong>
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
              <span style={{ fontSize: "16px", lineHeight: "1.6", color: "#E4E7E8" }}>{INTRO}</span>
            </div>
            {SECTIONS.map((sec) => (
              <section key={sec.id} id={sec.id} style={{ display: "flex", flexDirection: "column", gap: "14px", scrollMarginTop: "104px" }}>
                <h2 style={{ margin: "0", fontSize: "28px", lineHeight: "1.2", fontWeight: "700" }}>{sec.title}</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: "14px", fontSize: "17px", lineHeight: "1.7", color: "#D3D9DB" }}>
                  {sec.body}
                </div>
              </section>
            ))}
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
            <strong style={{ color: "#FFFFFF" }}>{EFFECTIVE_DATE}</strong>
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
          <nav aria-label="On this page" style={{ display: "flex", flexDirection: "column", padding: "0 8px 12px" }}>
            {SECTIONS.map((sec) => (
              <a key={sec.id} href={`#m-${sec.id}`} style={{ padding: "10px 8px", fontSize: "15px", textDecoration: "none" }}>
                {sec.title}
              </a>
            ))}
          </nav>
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
          <span>{INTRO}</span>
        </div>
        {SECTIONS.map((sec) => (
          <section key={sec.id} id={`m-${sec.id}`} style={{ display: "flex", flexDirection: "column", gap: "10px", scrollMarginTop: "80px" }}>
            <h2 style={{ margin: "0", fontSize: "22px", lineHeight: "1.25", fontWeight: "700" }}>{sec.title}</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px", fontSize: "16px", lineHeight: "1.65", color: "#D3D9DB" }}>
              {sec.body}
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}
