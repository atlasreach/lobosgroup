"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Load the chat widget script
    const script = document.createElement("script");
    script.src = "https://beta.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", "692c7250d47c13700786582e");
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold">Lobos Group</h3>
            <p className="text-sm text-muted-foreground">
              Deep cleaning & home reset for busy New Orleans homes.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/organization"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Organization Services
                </Link>
              </li>
              <li>
                <Link
                  href="/services/residential"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Residential Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/commercial"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Commercial Cleaning
                </Link>
              </li>
              <li>
                <Link
                  href="/services/short-term-rentals"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Short-Term Rentals
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="tel:504-447-4392"
                  className="hover:text-foreground transition-colors"
                >
                  (504) 447-4392
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@lobosgroup.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@lobosgroup.com
                </a>
              </li>
              <li>New Orleans, LA</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Lobos Group Cleaning Service. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
