"use client";

import { useState, useEffect } from "react";
import { stix, inter, TEAL, DARK_TEAL } from "../quality/tokens";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  function entrance(delay: number): React.CSSProperties {
    return {
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(14px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
    };
  }

  return (
    <>
      {/* ── Hero image + overlays ─────────────────────────────── */}
      <section
        style={{ position: "relative", width: "100%", overflow: "hidden" }}
        className="aspect-[3/4] md:aspect-[4/3] xl:aspect-[1681/1522]"
      >
        <img
          src="/andrew-story-hero.png"
          alt="Andrew Lessman running in nature"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center 20%",
            display: "block",
          }}
        />

        {/* Subtle dark gradient at bottom so card text is readable */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(0,0,0,0.25) 100%)",
            pointerEvents: "none",
          }}
        />

        {/* ── Centered top: vertical line + label + signature ── */}
        <div
          style={{
            position: "absolute",
            top: 58,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 32,
            width: "min(719px, 90%)",
          }}
        >
          {/* Vertical line — same animation as Quality/Our Story banners */}
          <div
            style={{
              height: 111,
              display: "flex",
              alignItems: "flex-start",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                width: 1,
                backgroundColor: "rgba(255,255,255,0.5)",
                height: mounted ? 111 : 0,
                opacity: mounted ? 1 : 0,
                transition: "height 0.6s ease 0ms, opacity 0.6s ease 0ms",
              }}
            />
          </div>

          {/* Label */}
          <p
            style={{
              fontFamily: inter,
              fontWeight: 500,
              letterSpacing: "1.4px",
              textTransform: "uppercase",
              color: "white",
              margin: 0,
              whiteSpace: "nowrap",
              ...entrance(300),
            }}
            className="text-[14px] md:text-[16px] xl:text-[20px]"
          >
            Meet our founder
          </p>

          {/* Signature */}
          <img
            src="/andrew-signature-new.svg"
            alt="Andrew Lessman"
            style={{ display: "block", ...entrance(500) }}
            className="w-[220px] md:w-[420px] xl:w-[680px]"
          />
        </div>

        {/* Desktop card — exact Figma position */}
        <div
          className="hidden xl:flex absolute flex-col"
          style={{
            bottom: 132,
            left: 89,
            width: "clamp(560px, 44vw, 791px)",
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: 40,
            padding: "clamp(52px, 4.2vw, 80px)",
            gap: 33,
            color: DARK_TEAL,
          }}
        >
          <CardContent />
        </div>

        {/* Tablet card — responsive position */}
        <div
          className="hidden md:flex xl:hidden absolute flex-col"
          style={{
            bottom: 60,
            left: 40,
            right: 40,
            backgroundColor: "rgba(255,255,255,0.85)",
            borderRadius: 32,
            padding: 48,
            gap: 24,
            color: DARK_TEAL,
          }}
        >
          <CardContent size="tablet" />
        </div>
      </section>

      {/* ── Mobile card — below the image ────────────────────── */}
      <div
        className="flex md:hidden flex-col"
        style={{
          backgroundColor: "white",
          padding: "40px 24px",
          gap: 24,
          color: DARK_TEAL,
        }}
      >
        <CardContent size="mobile" />
      </div>
    </>
  );
}

function CardContent({ size = "desktop" }: { size?: "desktop" | "tablet" | "mobile" }) {
  const headlineSizes = {
    desktop: "text-[60px]",
    tablet: "text-[40px]",
    mobile: "text-[36px]",
  };
  const bodySizes = {
    desktop: "text-[20px]",
    tablet: "text-[18px]",
    mobile: "text-[17px]",
  };

  return (
    <>
      <h2
        style={{
          fontFamily: stix,
          fontWeight: 500,
          letterSpacing: "-1px",
          lineHeight: 1.1,
          margin: 0,
          color: DARK_TEAL,
        }}
        className={headlineSizes[size]}
      >
        Founder-owned
        <br />
        since the{" "}
        <em style={{ color: "#009296", fontStyle: "italic" }}>beginning.</em>
      </h2>
      <p
        style={{
          fontFamily: inter,
          fontWeight: 400,
          lineHeight: 1.5,
          letterSpacing: "-0.3px",
          margin: 0,
          color: DARK_TEAL,
        }}
        className={bodySizes[size]}
      >
        Andrew Lessman founded what was to become ProCaps Laboratories in 1979
        — back in what some consider &ldquo;the early days&rdquo; of vitamin
        supplements. Today, it remains one of the few companies that actually
        manufactures the vitamins it distributes, and the only one in its class
        for uncompromising quality. ProCaps Laboratories is still owned by the
        man who founded it, and his commitment to quality has remained
        unchanged.
      </p>
    </>
  );
}
