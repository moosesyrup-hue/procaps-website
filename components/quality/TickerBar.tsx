"use client";

import { inter, TEAL, BG_MINT } from "./tokens";

const BASE_TICKER_ITEMS = ["Dual Tested", "Pure Ingredients", "Additive-Free"];

export function TickerBar() {
  // 12 copies → animate -8.333% (= 1/12 of track = exactly 1 set's width)
  // Track is ~12,000px+ so it fills any screen throughout the full cycle
  const COPIES = 12;
  const track = Array.from({ length: COPIES }, () => BASE_TICKER_ITEMS).flat();

  return (
    <section
      style={{
        backgroundColor: BG_MINT,
        paddingTop: 60,
        paddingBottom: 60,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes ticker-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-8.3333%); }
        }
        .ticker-track {
          animation: ticker-scroll 18s linear infinite;
          will-change: transform;
        }
      `}</style>

      <div
        className="ticker-track"
        style={{
          display: "flex",
          alignItems: "center",
          width: "max-content",
        }}
      >
        {track.map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
            <span
              style={{
                fontFamily: inter,
                fontSize: 24,
                fontWeight: 500,
                color: TEAL,
                letterSpacing: "-0.24px",
                whiteSpace: "nowrap",
                paddingLeft: 40,
                paddingRight: 40,
              }}
            >
              {item}
            </span>
            <div
              style={{
                width: 94,
                height: 1,
                backgroundColor: TEAL,
                opacity: 0.45,
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
