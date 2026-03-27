"use client";

import { useState, useRef } from "react";
import { TEAL } from "./tokens";

export function PeekCarousel({ children }: { children: React.ReactNode[] }) {
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  function onScroll() {
    const el = trackRef.current;
    if (!el) return;
    const cardWidth = el.scrollWidth / children.length;
    setActive(Math.round(el.scrollLeft / cardWidth));
  }

  return (
    <div style={{ width: "100%" }}>
      <style>{`
        .snap-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .snap-carousel::-webkit-scrollbar { display: none; }
        .snap-card {
          scroll-snap-align: center;
          flex-shrink: 0;
        }
      `}</style>
      <div
        ref={trackRef}
        className="snap-carousel"
        onScroll={onScroll}
        style={{ gap: 12, paddingLeft: 20, paddingRight: 20 }}
      >
        {children.map((child, i) => (
          <div
            key={i}
            className="snap-card"
            style={{ width: "82vw", maxWidth: 360 }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* Dots */}
      <div style={{ display: "flex", justifyContent: "center", gap: 6, marginTop: 20 }}>
        {children.map((_, i) => (
          <div
            key={i}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              backgroundColor: i === active ? TEAL : "rgba(0,146,150,0.25)",
              transition: "width 0.3s ease, background-color 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
