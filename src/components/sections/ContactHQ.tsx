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
                            <a
                                href="mailto:osquareteckltd@gmail.com?subject=Project Inquiry"
                                className="cta-button w-full justify-center py-6 mt-8 text-center"
                            >
                                Send Inquiry
                            </a>
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
                                <a
                                    href="https://wa.me/2348072050543"
                                    className="text-2xl text-foreground hover:text-electric-green transition-colors inline-flex items-center gap-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    +234 807 205 0543
                                </a>
                            </div>
                        </div>

                        {/* Google Map Embed */}
                        <div className="relative w-full h-80 rounded-modern overflow-hidden border border-glass-border bg-obsidian group">
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                scrolling="no"
                                marginHeight={0}
                                marginWidth={0}
                                src="https://maps.google.com/maps?q=4%20Salako%20Street%2C%20off%20CLEM%20road%2C%20Jankara%20Ijaiye%2C%20Alagbado%2C%20Lagos%20State%2C%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed"
                                className="opacity-80 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
