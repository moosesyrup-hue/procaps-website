"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_TEAL_LIGHT } from "../quality/tokens";

export function WordSpreads6() {
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
      {/* Right: image + quote card */}
      <FadeIn
        style={{ flexShrink: 0, display: "flex", flexDirection: "column", gap: 20 }}
        className="w-full md:w-[550px]"
      >
        <img
          src="/vitamin-angels-mother.png"
          alt="Mother and child"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 20,
            objectFit: "cover",
            display: "block",
          }}
        />

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
            &ldquo;Thank you for helping the Andrew Lessman Foundation deliver over <span style={{ color: DARK_TEAL }}>70,000,000 one-month supplies of donated prenatal vitamins</span>{" "}to women around the world. Vitamin Angels, our partners, and I sincerely thank and salute you!&rdquo;
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

      {/* Left: logo + headline + copy */}
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
        <img
          src="/procapsvitaminangels.svg"
          alt="ProCaps + Vitamin Angels"
          style={{ height: 40, width: "auto", display: "block", alignSelf: "flex-start" }}
        />

        <TealLine width={50} />

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
          <em style={{ color: TEAL, fontStyle: "italic" }}>Over 2 billion capsules &mdash;</em>
          <br />
          70,000,000 one-month supplies donated.
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
          We annually manufacture and donate hundreds of millions of prenatal vitamins to the nonprofit Vitamin Angels, helping ensure these supplements reach pregnant women worldwide. In fact, about 20% of these donations support mothers and babies here in the United States.
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
          No supplement has a greater impact than a prenatal vitamin in the hands of a nutritionally challenged expectant mother. While many in the United States benefit from nourishing food and prenatal care, studies show that in developing regions &mdash; and even underserved communities here at home &mdash; a prenatal vitamin can make an enormous, often life-saving difference. In some cases, it may be the only consistent care a mother and her child receive, with research consistently confirming its profound impact on their health and survival.
        </p>
      </FadeIn>
    </section>
  );
}
