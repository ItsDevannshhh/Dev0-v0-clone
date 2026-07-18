import Link from "next/link";
import { GitBranchIcon, Mail, LinkIcon } from "lucide-react";
import { Dev0Logo } from "@/components/brand/dev0-logo";

const socials = [
    { icon: GitBranchIcon, href: "https://github.com", label: "GitHub" },
    { icon: LinkIcon, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@Dev0.dev", label: "Email" },
];

export function MarketingFooter() {
    return (
        <footer className="w-full border-t border-border/50 px-4 py-10">
            <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
                <div className="flex flex-col items-center gap-2 sm:items-start">
                    <Link href="/" className="flex items-center">
                        <Dev0Logo className="gap-2" />
                    </Link>
                    <p className="text-sm text-muted-foreground">
                        Brew working apps from a single prompt.
                    </p>
                </div>

                <div className="flex items-center gap-2">
                    {socials.map(({ icon: Icon, href, label }) => (
                        <a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            aria-label={label}
                            className="flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                        >
                            <Icon className="size-4" />
                        </a>
                    ))}
                </div>
            </div>

            <p className="mt-8 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Dev0. All rights reserved.
            </p>
        </footer>
    );
}
