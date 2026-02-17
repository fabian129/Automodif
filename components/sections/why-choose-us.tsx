import { ShieldCheck, UserCheck, Wallet, CheckCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import Image from "next/image";

export function WhyChooseUs() {
    return (
        <section className="py-32 bg-[#121214] relative overflow-hidden">
            {/* Background Gradient & Texture */}
            <div className="absolute inset-0 bg-black/90 z-0" />
            <div className="absolute inset-0 z-0 opacity-20">
                <Image
                    src="/images/gallery/bento-light.jpg"
                    alt="Background Texture"
                    fill
                    className="object-cover"
                />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Reveal className="mx-auto text-center" width="100%">
                    <div className="mb-20">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                            <ShieldCheck className="w-3 h-3" />
                            Trygghet & Kvalitet
                        </span>
                        <h3 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-6">
                            Varför välja Automodif?
                        </h3>
                        <p className="text-white text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
                            Vi kombinerar teknisk expertis med personlig service för att ge dig och din bil den bästa upplevelsen.
                        </p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <Reveal width="100%" delay={0.1} overflowVisible>
                        <div className="group relative p-8 md:p-10 border border-zinc-200 dark:border-white/5 bg-white/95 dark:bg-card/80 backdrop-blur-md rounded-3xl hover:border-primary/20 dark:hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-black/5 dark:shadow-none">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-zinc-100 dark:bg-[#18181B] mb-8 text-primary shadow-[0_0_20px_-5px_rgba(0,82,204,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                                <ShieldCheck className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            <h4 className="text-2xl font-medium text-zinc-950 dark:text-white mb-4 relative z-10">
                                Autoexperten Garanti
                            </h4>
                            <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 relative z-10">
                                Trygghet på vägen. Vi erbjuder 12 månaders <span className="text-zinc-900 dark:text-zinc-200 font-normal">fri vägassistans</span> och 3 års funktionsgaranti på reservdelar.
                            </p>

                            <ul className="space-y-2 relative z-10">
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> 12 mån Vägassistans
                                </li>
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> 3 års Garanti
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Card 2 */}
                    <Reveal width="100%" delay={0.2} overflowVisible>
                        <div className="group relative p-8 md:p-10 border border-zinc-200 dark:border-white/5 bg-white/95 dark:bg-card/80 backdrop-blur-md rounded-3xl hover:border-primary/20 dark:hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-black/5 dark:shadow-none">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-zinc-100 dark:bg-[#18181B] mb-8 text-primary shadow-[0_0_20px_-5px_rgba(0,82,204,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                                <UserCheck className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            <h4 className="text-2xl font-medium text-zinc-950 dark:text-white mb-4 relative z-10">
                                Certifierade Tekniker
                            </h4>
                            <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 relative z-10">
                                Kompetens du kan lita på. Våra mekaniker utbildas löpande för att hantera <span className="text-zinc-900 dark:text-zinc-200 font-normal">modern fordonsteknik</span>.
                            </p>

                            <ul className="space-y-2 relative z-10">
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Löpande Utbildning
                                </li>
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Diagnostik-experter
                                </li>
                            </ul>
                        </div>
                    </Reveal>

                    {/* Card 3 */}
                    <Reveal width="100%" delay={0.3} overflowVisible>
                        <div className="group relative p-8 md:p-10 border border-zinc-200 dark:border-white/5 bg-white/95 dark:bg-card/80 backdrop-blur-md rounded-3xl hover:border-primary/20 dark:hover:border-white/10 transition-all duration-500 hover:-translate-y-1 shadow-xl shadow-black/5 dark:shadow-none">
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

                            <div className="w-14 h-14 rounded-2xl border border-zinc-200 dark:border-white/10 flex items-center justify-center bg-zinc-100 dark:bg-[#18181B] mb-8 text-primary shadow-[0_0_20px_-5px_rgba(0,82,204,0.3)] relative z-10 group-hover:scale-110 transition-transform duration-500">
                                <Wallet className="w-7 h-7" strokeWidth={1.5} />
                            </div>

                            <h4 className="text-2xl font-medium text-zinc-950 dark:text-white mb-4 relative z-10">
                                Transparent Prissättning
                            </h4>
                            <p className="text-base text-zinc-600 dark:text-zinc-400 font-light leading-relaxed mb-6 relative z-10">
                                Inga överraskningar. Du får alltid en <span className="text-zinc-900 dark:text-zinc-200 font-normal">tydlig offert</span> och godkänner priset innan vi påbörjar arbetet.
                            </p>

                            <ul className="space-y-2 relative z-10">
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Fast Pris
                                </li>
                                <li className="flex items-center gap-2 text-xs font-medium text-zinc-500 uppercase tracking-wide">
                                    <CheckCircle className="w-4 h-4 text-primary" /> Detaljerad Faktura
                                </li>
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
