"use client";

import { FadeIn } from "../quality/FadeIn";
import { TealLine, stix, inter, TEAL, DARK_TEAL, BG_CREAM } from "../quality/tokens";

export function ClosingSection() {
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
          maxWidth: 1384,
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
            color: DARK_TEAL,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          Changing times,
          <br />
          enduring values.
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
          WHAT SETS US APART
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 1000,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          ProCaps Laboratories is constantly changing for the better, but the most important things never change. That is why ProCaps Laboratories continues to bring customers 100% pure, additive-free supplements based on solid and reliable science. No hype. No spin. No deceptive marketing tactics. And we are always available to answer your questions. Unlike most direct marketers who outsource their call centers to other states &mdash; or even other countries &mdash; ProCaps Laboratories has an in-house call center staffed with well-trained, deeply informed professionals to answer all customer questions and process all customer requests.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 1000,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Since Andrew Lessman created his first supplement, ProCaps Laboratories has led the industry in research, development and innovation. Over the years, Andrew&rsquo;s formulas have evolved based on new advancements in science and on the changing needs of our customers. Yet Andrew&rsquo;s guiding principles continue to be the cornerstone of ProCaps Laboratories.
        </p>

        {/* Divider + mission statement */}
        <div style={{ width: 1, height: 56, backgroundColor: "rgba(0,146,150,0.35)", margin: "16px 0" }} />

        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
          }}
          className="text-sm md:text-[16px]"
        >
          THESE CORE BELIEFS CONTINUE TO DEFINE OUR MISSION TODAY:
        </p>

        <p
          style={{
            fontFamily: stix,
            fontWeight: 400,
            color: TEAL,
            lineHeight: 1.2,
            letterSpacing: "-1px",
            maxWidth: 1384,
            margin: 0,
            textWrap: "balance",
          }}
          className="text-[32px] md:text-[48px] xl:text-[58px]"
        >
          Enhance health naturally by sustainably and ethically creating the safest, purest and most effective nutritional supplements on earth.
        </p>

        <div style={{ height: 40 }} />
      </FadeIn>
    </section>
  );
}
