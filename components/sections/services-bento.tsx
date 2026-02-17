"use client";

import { useState } from "react";
import {
    ClipboardCheck,
    Wrench,
    CheckCircle,
    Disc,
    Monitor,
    Snowflake,
} from "lucide-react";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

import { ServiceModal } from "@/components/ui/service-modal";
import { TiltCard } from "@/components/ui/tilt-card";

export function ServicesBento() {
    interface Service {
        title: string;
        description: string;
        longDescription: string;
        details: string[];
        icon: any; // Lucide icon type is tricky, any is safer for now or React.ElementType
    }
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    const services = {
        service: {
            title: "Service & Besiktning",
            description: "Regelbunden service enligt tillverkarens intervaller.",
            longDescription: "Vi utför service på alla bilmärken enligt tillverkarens rekommendationer. Detta innebär att din nybilsgaranti fortsätter att gälla precis som hos en märkesverkstad. Vi stämplar din servicebok (digitalt eller fysiskt) och släcker servicelampan.",
            details: ["Oljeservice & Filterbyte", "Stämpel i servicebok", "Nybilsgarantin gäller", "Släckning av servicelampa", "Genomgång av säkerhetspunkter"],
            icon: ClipboardCheck
        },
        repairs: {
            title: "Reparationer",
            description: "Från bromsar till motorarbeten.",
            longDescription: "Oavsett om det gäller ett trasigt avgassystem, slitna bromsar eller en motor som krånglar så har vi kompetensen och utrustningen för att hjälpa dig. Vi använder alltid reservdelar av originalkvalitet.",
            details: ["Bromsbyte & reparation", "Avgassystem & ljuddämpare", "Fjädring & stötdämpare", "Kopplingsbyte", "Motorrenovering"],
            icon: Wrench
        },
        tires: {
            title: "Däck & Hjul",
            description: "Skifte, balansering och hjulinställning för optimal säkerhet.",
            longDescription: "Däcken är din bils enda kontakt med vägen. Vi hjälper dig med allt från skifte och förvaring till balansering och hjulinställning för att du ska köra säkert och ekonomiskt.",
            details: ["Däckskifte", "Däckhotell", "Balansering", "Hjulinställning", "Försäljning av däck & fälg"],
            icon: Disc
        },
        diagnostics: {
            title: "Diagnostik",
            description: "Avancerad felsökning av elektronik och motorstyrning.",
            longDescription: "Lyser motorlampan? Vi har avancerad diagnosutrustning för att kommunicera med din bils alla system. Vi läser ut felkoder, analyserar data och hittar orsaken till problemet.",
            details: ["Felsökning med modern utrustning", "Motorstyrning", "ABS & Airbag", "Elsystem & batteri", "Kodning & programmering"],
            icon: Monitor
        },
        ac: {
            title: "AC-Service",
            description: "Klimatservice, läcksökning och påfyllning.",
            longDescription: "En fungerande AC är viktigt för både komfort och säkerhet. Vi är certifierade för att arbeta med AC-system och hjälper dig med allt från service och påfyllning till reparation och läcksökning.",
            details: ["Felsökning AC", "Läcksökning med UV/gas", "Påfyllning av köldmedium", "Rengöring av systemet", "Reparation av kompressor"],
            icon: Snowflake
        }
    };

    return (
        <section id="services" className="py-32 bg-background relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 md:mb-32">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                                <Wrench className="w-3 h-3" />
                                Vad vi erbjuder
                            </span>
                            <h3 className="text-5xl md:text-7xl font-medium text-white tracking-tighter mb-6">
                                Våra Tjänster
                            </h3>
                            <p className="text-zinc-400 text-lg md:text-xl font-light max-w-2xl leading-relaxed">
                                Komplett bilvård under ett tak. Från <span className="text-white font-normal">enkel service</span> till <span className="text-white font-normal">avancerad diagnostik</span>.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-6 auto-rows-[280px]">
                    {/* Service & Inspection (Large) */}
                    <Reveal
                        className="md:col-span-4 md:row-span-2 h-full"
                        width="100%"
                        delay={0.1}
                        fullHeight
                    >
                        <TiltCard
                            onClick={() => setSelectedService(services.service)}
                            className="relative h-full bg-card border border-white/5 rounded-3xl overflow-hidden group p-8 md:p-12 flex flex-col justify-between hover:border-white/10 transition-all hover-glow cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/gallery/real-2.jpg"
                                    alt="Service Workshop"
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                            </div>

                            {/* Hover Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10"></div>

                            <div className="relative z-10 w-full" style={{ transform: "translateZ(20px)" }}>
                                <div className="w-14 h-14 rounded-2xl border border-white/10 flex items-center justify-center bg-[#18181B]/80 backdrop-blur-sm mb-8 text-primary shadow-[0_0_20px_-5px_rgba(0,82,204,0.3)]">
                                    <ClipboardCheck className="w-7 h-7" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-3xl md:text-4xl font-medium text-white mb-4 tracking-tight drop-shadow-md">
                                    Service & Besiktning
                                </h4>
                                <p className="text-base md:text-lg text-zinc-300 font-light max-w-md leading-relaxed drop-shadow-sm">
                                    Regelbunden service enligt tillverkarens intervaller. Vi stämplar din servicebok och säkerställer att <span className="text-white font-normal">nybilsgarantin gäller</span>.
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-wrap gap-2 mt-8" style={{ transform: "translateZ(10px)" }}>
                                {["Oljeservice", "Filterbyte", "Besiktningskontroll", "Stämpel i bok"].map((tag, i) => (
                                    <span key={i} className="px-3 py-1 rounded-full border border-white/10 bg-black/40 backdrop-blur-sm text-xs font-medium text-zinc-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* Repairs (Medium Vertical) */}
                    <Reveal
                        className="md:col-span-2 md:row-span-2 h-full"
                        width="100%"
                        delay={0.2}
                        fullHeight
                    >
                        <TiltCard
                            onClick={() => setSelectedService(services.repairs)}
                            className="relative h-full bg-card border border-white/5 rounded-3xl overflow-hidden group p-8 md:p-10 flex flex-col hover:border-white/10 transition-all hover-glow cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/gallery/bento-tech.jpg"
                                    alt="Car Repair"
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
                            </div>

                            <div style={{ transform: "translateZ(20px)" }} className="relative z-10 flex flex-col items-start h-full">
                                <div className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center bg-[#18181B]/80 backdrop-blur-sm mb-8 text-zinc-400 group-hover:text-primary transition-colors">
                                    <Wrench className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-2xl font-medium text-white mb-4 tracking-tight drop-shadow-md">
                                    Reparationer
                                </h4>
                                <p className="text-sm text-zinc-300 font-light mb-auto leading-relaxed drop-shadow-sm">
                                    Från bromsar till motorarbeten. Vi använder alltid <span className="text-white font-normal">original-delar</span> eller motsvarande.
                                </p>
                                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-3 w-full">
                                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium uppercase tracking-wide">
                                        <CheckCircle className="w-4 h-4 text-primary fill-primary/10" /> Bromsar
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium uppercase tracking-wide">
                                        <CheckCircle className="w-4 h-4 text-primary fill-primary/10" /> Avgassystem
                                    </div>
                                    <div className="flex items-center gap-3 text-xs text-zinc-400 font-medium uppercase tracking-wide">
                                        <CheckCircle className="w-4 h-4 text-primary fill-primary/10" /> Fjädring
                                    </div>
                                </div>
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* Tires */}
                    <Reveal className="md:col-span-2 h-full" width="100%" delay={0.3} fullHeight>
                        <TiltCard
                            onClick={() => setSelectedService(services.tires)}
                            className="relative h-full bg-card border border-white/5 rounded-3xl overflow-hidden group p-8 flex flex-col justify-center hover:border-white/10 transition-all hover-glow cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/gallery/real-1.jpg"
                                    alt="Tyres and Wheels"
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            </div>

                            <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Disc className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" strokeWidth={1} />
                                    <h4 className="text-xl font-medium text-white tracking-tight drop-shadow-md">
                                        Däck & Hjul
                                    </h4>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed drop-shadow-sm">
                                    Skifte, balansering och hjulinställning för optimal säkerhet.
                                </p>
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* Diagnostics */}
                    <Reveal className="md:col-span-2 h-full" width="100%" delay={0.4} fullHeight>
                        <TiltCard
                            onClick={() => setSelectedService(services.diagnostics)}
                            className="relative h-full bg-card border border-white/5 rounded-3xl overflow-hidden group p-8 flex flex-col justify-center hover:border-white/10 transition-all hover-glow cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/gallery/bento-girl.jpg"
                                    alt="Diagnostics"
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            </div>

                            <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Monitor className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" strokeWidth={1} />
                                    <h4 className="text-xl font-medium text-white tracking-tight drop-shadow-md">Diagnostik</h4>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed drop-shadow-sm">
                                    Avancerad felsökning av elektronik och motorstyrning.
                                </p>
                            </div>
                        </TiltCard>
                    </Reveal>

                    {/* AC Service */}
                    <Reveal className="md:col-span-2 h-full" width="100%" delay={0.5} fullHeight>
                        <TiltCard
                            onClick={() => setSelectedService(services.ac)}
                            className="relative h-full bg-card border border-white/5 rounded-3xl overflow-hidden group p-8 flex flex-col justify-center hover:border-white/10 transition-all hover-glow cursor-pointer"
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src="/images/gallery/bento-seats.jpg"
                                    alt="AC Service"
                                    fill
                                    className="object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/50 transition-colors" />
                            </div>

                            <div style={{ transform: "translateZ(20px)" }} className="relative z-10">
                                <div className="flex items-center gap-4 mb-4">
                                    <Snowflake className="w-8 h-8 text-zinc-500 group-hover:text-white transition-colors" strokeWidth={1} />
                                    <h4 className="text-xl font-medium text-white tracking-tight drop-shadow-md">AC-Service</h4>
                                </div>
                                <p className="text-sm text-zinc-400 font-light leading-relaxed drop-shadow-sm">
                                    Klimatservice, läcksökning och påfyllning.
                                </p>
                            </div>
                        </TiltCard>
                    </Reveal>
                </div>
            </div>

            <ServiceModal
                isOpen={!!selectedService}
                onClose={() => setSelectedService(null)}
                service={selectedService}
            />
        </section>
    );
}
