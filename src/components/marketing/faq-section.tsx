"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "Do I need to know how to code?",
        answer: "No. Describe what you want in plain language and Dev0 generates working code for you. If you do know how to code, you can also export and keep going yourself.",
    },
    {
        question: "What can I build with Dev0?",
        answer: "Landing pages, internal tools, dashboards, small SaaS products, and anything else you'd normally hand-build from scratch as a web app.",
    },
    {
        question: "Can I export my code?",
        answer: "Yes. Every project can be exported as clean, readable source at any point — there's no lock-in.",
    },
    {
        question: "Is my data private?",
        answer: "Your projects and prompts are only visible to you unless you choose to share or publish them.",
    },
    {
        question: 'What does "Dev0 Max" do?',
        answer: "It's a more capable generation mode for larger or more complex builds, when you want Dev0 to reason harder about your prompt.",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="faq" className="w-full px-4 py-24">
            <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-4 text-center">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    FAQ
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
                    Questions, answered
                </h2>
            </div>

            <div className="mx-auto mt-12 flex w-full max-w-2xl flex-col divide-y divide-border/60 rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm">
                {faqs.map((faq, index) => {
                    const isOpen = openIndex === index;
                    return (
                        <div key={faq.question} className="px-5">
                            <button
                                type="button"
                                onClick={() =>
                                    setOpenIndex(isOpen ? null : index)
                                }
                                aria-expanded={isOpen}
                                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium"
                            >
                                {faq.question}
                                <Plus
                                    className={cn(
                                        "size-4 shrink-0 text-muted-foreground transition-transform duration-300",
                                        isOpen && "rotate-45",
                                    )}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {isOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.25,
                                            ease: "easeOut",
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-4 text-sm text-muted-foreground">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
