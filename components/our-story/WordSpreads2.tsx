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
          Quite simply, Direct Response Marketing eliminates the middle-man and allows the consumer to go straight to the manufacturer in order to make a purchase, without the intermediate step of going to a store. It is simple, straightforward, 100% efficient and absolutely reliable. Andrew could, and still does, maintain complete control over the quality, safety, potency and storage of his products, while the customer controls every other aspect of the transaction.
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
          Andrew&rsquo;s earliest direct response advertisements were placed in leading magazines and newspapers, as well as on radio and television. These ads strictly adhered to Andrew&rsquo;s premise that, &ldquo;if you make the best products in the world, the strongest bridge between you and a new customer is education.&rdquo; The advertisements were information-rich with no hype or exaggerated claims — just straight science and straightforward facts. These ads were very well received, and the company began to grow rapidly as more and more people grew dissatisfied with ordinary retail supplements and sought a higher-quality alternative.
        </p>
      </FadeIn>
    </section>
  );
}
