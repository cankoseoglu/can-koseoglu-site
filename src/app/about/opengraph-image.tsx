import { ImageResponse } from "next/og";

export const alt = "About Can Koseoglu — Founder, CEO, Builder";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fafafa",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: "#0a0a0a",
            letterSpacing: "-0.02em",
          }}
        >
          Can Koseoglu
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#737373",
            marginTop: 16,
          }}
        >
          About — Founder, CEO, Builder
        </div>
      </div>
    ),
    { ...size }
  );
}
