"use client";

import { motion, type Variants } from "framer-motion";
import {
    Code2,
    Eye,
    KeyRound,
    MessagesSquare,
    Timer,
    Download,
} from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
    {
        icon: Code2,
        title: "AI code generation",
        description:
            "Describe the app you want in plain language and Dev0 writes real, working code — components, logic, and styling included.",
    },
    {
        icon: Eye,
        title: "Live preview",
        description:
            "Every generation renders instantly in a live preview pane, so you see exactly what you're shipping as it's built.",
    },
    {
        icon: MessagesSquare,
        title: "Chat-based editing",
        description:
            "Keep refining in plain conversation — move a button, restyle a section, or add a feature without touching code yourself.",
    },
    {
        icon: Download,
        title: "Code export",
        description:
            "Own everything you build. Export clean, readable source at any point and take it with you.",
    },
    {
        icon: KeyRound,
        title: "Authentication built in",
        description:
            "Generated apps come with sign-in ready to go, so you can ship something people can actually use from day one.",
    },
    {
        icon: Timer,
        title: "Fast generation",
        description:
            "From prompt to a working preview in seconds, not minutes — iterate at the speed you think.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function FeaturesSection() {
    return (
        <section id="features" className="w-full px-4 py-24">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    Features
                </span>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Everything you need to go from idea to app
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="mx-auto mt-14 grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            >
                {features.map(({ icon: Icon, title, description }) => (
                    <motion.div key={title} variants={itemVariants}>
                        <Card className="h-full rounded-2xl border-border/60 bg-card/50 p-6 shadow-sm backdrop-blur-sm transition-colors hover:border-primary/40 hover:bg-card/80">
                            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Icon className="size-5" />
                            </div>
                            <h3 className="mt-4 text-base font-medium">
                                {title}
                            </h3>
                            <p className="mt-2 text-sm text-muted-foreground">
                                {description}
                            </p>
                        </Card>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
