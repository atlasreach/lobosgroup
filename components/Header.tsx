"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Mobile Layout */}
        <div className="flex md:hidden flex-col py-4 bg-white">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
            <div className="flex flex-col items-center gap-1">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="Lobos Group Cleaning Service"
                  width={120}
                  height={120}
                  className="object-contain"
                />
              </Link>
              <a href="tel:504-447-4392">
                <Button variant="outline" className="text-base font-semibold">
                  (504) 447-4392
                </Button>
              </a>
            </div>
            <div className="w-10" /> {/* Spacer for centering */}
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="flex flex-col space-y-4 mt-4 pb-4 border-t pt-4">
              <Link
                href="/"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/pricing"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/faq"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/book"
                className="text-lg font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-3 pt-2">
                <a href="tel:504-447-4392" className="flex-1">
                  <Button size="sm" variant="outline" className="w-full">
                    Call Us
                  </Button>
                </a>
                <Link href="/book" className="flex-1">
                  <Button size="sm" className="w-full">
                    Book Now
                  </Button>
                </Link>
              </div>
            </nav>
          )}
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden md:flex h-28 items-center justify-between gap-8">
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Lobos Group Cleaning Service"
              width={100}
              height={100}
              className="object-contain"
            />
          </Link>

          <nav className="flex items-center justify-center space-x-10 text-lg font-bold flex-1">
            <Link
              href="/"
              className="transition-all hover:text-primary hover:scale-105 text-foreground"
            >
              HOME
            </Link>
            <div className="relative group">
              <button className="transition-all hover:text-primary hover:scale-105 text-foreground flex items-center gap-2 font-bold">
                SERVICES
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {/* Dropdown Menu */}
              <div className="absolute left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border-2 border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-3">
                  <Link
                    href="/services/organization"
                    className="block px-5 py-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-bold text-base">Organization Services</div>
                    <div className="text-sm text-muted-foreground mt-0.5">Any and every space</div>
                  </Link>
                  <Link
                    href="/services/residential"
                    className="block px-5 py-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-bold text-base">Residential Cleaning</div>
                    <div className="text-sm text-muted-foreground mt-0.5">Deep clean your home</div>
                  </Link>
                  <Link
                    href="/services/commercial"
                    className="block px-5 py-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-bold text-base">Commercial Cleaning</div>
                    <div className="text-sm text-muted-foreground mt-0.5">Professional business solutions</div>
                  </Link>
                  <Link
                    href="/services/short-term-rentals"
                    className="block px-5 py-3 hover:bg-primary/5 transition-colors"
                  >
                    <div className="font-bold text-base">Short-Term Rentals</div>
                    <div className="text-sm text-muted-foreground mt-0.5">Turnover & property management</div>
                  </Link>
                  <Link
                    href="/services"
                    className="block px-5 py-3 hover:bg-primary/5 transition-colors border-t-2 border-gray-100 mt-1"
                  >
                    <div className="font-bold text-primary text-base">View All Services →</div>
                  </Link>
                </div>
              </div>
            </div>
            <Link
              href="/pricing"
              className="transition-all hover:text-primary hover:scale-105 text-foreground"
            >
              PRICING
            </Link>
            <Link
              href="/faq"
              className="transition-all hover:text-primary hover:scale-105 text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/book"
              className="transition-all hover:text-primary hover:scale-105 text-foreground"
            >
              CONTACT
            </Link>
          </nav>

          <div className="flex items-center space-x-3 flex-shrink-0">
            <a href="tel:504-447-4392">
              <Button variant="outline" size="lg" className="font-bold text-base">
                (504) 447-4392
              </Button>
            </a>
            <Link href="/book">
              <Button size="lg" className="font-bold text-base px-8">
                BOOK NOW
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
