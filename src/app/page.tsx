"use client";

import dynamic from "next/dynamic";
import TrustBar from "@/components/layout/TrustBar";
import Capabilities from "@/components/sections/Capabilities";
import FleetAdvantage from "@/components/sections/FleetAdvantage";
import Impact from "@/components/sections/Impact";
import ContactHQ from "@/components/sections/ContactHQ";

// Dynamically import ScrollSequence as it uses window/canvas
const ScrollSequence = dynamic(() => import("@/components/animation/ScrollSequence"), {
  ssr: false,
  loading: () => (
    <div className="h-screen w-full bg-black flex items-center justify-center">
      <div className="text-electric-green font-mono animate-pulse">LOADING SEQUENCE...</div>
    </div>
  ),
});

export default function Home() {
  return (
    <main className="bg-black">
      {/* Hero Animation Section */}
      <section className="relative">
        <ScrollSequence />

        {/* Hero Overlay Content */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center z-10">
          <div className="container mx-auto px-[10%] text-center">
            <h1 className="text-7xl md:text-9xl mb-8 tracking-tighter mix-blend-difference">
              ELECTRIC <br />
              <span className="text-electric-green">MOBILITY.</span>
            </h1>
            <p className="text-xl md:text-2xl text-silver-gray max-w-2xl mx-auto leading-relaxed mix-blend-difference">
              Building affordable, high-performance electric vehicles and energy infrastructure for Africa.
            </p>
            <div className="mt-12 pointer-events-auto">
              <button className="cta-button">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      <Capabilities />
      <FleetAdvantage />
      <Impact />
      <ContactHQ />

      <footer className="py-8 text-center text-[10px] font-mono text-silver-gray opacity-40 uppercase tracking-[0.3em]">
        © 2026 OSQUARETECK LTD | ADVANCED E-MOBILITY SYSTEMS | BUILT FOR AFRICA
      </footer>
    </main>
  );
}
