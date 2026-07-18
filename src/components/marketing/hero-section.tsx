"use client";

import { SignUpButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { usePromptTypewriter } from "./prompt-typewriter";
import Link from "next/link";

export function HeroSection() {
    const typed = usePromptTypewriter();

    return (
        <section className="flex w-full flex-col items-center px-4 pt-40 pb-24 text-center">
            <motion.span
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm"
            >
                <span className="size-1.5 rounded-full bg-primary" />
                From prompt to working app in seconds
            </motion.span>

            <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl"
            >
                Brew your next app{" "}
                <span className="bg-linear-to-r from-primary to-primary/40 bg-clip-text text-transparent">
                    from a single prompt
                </span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg"
            >
                Describe what you want to build. Dev0 generates working,
                editable code — then you refine it in chat and ship.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.24 }}
                className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
            >
                <Link href="/dashboard">
                    <Button size="lg" className="rounded-full px-6">
                        Start building
                        <ArrowRight />
                    </Button>
                </Link>
                <a href="#process">
                    <Button
                        size="lg"
                        variant="outline"
                        className="rounded-full px-6"
                    >
                        See how it works
                    </Button>
                </a>
            </motion.div>

            {/* generated-app mockup */}
            <motion.div
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="relative mt-16 w-full max-w-3xl"
            >
                <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="overflow-hidden rounded-2xl border border-border/60 bg-card/60 shadow-2xl backdrop-blur-sm"
                >
                    {/* browser chrome */}
                    <div className="flex items-center gap-1.5 border-b border-border/50 px-4 py-3">
                        <Circle className="size-2.5 fill-muted-foreground/30 text-muted-foreground/30" />
                        <Circle className="size-2.5 fill-muted-foreground/30 text-muted-foreground/30" />
                        <Circle className="size-2.5 fill-muted-foreground/30 text-muted-foreground/30" />
                        <div className="ml-3 h-6 flex-1 rounded-full bg-muted/50" />
                    </div>

                    <div className="grid gap-0 sm:grid-cols-[minmax(0,1fr)_260px]">
                        {/* prompt / chat pane */}
                        <div className="flex flex-col justify-between gap-6 border-b border-border/50 p-5 text-left sm:border-b-0 sm:border-r">
                            <div className="flex flex-col gap-3">
                                <div className="max-w-[85%] self-end rounded-2xl rounded-br-sm bg-primary px-3 py-2 text-xs text-primary-foreground">
                                    Make the sidebar collapsible
                                </div>
                                <div className="max-w-[85%] rounded-2xl rounded-bl-sm bg-muted px-3 py-2 text-xs text-foreground">
                                    Done — added a toggle and persisted the
                                    state.
                                </div>
                            </div>

                            <div className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/60 px-3 py-2.5">
                                <span className="min-h-4 flex-1 text-left text-xs text-foreground">
                                    {typed}
                                    <span className="ml-0.5 inline-block h-3 w-px animate-pulse bg-foreground align-middle" />
                                </span>
                                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                                    <ArrowUp className="size-3" />
                                </span>
                            </div>
                        </div>

                        {/* fake generated preview */}
                        <div className="flex flex-col gap-2.5 p-5">
                            <div className="h-3 w-2/3 rounded-full bg-muted" />
                            <div className="h-16 rounded-lg bg-linear-to-br from-primary/25 to-primary/5" />
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-10 rounded-lg bg-muted/70" />
                                <div className="h-10 rounded-lg bg-muted/70" />
                            </div>
                            <div className="h-3 w-1/2 rounded-full bg-muted" />
                        </div>
                    </div>
                </motion.div>

                <div
                    aria-hidden
                    className="pointer-events-none absolute -inset-x-8 -bottom-10 h-24 rounded-full bg-primary/20 blur-3xl"
                />
            </motion.div>
        </section>
    );
}
