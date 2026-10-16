import { ImageResponse } from "next/og";

export const alt = "Hartford, CT Immigration Lawyer: Law Office of Jacquelyn R. Goncalves";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "linear-gradient(160deg, #2a3318 0%, #3d4a22 55%, #4a5d23 100%)",
          color: "#f5f0e6",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div style={{ width: 84, height: 84, border: "3px solid #c9a227", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", color: "#c9a227", fontSize: 40, fontWeight: 700 }}>
            JG
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 32 }}>Law Office of Jacquelyn R. Goncalves</div>
            <div style={{ fontSize: 20, letterSpacing: 4, color: "#d4b84a" }}>HARTFORD, CT IMMIGRATION LAW</div>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.1 }}>Hartford Immigration Lawyer</div>
          <div style={{ fontSize: 30, color: "#ede6d6", marginTop: 18 }}>Green cards · Family petitions · Citizenship · K-1 visas</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#ddd0b8" }}>
          <div>Secure video consultations · English · Español · Português</div>
          <div style={{ color: "#d4b84a" }}>(860) 471-3023</div>
        </div>
      </div>
    ),
    size,
  );
}
