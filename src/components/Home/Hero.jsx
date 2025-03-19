"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
// import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SolarEnergycards from "./Card";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const autoPlayRef = useRef(null);

  const slides = [
    {
      id: 1,
      tagline: "Complete Commercial, Residential & Industrial Solar Systems",
      title: "We Invest In The Future Of Planet!",
      description:
        "As a world wide distributor of solar supplies we endeavor to provide fast and knowledgeable service, we can get you materials by sea or air.",
      image: "src/assets/images/backgrounds/3.jpg",
    },
    {
      id: 2,
      tagline: "Complete Commercial, Residential & Industrial Solar Systems",
      title: "Energize Society By Reliable Energy!",
      description:
        "As a world wide distributor of solar supplies we endeavor to provide fast and knowledgeable service, we can get you materials by sea or air.",
      image: "https://picsum.photos/1920/701",
    },
  ];

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, slides.length]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;

    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  }, [isTransitioning, slides.length]);

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;

    setIsTransitioning(true);
    setCurrentSlide(index);

    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  useEffect(() => {
    const startAutoPlay = () => {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000);
    };

    startAutoPlay();

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [nextSlide]);

  const pauseAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  const resumeAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 5000);
  };

  return (
    <div
      className="relative w-full h-[600px] md:h-[700px] overflow-hidden"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={resumeAutoPlay}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 z-0 transition-opacity duration-500 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image || "/placeholder.svg"}
            alt={`Slide ${index + 1} background`}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/30"></div>
        </div>
      ))}

      <div className="relative z-20 h-full flex flex-col justify-center px-6  max-w-7xl mx-6 md:mx-24">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 flex flex-col justify-center transition-all duration-500 ease-in-out transform ${
              currentSlide === index
                ? "opacity-100 translate-x-0"
                : index < currentSlide ||
                  (currentSlide === 0 && index === slides.length - 1)
                ? "opacity-0 -translate-x-full"
                : "opacity-0 translate-x-full"
            }`}
          >
            <div className="text-white space-y-6 md:w-1/2">
              <p className="text-sm md:text-base font-medium">
                {slide.tagline}
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-base md:text-lg max-w-xl">
                {slide.description}
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-md transition-colors"
                >
                  <span>More About Us</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-2 bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded-md transition-colors"
                >
                  <span>More About Us!</span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 text-white p-2 rounded-full transition-colors"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentSlide === index ? "bg-green-500" : "bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
