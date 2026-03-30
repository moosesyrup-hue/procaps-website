"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL } from "../quality/tokens";


export function WordSpreads5() {
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
      {/* Left: image */}
      <FadeIn
        style={{ flexShrink: 0 }}
        className="w-full md:w-[550px]"
      >
        <img
          src="/nuonce-max.png"
          alt="Nuonce Max multivitamin"
          style={{
            width: "100%",
            borderRadius: 20,
            display: "block",
          }}
        />
      </FadeIn>

      {/* Right: headline + copy */}
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
          Always{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>improving.</em>
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
          Today, Andrew is still passionate about nurturing and growing the company he founded in 1979 as well as providing the highest-quality, most effective supplements available. Based on cutting-edge nutritional science, new products continue to be formulated to enhance health, and new technology is being employed to deliver these nutrients more efficiently. To more accurately reflect Andrew&rsquo;s dedication to improving health through the finest scientifically-supported supplements, Your Vitamins has now become ProCaps Labs.
        </p>
      </FadeIn>
    </section>
  );
}
