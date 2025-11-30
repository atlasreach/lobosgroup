"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import {
  Key,
  Sparkles,
  Clock,
  Camera,
  Star,
  Calendar,
  CheckCircle,
  Zap,
  Shield,
  Phone,
  Home,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const rentalServices = [
  {
    icon: Key,
    title: "Turnover Cleaning",
    description: "Complete cleaning and setup between guests for 5-star reviews",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning & Reset",
    description: "Thorough deep cleaning to refresh your property periodically",
    image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    icon: Home,
    title: "Linen & Laundry Service",
    description: "Fresh linens, towels, and laundry service for every turnover",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
  },
  {
    icon: CheckCircle,
    title: "Property Inspections",
    description: "Pre and post-guest inspections with damage documentation",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
  },
  {
    icon: Zap,
    title: "Emergency Cleaning",
    description: "Same-day service for last-minute bookings and urgent needs",
    image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=800&q=80",
  },
  {
    icon: Camera,
    title: "Pre-Listing Prep",
    description: "Photo-ready deep clean before listing your property",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
];

export default function ShortTermRentalsPage() {
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
              Professional Turnover Cleaning for Airbnb & Vacation Rentals
            </h1>
            <p className="text-xl text-gray-200">
              Keep your guests happy and your calendar full with reliable, fast turnover cleaning
              services in New Orleans. We handle the cleaning so you can focus on hosting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=short-term-rentals">
                <Button size="lg">Get Started Today</Button>
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

      {/* Our Rental Services */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Our Short-Term Rental Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning and property management solutions for vacation rental hosts
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentalServices.map((service, index) => (
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
                    <service.icon className="w-8 h-8 text-white mb-2" />
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

      {/* What's Included in Turnover */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">What's Included in Every Turnover</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Complete cleaning checklist to ensure your property is guest-ready
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <FadeIn delay={0.1}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Kitchen</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>All surfaces cleaned & sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Dishes washed & put away</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Appliances cleaned inside & out</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Trash removed & fresh bags</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Coffee & supplies restocked</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Bathrooms</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Shower, tub & tile scrubbed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Toilet deep cleaned & sanitized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Mirrors & fixtures polished</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Fresh towels & toiletries</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floors mopped & sanitized</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Bedrooms</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Fresh linens & made beds</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>All surfaces dusted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Closets checked & tidied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Nightstands & lamps cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Floors vacuumed & mopped</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.4}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Home className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Living Areas</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Furniture dusted & arranged</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Cushions fluffed & straightened</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>TV remotes cleaned & placed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Windows & sills cleaned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>All floors cleaned thoroughly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.5}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Final Touches</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Temperature adjusted</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Lights turned on/off as needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Welcome materials placed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Photo documentation sent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Damage report (if any)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.6}>
            <Card className="h-full">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Key className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Additional</h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Outdoor spaces tidied</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Laundry washed & folded</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Lost & found items reported</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Supply inventory checked</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Keys secured properly</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Why Rental Hosts Choose Us */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Rental Hosts Choose Lobos Group</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Fast Turnaround Times</h3>
              <p className="text-muted-foreground">
                Quick, efficient cleaning to maximize your booking availability
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
              <h3 className="font-semibold text-lg">Same-Day Availability</h3>
              <p className="text-muted-foreground">
                Emergency and last-minute cleaning for those surprise bookings
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Reliable & Consistent</h3>
              <p className="text-muted-foreground">
                Dependable service you can count on for every single turnover
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Star className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">5-Star Results</h3>
              <p className="text-muted-foreground">
                Photo-ready properties that earn glowing guest reviews
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Flexible Plans */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Flexible Plans for Every Host</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you have one property or manage multiple rentals, we have a plan for you
            </p>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <Card className="h-full hover:shadow-xl transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Key className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Per-Turnover</h3>
                <p className="text-muted-foreground">Pay per clean, perfect for occasional hosts</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>No commitment required</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Book as needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-primary border-2 h-full hover:shadow-xl transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Monthly Packages</h3>
                <p className="text-muted-foreground">Best value for active rental properties</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Discounted rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Priority scheduling</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Multiple properties ok</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="h-full hover:shadow-xl transition-all">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Property Management</h3>
                <p className="text-muted-foreground">Full-service for management companies</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Custom pricing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Integration with your systems</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits for Hosts */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&q=80"
                alt="Happy vacation rental guests"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Benefits for Vacation Rental Hosts
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Star className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Better Guest Reviews</h3>
                    <p className="text-muted-foreground">
                      Consistently clean properties lead to 5-star reviews and repeat bookings
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Higher Occupancy Rates</h3>
                    <p className="text-muted-foreground">
                      Fast turnovers mean you can accept more bookings and increase revenue
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Time Savings</h3>
                    <p className="text-muted-foreground">
                      Stop spending hours cleaning between guests—focus on being a great host
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Peace of Mind</h3>
                    <p className="text-muted-foreground">
                      Know your property is always guest-ready, even when you're away
                    </p>
                  </div>
                </div>
              </div>
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
                How quickly can you turn over a property?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                Most turnovers are completed within 2-4 hours depending on property size. We can accommodate
                same-day bookings and tight turnaround times. For back-to-back bookings, we coordinate with
                your checkout/check-in schedule.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Do you provide linens and towels?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                We can work with your existing linens or provide linen service as an add-on. Many hosts prefer
                our laundry service where we wash, dry, and return fresh linens for each turnover.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                How do you handle key access?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                We work with lockboxes, smart locks, or key exchanges—whatever system you prefer. We maintain
                strict security protocols and can integrate with your property management software.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                What if guests leave the property damaged or extra messy?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                We document everything with photos and notify you immediately of any damage or excessive mess.
                Additional cleaning beyond normal turnover is billed separately, and we provide detailed reports
                for your records.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">
                Can you restock supplies during turnover?
              </AccordionTrigger>
              <AccordionContent value="item-5">
                Yes! We can restock toiletries, coffee, paper products, and other amenities. Just provide us
                with your inventory list and we'll keep everything stocked and ready for guests.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">
                Do you offer deep cleaning between regular turnovers?
              </AccordionTrigger>
              <AccordionContent value="item-6">
                Absolutely. We recommend periodic deep cleanings (monthly or quarterly) in addition to regular
                turnovers to maintain your property's condition and prevent wear and tear.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger value="item-7">
                How do I schedule cleanings?
              </AccordionTrigger>
              <AccordionContent value="item-7">
                We can sync with your Airbnb/VRBO calendar, work through your property management system, or
                accept direct bookings via phone, text, or email. We make scheduling as easy as possible.
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
            <h2 className="text-3xl md:text-4xl font-bold">Custom Pricing for Rental Properties</h2>
            <p className="text-lg text-muted-foreground">
              Every rental property is different. We provide customized pricing based on your property size,
              turnover frequency, and specific needs. Contact us for a free quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=short-term-rentals">
                <Button size="lg" className="text-lg px-8">
                  Request Your Free Quote
                </Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Us Today
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
            Ready to Simplify Your Rental Management?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let Lobos Group handle your turnovers so you can focus on providing an amazing guest experience
            and growing your rental business.
          </p>
          <Link href="/book?service=short-term-rentals">
            <Button size="lg" className="text-lg px-8">
              Get Started with Turnover Cleaning
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
