"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "slow",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    const [start, setStart] = useState(false);

    useEffect(() => {
        function addAnimation() {
            if (containerRef.current && scrollerRef.current) {
                const scrollerContent = Array.from(scrollerRef.current.children);

                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    if (scrollerRef.current) {
                        scrollerRef.current.appendChild(duplicatedItem);
                    }
                });

                getDirection();
                getSpeed();
                setStart(true);
            }
        }

        const getDirection = () => {
            if (containerRef.current) {
                if (direction === "left") {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "forwards"
                    );
                } else {
                    containerRef.current.style.setProperty(
                        "--animation-direction",
                        "reverse"
                    );
                }
            }
        };

        const getSpeed = () => {
            if (containerRef.current) {
                if (speed === "fast") {
                    containerRef.current.style.setProperty("--animation-duration", "20s");
                } else if (speed === "normal") {
                    containerRef.current.style.setProperty("--animation-duration", "40s");
                } else {
                    containerRef.current.style.setProperty("--animation-duration", "80s");
                }
            }
        };

        addAnimation();
    }, [direction, speed]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20  max-w-7xl overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <li
                        className="w-[350px] max-w-full relative rounded-3xl border border-zinc-200 dark:border-white/10 flex-shrink-0 bg-zinc-100 dark:bg-[#121214] px-8 py-8 md:w-[450px] shadow-lg dark:shadow-none"
                        key={item.name + idx}
                    >
                        <blockquote>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>

                            {/* Quote Icon Background */}
                            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 fill-primary/5 stroke-none" />

                            <span className=" relative z-20 text-lg leading-[1.6] text-zinc-700 dark:text-white font-light italic">
                                &quot;{item.quote}&quot;
                            </span>
                            <div className="relative z-20 mt-8 flex flex-row items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white dark:bg-white/10 flex items-center justify-center text-zinc-900 dark:text-white font-medium border border-zinc-200 dark:border-white/10 shadow-sm dark:shadow-none">
                                    {item.name.charAt(0)}
                                </div>
                                <span className="flex flex-col">
                                    <span className=" text-base leading-[1.6] text-zinc-900 dark:text-white font-medium">
                                        {item.name}
                                    </span>
                                    <span className=" text-sm leading-[1.6] text-primary/80 font-normal">
                                        {item.title}
                                    </span>
                                </span>
                            </div>
                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
