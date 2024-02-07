import { useRef } from "react";
import { Inter } from "next/font/google";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const featureSectionRef = useRef<HTMLHeadingElement>(null);

  return (
    <main className={`relative ${inter.className}`}>
      <Navigation />
      <div className="w-full mx-auto lg:w-[800px]">
        <HeroSection />
        <Features />
      </div>
      <Footer />
    </main>
  );
}
