import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Pricing - Lobos Group Cleaning Service",
  description:
    "Transparent pricing for deep cleaning, closet organizing, grocery shopping, and construction cleaning in New Orleans.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20 md:py-32">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold">
            Pricing
          </h1>
          <div className="text-3xl md:text-4xl font-semibold text-primary">
            Coming Soon
          </div>
          <p className="text-xl text-muted-foreground">
            We're working on our pricing page. For now, please request a free quote and we'll provide custom pricing based on your specific needs.
          </p>
          <div className="pt-4">
            <Link href="/book">
              <Button size="lg" className="text-lg px-8">
                Request Free Quote
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
