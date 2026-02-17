import Image from "next/image";
import Link from "next/link";
import { Calendar, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { GoogleReviewBadge } from "@/components/ui/google-review-badge";



export function Hero() {
    return (
        <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-40">
            {/* Bright Workshop Background */}
            {/* Background Video */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    poster="/images/hero-new.jpg"
                >
                    <source src="/videos/hero-video.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/55"></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
                <Reveal>
                    <div className="relative inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#0052CC]/30 bg-[#0052CC]/20 backdrop-blur-md mb-8 mt-6 shadow-sm overflow-hidden group">
                        {/* Shimmer Effect */}
                        <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                        <span className="text-xs font-medium text-white tracking-wide relative z-10">
                            Auktoriserad Autoexperten Verkstad
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={0.1}>
                    <h1 className="text-5xl md:text-7xl font-medium text-white tracking-tighter leading-[1.1] mb-6 drop-shadow-md">
                        Auktoriserad <br className="hidden md:block" /> Autoexperten-verkstad i Västerås
                    </h1>
                </Reveal>

                <Reveal delay={0.2}>
                    <p className="text-base md:text-xl text-white font-light max-w-2xl mx-auto mb-10 leading-relaxed drop-shadow-sm">
                        Certifierad service, transparenta priser och personlig omsorg om din
                        bil. Som en del av Autoexperten-nätverket erbjuder vi trygghet och
                        kvalitetsgarantier.
                    </p>
                </Reveal>

                <Reveal delay={0.3}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link
                            href="#contact"
                            className="w-full md:w-auto px-8 py-3 bg-[#0052CC] text-white text-sm font-semibold rounded hover:bg-[#0052CC]/90 transition-all shadow-[0_4px_14px_0_rgba(0,82,204,0.39)] hover:shadow-[0_6px_20px_rgba(0,82,204,0.23)] flex items-center justify-center gap-2"
                        >
                            Boka Service
                            <Calendar className="w-4 h-4" />
                        </Link>

                        <a
                            href="tel:021123939"
                            className="w-full md:w-auto px-8 py-3 border border-white/20 bg-white/10 backdrop-blur-sm text-white text-sm font-medium rounded hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                        >
                            <Phone className="w-4 h-4" />
                            021-12 39 39
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.4}>
                    <GoogleReviewBadge rating={4.9} totalReviews={73} className="mt-8 md:mt-10" />
                </Reveal>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[22px] h-[36px] rounded-full border-[1.5px] border-white/30 flex justify-center p-1 opacity-60 hover:opacity-100 transition-opacity">
                <div className="w-1 h-1 bg-white rounded-full animate-scroll-down absolute top-2 left-1/2 -translate-x-1/2"></div>
            </div>
        </section>
    );
}
