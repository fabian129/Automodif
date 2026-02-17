"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    className?: string;
    fullHeight?: boolean;
    overflowVisible?: boolean;
}

export function Reveal({
    children,
    width = "fit-content",
    delay = 0,
    className,
    fullHeight = false,
    overflowVisible = false,
}: RevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });

    return (
        <div
            ref={ref}
            style={{ width, overflow: overflowVisible ? "visible" : "hidden" }}
            className={className}
        >
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
                className={fullHeight ? "h-full" : undefined}
            >
                {children}
            </motion.div>
        </div>
    );
}
