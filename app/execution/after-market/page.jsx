"use client"

import Header from "@/components/header"
import SiteFooter from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, DollarSign, Building, Clock, Monitor, Users } from "lucide-react"
import Image from "next/image"

export default function AfterMarketManagement() {

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
      <section className="bg-blue-900 py-32 text-white md:py-32">
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-5xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
              After Market Management
            </h1>
          </div>
        </div>
      </section>

      {/* Aftermarket Excellence Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <div className="order-2 lg:order-1 space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 leading-tight">
                Aftermarket Excellence: Let's Partner for Streamlined Supply Chain Execution
              </h2>
              <p className="text-gray-700 text-lg lg:text-xl leading-relaxed text-justify">
                Aftermarket management encompasses the strategic oversight and execution of post-sale activities that extend throughout the entire product lifecycle. This comprehensive approach involves managing spare parts inventory, handling warranty claims, processing returns, and ensuring optimal customer support long after the initial sale. At Ramchandra Transport, we specialize in providing end-to-end aftermarket solutions that optimize inventory levels, reduce operational costs, and enhance customer satisfaction. Our aftermarket management services are designed to create sustainable revenue streams while maintaining cost-effective operations and ensuring long-term customer relationships.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center overflow-hidden rounded-3xl bg-blue-50 shadow-2xl sm:h-80 sm:w-80 lg:h-96 lg:w-96">
                <svg
                  viewBox="0 0 200 200"
                  className="absolute inset-0 h-full w-full text-blue-100"
                  aria-hidden="true"
                >
                  <path
                    fill="currentColor"
                    d="M43.1,-54.3C55.8,-43.2,66.7,-28.1,69.4,-11.5C72.2,5,66.8,22.8,56.5,38.2C46.2,53.6,30.9,66.6,13.3,70.4C-4.3,74.2,-24.1,68.9,-39.5,57.1C-54.9,45.3,-65.9,27,-69.7,7.3C-73.5,-12.3,-70.1,-32.6,-58.7,-45.3C-47.4,-58,-28.2,-63.1,-10.1,-60.6C8,-58.1,16,-48,27.4,-45.4C38.8,-42.8,54.3,-47.8,43.1,-54.3Z"
                  />
                </svg>
                <div className="relative z-10 flex flex-col items-center gap-4 text-center">
                  <Shield className="h-12 w-12 text-blue-600" aria-hidden="true" />
                  <p className="max-w-xs text-base text-blue-900">
                    End-to-end aftermarket solutions built on reliability, proactive service, and measurable impact.
                  </p>
                  <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
                    <span className="h-2 w-2 rounded-full bg-blue-500" />
                    Powered by RTS
                  </div>
                </div>
              </div>
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
