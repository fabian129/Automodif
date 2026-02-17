"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/ui/mode-toggle";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 w-full z-50 border-b border-zinc-200 dark:border-white/5 bg-white/80 dark:bg-[#030303]/80 backdrop-blur-md transition-all duration-300",
                    scrolled ? "bg-white/95 dark:bg-[#030303]/95" : "bg-white/80 dark:bg-[#030303]/80"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center gap-3 group"
                    >
                        <div className="w-6 h-[10px] flex flex-col justify-between items-start">
                            <span className="w-full h-[1px] bg-zinc-900 dark:bg-white group-hover:bg-[var(--primary)] transition-colors"></span>
                            <span className="w-2/3 h-[1px] bg-zinc-900 dark:bg-white group-hover:w-full group-hover:bg-[var(--primary)] transition-all"></span>
                        </div>
                        <span className="hidden md:block text-xs font-medium uppercase tracking-widest text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors">
                            Meny
                        </span>
                    </button>

                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-2 h-2 bg-[var(--primary)] rounded-full"></div>
                        <span className="text-base font-semibold tracking-tight text-zinc-900 dark:text-white group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                            AUTOMODIF
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Link
                            href="#contact"
                            className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-zinc-900 dark:text-white hover:text-[var(--primary)] transition-colors"
                        >
                            Boka Service
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <ModeToggle />
                    </div>

                    {/* Mobile CTA Icon */}
                    <div className="flex items-center gap-4 md:hidden">
                        <ModeToggle />
                        <Link href="#contact" className="text-zinc-900 dark:text-white">
                            <Calendar className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Full Screen Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 z-[60] bg-white dark:bg-[#050505] flex flex-col justify-between p-6 md:p-12 transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]",
                    isOpen
                        ? "clip-path-full opacity-100 pointer-events-auto"
                        : "clip-path-top opacity-0 pointer-events-none"
                )}
                style={{
                    clipPath: isOpen
                        ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)"
                        : "polygon(0 0, 100% 0, 100% 0, 0 0)",
                }}
            >
                <div className="flex justify-between items-center w-full max-w-7xl mx-auto">
                    <button
                        onClick={toggleMenu}
                        className="flex items-center gap-3 group text-zinc-900 dark:text-white hover:text-primary transition-colors"
                    >
                        <X className="w-6 h-6" />
                        <span className="text-xs font-medium uppercase tracking-widest hidden md:block">
                            Stäng
                        </span>
                    </button>
                    <span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-white">
                        AUTOMODIF
                    </span>
                </div>

                <div className="flex-1 flex flex-col justify-center items-center text-center gap-8">
                    {[
                        { href: "#", label: "Hem" },
                        { href: "#services", label: "Tjänster" },
                        { href: "#process", label: "Process" },
                        { href: "#contact", label: "Boka Tid" },
                    ].map((item, i) => (
                        <div
                            key={item.href}
                            className={cn(
                                "transform transition-all duration-500 ease-out",
                                isOpen
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-20 opacity-0"
                            )}
                            style={{ transitionDelay: `${100 + i * 50}ms` }}
                        >
                            <Link
                                href={item.href}
                                onClick={toggleMenu}
                                className="text-4xl md:text-6xl font-medium text-zinc-900 dark:text-white tracking-tight hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        </div>
                    ))}
                </div>

                <div className="w-full max-w-7xl mx-auto flex justify-between items-end border-t border-zinc-200 dark:border-white/10 pt-8">
                    <div>
                        <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                            Verkstad
                        </span>
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            Brynäsvägen 13, 724 74 Västerås
                        </p>
                    </div>
                    <div className="text-right">
                        <span className="text-xs text-zinc-500 uppercase tracking-widest block mb-2">
                            Kontakt
                        </span>
                        <a
                            href="tel:021123939"
                            className="text-sm text-zinc-900 dark:text-white hover:text-primary transition-colors"
                        >
                            021-12 39 39
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
