"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const banners = [
  {
    id: 1,
    title: "Beds",
    subtitle: "From ₹8,999",
    description: "Wooden Street, Sleepyhead & more",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "#1A73E8", // Blue
  },
  {
    id: 2,
    title: "Smartphones",
    subtitle: "From ₹6,999",
    description: "Latest models with great offers",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "#FF9933", // Saffron
  },
  {
    id: 3,
    title: "Electronics",
    subtitle: "Up to 80% Off",
    description: "Laptops, TVs, Cameras & more",
    image: "/placeholder.svg?height=400&width=600",
    bgColor: "#0F4C81", // Dark Blue
  },
]

export function HeroBanner() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative h-80 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {banners.map((banner) => (
          <div
            key={banner.id}
            className="min-w-full h-full flex items-center justify-between px-8 relative overflow-hidden"
            style={{ backgroundColor: banner.bgColor }}
          >
            {/* Decorative elements */}
            <div
              className="absolute top-8 left-20 w-8 h-8 rounded-full"
              style={{ backgroundColor: "rgba(255, 153, 51, 0.2)" }}
            ></div>
            <div className="absolute top-16 right-32 w-6 h-6 bg-white/20 rounded-full"></div>
            <div
              className="absolute bottom-12 left-32 w-4 h-4 rounded-full"
              style={{ backgroundColor: "rgba(255, 153, 51, 0.3)" }}
            ></div>
            <div className="absolute bottom-20 right-20 w-12 h-12 bg-white/10 rounded-full"></div>

            {/* Decorative shapes */}
            <div
              className="absolute top-12 right-48 w-16 h-2 rounded-full rotate-45"
              style={{ backgroundColor: "rgba(255, 153, 51, 0.3)" }}
            ></div>
            <div className="absolute bottom-16 left-48 w-12 h-2 bg-white/30 rounded-full -rotate-45"></div>

            <div className="flex items-center justify-between w-full max-w-6xl mx-auto">
              <div className="text-white z-10">
                <h2 className="text-4xl font-bold mb-2">{banner.title}</h2>
                <p className="text-2xl font-semibold mb-2">{banner.subtitle}</p>
                <p className="text-lg opacity-90">{banner.description}</p>
              </div>

              <div className="relative z-10">
                <Image
                  src={banner.image || "/placeholder.svg?height=300&width=400"}
                  alt={banner.title}
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${index === currentSlide ? "bg-white" : "bg-white/50"}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}
