"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import EnhancedServiceCard from "@/components/EnhancedServiceCard";
import GoogleMap from "@/components/GoogleMap";
import FadeIn from "@/components/FadeIn";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import {
  LayoutGrid,
  Home as HomeIcon,
  Building2,
  Key,
  Wrench,
  Package,
  Settings,
  Zap,
} from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80&fit=crop"
            alt="Clean modern living room"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Professional Cleaning Services for New Orleans Homes & Businesses
            </h1>
            <p className="text-xl text-gray-200">
              From deep cleaning and organization to commercial services and rental turnovers, Lobos Group delivers exceptional results you can count on. Locally owned, fully insured, and dedicated to your satisfaction.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book">
                <Button size="lg" className="w-full sm:w-auto text-lg px-8">
                  Get Free Quote
                </Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20 text-lg px-8">
                  Call (504) 447-4392
                </Button>
              </a>
              <Link href="/services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white/20">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </Section>
      </div>

      {/* Core Services - Four Main Categories */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Core Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional cleaning and organization solutions tailored to your needs in New Orleans
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-md md:max-w-none mx-auto">
          <FadeIn delay={0.1}>
            <EnhancedServiceCard
              icon={LayoutGrid}
              title="Organization Services"
              subtitle="Any and Every Space"
              description="Transform your home with customized organization for kitchens, closets, bathrooms, pantries, and more."
              href="/services/organization"
              imageSrc="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
              videoSrc="/residential-cleaning.mp4"
              featured
            />
          </FadeIn>
          <FadeIn delay={0.2}>
            <EnhancedServiceCard
              icon={HomeIcon}
              title="Residential Cleaning"
              subtitle="Deep Clean Your Home"
              description="Thorough deep cleaning services that transform your house into a spotless, welcoming sanctuary."
              href="/services/residential"
              imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
              videoSrc="/closet-organizing.mp4"
            />
          </FadeIn>
          <FadeIn delay={0.3}>
            <EnhancedServiceCard
              icon={Building2}
              title="Commercial Cleaning"
              subtitle="Professional Business Solutions"
              description="Keep your workplace pristine with our reliable commercial cleaning and maintenance services."
              href="/services/commercial"
              imageSrc="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              videoSrc="/commercial-cleaning.mp4"
            />
          </FadeIn>
          <FadeIn delay={0.4}>
            <EnhancedServiceCard
              icon={Key}
              title="Short-Term Rentals"
              subtitle="Turnover & Property Management"
              description="Professional turnover cleaning and property management for vacation rentals and Airbnb hosts."
              href="/services/short-term-rentals"
              imageSrc="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80"
              videoSrc="/short-term-rental.mp4"
            />
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Lobos */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-6 mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse"></div>
                <Image
                  src="/logo.png"
                  alt="Lobos Group Logo"
                  width={120}
                  height={120}
                  className="relative drop-shadow-xl"
                />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lobos Group</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your trusted partner for professional cleaning services in New Orleans
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Wrench className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-bold text-xl">All Types of Jobs</h3>
              <p className="text-muted-foreground">
                From residential deep cleans to commercial spaces and everything in between. No job is too big or too small.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Settings className="w-10 h-10 text-primary group-hover:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              <h3 className="font-bold text-xl">Custom Requests</h3>
              <p className="text-muted-foreground">
                Every space is unique. We tailor our services to meet your specific needs and preferences.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Package className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-bold text-xl">Professional Equipment</h3>
              <p className="text-muted-foreground">
                Fully equipped with commercial-grade tools and supplies to deliver exceptional results every time.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.4}>
            <div className="text-center space-y-3 group hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/10 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Zap className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-bold text-xl">Fast & Efficient</h3>
              <p className="text-muted-foreground">
                Reliable service that respects your time. We show up when we say we will and get the job done right.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* How It Works */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/asr-design-studio-E3VwTDQTaoc-unsplash.jpg"
            alt="French Quarter New Orleans"
            fill
            className="object-cover brightness-[0.5] contrast-110 saturate-110"
          />
        </div>
        <Section className="relative z-10 py-20">
          <FadeIn>
            <div className="text-center space-y-6 mb-16">
              <h2 className="text-4xl md:text-6xl font-black text-white drop-shadow-2xl tracking-tight">
                How It Works
              </h2>
              <div className="flex justify-center">
                <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-white to-transparent rounded-full shadow-lg"></div>
              </div>
            </div>
          </FadeIn>
          <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-1 bg-gradient-to-r from-primary/30 via-primary to-primary/30 rounded-full shadow-lg" style={{ top: '2.5rem' }} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <FadeIn delay={0.1}>
              <div className="group text-center space-y-4 relative hover:scale-110 transition-all duration-300">
                <div className="relative inline-flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse group-hover:bg-primary/60 transition-colors" />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:shadow-primary/80 transition-all border-4 border-white/30">
                    1
                  </div>
                </div>
                <h3 className="font-black text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tight leading-tight">
                  Tell Us What You Need
                </h3>
                <p className="text-white font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-lg leading-relaxed">
                  Fill out our booking form with your service needs and preferences.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="group text-center space-y-4 relative hover:scale-110 transition-all duration-300">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-12 text-white text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse font-bold">→</div>
                <div className="relative inline-flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse group-hover:bg-primary/60 transition-colors" style={{ animationDelay: '0.5s' }} />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:shadow-primary/80 transition-all border-4 border-white/30">
                    2
                  </div>
                </div>
                <h3 className="font-black text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tight leading-tight">
                  Get a Quote
                </h3>
                <p className="text-white font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-lg leading-relaxed">
                  We'll review your request and send you a quote and available times.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="group text-center space-y-4 relative hover:scale-110 transition-all duration-300">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-12 text-white text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse font-bold">→</div>
                <div className="relative inline-flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse group-hover:bg-primary/60 transition-colors" style={{ animationDelay: '1s' }} />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:shadow-primary/80 transition-all border-4 border-white/30">
                    3
                  </div>
                </div>
                <h3 className="font-black text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tight leading-tight">
                  We Clean Your Space
                </h3>
                <p className="text-white font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-lg leading-relaxed">
                  Our team arrives on time and gets to work on your home reset.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="group text-center space-y-4 relative hover:scale-110 transition-all duration-300">
                {/* Arrow - Desktop */}
                <div className="hidden md:block absolute -left-12 top-12 text-white text-5xl drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse font-bold">→</div>
                <div className="relative inline-flex items-center justify-center mb-2">
                  <div className="absolute inset-0 bg-primary/40 rounded-full blur-3xl animate-pulse group-hover:bg-primary/60 transition-colors" style={{ animationDelay: '1.5s' }} />
                  <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center text-5xl font-black text-white shadow-2xl group-hover:shadow-primary/80 transition-all border-4 border-white/30">
                    4
                  </div>
                </div>
                <h3 className="font-black text-3xl text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] tracking-tight leading-tight">
                  Relax & Enjoy
                </h3>
                <p className="text-white font-bold drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] text-lg leading-relaxed">
                  Come home to a fresh, clean, and organized space.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.5}>
          <div className="text-center mt-12">
            <Link href="/book">
              <Button size="lg" className="text-lg px-8">Get Your Free Quote</Button>
            </Link>
          </div>
        </FadeIn>
        </Section>
      </div>

      {/* Testimonials */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rosie-kerr-nUkxLPE5Fto-unsplash.jpg"
            alt="Testimonials Background"
            fill
            className="object-cover brightness-[0.5] contrast-110 saturate-110"
          />
        </div>
        <Section className="relative z-10 py-20">
          <FadeIn>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-100 drop-shadow-md">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
          </FadeIn>
          <TestimonialsCarousel />
        </Section>
      </div>

      {/* Service Area */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/rosie-kerr-nUkxLPE5Fto-unsplash.jpg"
            alt="Service Area Background"
            fill
            className="object-cover brightness-[0.5] contrast-110 saturate-110"
          />
        </div>
        <Section className="relative z-10 py-20">
          <FadeIn>
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="space-y-4 mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white drop-shadow-2xl">
                  Serving Greater New Orleans
                </h2>
                <div className="flex justify-center">
                  <div className="h-1 w-32 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
                </div>
                <p className="text-xl text-gray-100 max-w-3xl mx-auto drop-shadow-lg font-medium">
                  Proudly serving within 30 miles of the French Quarter
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-center mb-10">
                <FadeIn delay={0.1}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">New Orleans</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.15}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Metairie</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Kenner</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.25}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Gretna</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Harahan</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.35}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">River Ridge</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Chalmette</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.45}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Marrero</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.5}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Westwego</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.55}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Arabi</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.6}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">Terrytown</p>
                  </div>
                </FadeIn>
                <FadeIn delay={0.65}>
                  <div className="group p-4 bg-white/95 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-white/50">
                    <p className="font-bold text-lg group-hover:text-primary transition-colors">& More</p>
                  </div>
                </FadeIn>
              </div>

              <FadeIn delay={0.7}>
                <div className="my-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl">
                  <GoogleMap />
                </div>
              </FadeIn>

              <FadeIn delay={0.8}>
                <div className="pt-6">
                  <Link href="/book">
                    <Button size="lg" className="text-lg px-10 py-6 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                      Get Your Free Quote
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>
          </FadeIn>
        </Section>
      </div>
    </div>
  );
}
