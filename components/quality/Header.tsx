"use client";

import { Search, Heart, User, ShoppingCart, Menu } from "lucide-react";
import { inter, stix, TEAL } from "./tokens";

export function Header() {
  const iconStyle: React.CSSProperties = {
    width: 26,
    height: 26,
    color: "white",
    cursor: "pointer",
    flexShrink: 0,
  };

  return (
    <header
      style={{
        backgroundColor: TEAL,
        position: "relative",
        zIndex: 50,
        display: "flex",
        flexDirection: "column",
        gap: 15,
        paddingTop: 15,
        paddingBottom: 15,
      }}
      className="px-5 md:px-[40px]"
    >
      {/* ── Announcement bar + separator ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 15 }}>
        {/* Content row — centered */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
          <img
            src="https://www.figma.com/api/mcp/asset/2f870d19-e5a7-468f-b5b5-a96f3b4b72f9"
            alt=""
            style={{ width: 20, height: 20, objectFit: "contain", flexShrink: 0 }}
          />
          <p
            style={{
              fontFamily: inter,
              fontSize: 14,
              fontWeight: 400,
              color: "white",
              margin: 0,
              lineHeight: "24px",
              whiteSpace: "nowrap",
            }}
          >
            FREE ground shipping on orders over $25&nbsp;&nbsp;-&nbsp;&nbsp;
            <span style={{ textDecoration: "underline", cursor: "pointer" }}>Details</span>
          </p>
        </div>

        {/* Separator line */}
        <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.3)" }} />
      </div>

      {/* ── Nav row ── */}
      <div style={{ height: 62, position: "relative" }}>

        {/* Left: hamburger (mobile) / nav links (desktop) */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          {/* Hamburger — mobile only */}
          <Menu style={iconStyle} strokeWidth={1.5} className="md:hidden" />

          {/* Nav links — desktop only */}
          {["SHOP", "QUALITY", "OUR STORY", "SPECIALS"].map((link) => (
            <a
              key={link}
              href={link === "QUALITY" ? "/quality" : link === "OUR STORY" ? "/our-story" : "#"}
              style={{
                fontFamily: inter,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "1.6px",
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
              className="hidden md:block"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Center: ProCaps logo */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <img
            src="https://www.figma.com/api/mcp/asset/ba809479-c059-4024-9922-9defacfcce59"
            alt="ProCaps"
            style={{ width: 109, height: 40, objectFit: "contain", display: "block" }}
          />
        </div>

        {/* Right: icons */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            alignItems: "center",
            gap: 30,
          }}
        >
          <Search style={iconStyle} strokeWidth={1.5} />
          <Heart style={iconStyle} strokeWidth={1.5} className="hidden md:block" />
          <User style={iconStyle} strokeWidth={1.5} className="hidden md:block" />
          <ShoppingCart style={iconStyle} strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}
