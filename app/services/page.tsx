"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import {
  LayoutGrid,
  Home as HomeIcon,
  Building2,
  Key,
} from "lucide-react";

export default function ServicesPage() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80"
            alt="Professional cleaning services"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Professional Cleaning Services in New Orleans
            </h1>
            <p className="text-xl text-gray-200">
              From home organization to commercial cleaning, we provide comprehensive
              solutions for every space and need in the Greater New Orleans area.
            </p>
            <Link href="/book">
              <Button size="lg" className="text-lg px-8">
                Book Your Service Today
              </Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* Our Core Services */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning and organization solutions tailored to your needs
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <EnhancedServiceCard
              icon={LayoutGrid}
              title="Organization Services"
              subtitle="Any and Every Space"
              description="Transform your home with customized organization for kitchens, closets, bathrooms, pantries, and more. Declutter and create sustainable systems."
              href="/services/organization"
              imageSrc="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <EnhancedServiceCard
              icon={HomeIcon}
              title="Residential Cleaning"
              subtitle="Deep Clean Your Home"
              description="Thorough deep cleaning, regular maintenance, move-in/out services, and post-construction cleanup for homes and apartments."
              href="/services/residential"
              imageSrc="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <EnhancedServiceCard
              icon={Building2}
              title="Commercial Cleaning"
              subtitle="Professional Business Solutions"
              description="Keep your workplace pristine with reliable commercial cleaning, janitorial services, and maintenance for offices, retail, and more."
              href="/services/commercial"
              imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <EnhancedServiceCard
              icon={Key}
              title="Short-Term Rentals"
              subtitle="Turnover & Property Management"
              description="Professional turnover cleaning, linen service, and property inspections for vacation rentals, Airbnb hosts, and property managers."
              href="/services/short-term-rentals"
              imageSrc="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Lobos Group */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lobos Group</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              What sets us apart in the New Orleans cleaning industry
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Comprehensive Services</h3>
              <p className="text-muted-foreground">
                One company for all your cleaning and organization needs
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Reliable & On-Time</h3>
              <p className="text-muted-foreground">
                We respect your schedule and show up when we say we will
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Fully Insured</h3>
              <p className="text-muted-foreground">
                Your property is protected with comprehensive insurance
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Locally Owned</h3>
              <p className="text-muted-foreground">
                Born and raised in New Orleans, serving our community with pride
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.5}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Deep, Not Surface</h3>
              <p className="text-muted-foreground">
                We go beyond surface cleaning to tackle overlooked spaces
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.6}>
            <div className="text-center space-y-3 p-6">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
              <h3 className="font-semibold text-lg">Customer Satisfaction</h3>
              <p className="text-muted-foreground">
                We don't just meet expectations—we exceed them
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Service Areas */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Serving Greater New Orleans</h2>
            <p className="text-lg text-muted-foreground">
              Proudly serving the Greater New Orleans area within 30 miles of the French Quarter
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center">
              {["New Orleans", "Metairie", "Kenner", "Gretna", "Harahan", "River Ridge", "Chalmette", "Marrero"].map((city) => (
                <div key={city} className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-semibold">{city}</p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center space-y-6 max-w-3xl mx-auto bg-primary/5 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground">
            Whether you need a one-time deep clean or ongoing service, we're here to help.
            Contact us today for a free quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg" className="text-lg px-8">
                Book Your Service
              </Button>
            </Link>
            <a href="tel:504-447-4392">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Call (504) 447-4392
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
