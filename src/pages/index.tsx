import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`relative ${inter.className}`}>
      <Navigation />
      <HeroSection />
    </main>
  );
}
