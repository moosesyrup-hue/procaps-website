"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL } from "../quality/tokens";

export function WordSpreads3() {
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Right: teal quote card */}
      <FadeIn
        style={{ flexShrink: 0 }}
        className="w-full md:w-[550px]"
      >
        <div
          style={{
            backgroundColor: TEAL,
            borderRadius: 20,
            padding: 60,
            display: "flex",
            flexDirection: "column",
            gap: 40,
          }}
        >
          <p
            style={{
              fontFamily: stix,
              fontWeight: 500,
              color: "white",
              fontSize: 40,
              lineHeight: 1.2,
              letterSpacing: "-1.08px",
              margin: 0,
            }}
          >
            &ldquo;People will listen to an honest, respectful presentation without sensationalism.&rdquo;
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: "white",
              fontSize: 18,
              lineHeight: 1.4,
              letterSpacing: "-0.2px",
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
          Direct to{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>television.</em>
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
          During the late 1980s, a new phenomenon in direct marketing began to attract America&rsquo;s attention: Television Home Shopping. TV retailing was in its infancy when QVC approached Andrew Lessman to suggest that he be the first to offer nutritional supplements on television. Andrew was initially reluctant &mdash; wary of the aggressive tendency of TV selling and the natural bias of television toward visual products like jewelry and electronics. But ultimately, Andrew elected to go on-air himself, without relying on the borrowed interest of a celebrity, and without adapting his presentation for TV&rsquo;s visual or &ldquo;entertainment&rdquo; requirements.
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
          Avoiding audacious showmanship and exhortation, his appearances remained heavily informative and education-based. The audience response far exceeded anyone&rsquo;s best expectations, confirming once again that people will listen to an honest, respectful presentation without sensationalism.
        </p>
      </FadeIn>
    </section>
  );
}
