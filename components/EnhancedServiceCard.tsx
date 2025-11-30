"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { useEffect, useRef } from "react";

interface EnhancedServiceCardProps {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  imageSrc: string;
  videoSrc?: string;
  featured?: boolean;
}

export default function EnhancedServiceCard({
  icon: Icon,
  title,
  subtitle,
  description,
  href,
  imageSrc,
  videoSrc,
  featured = false,
}: EnhancedServiceCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              // Autoplay failed, video will need user interaction
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.03 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-full"
    >
      <Link href={href}>
        <Card className={`overflow-hidden h-full group cursor-pointer ${
          featured ? "border-primary border-2 shadow-xl" : "border-2 hover:border-primary/50"
        } transition-all duration-300 hover:shadow-2xl`}>
          {/* Image/Video Section */}
          <div className="relative h-64 overflow-hidden">
            {videoSrc ? (
              <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>
            ) : (
              <>
                <Image
                  src={imageSrc}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Overlay - Only for images */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                {/* Title Overlay - Only for images */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center">
                  <h3 className="text-2xl font-bold mb-2 tracking-wide">{title}</h3>
                  <p className="text-base text-gray-100 font-light italic tracking-wide">{subtitle}</p>
                </div>
              </>
            )}
          </div>

          {/* Content Section */}
          <CardContent className="p-6">
            {videoSrc && (
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold mb-2 tracking-wide">{title}</h3>
                <p className="text-base text-muted-foreground font-light italic tracking-wide">{subtitle}</p>
              </div>
            )}
            <p className="text-foreground/80 mb-4 min-h-[3rem] leading-relaxed font-medium">
              {description}
            </p>
            <Button
              variant={featured ? "default" : "outline"}
              className="w-full group-hover:bg-primary group-hover:text-white transition-all"
            >
              Learn More →
            </Button>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
