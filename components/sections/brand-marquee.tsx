"use client";

import Image from "next/image";
import { Settings } from "lucide-react";

const BRANDS = [
    { name: "Volvo", slug: "volvo" },
    { name: "Volkswagen", slug: "volkswagen" },
    { name: "Audi", slug: "audi" },
    { name: "BMW", slug: "bmw" },
    { name: "Mercedes-Benz", slug: "mercedes" },
    { name: "Toyota", slug: "toyota" },
    { name: "Skoda", slug: "skoda" },
    { name: "Kia", slug: "kia" },
];

export function BrandMarquee() {
    return (
        <section className="py-20 border-t border-white/5 bg-[#050505] relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-20 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold text-white tracking-[0.2em] uppercase backdrop-blur-sm">
                    Vi servar alla märken
                </span>
            </div>

            <div className="w-full overflow-hidden relative">
                {/* Gradient Masks */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10" />

                <div className="flex w-max animate-scroll hover:[animation-play-state:paused] gap-16 sm:gap-24 items-center py-8">
                    {/* First set */}
                    <div className="flex items-center gap-16 sm:gap-24 shrink-0">
                        {BRANDS.map((brand, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-4 group cursor-pointer transition-all duration-300"
                            >
                                <Image
                                    src={`https://cdn.simpleicons.org/${brand.slug}/white`}
                                    alt={`${brand.name} logo`}
                                    width={40}
                                    height={40}
                                    className="h-8 sm:h-10 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    unoptimized
                                />
                                <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-600 group-hover:from-white group-hover:to-zinc-200 transition-all duration-300 hidden md:block">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                    {/* Duplicate for seamless scroll */}
                    <div className="flex items-center gap-16 sm:gap-24 shrink-0">
                        {BRANDS.map((brand, i) => (
                            <div
                                key={`dup-${i}`}
                                className="flex items-center gap-4 group cursor-pointer transition-all duration-300"
                            >
                                <Image
                                    src={`https://cdn.simpleicons.org/${brand.slug}/white`}
                                    alt={`${brand.name} logo`}
                                    width={40}
                                    height={40}
                                    className="h-8 sm:h-10 w-auto object-contain opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                    unoptimized
                                />
                                <span className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-zinc-600 to-zinc-600 group-hover:from-white group-hover:to-zinc-200 transition-all duration-300 hidden md:block">
                                    {brand.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
