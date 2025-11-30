"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface GalleryItem {
  id: number;
  category: string;
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: "Organization",
    beforeImage: "https://images.unsplash.com/photo-1489171084589-9b5031ebcf9b?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80",
    title: "Walk-In Closet Transformation",
    description: "Complete organization with custom shelving and color coordination",
  },
  {
    id: 2,
    category: "Residential",
    beforeImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80",
    title: "Kitchen Deep Clean",
    description: "Sparkling kitchen with detailed appliance cleaning",
  },
  {
    id: 3,
    category: "Commercial",
    beforeImage: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
    title: "Office Space Refresh",
    description: "Professional office cleaning with attention to detail",
  },
  {
    id: 4,
    category: "Rentals",
    beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
    afterImage: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80",
    title: "Vacation Rental Turnover",
    description: "Guest-ready staging and deep cleaning for 5-star reviews",
  },
];

const categories = ["All", "Organization", "Residential", "Commercial", "Rentals"];

export default function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showBefore, setShowBefore] = useState<{ [key: number]: boolean }>({});

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  const toggleImage = (id: number) => {
    setShowBefore(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            onClick={() => setSelectedCategory(category)}
            className="font-semibold"
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg cursor-pointer"
                onClick={() => toggleImage(item.id)}
              >
                {/* Before/After Images */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={showBefore[item.id] ? 'before' : 'after'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={showBefore[item.id] ? item.beforeImage : item.afterImage}
                      alt={item.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Before/After Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-4 py-2 rounded-full text-sm font-bold shadow-lg ${
                    showBefore[item.id]
                      ? 'bg-red-500 text-white'
                      : 'bg-green-500 text-white'
                  }`}>
                    {showBefore[item.id] ? 'BEFORE' : 'AFTER'}
                  </span>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center px-4">
                    <p className="text-lg font-bold mb-2">Click to toggle</p>
                    <p className="text-sm">See the transformation</p>
                  </div>
                </div>
              </div>

              {/* Item Info */}
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
