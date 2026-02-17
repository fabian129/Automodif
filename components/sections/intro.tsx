import { Reveal } from "@/components/ui/reveal";
import { Wrench } from "lucide-react";

export function Intro() {
    return (
        <section className="relative py-32 md:py-40 bg-background overflow-hidden">
            {/* Subtle Background Gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <Reveal className="mx-auto mb-8">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                        <Wrench className="w-3 h-3" />
                        Din Partner i Västerås
                    </span>
                    <h2 className="text-4xl md:text-6xl font-medium text-white tracking-tighter mb-8 leading-[1.1]">
                        Välkommen till <br className="hidden md:block" />
                        <span className="text-primary">Automodif</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1} className="mx-auto">
                    <p className="text-xl md:text-3xl text-zinc-400 font-light leading-relaxed max-w-3xl mx-auto">
                        Vi är en <span className="text-white font-normal">auktoriserad Autoexperten-verkstad</span> med
                        <span className="text-white font-normal"> lång erfarenhet</span> av bilservice.
                        Som en del av nätverket erbjuder vi dig <span className="text-white font-normal">trygghet</span> genom
                        <span className="text-white font-normal"> certifierade tekniker</span> och
                        <span className="text-white font-normal"> kvalitetsgarantier</span>.
                    </p>
                </Reveal>

                <Reveal delay={0.2} className="mx-auto mt-12">
                    <p className="text-xl md:text-2xl text-primary font-medium italic tracking-wide drop-shadow-sm">
                        &quot;Vi tar hand om din bil som om den vore vår egen.&quot;
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

