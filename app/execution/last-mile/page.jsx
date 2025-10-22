"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ShoppingCart, DollarSign, FileText, TrendingUp, Code, Users, X } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function LastMileDelivery() {
  const [selectedOffering, setSelectedOffering] = useState(null)

  const benefits = [
    {
      icon: ShoppingCart,
      title: "Efficient Operations",
      description: "Streamlined processes for maximum efficiency"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Competitive pricing for optimal value"
    },
    {
      icon: FileText,
      title: "Streamlined Distribution",
      description: "Optimized distribution networks"
    },
    {
      icon: TrendingUp,
      title: "Market Agility",
      description: "Quick response to market demands"
    },
    {
      icon: Code,
      title: "Technology Integration",
      description: "Technology-driven solutions"
    },
    {
      icon: Users,
      title: "Customer Retention",
      description: "Building lasting customer relationships"
    }
  ]

  const offerings = [
    {
      title: "Hyper Local Delivery",
      image: "/placeholder.jpg",
      description: "Fast and reliable local delivery services",
      detailedDescription: "Hyperlocal delivery stands as a specialized and highly targeted service tailored to meet the swift delivery needs within specific local or limited areas. It is designed with a singular focus on achieving exceptionally fast delivery times, making it an ideal choice for transporting items that demand rapid and efficient transportation. This delivery model is particularly well-suited for handling a diverse range of products, including perishable goods like vegetables and fruits, everyday essentials like groceries, as well as pharmaceutical items such as medicines. Its niche lies in catering to the immediate needs of customers within a confined geographic area, ensuring that their orders are promptly fulfilled, thereby enhancing customer satisfaction and loyalty. The unique characteristic of hyperlocal delivery is its ability to streamline the logistics process for small-scale products, where speed and reliability are paramount.",
      features: [
        "30-60 minute delivery window",
        "Real-time tracking and updates",
        "Local partner network",
        "Same-day delivery guarantee",
        "24/7 customer support"
      ]
    },
    {
      title: "Dark Store Service",
      image: "/placeholder.jpg", 
      description: "Efficient warehouse and storage solutions",
      detailedDescription: "Dark stores, also referred to as dark supermarkets or virtual supermarkets, represent a groundbreaking concept in the realm of retail fulfillment. These specialized fulfillment centers are purposefully designed to cater exclusively to online orders, with no provision for walk-in customers. The rise of dark stores is a direct response to the surging demand for efficient and seamless online order fulfillment in the retail industry. ",
      features: [
        "Strategic urban locations",
        "High-speed order processing",
        "Advanced inventory management",
        "Temperature-controlled storage",
        "Automated picking systems"
      ]
    },
    {
      title: "Same Day Delivery",
      image: "/placeholder.jpg",
      description: "Quick same-day delivery for urgent shipments",
      detailedDescription: "Just in time delivery is a strategy that ensures goods are delivered to the recipient exactly when they are needed, eliminating the need for excess inventory storage. This approach optimizes supply chain efficiency by reducing carrying costs and minimizing waste. JIT delivery enables businesses to respond swiftly to fluctuating demand and maintain lean operations. Customers benefit from timely deliveries, ensuring they receive products precisely when required, enhancing their overall satisfaction.",
      features: [
        "Same-day delivery guarantee",
        "Multi-modal transportation",
        "Priority handling",
        "Extended cut-off times",
        "Insurance coverage included"
      ]
    }
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        <div className="absolute inset-0 z-0">
          <Image
            src="/logistics-warehouse-trucks.png"
            alt="Logistics background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative z-10 text-center text-white px-6 sm:px-8 lg:px-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Last Mile Delivery
          </h1>
          
        </div>
      </section>

      {/* Last Mile Delivery Service Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/logistics-warehouse-trucks.png"
                alt="Last mile delivery service"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Last Mile Delivery Service in Patna
              </h2>
              <p className="text-xl lg:text-2xl text-blue-800 font-medium leading-relaxed">
                Delivering Satisfaction, Every Mile, Every Time.
              </p>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">
                Last mile delivery is the crucial final step in the logistics chain, involving the transportation of goods from a distribution center or warehouse to the end customer. At Patliputra Logistics, we specialize in providing efficient and reliable last mile delivery services that ensure your packages reach customers quickly and safely. Our comprehensive last mile solutions are designed to handle the complexities of urban delivery while maintaining the highest standards of service quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Benefits of Last Mile Delivery
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon
              return (
                <Card key={index} className="text-center p-8 bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl">
                  <CardHeader className="pb-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-blue-600 rounded-full">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-xl lg:text-2xl font-semibold text-gray-800 leading-tight">
                      {benefit.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-600 text-lg leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight mb-6">
              Our Offerings
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {offerings.map((offering, index) => (
              <Dialog key={index}>
                <DialogTrigger asChild>
                  <Card className="text-center bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden cursor-pointer hover:scale-105 group">
                    <div className="aspect-video relative">
                      <Image
                        src={offering.image}
                        alt={offering.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader className="p-6">
                      <CardTitle className="text-xl lg:text-2xl font-semibold text-blue-900 leading-tight group-hover:text-blue-600 transition-colors duration-300">
                        {offering.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0 pb-6">
                      <p className="text-gray-600 text-lg leading-relaxed">{offering.description}</p>
                    </CardContent>
                  </Card>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-bold text-blue-900 mb-4">
                      {offering.title}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6">
                    <div className="relative aspect-video rounded-lg overflow-hidden">
                      <Image
                        src={offering.image}
                        alt={offering.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-lg leading-relaxed">
                        {offering.detailedDescription}
                      </p>
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {offering.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  )
}