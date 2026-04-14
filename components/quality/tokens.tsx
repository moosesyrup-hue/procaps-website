// ─── Design Tokens ────────────────────────────────────────────────────────────
export const TEAL       = "#009296";
export const TEAL_DEEP  = "#007e82"; // button hover — richer, not harsh
export const DARK_TEAL  = "#003b3c";
export const AQUA = "#48e1dc";
export const BG_TEAL_LIGHT = "#e8f9f9";
export const BG_MINT = "#ebfafa";
export const BG_MINT_CARD = "#dcf9f9";
export const BG_CREAM = "#f6f2ec";
export const TEAL_MUTED = "#406c6d";

// ─── Image Assets ─────────────────────────────────────────────────────────────
export const section4Image  = "/quality-capsules-wide.png";
export const rightImg       = "/quality-botanical.png";
export const right1Img      = "/quality-capsules-dish.png";
export const facilityPhoto  = "/quality-mountains.png";
export const section8Image  = "/quality-mountains.png";
export const signature      = "/iconandrewsignature.svg";
export const stars          = "/iconstars.svg";
export const logoMain       = "/iconlogo.svg";
export const iconPlay       = "/iconplay.svg";
export const imgIconPlay    = "/iconplaysmall.svg"; // used by Section8
export const pillLargeImg   = "/quality-pill-large.png";
export const section9Img    = "/andrew-lessman-blue.png";
export const section9PlayIcon = "/iconplaysmall.svg"; // used by Section9, FounderSection, WordSpreads4
// note: imgIconPlay + section9PlayIcon are the same file — consolidate when refactoring those sections

// ─── Font shorthand helpers ───────────────────────────────────────────────────
export const stix = "var(--font-stix), Georgia, serif";
export const inter = "var(--font-inter), Inter, sans-serif";

// ─── Typography tokens ────────────────────────────────────────────────────────
// Letter-spacing
export const TRACKING_HEADLINE = "-1.44px"; // display headlines (h1/h2)
export const TRACKING_BUTTON   = "1.92px";  // uppercase CTA labels

// Line-height
export const LEADING_TIGHT = 1.1; // headlines
export const LEADING_BODY  = 1.4; // paragraphs & captions

// Font-weight
export const WEIGHT_HEADLINE = 500; // STIX Medium for display text
export const WEIGHT_BODY     = 400;

// ─── Layout tokens ────────────────────────────────────────────────────────────
export const CONTENT_MAX_W = 719; // max-width for centered hero copy blocks

// ─── Pill button ──────────────────────────────────────────────────────────────
// Reusable button style object — spread into any <a> or <button> style prop.
// Pair with hovered state for bg swap: btnHovered ? DARK_TEAL : TEAL
export const pillButtonBase: React.CSSProperties = {
  fontFamily: inter,
  fontSize: 16,
  fontWeight: 500,
  letterSpacing: TRACKING_BUTTON,
  color: "white",
  borderRadius: 999,
  height: 50,
  padding: "0 39px",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase" as const,
  transition: "background-color 220ms ease, box-shadow 220ms ease, transform 220ms ease",
  whiteSpace: "nowrap" as const,
  border: "none",
  cursor: "pointer",
};

// ─── Bullet checkmark ─────────────────────────────────────────────────────────
export function BulletCheck() {
  return (
    <div
      style={{
        width: 20,
        height: 20,
        borderRadius: "50%",
        backgroundColor: "transparent",
        border: `1.5px solid ${TEAL}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
      }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke={TEAL} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
}

// ─── Decorative line ──────────────────────────────────────────────────────────
export function TealLine({ width = 50 }: { width?: number }) {
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
