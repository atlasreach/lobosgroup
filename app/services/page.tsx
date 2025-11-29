import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { Sparkles, Shirt, ShoppingCart, HardHat } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services - Lobos Group Cleaning Service",
  description:
    "Deep cleaning, closet organizing, grocery shopping, and new construction cleaning services in New Orleans.",
};

export default function ServicesPage() {
  return (
    <div>
      <Section className="py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold">
            Our Cleaning & Errand Services
          </h1>
          <p className="text-xl text-muted-foreground">
            From deep cleaning to time-saving errands, we help busy New Orleans
            families reset their homes and reclaim their time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <ServiceCard
            icon={Sparkles}
            title="Deep Cleaning"
            description="Thorough cleaning of kitchens, bathrooms, baseboards, inside appliances, and every overlooked surface in your home."
            href="/services/deep-cleaning"
            featured
          />
          <ServiceCard
            icon={Shirt}
            title="Closet Cleaning & Organizing"
            description="Declutter, sort by type/season, and create an easy-to-use organization system for your closets."
            href="/services/closet-organizing"
          />
          <ServiceCard
            icon={ShoppingCart}
            title="Grocery Shopping & Delivery"
            description="Send us your list and we'll shop at your preferred store, delivering to your stocked kitchen."
            href="/services/grocery-shopping"
          />
          <ServiceCard
            icon={HardHat}
            title="New Construction / Post-Renovation"
            description="Remove dust, debris, and contractor mess after your construction or renovation project."
            href="/services/new-construction-cleaning"
          />
        </div>

        <div className="text-center bg-muted/50 rounded-lg p-8 space-y-4">
          <h2 className="text-2xl font-bold">Not Sure What You Need?</h2>
          <p className="text-muted-foreground">
            Start with a deep clean and we'll help you plan the rest.
          </p>
          <Link href="/book">
            <Button size="lg">Book Now</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
