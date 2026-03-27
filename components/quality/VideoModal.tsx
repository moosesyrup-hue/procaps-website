"use client";

import { useState, useEffect } from "react";
import { Play, X } from "lucide-react";
import { VideoId, VIDEO_DATA } from "./types";
import { DARK_TEAL, stix, inter } from "./tokens";

export function VideoModal({ videoId, onClose }: { videoId: VideoId; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const video = VIDEO_DATA[videoId];

  // Fade in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 10);
    return () => clearTimeout(t);
  }, []);

  // Lock scroll + ESC key
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") handleClose();
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  function handleClose() {
    setVisible(false);
    setTimeout(onClose, 200);
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: visible ? "rgba(0,0,0,0.88)" : "rgba(0,0,0,0)",
        transition: "background-color 200ms ease",
        padding: "16px",
      }}
      onClick={handleClose}
    >
      {/* Modal container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 900,
          borderRadius: 16,
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "scale(1) translateY(0)" : "scale(0.96) translateY(12px)",
          transition: "opacity 200ms ease, transform 200ms ease",
          boxShadow: "0 32px 80px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* 16:9 video area */}
        <div
          style={{
            aspectRatio: "16/9",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "linear-gradient(135deg, #071a1a 0%, #003b3c 50%, #005a5a 100%)",
          }}
        >
          {/* Subtle grain overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(ellipse at 30% 40%, rgba(72,225,220,0.08) 0%, transparent 60%)",
            }}
          />

          {/* Center content */}
          <div
            style={{
              position: "relative",
              zIndex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 28,
              textAlign: "center",
              padding: "0 40px",
            }}
          >
            {/* Animated play ring */}
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: "50%",
                border: "2px solid rgba(255,255,255,0.35)",
                backgroundColor: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backdropFilter: "blur(4px)",
              }}
            >
              <Play style={{ width: 30, height: 30, color: "white", fill: "white", marginLeft: 4 }} />
            </div>

            <div>
              <p
                style={{
                  fontFamily: stix,
                  fontSize: 26,
                  fontWeight: 500,
                  color: "white",
                  margin: 0,
                  marginBottom: 10,
                  lineHeight: 1.3,
                }}
              >
                {video.title}
              </p>
              <p
                style={{
                  fontFamily: inter,
                  fontSize: 14,
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.45)",
                  margin: 0,
                  letterSpacing: "0.5px",
                }}
              >
                {video.subtitle}
              </p>
            </div>

            <p
              style={{
                fontFamily: inter,
                fontSize: 13,
                fontWeight: 400,
                color: "rgba(255,255,255,0.25)",
                margin: 0,
                letterSpacing: "1.5px",
                textTransform: "uppercase",
              }}
            >
              Video placeholder
            </p>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={handleClose}
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            width: 36,
            height: 36,
            borderRadius: "50%",
            backgroundColor: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 150ms ease",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.22)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(255,255,255,0.12)";
          }}
        >
          <X style={{ width: 15, height: 15, color: "white" }} />
        </button>
      </div>
    </div>
  );
}
