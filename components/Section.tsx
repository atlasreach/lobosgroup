import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "default" | "muted";
}

export default function Section({
  children,
  className,
  background = "default",
}: SectionProps) {
  return (
    <section
      className={cn(
        "py-16 px-4",
        background === "muted" && "bg-muted/50",
        className
      )}
    >
      <div className="container mx-auto max-w-7xl">{children}</div>
    </section>
  );
}
