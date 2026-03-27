"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { PeekCarousel } from "./PeekCarousel";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_CREAM, imgIconPlay, section8Image } from "./tokens";
import { VideoId } from "./types";

function VideoCard({ title, onPlay }: { title: string; onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onPlay}
      onKeyDown={(e) => e.key === "Enter" && onPlay()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#004f50" : DARK_TEAL,
        borderRadius: 20,
        height: 360,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        width: "100%",
        padding: "32px 19px",
        cursor: "pointer",
        minWidth: 0,
        transition: "background-color 250ms ease",
      }}
    >
      <img
        src={imgIconPlay}
        alt="Play"
        style={{
          width: 90,
          height: 90,
          objectFit: "contain",
          flexShrink: 0,
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 250ms ease",
        }}
      />
      <p
        style={{
          fontFamily: stix,
          fontSize: 22,
          fontWeight: 500,
          color: "white",
          lineHeight: 1.3,
          textAlign: "center",
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </p>
    </div>
  );
}

export function Section8({ onVideoPlay }: { onVideoPlay: (id: VideoId) => void }) {
  return (
    <section
      style={{
        backgroundColor: BG_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="pt-[60px] md:pt-[100px] xl:pt-[120px] pb-0 px-5 md:px-10 xl:px-[40px]"
    >
      {/* Copy block */}
      <FadeIn
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            fontWeight: 400,
            textWrap: "balance",
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          <span style={{ color: DARK_TEAL }}>Manufacturing </span>
          <em style={{ color: TEAL, fontStyle: "italic" }}>under</em>
          <span style={{ color: DARK_TEAL }}> our control.</span>
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
          THE DESERT ADVANTAGE
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Most supplement brands do not make their own products. We do. At our facility in Henderson, Nevada, we control every aspect of production—from how ingredients are handled to how finished products are prepared. This level of control allows us to maintain standards that would not be possible otherwise.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Our location in the desert provides an additional advantage: low humidity conditions that allow us to produce ultra-fine powders without relying on additives. Our facility is also powered by solar energy, reflecting a long standing commitment to responsible manufacturing.
        </p>
      </FadeIn>

      {/* Video cards — carousel on mobile, row on desktop */}
      <div className="hidden md:flex" style={{ width: "100%", maxWidth: 1320, gap: 20, alignItems: "stretch" }}>
        <FadeIn style={{ flex: "1 0 0" }}>
          <VideoCard title={"Ingredient Transparency.\nPure Formulas."} onPlay={() => onVideoPlay("ingredient-transparency")} />
        </FadeIn>
        <FadeIn delay={100} style={{ flex: "1 0 0" }}>
          <VideoCard title={"All-Solar Powered Manufacturing Facility, Henderson, NV"} onPlay={() => onVideoPlay("solar-manufacturing")} />
        </FadeIn>
        <FadeIn delay={200} style={{ flex: "1 0 0" }}>
          <VideoCard title={"Made In-House.\nNever Outsourced."} onPlay={() => onVideoPlay("made-in-house")} />
        </FadeIn>
      </div>
      <div className="md:hidden w-full">
        <PeekCarousel>
          {[
            <VideoCard key="a" title={"Ingredient Transparency.\nPure Formulas."} onPlay={() => onVideoPlay("ingredient-transparency")} />,
            <VideoCard key="b" title={"All-Solar Powered Manufacturing Facility, Henderson, NV"} onPlay={() => onVideoPlay("solar-manufacturing")} />,
            <VideoCard key="c" title={"Made In-House.\nNever Outsourced."} onPlay={() => onVideoPlay("made-in-house")} />,
          ]}
        </PeekCarousel>
      </div>
    </section>
  );
}

export function Section8Image() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <img
        src={section8Image}
        alt="ProCaps Manufacturing"
        style={{
          width: "100%",
          aspectRatio: "1960 / 480",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
