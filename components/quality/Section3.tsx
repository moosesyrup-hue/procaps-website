"use client";

import { FadeIn } from "./FadeIn";
import { BulletCheck, stix, inter, TEAL, DARK_TEAL, BG_MINT, BG_MINT_CARD } from "./tokens";

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
  border,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  bg: string;
  isRight?: boolean;
  border?: string;
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
        ...(border ? { border } : {}),
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
            {isRight ? (
              <BulletCheck />
            ) : (
              <div
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: "#C8272D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  marginTop: 2,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 2L8 8M8 2L2 8" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
            )}
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
            border="1px solid rgba(0, 146, 150, 0.15)"
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
