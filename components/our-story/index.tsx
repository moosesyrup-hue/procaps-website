"use client";

import { inter } from "../quality/tokens";
import { Header } from "../quality/Header";
import { Banner } from "./Banner";

export function OurStoryPage() {
  return (
    <div style={{ fontFamily: inter, backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <Banner />
      {/* Spacer to absorb pill overflow and prevent scroll jank */}
      <div className="pt-[180px] md:pt-[260px] xl:pt-[300px]" style={{ backgroundColor: "white" }} />
    </div>
  );
}
