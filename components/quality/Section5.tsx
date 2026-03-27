"use client";

import { FadeIn } from "./FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, rightImg } from "./tokens";

export function Section5() {
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
          Carefully selected.{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>Rigorously</em>
          {" "}verified.
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
          QUALITY BEGINS AT THE SOURCE
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
          Quality begins long before manufacturing. We source our ingredients from established, internationally recognized suppliers who meet strict standards for identity, purity, and consistency.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Every ingredient:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Arrives with a Certificate of Analysis",
            "Undergoes independent third-party testing",
            "Is verified again in our own state-of-the-art laboratory",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: TEAL, flexShrink: 0, marginTop: 8 }} />
              <span
                style={{ fontFamily: inter, fontWeight: 400, color: DARK_TEAL, lineHeight: 1.4, letterSpacing: "-0.4px" }}
                className="text-base md:text-[20px]"
              >
                {item}
              </span>
            </div>
          ))}
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
          This multi-step process ensures that every ingredient meets our standards before it is ever used. Most companies would consider this sufficient. We consider it the minimum.
        </p>
      </FadeIn>

      {/* Right */}
      <FadeIn delay={150} style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <img
          src={rightImg}
          alt="Ingredient selection"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </FadeIn>
    </section>
  );
}
