"use client";

import { useState, useEffect } from "react";
import { stix, inter, AQUA, pillLargeImg } from "./tokens";

export function Banner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  function entrance(delay: number, extraStyle?: React.CSSProperties): React.CSSProperties {
    return {
      opacity: mounted ? 1 : 0,
      transform: mounted ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      ...extraStyle,
    };
  }

  return (
    <section
      style={{
        background: `linear-gradient(to bottom, #009296, #00c2bd)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        position: "relative",
        overflow: "visible",
        zIndex: 2,
      }}
      className="min-h-[500px] md:min-h-[700px] xl:h-[875px] px-5 md:px-10 pt-[40px] xl:pt-[58px]"
    >
      {/* Vertical decorative line — draws downward */}
      <div
        style={{
          width: 1,
          backgroundColor: "rgba(255,255,255,0.5)",
          marginBottom: 48,
          flexShrink: 0,
          height: mounted ? 111 : 0,
          opacity: mounted ? 1 : 0,
          transition: "height 0.6s ease 0ms, opacity 0.6s ease 0ms",
        }}
      />

      {/* Headline */}
      <h1
        style={{
          fontFamily: stix,
          color: "white",
          textAlign: "center",
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          margin: 0,
          marginBottom: 40,
          ...entrance(350),
        }}
        className="text-[56px] md:text-[80px] xl:text-[120px]"
      >
        <span style={{ fontWeight: 400 }}>Quality </span>
        <em style={{ color: AQUA, fontStyle: "italic", fontWeight: 400 }}>without</em>
        <br />
        <span style={{ fontWeight: 400 }}>compromise.</span>
      </h1>

      {/* Sub-paragraph */}
      <p
        style={{
          fontFamily: inter,
          fontWeight: 400,
          color: "white",
          maxWidth: 719,
          textAlign: "center",
          letterSpacing: "-0.4px",
          lineHeight: "28px",
          margin: 0,
          marginBottom: 80,
          ...entrance(600),
        }}
        className="text-base md:text-[20px]"
      >
        At ProCaps Laboratories, quality isn&rsquo;t a marketing claim — it&rsquo;s something we control. Unlike most supplement companies, we make our own products. We don&rsquo;t rely on anonymous manufacturers focused on cost over quality. From ingredient selection to finished product, every step follows one standard: creating supplements that are pure, effective, and worthy of your trust.
      </p>

      {/* Large pill image — desktop: exact Figma crop */}
      <div
        className="hidden xl:block absolute pointer-events-none"
        style={{
          bottom: -243,
          left: "50%",
          transform: "translateX(-50%)",
          width: 1060,
          height: 472,
          overflow: "hidden",
          zIndex: 10,
          ...entrance(900, { transform: `translateX(-50%) translateY(${mounted ? "0" : "16px"})` }),
        }}
      >
        <img
          src={pillLargeImg}
          alt=""
          style={{
            position: "absolute",
            width: 1182,
            height: 624,
            bottom: -155,
            right: -71,
            maxWidth: "none",
          }}
        />
      </div>

      {/* Large pill image — mobile & tablet */}
      <div
        className="xl:hidden absolute pointer-events-none"
        style={{
          top: "100%",
          left: "50%",
          width: "90%",
          maxWidth: 680,
          zIndex: 10,
          ...entrance(900, { transform: `translateX(-50%) translateY(${mounted ? "-35%" : "calc(-35% + 16px)"})`  }),
        }}
      >
        <img
          src={pillLargeImg}
          alt=""
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>
    </section>
  );
}
