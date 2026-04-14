"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import {
  inter, stix,
  TEAL, DARK_TEAL,
  TRACKING_HEADLINE, LEADING_TIGHT, LEADING_BODY, WEIGHT_HEADLINE, WEIGHT_BODY,
  CONTENT_MAX_W,
  TEAL_DEEP,
  pillButtonBase,
} from "./tokens";

// ─── Constants ────────────────────────────────────────────────────────────────
const AUTO_MS = 5000;

// ─── Types ────────────────────────────────────────────────────────────────────
type Layout = "center" | "left";

// ─── Slide data ───────────────────────────────────────────────────────────────
// Desktop  : 3840 × 1660px (2×) — landscape, image drives container height
// Tablet   : 1536 × 1400px (2×) — squarish, drop in when ready
// Mobile   : 828  × 1600px (2×) — portrait, fills full viewport height
//
// All three breakpoints fall back to desktop until you provide the alternate crops.
const SLIDES = [
  {
    id: 0,
    layout: "center" as Layout,
    headlineParts: { before: "The supplement brand ", accent: "trusted", after: " for over 45 years." },
    singleLine: false, // "before" breaks onto its own line at sm+
    body: "Since 1979. Unsurpassed Purity, Quality and Efficacy.",
    cta: "OUR STORY",
    ctaHref: "/our-story",
    desktop: "/hero-1-desktop.jpg",
    tablet:  "/hero-1-tablet.jpg",
    mobile:  "/hero-1-mobile.jpg",
  },
  {
    id: 2,
    layout: "left" as Layout,
    headlineParts: { before: "No added fillers, ", accent: "ever.", after: "" },
    singleLine: true,
    body: "Only the purest nutrients, with no binders, fillers, or additives.",
    cta: "LEARN MORE",
    ctaHref: "/quality",
    desktop: "/hero-5-desktop.jpg",
    tablet:  "/hero-5-tablet.jpg",
    mobile:  "/hero-5-mobile.jpg",
  },
  {
    id: 5,
    layout: "center" as Layout,
    headlineParts: { before: "Science-driven ", accent: "absorption.", after: "" },
    singleLine: true,
    body: <>Bioactive and micro-granulated ingredients, thoughtfully formulated<br />to support optimal absorption and digestive comfort.</>,
    cta: "LEARN MORE",
    ctaHref: "/quality",
    desktop: "/hero-3-desktop.jpg",
    tablet:  "/hero-3-tablet.jpg",
    mobile:  "/hero-3-mobile.jpg",
  },
];

type Slide = (typeof SLIDES)[number];

// ─── SlideImage ───────────────────────────────────────────────────────────────
// cover=false (default) → width:100% height:auto — image drives its own height
// cover=true            → width:100% height:100% objectFit:cover — fills parent
function SlideImage({
  slide,
  cover = false,
  style,
}: {
  slide: Slide;
  cover?: boolean;
  style?: React.CSSProperties;
}) {
  return (
    <picture style={{ display: "block", height: cover ? "100%" : undefined, ...style }}>
      {slide.mobile && <source media="(max-width: 639px)"  srcSet={slide.mobile} />}
      {slide.tablet && <source media="(max-width: 1023px)" srcSet={slide.tablet} />}
      <img
        src={slide.desktop}
        alt=""
        draggable={false}
        style={{
          width: "100%",
          height: cover ? "100%" : "auto",
          objectFit: cover ? "cover" : undefined,
          objectPosition: "center bottom",
          display: "block",
        }}
      />
    </picture>
  );
}

