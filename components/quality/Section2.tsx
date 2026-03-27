"use client";

import { useState } from "react";
import { FadeIn } from "./FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL } from "./tokens";

const signatureImg = "https://www.figma.com/api/mcp/asset/6bc054ca-fd1c-4171-b4e0-0e663e903b7e";

export function Section2({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
      className="pt-[180px] md:pt-[260px] xl:pt-[300px] px-5 md:px-10 xl:px-[40px]"
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
          marginBottom: 80,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          All vitamins are{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>not</em>
          {" "}created equal.
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
          WHEN YOU CONTROL THE PROCESS YOU DEFINE THE QUALITY
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
          The reality is that most supplement companies don&rsquo;t manufacture their own products. They are brands—not manufacturers—relying on third parties to produce formulas that often include unnecessary additives. Tablets, for example, require binders, glues, lubricants, and coatings just to hold together. These are not there for your benefit—they are there for manufacturing convenience. Because we manufacture our own products, we&rsquo;re able to avoid these manufacturing shortcuts and choose delivery forms that prioritize ingredient integrity over production convenience.
        </p>

        {/* Signature block — mobile only, sits below paragraph */}
        <div
          className="flex md:hidden"
          style={{ flexDirection: "column", alignItems: "center", gap: 10, marginTop: 16 }}
        >
          {/* Mask technique: exact #009296 with no filter approximation */}
          <div style={{ position: "relative", display: "inline-block", height: 40 }}>
            <img src={signatureImg} alt="" style={{ height: 40, width: "auto", display: "block", opacity: 0 }} />
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundColor: TEAL,
              WebkitMaskImage: `url(${signatureImg})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              maskImage: `url(${signatureImg})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }} />
          </div>
          <p style={{ fontFamily: inter, fontSize: 15, color: DARK_TEAL, margin: 0, lineHeight: 1.3 }}>
            <span style={{ fontWeight: 600 }}>- Andrew Lessman,</span>
            <span style={{ fontWeight: 400 }}> ProCaps Founder</span>
          </p>
        </div>
      </FadeIn>

      {/* Video section */}
      <FadeIn delay={120} style={{ width: "100%", maxWidth: 1384 }}>
      <div
        role="button"
        tabIndex={0}
        onClick={onPlay}
        onKeyDown={(e) => e.key === "Enter" && onPlay()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 20,
          width: "100%",
          maxWidth: 1384,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        className="aspect-[1329/737]"
      >
        {/* Background photo */}
        <img
          src="https://www.figma.com/api/mcp/asset/e4d39f6d-9c28-405e-8ed2-a18559a10a47"
          alt="Andrew Lessman"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: "transform 400ms ease",
          }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: hovered ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0)",
            transition: "background-color 250ms ease",
            zIndex: 1,
            borderRadius: 20,
          }}
        />

        {/* Play button — centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
            transition: "transform 250ms ease",
            zIndex: 2,
          }}
        >
          <img
            src="https://www.figma.com/api/mcp/asset/1b43d21e-3036-4bf9-ab0e-efa380219b39"
            alt="Play"
            style={{ objectFit: "contain" }}
            className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] xl:w-[129px] xl:h-[129px]"
          />
        </div>

        {/* Bottom-left: Signature stacked above name — desktop only */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 50,
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 12,
            zIndex: 2,
          }}
          className="hidden md:flex md:bottom-8 md:left-8 xl:bottom-[52px] xl:left-[50px]"
        >
          <img
            src={signatureImg}
            alt="Andrew Lessman signature"
            style={{ height: 59, width: 380, objectFit: "contain" }}
            className="h-[48px] w-auto xl:h-[59px] xl:w-[380px]"
          />
          <p
            style={{
              fontFamily: inter,
              fontSize: 20,
              color: "white",
              margin: 0,
              lineHeight: 1.3,
            }}
            className="text-base xl:text-[20px]"
          >
            <span style={{ fontWeight: 600 }}>- Andrew Lessman,</span>
            <span style={{ fontWeight: 400 }}> ProCaps Founder</span>
          </p>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
