import { Reveal } from "@/components/ui/reveal";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

const testimonials = [
    {
        quote: "Proffsig verkstad med trevlig personal. Allt gjordes som utlovat och till överenskommet pris.",
        name: "Anders L.",
        title: "BMW 520d Ägare",
    },
    {
        quote: "Har lämnat min bil här flera gånger och alltid fått bra service. De förklarar vad som behöver göras.",
        name: "Maria S.",
        title: "Audi A4 Ägare",
    },
    {
        quote: "Snabb och pålitlig service. Bra att de är anslutna till Autoexperten, ger extra trygghet.",
        name: "Johan K.",
        title: "Volkswagen Passat Ägare",
    },
    {
        quote: "Otroligt kunniga på elfel. Hittade problemet som två andra verkstäder missade.",
        name: "Erik B.",
        title: "Mercedes C-klass Ägare",
    },
    {
        quote: "Mycket prisvärt jämfört med märkesverkstaden, men med samma eller bättre kvalitet.",
        name: "Lisa M.",
        title: "Volvo V60 Ägare",
    },
];

export function Testimonials() {
    return (
        <section className="py-24 bg-background border-t border-white/5 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <Reveal className="mx-auto text-center mb-16 max-w-3xl">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-primary tracking-wider uppercase mb-6">
                        Omdömen
                    </span>
                    <h3 className="text-4xl md:text-5xl font-medium text-white tracking-tighter mb-6">
                        Vad våra kunder säger
                    </h3>
                    <p className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed">
                        Vi är stolta över vårt rykte. Här är några ord från våra nöjda kunder i Västerås.
                    </p>
                </Reveal>

                <div className="h-[20rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
                    <InfiniteMovingCards
                        items={testimonials}
                        direction="right"
                        speed="slow"
                    />
                </div>
            </div>
        </section>
    );
}
