"use client";

import { motion } from "framer-motion";
import { Navigation, ShieldCheck, BarChart3 } from "lucide-react";

const advantages = [
    {
        icon: <Navigation className="text-electric-green" size={32} />,
        title: "Real-Time Tracking",
        description: "Integrated GPS and performance monitoring for absolute fleet control."
    },
    {
        icon: <ShieldCheck className="text-electric-green" size={32} />,
        title: "Safety First",
        description: "Advanced thermal management and structural safety standards."
    },
    {
        icon: <BarChart3 className="text-electric-green" size={32} />,
        title: "Cost Optimized",
        description: "60% cheaper to maintain than traditional petrol vehicles."
    }
];

export default function FleetAdvantage() {
    return (
        <section className="section-padding bg-obsidian">
            <div className="container mx-auto">
                <div className="mb-16 text-center lg:text-left">
                    <h2 className="text-5xl lg:text-7xl mb-4 tracking-tighter">
                        Built for <span className="text-electric-green">Fleet Efficiency.</span>
                    </h2>
                    <div className="w-24 h-1 bg-electric-green rounded-full mx-auto lg:mx-0" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {advantages.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="glass-card p-12 hover:border-electric-green/50 transition-colors duration-500"
                        >
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-2xl mb-4">{item.title}</h3>
                            <p className="text-silver-gray leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
