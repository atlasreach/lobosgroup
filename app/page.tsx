"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import GoogleMap from "@/components/GoogleMap";
import FadeIn from "@/components/FadeIn";
import {
  Sparkles,
  Shirt,
  ShoppingCart,
  HardHat,
  CheckCircle,
  Clock,
  Heart,
  Star,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Clean modern living room"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Deep Cleaning & Home Reset in New Orleans
            </h1>
            <p className="text-xl text-gray-200">
              Lobos Group Cleaning Service handles deep cleans, closets, grocery
              runs, and new-construction cleanups.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=deep-cleaning">
                <Button size="lg">Book a Deep Clean</Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                  View All Services
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      {/* Core Services Snapshot */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From deep cleaning to grocery runs, we help New Orleans families
              reclaim their time and enjoy cleaner, more organized homes.
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-md md:max-w-none mx-auto">
          <FadeIn delay={0.1}>
            <ServiceCard
              icon={Sparkles}
              title="Deep Cleaning"
              description="Thorough cleaning of every corner, surface, and hard-to-reach area."
              href="/services/deep-cleaning"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <ServiceCard
              icon={Shirt}
              title="Closet Organizing"
              description="Declutter and organize your closets for easy access and peace of mind."
              href="/services/closet-organizing"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <ServiceCard
              icon={ShoppingCart}
              title="Grocery Shopping"
              description="We handle your shopping list so you come home to a stocked kitchen."
              href="/services/grocery-shopping"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <ServiceCard
              icon={HardHat}
              title="New Construction"
              description="Post-construction cleanup to remove dust, debris, and contractor mess."
              href="/services/new-construction-cleaning"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Lobos */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lobos</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Deep, Not Surface</h3>
              <p className="text-muted-foreground">
                We go beyond surface cleaning to tackle baseboards, appliances,
                and overlooked spaces.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Reliable & On-Time</h3>
              <p className="text-muted-foreground">
                We respect your schedule and show up when we say we will.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Locally Owned</h3>
              <p className="text-muted-foreground">
                Born and raised in New Orleans, serving our community with pride.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Respectful Service</h3>
              <p className="text-muted-foreground">
                We treat your home with care and respect your privacy.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How It Works */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          </div>
        </FadeIn>
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" style={{ top: '2rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <FadeIn delay={0.1}>
              <div className="text-center space-y-3 relative">
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    1
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Tell Us What You Need</h3>
                <p className="text-muted-foreground">
                  Fill out our booking form with your service needs and preferences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="text-center space-y-3 relative">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-8 text-primary text-2xl">→</div>
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    2
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Get a Quote</h3>
                <p className="text-muted-foreground">
                  We'll review your request and send you a quote and available times.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="text-center space-y-3 relative">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-8 text-primary text-2xl">→</div>
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    3
                  </div>
                </div>
                <h3 className="font-semibold text-lg">We Clean Your Space</h3>
                <p className="text-muted-foreground">
                  Our team arrives on time and gets to work on your home reset.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="text-center space-y-3 relative">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-8 text-primary text-2xl">→</div>
                <div className="relative inline-flex items-center justify-center">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                  <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    4
                  </div>
                </div>
                <h3 className="font-semibold text-lg">Relax & Enjoy</h3>
                <p className="text-muted-foreground">
                  Come home to a fresh, clean, and organized space.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Link href="/book">
              <Button size="lg">Start Your Booking</Button>
            </Link>
          </div>
        </FadeIn>
      </Section>

      {/* Service Options Highlight */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Most Popular Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your needs
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-md md:max-w-none mx-auto">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
            <CardHeader className="text-center md:text-left">
              <CardTitle>Standard Deep Clean</CardTitle>
              <CardDescription>
                Perfect for regular home maintenance and upkeep
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>All rooms thoroughly deep cleaned</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Kitchen & bathrooms detailed cleaning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Baseboards, fixtures & surfaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Vacuum & mop all floors</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>Dust all surfaces & furniture</span>
                </li>
              </ul>
              <Link href="/book?service=deep-cleaning&package=standard">
                <Button variant="outline" className="w-full">
                  Book Now
                </Button>
              </Link>
            </CardContent>
          </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-primary border-2 hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="text-center md:text-left">
                <div className="text-xs font-semibold text-primary mb-2">
                  MOST POPULAR
                </div>
                <CardTitle>Whole Home Reset</CardTitle>
                <CardDescription>
                  Complete top-to-bottom transformation for your home
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Everything in Standard Deep Clean</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Inside cabinets & drawers organization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Inside oven, fridge & appliances</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Window sills, tracks & blinds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Light fixtures & ceiling fans</span>
                  </li>
                </ul>
                <Link href="/book?service=whole-home-reset">
                  <Button className="w-full">Book Now</Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardHeader className="text-center md:text-left">
                <CardTitle>Post-Construction</CardTitle>
                <CardDescription>
                  Specialized cleaning after renovation or construction
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Dust removal from all surfaces</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Window & fixture deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floor scrubbing & deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Debris & waste disposal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Paint & adhesive removal</span>
                  </li>
                </ul>
                <Link href="/book?service=new-construction-cleaning">
                  <Button variant="outline" className="w-full">
                    Get Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="text-center md:text-left">
                <CardTitle>Custom Services</CardTitle>
                <CardDescription>
                  Need something specific? We've got you covered
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Event cleanup & preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Seasonal deep cleaning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Specialty cleaning requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>One-time or recurring services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Tailored to your specific needs</span>
                  </li>
                </ul>
                <Link href="/book">
                  <Button variant="outline" className="w-full bg-white/80 hover:bg-white">
                    Get Custom Quote
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
        <div className="text-center mt-8">
          <Link href="/pricing" className="text-primary hover:underline">
            See Full Pricing Details →
          </Link>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Clients Say
            </h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-md md:max-w-none mx-auto">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Lobos Group transformed our home after renovations. They got
                  every speck of dust and left everything spotless. Highly
                  recommend!"
                </p>
                <p className="font-semibold">Sarah M.</p>
                <p className="text-sm text-muted-foreground">Garden District</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "The deep clean service is worth every penny. They cleaned
                  places I didn't even know needed cleaning. My house has never
                  looked better."
                </p>
                <p className="font-semibold">James T.</p>
                <p className="text-sm text-muted-foreground">Uptown</p>
              </CardContent>
            </Card>
          </FadeIn>
          <FadeIn delay={0.3}>
            <Card className="hover:shadow-lg transition-shadow duration-300 h-full">
              <CardContent className="pt-6 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Love their closet organizing service! They helped me declutter
                  and now I can actually find my clothes. Professional and
                  respectful."
                </p>
                <p className="font-semibold">Maria L.</p>
                <p className="text-sm text-muted-foreground">Mid-City</p>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">Service Area</h2>
          <p className="text-lg text-muted-foreground">
            Proudly serving New Orleans and nearby surrounding areas including
            Metairie, Kenner, and surrounding parishes.
          </p>
          <GoogleMap />
          <Link href="/book">
            <Button size="lg">Book Your Service Today</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
