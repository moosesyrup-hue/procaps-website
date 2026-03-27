"use client";

import { FadeIn } from "./FadeIn";
import { stix, inter, TEAL, DARK_TEAL, BG_MINT, BG_MINT_CARD } from "./tokens";

const typicalBullets = [
  "Manufactured by third parties",
  "Often include binders, fillers, lubricants and coatings",
  "Hard tablets require additives to maintain structure",
  "Limited control over production and quality",
];

const procapsBullets = [
  "We manufacture what we distribute",
  "No unnecessary additives, binders or fillers",
  "Capsule-based delivery using additive-free powders",
  "Complete control over every step of production",
];

function ComparisonCard({
  title,
  subtitle,
  bullets,
  bg,
  isRight,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  bg: string;
  isRight?: boolean;
}) {
  return (
    <div
      style={{
        backgroundColor: bg,
        borderRadius: 20,
        flex: 1,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: 40,
      }}
      className="px-8 py-12 md:px-[60px] md:py-[80px]"
    >
      <div>
        <h3
          style={{
            fontFamily: stix,
            fontSize: 34,
            fontWeight: 500,
            color: DARK_TEAL,
            letterSpacing: "-0.68px",
            margin: 0,
            marginBottom: 8,
          }}
          className="text-2xl md:text-[34px]"
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: inter,
            fontSize: 20,
            fontWeight: 400,
            color: TEAL,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          {subtitle}
        </p>
      </div>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: TEAL, opacity: 0.3 }} />

      {/* Bullets */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {bullets.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
            <div
              style={{
                width: 22,
                height: 22,
                borderRadius: "50%",
                backgroundColor: isRight ? TEAL : "#C8272D",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 2,
              }}
            >
              <span
                style={{
                  color: "white",
                  fontSize: 11,
                  fontWeight: 700,
                  fontFamily: inter,
                  lineHeight: 1,
                }}
              >
                {isRight ? "✓" : "✕"}
              </span>
            </div>
            <span
              style={{
                fontFamily: inter,
                fontWeight: 400,
                color: DARK_TEAL,
                lineHeight: 1.4,
              }}
              className="text-base md:text-[20px]"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Section3() {
  return (
    <section
      style={{
        background: `linear-gradient(to bottom, white, ${BG_MINT})`,
      }}
      className="px-5 md:px-10 xl:px-[40px] py-[40px] md:py-[60px]"
    >
      <div
        className="flex-col md:flex-row"
        style={{
          display: "flex",
          gap: 20,
          maxWidth: 1384,
          margin: "0 auto",
        }}
      >
        <FadeIn style={{ flex: 1, alignSelf: "stretch", display: "flex" }}>
          <ComparisonCard
            title="Typical brands"
            subtitle="Store Supplements"
            bullets={typicalBullets}
            bg="white"
            isRight={false}
          />
        </FadeIn>
        <FadeIn delay={120} style={{ flex: 1, alignSelf: "stretch", display: "flex" }}>
          <ComparisonCard
            title="ProCaps Laboratories"
            subtitle="Our Supplements"
            bullets={procapsBullets}
            bg={BG_MINT_CARD}
            isRight={true}
          />
        </FadeIn>
      </div>
    </section>
  );
}
