"use client";

import { motion, Variants } from "framer-motion";
import { MessageSquarePlus, Sparkles, Eye, Rocket } from "lucide-react";

const steps = [
    {
        icon: MessageSquarePlus,
        title: "Pour",
        description: "Describe the app you want to build, in plain language.",
    },
    {
        icon: Sparkles,
        title: "Steep",
        description: "Dev0's AI generates real, working code from your prompt.",
    },
    {
        icon: Eye,
        title: "Strain",
        description: "Preview it live and refine anything through chat.",
    },
    {
        icon: Rocket,
        title: "Serve",
        description: "Export your code or ship straight from Dev0.",
    },
];

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export function ProcessSection() {
    return (
        <section id="process" className="w-full px-4 py-24">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 text-center">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    Process
                </span>
                <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    From idea to a shipped app, brewed in four steps
                </h2>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                className="relative mx-auto mt-16 grid w-full max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
            >
                {/* connecting line, desktop only */}
                <div className="absolute inset-x-0 top-6 hidden h-px bg-linear-to-r from-transparent via-border to-transparent lg:block" />

                {steps.map(({ icon: Icon, title, description }, index) => (
                    <motion.div
                        key={title}
                        variants={itemVariants}
                        className="relative flex flex-col items-center gap-3 text-center"
                    >
                        <div className="relative z-10 flex size-12 items-center justify-center rounded-full border border-border/60 bg-card/70 text-primary shadow-sm backdrop-blur-sm">
                            <Icon className="size-5" />
                        </div>
                        <span className="text-xs font-medium text-muted-foreground">
                            Step {index + 1}
                        </span>
                        <h3 className="text-base font-medium">{title}</h3>
                        <p className="max-w-[220px] text-sm text-muted-foreground">
                            {description}
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
