"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import {
  CheckCircle,
  LayoutGrid,
  Heart,
  Clock,
  Sparkles,
  Phone,
  Target,
  Users,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const organizationSpaces = [
  {
    title: "Kitchens & Pantries",
    description: "Cabinets, drawers, pantry organization, and label systems",
    image: "https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80",
  },
  {
    title: "Closets",
    description: "Walk-ins, reach-ins, seasonal rotation, and wardrobe systems",
    image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
  },
  {
    title: "Bathrooms",
    description: "Vanities, linen closets, under sink, and medicine cabinets",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80",
  },
  {
    title: "Kids Rooms",
    description: "Toys, clothes, books, and study areas organized",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
  },
  {
    title: "Laundry & Linens",
    description: "Folding systems, linen storage, and cleaning supply organization",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
  },
  {
    title: "Garages & Storage",
    description: "Tools, sports equipment, seasonal items, and storage zones",
    image: "https://images.unsplash.com/photo-1588854337221-4cf9fa96059b?w=800&q=80",
  },
  {
    title: "Home Offices",
    description: "Paperwork, supplies, filing systems, and desk organization",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&q=80",
  },
  {
    title: "Living Spaces",
    description: "Entertainment centers, bookshelves, and common areas",
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
  },
  {
    title: "Custom Spaces",
    description: "Any space in your home that needs organization",
    image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80",
  },
];

