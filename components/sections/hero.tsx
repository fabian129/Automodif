"use client";

import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";
import { useEffect, useRef } from "react";

export function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    video.play().catch(() => {});
                } else {
                    video.pause();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(video);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-40">
            {/* Background Video - Visible in Dark Mode */}
            <div className="absolute inset-0 z-0 hidden dark:block">
                <video
                    ref={videoRef}
                    loop
                    muted
                    playsInline
                    preload="none"
                    className="w-full h-full object-cover"
                    poster="/images/hero-new.jpg"
                >
                    <source src="/videos/0 Car Repair Mechanic 1920X1080.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/55"></div>
            </div>

            {/* Light Mode Background Gradient - Visible only in Light Mode */}
            <div className="absolute inset-0 z-0 block dark:hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100"></div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                    <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--primary)]/30 bg-[var(--primary)]/10 backdrop-blur-md mb-8 mt-6 shadow-sm overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-xs font-medium text-zinc-900 dark:text-white tracking-wide relative z-10">
                            Auktoriserad Autoexperten Verkstad
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h1
                        className="text-[5rem] md:text-[9rem] font-bold text-zinc-950 dark:text-white tracking-tighter leading-none mb-3 drop-shadow-lg"
                        style={{ fontFamily: "var(--font-display)" }}
                    >
                        AUTOMODIF
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <h2 className="text-xl md:text-3xl font-medium text-zinc-600 dark:text-white/80 tracking-tight leading-snug mb-6 drop-shadow-sm">
                        Auktoriserad Autoexperten-verkstad i Västerås
                    </h2>
                </Reveal>

                <Reveal delay={0.3}>
                    <p className="text-base md:text-xl text-zinc-700 dark:text-white font-normal max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
                        Certifierad service, transparenta priser och personlig omsorg om din
                        bil. Som en del av Autoexperten-nätverket erbjuder vi trygghet och
                        kvalitetsgarantier.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a
                            href="https://www.autoexperten.se/hitta-butik-eller-verkstad/automodif/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full md:w-auto px-8 py-3 bg-[var(--primary)] text-white text-sm font-semibold rounded hover:bg-[var(--primary)]/90 transition-all shadow-[0_4px_14px_0_rgba(0,82,204,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,204,0.23)] flex items-center justify-center gap-2"
                        >
                            Boka Service
                            <Calendar className="w-4 h-4" />
                        </a>

                        <a
                            href="tel:021141560"
                            className="w-full md:w-auto px-8 py-3 border border-zinc-200 dark:border-white/20 bg-white/50 dark:bg-white/10 backdrop-blur-sm text-zinc-900 dark:text-white text-sm font-medium rounded hover:bg-zinc-100 dark:hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            021-14 15 60
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <GoogleReviewBadge rating={4.9} totalReviews={73} className="mt-8 md:mt-10" />
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[22px] h-[36px] rounded-full border-[1.5px] border-zinc-300 dark:border-white/30 flex justify-center p-1 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-zinc-900 dark:bg-white rounded-full animate-scroll-down absolute top-2 left-1/2 -translate-x-1/2"></div>
            </div>
        </section>
    );
}
