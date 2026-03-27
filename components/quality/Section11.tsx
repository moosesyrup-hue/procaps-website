"use client";

import { FadeIn } from "./FadeIn";
import { PeekCarousel } from "./PeekCarousel";
import { TealLine, stix, inter, TEAL, DARK_TEAL, TEAL_MUTED, BG_CREAM, stars } from "./tokens";

const testimonials = [
  {
    quote:
      "I can actually feel the difference in quality. No stomach upset, no fillers — just pure nutrition that works.",
    name: "Sarah M.",
    role: "Healthy Hair Skin & Nails Customer",
  },
  {
    quote:
      "After 40 years of trying different brands, I finally found supplements I can trust. The purity is noticeable.",
    name: "Robert K.",
    role: "Essential 1, NuOnce Customer",
  },
  {
    quote:
      "As someone with a sensitive stomach, these are the only vitamins that don't cause discomfort. The pH balanced formula really works.",
    name: "Jennifer L.",
    role: "Digestive Health Customer",
  },
];

function TestimonialCard({ quote, name, role }: { quote: string; name: string; role: string }) {
  return (
    <div
      style={{
        width: "100%",
        minWidth: 0,
        height: 369,
        backgroundColor: "white",
        borderRadius: 20,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {/* Stars */}
      <img
        src={stars}
        alt="5 stars"
        style={{ width: 97, height: 17, objectFit: "contain" }}
      />

      {/* Quote */}
      <p
        style={{
          fontFamily: stix,
          fontSize: 24,
          fontWeight: 400,
          color: DARK_TEAL,
          lineHeight: "30px",
          margin: 0,
          flex: 1,
        }}
        className="text-lg md:text-[24px]"
      >
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div style={{ height: 1, backgroundColor: "rgba(0,146,150,0.2)" }} />

      {/* Name + role */}
      <div>
        <p
          style={{
            fontFamily: inter,
            fontSize: 16,
            fontWeight: 500,
            color: DARK_TEAL,
            margin: 0,
            marginBottom: 2,
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: inter,
            fontSize: 14,
            fontWeight: 400,
            color: TEAL_MUTED,
            margin: 0,
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

export function Section11() {
  return (
    <section
      style={{
        backgroundColor: BG_CREAM,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="px-5 md:px-10 xl:px-[40px] py-[60px] md:py-[80px] xl:py-[120px]"
    >
      {/* Header copy */}
      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
          marginBottom: 60,
        }}
      >
        <h2
          style={{
            fontFamily: stix,
            fontWeight: 400,
            color: DARK_TEAL,
            lineHeight: 1.1,
            letterSpacing: "-1.5px",
            margin: 0,
          }}
          className="text-[42px] md:text-[64px] xl:text-[92px]"
        >
          Trusted by
          <br className="md:hidden" />
          {" "}<span style={{ whiteSpace: "nowrap" }}>health-conscious</span> people.
        </h2>

        <TealLine width={50} />

        <p
          style={{
            fontFamily: inter,
            fontWeight: 500,
            color: TEAL,
            letterSpacing: "2px",
            margin: 0,
          }}
          className="text-sm md:text-[20px]"
        >
          CUSTOMER STORIES
        </p>
      </div>

      {/* Testimonial cards — carousel on mobile, row on desktop */}
      <div
        className="hidden md:flex"
        style={{ maxWidth: 1320, width: "100%", gap: 20, alignItems: "stretch", marginBottom: 60 }}
      >
        {testimonials.map((t, i) => (
          <FadeIn key={i} delay={i * 100} style={{ flex: "1 0 0" }}>
            <TestimonialCard {...t} />
          </FadeIn>
        ))}
      </div>
      <div className="md:hidden w-full" style={{ marginBottom: 60 }}>
        <PeekCarousel>
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </PeekCarousel>
      </div>

      {/* Stats row */}
      <FadeIn
        style={{
          maxWidth: 1320,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 40,
        }}
      >
        {/* Stat 1 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            4.9/5
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Average rating
          </p>
        </div>

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 80,
            backgroundColor: TEAL,
            opacity: 0.3,
            flexShrink: 0,
          }}
          className="hidden md:block"
        />

        {/* Stat 2 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            50k+
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Happy customers
          </p>
        </div>

        {/* Separator */}
        <div
          style={{
            width: 1,
            height: 80,
            backgroundColor: TEAL,
            opacity: 0.3,
            flexShrink: 0,
          }}
          className="hidden md:block"
        />

        {/* Stat 3 */}
        <div style={{ textAlign: "center", flex: 1 }}>
          <p
            style={{
              fontFamily: stix,
              color: TEAL,
              lineHeight: 1.1,
              margin: 0,
              marginBottom: 8,
              fontWeight: 400,
            }}
            className="text-[36px] md:text-[48px] xl:text-[58px]"
          >
            45+
          </p>
          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              color: DARK_TEAL,
              margin: 0,
            }}
            className="text-base md:text-[20px]"
          >
            Years of excellence
          </p>
        </div>
      </FadeIn>
    </section>
  );
}
