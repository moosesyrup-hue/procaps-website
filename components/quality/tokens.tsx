// ─── Design Tokens ────────────────────────────────────────────────────────────
export const TEAL = "#009296";
export const DARK_TEAL = "#003b3c";
export const AQUA = "#48e1dc";
export const BG_TEAL_LIGHT = "#e8f9f9";
export const BG_MINT = "#ebfafa";
export const BG_MINT_CARD = "#dcf9f9";
export const BG_CREAM = "#f6f2ec";
export const TEAL_MUTED = "#406c6d";

// ─── Image Assets ─────────────────────────────────────────────────────────────
export const section4Image = "/quality-capsules-wide.png";
export const rightImg = "/quality-botanical.png";
export const right1Img = "/quality-capsules-dish.png";
export const stockPhoto = "/quality-capsules-wide.png";
export const facilityPhoto = "/quality-mountains.png";
export const section8Image = "/quality-mountains.png";
export const signature = "/iconandrewsignature.svg";
export const stars = "/iconstars.svg";
export const logoMain = "/iconlogo.svg";
export const iconPlay = "/iconplay.svg";
export const iconPlay1 = "/iconplaysmall.svg";
export const imgIconPlay = "/iconplaysmall.svg";
export const pillLargeImg = "/quality-pill-large.png";
export const section9Img = "/andrew-lessman-blue.png";
export const section9PlayIcon = "/iconplaysmall.svg";

// ─── Font shorthand helpers ───────────────────────────────────────────────────
export const stix = "var(--font-stix), Georgia, serif";
export const inter = "var(--font-inter), Inter, sans-serif";

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
