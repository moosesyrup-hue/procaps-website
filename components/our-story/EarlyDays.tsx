"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_TEAL_LIGHT } from "../quality/tokens";

const rightImg = "https://www.figma.com/api/mcp/asset/00871a39-6ada-4ab7-88ae-cee96379d74f";

export function EarlyDays() {
  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left: headline + copy */}
      <FadeIn
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
          The{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>early</em>
          {" "}days.
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
          Long before ProCaps Laboratories existed, Andrew Lessman had a vision — to help educate the medical profession so, instead of merely treating disease, they would work to enhance health. In 1979, just as consumers were beginning to appreciate the crucial role of vitamins in the quality of life, Andrew — an avid athlete, biochemist and law student — was asked to give a series of seminars for doctors and other health professionals.
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
          These seminars focused on the exciting biochemical research being published on the benefits of supplements. Although Andrew had not begun making his own supplements, he quickly realized (as did those attending his seminars) that most of the products available were of low quality and made without regard to the latest scientific research. Therefore, Andrew used his background in biochemistry to create vitamins for his own needs as well as those of fellow athletes, friends and the health professionals he had met during the seminars.
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
          Just as they are today, the vitamins Andrew created in 1979 were perfectly balanced with exceptionally active components — and they were the only 100% pure, additive-free vitamins in the world. Andrew also achieved another goal — to make vitamins so gentle to the digestive system they would not cause stomach upset. Over the next 10 years, interest in Andrew&rsquo;s supplements became so widespread that he closed his successful law practice. Committing himself exclusively to the production of his vitamins, he named his new company The Winning Combination. From 1979 until the early 1990s, The Winning Combination&rsquo;s primary clients were — as the name suggests — elite athletes, celebrities, and professionals in the fields of fitness and medicine.
        </p>
      </FadeIn>

      {/* Right: image */}
      <FadeIn
        delay={150}
        style={{ flexShrink: 0 }}
        className="w-full md:w-[550px]"
      >
        <img
          src={rightImg}
          alt="Andrew Lessman early days"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
            maxWidth: 550,
          }}
        />
      </FadeIn>
    </section>
  );
}
