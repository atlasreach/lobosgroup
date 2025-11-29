import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Section from "@/components/Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
  title: "FAQ - Lobos Group Cleaning Service",
  description:
    "Frequently asked questions about our cleaning services, booking, payment, and more.",
};

export default function FAQPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-muted-foreground">
            Find answers to common questions about our services
          </p>
        </div>
      </Section>

      {/* Cleaning & Services */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Cleaning & Services</h2>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger value="item-1">
                What's the difference between deep cleaning and regular
                cleaning?
              </AccordionTrigger>
              <AccordionContent value="item-1">
                Deep cleaning goes far beyond surface-level tidying. We clean
                inside appliances, scrub baseboards, detail light fixtures,
                clean window tracks, and tackle areas typically overlooked in
                regular cleaning. Think of it as a reset for your entire home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger value="item-2">
                How long does a deep clean take?
              </AccordionTrigger>
              <AccordionContent value="item-2">
                Typically 3-6 hours depending on home size and condition. A
                small apartment might take 3-4 hours, while a large home could
                take 6-8 hours. We'll give you a more specific estimate when
                you book.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger value="item-3">
                Do I need to be home during the service?
              </AccordionTrigger>
              <AccordionContent value="item-3">
                Not necessarily. Many clients provide access (key, code, or
                lockbox) and leave for the day. Others prefer to be home. We're
                flexible and will work with whatever makes you most comfortable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger value="item-4">
                Do you bring your own cleaning supplies?
              </AccordionTrigger>
              <AccordionContent value="item-4">
                Yes! We bring all necessary cleaning supplies and equipment. If
                you have specific products you'd prefer we use (eco-friendly,
                fragrance-free, etc.), just let us know and we'll accommodate.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger value="item-5">
                What if I have pets?
              </AccordionTrigger>
              <AccordionContent value="item-5">
                We love pets! Just let us know about any pets when booking so we
                can take appropriate precautions. If your pet is anxious around
                strangers, we recommend securing them in a comfortable space
                during the clean.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger value="item-6">
                Do you move furniture?
              </AccordionTrigger>
              <AccordionContent value="item-6">
                We'll move light furniture (chairs, small tables) to clean
                underneath and around them. We don't move heavy furniture like
                couches, beds, or large dressers. If you need something specific
                moved, please mention it when booking.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Booking & Payment */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Booking & Payment</h2>
          <Accordion type="multiple">
            <AccordionItem value="booking-1">
              <AccordionTrigger value="booking-1">
                How do I book a service?
              </AccordionTrigger>
              <AccordionContent value="booking-1">
                Fill out our booking form with your service needs, home details,
                and preferred dates. We'll review it and reach out within 24
                hours with a quote and available time slots.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking-2">
              <AccordionTrigger value="booking-2">
                How far in advance should I book?
              </AccordionTrigger>
              <AccordionContent value="booking-2">
                We recommend booking at least 3-5 days in advance for the best
                availability. However, we often have same-week or even same-day
                availability—just ask!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking-3">
              <AccordionTrigger value="booking-3">
                What payment methods do you accept?
              </AccordionTrigger>
              <AccordionContent value="booking-3">
                We accept cash, Venmo, Zelle, and all major credit cards.
                Payment is due upon completion of service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking-4">
              <AccordionTrigger value="booking-4">
                Do you require a deposit?
              </AccordionTrigger>
              <AccordionContent value="booking-4">
                For first-time deep cleans and large projects, we may request a
                small deposit to secure your booking. Recurring clients
                typically don't need to provide a deposit.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="booking-5">
              <AccordionTrigger value="booking-5">
                What's your cancellation policy?
              </AccordionTrigger>
              <AccordionContent value="booking-5">
                We ask for at least 24 hours notice for cancellations or
                rescheduling. Cancellations with less than 24 hours notice may
                be subject to a fee.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Safety & Trust */}
      <Section background="muted">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Safety & Trust</h2>
          <Accordion type="multiple">
            <AccordionItem value="safety-1">
              <AccordionTrigger value="safety-1">
                Are you insured and bonded?
              </AccordionTrigger>
              <AccordionContent value="safety-1">
                Yes, Lobos Group is fully insured and bonded for your peace of
                mind. We take the security and safety of your home seriously.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="safety-2">
              <AccordionTrigger value="safety-2">
                Should I put away valuables before you arrive?
              </AccordionTrigger>
              <AccordionContent value="safety-2">
                While we're trustworthy and insured, we always recommend
                securing jewelry, cash, and important documents for your own
                peace of mind. This is standard practice with any home service.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="safety-3">
              <AccordionTrigger value="safety-3">
                Who will be cleaning my home?
              </AccordionTrigger>
              <AccordionContent value="safety-3">
                Your home will be cleaned by trained, background-checked members
                of the Lobos Group team. We're a small, locally-owned business,
                so you'll see familiar faces if you become a recurring client.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Service Area */}
      <Section>
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold">Service Area</h2>
          <Accordion type="multiple">
            <AccordionItem value="area-1">
              <AccordionTrigger value="area-1">
                What areas do you serve?
              </AccordionTrigger>
              <AccordionContent value="area-1">
                We proudly serve New Orleans and surrounding areas including
                Metairie, Kenner, Algiers, Gretna, and nearby parishes. Not
                sure if we cover your area? Just ask when you book!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="area-2">
              <AccordionTrigger value="area-2">
                Do you charge a travel fee?
              </AccordionTrigger>
              <AccordionContent value="area-2">
                No travel fees within our standard service area (New Orleans
                metro). For locations further out, we may add a small travel
                fee, which we'll disclose upfront in your quote.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </Section>

      {/* Still Have Questions */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Still Have Questions?</h2>
          <p className="text-lg text-muted-foreground">
            We're happy to answer any other questions you might have. Reach out
            and we'll get back to you quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/book">
              <Button size="lg">Book a Service</Button>
            </Link>
            <a href="mailto:info@lobosgroup.com">
              <Button size="lg" variant="outline">
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
