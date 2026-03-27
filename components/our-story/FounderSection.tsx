"use client";

import { useState } from "react";
import { FadeIn } from "../quality/FadeIn";
import { stix, inter, TEAL, DARK_TEAL, section9Img, section9PlayIcon } from "../quality/tokens";

const signatureImg = "https://www.figma.com/api/mcp/asset/6bc054ca-fd1c-4171-b4e0-0e663e903b7e";

export function FounderSection({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{ backgroundColor: "white" }}
      className="px-5 md:px-10 xl:px-[40px] pt-[60px] md:pt-[80px] xl:pt-[120px] pb-[60px] md:pb-[80px] xl:pb-[120px]"
    >
      {/* Header block */}
      <FadeIn
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            marginBottom: 24,
            fontWeight: 400,
          }}
          className="text-[42px] md:text-[64px] xl:text-[72px]"
        >
          Still owned by its
          <br />
          <em style={{ color: TEAL, fontStyle: "italic" }}>founder.</em>
        </h2>

        <div style={{ width: 1, height: 56, backgroundColor: "rgba(0,146,150,0.35)", marginBottom: 24 }} />

        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
          }}
          className="text-sm md:text-[16px]"
        >
          MEET ANDREW LESSMAN
        </p>
      </FadeIn>

      {/* Two-column: image left, copy right */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 80,
          maxWidth: 1384,
          margin: "0 auto",
        }}
        className="flex-col md:flex-row"
      >
        {/* Left: Video thumbnail */}
        <FadeIn style={{ flex: 1 }} className="w-full md:max-w-[809px]">
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
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: hovered ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)",
                transition: "background-color 250ms ease",
                borderRadius: 20,
              }}
            />
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

        {/* Right: Signature + copy + CTA */}
        <FadeIn
          delay={150}
          style={{
            flex: 1,
            maxWidth: 475,
            display: "flex",
            flexDirection: "column",
            gap: 20,
          }}
          className="w-full md:max-w-[475px]"
        >
          {/* Teal signature via CSS mask */}
          <div style={{ position: "relative", display: "inline-block", height: 48, width: 310 }}>
            <img src={signatureImg} alt="" style={{ height: 48, width: 310, objectFit: "contain", display: "block", opacity: 0 }} />
            <div style={{
              position: "absolute",
              inset: 0,
              backgroundColor: TEAL,
              WebkitMaskImage: `url(${signatureImg})`,
              WebkitMaskSize: "contain",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "left center",
              maskImage: `url(${signatureImg})`,
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "left center",
            }} />
          </div>

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
            More than 45 years ago, Andrew Lessman and the company he founded, ProCaps Labs, became leaders in the dietary supplement industry providing an alternative to the additives and low quality of typical products. In fact, many well-established ingredients we now take for granted today were originally introduced by Andrew decades ago.
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
            Andrew endeavors to be a voice of reason encouraging ethical products amid an industry overrun by contract manufacturers and deceptive claims on social media. ProCaps remains one of the few companies making all its products, including their additive-free nutritional supplements and wellness products — all produced in their 100% solar-powered facilities in Henderson, Nevada.
          </p>

          <div>
            <button
              style={{
                fontFamily: inter,
                fontWeight: 500,
                fontSize: 13,
                letterSpacing: "1.5px",
                color: "white",
                backgroundColor: TEAL,
                border: "none",
                borderRadius: 100,
                padding: "14px 28px",
                cursor: "pointer",
              }}
            >
              READ ANDREW&rsquo;S STORY
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
