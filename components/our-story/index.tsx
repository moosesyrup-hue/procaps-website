"use client";

import { useState } from "react";
import { inter } from "../quality/tokens";
import { Header } from "../quality/Header";
import { Banner } from "./Banner";
import { VideoHero } from "./VideoHero";
import { FounderSection } from "./FounderSection";
import { EarlyDays } from "./EarlyDays";
import { WordSpreads } from "./WordSpreads";
import { WordSpreads2 } from "./WordSpreads2";
import { WordSpreads3 } from "./WordSpreads3";
import { WordSpreads4 } from "./WordSpreads4";
import { WordSpreads5 } from "./WordSpreads5";
import { ClosingSection } from "./ClosingSection";
import { WordSpreads6 } from "./WordSpreads6";
import { VideoModal } from "../quality/VideoModal";
import { VideoId } from "../quality/types";
import { Footer } from "../Footer";

export function OurStoryPage() {
  const [activeVideo, setActiveVideo] = useState<VideoId | null>(null);

  return (
    <div style={{ fontFamily: inter, backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <Banner />
      {/* Spacer to absorb pill overflow and prevent scroll jank */}
      <div className="pt-[180px] md:pt-[260px] xl:pt-[300px]" style={{ backgroundColor: "white" }} />
      <VideoHero />
      <FounderSection onPlay={() => setActiveVideo("andrew-intro")} />
      <EarlyDays />
      <WordSpreads />
      <WordSpreads2 />
      <WordSpreads3 />
      <WordSpreads4 onPlay={() => setActiveVideo("andrew-intro")} />
      <WordSpreads5 />
      <ClosingSection />
      <WordSpreads6 />
      <Footer />

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
