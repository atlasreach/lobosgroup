import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/Section";
import { CheckCircle, Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing - Lobos Group Cleaning Service",
  description:
    "Transparent pricing for deep cleaning, closet organizing, grocery shopping, and construction cleaning in New Orleans.",
};

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Final pricing depends on home size, condition, and frequency. We'll
            confirm your exact quote after a quick call or form review.
          </p>
        </div>
      </Section>

      {/* Deep Cleaning */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Deep Cleaning</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Small Space</CardTitle>
              <CardDescription>Studio or 1-bedroom apartment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$150 - $200</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Up to 800 sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>1 bathroom</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Kitchen & living area</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>3-4 hours typically</span>
                </li>
              </ul>
              <Link href="/book?service=deep-cleaning&size=small">
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <div className="text-xs font-semibold text-primary mb-2">
                MOST POPULAR
              </div>
              <CardTitle>Medium Home</CardTitle>
              <CardDescription>2-3 bedroom house or apartment</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$250 - $350</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>800 - 1,500 sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>2 bathrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Kitchen, living, bedrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>4-6 hours typically</span>
                </li>
              </ul>
              <Link href="/book?service=deep-cleaning&size=medium">
                <Button className="w-full">Book Now</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Large Home</CardTitle>
              <CardDescription>4+ bedroom house</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$400 - $550</div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>1,500+ sq ft</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>3+ bathrooms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>Multiple living areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span>6-8 hours typically</span>
                </li>
              </ul>
              <Link href="/book?service=deep-cleaning&size=large">
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 bg-card rounded-lg border p-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <div className="space-y-2">
              <p className="font-semibold">Recurring Service Discounts</p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Weekly service: Save 25%</li>
                <li>• Bi-weekly service: Save 15%</li>
                <li>• Monthly service: Save 10%</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Closet Organizing */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Closet Organizing
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Per Closet (Bundled)</CardTitle>
              <CardDescription>
                When added to deep cleaning service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$40 / closet</div>
              <p className="text-sm text-muted-foreground">
                Best value when combined with a deep clean booking.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Standalone Service</CardTitle>
              <CardDescription>Closet organizing only</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">$60 / closet</div>
              <div className="text-sm text-muted-foreground">or</div>
              <div className="text-2xl font-bold">$50 / hour</div>
              <p className="text-sm text-muted-foreground">
                For larger projects or multiple closets.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Grocery Shopping */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Grocery Shopping</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-lg">Base Trip Fee</h3>
                  <p className="text-sm text-muted-foreground">One store</p>
                </div>
                <div className="text-2xl font-bold">$35</div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-lg">Additional Store</h3>
                  <p className="text-sm text-muted-foreground">
                    Per extra location
                  </p>
                </div>
                <div className="text-2xl font-bold">+ $15</div>
              </div>
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-lg">Put-Away Service</h3>
                  <p className="text-sm text-muted-foreground">
                    We organize groceries for you
                  </p>
                </div>
                <div className="text-2xl font-bold">+ $20</div>
              </div>
            </CardContent>
          </Card>
          <div className="mt-6 text-center">
            <Link href="/book?service=grocery-shopping">
              <Button>Request Grocery Shopping</Button>
            </Link>
          </div>
        </div>
      </Section>

      {/* New Construction */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            New Construction Cleaning
          </h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="text-2xl font-bold text-center">
                Custom Quote Required
              </div>
              <p className="text-muted-foreground text-center">
                Pricing based on square footage, dust level, and project scope
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold">Starting estimates:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Small apartment: $200+</li>
                  <li>• Medium home: $350+</li>
                  <li>• Large home: $500+</li>
                  <li>• Commercial: Custom pricing</li>
                </ul>
              </div>
              <Link href="/book?service=new-construction-cleaning">
                <Button className="w-full">Get a Custom Quote</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Important Notes */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-bold text-center">Important Notes</h2>
          <Card>
            <CardContent className="pt-6">
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">
                      Prices Are Starting Points
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Final pricing depends on your specific home size,
                      condition, and any special requirements. We'll confirm
                      your exact quote before starting.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Quick Quote Process</p>
                    <p className="text-sm text-muted-foreground">
                      Fill out our booking form and we'll reach out within 24
                      hours with your exact quote and available time slots.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Payment Options</p>
                    <p className="text-sm text-muted-foreground">
                      We accept cash, Venmo, Zelle, and all major credit cards.
                      Payment due upon completion.
                    </p>
                  </div>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground">
            Book your service and we'll send you an exact quote based on your
            needs.
          </p>
          <Link href="/book">
            <Button size="lg">Get My Exact Quote</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
