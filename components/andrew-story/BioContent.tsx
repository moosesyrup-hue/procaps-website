"use client";

import { useRef, useState, useEffect } from "react";
import { stix, inter, TEAL, DARK_TEAL } from "../quality/tokens";

// ── Scroll animation hook ──────────────────────────────────────────────────

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Animated primitives ────────────────────────────────────────────────────

/** Vertical line that grows downward on scroll */
function SectionDivider() {
  const { ref, visible } = useInView(0.5);
  return (
    <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          width: 1,
          backgroundColor: TEAL,
          transition: "height 0.7s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
          opacity: visible ? 1 : 0,
        }}
        className={visible
          ? "h-[80px] md:h-[100px] xl:h-[111px]"
          : "h-[0px]"}
      />
    </div>
  );
}

/** Horizontal line that expands outward on scroll */
function QuoteDivider() {
  const { ref, visible } = useInView(0.5);
  return (
    <div ref={ref} style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          height: 1,
          backgroundColor: TEAL,
          width: visible ? 68 : 0,
          transition: "width 0.6s cubic-bezier(0.4,0,0.2,1), opacity 0.4s ease",
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}

/** Generic fade-up with configurable delay */
function Reveal({ children, delay = 0, style }: {
  children: React.ReactNode;
  delay?: number;
  style?: React.CSSProperties;
}) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms, transform 0.7s cubic-bezier(0.4,0,0.2,1) ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// ── Typography ─────────────────────────────────────────────────────────────

function Teal({ children }: { children: React.ReactNode }) {
  return <em style={{ color: TEAL, fontStyle: "italic" }}>{children}</em>;
}

function SectionHeadline({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <h2
        style={{
          fontFamily: stix,
          fontWeight: 500,
          letterSpacing: "-1.08px",
          lineHeight: 1.1,
          margin: 0,
          color: DARK_TEAL,
          textAlign: "center",
        }}
        className="text-[38px] md:text-[50px] xl:text-[60px]"
      >
        {children}
      </h2>
    </Reveal>
  );
}

function BodyText({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <p
        style={{
          fontFamily: inter,
          fontWeight: 500,
          lineHeight: "28px",
          letterSpacing: "-0.4px",
          margin: 0,
          color: DARK_TEAL,
          textAlign: "center",
          maxWidth: 840,
          width: "100%",
        }}
        className="text-[16px] md:text-[18px] xl:text-[20px]"
      >
        {children}
      </p>
    </Reveal>
  );
}

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <Reveal delay={80}>
      <p
        style={{
          fontFamily: `"STIX Two Math", "STIX Two Text", Georgia, serif`,
          fontWeight: 400,
          fontStyle: "normal",
          lineHeight: 1.45,
          letterSpacing: "-0.7px",
          margin: 0,
          color: TEAL,
          textAlign: "center",
          maxWidth: 655,
          width: "100%",
        }}
        className="text-[22px] md:text-[28px] xl:text-[35px]"
      >
        {children}
      </p>
    </Reveal>
  );
}

// ── Layout helpers ─────────────────────────────────────────────────────────

function BodyGroup({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      className="gap-[24px] md:gap-[28px] xl:gap-[32px]"
    >
      {children}
    </div>
  );
}

function Section({ children }: { children: React.ReactNode }) {
  return (
    <section
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      className="gap-[48px] md:gap-[64px] xl:gap-[80px] px-5 md:px-10 xl:px-[40px]"
    >
      {children}
    </section>
  );
}

function QuoteBlock({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}
      className="gap-[32px] md:gap-[40px] xl:gap-[48px]"
    >
      <QuoteDivider />
      <PullQuote>{children}</PullQuote>
      <QuoteDivider />
    </div>
  );
}

// ── Page content ───────────────────────────────────────────────────────────

