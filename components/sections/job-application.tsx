"use client";

import { useState, useRef } from "react";
import { Briefcase, FileText, Upload, ArrowRight, CheckCircle2, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

export function JobApplication() {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [cvFile, setCvFile] = useState<File | null>(null);
    const [coverFile, setCoverFile] = useState<File | null>(null);
    const cvRef = useRef<HTMLInputElement>(null);
    const coverRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        setter: (f: File | null) => void
    ) => {
        const file = e.target.files?.[0] ?? null;
        setter(file);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        
        const form = e.currentTarget;
        const data = new FormData(form);

        try {
            const res = await fetch("/api/job", {
                method: "POST",
                body: data, // Send FormData directly so fetch sets multipart/form-data with correct boundary
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
        <section id="jobb" className="py-32 bg-white dark:bg-[#09090B] border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                    {/* Left — Info */}
                    <Reveal width="100%">
                        <div>
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 dark:border-white/10 bg-zinc-100 dark:bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                                <Briefcase className="w-3 h-3" />
                                Karriär
                            </span>
                            <h3 className="text-4xl md:text-5xl font-medium text-zinc-950 dark:text-white tracking-tighter mb-6">
                                Jobba hos oss
                            </h3>
                            <p className="text-zinc-500 dark:text-zinc-400 text-lg font-normal mb-10 max-w-md leading-relaxed">
                                Vi letar alltid efter engagerade tekniker och rådgivare som delar vår passion för bilar och kundservice. Skicka in din ansökan — vi hör av oss.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Briefcase,
                                        title: "Auktoriserad verkstad",
                                        desc: "Del av Autoexperten-nätverket med utbildning och karriärmöjligheter.",
                                    },
                                    {
                                        icon: FileText,
                                        title: "Öppen ansökan",
                                        desc: "Skicka in ditt CV och personliga brev. Vi sparar det och hör av oss när vi söker.",
                                    },
                                ].map(({ icon: Icon, title, desc }) => (
                                    <div key={title} className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-white/5 border border-zinc-200 dark:border-white/10 flex items-center justify-center shrink-0 text-primary">
                                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-medium text-zinc-900 dark:text-white mb-1">{title}</h4>
                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 font-normal leading-relaxed">{desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Reveal>

                    {/* Right — Form */}
                    <Reveal width="100%" delay={0.2}>
                        <div className="bg-zinc-50 dark:bg-[#0A0A0C] border border-zinc-200 dark:border-white/5 p-8 md:p-12 rounded-3xl shadow-xl dark:shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

                            {submitted ? (
                                <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 gap-6">
                                    <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                                    </div>
                                    <h3 className="text-3xl font-medium text-zinc-950 dark:text-white tracking-tight">Tack för din ansökan!</h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-base max-w-sm">
                                        Vi har tagit emot din ansökan och dina bifogade filer. Vi hör av oss snart!
                                    </p>
                                    <button
                                        onClick={() => { setSubmitted(false); setCvFile(null); setCoverFile(null); }}
                                        className="text-sm text-primary underline underline-offset-4 hover:opacity-70 transition-opacity"
                                    >
                                        Skicka en ny ansökan
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-3xl font-medium text-zinc-950 dark:text-white mb-2 tracking-tight relative z-10">
                                        Skicka ansökan
                                    </h3>
                                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mb-8 relative z-10">
                                        Fyll i formuläret nedan. Bifoga CV och personligt brev.
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
                                                Vilken tjänst söker du?
                                            </label>
                                            <input
                                                type="text"
                                                name="role"
                                                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 shadow-sm dark:shadow-none"
                                                placeholder="Mekaniker, receptionist, öppen ansökan…"
                                            />
                                        </div>

                                        {/* File uploads */}
                                        <div className="grid grid-cols-1 gap-4">
                                            {/* CV */}
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">CV</label>
                                                <div
                                                    onClick={() => cvRef.current?.click()}
                                                    className="cursor-pointer w-full bg-white dark:bg-white/5 border border-dashed border-zinc-300 dark:border-white/20 rounded-xl px-4 py-4 flex items-center gap-3 hover:border-primary/50 hover:bg-zinc-50 dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none"
                                                >
                                                    {cvFile ? (
                                                        <>
                                                            <FileText className="w-5 h-5 text-primary shrink-0" />
                                                            <span className="text-sm text-zinc-900 dark:text-white truncate flex-1">{cvFile.name}</span>
                                                            <button
                                                                type="button"
                                                                onClick={(ev) => { ev.stopPropagation(); setCvFile(null); if (cvRef.current) cvRef.current.value = ""; }}
                                                                className="text-zinc-400 hover:text-red-500 transition-colors"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Upload className="w-5 h-5 text-zinc-400 shrink-0" />
                                                            <span className="text-sm text-zinc-400">Bifoga CV (PDF, DOC)</span>
                                                        </>
                                                    )}
                                                </div>
                                                <input
                                                    ref={cvRef}
                                                    type="file"
                                                    name="cv"
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    onChange={(e) => handleFileChange(e, setCvFile)}
                                                />
                                            </div>

                                            {/* Cover letter */}
                                            <div className="space-y-2">
                                                <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium">
                                                    Personligt brev <span className="normal-case text-zinc-400">(valfritt)</span>
                                                </label>
                                                <div
                                                    onClick={() => coverRef.current?.click()}
                                                    className="cursor-pointer w-full bg-white dark:bg-white/5 border border-dashed border-zinc-300 dark:border-white/20 rounded-xl px-4 py-4 flex items-center gap-3 hover:border-primary/50 hover:bg-zinc-50 dark:hover:bg-white/10 transition-all shadow-sm dark:shadow-none"
                                                >
                                                    {coverFile ? (
                                                        <>
                                                            <FileText className="w-5 h-5 text-primary shrink-0" />
                                                            <span className="text-sm text-zinc-900 dark:text-white truncate flex-1">{coverFile.name}</span>
                                                            <button
                                                                type="button"
                                                                onClick={(ev) => { ev.stopPropagation(); setCoverFile(null); if (coverRef.current) coverRef.current.value = ""; }}
                                                                className="text-zinc-400 hover:text-red-500 transition-colors"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Upload className="w-5 h-5 text-zinc-400 shrink-0" />
                                                            <span className="text-sm text-zinc-400">Bifoga personligt brev (PDF, DOC)</span>
                                                        </>
                                                    )}
                                                </div>
                                                <input
                                                    ref={coverRef}
                                                    type="file"
                                                    name="cover"
                                                    accept=".pdf,.doc,.docx"
                                                    className="hidden"
                                                    onChange={(e) => handleFileChange(e, setCoverFile)}
                                                />
                                            </div>
                                        </div>

                                        <div className="group space-y-2">
                                            <label className="text-xs uppercase tracking-widest text-zinc-500 font-medium group-focus-within:text-zinc-900 dark:group-focus-within:text-white transition-colors">
                                                Kort om dig
                                            </label>
                                            <textarea
                                                name="message"
                                                required
                                                className="w-full bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl px-4 py-3 text-zinc-900 dark:text-white outline-none focus:border-primary/50 focus:bg-white dark:focus:bg-white/10 transition-all text-sm placeholder:text-zinc-400 dark:placeholder:text-zinc-600 resize-none shadow-sm dark:shadow-none"
                                                rows={4}
                                                placeholder="Berätta kort om din bakgrund och varför du vill jobba hos oss…"
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={loading}
                                            className="w-full bg-zinc-900 dark:bg-white text-white dark:text-black py-4 rounded-xl text-sm font-bold hover:bg-zinc-800 dark:hover:bg-zinc-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-lg shadow-zinc-200 dark:shadow-white/5 disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {loading ? "Skickar Ansökan..." : "Skicka Ansökan"}
                                            {!loading && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                        </button>

                                        <p className="text-xs text-zinc-400 text-center leading-relaxed">
                                            Din ansökan skickas till <span className="text-zinc-600 dark:text-zinc-300">automodif.v@gmail.com</span>. Vi hanterar alla ansökningar konfidentiellt.
                                        </p>
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
