"use client";

import { useEffect } from "react";
import Section from "@/components/Section";

export default function BookingPage() {
  useEffect(() => {
    // Load the form embed script
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
            Request a Quote
          </h1>
          <p className="text-xl text-muted-foreground">
            Fill out the form below and a member of our team will reach out to you quickly
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg border shadow-sm p-6">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/wsAYIWjdjsclmrbHgTf6"
              style={{
                width: "100%",
                height: "1772px",
                border: "none",
                borderRadius: "3px"
              }}
              id="inline-wsAYIWjdjsclmrbHgTf6"
              data-layout='{"id":"INLINE"}'
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Form 5"
              data-height="1772"
              data-layout-iframe-id="inline-wsAYIWjdjsclmrbHgTf6"
              data-form-id="wsAYIWjdjsclmrbHgTf6"
              title="Request Quote Form"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
