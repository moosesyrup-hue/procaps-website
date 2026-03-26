"use client";

import { useState, useEffect, useRef } from "react";
import { Search, Heart, User, ShoppingCart, Play, X } from "lucide-react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const TEAL = "#009296";
const DARK_TEAL = "#003b3c";
const AQUA = "#48e1dc";
const BG_TEAL_LIGHT = "#e8f9f9";
const BG_MINT = "#ebfafa";
const BG_MINT_CARD = "#dcf9f9";
const BG_CREAM = "#f6f2ec";
const TEAL_MUTED = "#406c6d";

// ─── Image Assets ─────────────────────────────────────────────────────────────
const section4Image = "https://www.figma.com/api/mcp/asset/b0ce97d2-6788-4d08-a8f0-d88bd1efff80";
const rightImg = "https://www.figma.com/api/mcp/asset/c061f27a-5683-45c3-be91-1ff8b3ea3e47";
const right1Img = "https://www.figma.com/api/mcp/asset/beb603dc-205f-4087-a879-0065ac0c27fa";
const stockPhoto = "https://www.figma.com/api/mcp/asset/6e943ef9-103e-4fcf-b946-02e229273b59";
const facilityPhoto = "https://www.figma.com/api/mcp/asset/a96be06f-dc11-4fd5-b042-8cb28514563f";
const section8Image = "https://www.figma.com/api/mcp/asset/1b632119-3bcc-4728-8607-7f70cfcf3e04";
const signature = "https://www.figma.com/api/mcp/asset/01c674fd-718e-4655-b056-5b0540aa9295";
const stars = "https://www.figma.com/api/mcp/asset/4aaa145c-dc50-4907-8744-f9a23e7f4dd7";
const logoMain = "https://www.figma.com/api/mcp/asset/25d1d3a0-c59a-49c6-a068-1d48666847c6";
const iconPlay = "https://www.figma.com/api/mcp/asset/e8d54926-a691-4d35-9b9f-c10952cf6e79";
const iconPlay1 = "https://www.figma.com/api/mcp/asset/9d6f08b2-b213-411a-9906-9fa8d3411c13";
const imgIconPlay = "https://www.figma.com/api/mcp/asset/b270aab7-4e2a-49c0-a4b2-312e45bb741a";
const pillLargeImg = "https://www.figma.com/api/mcp/asset/46b9e731-0421-4a50-8fb6-6378ada50088";
const section9Img = "https://www.figma.com/api/mcp/asset/cb40c4ae-a2f0-49ea-955c-64ee7475d55c";
const section9PlayIcon = "https://www.figma.com/api/mcp/asset/e381e912-8389-47a3-8450-58e9a0e7b821";

// ─── Font shorthand helpers ───────────────────────────────────────────────────
const stix = "var(--font-stix), Georgia, serif";
const inter = "var(--font-inter), Inter, sans-serif";

// ─── Decorative line ──────────────────────────────────────────────────────────
function TealLine({ width = 50 }: { width?: number }) {
  return (
    <div
      style={{
        height: 1,
        width,
        backgroundColor: TEAL,
        flexShrink: 0,
      }}
    />
  );
}

// ─── Play Button Circle ───────────────────────────────────────────────────────
function PlayCircle({ size = 80 }: { size?: number }) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.2)",
        backdropFilter: "blur(4px)",
        border: "2px solid rgba(255,255,255,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        flexShrink: 0,
      }}
    >
      <Play
        style={{
          width: size * 0.35,
          height: size * 0.35,
          color: "white",
          fill: "white",
          marginLeft: size * 0.05,
        }}
      />
    </div>
  );
}

// ─── Fade-in on scroll ────────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ─── Video Data ───────────────────────────────────────────────────────────────
type VideoId = "andrew-intro" | "ingredient-transparency" | "solar-manufacturing" | "made-in-house" | "andrew-transparency";

const VIDEO_DATA: Record<VideoId, { title: string; subtitle: string }> = {
  "andrew-intro": {
    title: "Andrew Lessman — Why Quality Matters",
    subtitle: "ProCaps Laboratories · Henderson, NV",
  },
  "ingredient-transparency": {
    title: "Ingredient Transparency. Pure Formulas.",
    subtitle: "Manufacturing Series · Episode 1",
  },
  "solar-manufacturing": {
    title: "All-Solar Powered Manufacturing Facility",
    subtitle: "Manufacturing Series · Episode 2",
  },
  "made-in-house": {
    title: "Made In-House. Never Outsourced.",
    subtitle: "Manufacturing Series · Episode 3",
  },
  "andrew-transparency": {
    title: "Informed Choices Require Transparency",
    subtitle: "Andrew Lessman · ProCaps Founder",
  },
};

