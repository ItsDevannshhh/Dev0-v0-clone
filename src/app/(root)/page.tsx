import { MarketingNavbar } from "@/components/marketing/marketing-navbar";
import { MarketingBackground } from "@/components/marketing/marketing-background";
import { HeroSection } from "@/components/marketing/hero-section";
import { FeaturesSection } from "@/components/marketing/features-section";
import { ProcessSection } from "@/components/marketing/process-section";
import { FaqSection } from "@/components/marketing/faq-section";
import { MarketingFooter } from "@/components/marketing/marketing-footer";

/**
 * Public marketing landing page for signed-out visitors. Links into the
 * authenticated dashboard (`/`, behind the `(dashboard)`-style route group)
 * via the navbar's Login / Get Started actions.
 */
export default function MarketingHome() {
    return (
        <>
            <MarketingBackground />
            <MarketingNavbar />
            <main className="flex flex-1 flex-col items-center">
                <HeroSection />
                <FeaturesSection />
                <ProcessSection />
                <FaqSection />
            </main>
            <MarketingFooter />
        </>
    );
}
