"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

export default function OurClients() {
  const clientLogos = [
    { src: "/brands/flipkart.png", alt: "Flipkart" },
    { src: "/brands/amazon.png", alt: "Amazon" },
    { src: "/brands/messho.png", alt: "Messho" },
    { src: "/brands/minutes.png", alt: "Minutes" },
    { src: "/brands/blinkit.png", alt: "Blinkit" },
    { src: "/brands/dabur.png", alt: "Dabur" },
    { src: "/brands/delhivery.png", alt: "Delhivery" },
    { src: "/brands/ecom-express.png", alt: "Ecom Express" },
    { src: "/brands/elasticrun.png", alt: "Elasticrun" },
    { src: "/brands/jumbotail.png", alt: "Jumbotail" },
    { src: "/brands/loadshare.png", alt: "Loadshare" },
    { src: "/brands/methodex.png", alt: "Ecom Express" },
    { src: "/brands/physicswallah.png", alt: "Physics Wallah" },
    { src: "/brands/pidilite-seeklogo.png", alt: "Ecom Express" },
    { src: "/brands/shadowfax.png", alt: "Ecom Express" },
    { src: "/brands/tvsupply.png", alt: "Ecom Express" },
    { src: "/brands/udaan.png", alt: "Ecom Express" },
    { src: "/brands/xpIndia.png", alt: "Ecom Express" },
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
                  <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
                    <img
                      src={logo.src || "/placeholder.svg"}
                      alt={logo.alt}
                      className="w-full h-16 md:h-20 object-contain"
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
