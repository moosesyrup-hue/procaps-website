// ─── Video Data ───────────────────────────────────────────────────────────────
export type VideoId =
  | "andrew-intro"
  | "ingredient-transparency"
  | "solar-manufacturing"
  | "made-in-house"
  | "andrew-transparency";

export const VIDEO_DATA: Record<VideoId, { title: string; subtitle: string }> = {
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
