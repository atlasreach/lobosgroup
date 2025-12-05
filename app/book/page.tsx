"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Section from "@/components/Section";
import BookingForm from "@/components/BookingForm";

function BookingFormWrapper() {
  const searchParams = useSearchParams();
  const service = searchParams.get("service") || "residential";

  return <BookingForm defaultService={service} />;
}

export default function BookingPage() {
  return (
    <div>
      <Section className="py-12 md:py-20">
        <Suspense fallback={<div className="text-center">Loading form...</div>}>
          <BookingFormWrapper />
        </Suspense>
      </Section>
    </div>
  );
}
