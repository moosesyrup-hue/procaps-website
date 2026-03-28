"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_TEAL_LIGHT } from "../quality/tokens";

export function WordSpreads2() {
  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row-reverse px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
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
            &ldquo;If you make the best products in the world, the strongest bridge between you and a new customer is education.&rdquo;
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
          Direct. Informed.{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>Trusted.</em>
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
          By the mid-1980s, Andrew Lessman and The Winning Combination (which later became known as YourVitamins, and ultimately ProCaps Laboratories) were confronted with a formidable challenge: how to bring the product line to an increasingly widening and receptive market without diminishing the line&rsquo;s unparalleled quality. Andrew knew quality could not be maintained if the products were permitted to languish on store shelves or sit in a huge mass-market warehouse. Andrew had to find a way to spread the word about his products while retaining direct control over how they were handled and stored. It was the only way he could truly assure the quality and potency of his products.
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
          Andrew found that multilevel marketing was not an option. Individual distributors had neither the expertise nor the training to adequately represent any product in which hard science plays such an integral role, nor did they have the facilities to properly store the product. That left him with one alternative — Direct Response Marketing.
        </p>
      </FadeIn>
    </section>
  );
}