export default function OrganizationServicesPage() {
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
            <source src="/closet-organizing.mp4" type="video/mp4" />
          </video>
        </div>
        <Section className="py-20 md:py-32 relative z-10">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
              Professional Organization for Any and Every Space
            </h1>
            <p className="text-xl text-gray-200">
              Life gets hectic, and maintaining an organized home can be challenging.
              Lobos Group designs and implements customized organization solutions that are
              effective, sustainable, and tailored to your lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=organization">
                <Button size="lg">Book Organization Service</Button>
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

      {/* What We Organize */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Spaces We Organize</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional organization services for every area of your home
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {organizationSpaces.map((space, index) => (
            <FadeIn key={space.title} delay={index * 0.1}>
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group h-full">
                <div className="relative h-48">
                  <Image
                    src={space.image}
                    alt={space.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-1">{space.title}</h3>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">{space.description}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Our Process */}
      <Section>
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Our Organization Process</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A systematic approach to creating sustainable, functional organization
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
              <h3 className="text-xl font-bold">Consultation</h3>
              <p className="text-muted-foreground">
                We assess your space, lifestyle, and organization goals
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
              <h3 className="text-xl font-bold">Sort & Declutter</h3>
              <p className="text-muted-foreground">
                Remove items that no longer serve you with our expert guidance
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
              <h3 className="text-xl font-bold">Organize & Systemize</h3>
              <p className="text-muted-foreground">
                Create custom systems that work for your daily routine
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
              <h3 className="text-xl font-bold">Maintain & Support</h3>
              <p className="text-muted-foreground">
                Tips and follow-up support to keep your space organized
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Why Choose Us for Organization */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Why Choose Lobos Group for Organization</h2>
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn delay={0.1}>
            <div className="text-center space-y-3">
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="font-semibold text-lg">Customized Solutions</h3>
              <p className="text-muted-foreground">
                Every home is unique—we create systems tailored to your needs
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
              <h3 className="font-semibold text-lg">Sustainable Systems</h3>
              <p className="text-muted-foreground">
                We design organization that's easy to maintain long-term
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
              <h3 className="font-semibold text-lg">Non-Judgmental</h3>
              <p className="text-muted-foreground">
                We approach every space with respect and understanding
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
              <h3 className="font-semibold text-lg">Clutter to Calm</h3>
              <p className="text-muted-foreground">
                Transform chaos into peaceful, functional spaces
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Benefits of Organization */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <FadeIn>
            <div className="relative h-96 lg:h-full min-h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                alt="Organized beautiful home"
                fill
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                The Benefits of an Organized Home
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Reduce Stress & Anxiety</h3>
                    <p className="text-muted-foreground">
                      An organized home creates a peaceful environment and reduces daily stress
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Save Time</h3>
                    <p className="text-muted-foreground">
                      Stop wasting time searching for items—everything has its place
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Maximize Space</h3>
                    <p className="text-muted-foreground">
                      Make the most of your square footage with smart organization
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Increase Productivity</h3>
                    <p className="text-muted-foreground">
                      Organized spaces lead to clearer thinking and better focus
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Service Packages */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">Organization Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the package that fits your needs, or we'll create a custom plan
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <FadeIn delay={0.1}>
            <Card className="hover:shadow-xl transition-all h-full">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <LayoutGrid className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Single Space</h3>
                <p className="text-muted-foreground">Perfect for one closet, pantry, or room</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>1-2 spaces organized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Decluttering guidance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Custom organization system</span>
                  </li>
                </ul>
                <Link href="/book?service=organization&package=single">
                  <Button variant="outline" className="w-full">Get Custom Quote</Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Card className="border-primary border-2 hover:shadow-xl transition-all h-full">
              <CardContent className="p-6 space-y-4">
                <div className="text-xs font-semibold text-primary mb-2">MOST POPULAR</div>
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Multi-Room</h3>
                <p className="text-muted-foreground">Great for organizing multiple spaces</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>3-5 spaces organized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Complete decluttering support</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Maintenance plan included</span>
                  </li>
                </ul>
                <Link href="/book?service=organization&package=multi">
                  <Button className="w-full">Get Custom Quote</Button>
                </Link>
              </CardContent>
            </Card>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Card className="hover:shadow-xl transition-all h-full">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Whole Home</h3>
                <p className="text-muted-foreground">Complete home organization transformation</p>
                <ul className="space-y-3 pt-4">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Entire home organized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Donation coordination</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <span>Ongoing support & follow-up</span>
                  </li>
                </ul>
                <Link href="/book?service=organization&package=whole-home">
                  <Button variant="outline" className="w-full">Get Custom Quote</Button>
                </Link>
              </CardContent>
            </Card>
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
                How long does an organization project take?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                Project length varies based on the space size and clutter level. A single closet might take
                3-4 hours, while a whole home could take multiple days. We'll provide an estimate during
                your consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                Do I need to buy organizing products before you come?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                No! We assess your space first, then recommend specific products that will work best.
                We can shop for these items or provide you with a shopping list if you prefer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                Will you help me decide what to keep and what to donate?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                Absolutely. We guide you through the decluttering process with proven techniques, but
                you always make the final decisions about your belongings. We're here to support, not judge.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                What happens to items I want to donate?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                We can coordinate donation drop-offs to local charities as part of our service. We'll
                handle the transport so you don't have to worry about it.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">
                Can you help maintain organization after the initial setup?
              </AccordionTrigger>
              <AccordionContent value="item-5">
                Yes! We offer maintenance sessions to help you stay organized. Many clients schedule
                quarterly or seasonal tune-ups to keep their systems running smoothly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">
                Do you work with people who have difficulty letting go of items?
              </AccordionTrigger>
              <AccordionContent value="item-6">
                We work with clients of all backgrounds and comfort levels. Our approach is patient,
                compassionate, and non-judgmental. We move at your pace and respect your emotional
                attachments to items.
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

      {/* Pricing CTA */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Custom Pricing for Your Project</h2>
            <p className="text-lg text-muted-foreground">
              Every organization project is unique. We provide personalized quotes based on your
              space, goals, and timeline. Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book?service=organization">
                <Button size="lg" className="text-lg px-8">
                  Request Free Consultation
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

      {/* Final CTA Section */}
      <Section>
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl text-muted-foreground">
            Let's create an organized, stress-free home that works for your lifestyle.
            Start your organization journey today.
          </p>
          <Link href="/book?service=organization">
            <Button size="lg" className="text-lg px-8">
              Book Your Organization Service
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
