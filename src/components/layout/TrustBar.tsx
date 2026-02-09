"use client";

import { motion } from "framer-motion";

const partners = [
    { name: "NESG", label: "Nigerian Economic Summit Group" },
    { name: "REA", label: "Rural Electrification Agency" },
    { name: "REAN", label: "Renewable Energy Association of Nigeria" },
];

export default function TrustBar() {
    return (
        <div className="bg-obsidian border-y border-glass-border py-12 overflow-hidden">
            <div className="container mx-auto px-[10%] mb-8 text-center">
                <h2 className="text-silver-gray font-mono text-xs uppercase tracking-[0.5em] opacity-60">
                    Driving Innovation with Strategic Partners
                </h2>
            </div>

            <div className="flex whitespace-nowrap">
                <div className="animate-marquee flex items-center gap-24 px-12">
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <motion.div
                            key={i}
                            className="group flex flex-col items-center justify-center cursor-pointer"
                            whileHover={{ scale: 1.1 }}
                        >
                            <div className="text-3xl md:text-5xl font-black text-silver-gray grayscale group-hover:grayscale-0 group-hover:text-electric-green transition-all duration-500 opacity-40 group-hover:opacity-100">
                                {partner.name}
                            </div>
                            <span className="text-[10px] font-mono text-silver-gray opacity-0 group-hover:opacity-60 transition-opacity duration-500 mt-2 uppercase tracking-widest">
                                {partner.label}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
