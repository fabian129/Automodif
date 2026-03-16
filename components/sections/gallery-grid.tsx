"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const images = [
    {
        src: "/images/gallery/real-2.jpg",
        alt: "Automodif verkstad - mekaniker vid arbete",
        className: "col-span-12 md:col-span-8 md:row-span-1 h-[300px] md:h-[400px]",
        sizes: "(max-width: 768px) 100vw, 66vw",
        priority: true,
    },
    {
        src: "/images/gallery/bento-girl.jpg",
        alt: "Mekaniker inspekterar fordon",
        className: "col-span-12 md:col-span-4 md:row-span-2 h-[400px] md:h-full",
        sizes: "(max-width: 768px) 100vw, 40vw",
        priority: false,
        quality: 90,
    },
    {
        src: "/images/gallery/bento-seats.jpg",
        alt: "Kundmottagning på Automodif",
        className: "col-span-12 md:col-span-4 md:row-span-1 h-[300px] md:h-[300px]",
        sizes: "(max-width: 768px) 100vw, 33vw",
        priority: false,
        quality: 80,
    },
    {
        src: "/images/gallery/bento-waiting.jpg",
        alt: "Bilservice och detaljering",
        className: "col-span-6 md:col-span-2 md:row-span-1 h-[200px] md:h-[300px]",
        sizes: "(max-width: 768px) 50vw, 16vw",
        priority: false,
        quality: 80,
    },
    {
        src: "/images/gallery/bento-tech.jpg",
        alt: "Interiör bilservice",
        className: "col-span-6 md:col-span-2 md:row-span-1 h-[200px] md:h-[300px]",
        sizes: "(max-width: 768px) 50vw, 16vw",
        priority: false,
        quality: 80,
    },
];

export function GalleryGrid() {
    return (
        <section className="bg-background">
            <div className="w-full">
                <Reveal width="100%">
                    <div className="grid grid-cols-12 gap-0">
                        {images.map((img, i) => (
                            <div
                                key={i}
                                className={cn(
                                    "relative overflow-hidden group border-[0.5px] border-border",
                                    img.className
                                )}
                            >
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes={img.sizes}
                                    quality={img.quality ?? 80}
                                    priority={img.priority}
                                    loading={img.priority ? undefined : "lazy"}
                                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
