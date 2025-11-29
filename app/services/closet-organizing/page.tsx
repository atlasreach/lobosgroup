import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/Section";
import { CheckCircle, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Closet Organizing Service - Lobos Group",
  description:
    "Professional closet cleaning and clothes organization in New Orleans. Declutter, sort, and create an easy-to-use system.",
};

export default function ClosetOrganizingPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Organized closet with clothes"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Closet Cleaning & Clothes Organization
            </h1>
            <p className="text-xl text-gray-200">
              We declutter, reorganize, and make your closet easy to use so you
              can find what you need when you need it.
            </p>
            <Link href="/book?service=closet-organizing">
              <Button size="lg">Add Closet Organizing</Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* What We Do */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What We Do</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Decluttering</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We help you sort through items and decide what to keep, donate,
                or discard. You make the decisions—we do the heavy lifting.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Sorting by Type/Season</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We organize clothes by category (shirts, pants, dresses) and
                season so everything has its place and you can easily find what
                you need.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Donation Bag Prep</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Items you want to donate are neatly bagged and ready for
                drop-off. We can add donation drop-off as an extra service if
                needed.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Folding & Hanging System</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We create a simple, maintainable system with proper folding and
                hanging so your closet stays organized long after we leave.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Before/After */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">The Transformation</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From cluttered chaos to organized simplicity
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Before</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Clothes piled on floor or chair</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Can't find what you're looking for</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Mixed seasons and categories</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Items you forgot you owned</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Stressful morning routine</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>After</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Everything has its place</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Easy to find what you need</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Organized by type and season</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Only items you actually wear</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Peaceful, stress-free mornings</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Bundle with Deep Cleaning */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Bundle With Deep Cleaning
          </h2>
          <p className="text-lg text-muted-foreground">
            Add closet organizing to any deep clean service at a flat add-on
            rate of $40 per closet. Get your entire home reset in one visit.
          </p>
          <div className="bg-card rounded-lg border p-6">
            <div className="text-2xl font-bold mb-2">$40 per closet</div>
            <p className="text-sm text-muted-foreground mb-4">
              When bundled with deep cleaning service
            </p>
            <div className="text-sm text-muted-foreground">
              <p className="mb-1">Standalone pricing:</p>
              <p>$60 per closet or $50/hour</p>
            </div>
          </div>
          <Link href="/book?service=closet-organizing">
            <Button size="lg">Add to Your Clean</Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">
            Ready to Transform Your Closets?
          </h2>
          <p className="text-lg text-muted-foreground">
            Book closet organizing today and rediscover your wardrobe.
          </p>
          <Link href="/book?service=closet-organizing">
            <Button size="lg">Get Started</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
