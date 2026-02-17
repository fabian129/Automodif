"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ParallaxBreak() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

    return (
        <section ref={ref} className="relative h-[60vh] w-full overflow-hidden bg-zinc-900">
            <motion.div style={{ y }} className="absolute inset-0 h-[120%] w-full -top-[10%]">
                <Image
                    src="/images/woman-sitting-electo-car.jpg"
                    alt="Workshop Detail"
                    fill
                    className="object-cover opacity-60"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20" /> {/* Fine tune overlay */}
        </section>
    );
}
