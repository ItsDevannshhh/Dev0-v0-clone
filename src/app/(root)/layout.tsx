/**
 * Layout for the public marketing site. Deliberately does not call
 * `onBoardUser()` (unlike the dashboard's route group layout) since this
 * route must be reachable by signed-out visitors.
 */
export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="relative flex min-h-full flex-1 flex-col overflow-hidden">
            {children}
        </div>
    );
}
