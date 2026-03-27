"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, section9Img, section9PlayIcon } from "./tokens";

export function Section9({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left */}
      <FadeIn
        style={{
          flex: 1,
          maxWidth: 475,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        className="w-full md:max-w-[475px]"
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.16px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[36px] md:text-[48px] xl:text-[58px]"
        >
          Informed choices require transparency.
        </h2>

        <TealLine width={50} />

        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
          }}
          className="text-sm md:text-[20px]"
        >
          KNOWLEDGE GUIDES QUALITY
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          For more than four decades, we have believed that informed decisions lead to better outcomes. That belief doesn&rsquo;t just guide how we speak—it guides how we make our products. From ingredient selection to manufacturing and testing, every decision is rooted in science and transparency.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          We focus on providing clear, science-based information so you can decide what is right for you—because quality is not just what we make, it&rsquo;s what you understand.
        </p>
      </FadeIn>

      {/* Right: Photo + play icon */}
      <FadeIn delay={150} style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <div
          role="button"
          tabIndex={0}
          onClick={onPlay}
          onKeyDown={(e) => e.key === "Enter" && onPlay()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 20,
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Photo */}
          <img
            src={section9Img}
            alt="Andrew Lessman"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 400ms ease",
            }}
          />

          {/* Hover overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: hovered ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)",
              transition: "background-color 250ms ease",
              borderRadius: 20,
            }}
          />

          {/* Play icon — centered */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
              transition: "transform 250ms ease",
              width: 87,
              height: 87,
            }}
          >
            <img
              src={section9PlayIcon}
              alt="Play"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
