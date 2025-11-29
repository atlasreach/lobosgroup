import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import { CheckCircle, HardHat, Home, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "New Construction Cleaning - Lobos Group",
  description:
    "Post-construction and post-renovation cleaning in New Orleans. Professional dust and debris removal after contractors leave.",
};

export default function NewConstructionCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="New construction home interior"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              New Construction & Post-Renovation Cleaning
            </h1>
            <p className="text-xl text-gray-200">
              Remove dust, debris, and fine cleanup after contractors leave. Make
              your new or renovated space move-in ready.
            </p>
            <Link href="/book?service=new-construction-cleaning">
              <Button size="lg">Get a Post-Construction Quote</Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* What's Included */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Dust Removal</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>
                    All surfaces wiped clean of construction dust and residue
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Baseboards, ledges, and trim detailed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Window sills, tracks, and frames</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Light fixtures and ceiling fans</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Window & Fixture Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>
                    Interior windows cleaned and polished (exterior available as
                    add-on)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>All door handles and switch plates wiped</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Bathroom and kitchen fixtures polished</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Cabinet hardware cleaned</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Floor Deep Cleaning</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>All floors swept, vacuumed, and mopped</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>
                    Adhesive residue and stickers removed where possible
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Grout lines scrubbed in tiled areas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Corners and edges detailed</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Debris & Trash</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Small debris and leftover materials collected</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Trash removed to your bins or dumpster</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Sticker and tape residue removal</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Final walk-through to ensure nothing missed</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Best For */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Best For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Home className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Newly Built Homes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Remove all construction dust and make your brand new home
                spotless before move-in day.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <HardHat className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Renovation Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Kitchen remodels, bathroom updates, or room additions—we clean
                up after any renovation project.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Sparkles className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Property Managers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Prepare rental properties or investment homes for new tenants or
                sale after construction work.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Process */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Walk-Through or Photos
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                We assess the scope of work either in person or via photos you
                send.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Custom Quote
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                Based on square footage, dust level, and special requirements,
                we provide a detailed quote.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Deep Clean
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                Our team arrives with all supplies and completes a thorough
                post-construction clean.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Final Inspection
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                We do a final walk-through with you to ensure everything meets
                your standards.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="text-2xl font-bold">Custom Quote Required</div>
              <p className="text-muted-foreground">
                Every construction project leaves different levels of dust and
                debris. We provide accurate quotes after a brief walk-through or
                photo review.
              </p>
              <div className="bg-muted/50 rounded-lg p-4 space-y-2">
                <p className="text-sm font-semibold">Starting estimates:</p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Small apartment: $200+</li>
                  <li>• Medium home: $350+</li>
                  <li>• Large home: $500+</li>
                  <li>• Commercial spaces: Custom pricing</li>
                </ul>
              </div>
              <p className="text-sm text-muted-foreground">
                Final pricing depends on square footage, level of dust, and any
                special requirements or add-ons.
              </p>
            </CardContent>
          </Card>
          <Link href="/book?service=new-construction-cleaning">
            <Button size="lg">Request a Custom Quote</Button>
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Ready to Move In?</h2>
          <p className="text-lg text-muted-foreground">
            Let us handle the post-construction cleanup so you can enjoy your
            new or renovated space immediately.
          </p>
          <Link href="/book?service=new-construction-cleaning">
            <Button size="lg">Get Your Quote Today</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
