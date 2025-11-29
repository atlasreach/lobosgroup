import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Section from "@/components/Section";
import { CheckCircle, Clock, User, ShoppingCart as Cart } from "lucide-react";

export const metadata: Metadata = {
  title: "Grocery Shopping Service - Lobos Group",
  description:
    "Grocery shopping and home restock service in New Orleans. We handle your list so you come home to a stocked kitchen.",
};

export default function GroceryShoppingPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&q=80"
            alt="Fresh groceries in reusable bags"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        <Section className="py-20 relative z-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              Grocery Shopping & Home Restock
            </h1>
            <p className="text-xl text-gray-200">
              We handle your list so you come home to a stocked kitchen. More time
              for you, less time at the store.
            </p>
            <Link href="/book?service=grocery-shopping">
              <Button size="lg">Request Grocery Shopping</Button>
            </Link>
          </div>
        </Section>
      </div>

      {/* How It Works */}
      <Section background="muted">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Send Your List
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                Text, email, or share your grocery list with us. Be as specific
                or general as you like.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                We Shop
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                We head to your preferred store(s) and carefully select each
                item on your list.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Delivery Window
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                We deliver during your preferred time window and notify you when
                we're on the way.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <CardTitle className="text-lg mb-2 text-center">
                Put-Away Option
              </CardTitle>
              <p className="text-sm text-muted-foreground text-center">
                Optional: We can put away groceries if you're home or have
                provided access.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Best For */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Perfect For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <Clock className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Busy Professionals</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Reclaim your weekends and evenings. No more rushing to the
                store after work or fighting crowds on Saturday.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <User className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Seniors & Limited Mobility</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay stocked up without the physical strain of shopping and
                carrying heavy bags. We handle it all.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Cart className="w-8 h-8 text-primary mb-2" />
              <CardTitle>Families with No Time</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Between kids, work, and life, grocery shopping gets pushed
                aside. Let us take it off your plate.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Pair With Deep Cleaning */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Pair With Deep Cleaning
          </h2>
          <p className="text-lg text-muted-foreground">
            Come home to a clean house <strong>and</strong> a full fridge the
            same day. We can coordinate grocery delivery with your scheduled
            cleaning.
          </p>
          <div className="bg-card rounded-lg border p-6 space-y-4">
            <div className="flex items-center justify-center gap-3 text-xl font-semibold">
              <span>Deep Clean</span>
              <span className="text-muted-foreground">+</span>
              <span>Grocery Run</span>
              <span className="text-muted-foreground">=</span>
              <span className="text-primary">Perfect Day</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Schedule both services on the same day for maximum convenience.
            </p>
          </div>
          <Link href="/book?service=deep-cleaning,grocery-shopping">
            <Button size="lg">Book Both Services</Button>
          </Link>
        </div>
      </Section>

      {/* Pricing */}
      <Section>
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Pricing</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardContent className="pt-6 space-y-6">
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-lg">Base Trip Fee</h3>
                  <p className="text-sm text-muted-foreground">
                    Covers shopping time at one store
                  </p>
                </div>
                <div className="text-2xl font-bold">$35</div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-lg">Additional Store</h3>
                  <p className="text-sm text-muted-foreground">
                    If you need items from multiple stores
                  </p>
                </div>
                <div className="text-2xl font-bold">+ $15</div>
              </div>
              <div className="flex justify-between items-center pb-4 border-b">
                <div>
                  <h3 className="font-semibold text-lg">Put-Away Service</h3>
                  <p className="text-sm text-muted-foreground">
                    We unpack and organize groceries for you
                  </p>
                </div>
                <div className="text-2xl font-bold">+ $20</div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary inline mr-1" />
                  You pay for groceries (we provide receipt)
                </p>
                <p className="text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary inline mr-1" />
                  Payment via cash, Venmo, or card on delivery
                </p>
                <p className="text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary inline mr-1" />
                  Same-day service available with advance notice
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* CTA */}
      <Section background="muted">
        <div className="text-center space-y-6 max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold">Skip the Store This Week</h2>
          <p className="text-lg text-muted-foreground">
            Let us handle your grocery run while you focus on what matters.
          </p>
          <Link href="/book?service=grocery-shopping">
            <Button size="lg">Request Grocery Shopping</Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}
