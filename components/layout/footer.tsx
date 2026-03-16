import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-zinc-50 dark:bg-[#020202] pt-24 pb-12 border-t border-zinc-200 dark:border-white/5 relative overflow-hidden">
            {/* Big Watermark */}
            <div className="absolute bottom-[-10%] left-[-2%] select-none pointer-events-none">
                <h1 className="text-[12rem] md:text-[18rem] font-bold text-zinc-900/[0.05] dark:text-white/[0.02] tracking-tighter leading-none">
                    AUTOMODIF
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl font-bold tracking-tighter text-zinc-900 dark:text-white block mb-6">
                            AUTOMODIF
                        </span>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                            Automodif är en auktoriserad Autoexperten-verkstad i Västerås. Professionell bilservice med personlig touch.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
                            Snabblänkar
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>
                                <Link href="#services" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    Våra Tjänster
                                </Link>
                            </li>
                            <li>
                                <Link href="#team" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    Om Oss
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                                >
                                    Kontakta Oss
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
                            Tjänster
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>
                                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    Service &amp; Besiktning
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    Reparationer
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                                    Däck &amp; Hjul
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-zinc-900 dark:text-white uppercase tracking-widest mb-6">
                            Kontakt
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>Brandthovdagatan 15, 721 35 Västerås</li>
                            <li>
                                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">Växel</span>
                                <a
                                    href="tel:021141560"
                                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                                >
                                    021-14 15 60
                                </a>
                            </li>
                            <li>
                                <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">Direktnummer</span>
                                <a
                                    href="tel:0760826277"
                                    className="hover:text-zinc-900 dark:hover:text-white transition-colors"
                                >
                                    076-082 62 77
                                </a>
                            </li>
                            <li className="text-xs text-zinc-500 uppercase tracking-wider pt-2">
                                Mån–Fre 08:00–17:00 &middot; Lör 10:00–14:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-zinc-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-500 uppercase tracking-wider gap-4">
                    <span>
                        © {new Date().getFullYear()} Automodif. All rights reserved.
                    </span>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            Auktoriserad Autoexperten
                        </span>
                        <Link href="#" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
                            Integritetspolicy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
