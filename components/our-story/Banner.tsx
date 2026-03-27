"use client";

import { useState, useEffect } from "react";
import { stix, inter, AQUA, pillLargeImg } from "../quality/tokens";

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
      className="min-h-[600px] md:min-h-[860px] xl:h-[980px] px-5 md:px-10 pt-[40px] xl:pt-[58px]"
    >
      {/* Vertical decorative line */}
      <div style={{ height: 111, marginBottom: 48, flexShrink: 0, display: "flex", alignItems: "flex-start" }}>
        <div
          style={{
            width: 1,
            backgroundColor: "rgba(255,255,255,0.5)",
            height: mounted ? 111 : 0,
            opacity: mounted ? 1 : 0,
            transition: "height 0.6s ease 0ms, opacity 0.6s ease 0ms",
          }}
        />
      </div>

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
        <span style={{ fontWeight: 400 }}>Made </span>
        <em style={{
          color: mounted ? AQUA : "white",
          fontStyle: "italic",
          fontWeight: 400,
          transition: "color 0.8s ease 900ms",
        }}>uniquely.</em>
        <br />
        <span style={{ fontWeight: 400 }}>For a reason.</span>
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
          lineHeight: 1.4,
          margin: 0,
          marginBottom: 80,
          textWrap: "pretty",
          ...entrance(600),
        }}
        className="text-base md:text-[20px]"
      >
        ProCaps Laboratories is committed to producing the highest-quality, additive-free supplements grounded in science and made with integrity. From our earliest formulations to today&rsquo;s advanced products, we&rsquo;ve never compromised on purity, potency, or transparency — because your health deserves nothing less.
        <br /><br />
        Guided by our founder, Andrew Lessman, we continue to innovate, educate and inspire a healthier world through uncompromising quality and ethical practices.
      </p>

      {/* Large pill image — desktop */}
      <div
        className="hidden xl:block absolute pointer-events-none"
        style={{
          bottom: -243,
          left: "50%",
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
          ...entrance(900, { transform: `translateX(-50%) translateY(${mounted ? "-35%" : "calc(-35% + 16px)"})` }),
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
