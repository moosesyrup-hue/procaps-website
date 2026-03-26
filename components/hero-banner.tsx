"use client";

import { useState } from "react";
import { ShoppingCart, User, Play, X, ChevronRight } from "lucide-react";

const PROCAPS_RED = "#C8272D";
const PROCAPS_CREAM = "#F7F2E8";
const PROCAPS_CREAM_DARK = "#EDE7D6";
const PROCAPS_DARK = "#1A1A1A";

// ─── Video Modal ─────────────────────────────────────────────────────────────
function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Placeholder video frame */}
        <div
          className="aspect-video w-full flex flex-col items-center justify-center gap-4"
          style={{ backgroundColor: "#111" }}
        >
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: PROCAPS_RED }}
          >
            <Play className="w-7 h-7 text-white fill-white ml-1" />
          </div>
          <p className="text-white/60 text-sm font-medium tracking-wide" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Andrew Lessman — Why Creatine Works
          </p>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors backdrop-blur-sm"
        >
          <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
}

// ─── Announcement Bar ─────────────────────────────────────────────────────────
function AnnouncementBar() {
  return (
    <div
      className="w-full py-2.5 px-4 text-center text-xs md:text-sm font-medium tracking-wide text-white"
      style={{ backgroundColor: PROCAPS_RED, fontFamily: "var(--font-inter), sans-serif" }}
    >
      New customers get 20% off their first order
    </div>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function Navigation() {
  return (
    <nav
      className="w-full px-6 md:px-10 lg:px-16 py-4 flex items-center justify-between"
      style={{ backgroundColor: PROCAPS_CREAM }}
    >
      {/* Tagline — left */}
      <p
        className="hidden md:block text-xs italic"
        style={{ color: "#555", fontFamily: "var(--font-stix), Georgia, serif" }}
      >
        The Supplement Brand Trusted For Over 45 Years.
      </p>

      {/* Logo — center on mobile, center on desktop */}
      <div className="flex flex-col items-center">
        <span
          className="text-sm italic font-medium tracking-wide"
          style={{ color: PROCAPS_DARK, fontFamily: "var(--font-stix), Georgia, serif" }}
        >
          Andrew Lessman
        </span>
        <div
          className="mt-0.5 px-3 py-1 rounded text-white text-xs font-bold tracking-widest uppercase"
          style={{ backgroundColor: PROCAPS_RED, fontFamily: "var(--font-inter), sans-serif", letterSpacing: "0.2em" }}
        >
          ProCaps
        </div>
      </div>

      {/* Icons — right */}
      <div className="flex items-center gap-4">
        <button className="hover:opacity-70 transition-opacity">
          <User className="w-5 h-5" style={{ color: PROCAPS_DARK }} />
        </button>
        <button className="hover:opacity-70 transition-opacity">
          <ShoppingCart className="w-5 h-5" style={{ color: PROCAPS_DARK }} />
        </button>
      </div>
    </nav>
  );
}

// ─── Floating Video Card ──────────────────────────────────────────────────────
function VideoCard({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:shadow-lg"
      style={{
        backgroundColor: "rgba(255,255,255,0.9)",
        border: "1px solid rgba(200,39,45,0.15)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: "#1a1a1a" }}
        >
          {/* Andrew silhouette placeholder */}
          <div className="w-full h-full flex items-center justify-center opacity-40">
            <User className="w-8 h-8 text-white" />
          </div>
        </div>
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-200"
            style={{ backgroundColor: PROCAPS_RED }}
          >
            <Play className="w-3 h-3 text-white fill-white ml-0.5" />
          </div>
        </div>
        {/* Duration badge */}
        <div
          className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded text-white text-[9px] font-semibold"
          style={{ backgroundColor: "rgba(0,0,0,0.7)", fontFamily: "var(--font-inter), sans-serif" }}
        >
          2:47
        </div>
      </div>

      {/* Text */}
      <div className="text-left">
        <p
          className="text-xs font-semibold leading-tight"
          style={{ color: PROCAPS_DARK, fontFamily: "var(--font-inter), sans-serif" }}
        >
          Watch Andrew explain
        </p>
        <p
          className="text-xs leading-tight mt-0.5"
          style={{ color: "#666", fontFamily: "var(--font-inter), sans-serif" }}
        >
          why creatine works
        </p>
      </div>

      {/* Arrow */}
      <ChevronRight
        className="w-4 h-4 ml-1 shrink-0 group-hover:translate-x-0.5 transition-transform duration-200"
        style={{ color: PROCAPS_RED }}
      />
    </button>
  );
}

// ─── Hero Banner — Version B ──────────────────────────────────────────────────
export function HeroBanner() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <>
      <div style={{ backgroundColor: PROCAPS_CREAM }}>
        <AnnouncementBar />
        <Navigation />

        {/* Divider */}
        <div style={{ height: "1px", backgroundColor: PROCAPS_CREAM_DARK }} />

        {/* ── Hero ── */}
        <section className="relative w-full overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

            {/* ── Desktop layout ── */}
            <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-[1fr_1fr] items-center min-h-[520px] lg:min-h-[600px] gap-8 lg:gap-12 py-10 lg:py-14">

              {/* Left — Content */}
              <div className="flex flex-col justify-center gap-5 lg:gap-6 relative z-10">

                {/* Headline */}
                <h1
                  className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight"
                  style={{
                    color: PROCAPS_DARK,
                    fontFamily: "var(--font-stix), Georgia, serif",
                  }}
                >
                  Creatine: the molecule that{" "}
                  <em
                    className="not-italic"
                    style={{ color: PROCAPS_RED, fontStyle: "italic" }}
                  >
                    powers
                  </em>{" "}
                  your cellular energy.
                </h1>

                {/* Sub-copy */}
                <p
                  className="text-base lg:text-lg"
                  style={{
                    color: "#555",
                    fontFamily: "var(--font-inter), sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Additive-free supplements. Since 1979.
                </p>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <button
                    className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-95"
                    style={{
                      backgroundColor: PROCAPS_RED,
                      fontFamily: "var(--font-inter), sans-serif",
                      boxShadow: "0 2px 12px rgba(200,39,45,0.35)",
                    }}
                  >
                    Choose your serving size
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

                {/* Floating Video Card — positioned below CTA on desktop */}
                <div className="mt-2">
                  <VideoCard onClick={() => setVideoOpen(true)} />
                </div>
              </div>

              {/* Right — Product image + floating video card on mobile */}
              <div className="relative flex items-center justify-center">

                {/* Product image placeholder */}
                <div
                  className="relative w-full max-w-[420px] aspect-[4/4.5] rounded-2xl flex items-center justify-center overflow-hidden"
                  style={{
                    background: `radial-gradient(ellipse at center, ${PROCAPS_CREAM_DARK} 0%, ${PROCAPS_CREAM} 70%)`,
                  }}
                >
                  {/* Molecule decoration — background */}
                  <div
                    className="absolute -top-6 -right-6 w-32 h-32 rounded-full opacity-10"
                    style={{ backgroundColor: PROCAPS_RED }}
                  />
                  <div
                    className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full opacity-10"
                    style={{ backgroundColor: PROCAPS_RED }}
                  />

                  {/* Product placeholder */}
                  <div className="flex flex-col items-center gap-3 px-8 text-center">
                    <div
                      className="w-32 h-36 rounded-xl flex flex-col items-center justify-center shadow-xl"
                      style={{
                        background: `linear-gradient(145deg, ${PROCAPS_RED}, #9B1B20)`,
                      }}
                    >
                      <p className="text-white text-xs font-medium tracking-widest uppercase opacity-80" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Andrew Lessman</p>
                      <p className="text-white text-lg font-bold mt-1" style={{ fontFamily: "var(--font-stix), Georgia, serif" }}>CREATINE</p>
                      <p className="text-white text-2xl font-bold leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>5000</p>
                      <p className="text-white/70 text-[10px] mt-1 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>MICRONIZED</p>
                    </div>
                    <p
                      className="text-xs italic opacity-50"
                      style={{ color: PROCAPS_DARK, fontFamily: "var(--font-stix), Georgia, serif" }}
                    >
                      Product image placeholder
                    </p>
                  </div>

                  {/* 20% OFF badge */}
                  <div
                    className="absolute top-6 right-6 w-14 h-14 rounded-full flex flex-col items-center justify-center shadow-lg"
                    style={{ backgroundColor: PROCAPS_RED }}
                  >
                    <span className="text-white text-[10px] font-medium leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>NEW</span>
                    <span className="text-white text-sm font-bold leading-none mt-0.5" style={{ fontFamily: "var(--font-inter), sans-serif" }}>20%</span>
                    <span className="text-white text-[9px] font-medium leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>OFF</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ── Mobile layout ── */}
            <div className="md:hidden flex flex-col py-8 gap-6">

              {/* Headline */}
              <h1
                className="text-3xl font-bold leading-[1.15] tracking-tight"
                style={{
                  color: PROCAPS_DARK,
                  fontFamily: "var(--font-stix), Georgia, serif",
                }}
              >
                Creatine: the molecule that{" "}
                <em style={{ color: PROCAPS_RED, fontStyle: "italic" }}>powers</em>{" "}
                your cellular energy.
              </h1>

              {/* Product image — mobile, full width */}
              <div
                className="relative w-full aspect-[4/3] rounded-2xl flex items-center justify-center overflow-hidden"
                style={{
                  background: `radial-gradient(ellipse at center, ${PROCAPS_CREAM_DARK} 0%, ${PROCAPS_CREAM} 70%)`,
                }}
              >
                <div
                  className="w-24 h-28 rounded-xl flex flex-col items-center justify-center shadow-xl"
                  style={{
                    background: `linear-gradient(145deg, ${PROCAPS_RED}, #9B1B20)`,
                  }}
                >
                  <p className="text-white text-[9px] font-medium tracking-widest uppercase opacity-80" style={{ fontFamily: "var(--font-inter), sans-serif" }}>Andrew Lessman</p>
                  <p className="text-white text-base font-bold mt-1" style={{ fontFamily: "var(--font-stix), Georgia, serif" }}>CREATINE</p>
                  <p className="text-white text-xl font-bold leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>5000</p>
                  <p className="text-white/70 text-[9px] mt-1 tracking-wider" style={{ fontFamily: "var(--font-inter), sans-serif" }}>MICRONIZED</p>
                </div>

                {/* 20% OFF badge */}
                <div
                  className="absolute top-4 right-4 w-12 h-12 rounded-full flex flex-col items-center justify-center shadow-lg"
                  style={{ backgroundColor: PROCAPS_RED }}
                >
                  <span className="text-white text-[9px] font-medium leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>20%</span>
                  <span className="text-white text-[9px] font-medium leading-none" style={{ fontFamily: "var(--font-inter), sans-serif" }}>OFF</span>
                </div>
              </div>

              {/* Sub-copy */}
              <p
                className="text-sm"
                style={{ color: "#555", fontFamily: "var(--font-inter), sans-serif" }}
              >
                Additive-free supplements. Since 1979.
              </p>

              {/* CTA */}
              <button
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold text-white transition-all duration-200 active:scale-95"
                style={{
                  backgroundColor: PROCAPS_RED,
                  fontFamily: "var(--font-inter), sans-serif",
                  boxShadow: "0 2px 12px rgba(200,39,45,0.35)",
                }}
              >
                Choose your serving size
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Video card — mobile, full width feel */}
              <VideoCard onClick={() => setVideoOpen(true)} />
            </div>
          </div>

          {/* Subtle bottom border */}
          <div style={{ height: "1px", backgroundColor: PROCAPS_CREAM_DARK }} />
        </section>
      </div>

      {/* Video modal */}
      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </>
  );
}
