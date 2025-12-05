"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";
import { Phone } from "lucide-react";

const pricingData = [
  { sqft: "2000 sq ft", deep: "$800", weekly: "$150", biweekly: "$250", monthly: "$350" },
  { sqft: "1800 sq ft", deep: "$700", weekly: "$140", biweekly: "$240", monthly: "$340" },
  { sqft: "900 sq ft", deep: "$500", weekly: "$120", biweekly: "$220", monthly: "$320" },
  { sqft: "700 sq ft", deep: "$450", weekly: "$100", biweekly: "$140", monthly: "$180" },
];

export default function PricingPage() {
  return (
    <div>
      {/* Hero */}
      <Section className="py-20 md:py-32">
        <FadeIn>
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold">
              Residential Cleaning Pricing
            </h1>
            <p className="text-xl text-muted-foreground">
              Transparent, straightforward pricing based on your home's square footage
            </p>
          </div>
        </FadeIn>
      </Section>

      {/* Package Descriptions */}
      <Section>
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn>
              <Card className="h-full">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl">Deep Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    Our most thorough service - perfect for first-time clients or homes needing a fresh start.
                  </p>
                  <h4 className="font-semibold text-sm uppercase text-muted-foreground">Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Deep scrub of inside refrigerator and oven</li>
                    <li>• Thorough bathroom cleaning with grout scrubbing</li>
                    <li>• Baseboards, window sills, and door frames</li>
                    <li>• Ceiling fans, light fixtures, and air vents</li>
                    <li>• Interior window cleaning and track detailing</li>
                    <li>• All appliances and cabinet fronts</li>
                    <li>• Deep vacuuming and mopping throughout</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn delay={0.1}>
              <Card className="h-full">
                <CardHeader className="bg-primary/5">
                  <CardTitle className="text-2xl">Regular Cleaning</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <p className="text-muted-foreground mb-4">
                    Ongoing maintenance to keep your home consistently clean. Available weekly, every 2 weeks, or monthly.
                  </p>
                  <h4 className="font-semibold text-sm uppercase text-muted-foreground">Includes:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Kitchen countertops, sinks, and appliance exteriors</li>
                    <li>• Bathroom cleaning - toilets, showers, sinks</li>
                    <li>• Dusting all surfaces and furniture</li>
                    <li>• Vacuuming carpets and mopping floors</li>
                    <li>• Trash removal and liner replacement</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>
      </Section>

      {/* Pricing Table */}
      <Section background="muted">
        <div className="max-w-6xl mx-auto px-4">
          <FadeIn>
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Packages</h2>
              <p className="text-lg text-muted-foreground">
                Choose the cleaning package that fits your needs
              </p>
            </div>
          </FadeIn>

          {/* Desktop Table */}
          <FadeIn delay={0.1}>
            <div className="hidden md:block overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg overflow-hidden shadow-lg">
                <thead>
                  <tr className="bg-primary text-white">
                    <th className="p-4 text-left font-semibold">Home Size</th>
                    <th className="p-4 text-center font-semibold">Deep Cleaning</th>
                    <th className="p-4 text-center font-semibold">Weekly</th>
                    <th className="p-4 text-center font-semibold">Every 2 Weeks</th>
                    <th className="p-4 text-center font-semibold">Monthly</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, index) => (
                    <tr key={row.sqft} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4 font-semibold">{row.sqft}</td>
                      <td className="p-4 text-center text-lg font-bold text-primary">{row.deep}</td>
                      <td className="p-4 text-center text-lg">{row.weekly}</td>
                      <td className="p-4 text-center text-lg">{row.biweekly}</td>
                      <td className="p-4 text-center text-lg">{row.monthly}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeIn>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-6">
            {pricingData.map((row, index) => (
              <FadeIn key={row.sqft} delay={index * 0.1}>
                <Card>
                  <CardHeader className="bg-primary text-white">
                    <CardTitle className="text-xl">{row.sqft}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-3">
                    <div className="flex justify-between items-center pb-3 border-b">
                      <span className="font-semibold">Deep Cleaning</span>
                      <span className="text-xl font-bold text-primary">{row.deep}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Weekly</span>
                      <span className="text-lg font-semibold">{row.weekly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Every 2 Weeks</span>
                      <span className="text-lg font-semibold">{row.biweekly}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Monthly</span>
                      <span className="text-lg font-semibold">{row.monthly}</span>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="muted">
        <FadeIn>
          <div className="text-center space-y-6 max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Book Your Cleaning?
            </h2>
            <p className="text-xl text-muted-foreground">
              Have questions or need a custom quote? We're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/book?service=residential">
                <Button size="lg" className="text-lg px-8 w-full sm:w-auto">
                  Book Now
                </Button>
              </Link>
              <a href="tel:504-447-4392">
                <Button size="lg" variant="outline" className="text-lg px-8 w-full sm:w-auto">
                  <Phone className="w-5 h-5 mr-2" />
                  (504) 447-4392
                </Button>
              </a>
            </div>
          </div>
        </FadeIn>
      </Section>
    </div>
  );
}
