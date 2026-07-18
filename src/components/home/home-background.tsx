"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HomeBackground({ className }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={cn(
                "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
                className,
            )}
        >
            <div className="absolute inset-0 bg-background" />

            {/* grid */}
            <div
                className="absolute inset-0 opacity-40 dark:opacity-100"
                style={{
                    backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
          `,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 80% 70% at 50% 45%, black 20%, transparent 75%)",
                }}
            />

            {/* signature: drifting "steam" wisps rising behind the hero */}
            <motion.div
                className="absolute left-1/2 top-[16%] h-72 w-24 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl dark:bg-primary/25"
                animate={{ y: [0, -26, 0], opacity: [0.45, 0.85, 0.45] }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute left-[41%] top-[9%] h-56 w-16 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl dark:bg-primary/15"
                animate={{ y: [0, -18, 0], opacity: [0.25, 0.6, 0.25] }}
                transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                }}
            />
            <motion.div
                className="absolute left-[59%] top-[11%] h-64 w-16 -translate-x-1/2 rounded-full bg-primary/10 blur-2xl dark:bg-primary/15"
                animate={{ y: [0, -20, 0], opacity: [0.25, 0.55, 0.25] }}
                transition={{
                    duration: 7.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.6,
                }}
            />

            {/* ambient blobs */}
            <div className="absolute -top-32 left-1/2 size-[520px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" />
            <div className="absolute top-1/3 -left-24 size-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="absolute bottom-0 right-0 size-96 translate-x-1/4 translate-y-1/4 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 60% at 50% 0%, color-mix(in oklch, var(--primary) 12%, transparent), transparent 70%)",
                }}
            />

            {/* subtle grain for a premium, non-flat surface */}
            <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]">
                <filter id="home-grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="2"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect width="100%" height="100%" filter="url(#home-grain)" />
            </svg>

            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-background to-transparent" />
        </div>
    );
}