// ─── Video Modal ──────────────────────────────────────────────────────────────
function VideoModal({ videoId, onClose }: { videoId: VideoId; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const video = VIDEO_DATA[videoId];

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll + ESC key
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: visible ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0)",
        transition: "background-color 200ms ease",
        padding: "16px",
      }}
      onClick={handleClose}
    >
      {/* Modal container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          borderRadius: 16,
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(12px)",
          transition: "opacity 200ms ease, transform 200ms ease",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 16:9 video area */}
        <div
          style={{
            aspectRatio: "16/9",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #071a1a 0%, #003b3c 50%, #005a5a 100%)",
          }}
        >
          {/* Subtle grain overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 30% 40%, rgba(72,225,220,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Center content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
              textAlign: "center",
              padding: "0 40px",
            }}
          >
            {/* Animated play ring */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.35)",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              <Play style={{ width: 30, height: 30, color: "white", fill: "white", marginLeft: 4 }} />
            </div>

            <div>
              <p
                style={{
                  fontFamily: stix,
                  fontSize: 26,
                  fontWeight: 500,
                  color: "white",
                  margin: 0,
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {video.title}
              </p>
              <p
                style={{
                  fontFamily: inter,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                  letterSpacing: "0.5px",
                }}
              >
                {video.subtitle}
              </p>
            </div>

            <p
              style={{
                fontFamily: inter,
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(255,255,255,0.25)",
                margin: 0,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Video placeholder
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 150ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.22)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.12)";
          }}
        >
          <X style={{ width: 15, height: 15, color: "white" }} />
        </button>
      </div>
    </div>
  );
}

// ─── 1. Header ────────────────────────────────────────────────────────────────
function Header() {
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
        position: "sticky",
        top: 0,
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

        {/* Left: nav links */}
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
          className="hidden md:flex"
        >
          {["SHOP", "QUALITY", "OUR STORY", "SPECIALS"].map((link) => (
            <a
              key={link}
              href={link === "QUALITY" ? "/quality" : "#"}
              style={{
                fontFamily: inter,
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: "1.6px",
                color: "white",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
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
          <Heart style={iconStyle} strokeWidth={1.5} />
          <User style={iconStyle} strokeWidth={1.5} className="hidden md:block" />
          <ShoppingCart style={iconStyle} strokeWidth={1.5} />
        </div>
      </div>
    </header>
  );
}

// ─── 2. Banner ────────────────────────────────────────────────────────────────
function Banner() {
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
      {/* Vertical decorative line */}
      <div
        style={{
          width: 1,
          height: 111,
          backgroundColor: "rgba(255,255,255,0.5)",
          marginBottom: 48,
          flexShrink: 0,
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
          transform: "translateX(-50%) translateY(-35%)",
          width: "90%",
          maxWidth: 680,
          zIndex: 10,
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

// ─── 3. Section 2 ("All vitamins are not created equal") ─────────────────────
function Section2({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        position: "relative",
        zIndex: 1,
      }}
      className="pt-[180px] md:pt-[260px] xl:pt-[300px] px-5 md:px-10 xl:px-[40px]"
    >
      {/* Copy block */}
      <FadeIn
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          marginBottom: 80,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          All vitamins are{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>not</em>
          {" "}created equal.
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
          WHEN YOU CONTROL THE PROCESS YOU DEFINE THE QUALITY
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          The reality is that most supplement companies don&rsquo;t manufacture their own products. They are brands—not manufacturers—relying on third parties to produce formulas that often include unnecessary additives. Tablets, for example, require binders, glues, lubricants, and coatings just to hold together. These are not there for your benefit—they are there for manufacturing convenience. Because we manufacture our own products, we&rsquo;re able to avoid these manufacturing shortcuts and choose delivery forms that prioritize ingredient integrity over production convenience.
        </p>
      </FadeIn>

      {/* Video section */}
      <FadeIn delay={120} style={{ width: "100%", maxWidth: 1384 }}>
      <div
        role="button"
        tabIndex={0}
        onClick={onPlay}
        onKeyDown={(e) => e.key === "Enter" && onPlay()}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderRadius: 20,
          width: "100%",
          maxWidth: 1384,
          position: "relative",
          overflow: "hidden",
          cursor: "pointer",
        }}
        className="aspect-[1329/737]"
      >
        {/* Background photo */}
        <img
          src="https://www.figma.com/api/mcp/asset/e4d39f6d-9c28-405e-8ed2-a18559a10a47"
          alt="Andrew Lessman"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: 20,
            transform: hovered ? "scale(1.02)" : "scale(1)",
            transition: "transform 400ms ease",
          }}
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: hovered ? "rgba(0,0,0,0.15)" : "rgba(0,0,0,0)",
            transition: "background-color 250ms ease",
            zIndex: 1,
            borderRadius: 20,
          }}
        />

        {/* Play button — centered */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
            transition: "transform 250ms ease",
            zIndex: 2,
          }}
        >
          <img
            src="https://www.figma.com/api/mcp/asset/1b43d21e-3036-4bf9-ab0e-efa380219b39"
            alt="Play"
            style={{ objectFit: "contain" }}
            className="w-[64px] h-[64px] md:w-[96px] md:h-[96px] xl:w-[129px] xl:h-[129px]"
          />
        </div>

        {/* Bottom-left: Signature stacked above name */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 12,
            zIndex: 2,
          }}
          className="bottom-4 left-4 md:bottom-8 md:left-8 xl:bottom-[52px] xl:left-[50px]"
        >
          <img
            src="https://www.figma.com/api/mcp/asset/6bc054ca-fd1c-4171-b4e0-0e663e903b7e"
            alt="Andrew Lessman signature"
            style={{ height: 59, width: 380, objectFit: "contain" }}
            className="h-[36px] w-auto md:h-[48px] xl:h-[59px] xl:w-[380px]"
          />
          <p
            style={{
              fontFamily: inter,
              fontSize: 20,
              color: "white",
              margin: 0,
              lineHeight: 1.3,
            }}
            className="text-sm md:text-base xl:text-[20px]"
          >
            <span style={{ fontWeight: 600 }}>- Andrew Lessman,</span>
            <span style={{ fontWeight: 400 }}> ProCaps Founder</span>
          </p>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}

