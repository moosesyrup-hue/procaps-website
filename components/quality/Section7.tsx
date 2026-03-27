"use client";

import { FadeIn } from "./FadeIn";
import { TealLine, BulletCheck, stix, inter, TEAL, DARK_TEAL, right1Img } from "./tokens";

export function Section7() {
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col-reverse md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left: Image */}
      <FadeIn style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <img
          src={right1Img}
          alt="ProCaps capsules"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </FadeIn>

      {/* Right: Content */}
      <FadeIn
        delay={150}
        style={{
          flex: 1,
          maxWidth: 475,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        className="w-full md:max-w-[475px]"
      >
        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
            fontSize: 20,
          }}
          className="text-sm md:text-[20px]"
        >
          THE CAPSULE ADVANTAGE
        </p>

        <TealLine width={50} />

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
          Why we will{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>never</em>
          {" "}make tablets.
        </h2>

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
          Tablets exist for one reason: they are easier and less expensive to manufacture. But tablets require binders, glues, lubricants and coatings—ingredients that serve the manufacturing process, not your health. That is why we do not make tablets.
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
          Instead, we use capsules filled with ultra-fine, additive-free powders. This allows us to deliver nutrients in their intended form without unnecessary ingredients.
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
          Our approach is designed to:
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            "Preserve the integrity of the ingredients",
            "Avoid unnecessary additives",
            "Support efficient breakdown and absorption",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
              <BulletCheck />
              <span
                style={{ fontFamily: inter, fontWeight: 400, color: DARK_TEAL, lineHeight: 1.4, letterSpacing: "-0.4px" }}
                className="text-base md:text-[20px]"
              >
                {item}
              </span>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
