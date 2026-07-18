"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Decorative backdrop for the marketing site. Shares the dashboard's grid +
 * grain treatment, but the hero gets one extra signature element: a slow
 * gradient "pour" streaming down toward the prompt mockup below — the
 * visual thesis of the page (prompt in, app brewed out).
 */
export function MarketingBackground({ className }: { className?: string }) {
    return (
        <div
            aria-hidden
            className={cn(
                "pointer-events-none absolute inset-0 -z-10 overflow-hidden",
                className,
            )}
        >
            <div className="absolute inset-0 bg-background" />

            <div
                className="absolute inset-0 opacity-40 dark:opacity-100"
                style={{
                    backgroundImage: `
            linear-gradient(to right, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px),
            linear-gradient(to bottom, color-mix(in oklch, var(--border) 70%, transparent) 1px, transparent 1px)
          `,
                    backgroundSize: "48px 48px",
                    maskImage:
                        "radial-gradient(ellipse 75% 60% at 50% 20%, black 15%, transparent 70%)",
                }}
            />

            {/* signature: the pour — a thin gradient stream falling from the
                navbar toward the hero mockup, with a soft moving highlight */}
            <svg
                className="absolute left-1/2 top-0 h-[560px] w-px -translate-x-1/2 overflow-visible"
                viewBox="0 0 2 560"
                preserveAspectRatio="none"
            >
                <defs>
                    <linearGradient id="pour-fade" x1="0" y1="0" x2="0" y2="1">
                        <stop
                            offset="0%"
                            stopColor="var(--primary)"
                            stopOpacity="0"
                        />
                        <stop
                            offset="15%"
                            stopColor="var(--primary)"
                            stopOpacity="0.5"
                        />
                        <stop
                            offset="100%"
                            stopColor="var(--primary)"
                            stopOpacity="0"
                        />
                    </linearGradient>
                </defs>
                <rect
                    x="0"
                    y="0"
                    width="2"
                    height="560"
                    fill="url(#pour-fade)"
                />
            </svg>
            <motion.div
                className="absolute left-1/2 top-0 h-24 w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary/70 to-transparent"
                animate={{ y: [0, 480, 0], opacity: [0, 1, 0] }}
                transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="absolute -top-32 left-1/2 size-[560px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl dark:bg-primary/25" />
            <div className="absolute top-1/2 -left-24 size-80 rounded-full bg-primary/10 blur-3xl dark:bg-primary/20" />
            <div className="absolute bottom-0 right-0 size-96 translate-x-1/4 translate-y-1/4 rounded-full bg-primary/10 blur-3xl dark:bg-primary/15" />

            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse 90% 55% at 50% 0%, color-mix(in oklch, var(--primary) 14%, transparent), transparent 70%)",
                }}
            />

            <svg className="absolute inset-0 h-full w-full opacity-[0.035] mix-blend-overlay dark:opacity-[0.05]">
                <filter id="marketing-grain">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.9"
                        numOctaves="2"
                        stitchTiles="stitch"
                    />
                </filter>
                <rect
                    width="100%"
                    height="100%"
                    filter="url(#marketing-grain)"
                />
            </svg>

            <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-background to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-background to-transparent" />
        </div>
    );
}
