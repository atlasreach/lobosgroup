"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import {
  CheckCircle,
  Clock,
  Shield,
  Heart,
  Phone,
  Sparkles,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const residentialServices = [
  {
    title: "Deep Cleaning",
    description: "Thorough top-to-bottom cleaning of your entire home including kitchens, bathrooms, baseboards, and all overlooked surfaces. Perfect for homes that need a fresh start or haven't had a professional clean in a while. We tackle the deep dirt and grime that regular cleaning misses.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80&fit=crop",
  },
  {
    title: "Regular Maintenance",
    description: "Keep your home consistently clean with weekly, bi-weekly, or monthly recurring cleaning services. We maintain your home's cleanliness so you can focus on what matters most. Recurring clients receive priority scheduling and special rates.",
    image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800&q=80&fit=crop",
  },
  {
    title: "Move-In/Move-Out",
    description: "Complete cleaning for property transitions including inside cabinets, drawers, and appliances. Ideal for landlords, real estate agents, and homeowners preparing for a move. We ensure the property is spotless for new occupants.",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80&fit=crop",
  },
  {
    title: "Post-Construction",
    description: "Remove dust, debris, and construction residue after renovations or new builds. We clean every surface, window, and fixture to transform your construction site into a move-in ready home. Our team handles even the toughest post-construction mess.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&fit=crop",
  },
  {
    title: "Spring/Seasonal Cleaning",
    description: "Refresh your home with comprehensive seasonal deep cleaning services. We tackle areas that accumulate dust and grime throughout the year including windows, fans, vents, and hard-to-reach places. Perfect for preparing your home for the changing seasons.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=800&q=80&fit=crop",
  },
  {
    title: "Vacation Home Prep",
    description: "Get your second home ready for your arrival with thorough cleaning and preparation services. We ensure your vacation property is fresh, clean, and welcoming when you arrive. Perfect for seasonal homeowners who want their property guest-ready.",
    image: "https://images.unsplash.com/photo-1502672260066-6bc86a0ae76c?w=800&q=80&fit=crop",
  },
];

export default function ResidentialCleaningPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-50"
          >
            <source src="/residential-cleaning.mp4" type="video/mp4" />
          </video>
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Professional Home Cleaning Services in New Orleans
            </h1>
            <p className="text-xl text-gray-200">
              Transform your home with our comprehensive residential cleaning services.
              From deep cleans to regular maintenance, we handle every detail so you don't have to. Enjoy coming home to a spotless, fresh-smelling space.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book?service=residential">
                <Button size="lg" className="w-full sm:w-auto">Book Your Cleaning</Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  (504) 447-4392
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </div>

      {/* Our Residential Services */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Residential Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions tailored to your home's unique needs
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {residentialServices.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white">{service.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* What We Clean - Detailed */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">What We Clean</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every corner of your home gets the attention it deserves
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto px-4">
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Kitchens</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Countertops & backsplash deep clean</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Sink, faucet, and fixtures scrubbed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Stovetop, range hood, and appliance exteriors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Cabinet fronts wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floors swept & mopped thoroughly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Bathrooms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Shower, tub, and tile deep scrub</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Toilet cleaned inside and out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Sink, faucet, and mirror polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Cabinet exteriors wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floors scrubbed and sanitized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Living Areas</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Dusting all surfaces and shelves</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Baseboards wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Light fixtures and ceiling fans</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Window sills and tracks cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Vacuum carpets & mop hard floors</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold">Bedrooms</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>All surfaces dusted thoroughly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Closet doors and frames cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Baseboards and trim wiped down</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Mirrors and glass cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floors vacuumed and mopped</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Our Process */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent, and designed around your schedule
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold">Book & Consult</h3>
              <p className="text-muted-foreground">
                Tell us about your home and cleaning needs
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold">Custom Quote</h3>
              <p className="text-muted-foreground">
                Receive a personalized quote and schedule
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold">We Clean</h3>
              <p className="text-muted-foreground">
                Our team arrives on time and gets to work
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center mx-auto">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold">Your Satisfaction</h3>
              <p className="text-muted-foreground">
                Enjoy your spotless, fresh-smelling home
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Lobos */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lobos Group</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Reliable & Punctual</h3>
              <p className="text-muted-foreground">
                We respect your time and show up when we say we will
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Fully Insured</h3>
              <p className="text-muted-foreground">
                Your home is protected with our comprehensive insurance
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
                Born and raised in New Orleans, serving our community
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Deep, Not Surface</h3>
              <p className="text-muted-foreground">
                We tackle baseboards, appliances, and overlooked spaces
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12 px-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto px-4">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">
                How long does a residential cleaning take?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                Cleaning time varies based on your home size and service type. A typical deep clean takes 3-6 hours,
                while regular maintenance cleanings take 2-4 hours. We'll provide a more specific estimate after
                reviewing your booking details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Do I need to be home during the cleaning?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                Not necessarily. Many clients provide us with access and leave for the day. We're happy to work
                around your schedule and can discuss the best arrangement during booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                Do you bring your own cleaning supplies?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                Yes! We bring all necessary cleaning supplies and equipment. If you have specific products you'd
                like us to use or any allergies we should be aware of, just let us know.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                What's the difference between deep cleaning and regular maintenance?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                Deep cleaning is more thorough and time-intensive, covering areas like baseboards, inside appliances,
                light fixtures, and window tracks. Regular maintenance cleaning focuses on keeping an already-clean
                home tidy with routine surface cleaning, vacuuming, and mopping.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">
                Do you offer recurring cleaning services?
              </AccordionTrigger>
              <AccordionContent value="item-5">
                Absolutely! We offer weekly, bi-weekly, and monthly recurring cleaning services. Recurring clients
                often receive priority scheduling and discounted rates. Contact us to discuss a custom plan.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent value="item-6">
                We serve the Greater New Orleans area within 30 miles of the French Quarter, including New Orleans,
                Metairie, Kenner, Gretna, and surrounding communities.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center mt-8 px-4">
          <Link href="/faq" className="text-primary hover:underline font-semibold">
            View All FAQs →
          </Link>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">Custom Pricing for Every Home</h2>
            <p className="text-lg text-muted-foreground">
              Every home is unique, and so are your cleaning needs. We provide personalized quotes
              based on your home's size, condition, and the services you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book?service=residential">
                <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Request Your Free Quote
                </Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Quote
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Home?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let Lobos Group handle the cleaning so you can enjoy your time doing what you love.
          </p>
          <div className="flex justify-center">
            <Link href="/book?service=residential">
              <Button size="lg" className="text-lg px-8">
                Book Your Residential Cleaning Today
              </Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
