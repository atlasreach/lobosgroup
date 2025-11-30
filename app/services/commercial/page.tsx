"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import {
  Building2,
  Store,
  Utensils,
  Stethoscope,
  Dumbbell,
  Scissors,
  Building,
  Briefcase,
  CheckCircle,
  Clock,
  Shield,
  Sparkles,
  Phone,
  Calendar,
  ClipboardCheck,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const industries = [
  {
    icon: Building2,
    title: "Office Buildings",
    description: "Co-working spaces, corporate offices, and business centers",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    icon: Store,
    title: "Retail Stores",
    description: "Boutiques, shops, and retail spaces of all sizes",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  },
  {
    icon: Utensils,
    title: "Restaurants & Cafes",
    description: "Front of house, dining areas, and customer spaces",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
  },
  {
    icon: Stethoscope,
    title: "Medical Offices",
    description: "Dental offices, clinics, and healthcare facilities",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
  },
  {
    icon: Dumbbell,
    title: "Gyms & Fitness Centers",
    description: "Workout spaces, studios, and wellness centers",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    icon: Scissors,
    title: "Salons & Spas",
    description: "Beauty salons, barbershops, and spa facilities",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80",
  },
  {
    icon: Building,
    title: "Property Management",
    description: "Common areas, lobbies, and building facilities",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
  },
  {
    icon: Briefcase,
    title: "Small Businesses",
    description: "Any commercial space that needs professional cleaning",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
  },
];

const services = [
  {
    title: "Deep Cleaning",
    items: [
      "High and low dusting",
      "Baseboards and trim",
      "Light fixtures and vents",
      "Window sills and frames",
      "Detailed surface cleaning",
    ],
  },
  {
    title: "Floor Care",
    items: [
      "Vacuuming all carpeted areas",
      "Hard floor mopping",
      "Floor stripping and waxing",
      "Carpet deep cleaning",
      "Tile and grout cleaning",
    ],
  },
  {
    title: "Specialized Services",
    items: [
      "Window cleaning (interior/exterior)",
      "Post-event cleanup",
      "Move-in/move-out cleaning",
      "Pressure washing",
      "Construction cleanup",
    ],
  },
];

export default function CommercialCleaningPage() {
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
            <source src="/short-term-rental.mp4" type="video/mp4" />
          </video>
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Reliable Commercial Cleaning for New Orleans Businesses
            </h1>
            <p className="text-xl text-gray-200">
              Keep your workplace spotless and professional with flexible cleaning schedules
              designed around your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=commercial">
                <Button size="lg">Request Commercial Quote</Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                  <Phone className="w-5 h-5 mr-2" />
                  (504) 447-4392
                </Button>
              </a>
            </div>
          </div>
        </Section>
      </div>

      {/* Industries We Serve */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Industries We Serve</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning solutions tailored to your industry's unique needs
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <FadeIn key={industry.title} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative h-48">
                  <Image
                    src={industry.image}
                    alt={industry.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <industry.icon className="w-6 h-6 text-white mb-2" />
                    <h3 className="text-lg font-bold text-white">{industry.title}</h3>
                  </div>
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Commercial Services */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Commercial Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions to maintain a professional environment
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <FadeIn key={service.title} delay={index * 0.1}>
              <Card className="h-full">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Why Businesses Choose Us */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Businesses Choose Lobos Group</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Flexible Scheduling</h3>
              <p className="text-muted-foreground">
                After-hours, early morning, weekends – we work around your business hours
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
              <h3 className="font-semibold text-lg">Fully Insured & Bonded</h3>
              <p className="text-muted-foreground">
                Comprehensive insurance protects your business and property
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <ClipboardCheck className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Trained Professionals</h3>
              <p className="text-muted-foreground">
                Background-checked staff trained in commercial cleaning standards
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
              <h3 className="font-semibold text-lg">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                Consistent, reliable service with satisfaction guaranteed
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">How It Works for Businesses</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Simple process to get your commercial cleaning plan started
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold">Site Visit & Assessment</h3>
              <p className="text-muted-foreground">
                We visit your facility to understand your specific needs
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '0.5s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold">Custom Cleaning Plan</h3>
              <p className="text-muted-foreground">
                Receive a tailored plan with transparent pricing
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold">Scheduled Service</h3>
              <p className="text-muted-foreground">
                We clean on your schedule, consistently and reliably
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center space-y-4">
              <div className="relative inline-flex items-center justify-center">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }} />
                <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold">Quality Checks</h3>
              <p className="text-muted-foreground">
                Regular inspections ensure consistent quality
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits Section */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Benefits of a Clean Business
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Professional Appearance</h3>
                    <p className="text-muted-foreground">
                      Make a great first impression on clients and customers with a spotless facility
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Healthy Environment</h3>
                    <p className="text-muted-foreground">
                      Reduce sick days with regular sanitization and deep cleaning
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Employee Productivity</h3>
                    <p className="text-muted-foreground">
                      Clean, organized spaces help your team stay focused and productive
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Cost Effective</h3>
                    <p className="text-muted-foreground">
                      Regular maintenance prevents costly deep cleaning and repairs
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80"
                alt="Clean modern office space"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked Questions
            </h2>
          </div>
        </FadeIn>
        <div className="max-w-3xl mx-auto">
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">
                What types of businesses do you service?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                We service a wide range of commercial properties including offices, retail stores, restaurants,
                medical offices, gyms, salons, and property management facilities. If you have a commercial space,
                we can likely help!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Can you work around our business hours?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                Absolutely! We offer flexible scheduling including after-hours cleaning, early morning services,
                and weekend appointments. We work around your schedule to minimize disruption to your business.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                Are you insured and bonded?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                Yes, Lobos Group is fully insured and bonded. We carry comprehensive liability insurance to protect
                your business, and all our staff members undergo background checks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                Do you provide your own cleaning supplies and equipment?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                Yes, we bring all necessary cleaning supplies and professional equipment. If you have specific
                products or green cleaning requirements, we're happy to accommodate those preferences.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">
                How do you ensure quality and consistency?
              </AccordionTrigger>
              <AccordionContent value="item-5">
                We use detailed cleaning checklists, conduct regular quality inspections, and maintain open
                communication with our clients. Your dedicated account manager will ensure your facility consistently
                meets your standards.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">
                What if we need additional services outside our regular schedule?
              </AccordionTrigger>
              <AccordionContent value="item-6">
                We're flexible! If you need emergency cleaning, post-event cleanup, or one-time deep cleaning services,
                just reach out and we'll accommodate your needs as quickly as possible.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="text-center mt-8">
          <Link href="/faq" className="text-primary hover:underline font-semibold">
            View All FAQs →
          </Link>
        </div>
      </Section>

      {/* Pricing Section */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Custom Commercial Quotes</h2>
            <p className="text-lg text-muted-foreground">
              Every business is unique with different cleaning needs, square footage, and frequency requirements.
              We provide customized quotes tailored to your specific facility and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=commercial">
                <Button size="lg" className="text-lg px-8">
                  Request Free Site Visit
                </Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Quote
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Elevate Your Business Environment?
          </h2>
          <p className="text-xl text-muted-foreground">
            Partner with Lobos Group for reliable, professional commercial cleaning services
            that keep your business looking its best.
          </p>
          <Link href="/book?service=commercial">
            <Button size="lg" className="text-lg px-8">
              Get Your Commercial Cleaning Quote
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
