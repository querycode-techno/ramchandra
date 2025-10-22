"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import { cn } from "@/lib/utils"


const heroSlides = [
  {
    id: 1,
    title: "Empowering Global Supply Chains",
    subtitle: "End-to-end logistics, advisory, and technology solutions designed for speed, visibility, and growth.",
    image: "/logistics-warehouse-trucks.png",
    secondaryButton: { text: "Contact Us", href: "/contact" }
  },
  {
    id: 2,
    title: "Reliable Transportation Solutions",
    subtitle: "Connecting businesses across India with efficient logistics.",
    image: "/logistics-warehouse-trucks.png",
    secondaryButton: { text: "Learn More", href: "/about-us" }
  },
  {
    id: 3,
    title: "Advanced Control Tower Technology",
    subtitle: "Real-time visibility and proactive management of your shipments.",
    image: "/logistics-warehouse-trucks.png",
    secondaryButton: { text: "Industries", href: "/industries" }
  }
]

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false) // Stop auto-play when user manually navigates
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      {/* Carousel Container */}
      <div className="relative w-full h-full">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-blue-600">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-30"
              />
            </div>


            {/* Content */}
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white text-balance">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 text-pretty">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg rounded-full bg-transparent"
                  >
                    <Link href={slide.secondaryButton.href}>
                      {slide.secondaryButton.text}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full transition-all duration-200",
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/50 hover:bg-white/70"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div>
    </section>
  )
}
