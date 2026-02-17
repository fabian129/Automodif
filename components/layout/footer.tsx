import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#020202] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
            {/* Big Watermark */}
            <div className="absolute bottom-[-10%] left-[-2%] select-none pointer-events-none">
                <h1 className="text-[12rem] md:text-[18rem] font-bold text-white/[0.02] tracking-tighter leading-none">
                    AUTOMODIF
                </h1>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl font-bold tracking-tighter text-white block mb-6">
                            AUTOMODIF
                        </span>
                        <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mx-auto md:mx-0">
                            Automodif är en auktoriserad Autoexperten-verkstad i Västerås. Professionell bilservice med personlig touch.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                            Snabblänkar
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Våra Tjänster
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Om Oss
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Kontakta Oss
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                            Tjänster
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Service &amp; Besiktning
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Reparationer
                                </Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-white transition-colors">
                                    Däck &amp; Hjul
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-6">
                            Kontakt
                        </h4>
                        <ul className="space-y-4 text-sm text-zinc-500">
                            <li>Brynäsvägen 13, 724 74 Västerås</li>
                            <li>
                                <a
                                    href="tel:021123939"
                                    className="hover:text-white transition-colors"
                                >
                                    021-12 39 39
                                </a>
                            </li>
                            <li className="text-xs text-zinc-600 uppercase tracking-wider pt-2">
                                Mån–Fre 07:00–17:00
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-zinc-600 uppercase tracking-wider gap-4">
                    <span>
                        © {new Date().getFullYear()} Automodif. All rights reserved.
                    </span>
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4 text-primary" />
                            Auktoriserad Autoexperten
                        </span>
                        <Link href="#" className="hover:text-white transition-colors">
                            Integritetspolicy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
