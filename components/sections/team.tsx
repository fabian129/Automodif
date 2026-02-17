"use client";

import { Reveal } from "@/components/ui/reveal";
import { Mail, Linkedin } from "lucide-react";
import Image from "next/image";

const team = [
    {
        name: "Erik Johansson",
        role: "Grundare & Mästartekniker",
        bio: "Specialist på tysk fordonsteknik med över 15 års erfarenhet av BMW och Audi.",
        image: "/images/team/team-1.jpg",
    },
    {
        name: "Anna Lindberg",
        role: "Kundmottagning & Rådgivning",
        bio: "Ser till att du får rätt hjälp direkt och att ditt besök blir så smidigt som möjligt.",
        image: "/images/team/team-2.jpg",
    },
    {
        name: "Marcus Eklund",
        role: "Diagnostik & Elektronik",
        bio: "Expert på avancerad felsökning och mjukvaruuppdateringar för moderna bilar.",
        image: "/images/team/team-3.jpg",
    },
    {
        name: "Johan Söderberg",
        role: "Senior Mekaniker",
        bio: "Noggrann och effektiv med fokus på bromssystem och chassi.",
        image: "/images/team/team-4.jpg",
    },
];

export function Team() {
    return (
        <section id="team" className="py-32 bg-white dark:bg-[#09090B]">
            <div className="max-w-7xl mx-auto px-6">
                <Reveal className="mb-24 text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                        Vårt Team
                    </span>
                    <h3 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tighter mb-6">
                        Expertis på plats
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                        Ett dedikerat team av certifierade tekniker och rådgivare som brinner för din bil.
                    </p>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <Reveal key={i} width="100%" delay={i * 0.1}>
                            <div className="group relative">
                                {/* Image Container */}
                                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl mb-6 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-white/5 shadow-lg group-hover:border-primary/30 group-hover:shadow-[0_0_30px_-5px_rgba(0,82,204,0.3)] transition-all duration-700">

                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10" />

                                    {/* Social Icons Overlay (Slide Up) */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 bg-black/40 backdrop-blur-[2px]">
                                        <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                                            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300">
                                                <Linkedin className="w-5 h-5" />
                                            </button>
                                            <button className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300">
                                                <Mail className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>

                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="text-center">
                                    <h4 className="text-2xl font-medium text-zinc-900 dark:text-white mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {member.name}
                                    </h4>
                                    <p className="text-sm font-medium text-primary uppercase tracking-wider mb-4">
                                        {member.role}
                                    </p>
                                    <p className="text-zinc-500 dark:text-zinc-400 font-light leading-relaxed text-sm">
                                        {member.bio}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
