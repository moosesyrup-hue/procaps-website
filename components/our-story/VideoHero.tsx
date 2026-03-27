"use client";

import { FadeIn } from "../quality/FadeIn";
import { stix, inter, DARK_TEAL } from "../quality/tokens";

export function VideoHero() {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: 500,
      }}
      className="h-[60vw] max-h-[800px] min-h-[400px]"
    >
      {/* Vimeo background video */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <iframe
          src="https://player.vimeo.com/video/1151210441?background=1&autoplay=1&loop=1&muted=1&byline=0&title=0"
          allow="autoplay; fullscreen"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "177.78vh",
            height: "56.25vw",
            minWidth: "100%",
            minHeight: "100%",
            border: "none",
          }}
        />
      </div>

      {/* Dark teal overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0, 30, 35, 0.65)",
          zIndex: 1,
        }}
      />

      {/* Text content */}
      <FadeIn
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 32,
          maxWidth: 900,
          padding: "60px 20px",
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            color: "white",
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            fontWeight: 400,
            textWrap: "balance",
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          Supplements <em style={{ fontStyle: "italic" }}>powered</em> by the sun.
        </h2>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: "white",
            lineHeight: 1.6,
            letterSpacing: "-0.4px",
            margin: 0,
            maxWidth: 620,
            textWrap: "pretty",
          }}
          className="text-base md:text-[18px]"
        >
          At ProCaps Laboratories, we manufacture our products at our headquarters in Henderson, Nevada — a facility powered by one of the largest private solar installations in the supplement industry, long before sustainability became standard. We design our operations with environmental responsibility in mind, minimizing waste, optimizing efficiency and reducing our reliance on non-renewable resources wherever possible.
        </p>
      </FadeIn>
    </section>
  );
}
