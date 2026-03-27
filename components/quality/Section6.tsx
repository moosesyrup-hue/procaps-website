"use client";

import { FadeIn } from "./FadeIn";
import { stix, inter, DARK_TEAL, BG_TEAL_LIGHT } from "./tokens";

export function Section6() {
  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      className="px-5 md:px-20 xl:px-[240px] py-[80px] md:py-[140px] xl:py-[220px]"
    >
      <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <blockquote
          style={{
            fontFamily: stix,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.5,
            letterSpacing: "-0.72px",
            margin: 0,
            marginBottom: 24,
            maxWidth: 900,
            textWrap: "balance",
          }}
          className="text-[22px] md:text-[28px] xl:text-[36px]"
        >
          &ldquo;We will never compromise on ingredient quality. Your health depends on it.&rdquo;
        </blockquote>
        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          - Andrew Lessman, Founder
        </p>
      </FadeIn>
    </section>
  );
}
