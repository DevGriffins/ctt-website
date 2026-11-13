import { Link } from "react-router-dom";

function Content({ id, pad }) {
  return (
    <main id={id}>
      <section className="ax-glow" style={{ background: "#201F1E" }}>
        <div
          style={{
            maxWidth: "1344px",
            margin: "0 auto",
            padding: pad,
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <p
            style={{ margin: 0, fontSize: "14px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#C1C3C2" }}
          >
            Error 404
          </p>
          <h1 style={{ margin: 0, fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 700 }}>
            Page not found
          </h1>
          <p style={{ margin: 0, fontSize: "18px", lineHeight: 1.55, color: "#D3D9DB", maxWidth: "560px" }}>
            The page you are looking for has moved or no longer exists.
          </p>
          <Link
            to="/"
            className="btn btn-yellow"
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "52px",
              padding: "0 24px",
              borderRadius: "999px",
              background: "#DFE21B",
              color: "#201F1E",
              fontSize: "16px",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

export function Desktop() {
  return <Content id="main" pad="120px clamp(20px, 3.5vw, 32px) 160px" />;
}

export function Mobile() {
  return <Content id="main-m" pad="72px 20px 96px" />;
}
