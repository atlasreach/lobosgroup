"use client";

import { useEffect } from "react";
import Section from "@/components/Section";

export default function BookingPage() {
  useEffect(() => {
    // Load the booking widget script
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.type = "text/javascript";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div>
      {/* Hero */}
      <Section className="py-12 md:py-20">
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold">
            Book Your Appointment
          </h1>
          <p className="text-xl text-muted-foreground">
            Schedule your cleaning service using our online booking system below
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/booking/aY6AbaBbjfgcaEVwrfKb"
              style={{
                width: "100%",
                border: "none",
                overflow: "hidden",
                minHeight: "600px",
              }}
              scrolling="no"
              id="aY6AbaBbjfgcaEVwrfKb_1764378066526"
              title="Book Appointment"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
