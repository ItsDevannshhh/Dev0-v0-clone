"use client";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Dev0Logo } from "@/components/brand/dev0-logo";

export function GlassNavbar() {
    const { scrollY } = useScroll();
    // As the page scrolls, the pill gains a slightly more opaque, more
    // defined glass surface — a subtle nod to Linear/Vercel-style navbars.
    const overlayOpacity = useTransform(scrollY, [0, 64], [0, 1]);

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        >
            <nav className="pointer-events-auto relative flex h-12 w-full max-w-3xl items-center justify-between rounded-full border border-border/50 bg-background/70 px-4 shadow-sm backdrop-blur-xl supports-backdrop-filter:bg-background/50">
                <motion.div
                    aria-hidden
                    style={{ opacity: overlayOpacity }}
                    className="pointer-events-none absolute inset-0 rounded-full bg-background/90 shadow-md"
                />

                <Link
                    href="/"
                    className="relative z-10 flex items-center transition-opacity hover:opacity-80"
                >
                    <Dev0Logo className="gap-2" />
                </Link>

                <div className="relative z-10">
                    <UserButton />
                </div>
            </nav>
        </motion.header>
    );
}
