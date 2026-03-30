"use client";

import { useState } from "react";
import { inter } from "./tokens";
import { VideoId } from "./types";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { Section2 } from "./Section2";
import { Section3 } from "./Section3";
import { TickerBar } from "./TickerBar";
import { Section4, Section4Image } from "./Section4";
import { Section5 } from "./Section5";
import { Section6 } from "./Section6";
import { Section7 } from "./Section7";
import { Section8, Section8Image } from "./Section8";
import { Section9 } from "./Section9";
import { Section10 } from "./Section10";
import { Section11 } from "./Section11";
import { VideoModal } from "./VideoModal";
import { Footer } from "../Footer";

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
      <Footer />

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
