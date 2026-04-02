"use client";

import { useState } from "react";
import { stix, inter } from "./quality/tokens";

const TEAL = "#009296";
const DARK_TEAL = "#003b3c";

export function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer
      style={{
        background: "linear-gradient(to bottom, #009296 50%, #00b4ae 196.83%)",
        width: "100%",
        boxSizing: "border-box",
      }}
      className="px-5 md:px-[40px] py-[80px]"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 70,
          width: "100%",
        }}
      >
        {/* Tagline */}
        <h2
          style={{
            fontFamily: stix,
            fontWeight: 500,
            fontSize: 48,
            lineHeight: 1.2,
            letterSpacing: "-0.96px",
            color: "white",
            margin: 0,
          }}
          className="text-[32px] md:text-[40px] xl:text-[48px]"
        >
          The supplement brand trusted for over 45 years.
        </h2>

        {/* Divider */}
        <div style={{ height: 1, width: "100%", backgroundColor: "rgba(255,255,255,0.4)" }} />

        {/* Main columns: newsletter + nav */}
        <div
          style={{ display: "grid", gap: 40, width: "100%" }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Newsletter signup */}
          <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
            <p
              style={{
                fontFamily: inter,
                fontWeight: 500,
                fontSize: 24,
                lineHeight: 1.2,
                color: "white",
                margin: 0,
              }}
              className="text-[20px] xl:text-[24px]"
            >
              Save 10% off your next order
            </p>
            <p
              style={{
                fontFamily: inter,
                fontWeight: 400,
                fontSize: 16,
                lineHeight: 1.8,
                color: "white",
                margin: 0,
              }}
            >
              Sign up for our newsletter to receive a welcome gift from us.
            </p>
            <div
              style={{
                backgroundColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "11px 20px",
                maxWidth: 555,
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                style={{
                  fontFamily: inter,
                  fontWeight: 400,
                  fontSize: 16,
                  lineHeight: 1.8,
                  color: DARK_TEAL,
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <button
                type="button"
                style={{
                  fontFamily: inter,
                  fontWeight: 500,
                  fontSize: 16,
                  letterSpacing: "1.6px",
                  color: TEAL,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                SUBMIT
              </button>
            </div>
          </div>

          {/* Nav columns */}
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, color: "white" }}
          >
            {/* Account */}
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <p style={{ fontFamily: inter, fontWeight: 500, fontSize: 24, lineHeight: 1.2, margin: 0 }}
                 className="text-[18px] xl:text-[24px]">
                Account
              </p>
              <div style={{ fontFamily: inter, fontWeight: 400, fontSize: 16, lineHeight: 1.8, display: "flex", flexDirection: "column" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>My Account</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Track Order</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Reset Password</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Shipping &amp; Returns</a>
              </div>
            </div>

            {/* About */}
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <p style={{ fontFamily: inter, fontWeight: 500, fontSize: 24, lineHeight: 1.2, margin: 0 }}
                 className="text-[18px] xl:text-[24px]">
                About
              </p>
              <div style={{ fontFamily: inter, fontWeight: 400, fontSize: 16, lineHeight: 1.8, display: "flex", flexDirection: "column" }}>
                <a href="/our-story" style={{ color: "white", textDecoration: "none" }}>Our Story</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Giving</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Careers</a>
              </div>
            </div>

            {/* Support */}
            <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
              <p style={{ fontFamily: inter, fontWeight: 500, fontSize: 24, lineHeight: 1.2, margin: 0 }}
                 className="text-[18px] xl:text-[24px]">
                Support
              </p>
              <div style={{ fontFamily: inter, fontWeight: 400, fontSize: 16, lineHeight: 1.8, display: "flex", flexDirection: "column" }}>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>Contact</a>
                <a href="#" style={{ color: "white", textDecoration: "none" }}>FAQs</a>
              </div>
            </div>
          </div>
        </div>

        {/* Logo + copyright + FDA */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          <img
            src="/iconlogo.svg"
            alt="ProCaps Laboratories"
            style={{ width: 109, height: 40, objectFit: "contain", display: "block" }}
          />

          <p
            style={{
              fontFamily: inter,
              fontWeight: 400,
              fontSize: 14,
              lineHeight: 1.8,
              color: "white",
              margin: 0,
            }}
          >
            Copyright &copy; 2024 ProCaps Laboratories, Inc.&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" style={{ color: "white", textDecoration: "underline" }}>Terms of Use</a>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <a href="#" style={{ color: "white", textDecoration: "underline" }}>Privacy Policy</a>
          </p>

          <div
            style={{
              border: "1px solid white",
              padding: "26px 40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontFamily: inter,
                fontWeight: 400,
                fontSize: 14,
                lineHeight: 1.8,
                color: "white",
                textAlign: "center",
                margin: 0,
              }}
            >
              *These statements have not been evaluated by the Food and Drug Administration. These products are not intended to diagnose, treat, cure or prevent any disease.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
