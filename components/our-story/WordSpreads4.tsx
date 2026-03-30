"use client";

import { useState } from "react";
import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_TEAL_LIGHT, section9PlayIcon } from "../quality/tokens";

const thumbnailImg = "https://www.figma.com/api/mcp/asset/cb40c4ae-a2f0-49ea-955c-64ee7475d55c";

export function WordSpreads4({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row-reverse px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Right: video thumbnail + quote card */}
      <FadeIn
        style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 20 }}
        className="w-full md:w-[550px]"
      >
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
            src={thumbnailImg}
            alt="Watch video"
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

        {/* White quote card */}
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 16,
            padding: "32px 40px",
            display: "flex",
            flexDirection: "column",
            gap: 16,
          }}
        >
          <p
            style={{
              fontFamily: stix,
              fontWeight: 500,
              color: TEAL,
              fontSize: 22,
              lineHeight: 1.4,
              letterSpacing: "-0.4px",
              margin: 0,
            }}
          >
            &ldquo;It&rsquo;s not important that you get the products I&rsquo;m offering, but it&rsquo;s very important that you get the information I&rsquo;m sharing.&rdquo;
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              fontSize: 16,
              lineHeight: 1.4,
              margin: 0,
            }}
          >
            - Andrew Lessman, ProCaps Founder
          </p>
        </div>
      </FadeIn>

      {/* Left: headline + copy */}
      <FadeIn
        delay={150}
        style={{
          flex: 1,
          maxWidth: 730,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
        className="w-full"
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
          className="text-[36px] md:text-[48px] xl:text-[58px]"
        >
          The word spreads &mdash;{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>directly.</em>
        </h2>

        <TealLine width={50} />

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
          After enjoying almost six years of unparalleled success at QVC, Andrew moved to the Home Shopping Network (HSN) in November of 1996. The move to HSN coincided with the company&rsquo;s relocation from Santa Monica, California to a new state-of-the-art 125,000-square-foot facility in the high desert of Henderson, Nevada. The much larger facility and the desert&rsquo;s extremely low humidity allowed Andrew to make perfectly pure products he had not previously thought possible &mdash; dramatically diversifying his product line to meet a much wider range of customer needs.
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
          The move also afforded Andrew the opportunity to change his company&rsquo;s name to something more representative of what the company had become. So, in 1997, Andrew made a gradual change from The Winning Combination to a name that would better describe where customers could go to get the world&rsquo;s best vitamins &mdash; YourVitamins.
        </p>
      </FadeIn>
    </section>
  );
}