// ─── 4. Section 3 (Comparison cards) ─────────────────────────────────────────
const typicalBullets = [
  "Manufactured by third parties",
  "Proprietary blends that hide ingredient amounts",
  "Artificial colors, flavors, and binders",
  "Limited testing and quality controls",
];

const procapsBullets = [
  "Vertically integrated — we manufacture everything",
  "Full label transparency — exact amounts listed",
  "Zero fillers, binders, or artificial additives",
  "Dual-tested by independent third-party labs",
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
                fontSize: 20,
                fontWeight: 400,
                color: DARK_TEAL,
                lineHeight: 1.4,
              }}
              className="text-sm md:text-[20px]"
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section3() {
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

// ─── 5. Ticker Bar ────────────────────────────────────────────────────────────
const BASE_TICKER_ITEMS = ["Dual Tested", "Pure Ingredients", "Additive-Free"];

function TickerBar() {
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

// ─── 6. Section 4 ("Formulation without hype") ───────────────────────────────
function Section4() {
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
          maxWidth: 1000,
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
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          <em style={{ color: TEAL, fontStyle: "italic" }}>Formulation</em>
          <span style={{ color: DARK_TEAL }}> without hype.</span>
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
          SCIENCE BEFORE MARKETING
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          We do not formulate products based on trends, marketing opportunities, or exaggerated claims. Our formulas are based on scientific research and practical experience. We select ingredients for their relevance, compatibility, and effectiveness—not because they are popular or easy to sell.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Whenever appropriate, we use bioactive forms of nutrients, and we prepare our ingredients as micro-granulated powders to support absorption and ease of digestion.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          There are no miracle cures—only thoughtful formulations designed to support your health as part of a broader wellness strategy.
        </p>
      </FadeIn>
    </section>
  );
}

// ─── 7. Section 4 Image ───────────────────────────────────────────────────────
function Section4Image() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <img
        src={section4Image}
        alt="ProCaps Formulation"
        style={{
          width: "100%",
          aspectRatio: "1080 / 398",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

// ─── 8. Section 5 ("Carefully selected. Rigorously verified.") ───────────────
function Section5() {
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left */}
      <FadeIn
        style={{
          flex: 1,
          maxWidth: 475,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        className="w-full md:max-w-[475px]"
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.16px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[36px] md:text-[48px] xl:text-[58px]"
        >
          Carefully selected.{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>Rigorously</em>
          {" "}verified.
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
          QUALITY BEGINS AT THE SOURCE
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          We do not formulate products based on trends, marketing opportunities, or exaggerated claims. Our formulas are based on scientific research and practical experience. We select ingredients for their relevance, compatibility, and effectiveness—not because they are popular or easy to sell. Whenever appropriate, we use bioactive forms of nutrients, and we prepare our ingredients as micro-granulated powders to support absorption and ease of digestion. There are no miracle cures—only thoughtful formulations designed to support your health as part of a broader wellness strategy.
        </p>
      </FadeIn>

      {/* Right */}
      <FadeIn delay={150} style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <img
          src={rightImg}
          alt="Ingredient selection"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </FadeIn>
    </section>
  );
}

// ─── 9. Section 6 (Quote) ────────────────────────────────────────────────────
function Section6() {
  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      className="px-5 md:px-20 xl:px-[240px] py-[80px] md:py-[140px] xl:py-[220px]"
    >
      <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <blockquote
          style={{
            fontFamily: stix,
            fontSize: 36,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.5,
            letterSpacing: "-0.72px",
            margin: 0,
            marginBottom: 24,
            maxWidth: 900,
          }}
          className="text-[22px] md:text-[28px] xl:text-[36px]"
        >
          &ldquo;We will never compromise on ingredient quality. Your health depends on it.&rdquo;
        </blockquote>
        <p
          style={{
            fontFamily: inter,
            fontSize: 20,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          - Andrew Lessman, Founder
        </p>
      </FadeIn>
    </section>
  );
}

// ─── 10. Section 7 ("Why we will never make tablets") ────────────────────────
function Section7() {
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col-reverse md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left: Image */}
      <FadeIn style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <img
          src={right1Img}
          alt="ProCaps capsules"
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            borderRadius: 20,
            display: "block",
          }}
        />
      </FadeIn>

      {/* Right: Content */}
      <FadeIn
        delay={150}
        style={{
          flex: 1,
          maxWidth: 475,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        className="w-full md:max-w-[475px]"
      >
        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
            fontSize: 20,
          }}
          className="text-sm md:text-[20px]"
        >
          THE CAPSULE ADVANTAGE
        </p>

        <TealLine width={50} />

        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.16px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[36px] md:text-[48px] xl:text-[58px]"
        >
          Why we will{" "}
          <em style={{ color: TEAL, fontStyle: "italic" }}>never</em>
          {" "}make tablets.
        </h2>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Tablets require binders, fillers, coatings, and compression agents to hold their
          shape. ProCaps produces only capsules — and only the purest form of each nutrient
          goes inside. No flow agents. No shellac. No artificial dyes. Just the ingredient
          your body needs.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Capsules also dissolve faster, delivering ingredients more efficiently to your
          digestive system. It&rsquo;s a simple choice — but one most brands won&rsquo;t make
          because tablets are cheaper to produce.
        </p>
      </FadeIn>
    </section>
  );
}

// ─── 11. Section 8 ("Manufacturing under our control") ───────────────────────
function VideoCard({ title, onPlay }: { title: string; onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onPlay}
      onKeyDown={(e) => e.key === "Enter" && onPlay()}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "#004f50" : DARK_TEAL,
        borderRadius: 20,
        height: 360,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 40,
        width: "100%",
        padding: "32px 19px",
        cursor: "pointer",
        minWidth: 0,
        transition: "background-color 250ms ease",
      }}
    >
      <img
        src={imgIconPlay}
        alt="Play"
        style={{
          width: 90,
          height: 90,
          objectFit: "contain",
          flexShrink: 0,
          transform: hovered ? "scale(1.1)" : "scale(1)",
          transition: "transform 250ms ease",
        }}
      />
      <p
        style={{
          fontFamily: stix,
          fontSize: 22,
          fontWeight: 500,
          color: "white",
          lineHeight: 1.3,
          textAlign: "center",
          margin: 0,
          whiteSpace: "pre-line",
        }}
      >
        {title}
      </p>
    </div>
  );
}