// ─── Component ────────────────────────────────────────────────────────────────
export function HeroCarousel() {
  const [current, setCurrent]   = useState(0);
  const [animKey, setAnimKey]   = useState(0);
  const [paused,  setPaused]    = useState(false);
  const [btnHovered, setBtnHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = useCallback((index: number) => {
    if (index === current) return;
    setCurrent(index);
    setAnimKey((k) => k + 1);
  }, [current]);

  const advance = useCallback(() => {
    goTo((current + 1) % SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(advance, AUTO_MS);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current, paused, advance]);

  const slide = SLIDES[current];

  return (
    <section
      aria-label="Hero carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      // Mobile  : fills full viewport below the header (148px)
      // Desktop : height driven by the hidden sizer image
      className="relative w-full overflow-hidden h-[calc(100svh-148px)] sm:h-auto"
    >

      {/* ── Sizer — desktop only. Hidden on mobile (section has explicit height there).
            Sits in normal flow and sets the section height from the image's natural ratio. ── */}
      <div className="hidden sm:block invisible pointer-events-none select-none">
        <SlideImage slide={SLIDES[current]} />
      </div>

      {/* ── Background images — absolutely stacked, cross-fade on transition.
            cover=true so they fill the container on both mobile and desktop. ── */}
      {SLIDES.map((s, i) => (
        <SlideImage
          key={s.id}
          slide={s}
          cover
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: i === current ? 1 : 0,
            transition: "opacity 800ms ease",
            pointerEvents: "none",
            userSelect: "none",
          }}
        />
      ))}

      {/* ── Content overlay ── */}
      {slide.layout === "left" ? (
        /* ── Left-aligned layout: vertically centered, text flush left ── */
        <div
          className="pt-8 lg:pt-0 px-6 lg:pl-[42px] lg:pr-6 items-center lg:items-start justify-start lg:justify-center"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className="gap-5 sm:gap-[30px] items-center lg:items-start text-center lg:text-left"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              maxWidth: CONTENT_MAX_W,
            }}
          >
            {/* Stars + review text */}
            <div className="gap-3 sm:gap-[22px] items-center lg:items-start" style={{ display: "flex", flexDirection: "column" }}>
              <img src="/iconstars.svg" alt="5 stars" className="h-7" style={{ width: "auto" }} />
              <p
                className="text-[14px] sm:text-[20px]"
                style={{
                  fontFamily: stix,
                  fontStyle: "italic",
                  fontWeight: WEIGHT_HEADLINE,
                  color: DARK_TEAL,
                  lineHeight: LEADING_BODY,
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                100,000+ verified 5-star reviews
              </p>
            </div>

            {/* Headline + body */}
            <div className="gap-3 sm:gap-[20px] items-center lg:items-start" style={{ display: "flex", flexDirection: "column" }}>
              <h2
                key={`h-${animKey}`}
                className={`text-[36px] sm:text-[52px] xl:text-[72px] text-center lg:text-left${slide.singleLine ? " whitespace-normal lg:whitespace-nowrap" : ""}`}
                style={{
                  fontFamily: stix,
                  fontWeight: WEIGHT_HEADLINE,
                  color: DARK_TEAL,
                  lineHeight: LEADING_TIGHT,
                  letterSpacing: TRACKING_HEADLINE,
                  margin: 0,
                  animation: "heroCopyIn 0.55s ease both",
                }}
              >
                <span className={slide.singleLine ? undefined : "inline sm:block"}>
                  {slide.headlineParts.before}
                </span>
                <em style={{ color: TEAL, fontStyle: "italic", fontWeight: WEIGHT_BODY }}>
                  {slide.headlineParts.accent}
                </em>
                {slide.headlineParts.after}
              </h2>

              <p
                key={`b-${animKey}`}
                className="text-[14px] sm:text-[16px] xl:text-[20px] text-center lg:text-left"
                style={{
                  fontFamily: inter,
                  fontWeight: WEIGHT_BODY,
                  color: DARK_TEAL,
                  lineHeight: LEADING_BODY,
                  margin: 0,
                  animation: "heroCopyIn 0.55s ease 80ms both",
                }}
              >
                {slide.body}
              </p>
            </div>

            {/* CTA */}
            <a
              key={`cta-${animKey}`}
              href={slide.ctaHref}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                ...pillButtonBase,
                backgroundColor: btnHovered ? TEAL_DEEP : TEAL,
                boxShadow: btnHovered ? "0 8px 28px rgba(0, 146, 150, 0.32)" : "none",
                transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
                animation: "heroCopyIn 0.55s ease 160ms both",
              }}
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ) : (
        /* ── Center layout: top-anchored, horizontally centered ── */
        <div
          className="pt-8 sm:pt-[60px]"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: 24,
            paddingRight: 24,
          }}
        >
          {/* Inner group — constrained width, responsive gap */}
          <div
            className="gap-5 sm:gap-[30px]"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: CONTENT_MAX_W,
              textAlign: "center",
            }}
          >
            {/* Stars + review text */}
            <div className="gap-3 sm:gap-[22px]" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <img src="/iconstars.svg" alt="5 stars" className="h-7" style={{ width: "auto" }} />
              <p
                className="text-[14px] sm:text-[20px]"
                style={{
                  fontFamily: stix,
                  fontStyle: "italic",
                  fontWeight: WEIGHT_HEADLINE,
                  color: DARK_TEAL,
                  lineHeight: LEADING_BODY,
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                100,000+ verified 5-star reviews
              </p>
            </div>

            {/* Headline + body */}
            <div className="gap-3 sm:gap-[20px]" style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <h2
                key={`h-${animKey}`}
                className={`text-[36px] sm:text-[52px] xl:text-[72px]${slide.singleLine ? " whitespace-normal sm:whitespace-nowrap" : ""}`}
                style={{
                  fontFamily: stix,
                  fontWeight: WEIGHT_HEADLINE,
                  color: DARK_TEAL,
                  lineHeight: LEADING_TIGHT,
                  letterSpacing: TRACKING_HEADLINE,
                  margin: 0,
                  animation: "heroCopyIn 0.55s ease both",
                }}
              >
                <span className={slide.singleLine ? undefined : "inline sm:block"}>
                  {slide.headlineParts.before}
                </span>
                <em style={{ color: TEAL, fontStyle: "italic", fontWeight: WEIGHT_BODY }}>
                  {slide.headlineParts.accent}
                </em>
                {slide.headlineParts.after}
              </h2>

              <p
                key={`b-${animKey}`}
                className="text-[14px] sm:text-[16px] xl:text-[20px]"
                style={{
                  fontFamily: inter,
                  fontWeight: WEIGHT_BODY,
                  color: DARK_TEAL,
                  lineHeight: LEADING_BODY,
                  margin: 0,
                  animation: "heroCopyIn 0.55s ease 80ms both",
                }}
              >
                {slide.body}
              </p>
            </div>

            {/* CTA */}
            <a
              key={`cta-${animKey}`}
              href={slide.ctaHref}
              onMouseEnter={() => setBtnHovered(true)}
              onMouseLeave={() => setBtnHovered(false)}
              style={{
                ...pillButtonBase,
                backgroundColor: btnHovered ? TEAL_DEEP : TEAL,
                boxShadow: btnHovered ? "0 8px 28px rgba(0, 146, 150, 0.32)" : "none",
                transform: btnHovered ? "translateY(-1px)" : "translateY(0)",
                animation: "heroCopyIn 0.55s ease 160ms both",
              }}
            >
              {slide.cta}
            </a>
          </div>
        </div>
      )}

      {/* ── Dot navigation ── */}
      <div
        className="bottom-5 left-5 sm:bottom-[72px] sm:left-[42px]"
        style={{
          position: "absolute",
          display: "flex",
          alignItems: "center",
          gap: 8,
          zIndex: 20,
        }}
      >
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? "true" : undefined}
            style={{
              width: 13,
              height: 13,
              borderRadius: "50%",
              backgroundColor: i === current ? DARK_TEAL : "transparent",
              border: `1.5px solid ${i === current ? DARK_TEAL : `${DARK_TEAL}80`}`,
              padding: 0,
              cursor: "pointer",
              transition: "background-color 300ms ease, border-color 300ms ease",
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes heroCopyIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
      `}</style>
    </section>
  );
}
