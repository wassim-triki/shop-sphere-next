"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

export default function ImageGallery({
  images = [
    "https://cdn.sanity.io/images/czbt6ut5/production/dbfe6b5885ddfe0432bb9e2979faa341ca271b81-1728x2160.webp",
    "https://cdn.sanity.io/images/czbt6ut5/production/a8b96f1dbe484a43cf7aec56660e58e998ccd2fc-1728x2160.webp",
    "https://cdn.sanity.io/images/czbt6ut5/production/a9445bdbbd4554fb8ba7ef90f0a41384cb31bdf6-1728x2160.jpg",
  ],
}: {
  images: string[];
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-3xl px-4">
      <div className="relative flex aspect-[3/3] w-full items-center justify-center overflow-hidden rounded-lg bg-gray-100">
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex] ?? ""}
            alt={`Product image ${currentIndex + 1}`}
            className="object-contain"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 z-10 h-10 w-10 rounded-full bg-white/60 text-gray-700 hover:bg-white/90"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 z-10 h-10 w-10 rounded-full bg-white/60 text-gray-700 hover:bg-white/90"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>
      <div className="flex gap-2 py-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`flex-shrink-0 rounded-lg p-0.5 transition-all duration-200 ease-in-out focus:outline-none ${
              index === currentIndex
                ? "ring-2 ring-primary ring-offset-2"
                : "hover:opacity-75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          >
            <div className="relative h-24 w-24 overflow-hidden rounded-md">
              <Image
                src={img}
                alt={`Thumbnail ${index + 1}`}
                className="object-cover"
                fill
                sizes="96px"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
