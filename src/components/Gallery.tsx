"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Store,
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";

function Gallery({
  images,
  name,
}: {
  images: string[];
  name: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="flex h-[320px] items-center justify-center rounded-3xl bg-gray-100 text-gray-300">
        <Store className="h-14 w-14" />
      </div>
    );
  }

  const [main, ...rest] = images;
  const tiles = rest.slice(0, 4);
  const extra = Math.max(0, rest.length - 4);

  const openSlider = (index: number) => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const closeSlider = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* ================= GALLERY ================= */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-[1.6fr_1fr]">
        {/* MAIN IMAGE */}
        <button
          type="button"
          onClick={() => openSlider(0)}
          className="group relative h-[280px] overflow-hidden rounded-3xl bg-gray-100 text-left sm:h-[430px]"
        >
          <Image
            src={main}
            alt={name}
            fill
            priority
            sizes="(min-width: 640px) 60vw, 100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          {/* Photo count */}
          <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/50 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            <Images className="h-4 w-4" />
            {images.length} Photos
          </div>
        </button>

        {/* SMALL IMAGES */}
        <div className="grid grid-cols-2 gap-3 sm:h-[430px]">
          {tiles.map((src, index) => {
            const actualIndex = index + 1;
            const isLast = index === tiles.length - 1;
            const showMore = isLast && extra > 0;

            return (
              <button
                key={`${src}-${index}`}
                type="button"
                onClick={() => openSlider(actualIndex)}
                className="group relative min-h-[140px] overflow-hidden rounded-3xl bg-gray-100 text-left"
              >
                <Image
                  src={src}
                  alt={`${name} ${actualIndex + 1}`}
                  fill
                  sizes="(min-width: 640px) 20vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10" />

                {/* More photos */}
                {showMore && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55 transition-all duration-300 group-hover:bg-black/65">
                    <div className="text-center text-white">
                      <p className="text-2xl font-bold">
                        +{extra}
                      </p>

                      <p className="mt-1 text-sm font-medium">
                        More Photos
                      </p>
                    </div>
                  </div>
                )}
              </button>
            );
          })}

          {/* Empty slots */}
          {Array.from({
            length: Math.max(0, 4 - tiles.length),
          }).map((_, index) => (
            <div
              key={`empty-${index}`}
              className="min-h-[140px] rounded-3xl bg-gray-100"
            />
          ))}
        </div>
      </div>

      {/* ================= FULL SCREEN SLIDER ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/95">
          {/* Close */}
          <button
            type="button"
            onClick={closeSlider}
            className="absolute right-5 top-5 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Counter */}
          <div className="absolute left-5 top-5 z-50 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
            {activeIndex + 1} / {images.length}
          </div>

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>
          )}

          {/* Main slider image */}
          <div className="relative h-[75vh] w-[85vw] max-w-6xl">
            <Image
              src={images[activeIndex]}
              alt={`${name} ${activeIndex + 1}`}
              fill
              priority
              sizes="85vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight className="h-7 w-7" />
            </button>
          )}

          {/* ================= THUMBNAILS ================= */}
          <div className="absolute bottom-4 left-1/2 flex max-w-[90vw] -translate-x-1/2 gap-2 overflow-x-auto rounded-2xl bg-black/40 p-2 backdrop-blur-md">
            {images.map((src, index) => (
              <button
                key={`${src}-thumb-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-xl border-2 transition ${
                  activeIndex === index
                    ? "border-white"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <Image
                  src={src}
                  alt={`${name} thumbnail ${index + 1}`}
                  fill
                  sizes="80px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;