export function BioContent() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", width: "100%" }}
      className="py-[80px] md:py-[100px] xl:py-[120px] gap-[64px] md:gap-[88px] xl:gap-[120px]"
    >

      {/* ── An early start. ─────────────────────────────────────── */}
      <SectionDivider />
      <Section>
        <SectionHeadline>An early <Teal>start.</Teal></SectionHeadline>
        <BodyGroup>
          <BodyText delay={80}>
            We often accidentally discover our career path as a result of interests we realize early in
            our childhood. Such is the case with Andrew&rsquo;s interest in vitamins, which began when
            he was a very young child seeking to make his pets healthier.
          </BodyText>
          <BodyText delay={140}>
            Determined to find a way to help physicians and institutions change their approach to health,
            Andrew decided to pursue a law degree and focus his practice on medical and healthcare
            regulation. Andrew attended Loyola University Law School in Los Angeles, where he received a
            Juris Doctor Degree and subsequently opened a law practice, focusing on medical legal issues,
            including food and drug law.
          </BodyText>
        </BodyGroup>
      </Section>

      {/* ── True passion changes a path. ────────────────────────── */}
      <SectionDivider />
      <Section>
        <SectionHeadline>True <Teal>passion</Teal> changes a path.</SectionHeadline>
        <BodyText delay={80}>
          Andrew had another passion, beginning in his childhood and continuing throughout his academic
          career, which exerted an equally significant influence on his endeavors. This other passion was
          athletics, particularly track and field. Andrew&rsquo;s focus was the decathlon, which required
          proficiency at 10 different events and demanded speed, strength, agility and coordination. The
          intensive training and limited recovery time encouraged Andrew to look to nutrition as a means
          of improving performance, speeding recovery and preventing injury. In doing so, he found the
          same aspects of nutrition and biochemistry that ensure optimal athletic performance also
          directly impact optimal health.
        </BodyText>
        <QuoteBlock>
          &ldquo;The medical profession seemed to be entirely focused on illness and not on wellness.
          I think I&rsquo;d rather focus on prevention.&rdquo;
        </QuoteBlock>
        <BodyText>
          In 1979, while attending Law School and training for the decathlon, Andrew developed a
          straightforward vitamin regimen that contained performance-enhancing ingredients for elite
          athletes. At about that time, he also began giving seminars for physicians looking to be more
          informed in recommending supplements to their patients. Unfortunately, conventional products
          did not provide the ingredients backed by scientific research, and the quality of those
          supplements discouraged Andrew from consuming them himself or recommending them to physicians
          or others. Andrew was left with only one alternative: to formulate his own vitamins and
          high-quality nutritional supplements that conformed precisely to the scientific literature.
        </BodyText>
      </Section>

      {/* ── Where & how to create vitamins. ─────────────────────── */}
      <SectionDivider />
      <Section>
        <SectionHeadline>Where &amp; how to create <Teal>vitamins.</Teal></SectionHeadline>
        <BodyText delay={80}>
          Designing and manufacturing a high-quality vitamin is not a simple process. It requires a
          great deal of expense, hard work and experience — which is precisely the reason most companies
          don&rsquo;t actually make their own products, but simply market those made for them by contract
          manufacturers. The caliber of vitamins Andrew sought to take in 1979 was simply not available
          from any existing company, so he was forced to find a way to make them himself.
        </BodyText>
        <QuoteBlock>
          &ldquo;It&rsquo;s not important that you get the products I&rsquo;m offering, but it&rsquo;s
          very important that you get the information I&rsquo;m sharing.&rdquo;
        </QuoteBlock>
        <BodyText>
          Fortunately, while Andrew attended law school, he had worked part-time for a vitamin company
          that permitted him to create and manufacture his own formulas. In so doing, Andrew developed
          the unique, additive-free manufacturing process that sets ProCaps apart from the rest of the
          industry. The incredibly pure and active formulas soon became the favorites of the elite
          athletes, and interest in Andrew&rsquo;s products began to grow by word-of-mouth to health
          professionals as well as the general public.
          <br /><br />
          By the late 1980s, Andrew felt encouraged by the public&rsquo;s increased interest in
          nutritional supplementation and decided to retire from his law practice to devote himself
          exclusively to a lifelong dream:{" "}
          <em>to produce the highest quality vitamins in the world and connect with consumers through education.</em>
        </BodyText>
      </Section>

      {/* ── Starting ProCaps Laboratories. ──────────────────────── */}
      <SectionDivider />
      <Section>
        <SectionHeadline><Teal>Starting</Teal> ProCaps Laboratories.</SectionHeadline>
        <BodyText delay={80}>
          As the years have passed, the vitamin industry continues to be saturated with low quality
          products that lack credibility and remain decades behind the research. Andrew&rsquo;s strength
          is that he has taken the natural, rational approach to manufacturing and marketing: sane,
          realistic, and intractably honest — and he has presented his audience with the unvarnished
          truth. It&rsquo;s an admittedly distinctive approach these days, but Andrew&rsquo;s success
          stands as a testament to the power of an unwavering devotion to excellence and honesty.
        </BodyText>
      </Section>

      {/* ── Closing: divider + teal ProCaps logo ────────────────── */}
      <SectionDivider />
      <Reveal>
        <img
          src="/procaps-logo-teal.svg"
          alt="ProCaps Laboratories"
          className="w-[120px] md:w-[136px] xl:w-[154px]"
        />
      </Reveal>

    </div>
  );
}
