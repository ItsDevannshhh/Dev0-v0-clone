import { Spinner } from "@/components/ui/spinner";

export default function Loading() {
    return (
        <div className="flex min-h-full flex-1 items-center justify-center">
            <div className="flex animate-in flex-col items-center gap-3 fade-in duration-500">
                <Spinner className="size-6 text-muted-foreground" />
                <p className="text-xs text-muted-foreground">
                    Loading your workspace…
                </p>
            </div>
        </div>
    );
}
