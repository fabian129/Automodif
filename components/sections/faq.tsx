"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, MessageCircleQuestion } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Gäller min nybilsgaranti om jag servar bilen hos er?",
        answer: "Ja, absolut! Eftersom vi är en auktoriserad Autoexperten-verkstad utför vi alltid service enligt biltillverkarens föreskrifter och använder reservdelar av motsvarande, eller högre, kvalitet än original. Därför fortsätter din nybilsgaranti att gälla precis som vanligt.",
    },
    {
        question: "Erbjuder ni lånebil under tiden min bil är på verkstaden?",
        answer: "Ja, vi erbjuder lånebil mot en mindre kostnad när du lämnar in din bil för service eller reparation. Säg bara till vid bokningen så ser vi till att en bil står redo för dig när du kommer.",
    },
    {
        question: "Får jag ett prisförslag innan ni börjar arbeta med bilen?",
        answer: "Självklart. Vi arbetar med full transparens. Efter en felsökning, eller när du bokar en specifik tjänst, ger vi dig alltid ett prisförslag. Vi påbörjar aldrig något extra arbete utan att först ha stämt av kostnaden med dig.",
    },
    {
        question: "Vad innebär Autoexperten Assistans?",
        answer: "När du servar din bil hos oss ingår 12 månaders Autoexperten Assistans helt utan extra kostnad. Det betyder att om du råkar ut för driftstopp, punktering eller nyckelproblem får du hjälp på plats eller bärgning, dygnet runt i hela Norden.",
    },
    {
        question: "Hur ofta ska min bil servas?",
        answer: "Det beror på bilmärke och årsmodell. Moderna bilar varnar ofta i displayen när det är dags, men en generell regel är antingen vid ett visst miltal (t.ex. 1500-3000 mil) eller minst en gång per år, beroende på vilket som inträffar först. Är du osäker? Slå in ditt regnummer så kollar vi åt dig!",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="py-32 bg-white dark:bg-[#09090B] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 dark:bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <Reveal className="text-center mb-16">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                        <MessageCircleQuestion className="w-3 h-3" />
                        Vanliga Frågor
                    </span>
                    <h3 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tighter mb-6">
                        Svar på dina funderingar
                    </h3>
                    <p className="text-zinc-500 dark:text-zinc-400 text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                        Vi tror på transparens och raka svar. Här hittar du de vanligaste frågorna vi får från våra kunder.
                    </p>
                </Reveal>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <Reveal key={index} delay={index * 0.1}>
                                <div
                                    className={cn(
                                        "border border-zinc-200 dark:border-white/5 rounded-2xl overflow-hidden bg-white dark:bg-[#121214] transition-colors duration-300",
                                        isOpen ? "border-primary/20 dark:border-primary/20 shadow-md shadow-black/5 dark:shadow-none bg-zinc-50/50 dark:bg-[#121214]/80" : "hover:border-zinc-300 dark:hover:border-white/10"
                                    )}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? null : index)}
                                        className="w-full px-6 py-6 md:px-8 flex items-center justify-between gap-4 text-left focus:outline-none"
                                    >
                                        <h4 className={cn(
                                            "text-lg font-medium transition-colors duration-300",
                                            isOpen ? "text-primary" : "text-zinc-900 dark:text-zinc-100"
                                        )}>
                                            {faq.question}
                                        </h4>
                                        <div
                                            className={cn(
                                                "shrink-0 flex items-center justify-center w-8 h-8 rounded-full border transition-all duration-300",
                                                isOpen
                                                    ? "bg-primary text-white border-primary"
                                                    : "bg-zinc-100 border-zinc-200 text-zinc-500 dark:bg-white/5 dark:border-white/10 dark:text-zinc-400 group-hover:bg-zinc-200 dark:group-hover:bg-white/10"
                                            )}
                                        >
                                            {isOpen ? (
                                                <Minus className="w-4 h-4" />
                                            ) : (
                                                <Plus className="w-4 h-4" />
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                            >
                                                <div className="px-6 pb-6 md:px-8 text-zinc-600 dark:text-zinc-400 font-normal leading-relaxed">
                                                    {faq.answer}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
