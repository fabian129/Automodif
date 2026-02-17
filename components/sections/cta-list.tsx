"use client";

import { ArrowRight, Calendar, Calculator, MapPin } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";

const ctaItems = [
    {
        title: "Boka Service Nu",
        href: "/boka",
        description: "Lediga tider finns tillgängliga",
        icon: Calendar
    },
    {
        title: "Få Gratis Offert",
        href: "/offert",
        description: "Svar inom 24 timmar",
        icon: Calculator
    },
    {
        title: "Hitta Till Verkstaden",
        href: "/kontakt",
        description: "Hälla, Västerås",
        icon: MapPin
    },
];

export function CTAList() {
    return (
        <section className="bg-background pb-32 pt-12 md:pt-24 border-t border-zinc-200 dark:border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col">
                    {ctaItems.map((item, i) => (
                        <Reveal key={i} width="100%" delay={i * 0.1} overflowVisible>
                            <Link
                                href={item.href}
                                className="group relative flex items-center justify-between py-8 md:py-12 border-t border-zinc-200 dark:border-white/5 hover:border-zinc-300 dark:hover:border-white/10 transition-all duration-500"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-x-0 -inset-y-4 bg-zinc-50 dark:bg-transparent dark:bg-gradient-to-r dark:from-primary/5 dark:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />

                                <div className="relative z-10 flex items-center gap-6 md:gap-8 pl-4">
                                    <div className="hidden md:flex w-16 h-16 rounded-full border border-zinc-200 dark:border-white/10 items-center justify-center bg-zinc-100 dark:bg-card text-zinc-600 dark:text-zinc-500 group-hover:text-primary group-hover:border-primary/30 transition-all duration-500">
                                        <item.icon className="w-6 h-6" strokeWidth={1.5} />
                                    </div>

                                    <div>
                                        <h3 className="text-2xl md:text-5xl font-medium text-zinc-950 dark:text-white group-hover:text-primary transition-colors tracking-tight mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-sm md:text-base text-zinc-500 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>

                                <div className="relative z-10 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-card group-hover:border-primary group-hover:bg-primary transition-all duration-500 group-hover:scale-110 mr-4">
                                    <ArrowRight className="w-5 h-5 md:w-8 md:h-8 text-zinc-950 dark:text-white -rotate-45 group-hover:rotate-0 group-hover:text-white transition-all duration-500" />
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                    {/* Closing border */}
                    <div className="w-full h-px bg-zinc-200 dark:bg-white/5" />
                </div>
            </div>
        </section>
    );
}
