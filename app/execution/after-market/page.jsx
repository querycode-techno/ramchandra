"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Shield, DollarSign, Building, Clock, Monitor, Users } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function AfterMarketManagement() {
  const [selectedOffering, setSelectedOffering] = useState(null)

  const benefits = [
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: "Comprehensive risk management strategies"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Optimized cost management solutions"
    },
    {
      icon: Building,
      title: "Streamlined Distribution",
      description: "Efficient distribution network management"
    },
    {
      icon: Clock,
      title: "Comprehensive Support",
      description: "Round-the-clock customer support"
    },
    {
      icon: Monitor,
      title: "Supply Chain Resilience",
      description: "Building resilient supply chain operations"
    },
    {
      icon: Users,
      title: "Customer Retention",
      description: "Enhanced customer satisfaction and retention"
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
            After Market Management
          </h1>
          
        </div>
      </section>

      {/* Aftermarket Excellence Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <Image
                src="/logistics-warehouse-trucks.png"
                alt="Aftermarket management service"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Aftermarket Excellence: Let's Partner for Streamlined Supply Chain Execution
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Aftermarket management encompasses the strategic oversight and execution of post-sale activities that extend throughout the entire product lifecycle. This comprehensive approach involves managing spare parts inventory, handling warranty claims, processing returns, and ensuring optimal customer support long after the initial sale. At Patliputra Logistics, we specialize in providing end-to-end aftermarket solutions that optimize inventory levels, reduce operational costs, and enhance customer satisfaction. Our aftermarket management services are designed to create sustainable revenue streams while maintaining cost-effective operations and ensuring long-term customer relationships.
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
              Benefits of After Market Management
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
    

      <SiteFooter />
    </div>
  )
}
