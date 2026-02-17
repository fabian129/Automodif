"use client";

import { Reveal } from "@/components/ui/reveal";
import { Calendar, Wrench, CheckCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";



const steps = [
    {
        id: "01",
        title: "Boka & Lämna in",
        description: "Boka tid online eller via telefon. Lämna nycklarna i vår nyckelinkast eller i receptionen.",
        icon: Calendar,
    },
    {
        id: "02",
        title: "Diagnos & Åtgärd",
        description: "Vi felsöker, ger dig ett fast pris och utför arbetet med originaldelar enligt din bils serviceplan.",
        icon: Wrench,
    },
    {
        id: "03",
        title: "Klart att hämta",
        description: "Du får ett SMS när bilen är klar. Betala smidigt och få din stämplade servicebok.",
        icon: CheckCheck,
    },
];

export function Process() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <section id="process" className="py-48 bg-background relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative">
                <Reveal className="text-center mb-64" width="100%">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                        Enkelt & Smidigt
                    </span>
                    <h3 className="text-5xl md:text-7xl font-medium text-zinc-950 dark:text-white tracking-tighter mb-8 leading-[1.1]">
                        Så här <span className="text-primary">funkar det</span>
                    </h3>
                    <p className="text-xl md:text-2xl text-zinc-500 dark:text-white font-light max-w-2xl mx-auto leading-relaxed">
                        Från bokning till upphämtning. Vi har <span className="text-zinc-900 dark:text-white font-normal">minimerat krånglet</span> så att du kan tänka på annat.
                    </p>
                </Reveal>

                {/* Main Grid Container for the Timeline */}
                {/* We wrap the beam and steps here to control the beam height explicitly */}
                <div ref={containerRef} className="relative max-w-6xl mx-auto pb-56">

                    {/* Continuous Vertical Line Background (Faint) */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 dark:bg-white/5 -translate-x-1/2" />

                    {/* Animated Beam */}
                    <motion.div
                        style={{ height: lineHeight }}
                        className="hidden md:block absolute left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary via-blue-400 to-primary -translate-x-1/2 shadow-[0_0_20px_rgba(0,82,204,0.8)] z-0 origin-top"
                    />

                    {/* Mobile Gradient Line */}
                    <div className="md:hidden absolute left-[30px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2" />

                    <div className="space-y-24 md:space-y-32">
                        {steps.map((step, i) => {
                            // Determine alignment for Zig-Zag
                            const isLeft = i % 2 === 0;

                            return (
                                <Reveal key={i} width="100%" delay={i * 0.1} overflowVisible>
                                    <div className="grid grid-cols-[60px_1fr] md:grid-cols-[1fr_80px_1fr] gap-x-6 md:gap-x-12 items-center">

                                        {/* Desktop: Left Content Column */}
                                        <div className={cn(
                                            "hidden md:block",
                                            isLeft ? "opacity-100" : "opacity-0"
                                        )}>
                                            {isLeft && (
                                                <div className="text-right pr-12 lg:pr-16">
                                                    <h4 className="text-3xl md:text-4xl font-medium text-primary mb-4 tracking-tight transition-colors duration-500">
                                                        {step.title}
                                                    </h4>
                                                    <p className="text-lg md:text-xl text-zinc-600 dark:text-white/80 font-light leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                                        {step.description}
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        {/* Icon Column (Center Desktop, Left Mobile) */}
                                        <div className="relative flex justify-center z-10">
                                            <div className="relative w-14 h-14 md:w-24 md:h-24 rounded-3xl bg-white dark:bg-[#121214] border border-zinc-200 dark:border-white/10 flex items-center justify-center shadow-lg dark:shadow-[0_0_20px_-5px_rgba(0,0,0,0.5)] hover:border-primary/50 hover:shadow-[0_0_40px_-5px_rgba(0,82,204,0.5)] transition-all duration-500 group">
                                                <step.icon className="w-6 h-6 md:w-10 md:h-10 text-zinc-500 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />

                                                {/* Badge */}
                                                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-card border border-zinc-200 dark:border-white/10 flex items-center justify-center text-xs font-bold text-zinc-500 group-hover:text-white group-hover:bg-primary group-hover:border-primary transition-all duration-500 shadow-md z-20">
                                                    {step.id}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right Content Column (Mobile Content OR Desktop Right) */}
                                        <div className={cn(
                                            // Mobile: Always visible
                                            // Desktop: Visible only if NOT left
                                            "block",
                                            isLeft ? "md:opacity-0" : "md:opacity-100"
                                        )}>
                                            {/* Mobile Content (Always Rendered here, hidden on Desktop if it's a Left Item) */}
                                            <div className={cn(
                                                "md:pl-12 lg:pl-16",
                                                // On Desktop, if it's a Left item, we hide this duplicate content
                                                // On Mobile, we show it.
                                                isLeft ? "md:hidden" : "block"
                                            )}>
                                                <h4 className="text-2xl md:text-4xl font-medium text-primary mb-4 tracking-tight transition-colors duration-500">
                                                    {step.title}
                                                </h4>
                                                <p className="text-base md:text-xl text-zinc-600 dark:text-white/80 font-light leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>

                {/* Premium CTA at the bottom - Separated from Beam Container */}
                <Reveal width="100%">
                    <motion.div
                        initial={{ borderColor: "rgba(255,255,255,0.1)" }}
                        whileInView={{
                            borderColor: ["rgba(255,255,255,0.1)", "rgba(0, 82, 204, 0.6)", "rgba(255,255,255,0.1)"]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.5
                        }}
                        className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#121214] p-12 text-center group shadow-xl dark:shadow-none"
                    >
                        {/* Glow Effect */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-primary/20 blur-[100px] pointer-events-none group-hover:bg-primary/30 transition-colors duration-700" />

                        <div className="relative z-10 flex flex-col items-center">
                            <h4 className="text-3xl md:text-5xl font-medium text-zinc-950 dark:text-white mb-6 tracking-tight">
                                Redo att boka tid?
                            </h4>
                            <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
                                Vi ser till att din bil rullar säkert på vägarna igen. Boka din tid online eller ring oss direkt.
                            </p>

                            <div className="flex flex-col md:flex-row gap-4">
                                <a href="#contact" className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-bold rounded-xl hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-all hover:scale-105 inline-flex items-center gap-2 shadow-lg dark:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    Boka Service Nu
                                    <Calendar className="w-4 h-4" />
                                </a>

                                <a href="tel:021123939" className="px-8 py-4 border border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-white/5 text-zinc-900 dark:text-white text-sm font-medium rounded-xl hover:bg-zinc-100 dark:hover:bg-white/10 transition-all hover:scale-105 inline-flex items-center gap-2 backdrop-blur-sm">
                                    Ring 021-12 39 39
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
