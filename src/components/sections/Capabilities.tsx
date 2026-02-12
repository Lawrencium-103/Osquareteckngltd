"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Zap, Timer } from "lucide-react";

export default function Capabilities() {
    return (
        <section className="section-padding bg-pure-black overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 gap-y-1 bg-glass-border">
                {/* Capability 1: Powertrains */}
                <div className="glass-card rounded-none p-12 lg:p-20 flex flex-col justify-center bg-obsidian">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-12 bg-electric-green/10 flex items-center justify-center rounded-lg mb-8">
                            <Zap className="text-electric-green" size={24} />
                        </div>
                        <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                            High-Performance <span className="text-electric-green">Powertrains.</span>
                        </h2>
                        <p className="text-silver-gray text-lg mb-8 leading-relaxed max-width-[500px]">
                            We engineer electric powertrains that outperform traditional ICE engines. Experience higher torque, faster acceleration, and significantly lower operating costs.
                        </p>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-glass-border mt-8 group">
                            <Image
                                src="/images/powertrain.jpg"
                                alt="Premium Commuter Powertrain"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                    </motion.div>
                </div>

                {/* Capability 2: Swapping Stations */}
                <div className="glass-card rounded-none p-12 lg:p-20 flex flex-col justify-center bg-obsidian">
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="w-12 h-12 bg-solar-yellow/10 flex items-center justify-center rounded-lg mb-8">
                            <Timer className="text-solar-yellow" size={24} />
                        </div>
                        <h2 className="text-4xl lg:text-5xl mb-6 leading-tight">
                            2-Minute <span className="text-solar-yellow">Swapping Stations.</span>
                        </h2>
                        <p className="text-silver-gray text-lg mb-8 leading-relaxed max-width-[500px]">
                            Eliminate range anxiety. Our smart swapping stations allow drivers to replenish their energy in under 2 minutes—faster than a traditional petrol stop.
                        </p>
                        <div className="relative aspect-video rounded-xl overflow-hidden border border-glass-border mt-8 group">
                            <Image
                                src="/images/swapping.png"
                                alt="2-Minute Swapping Station"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
