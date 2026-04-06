"use client";

import { Header } from "../quality/Header";
import { Footer } from "../Footer";
import { Hero } from "./Hero";

export function AndrewStoryPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
