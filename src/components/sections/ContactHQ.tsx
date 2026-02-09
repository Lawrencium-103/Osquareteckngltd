"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactHQ() {
    return (
        <section className="section-padding bg-pure-black">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Left Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="glass-card p-12"
                    >
                        <h2 className="text-4xl mb-8">Project Inquiry</h2>
                        <form action="#" className="space-y-6">
                            <div>
                                <label className="block font-mono text-xs text-electric-green mb-2 uppercase tracking-widest">Name / Organization</label>
                                <input
                                    type="text"
                                    placeholder="Full Name or Company"
                                    className="w-full bg-white/5 border-b border-glass-border py-4 focus:border-electric-green outline-none transition-colors text-foreground"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-xs text-electric-green mb-2 uppercase tracking-widest">Email Address</label>
                                <input
                                    type="email"
                                    placeholder="email@company.com"
                                    className="w-full bg-white/5 border-b border-glass-border py-4 focus:border-electric-green outline-none transition-colors text-foreground"
                                />
                            </div>
                            <div>
                                <label className="block font-mono text-xs text-electric-green mb-2 uppercase tracking-widest">Interest Area</label>
                                <select className="w-full bg-white/5 border-b border-glass-border py-4 focus:border-electric-green outline-none transition-colors text-foreground appearance-none">
                                    <option className="bg-obsidian">Fleet Transition</option>
                                    <option className="bg-obsidian">Industrial Audit</option>
                                    <option className="bg-obsidian">Infrastructure Partnership</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-mono text-xs text-electric-green mb-2 uppercase tracking-widest">Project Details</label>
                                <textarea
                                    placeholder="Briefly describe your requirements..."
                                    rows={4}
                                    className="w-full bg-white/5 border-b border-glass-border py-4 focus:border-electric-green outline-none transition-colors text-foreground resize-none"
                                />
                            </div>
                            <button type="submit" className="cta-button w-full justify-center py-6 mt-8">
                                Send Inquiry
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Side: Info & Map */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-12 mb-12">
                            <div>
                                <h3 className="text-electric-green font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <MapPin size={16} /> Headquarters
                                </h3>
                                <p className="text-2xl text-foreground leading-relaxed">
                                    4, Salako Street, off CLEM road, <br />
                                    Jankara Ijaiye, Alagbado, <br />
                                    Lagos State, Nigeria.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-electric-green font-mono text-xs uppercase tracking-widest mb-4 flex items-center gap-3">
                                    <Phone size={16} /> Connection
                                </h3>
                                <p className="text-2xl text-foreground">
                                    +234 807 205 0543
                                </p>
                                <p className="text-silver-gray mt-2">osquareteckltd@gmail.com</p>
                            </div>
                        </div>

                        {/* Stylized Dark Mode Map Placeholder */}
                        <div className="relative w-full h-80 rounded-modern overflow-hidden border border-glass-border bg-obsidian group">
                            <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/3.308,6.666,12/800x400?access_token=placeholder')] bg-cover opacity-50 contrast-125 saturate-0 group-hover:saturate-100 transition-all duration-700" title="Interactive Map Placeholder" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-electric-green/20 backdrop-blur-md px-6 py-3 rounded-full border border-electric-green/40 text-electric-green font-mono text-sm">
                                    OPEN INTERACTIVE GRID
                                </div>
                            </div>
                            {/* Decorative scanline effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-20 w-full top-[-100px] animate-[scan_4s_linear_infinite]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
