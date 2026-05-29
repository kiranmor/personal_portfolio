import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kiran Mor portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "radial-gradient(circle at 15% 10%, rgba(251, 113, 133, 0.32), transparent 30%), radial-gradient(circle at 85% 5%, rgba(244, 114, 182, 0.24), transparent 28%), linear-gradient(135deg, #fff1f5 0%, #fff7fb 54%, #ffffff 100%)",
          color: "#1f1720",
          padding: "72px",
          fontFamily: "Arial",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              color: "#be123c",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            <div
              style={{
                width: 58,
                height: 58,
                borderRadius: 18,
                background: "#ffffff",
                border: "2px solid #fecdd3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              KM
            </div>
            Kiran Mor
          </div>
          <div
            style={{
              border: "2px solid #fecdd3",
              borderRadius: 999,
              background: "rgba(255,255,255,0.72)",
              color: "#be123c",
              padding: "14px 24px",
              fontSize: 24,
              fontWeight: 800,
            }}
          >
            Portfolio
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
          <div
            style={{
              display: "flex",
              fontSize: 86,
              lineHeight: 0.95,
              fontWeight: 900,
              letterSpacing: "-2px",
              maxWidth: 900,
            }}
          >
            Software. Systems. Cloud.
          </div>
          <div
            style={{
              display: "flex",
              maxWidth: 860,
              fontSize: 34,
              lineHeight: 1.35,
              color: "#475569",
              fontWeight: 600,
            }}
          >
            ECE graduate from the University of Toronto building software, cloud
            infrastructure, and embedded systems.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            color: "#881337",
            fontSize: 24,
            fontWeight: 800,
          }}
        >
          <span style={{ display: "flex", padding: "12px 18px", borderRadius: 999, background: "#ffe4e6" }}>
            Full-stack
          </span>
          <span style={{ display: "flex", padding: "12px 18px", borderRadius: 999, background: "#ffe4e6" }}>
            Cloud
          </span>
          <span style={{ display: "flex", padding: "12px 18px", borderRadius: 999, background: "#ffe4e6" }}>
            Embedded
          </span>
        </div>
      </div>
    ),
    size,
  );
}
