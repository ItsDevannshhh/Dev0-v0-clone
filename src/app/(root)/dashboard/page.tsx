import { GlassNavbar } from "@/components/home/glass-navbar";
import { HomeBackground } from "@/components/home/home-background";
import { ProjectGrid } from "@/features/projects/components/project-grid";
import { PromptInput } from "@/components/home/prompt-input";

/**
 * Home (dashboard) page.
 *
 * Renders the decorative background, the glass navbar, the main prompt input for
 * starting a new build, and the grid of the user's existing projects.
 */
export default function Home() {
    return (
        <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
            <HomeBackground />
            <GlassNavbar />
            <main className="flex flex-1 flex-col items-center px-4 pb-16 pt-32">
                <div className="flex w-full max-w-3xl flex-col items-center gap-6 text-center">
                    <span className="inline-flex animate-in items-center gap-2 rounded-full border border-border/60 bg-card/50 px-3 py-1 text-xs font-medium text-muted-foreground fade-in slide-in-from-bottom-2 backdrop-blur-sm duration-700">
                        <span className="size-1.5 rounded-full bg-primary" />
                        From prompt to working app in seconds
                    </span>

                    <h1 className="animate-in text-4xl font-semibold tracking-tight text-balance fade-in slide-in-from-bottom-4 fill-mode-backwards delay-100 duration-700 sm:text-5xl">
                        What do you want to{" "}
                        <span className="bg-linear-to-r from-primary to-primary/40 bg-clip-text text-transparent">
                            create
                        </span>
                        ?
                    </h1>

                    <p className="max-w-xl animate-in text-sm text-muted-foreground fade-in slide-in-from-bottom-4 fill-mode-backwards delay-150 duration-700 sm:text-base">
                        Describe an app, a page, or a tool — Dev0 turns your
                        prompt into working, editable code.
                    </p>

                    <div className="w-full animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards delay-200 duration-700">
                        <PromptInput />
                    </div>
                </div>

                <div className="mt-20 w-full max-w-5xl">
                    <ProjectGrid />
                </div>
            </main>
        </div>
    );
}
