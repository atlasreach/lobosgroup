import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Section from "@/components/Section";
import { CheckCircle, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "Deep Cleaning Service - Lobos Group",
  description:
    "Professional deep cleaning for New Orleans homes. We clean kitchens, bathrooms, baseboards, inside appliances, and every overlooked surface.",
};

export default function DeepCleaningPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1920&q=80"
            alt="Clean modern kitchen"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Deep Cleaning for Homes & Apartments
            </h1>
            <p className="text-xl text-gray-200">
              We tackle kitchens, bathrooms, baseboards, inside appliances, and
              every overlooked corner of your home.
            </p>
            <Link href="/book?service=deep-cleaning">
              <Button size="lg">Get a Deep Cleaning Quote</Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* What's Included */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What's Included</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Kitchens</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Countertops & backsplash deep clean</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Sink, faucet, and fixtures scrubbed</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Stovetop, range hood, and exterior appliances</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Cabinet fronts wiped down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Floors swept & mopped</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Bathrooms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Shower, tub, and tile deep scrub</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Toilet cleaned inside and out</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Sink, faucet, and mirror polished</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Cabinet exteriors wiped down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Floors scrubbed</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Living Areas & Bedrooms</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Dusting all surfaces and shelves</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Baseboards wiped down</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Light fixtures and ceiling fans</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Windows sills and tracks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Vacuum carpets & mop hard floors</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>General</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Door handles and switch plates</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Trash emptied and bins cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>High and low dusting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span>Spot cleaning walls and doors</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Packages */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Deep Cleaning Packages
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>First-Time Deep Clean</CardTitle>
              <CardDescription>
                Comprehensive clean for homes that need a fresh start
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">Starting at $200</div>
              <p className="text-sm text-muted-foreground">
                Best for homes that haven't had a deep clean in a while or need
                a thorough reset.
              </p>
              <Link href="/book?service=deep-cleaning&package=first-time">
                <Button variant="outline" className="w-full">
                  Get Quote
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card className="border-primary">
            <CardHeader>
              <div className="text-xs font-semibold text-primary mb-2">
                MOST POPULAR
              </div>
              <CardTitle>Recurring Deep Clean</CardTitle>
              <CardDescription>
                Weekly, bi-weekly, or monthly maintenance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">Starting at $150</div>
              <p className="text-sm text-muted-foreground">
                Keep your home consistently clean with regular deep cleaning
                visits. Save 25% with monthly plans.
              </p>
              <Link href="/book?service=deep-cleaning&package=recurring">
                <Button className="w-full">Get Quote</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Move-In / Move-Out</CardTitle>
              <CardDescription>
                Extra thorough clean for transitions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">Starting at $250</div>
              <p className="text-sm text-muted-foreground">
                Includes everything plus inside cabinets, drawers, appliances,
                and more detailed work.
              </p>
              <Link href="/book?service=deep-cleaning&package=move">
                <Button variant="outline" className="w-full">
                  Get Quote
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Add-Ons */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Available Add-Ons</h2>
          <p className="text-muted-foreground">
            Customize your deep clean with these extras
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          <Card>
            <CardContent className="pt-6 text-center">
              <Plus className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Closet Organizing</h3>
              <p className="text-sm text-muted-foreground">+ $40/closet</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Plus className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Fridge Clean-Out</h3>
              <p className="text-sm text-muted-foreground">+ $50</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Plus className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Oven Interior</h3>
              <p className="text-sm text-muted-foreground">+ $40</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <Plus className="w-6 h-6 text-primary mx-auto mb-2" />
              <h3 className="font-semibold mb-1">Inside Cabinets</h3>
              <p className="text-sm text-muted-foreground">+ $60</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            Add-ons can be selected during the booking process
          </p>
        </div>
      </Section>

      {/* FAQs */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">
                How long does a deep clean take?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                A typical deep clean takes 3-6 hours depending on the size of
                your home and its current condition. We'll provide a more
                specific estimate after reviewing your booking details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Do I need to be home during the clean?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                Not necessarily. Many clients provide access and leave for the
                day. We can discuss the best arrangement during booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                What's the difference between deep cleaning and regular
                cleaning?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                Deep cleaning goes beyond surface-level tidying. We clean inside
                appliances, baseboards, light fixtures, window tracks, and other
                areas typically overlooked in regular cleaning.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                Do you bring your own supplies?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                Yes! We bring all necessary cleaning supplies and equipment. If
                you have specific products you'd like us to use, just let us
                know.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-primary hover:underline">
            View All FAQs →
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Ready for Your Home Reset?</h2>
          <p className="text-lg text-muted-foreground">
            Book your deep clean today and come home to a spotless space.
          </p>
          <Link href="/book?service=deep-cleaning">
            <Button size="lg">Book a Deep Clean</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
