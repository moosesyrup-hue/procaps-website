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
export const section4Image = "https://www.figma.com/api/mcp/asset/b0ce97d2-6788-4d08-a8f0-d88bd1efff80";
export const rightImg = "https://www.figma.com/api/mcp/asset/c061f27a-5683-45c3-be91-1ff8b3ea3e47";
export const right1Img = "https://www.figma.com/api/mcp/asset/beb603dc-205f-4087-a879-0065ac0c27fa";
export const stockPhoto = "https://www.figma.com/api/mcp/asset/6e943ef9-103e-4fcf-b946-02e229273b59";
export const facilityPhoto = "https://www.figma.com/api/mcp/asset/a96be06f-dc11-4fd5-b042-8cb28514563f";
export const section8Image = "https://www.figma.com/api/mcp/asset/1b632119-3bcc-4728-8607-7f70cfcf3e04";
export const signature = "https://www.figma.com/api/mcp/asset/01c674fd-718e-4655-b056-5b0540aa9295";
export const stars = "https://www.figma.com/api/mcp/asset/4aaa145c-dc50-4907-8744-f9a23e7f4dd7";
export const logoMain = "https://www.figma.com/api/mcp/asset/25d1d3a0-c59a-49c6-a068-1d48666847c6";
export const iconPlay = "https://www.figma.com/api/mcp/asset/e8d54926-a691-4d35-9b9f-c10952cf6e79";
export const iconPlay1 = "https://www.figma.com/api/mcp/asset/9d6f08b2-b213-411a-9906-9fa8d3411c13";
export const imgIconPlay = "https://www.figma.com/api/mcp/asset/b270aab7-4e2a-49c0-a4b2-312e45bb741a";
export const pillLargeImg = "https://www.figma.com/api/mcp/asset/46b9e731-0421-4a50-8fb6-6378ada50088";
export const section9Img = "https://www.figma.com/api/mcp/asset/cb40c4ae-a2f0-49ea-955c-64ee7475d55c";
export const section9PlayIcon = "https://www.figma.com/api/mcp/asset/e381e912-8389-47a3-8450-58e9a0e7b821";

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
        backgroundColor: TEAL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: 2,
      }}
    >
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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
