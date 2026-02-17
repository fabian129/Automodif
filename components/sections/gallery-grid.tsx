"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

const images = [
    {
        src: "/images/gallery/real-2.jpg", // Moved from Bottom Left to Top Left (Big)
        alt: "Future Mechanic",
        className: "col-span-12 md:col-span-8 md:row-span-1 h-[300px] md:h-[400px]",
    },
    {
        src: "/images/gallery/bento-woman.jpg",
        alt: "Happy Customer",
        className: "col-span-12 md:col-span-4 md:row-span-2 h-[400px] md:h-full",
    },
    {
        src: "/images/gallery/real-3.jpg", // New Image in Lower Left
        alt: "Client Waiting",
        className: "col-span-12 md:col-span-4 md:row-span-1 h-[300px] md:h-[300px]",
    },
    {
        src: "/images/gallery/real-1.jpg",
        alt: "Premium Detailing",
        className: "col-span-6 md:col-span-2 md:row-span-1 h-[200px] md:h-[300px]",
    },
    {
        src: "/images/gallery/real-4.jpg",
        alt: "Interior Care",
        className: "col-span-6 md:col-span-2 md:row-span-1 h-[200px] md:h-[300px]",
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
                                    "relative overflow-hidden group border-[0.5px] border-black/10",
                                    img.className
                                )}
                            >
                                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-transparent transition-colors duration-500 z-10" />
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 33vw"
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
