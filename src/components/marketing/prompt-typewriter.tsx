"use client";

import { useEffect, useState } from "react";

const EXAMPLE_PROMPTS = [
    "Build a kanban board with drag-and-drop columns",
    "Build a habit tracker with streaks and weekly stats",
    "Build a finance dashboard with charts and budgets",
    "Build a booking calendar with time slots",
];

const TYPE_SPEED = 34;
const DELETE_SPEED = 18;
const HOLD_MS = 1400;

/**
 * Cycles through {@link EXAMPLE_PROMPTS}, typing and deleting each one, to
 * dramatize the "describe it, Dev0 builds it" pitch inside the hero mockup.
 */
export function usePromptTypewriter() {
    const [text, setText] = useState("");
    const [promptIndex, setPromptIndex] = useState(0);
    const [deleting, setDeleting] = useState(false);

    useEffect(() => {
        const current = EXAMPLE_PROMPTS[promptIndex];

        if (!deleting && text === current) {
            const hold = setTimeout(() => setDeleting(true), HOLD_MS);
            return () => clearTimeout(hold);
        }

        if (deleting && text === "") {
            setDeleting(false);
            setPromptIndex((index) => (index + 1) % EXAMPLE_PROMPTS.length);
            return;
        }

        const timeout = setTimeout(
            () => {
                setText((prev) =>
                    deleting
                        ? current.slice(0, prev.length - 1)
                        : current.slice(0, prev.length + 1),
                );
            },
            deleting ? DELETE_SPEED : TYPE_SPEED,
        );

        return () => clearTimeout(timeout);
    }, [text, deleting, promptIndex]);

    return text;
}
