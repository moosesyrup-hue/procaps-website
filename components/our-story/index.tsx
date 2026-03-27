"use client";

import { inter } from "../quality/tokens";
import { Header } from "../quality/Header";
import { Banner } from "./Banner";

export function OurStoryPage() {
  return (
    <div style={{ fontFamily: inter, backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <Banner />
    </div>
  );
}
