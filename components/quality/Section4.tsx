"use client";

import { FadeIn } from "./FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_CREAM, section4Image } from "./tokens";

export function Section4() {
  return (
    <section
      style={{
        backgroundColor: BG_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="pt-[60px] md:pt-[100px] xl:pt-[120px] pb-[40px] md:pb-[60px] xl:pb-[80px] px-5 md:px-10 xl:px-[40px]"
    >
      <FadeIn
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
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
          <em style={{ color: TEAL, fontStyle: "italic" }}>Formulation</em>
          <br className="md:hidden" />
          <span style={{ color: DARK_TEAL }}> without hype.</span>
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
          SCIENCE BEFORE MARKETING
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
          We do not formulate products based on trends, marketing opportunities, or exaggerated claims. Our formulas are based on scientific research and practical experience. We select ingredients for their relevance, compatibility, and effectiveness—not because they are popular or easy to sell.
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
          Whenever appropriate, we use bioactive forms of nutrients, and we prepare our ingredients as micro-granulated powders to support absorption and ease of digestion.
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
          There are no miracle cures—only thoughtful formulations designed to support your health as part of a broader wellness strategy.
        </p>
      </FadeIn>
    </section>
  );
}

export function Section4Image() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <img
        src={section4Image}
        alt="ProCaps Formulation"
        style={{
          width: "100%",
          aspectRatio: "1080 / 398",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}
