import { Header } from "@/components/quality/Header";
import { HeroCarousel } from "@/components/quality/HeroCarousel";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ fontFamily: "var(--font-inter), Inter, sans-serif", backgroundColor: "white", overflowX: "hidden" }}>
      <Header />
      <HeroCarousel />
      <Footer />
    </div>
  );
}
