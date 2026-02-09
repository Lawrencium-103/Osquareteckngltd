"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Impact() {
    return (
        <section className="relative min-h-[80vh] flex items-center overflow-hidden">
            {/* Background Image / Render */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/swapping.png"
                    alt="Luxury E-Rickshaw in Lagos"
                    fill
                    className="object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-pure-black via-pure-black/60 to-transparent" />
            </div>

            <div className="container mx-auto px-[10%] relative z-10 py-24">
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="max-w-2xl"
                >
                    <div className="font-mono text-electric-green mb-6 flex items-center gap-4">
                        <span className="w-8 h-px bg-electric-green" />
                        STAINABLE. SAFE. CONNECTED.
                    </div>
                    <h2 className="text-6xl lg:text-8xl font-black mb-8 leading-[0.9] tracking-tighter">
                        Clean Energy for <span className="text-electric-green">Legacy.</span>
                    </h2>
                    <p className="text-xl text-silver-gray mb-12 leading-relaxed">
                        Revolutionizing urban transit with high-tech, zero-emission vehicles designed for the heart of Africa. Witness the future of the Lagos commute.
                    </p>
                    <button className="cta-button">
                        Explore Sustainability Report
                    </button>
                </motion.div>
            </div>

            {/* Circular floating elements for visual flair */}
            <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-electric-green/20 rounded-full animate-pulse z-0" />
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-electric-green/10 rounded-full z-0" />
        </section>
    );
}
