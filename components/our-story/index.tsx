"use client";

import { useState } from "react";
import { inter } from "../quality/tokens";
import { Header } from "../quality/Header";
import { Banner } from "./Banner";
import { VideoHero } from "./VideoHero";
import { FounderSection } from "./FounderSection";
import { VideoModal } from "../quality/VideoModal";
import { VideoId } from "../quality/types";

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

      {activeVideo && (
        <VideoModal videoId={activeVideo} onClose={() => setActiveVideo(null)} />
      )}
    </div>
  );
}
