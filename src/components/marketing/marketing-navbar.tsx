"use client";

import { useState } from "react";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";
import { GitBranchIcon, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dev0Logo } from "@/components/brand/dev0-logo";
import link from "next/link";

const navLinks = [
    { label: "Features", href: "#features" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
];

export function MarketingNavbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const overlayOpacity = useTransform(scrollY, [0, 64], [0, 1]);

    return (
        <motion.header
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        >
            <div className="relative w-full max-w-4xl">
                <nav className="relative flex h-14 w-full items-center justify-between rounded-full border border-border/50 bg-background/70 px-4 shadow-sm backdrop-blur-xl supports-backdrop-filter:bg-background/50 sm:px-5">
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

                    <div className="relative z-10 hidden items-center gap-1 md:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="relative z-10 hidden items-center gap-2 md:flex">
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="View Dev0 on GitHub"
                            className="flex size-8 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                        >
                            <GitBranchIcon className="size-4" />
                        </a>
                        <Link href="/dashboard">
                            <Button variant="ghost" size="sm">
                                Login
                            </Button>
                        </Link>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMenuOpen((open) => !open)}
                        aria-label="Toggle menu"
                        aria-expanded={menuOpen}
                        className="relative z-10 flex size-9 items-center justify-center rounded-full text-foreground md:hidden"
                    >
                        {menuOpen ? (
                            <X className="size-4" />
                        ) : (
                            <Menu className="size-4" />
                        )}
                    </button>
                </nav>

                <AnimatePresence>
                    {menuOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -8, scale: 0.98 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute inset-x-2 top-16 flex flex-col gap-1 rounded-2xl border border-border/50 bg-background/95 p-3 shadow-lg backdrop-blur-xl md:hidden"
                        >
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                            >
                                <GitBranchIcon className="size-4" />
                                GitHub
                            </a>
                            <div className="mt-1 flex gap-2 border-t border-border/50 pt-3">
                                <SignInButton mode="modal">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex-1 rounded-full"
                                    >
                                        Login
                                    </Button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <Button
                                        size="sm"
                                        className="flex-1 rounded-full"
                                    >
                                        Get Started
                                    </Button>
                                </SignUpButton>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
}
