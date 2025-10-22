"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function OurClients() {
  const clientLogos = [
    { src: "/placeholder.svg?key=client1", alt: "Client Logo 1" },
    { src: "/placeholder.svg?key=client2", alt: "Client Logo 2" },
    { src: "/placeholder.svg?key=client3", alt: "Client Logo 3" },
    { src: "/placeholder.svg?key=client4", alt: "Client Logo 4" },
    { src: "/placeholder.svg?key=client5", alt: "Client Logo 5" },
    { src: "/placeholder.svg?key=client6", alt: "Client Logo 6" },
  ]

  return (
    <section className="py-16 md:py-24 bg-background text-foreground">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Our Valued Clients</h2>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-pretty">
          We are proud to partner with leading companies across various industries, delivering exceptional logistics
          solutions.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {clientLogos.map((logo, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6">
                <div className="p-2 md:p-4">
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow duration-300">
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      className="w-full h-16 md:h-20 object-contain grayscale opacity-75 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  )
}
