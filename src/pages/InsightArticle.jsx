import { Link } from "react-router-dom";

// InsightArticle: desktop layout (shown from 768px up)
export function Desktop() {
  return (
    <main id="main">
      <article>
        {/* Article header */}
        <header
          style={{
            maxWidth: "880px",
            margin: "0 auto",
            padding: "72px clamp(20px, 3.5vw, 32px) 48px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Link to="/" style={{ color: "#C1C3C2" }}>
              Home
            </Link>
            <span aria-hidden="true">/</span>
            <Link to="/insights" style={{ color: "#C1C3C2" }}>
              Insights
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Artificial Intelligence
            </span>
          </nav>
          <span
            style={{
              alignSelf: "flex-start",
              padding: "5px 12px",
              borderRadius: "999px",
              background: "#DFE21B",
              fontSize: "13px",
              fontWeight: "700",
              color: "#201F1E",
            }}
          >
            Artificial Intelligence
          </span>
          <h1
            style={{ margin: "0", fontSize: "clamp(40px, 4.6vw, 64px)", lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "700" }}
          >
            The AI-Powered World Is Reshaping Talent
          </h1>
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px", paddingTop: "8px" }}>
            <span
              aria-hidden="true"
              style={{ width: "48px", height: "48px", borderRadius: "999px", background: "#34312F", border: "1.5px dashed #60554F" }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "16px", fontWeight: "700" }}>[Author name]</span>
              <span style={{ fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</span>
            </span>
          </div>
        </header>
        <div style={{ maxWidth: "1184px", margin: "0 auto", padding: "0 clamp(20px, 3.5vw, 32px)" }}>
          <figure style={{ margin: "0", display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                aspectRatio: "21 / 9",
                borderRadius: "24px",
                background: "#34312F",
                backgroundImage: "url(/images/ai.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "700",
                letterSpacing: "0.08em",
                color: "#C1C3C2",
              }}
            >
            </div>
            <figcaption style={{ fontSize: "14px", color: "#C1C3C2" }}>[Image caption]</figcaption>
          </figure>
        </div>
        {/* Body + share rail */}
        <div
          style={{
            maxWidth: "1184px",
            margin: "0 auto",
            padding: "64px clamp(20px, 3.5vw, 32px) 96px",
            display: "flex",
            flexWrap: "wrap",
            gap: "48px",
            justifyContent: "center",
          }}
        >
          <aside aria-label="Share this article" style={{ flex: "0 0 120px", display: "flex", flexDirection: "column", gap: "10px" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
              Share
            </span>
            <a
              className="share"
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
                padding: "0 14px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              LinkedIn
            </a>
            <a
              className="share"
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
                padding: "0 14px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              X
            </a>
            <a
              className="share"
              href="#"
              style={{
                display: "flex",
                alignItems: "center",
                height: "44px",
                padding: "0 14px",
                borderRadius: "999px",
                border: "1.5px solid #4E4748",
                fontSize: "14px",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              Email
            </a>
          </aside>
          <div
            className="prose"
            style={{
              flex: "0 1 720px",
              minWidth: "0",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              fontSize: "19px",
              lineHeight: "1.7",
              color: "#D3D9DB",
            }}
          >
            <p style={{ fontSize: "22px", lineHeight: "1.6", color: "#FFFFFF" }}>[Introduction paragraph from CMS]</p>
            <p>[Body paragraph from CMS]</p>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "32px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontWeight: "700",
              }}
            >
              How AI is changing jobs and industries
            </h2>
            <p>[Body paragraph from CMS]</p>
            <blockquote
              style={{
                margin: "8px 0",
                padding: "8px 0 8px 32px",
                borderLeft: "0",
                position: "relative",
                fontSize: "28px",
                lineHeight: "1.35",
                fontWeight: "700",
                color: "#FFFFFF",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "0",
                  top: "10px",
                  bottom: "10px",
                  width: "8px",
                  background: "#DFE21B",
                  transform: "skewX(-12deg)",
                  color: "#201F1E",
                }}
              />
              [Pull quote from CMS]
            </blockquote>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "32px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontWeight: "700",
              }}
            >
              Emerging skills
            </h2>
            <p>[Body paragraph from CMS]</p>
            <h3 style={{ margin: "8px 0 0", fontSize: "24px", lineHeight: "1.3", color: "#FFFFFF", fontWeight: "700" }}>[H3 subheading]</h3>
            <p>[Body paragraph from CMS]</p>
            <figure style={{ margin: "8px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
              <div
                style={{
                  aspectRatio: "16 / 9",
                  borderRadius: "16px",
                  background: "#2F2C2B",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  color: "#FFFFFF",
                  fontSize: "13px",
                  fontWeight: "700",
                  letterSpacing: "0.06em",
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "999px",
                    background: "#DFE21B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#201F1E",
                  }}
                >
                  <svg aria-hidden="true" fill="#201F1E" height="22" viewBox="0 0 24 24" width="22">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                EMBEDDED VIDEO (OPTIONAL)
              </div>
              <figcaption style={{ fontSize: "14px", color: "#C1C3C2" }}>[Caption]</figcaption>
            </figure>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "32px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontWeight: "700",
              }}
            >
              What organisations must do to stay competitive
            </h2>
            <p>[Body paragraph from CMS]</p>
            <h2
              style={{
                margin: "16px 0 0",
                fontSize: "32px",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontWeight: "700",
              }}
            >
              What professionals must do to stay relevant
            </h2>
            <p>[Body paragraph from CMS]</p>
            {/* Author box */}
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "flex-start",
                marginTop: "24px",
                padding: "28px",
                borderRadius: "20px",
                background: "#262423",
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: "72px",
                  height: "72px",
                  flexShrink: "0",
                  borderRadius: "999px",
                  background: "#201F1E",
                  border: "1.5px dashed #60554F",
                }}
              />
              <span style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
                >
                  Written by
                </span>
                <span style={{ fontSize: "20px", fontWeight: "700", color: "#FFFFFF" }}>[Author name]</span>
                <span style={{ fontSize: "16px", lineHeight: "1.55" }}>[Author role and short bio from CMS]</span>
              </span>
            </div>
          </div>
        </div>
      </article>
      {/* Related */}
      <section aria-labelledby="rel-h" style={{ background: "#262423", borderTop: "1px solid #3A3736" }} className="ax-glow">
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
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "end", justifyContent: "space-between", gap: "20px" }}>
            <h2 id="rel-h" style={{ margin: "0", fontSize: "clamp(30px, 3vw, 44px)", letterSpacing: "-0.02em", fontWeight: "700" }}>
              More on Artificial Intelligence
            </h2>
            <Link
              to="/insights"
              style={{
                fontSize: "16px",
                fontWeight: "700",
                textDecoration: "underline",
                textDecorationColor: "#DFE21B",
                textDecorationThickness: "3px",
                textUnderlineOffset: "6px",
              }}
            >
              All insights
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(340px, 100%), 1fr))", gap: "24px" }}>
            <a
              className="card"
              href="#"
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
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px" }}>
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
                  Artificial Intelligence
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>[Related article title]</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
            <a
              className="card"
              href="#"
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
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px" }}>
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
                  Artificial Intelligence
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>[Related article title]</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
            <a
              className="card"
              href="#"
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
                  backgroundImage: "url(/images/data.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div style={{ display: "flex", flexDirection: "column", gap: "12px", padding: "24px" }}>
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
                  Artificial Intelligence
                </span>
                <h3 style={{ margin: "0", fontSize: "21px", lineHeight: "1.3", fontWeight: "700" }}>[Related article title]</h3>
                <p style={{ margin: "0", fontSize: "14px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      {/* CTA band */}
      <section aria-label="Next steps" style={{ background: "#201F1E", padding: "96px clamp(20px, 3.5vw, 32px)" }} className="ax-glow-b">
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
              Let's build stronger AI and Data capability together
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
              Specialist professional?
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
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// InsightArticle: mobile layout (shown below 768px)
export function Mobile() {
  return (
    <main id="main-m">
      <article>
        <header style={{ padding: "32px 20px 24px", display: "flex", flexDirection: "column", gap: "16px" }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: "14px", color: "#C1C3C2", display: "flex", flexWrap: "wrap", gap: "8px" }}>
            <Link to="/insights" style={{ color: "#C1C3C2" }}>
              Insights
            </Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" style={{ color: "#FFFFFF", fontWeight: "700" }}>
              Artificial Intelligence
            </span>
          </nav>
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
            Artificial Intelligence
          </span>
          <h1 style={{ margin: "0", fontSize: "36px", lineHeight: "1.08", letterSpacing: "-0.03em", fontWeight: "700" }}>
            The AI-Powered World Is Reshaping Talent
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <span
              aria-hidden="true"
              style={{ width: "44px", height: "44px", borderRadius: "999px", background: "#34312F", border: "1.5px dashed #60554F" }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <span style={{ fontSize: "15px", fontWeight: "700" }}>[Author name]</span>
              <span style={{ fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</span>
            </span>
          </div>
        </header>
        <figure style={{ margin: "0 16px", display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              aspectRatio: "4 / 3",
              borderRadius: "16px",
              background: "#34312F",
              backgroundImage: "url(/images/ai.jpg)",
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
          <figcaption style={{ fontSize: "13px", color: "#C1C3C2" }}>[Image caption]</figcaption>
        </figure>
        <div
          className="prose"
          style={{
            padding: "32px 20px 48px",
            display: "flex",
            flexDirection: "column",
            gap: "22px",
            fontSize: "17px",
            lineHeight: "1.7",
            color: "#D3D9DB",
          }}
        >
          <p style={{ fontSize: "19px", lineHeight: "1.6", color: "#FFFFFF" }}>[Introduction paragraph from CMS]</p>
          <p>[Body paragraph from CMS]</p>
          <h2 style={{ margin: "8px 0 0", fontSize: "26px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>
            How AI is changing jobs and industries
          </h2>
          <p>[Body paragraph from CMS]</p>
          <blockquote
            style={{
              margin: "4px 0",
              padding: "4px 0 4px 24px",
              position: "relative",
              fontSize: "22px",
              lineHeight: "1.4",
              fontWeight: "700",
              color: "#FFFFFF",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                left: "0",
                top: "6px",
                bottom: "6px",
                width: "6px",
                background: "#DFE21B",
                transform: "skewX(-12deg)",
                color: "#201F1E",
              }}
            />
            [Pull quote from CMS]
          </blockquote>
          <h2 style={{ margin: "8px 0 0", fontSize: "26px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>Emerging skills</h2>
          <p>[Body paragraph from CMS]</p>
          <h2 style={{ margin: "8px 0 0", fontSize: "26px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>
            What organisations must do to stay competitive
          </h2>
          <p>[Body paragraph from CMS]</p>
          <h2 style={{ margin: "8px 0 0", fontSize: "26px", lineHeight: "1.2", color: "#FFFFFF", fontWeight: "700" }}>
            What professionals must do to stay relevant
          </h2>
          <p>[Body paragraph from CMS]</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", paddingTop: "20px", borderTop: "1px solid #3A3736" }}>
            <span style={{ fontSize: "12px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
              Share
            </span>
            <div style={{ display: "flex", gap: "8px" }}>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 16px",
                  borderRadius: "999px",
                  border: "1.5px solid #4E4748",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                LinkedIn
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 16px",
                  borderRadius: "999px",
                  border: "1.5px solid #4E4748",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                X
              </a>
              <a
                href="#"
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "44px",
                  padding: "0 16px",
                  borderRadius: "999px",
                  border: "1.5px solid #4E4748",
                  fontSize: "14px",
                  fontWeight: "700",
                  textDecoration: "none",
                }}
              >
                Email
              </a>
            </div>
          </div>
          <div
            style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "20px", borderRadius: "16px", background: "#262423" }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "56px",
                height: "56px",
                flexShrink: "0",
                borderRadius: "999px",
                background: "#201F1E",
                border: "1.5px dashed #60554F",
              }}
            />
            <span style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
              <span style={{ fontSize: "11px", fontWeight: "700", letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}>
                Written by
              </span>
              <span style={{ fontSize: "17px", fontWeight: "700", color: "#FFFFFF" }}>[Author name]</span>
              <span style={{ fontSize: "15px", lineHeight: "1.5" }}>[Author role and short bio]</span>
            </span>
          </div>
        </div>
      </article>
      <section aria-labelledby="ma-rel" style={{ background: "#262423", borderTop: "1px solid #3A3736" }} className="ax-glow">
        <div style={{ padding: "56px 16px", display: "flex", flexDirection: "column", gap: "14px" }}>
          <h2 id="ma-rel" style={{ margin: "0 4px 8px", fontSize: "26px", fontWeight: "700" }}>
            More on Artificial Intelligence
          </h2>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px",
              borderRadius: "14px",
              background: "#201F1E",
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
              <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>[Related article title]</h3>
              <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
            </div>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px",
              borderRadius: "14px",
              background: "#201F1E",
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
              <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>[Related article title]</h3>
              <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
            </div>
          </a>
          <a
            href="#"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              padding: "14px",
              borderRadius: "14px",
              background: "#201F1E",
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
                backgroundImage: "url(/images/data.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
              <h3 style={{ margin: "0", fontSize: "16px", lineHeight: "1.35", fontWeight: "700" }}>[Related article title]</h3>
              <p style={{ margin: "0", fontSize: "13px", color: "#C1C3C2" }}>[Date] · [Read time]</p>
            </div>
          </a>
        </div>
      </section>
      <section
        aria-label="Next steps"
        style={{ padding: "48px 16px 56px", display: "flex", flexDirection: "column", gap: "12px" }}
        className="ax-glow-b"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "14px",
            padding: "26px 20px",
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
            Building a team?
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>
            Let's build stronger AI and Data capability together
          </h2>
          <Link
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
            gap: "14px",
            padding: "26px 20px",
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
            Specialist professional?
          </p>
          <h2 style={{ margin: "0", fontSize: "24px", lineHeight: "1.2", fontWeight: "700" }}>Explore specialist opportunities with CTT</h2>
          <Link
            to="/join"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "52px",
              borderRadius: "999px",
              border: "1.5px solid #4E4748",
              color: "#FFFFFF",
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
