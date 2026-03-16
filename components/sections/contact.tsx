"use client";

import Image from "next/image";
import {
    MapPin,
    Phone,
    Clock,
    ArrowUpRight,
    ArrowRight,
    CheckCircle2,
    PhoneCall,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { useState } from "react";

export function Contact() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const form = e.currentTarget;
        const data = new FormData(form);
        
        const payload = {
            name: data.get("name"),
            tel: data.get("tel"),
            reg: data.get("reg"),
            service: data.get("service"),
            message: data.get("message"),
            website: data.get("website"), // Honeypot
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            
            const result = await res.json();
            
            if (result.ok) {
                setSubmitted(true);
                form.reset();
            } else {
                setError(result.error || "Något gick fel. Vänligen försök igen.");
            }
        } catch {
            setError("Serverfel. Vänligen försök igen senare.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="py-32 border-t border-zinc-200 dark:border-white/5 bg-white dark:bg-[#050505] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Contact Info */}
                    <Reveal width="100%">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                                <MapPin className="w-3 h-3" />
                                Kontakt
                            </span>
                            <h3 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tighter mb-6">
                                Hitta till oss
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-normal mb-12 max-w-md leading-relaxed">
                                Vi finns på Brandthovdagatan i Västerås. Välkommen in för en kopp kaffe medan vi tar hand om din bil.
                            </p>

                            <div className="space-y-10">
                                {/* Address */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 shadow-sm dark:shadow-none">
                                        <MapPin className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-zinc-900 dark:text-white mb-2">
                                            Besöksadress
                                        </h4>
                                        <p className="text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">
                                            Automodif<br />
                                            Brandthovdagatan 15<br />
                                            721 35 Västerås
                                        </p>
                                    </div>
                                </div>

                                {/* Phone numbers */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 shadow-sm dark:shadow-none">
                                        <Phone className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div className="flex-1">
                                        <h4 className="text-base font-medium text-zinc-900 dark:text-white mb-4">Ring Oss</h4>

                                        {/* Switchboard */}
                                        <div className="mb-4 p-4 rounded-2xl bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10">
                                            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
                                                Växel — Mån–Fre 08:00–17:00
                                            </p>
                                            <a
                                                href="tel:021141560"
                                                className="text-zinc-900 dark:text-white font-semibold hover:text-primary transition-colors text-xl"
                                            >
                                                021-14 15 60
                                            </a>
                                        </div>

                                        {/* Direct number */}
                                        <div className="p-4 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden">
                                            <div className="absolute top-2 right-3">
                                                <span className="flex items-center gap-1.5 text-[10px] font-semibold text-green-500 uppercase tracking-wider">
                                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                                    Alltid nåbar
                                                </span>
                                            </div>
                                            <p className="text-xs font-medium text-zinc-500 uppercase tracking-widest mb-1">
                                                Direktnummer
                                            </p>
                                            <a
                                                href="tel:0760826277"
                                                className="text-zinc-900 dark:text-white font-semibold hover:text-primary transition-colors text-xl flex items-center gap-2"
                                            >
                                                <PhoneCall className="w-5 h-5 text-primary" strokeWidth={1.5} />
                                                076-082 62 77
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Opening Hours */}
                                <div className="flex items-start gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 text-zinc-900 dark:text-white group-hover:text-primary group-hover:border-primary/30 transition-all duration-300 shadow-sm dark:shadow-none">
                                        <Clock className="w-6 h-6" strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-medium text-zinc-900 dark:text-white mb-4">
                                            Öppettider
                                        </h4>
                                        <div className="space-y-2">
                                            {[
                                                { day: "Måndag", hours: "08:00 – 17:00" },
                                                { day: "Tisdag", hours: "08:00 – 17:00" },
                                                { day: "Onsdag", hours: "08:00 – 17:00" },
                                                { day: "Torsdag", hours: "08:00 – 17:00" },
                                                { day: "Fredag", hours: "08:00 – 17:00" },
                                                { day: "Lördag", hours: "10:00 – 14:00" },
                                                { day: "Söndag", hours: null },
                                            ].map(({ day, hours }) => (
                                                <div key={day} className="flex justify-between items-center text-sm">
                                                    <span className="text-zinc-500 dark:text-zinc-400 font-normal w-24">{day}</span>
                                                    {hours ? (
                                                        <span className="text-zinc-900 dark:text-white font-medium">{hours}</span>
                                                    ) : (
                                                        <span className="text-red-500 font-medium">Stängt</span>
                                                    )}
                                                </div>
                                            ))}
                                            <div className="pt-2 mt-2 border-t border-zinc-200 dark:border-white/10">
                                                <p className="text-xs text-zinc-400 font-normal">
                                                    Lunch 12:00 – 13:00 (Mån–Fre)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Map Box */}
                            <div className="mt-12 w-full h-64 bg-zinc-100 dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-white/10 flex items-center justify-center group overflow-hidden relative shadow-md dark:shadow-none">
                                <Image
                                    src="/images/gallery/real-2.jpg"
                                    alt="Map Background"
                                    fill
                                    className="object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>

                                <a
                                    href="https://maps.google.com/?q=Brandthovdagatan+15,+721+35+Västerås"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative z-10 px-6 py-3 bg-white text-black text-sm font-semibold rounded-full shadow-xl flex items-center gap-2 hover:bg-zinc-100 hover:scale-105 transition-all"
                                >
                                    Öppna i Google Maps
                                    <ArrowUpRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Booking Form */}
                    <Reveal width="100%" delay={0.2}>
                        <div className="bg-zinc-50 dark:bg-[#0A0A0C] border border-zinc-200 dark:border-white/5 p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl relative overflow-hidden">
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                            {submitted ? (
                                <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 gap-6">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-medium text-zinc-950 dark:text-white tracking-tight">
                                        Tack för din förfrågan!
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-sm">
                                        Vi har tagit emot ditt meddelande och återkommer till dig så snart vi kan.
                                    </p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-sm text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                                    >
                                        Skicka en till förfrågan
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-medium text-zinc-950 dark:text-white mb-2 tracking-tight relative z-10">
                                        Boka Service
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 relative z-10">
                                        Fyll i formuläret så återkommer vi inom 24 timmar.
                                    </p>

                                    <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                                        {/* Honeypot */}
                                        <div className="hidden" aria-hidden="true">
                                            <label htmlFor="website">Website</label>
                                            <input type="text" name="website" id="website" tabIndex={-1} autoComplete="off" />
                                        </div>

                                        {error && (
                                            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-red-600 dark:text-red-400 text-sm">
                                                {error}
                                            </div>
                                        )}

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="group space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors">
                                                    Namn
                                                </label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm dark:shadow-none"
                                                    placeholder="Anders Andersson"
                                                />
                                            </div>
                                            <div className="group space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors">
                                                    Tel
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="tel"
                                                    required
                                                    className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm dark:shadow-none"
                                                    placeholder="070-123 45 67"
                                                />
                                            </div>
                                        </div>

                                        <div className="group space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors">
                                                Bil (Reg.nr)
                                            </label>
                                            <input
                                                type="text"
                                                name="reg"
                                                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm dark:shadow-none"
                                                placeholder="ABC 123"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                                                Vad behöver du hjälp med?
                                            </label>
                                            <div className="flex flex-wrap gap-2">
                                                {["Service", "Reparation", "Besiktning", "Däck", "Annat"].map(
                                                    (option) => (
                                                        <label key={option} className="cursor-pointer relative">
                                                            <input type="checkbox" name="service" value={option} className="peer hidden" />
                                                            <div className="px-4 py-2 bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-xs text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-100 dark:hover:bg-white/10 transition-all select-none peer-checked:bg-primary peer-checked:text-white peer-checked:border-primary shadow-sm dark:shadow-none">
                                                                {option}
                                                            </div>
                                                        </label>
                                                    )
                                                )}
                                            </div>
                                        </div>

                                        <div className="group space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors">
                                                Meddelande
                                            </label>
                                            <textarea
                                                name="message"
                                                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none shadow-sm dark:shadow-none"
                                                rows={4}
                                                placeholder="Beskriv problemet kort..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-xl text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200 dark:shadow-white/5 disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {loading ? "Skickar..." : "Skicka Förfrågan"}
                                            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