function Section8({ onVideoPlay }: { onVideoPlay: (id: VideoId) => void }) {
  return (
    <section
      style={{
        backgroundColor: BG_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="pt-[60px] md:pt-[100px] xl:pt-[120px] pb-0 px-5 md:px-10 xl:px-[40px]"
    >
      {/* Copy block */}
      <FadeIn
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          <span style={{ color: DARK_TEAL }}>Manufacturing </span>
          <em style={{ color: TEAL, fontStyle: "italic" }}>under</em>
          <span style={{ color: DARK_TEAL }}> our control.</span>
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
          THE DESERT ADVANTAGE
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          Our Henderson, Nevada facility sits in one of the driest climates in North America.
          Why does that matter? Humidity is the enemy of supplement quality. Our desert location
          gives us a natural advantage in maintaining the low-humidity environment required to
          produce the most stable and pure supplements possible.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            maxWidth: 800,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          We power our facility entirely with solar energy. From the rooftop arrays to the
          clean rooms where every capsule is filled, we operate with the smallest possible
          environmental footprint — because caring about your health and caring about the
          planet are the same value.
        </p>
      </FadeIn>

      {/* Video cards row */}
      <div
        className="flex-col md:flex-row"
        style={{
          width: "100%",
          maxWidth: 1320,
          display: "flex",
          gap: 20,
          alignItems: "stretch",
        }}
      >
        <FadeIn style={{ flex: "1 0 0" }}>
          <VideoCard title={"Ingredient Transparency.\nPure Formulas."} onPlay={() => onVideoPlay("ingredient-transparency")} />
        </FadeIn>
        <FadeIn delay={100} style={{ flex: "1 0 0" }}>
          <VideoCard title={"All-Solar Powered Manufacturing Facility, Henderson, NV"} onPlay={() => onVideoPlay("solar-manufacturing")} />
        </FadeIn>
        <FadeIn delay={200} style={{ flex: "1 0 0" }}>
          <VideoCard title={"Made In-House.\nNever Outsourced."} onPlay={() => onVideoPlay("made-in-house")} />
        </FadeIn>
      </div>
    </section>
  );
}

// ─── 12. Section 8 Image ─────────────────────────────────────────────────────
function Section8Image() {
  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <img
        src={section8Image}
        alt="ProCaps Manufacturing"
        style={{
          width: "100%",
          aspectRatio: "1960 / 480",
          objectFit: "cover",
          display: "block",
        }}
      />
    </div>
  );
}

// ─── 13. Section 9 ("Informed choices require transparency") ─────────────────
function Section9({ onPlay }: { onPlay: () => void }) {
  const [hovered, setHovered] = useState(false);
  return (
    <section
      style={{
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 80,
      }}
      className="flex-col md:flex-row px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Left */}
      <FadeIn
        style={{
          flex: 1,
          maxWidth: 475,
          display: "flex",
          flexDirection: "column",
          gap: 24,
        }}
        className="w-full md:max-w-[475px]"
      >
        <h2
          style={{
            fontFamily: stix,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.16px",
            margin: 0,
            fontWeight: 400,
          }}
          className="text-[36px] md:text-[48px] xl:text-[58px]"
        >
          Informed choices require transparency.
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
          KNOWLEDGE GUIDES QUALITY
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          ProCaps publishes full Certificates of Analysis for our products. We list every
          ingredient by its exact amount — not hidden in a proprietary blend. We share our
          manufacturing practices and welcome scrutiny because we have nothing to hide.
        </p>

        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            letterSpacing: "-0.4px",
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          When you understand what goes into your supplements and why, you make better
          decisions for your health. That&rsquo;s been Andrew&rsquo;s mission since 1979.
        </p>
      </FadeIn>

      {/* Right: Photo + play icon */}
      <FadeIn delay={150} style={{ flex: 1 }} className="w-full md:max-w-[809px]">
        <div
          role="button"
          tabIndex={0}
          onClick={onPlay}
          onKeyDown={(e) => e.key === "Enter" && onPlay()}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            width: "100%",
            aspectRatio: "1 / 1",
            borderRadius: 20,
            position: "relative",
            overflow: "hidden",
            cursor: "pointer",
          }}
        >
          {/* Photo */}
          <img
            src={section9Img}
            alt="Andrew Lessman"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: 20,
              transform: hovered ? "scale(1.03)" : "scale(1)",
              transition: "transform 400ms ease",
            }}
          />

          {/* Hover overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundColor: hovered ? "rgba(0,0,0,0.12)" : "rgba(0,0,0,0)",
              transition: "background-color 250ms ease",
              borderRadius: 20,
            }}
          />

          {/* Play icon — centered */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: `translate(-50%, -50%) scale(${hovered ? 1.1 : 1})`,
              transition: "transform 250ms ease",
              width: 87,
              height: 87,
            }}
          >
            <img
              src={section9PlayIcon}
              alt="Play"
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── 14. Section 10 (Second quote) ───────────────────────────────────────────
function Section10() {
  return (
    <section
      style={{
        backgroundColor: BG_TEAL_LIGHT,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
      className="px-5 md:px-20 xl:px-[240px] py-[80px] md:py-[140px] xl:py-[220px]"
    >
      <FadeIn style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <blockquote
          style={{
            fontFamily: stix,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.5,
            letterSpacing: "-0.72px",
            margin: 0,
            marginBottom: 24,
            maxWidth: 900,
          }}
          className="text-[22px] md:text-[28px] xl:text-[36px]"
        >
          &ldquo;It&rsquo;s not important that you get the products I offer, but it is important
          that you get the information I share.&rdquo;
        </blockquote>
        <p
          style={{
            fontFamily: inter,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.4,
            margin: 0,
          }}
          className="text-base md:text-[20px]"
        >
          - Andrew Lessman, Founder
        </p>
      </FadeIn>
    </section>
  );
}

// ─── 15. Section 11 (Testimonials + stats) ───────────────────────────────────
const testimonials = [
  {
    quote:
      "I've been taking ProCaps vitamins for over 20 years. The quality is unmistakable — I can actually feel the difference when I skip a day.",
    name: "Sarah M.",
    role: "Loyal customer since 2003",
  },
  {
    quote:
      "As a nurse, I'm skeptical of supplement claims. ProCaps is the only brand I recommend to my patients because I trust their transparency.",
    name: "Dr. Patricia L.",
    role: "Registered Nurse",
  },
  {
    quote:
      "Andrew's commitment to purity is real. No fillers, no nonsense. Just exactly what the label says. I won't buy supplements from anyone else.",
    name: "James R.",
    role: "Health-conscious consumer",
  },
];

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        height: 369,
        backgroundColor: "white",
        borderRadius: 20,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Stars */}
      <img
        src={stars}
        alt="5 stars"
        style={{ width: 97, height: 17, objectFit: "contain" }}
      />

      {/* Quote */}
      <p
        style={{
          fontFamily: stix,
          fontSize: 24,
          fontWeight: 400,
          color: DARK_TEAL,
          lineHeight: "30px",
          margin: 0,
          flex: 1,
        }}
        className="text-lg md:text-[24px]"
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "rgba(0,146,150,0.2)" }} />

      {/* Name + role */}
      <div>
        <p
          style={{
            fontFamily: inter,
            fontSize: 16,
            fontWeight: 500,
            color: DARK_TEAL,
            margin: 0,
            marginBottom: 2,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: inter,
            fontSize: 14,
            fontWeight: 400,
            color: TEAL_MUTED,
            margin: 0,
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function Section11() {
  return (
    <section
      style={{
        backgroundColor: BG_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Header copy */}
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          Trusted by health-conscious people.
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
          CUSTOMER STORIES
        </p>
      </div>

      {/* Testimonial cards */}
      <div
        style={{
          maxWidth: 1320,
          width: "100%",
          display: "flex",
          gap: 20,
          alignItems: "stretch",
          marginBottom: 60,
        }}
        className="flex-col md:flex-row"
      >
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 100} style={{ flex: "1 0 0" }}>
            <TestimonialCard {...t} />
          </FadeIn>
        ))}
      </div>

      {/* Stats row */}
      <FadeIn
        style={{
          maxWidth: 1320,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {/* Stat 1 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            4.9/5
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Average rating
          </p>
        </div>

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 80,
            backgroundColor: TEAL,
            opacity: 0.3,
            flexShrink: 0,
          }}
          className="hidden md:block"
        />

        {/* Stat 2 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            50k+
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Happy customers
          </p>
        </div>

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 80,
            backgroundColor: TEAL,
            opacity: 0.3,
            flexShrink: 0,
          }}
          className="hidden md:block"
        />

        {/* Stat 3 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            45+
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Years of excellence
          </p>
        </div>
      </FadeIn>
    </section>
  );
}

// ─── Main Page Component ──────────────────────────────────────────────────────
export function QualityPage() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null);

  return (
    <div style={{ fontFamily: inter, backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <Banner />
      <Section2 onPlay={() => setActiveVideo("andrew-intro")} />
      <Section3 />
      <TickerBar />
      <Section4 />
      <Section4Image />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 onVideoPlay={(id) => setActiveVideo(id)} />
      <Section8Image />
      <Section9 onPlay={() => setActiveVideo("andrew-transparency")} />
      <Section10 />
      <Section11 />

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
