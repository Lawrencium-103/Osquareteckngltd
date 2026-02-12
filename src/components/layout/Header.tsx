"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-xl border-b border-white/5"
        >
            <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                <div className="flex items-center gap-4 group cursor-pointer">
                    <div className="relative w-12 h-12 bg-white rounded-full p-1 overflow-hidden">
                        <Image
                            src="/images/logo.png"
                            alt="OSQUARETECK Logo"
                            fill
                            className="object-contain group-hover:scale-110 transition-transform duration-500 mix-blend-multiply"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-xl md:text-2xl font-black tracking-[0.2em] text-white">
                            OSQUARE<span className="text-electric-green">TECK</span>
                        </span>
                        <span className="font-mono text-[8px] md:text-[10px] uppercase tracking-[0.4em] text-silver-gray opacity-60">
                            Advanced E-Mobility Systems
                        </span>
                    </div>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-12">
                    {["Solutions", "Sustainability", "Fleet", "HQ"].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-xs font-mono uppercase tracking-widest text-silver-gray hover:text-electric-green transition-colors duration-300"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="mailto:osquareteckltd@gmail.com?subject=Inquiry from Website"
                        className="text-xs font-mono uppercase tracking-[0.3em] bg-electric-green text-obsidian px-5 py-2 rounded-full font-bold hover:bg-white transition-all transform hover:scale-105"
                    >
                        Talk to Us
                    </a>
                </nav>
            </div>
        </motion.header>
    );
}
